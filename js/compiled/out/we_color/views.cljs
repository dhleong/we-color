(ns we-color.views
    (:require [clojure.string :refer [capitalize] :as str]
              [re-frame.core :refer [dispatch subscribe]]))

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

(defn format-choices
  [for-color formats]
  (let [current-format (subscribe [:format for-color])]
    (fn []
      (let [selected-fmt @current-format]
        [:ul.color-choices
         (for [fmt formats]
           ^{:key fmt} [:li.color-choice
                        [:input
                         {:type :radio
                          :id fmt
                          :name for-color
                          :value fmt
                          :checked (= fmt selected-fmt)
                          :on-change #(let [new-fmt (-> % .-target .-value keyword)]
                                        (dispatch [:format for-color new-fmt])
                                        (dispatch [:invalidate for-color]))}]
                        [:label.color-choice
                         {:for fmt}
                         (-> fmt
                             name
                             capitalize
                             (str/replace "-c" "-C"))]])]))))

(defn main-panel []
  [:div.container
   [:div#colors
    [:div.color.col-md-6
     [color-label :ios :fa-apple]
     [color-field :ios]
     [format-choices 
      :ios [:objective-c :swift]]]
    [:div.color.col-md-6
     [color-label :android :fa-android]
     [color-field :android]
     [format-choices 
      :android [:hex :int :res]]]]])
