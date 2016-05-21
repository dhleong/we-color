(ns ^{:author "Daniel Leong"
      :doc "Color formatters"}
  we-color.format
  (:require [goog.string :as gstring]
            [goog.string.format]))

(defn ->hex
  [n]
  (when n
    (let [n (int (* n 255))
          base (.toUpperCase (.toString n 16))]
      (if (< (count base) 2)
        (str "0" base)
        base))))

(defn ->perc
  [n]
  (when n
    (cond
      ;; make simple cases simple:
      (= 1 n) "1"
      (= 0 n) "0"
      ;; else, format nicely:
      :else (gstring/format "%.3f" n))))

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
