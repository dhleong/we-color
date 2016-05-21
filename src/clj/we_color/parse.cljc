(ns ^{:author "Daniel Leong"
      :doc "Color parsing"}
  we-color.parse
  (:require [clojure.string :as str]))

(def ios-objc-regex 
  #"UIColor colorWithRed:([.0-9]+) green:([.0-9]+) blue:([.0-9]+) alpha:([.0-9]+)")
(def ios-swift-regex 
  #"UIColor\(red:\s*([.0-9]+).*,.*green:\s*([.0-9]+).*,.*blue:\s*([.0-9]+).*,.*alpha:\s*([.0-9]+)")

(defn clean-android
  [raw-android]
  (str/replace raw-android
               #"(#|0x)"
               ""))

(defn hex->int
  [raw]
  #?(:cljs (js/parseInt raw 16)
     :clj (Integer/parseInt raw 16)))

(defn str->float
  [raw]
  #?(:cljs (js/parseFloat raw)
     :clj (Float/parseFloat raw)))

;;
;; Public interface
;;

(defn parse-android
  "Given a raw android number (as string),
  return the parsed map"
  [raw-android]
  (when raw-android
    (when-let [values 
               (->> raw-android
                    clean-android
                    (partition 2)
                    (map (partial apply str))
                    (map hex->int)
                    (map #(/ % 255)))]
      [(zipmap
         [:alpha :red :green :blue]
         values)
       (cond 
         (= \# (first raw-android)) :hex
         (str/starts-with? raw-android "0x") :int
         :else :plain)])))

(defn parse-ios
  [raw-ios]
  (when-let [[results kind] 
             (some
               (fn [[regex kind]]
                 (when-let [match (re-seq regex raw-ios)]
                   [match kind]))
               [[ios-objc-regex :objective-c]
                [ios-swift-regex :swift]])]
    [(->> results
          first
          next
          (map str->float)
          (zipmap [:red :green :blue :alpha]))
     kind]))

