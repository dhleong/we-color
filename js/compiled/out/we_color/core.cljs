(ns we-color.core
    (:require [reagent.core :as reagent]
              [re-frame.core :as re-frame]
              [we-color.handlers]
              [we-color.subs]
              [we-color.views :as views]
              [we-color.config :as config]))

(when config/debug?
  (println "dev mode"))

(defn mount-root []
  (reagent/render [views/main-panel]
                  (.getElementById js/document "app")))

(defn ^:export init [] 
  (re-frame/dispatch-sync [:initialize-db])
  (mount-root))
