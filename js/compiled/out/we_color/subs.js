// Compiled by ClojureScript 1.8.51 {}
goog.provide('we_color.subs');
goog.require('cljs.core');
goog.require('re_frame.core');
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"name","name",1843675177),(function (db){
return reagent.ratom.make_reaction.call(null,(function (){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,db));
}));
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"ios","ios",-778010715),(function (db){
return reagent.ratom.make_reaction.call(null,(function (){
return new cljs.core.Keyword(null,"ios","ios",-778010715).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,db));
}));
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"android","android",-2084094573),(function (db){
return reagent.ratom.make_reaction.call(null,(function (){
return new cljs.core.Keyword(null,"android","android",-2084094573).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,db));
}));
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"format","format",-1306924766),(function (db,p__21717){
var vec__21718 = p__21717;
var _ = cljs.core.nth.call(null,vec__21718,(0),null);
var color = cljs.core.nth.call(null,vec__21718,(1),null);
return reagent.ratom.make_reaction.call(null,((function (vec__21718,_,color){
return (function (){
return color.call(null,new cljs.core.Keyword(null,"formats","formats",-1397890976).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,db)));
});})(vec__21718,_,color))
);
}));

//# sourceMappingURL=subs.js.map?rel=1463757105898