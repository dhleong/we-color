(ns we-color.views
    (:require [re-frame.core :refer [dispatch subscribe]]))

(defn color-field
  [in-type]
  (let [v (subscribe [in-type])]
    (fn []
      [:input.color
       {:type :text
        :id in-type
        :value @v
        :on-change 
        (fn [e]
          (dispatch
            [in-type (-> e .-target .-value)])
          true)}])))

(defn main-panel []
  [:div
   [:h2 "weColor"]
   [:div#colors
    [:table
     [:tr#ios-container.color
      [:td>label.color {:for :ios} "iOS"]
      [:td [color-field :ios]]]
     [:tr#android-container.color
      [:td>label.color {:for :android} "Android"]
      [:td [color-field :android]]]]]])
