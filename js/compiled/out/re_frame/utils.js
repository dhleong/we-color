// Compiled by ClojureScript 1.8.51 {}
goog.provide('re_frame.utils');
goog.require('cljs.core');
goog.require('clojure.set');
re_frame.utils.default_loggers = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"log","log",-1595516004),(function (p1__20092_SHARP_){
return console.log(p1__20092_SHARP_);
}),new cljs.core.Keyword(null,"warn","warn",-436710552),(function (p1__20093_SHARP_){
return console.warn(p1__20093_SHARP_);
}),new cljs.core.Keyword(null,"error","error",-978969032),(function (p1__20094_SHARP_){
return console.error(p1__20094_SHARP_);
}),new cljs.core.Keyword(null,"group","group",582596132),(function (p1__20095_SHARP_){
if(cljs.core.truth_(console.groupCollapsed)){
return console.groupCollapsed(p1__20095_SHARP_);
} else {
return console.log(p1__20095_SHARP_);
}
}),new cljs.core.Keyword(null,"groupEnd","groupEnd",-337721382),(function (){
if(cljs.core.truth_(console.groupEnd)){
return console.groupEnd();
} else {
return null;
}
})], null);
re_frame.utils.loggers = cljs.core.atom.call(null,re_frame.utils.default_loggers);
/**
 * Change the set (subset?) of logging functions used by re-frame.
 *   'new-loggers' should be a map which looks like default-loggers
 */
re_frame.utils.set_loggers_BANG_ = (function re_frame$utils$set_loggers_BANG_(new_loggers){
if(cljs.core.empty_QMARK_.call(null,clojure.set.difference.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,new_loggers)),cljs.core.set.call(null,cljs.core.keys.call(null,re_frame.utils.default_loggers))))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Unknown keys in new-loggers"),cljs.core.str("\n"),cljs.core.str("(empty? (difference (set (keys new-loggers)) (set (keys default-loggers))))")].join('')));
}

return cljs.core.swap_BANG_.call(null,re_frame.utils.loggers,cljs.core.merge,new_loggers);
});
re_frame.utils.log = (function re_frame$utils$log(var_args){
var args__19520__auto__ = [];
var len__19513__auto___20097 = arguments.length;
var i__19514__auto___20098 = (0);
while(true){
if((i__19514__auto___20098 < len__19513__auto___20097)){
args__19520__auto__.push((arguments[i__19514__auto___20098]));

var G__20099 = (i__19514__auto___20098 + (1));
i__19514__auto___20098 = G__20099;
continue;
} else {
}
break;
}

var argseq__19521__auto__ = ((((0) < args__19520__auto__.length))?(new cljs.core.IndexedSeq(args__19520__auto__.slice((0)),(0),null)):null);
return re_frame.utils.log.cljs$core$IFn$_invoke$arity$variadic(argseq__19521__auto__);
});

re_frame.utils.log.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return new cljs.core.Keyword(null,"log","log",-1595516004).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.utils.loggers)).call(null,cljs.core.apply.call(null,cljs.core.str,args));
});

re_frame.utils.log.cljs$lang$maxFixedArity = (0);

re_frame.utils.log.cljs$lang$applyTo = (function (seq20096){
return re_frame.utils.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20096));
});
re_frame.utils.warn = (function re_frame$utils$warn(var_args){
var args__19520__auto__ = [];
var len__19513__auto___20101 = arguments.length;
var i__19514__auto___20102 = (0);
while(true){
if((i__19514__auto___20102 < len__19513__auto___20101)){
args__19520__auto__.push((arguments[i__19514__auto___20102]));

var G__20103 = (i__19514__auto___20102 + (1));
i__19514__auto___20102 = G__20103;
continue;
} else {
}
break;
}

var argseq__19521__auto__ = ((((0) < args__19520__auto__.length))?(new cljs.core.IndexedSeq(args__19520__auto__.slice((0)),(0),null)):null);
return re_frame.utils.warn.cljs$core$IFn$_invoke$arity$variadic(argseq__19521__auto__);
});

re_frame.utils.warn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return new cljs.core.Keyword(null,"warn","warn",-436710552).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.utils.loggers)).call(null,cljs.core.apply.call(null,cljs.core.str,args));
});

re_frame.utils.warn.cljs$lang$maxFixedArity = (0);

re_frame.utils.warn.cljs$lang$applyTo = (function (seq20100){
return re_frame.utils.warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20100));
});
re_frame.utils.group = (function re_frame$utils$group(var_args){
var args__19520__auto__ = [];
var len__19513__auto___20105 = arguments.length;
var i__19514__auto___20106 = (0);
while(true){
if((i__19514__auto___20106 < len__19513__auto___20105)){
args__19520__auto__.push((arguments[i__19514__auto___20106]));

var G__20107 = (i__19514__auto___20106 + (1));
i__19514__auto___20106 = G__20107;
continue;
} else {
}
break;
}

var argseq__19521__auto__ = ((((0) < args__19520__auto__.length))?(new cljs.core.IndexedSeq(args__19520__auto__.slice((0)),(0),null)):null);
return re_frame.utils.group.cljs$core$IFn$_invoke$arity$variadic(argseq__19521__auto__);
});

re_frame.utils.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return new cljs.core.Keyword(null,"group","group",582596132).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.utils.loggers)).call(null,cljs.core.apply.call(null,cljs.core.str,args));
});

re_frame.utils.group.cljs$lang$maxFixedArity = (0);

re_frame.utils.group.cljs$lang$applyTo = (function (seq20104){
return re_frame.utils.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20104));
});
re_frame.utils.groupEnd = (function re_frame$utils$groupEnd(var_args){
var args__19520__auto__ = [];
var len__19513__auto___20109 = arguments.length;
var i__19514__auto___20110 = (0);
while(true){
if((i__19514__auto___20110 < len__19513__auto___20109)){
args__19520__auto__.push((arguments[i__19514__auto___20110]));

var G__20111 = (i__19514__auto___20110 + (1));
i__19514__auto___20110 = G__20111;
continue;
} else {
}
break;
}

var argseq__19521__auto__ = ((((0) < args__19520__auto__.length))?(new cljs.core.IndexedSeq(args__19520__auto__.slice((0)),(0),null)):null);
return re_frame.utils.groupEnd.cljs$core$IFn$_invoke$arity$variadic(argseq__19521__auto__);
});

re_frame.utils.groupEnd.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return new cljs.core.Keyword(null,"groupEnd","groupEnd",-337721382).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.utils.loggers)).call(null,cljs.core.apply.call(null,cljs.core.str,args));
});

re_frame.utils.groupEnd.cljs$lang$maxFixedArity = (0);

re_frame.utils.groupEnd.cljs$lang$applyTo = (function (seq20108){
return re_frame.utils.groupEnd.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20108));
});
re_frame.utils.error = (function re_frame$utils$error(var_args){
var args__19520__auto__ = [];
var len__19513__auto___20113 = arguments.length;
var i__19514__auto___20114 = (0);
while(true){
if((i__19514__auto___20114 < len__19513__auto___20113)){
args__19520__auto__.push((arguments[i__19514__auto___20114]));

var G__20115 = (i__19514__auto___20114 + (1));
i__19514__auto___20114 = G__20115;
continue;
} else {
}
break;
}

var argseq__19521__auto__ = ((((0) < args__19520__auto__.length))?(new cljs.core.IndexedSeq(args__19520__auto__.slice((0)),(0),null)):null);
return re_frame.utils.error.cljs$core$IFn$_invoke$arity$variadic(argseq__19521__auto__);
});

re_frame.utils.error.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.utils.loggers)).call(null,cljs.core.apply.call(null,cljs.core.str,args));
});

re_frame.utils.error.cljs$lang$maxFixedArity = (0);

re_frame.utils.error.cljs$lang$applyTo = (function (seq20112){
return re_frame.utils.error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20112));
});
re_frame.utils.first_in_vector = (function re_frame$utils$first_in_vector(v){
if(cljs.core.vector_QMARK_.call(null,v)){
return cljs.core.first.call(null,v);
} else {
return re_frame.utils.error.call(null,"re-frame: expected a vector event, but got: ",v);
}
});

//# sourceMappingURL=utils.js.map?rel=1463713697552