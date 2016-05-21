(ns ^{:author "Daniel Leong"
      :doc "Color formatting"}
  we-color.format
  #?(:cljs (:require [goog.string :refer [format]]
                     [goog.string.format])))

;;
;; Utils
;;

(defn- hex-format
  [n]
  #?(:cljs (let [base (.toString n 16)]
            (if (< n 16)
              (str "0" base)
              base))
     :clj (format "%02x" n)))

(defn ->hex
  [n]
  (if n
    (->> n
         (* 255)
         int
         hex-format
         (.toUpperCase))
    ;; no value? be zero
    "00"))

(defn ->perc
  [n]
  (cond
    ;; no actual value? pick zero (but be obvious)
    ;;  so it is noticable
    (nil? n) "0.000"
    ;; make simple cases simple:
    (= 1 n) "1"
    (= 0 n) "0"
    ;; else, format nicely:
    :else (format "%.3f" n)))

;;
;; Public interface
;;

(defn ->ios
  "Given a parsed color, format it in iOS style"
  [color & [fmt]]
  (when-let [{:keys [red green blue alpha]} color]
    (case fmt
      :swift
      (str "UIColor(red: " (->perc red)
           ", green: " (->perc green)
           ", blue: " (->perc blue)
           ", alpha: " (->perc alpha)
           ")")
      ;; else
      (str "[UIColor colorWithRed:" (->perc red)
           " green:" (->perc green)
           " blue:" (->perc blue)
           " alpha:" (->perc alpha)
           "]"))))

(defn ->android
  [color & [fmt]]
  (when-let [{:keys [alpha red green blue]} color]
    (let [hex
          (str (.toLowerCase 
                 (->hex alpha))
               (->hex red)
               (->hex green)
               (->hex blue))]
      (case fmt
        :res (str "<color name=\"color\">#" hex "</color>")
        :hex (str "#" hex)
        :int (str "0x" hex)
        ;; else, just the raw hex
        hex))))
