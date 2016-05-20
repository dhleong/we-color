(ns we-color.handlers
    (:require [re-frame.core :refer [register-handler path trim-v debug after]]
              [we-color.db :as db]
              [we-color.parse :refer [parse-android parse-ios]]
              [we-color.format :refer [->android ->ios]]))

;;
;; Middleware
;;

(defn handle-android
  [handler]
  (fn parse-android-handler
    [db v]
    (let [raw-color (first v)]
      (handler
        db
        [raw-color (parse-android raw-color)]))))

(defn handle-ios
  [handler]
  (fn parse-ios-handler
    [db v]
    (let [raw-color (first v)]
      (handler
        db
        [raw-color (parse-ios raw-color)]))))

;;
;; Handlers
;;

(register-handler
  :initialize-db
  (fn  [_ _]
    db/default-db))

(register-handler
  :android
  [trim-v handle-android]
  (fn [db [android parsed]]
    (assoc db 
           :android android
           :ios (->ios parsed))))

(register-handler
  :ios
  [trim-v handle-ios]
  (fn [db [ios parsed]]
    (println "parsed=" parsed)
    (assoc db 
           :ios ios
           :android (->android parsed))))
