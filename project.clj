(defproject we-color "0.1.0-SNAPSHOT"
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [org.clojure/clojurescript "1.8.51"]
                 [reagent "0.5.1"]
                 [re-frame "0.7.0"]]

  :min-lein-version "2.5.3"

  :source-paths ["src/clj"]

  :test-paths ["test/clj"]

  :plugins [[lein-cljsbuild "1.1.3"]]

  :clean-targets ^{:protect false} ["resources/public/js/compiled" "target"]

  :figwheel {:css-dirs ["resources/public/css"]}

  :cljsbuild
  {:builds
   [{:id           "dev"
     :source-paths ["src/cljs" "src/clj"]
     :figwheel     {:on-jsload "we-color.core/mount-root"}
     :compiler     {:main                 we-color.core
                    :output-to            "resources/public/js/compiled/app.js"
                    :output-dir           "resources/public/js/compiled/out"
                    :asset-path           "js/compiled/out"
                    :source-map-timestamp true}}

    {:id           "min"
     :source-paths ["src/cljs" "src/clj"]
     :compiler     {:main            we-color.core
                    :output-to       "resources/public/js/compiled/app.js"
                    :optimizations   :advanced
                    :closure-defines {goog.DEBUG false}
                    :pretty-print    false}}

    ]}

  :repl-options {:nrepl-middleware [cemerick.piggieback/wrap-cljs-repl]}

  :profiles
  {:dev
   {:plugins [[lein-figwheel "0.5.3"]
              [cider/cider-nrepl "0.13.0-SNAPSHOT"]
              ]
    :dependencies [[figwheel-sidecar "0.5.3"]
                   [com.cemerick/piggieback "0.2.1"]]
    }})
