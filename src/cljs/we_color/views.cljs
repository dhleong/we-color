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

(defn color-label
  [field-for fa-class]
  [:div>label.color {:for field-for}
   [:i.fa.fa-5x
    {:class fa-class}]])

(defn main-panel []
  [:div.container
   [:h2 "weColor"]
   [:div#colors
    [:div.color.col-md-6
     [color-label :ios :fa-apple]
     [color-field :ios]]
    [:div.color.col-md-6
     [color-label :android :fa-android]
     [color-field :android]]]])
