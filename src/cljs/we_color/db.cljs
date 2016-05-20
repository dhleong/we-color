(ns we-color.db)

(def default-db
  {:android "#ffAABBCC"
   :ios "[UIColor colorWithRed:0.667 green:0.733 blue:0.800 alpha:1]"
   :formats
   {:ios :objective-c
    :android :hex}})
