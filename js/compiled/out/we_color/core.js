// Compiled by ClojureScript 1.8.51 {}
goog.provide('we_color.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('we_color.views');
goog.require('we_color.config');
goog.require('we_color.handlers');
goog.require('we_color.subs');
goog.require('re_frame.core');
if(cljs.core.truth_(we_color.config.debug_QMARK_)){
cljs.core.println.call(null,"dev mode");
} else {
}
we_color.core.mount_root = (function we_color$core$mount_root(){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [we_color.views.main_panel], null),document.getElementById("app"));
});
we_color.core.init = (function we_color$core$init(){
re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432)], null));

return we_color.core.mount_root.call(null);
});
goog.exportSymbol('we_color.core.init', we_color.core.init);

//# sourceMappingURL=core.js.map?rel=1463789820519