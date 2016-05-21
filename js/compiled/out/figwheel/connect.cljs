(ns figwheel.connect (:require [we-color.core] [figwheel.client] [figwheel.client.utils]))
(figwheel.client/start {:on-jsload (fn [& x] (if js/we-color.core.mount-root (apply js/we-color.core.mount-root x) (figwheel.client.utils/log :debug "Figwheel: :on-jsload hook 'we-color.core/mount-root' is missing"))), :build-id "dev", :websocket-url "ws://localhost:3449/figwheel-ws"})

