(ns we-color.handlers
    (:require [re-frame.core :refer [dispatch register-handler path trim-v debug after]]
              [we-color.db :as db]
              [we-color.parse :refer [parse-android parse-ios]]
              [we-color.format :refer [->android ->ios]]))

;;
;; Middleware
;;

(defn handle-with
  "Generate a color-parsing middleware that uses the 
  provided parse function"
  [parser]
  (fn
    [handler]
    (fn parse-handler
      [db v]
      (let [raw-color (first v)]
        (handler
          db
          (cons raw-color (parser raw-color)))))))

;;
;; Handlers
;;

(register-handler
  :initialize-db
  (fn  [_ _]
    db/default-db))

(register-handler
  :android
  [trim-v (handle-with parse-android)]
  (fn [db [android parsed fmt]]
    (let [ios-fmt (-> db :formats :ios)]
      (assoc db 
             :android android
             :ios (->ios parsed ios-fmt)
             :formats
             {:ios ios-fmt
              :android fmt}))))

(register-handler
  :ios
  [trim-v (handle-with parse-ios)]
  (fn [db [ios parsed fmt]]
    (let [and-fmt (-> db :formats :android)]
      (assoc db 
             :ios ios
             :android (->android parsed and-fmt)
             :formats
             {:ios fmt
              :android and-fmt}))))

(register-handler
  :format
  [trim-v]
  (fn [db [platform new-fmt]]
    (assoc-in db [:formats platform] new-fmt)))

(register-handler
  :invalidate
  [trim-v]
  (fn [db [platform]]
    (let [platform (case platform
                     :ios :android
                     :android :ios)]
      ;; dispatch the *opposite* platform,
      ;;  so ours gets updated
      (dispatch [platform (get db platform)]))
    db))
