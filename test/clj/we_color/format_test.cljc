(ns we-color.format-test
  (:require
    #?(:cljs [cljs.test    :as t :refer-macros [is are deftest testing]]
       :clj  [clojure.test :as t :refer        [is are deftest testing]])
    [we-color.format :refer :all]))

(deftest ->hex-test
  (testing "number->hex"
    (is (= "FF" (->hex 1)))
    (is (= "00" (->hex 0)))
    (is (= "80" (->hex 0.504))))
  (testing "No value"
    (is (= "00" (->hex nil)))))

(deftest ->perc-test
  (testing "number->perc"
    (is (= "1" (->perc 1)))
    (is (= "0" (->perc 0)))
    (is (= "0.505" (->perc 0.50499))))
  (testing "No value"
    (is (= "0.000" (->perc nil)))))

(deftest ->ios-test
  (testing "Format iOS number"
    (is (= (str "[UIColor colorWithRed:0.100"
                " green:0.200"
                " blue:0.300"
                " alpha:0.400]")
           (->ios {:red 0.1
                   :green 0.2
                   :blue 0.3
                   :alpha 0.4}))))
  (testing "Format swift number"
    (is (= (str "UIColor(red: 0.100"
                ", green: 0.200"
                ", blue: 0.300"
                ", alpha: 0.400)")
           (->ios {:red 0.1
                   :green 0.2
                   :blue 0.3
                   :alpha 0.4}
                  :swift)))))

(deftest ->android-test
  (testing "Format Android number"
    (is (= "6619334C"
           (->android {:red 0.1
                       :green 0.2
                       :blue 0.3
                       :alpha 0.4}))))
  (testing "Format Android hex"
    (is (= "#6619334C"
           (->android {:red 0.1
                       :green 0.2
                       :blue 0.3
                       :alpha 0.4}
                      :hex))))
  (testing "Format Android resource"
    (is (= "<color name=\"color\">#6619334C</color>"
           (->android {:red 0.1
                       :green 0.2
                       :blue 0.3
                       :alpha 0.4}
                      :res))))
  (testing "Format Android int literal"
    (is (= "0x6619334C"
           (->android {:red 0.1
                       :green 0.2
                       :blue 0.3
                       :alpha 0.4}
                      :int)))))
