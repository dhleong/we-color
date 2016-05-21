// Compiled by ClojureScript 1.8.51 {}
goog.provide('we_color.handlers');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('we_color.db');
goog.require('we_color.parse');
goog.require('we_color.format');
/**
 * Generate a color-parsing middleware that uses the 
 *   provided parse function
 */
we_color.handlers.handle_with = (function we_color$handlers$handle_with(parser){
return (function (handler){
return (function we_color$handlers$handle_with_$_parse_handler(db,v){
var raw_color = cljs.core.first.call(null,v);
return handler.call(null,db,cljs.core.cons.call(null,raw_color,parser.call(null,raw_color)));
});
});
});
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432),(function (_,___$1){
return we_color.db.default_db;
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"android","android",-2084094573),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v,we_color.handlers.handle_with.call(null,we_color.parse.parse_android)], null),(function (db,p__23353){
var vec__23354 = p__23353;
var android = cljs.core.nth.call(null,vec__23354,(0),null);
var parsed = cljs.core.nth.call(null,vec__23354,(1),null);
var fmt = cljs.core.nth.call(null,vec__23354,(2),null);
var ios_fmt = new cljs.core.Keyword(null,"ios","ios",-778010715).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"formats","formats",-1397890976).cljs$core$IFn$_invoke$arity$1(db));
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"android","android",-2084094573),android,new cljs.core.Keyword(null,"ios","ios",-778010715),we_color.format.__GT_ios.call(null,parsed,ios_fmt),new cljs.core.Keyword(null,"formats","formats",-1397890976),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ios","ios",-778010715),ios_fmt,new cljs.core.Keyword(null,"android","android",-2084094573),fmt], null));
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"ios","ios",-778010715),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v,we_color.handlers.handle_with.call(null,we_color.parse.parse_ios)], null),(function (db,p__23355){
var vec__23356 = p__23355;
var ios = cljs.core.nth.call(null,vec__23356,(0),null);
var parsed = cljs.core.nth.call(null,vec__23356,(1),null);
var fmt = cljs.core.nth.call(null,vec__23356,(2),null);
var and_fmt = new cljs.core.Keyword(null,"android","android",-2084094573).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"formats","formats",-1397890976).cljs$core$IFn$_invoke$arity$1(db));
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"ios","ios",-778010715),ios,new cljs.core.Keyword(null,"android","android",-2084094573),we_color.format.__GT_android.call(null,parsed,and_fmt),new cljs.core.Keyword(null,"formats","formats",-1397890976),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ios","ios",-778010715),fmt,new cljs.core.Keyword(null,"android","android",-2084094573),and_fmt], null));
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v], null),(function (db,p__23357){
var vec__23358 = p__23357;
var platform = cljs.core.nth.call(null,vec__23358,(0),null);
var new_fmt = cljs.core.nth.call(null,vec__23358,(1),null);
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"formats","formats",-1397890976),platform], null),new_fmt);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"invalidate","invalidate",992224116),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v], null),(function (db,p__23359){
var vec__23360 = p__23359;
var platform = cljs.core.nth.call(null,vec__23360,(0),null);
var platform_23362__$1 = (function (){var G__23361 = (((platform instanceof cljs.core.Keyword))?platform.fqn:null);
switch (G__23361) {
case "ios":
return new cljs.core.Keyword(null,"android","android",-2084094573);

break;
case "android":
return new cljs.core.Keyword(null,"ios","ios",-778010715);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(platform)].join('')));

}
})();
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [platform_23362__$1,cljs.core.get.call(null,db,platform_23362__$1)], null));

return db;
}));

//# sourceMappingURL=handlers.js.map?rel=1463789820510