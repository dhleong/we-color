(ns we-color.parse-test
  (:require [clojure.test :refer :all]
            [we-color.parse :refer :all]))

(defn float= [x y]
  ;; we're very lenient because colors
  ;;  don't have a very high precision
  (<= (Math/abs (- x y)) 0.002))

(deftest hex->int-test
  (testing "Hex->int"
    (is (= 255 (hex->int "ff")))
    (is (= 255 (hex->int "FF")))))

(deftest str->float-test
  (testing "str->float"
    (is (= 123. (str->float "123")))
    (is (float= 0.24 (str->float ".24")))))

(deftest parse-android-test
  (testing "Naked number"
    (let [[parsed fmt] (parse-android "80AABBCC")
          {:keys [red green blue alpha]} parsed]
      (is (= :plain fmt))
      (is (float= 0.5 alpha))
      (is (float= 0.667 red))
      (is (float= 0.733 green))
      (is (float= 0.8 blue))))
  (testing "Hash-tagged"
    (let [[parsed fmt] (parse-android "#80AABBCC")
          {:keys [red green blue alpha]} parsed]
      (is (= :hex fmt))
      (is (float= 0.5 alpha))
      (is (float= 0.667 red))
      (is (float= 0.733 green))
      (is (float= 0.8 blue))))
  (testing "Hex int literal"
    (let [[parsed fmt] (parse-android "0x80AABBCC")
          {:keys [red green blue alpha]} parsed]
      (is (= :int fmt))
      (is (float= 0.5 alpha))
      (is (float= 0.667 red))
      (is (float= 0.733 green))
      (is (float= 0.8 blue)))))

(deftest parse-ios-test
  (testing "With brackets"
    (let [[parsed fmt]
          (parse-ios
            (str "[UIColor colorWithRed:0.667"
                 " green:0.733"
                 " blue:0.8"
                 " alpha:0.5]"))
          {:keys [red green blue alpha]} parsed]
      (is (= :objective-c fmt))
      (is (float= 0.5 alpha))
      (is (float= 0.667 red))
      (is (float= 0.733 green))
      (is (float= 0.8 blue))))
  (testing "Swift"
    (let [[parsed fmt]
          (parse-ios
            (str "UIColor(red: 0.667"
                 ", green: 0.733"
                 ", blue: 0.8"
                 ", alpha: 0.5)"))
          {:keys [red green blue alpha]} parsed]
      (is (= :swift fmt))
      (is (float= 0.5 alpha))
      (is (float= 0.667 red))
      (is (float= 0.733 green))
      (is (float= 0.8 blue)))))
