// Compiled by ClojureScript 1.8.51 {}
goog.provide('we_color.parse');
goog.require('cljs.core');
goog.require('clojure.string');
we_color.parse.ios_objc_regex = /UIColor colorWithRed:([.0-9]+) green:([.0-9]+) blue:([.0-9]+) alpha:([.0-9]+)/;
we_color.parse.ios_swift_regex = /UIColor\(red:\s*([.0-9]+).*,.*green:\s*([.0-9]+).*,.*blue:\s*([.0-9]+).*,.*alpha:\s*([.0-9]+)/;
we_color.parse.clean_android = (function we_color$parse$clean_android(raw_android){
return clojure.string.replace.call(null,raw_android,/(#|0x)/,"");
});
we_color.parse.hex__GT_int = (function we_color$parse$hex__GT_int(raw){
return parseInt(raw,(16));
});
we_color.parse.str__GT_float = (function we_color$parse$str__GT_float(raw){
return parseFloat(raw);
});
/**
 * Given a raw android number (as string),
 *   return the parsed map
 */
we_color.parse.parse_android = (function we_color$parse$parse_android(raw_android){
if(cljs.core.truth_(raw_android)){
var temp__4657__auto__ = cljs.core.map.call(null,(function (p1__23264_SHARP_){
return (p1__23264_SHARP_ / (255));
}),cljs.core.map.call(null,we_color.parse.hex__GT_int,cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.apply,cljs.core.str),cljs.core.partition.call(null,(2),we_color.parse.clean_android.call(null,raw_android)))));
if(cljs.core.truth_(temp__4657__auto__)){
var values = temp__4657__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.zipmap.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"alpha","alpha",-1574982441),new cljs.core.Keyword(null,"red","red",-969428204),new cljs.core.Keyword(null,"green","green",-945526839),new cljs.core.Keyword(null,"blue","blue",-622100620)], null),values),((cljs.core._EQ_.call(null,"#",cljs.core.first.call(null,raw_android)))?new cljs.core.Keyword(null,"hex","hex",41691346):((clojure.string.starts_with_QMARK_.call(null,raw_android,"0x"))?new cljs.core.Keyword(null,"int","int",-1741416922):new cljs.core.Keyword(null,"plain","plain",1368629269)
))], null);
} else {
return null;
}
} else {
return null;
}
});
we_color.parse.parse_ios = (function we_color$parse$parse_ios(raw_ios){
var temp__4657__auto__ = cljs.core.some.call(null,(function (p__23268){
var vec__23269 = p__23268;
var regex = cljs.core.nth.call(null,vec__23269,(0),null);
var kind = cljs.core.nth.call(null,vec__23269,(1),null);
var temp__4657__auto__ = cljs.core.re_seq.call(null,regex,raw_ios);
if(cljs.core.truth_(temp__4657__auto__)){
var match = temp__4657__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [match,kind], null);
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [we_color.parse.ios_objc_regex,new cljs.core.Keyword(null,"objective-c","objective-c",-146888277)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [we_color.parse.ios_swift_regex,new cljs.core.Keyword(null,"swift","swift",-1816498455)], null)], null));
if(cljs.core.truth_(temp__4657__auto__)){
var vec__23270 = temp__4657__auto__;
var results = cljs.core.nth.call(null,vec__23270,(0),null);
var kind = cljs.core.nth.call(null,vec__23270,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.zipmap.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"red","red",-969428204),new cljs.core.Keyword(null,"green","green",-945526839),new cljs.core.Keyword(null,"blue","blue",-622100620),new cljs.core.Keyword(null,"alpha","alpha",-1574982441)], null),cljs.core.map.call(null,we_color.parse.str__GT_float,cljs.core.next.call(null,cljs.core.first.call(null,results)))),kind], null);
} else {
return null;
}
});

//# sourceMappingURL=parse.js.map?rel=1463789543085