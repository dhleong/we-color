// Compiled by ClojureScript 1.8.51 {}
goog.provide('figwheel.client.utils');
goog.require('cljs.core');
goog.require('clojure.string');
figwheel.client.utils._STAR_print_debug_STAR_ = false;
figwheel.client.utils.html_env_QMARK_ = (function figwheel$client$utils$html_env_QMARK_(){
return goog.inHtmlDocument_();
});
figwheel.client.utils.node_env_QMARK_ = (function figwheel$client$utils$node_env_QMARK_(){
return !((goog.nodeGlobalRequire == null));
});
figwheel.client.utils.host_env_QMARK_ = (function figwheel$client$utils$host_env_QMARK_(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"node","node",581201198);
} else {
return new cljs.core.Keyword(null,"html","html",-998796897);
}
});
figwheel.client.utils.base_url_path = (function figwheel$client$utils$base_url_path(){
return clojure.string.replace.call(null,goog.basePath,/(.*)goog\//,"$1");
});
figwheel.client.utils.dispatch_custom_event = (function figwheel$client$utils$dispatch_custom_event(event_name,data){
if(cljs.core.truth_((function (){var and__18431__auto__ = figwheel.client.utils.html_env_QMARK_.call(null);
if(cljs.core.truth_(and__18431__auto__)){
var and__18431__auto____$1 = (window["CustomEvent"]);
if(cljs.core.truth_(and__18431__auto____$1)){
return typeof document !== 'undefined';
} else {
return and__18431__auto____$1;
}
} else {
return and__18431__auto__;
}
})())){
return document.body.dispatchEvent((new CustomEvent(event_name,(function (){var obj24081 = {"detail":data};
return obj24081;
})())));
} else {
return null;
}
});
figwheel.client.utils.debug_prn = (function figwheel$client$utils$debug_prn(o){
if(cljs.core.truth_(figwheel.client.utils._STAR_print_debug_STAR_)){
var o__$1 = (((cljs.core.map_QMARK_.call(null,o)) || (cljs.core.seq_QMARK_.call(null,o)))?cljs.core.prn_str.call(null,o):o);
return console.log(o__$1);
} else {
return null;
}
});
figwheel.client.utils.log = (function figwheel$client$utils$log(var_args){
var args24086 = [];
var len__19513__auto___24092 = arguments.length;
var i__19514__auto___24093 = (0);
while(true){
if((i__19514__auto___24093 < len__19513__auto___24092)){
args24086.push((arguments[i__19514__auto___24093]));

var G__24094 = (i__19514__auto___24093 + (1));
i__19514__auto___24093 = G__24094;
continue;
} else {
}
break;
}

var G__24088 = args24086.length;
switch (G__24088) {
case 1:
return figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24086.length)].join('')));

}
});

figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$1 = (function (x){
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),x);
});

figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$2 = (function (level,arg){
var f = (function (){var pred__24089 = cljs.core._EQ_;
var expr__24090 = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?level:new cljs.core.Keyword(null,"info","info",-317069002));
if(cljs.core.truth_(pred__24089.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),expr__24090))){
return ((function (pred__24089,expr__24090){
return (function (p1__24082_SHARP_){
return console.warn(p1__24082_SHARP_);
});
;})(pred__24089,expr__24090))
} else {
if(cljs.core.truth_(pred__24089.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),expr__24090))){
return ((function (pred__24089,expr__24090){
return (function (p1__24083_SHARP_){
return console.debug(p1__24083_SHARP_);
});
;})(pred__24089,expr__24090))
} else {
if(cljs.core.truth_(pred__24089.call(null,new cljs.core.Keyword(null,"error","error",-978969032),expr__24090))){
return ((function (pred__24089,expr__24090){
return (function (p1__24084_SHARP_){
return console.error(p1__24084_SHARP_);
});
;})(pred__24089,expr__24090))
} else {
return ((function (pred__24089,expr__24090){
return (function (p1__24085_SHARP_){
return console.log(p1__24085_SHARP_);
});
;})(pred__24089,expr__24090))
}
}
}
})();
return f.call(null,arg);
});

figwheel.client.utils.log.cljs$lang$maxFixedArity = 2;
figwheel.client.utils.eval_helper = (function figwheel$client$utils$eval_helper(code,p__24096){
var map__24099 = p__24096;
var map__24099__$1 = ((((!((map__24099 == null)))?((((map__24099.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24099.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24099):map__24099);
var opts = map__24099__$1;
var eval_fn = cljs.core.get.call(null,map__24099__$1,new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294));
if(cljs.core.truth_(eval_fn)){
return eval_fn.call(null,code,opts);
} else {
return eval(code);
}
});

//# sourceMappingURL=utils.js.map?rel=1463713700128