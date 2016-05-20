(ns we-color.format-test
  (:require
    #?(:cljs [cljs.test    :as t :refer-macros [is are deftest testing]]
       :clj  [clojure.test :as t :refer        [is are deftest testing]])
    [we-color.format :refer :all]))

(deftest ->hex-test
  (testing "number->hex test"
    (is (= "FF" (->hex 1)))
    (is (= "00" (->hex 0)))
    (is (= "80" (->hex 0.504)))))

(deftest ->perc-test
  (testing "number->perc test"
    (is (= "1" (->perc 1)))
    (is (= "0" (->perc 0)))
    (is (= "0.505" (->perc 0.50499)))))

(deftest ->ios-test
  (testing "Format iOS number"
    (is (= (str "[UIColor colorWithRed:0.100"
                " green:0.200"
                " blue:0.300"
                " alpha:0.400]")
           (->ios {:red 0.1
                   :green 0.2
                   :blue 0.3
                   :alpha 0.4})))))

(deftest ->android-test
  (testing "Format Android number"
    (is (= "6619334C"
           (->android {:red 0.1
                       :green 0.2
                       :blue 0.3
                       :alpha 0.4})))))
