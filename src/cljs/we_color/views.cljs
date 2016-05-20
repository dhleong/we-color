(ns we-color.views
    (:require [re-frame.core :refer [dispatch subscribe]]))

(defn color-field
  [in-type]
  (let [v (subscribe [in-type])]
    (fn []
      [:input.color
       {:type :text
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
    [:div#ios.color
     [color-field :ios]]
    [:div#android.color
     [color-field :android]]]])
