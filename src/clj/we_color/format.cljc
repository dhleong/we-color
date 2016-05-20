(ns ^{:author "Daniel Leong"
      :doc "Color formatting"}
  we-color.format
  #?(:cljs (:require [goog.string :refer [format]]
                     [goog.string.format])))

;;
;; Utils
;;

(defn ->hex
  [n]
  (when n
    (->> n
         (* 255)
         int
         (format "%02x")
         (.toUpperCase))))

(defn ->perc
  [n]
  (when n
    (cond
      ;; make simple cases simple:
      (= 1 n) "1"
      (= 0 n) "0"
      ;; else, format nicely:
      :else (format "%.3f" n))))

;;
;; Public interface
;;

(defn ->ios
  "Given a parsed color, format it in iOS style"
  [color]
  (when color
    (str "[UIColor colorWithRed:" (->perc (:red color))
         " green:" (->perc (:green color))
         " blue:" (->perc (:blue color))
         " alpha:" (->perc (:alpha color))
         "]")))

(defn ->android
  [color]
  (when color
    (str (when-let [alpha (:alpha color)]
           (.toLowerCase 
             (->hex alpha)))
         (->hex (:red color))
         (->hex (:green color))
         (->hex (:blue color)))))
