(ns we-color.subs
    (:require-macros [reagent.ratom :refer [reaction]])
    (:require [re-frame.core :refer [register-sub]]))

(register-sub
  :name
  (fn [db]
    (reaction (:name @db))))

(register-sub
  :ios
  (fn [db]
    (reaction (:ios @db))))

(register-sub
  :android
  (fn [db]
    (reaction (:android @db))))
