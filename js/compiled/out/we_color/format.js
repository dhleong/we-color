// Compiled by ClojureScript 1.8.51 {}
goog.provide('we_color.format');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.string.format');
we_color.format.hex_format = (function we_color$format$hex_format(n){
var base = n.toString((16));
if((n < (16))){
return [cljs.core.str("0"),cljs.core.str(base)].join('');
} else {
return base;
}
});
we_color.format.__GT_hex = (function we_color$format$__GT_hex(n){
if(cljs.core.truth_(n)){
return we_color.format.hex_format.call(null,(((255) * n) | (0))).toUpperCase();
} else {
return "00";
}
});
we_color.format.__GT_perc = (function we_color$format$__GT_perc(n){
if((n == null)){
return "0.000";
} else {
if(cljs.core._EQ_.call(null,(1),n)){
return "1";
} else {
if(cljs.core._EQ_.call(null,(0),n)){
return "0";
} else {
return goog.string.format("%.3f",n);

}
}
}
});
/**
 * Given a parsed color, format it in iOS style
 */
we_color.format.__GT_ios = (function we_color$format$__GT_ios(var_args){
var args__19520__auto__ = [];
var len__19513__auto___21217 = arguments.length;
var i__19514__auto___21218 = (0);
while(true){
if((i__19514__auto___21218 < len__19513__auto___21217)){
args__19520__auto__.push((arguments[i__19514__auto___21218]));

var G__21219 = (i__19514__auto___21218 + (1));
i__19514__auto___21218 = G__21219;
continue;
} else {
}
break;
}

var argseq__19521__auto__ = ((((1) < args__19520__auto__.length))?(new cljs.core.IndexedSeq(args__19520__auto__.slice((1)),(0),null)):null);
return we_color.format.__GT_ios.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19521__auto__);
});

we_color.format.__GT_ios.cljs$core$IFn$_invoke$arity$variadic = (function (color,p__21212){
var vec__21213 = p__21212;
var fmt = cljs.core.nth.call(null,vec__21213,(0),null);
var temp__4657__auto__ = color;
if(cljs.core.truth_(temp__4657__auto__)){
var map__21214 = temp__4657__auto__;
var map__21214__$1 = ((((!((map__21214 == null)))?((((map__21214.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21214.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21214):map__21214);
var red = cljs.core.get.call(null,map__21214__$1,new cljs.core.Keyword(null,"red","red",-969428204));
var green = cljs.core.get.call(null,map__21214__$1,new cljs.core.Keyword(null,"green","green",-945526839));
var blue = cljs.core.get.call(null,map__21214__$1,new cljs.core.Keyword(null,"blue","blue",-622100620));
var alpha = cljs.core.get.call(null,map__21214__$1,new cljs.core.Keyword(null,"alpha","alpha",-1574982441));
var G__21216 = (((fmt instanceof cljs.core.Keyword))?fmt.fqn:null);
switch (G__21216) {
case "swift":
return [cljs.core.str("UIColor(red: "),cljs.core.str(we_color.format.__GT_perc.call(null,red)),cljs.core.str(", green: "),cljs.core.str(we_color.format.__GT_perc.call(null,green)),cljs.core.str(", blue: "),cljs.core.str(we_color.format.__GT_perc.call(null,blue)),cljs.core.str(", alpha: "),cljs.core.str(we_color.format.__GT_perc.call(null,alpha)),cljs.core.str(")")].join('');

break;
default:
return [cljs.core.str("[UIColor colorWithRed:"),cljs.core.str(we_color.format.__GT_perc.call(null,red)),cljs.core.str(" green:"),cljs.core.str(we_color.format.__GT_perc.call(null,green)),cljs.core.str(" blue:"),cljs.core.str(we_color.format.__GT_perc.call(null,blue)),cljs.core.str(" alpha:"),cljs.core.str(we_color.format.__GT_perc.call(null,alpha)),cljs.core.str("]")].join('');

}
} else {
return null;
}
});

we_color.format.__GT_ios.cljs$lang$maxFixedArity = (1);

we_color.format.__GT_ios.cljs$lang$applyTo = (function (seq21210){
var G__21211 = cljs.core.first.call(null,seq21210);
var seq21210__$1 = cljs.core.next.call(null,seq21210);
return we_color.format.__GT_ios.cljs$core$IFn$_invoke$arity$variadic(G__21211,seq21210__$1);
});
we_color.format.__GT_android = (function we_color$format$__GT_android(var_args){
var args__19520__auto__ = [];
var len__19513__auto___21228 = arguments.length;
var i__19514__auto___21229 = (0);
while(true){
if((i__19514__auto___21229 < len__19513__auto___21228)){
args__19520__auto__.push((arguments[i__19514__auto___21229]));

var G__21230 = (i__19514__auto___21229 + (1));
i__19514__auto___21229 = G__21230;
continue;
} else {
}
break;
}

var argseq__19521__auto__ = ((((1) < args__19520__auto__.length))?(new cljs.core.IndexedSeq(args__19520__auto__.slice((1)),(0),null)):null);
return we_color.format.__GT_android.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19521__auto__);
});

we_color.format.__GT_android.cljs$core$IFn$_invoke$arity$variadic = (function (color,p__21223){
var vec__21224 = p__21223;
var fmt = cljs.core.nth.call(null,vec__21224,(0),null);
var temp__4657__auto__ = color;
if(cljs.core.truth_(temp__4657__auto__)){
var map__21225 = temp__4657__auto__;
var map__21225__$1 = ((((!((map__21225 == null)))?((((map__21225.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21225.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21225):map__21225);
var alpha = cljs.core.get.call(null,map__21225__$1,new cljs.core.Keyword(null,"alpha","alpha",-1574982441));
var red = cljs.core.get.call(null,map__21225__$1,new cljs.core.Keyword(null,"red","red",-969428204));
var green = cljs.core.get.call(null,map__21225__$1,new cljs.core.Keyword(null,"green","green",-945526839));
var blue = cljs.core.get.call(null,map__21225__$1,new cljs.core.Keyword(null,"blue","blue",-622100620));
var hex = [cljs.core.str(we_color.format.__GT_hex.call(null,alpha).toLowerCase()),cljs.core.str(we_color.format.__GT_hex.call(null,red)),cljs.core.str(we_color.format.__GT_hex.call(null,green)),cljs.core.str(we_color.format.__GT_hex.call(null,blue))].join('');
var G__21227 = (((fmt instanceof cljs.core.Keyword))?fmt.fqn:null);
switch (G__21227) {
case "res":
return [cljs.core.str("<color name=\"color\">#"),cljs.core.str(hex),cljs.core.str("</color>")].join('');

break;
case "hex":
return [cljs.core.str("#"),cljs.core.str(hex)].join('');

break;
case "int":
return [cljs.core.str("0x"),cljs.core.str(hex)].join('');

break;
default:
return hex;

}
} else {
return null;
}
});

we_color.format.__GT_android.cljs$lang$maxFixedArity = (1);

we_color.format.__GT_android.cljs$lang$applyTo = (function (seq21221){
var G__21222 = cljs.core.first.call(null,seq21221);
var seq21221__$1 = cljs.core.next.call(null,seq21221);
return we_color.format.__GT_android.cljs$core$IFn$_invoke$arity$variadic(G__21222,seq21221__$1);
});

//# sourceMappingURL=format.js.map?rel=1463755702999