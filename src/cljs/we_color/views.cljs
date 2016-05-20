(ns we-color.views
    (:require [re-frame.core :refer [dispatch subscribe]]))

(defn color-field
  [in-type]
  (let [v (subscribe [in-type])]
    (fn []
      [:textarea.color
       {:type :text
        :id in-type
        :value @v
        :on-change 
        (fn [e]
          (dispatch
            [in-type (-> e .-target .-value)])
          true)}])))

(defn main-panel []
  [:div.container
   [:h2 "weColor"]
   [:div#colors
    [:div#ios-container.color.col-md-6
     [:div>label.color {:for :ios} "iOS"]
     [color-field :ios]]
    [:div#android-container.color.col-md-6
     [:div>label.color {:for :android} "Android"]
     [color-field :android]]]])
