# weColor

*weColor, so you don't have to*

## What?

A [re-frame](https://github.com/Day8/re-frame) application for converting between iOS
colors, which tend to use decimal fractions, and Android colors, which use hex.

## Development Mode

Start figwheel with:

```
lein figwheel
```

Figwheel will automatically push cljs changes to the browser.

Wait a bit, then browse to [http://localhost:3449](http://localhost:3449).

For REPL support, I just start a separate REPL with:

```
lein repl
```

and connect to it using [vim-fireplace](https://github.com/tpope/vim-fireplace). This lets
me run the tests for [format.cljc](src/clj/we_color/format.cljc) and 
[parse.cljc](src/clj/we_color/parse.cljc) using the normal fireplace mappings.
