// Compiled by ClojureScript 1.8.51 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__25161_25175 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__25162_25176 = null;
var count__25163_25177 = (0);
var i__25164_25178 = (0);
while(true){
if((i__25164_25178 < count__25163_25177)){
var f_25179 = cljs.core._nth.call(null,chunk__25162_25176,i__25164_25178);
cljs.core.println.call(null,"  ",f_25179);

var G__25180 = seq__25161_25175;
var G__25181 = chunk__25162_25176;
var G__25182 = count__25163_25177;
var G__25183 = (i__25164_25178 + (1));
seq__25161_25175 = G__25180;
chunk__25162_25176 = G__25181;
count__25163_25177 = G__25182;
i__25164_25178 = G__25183;
continue;
} else {
var temp__4657__auto___25184 = cljs.core.seq.call(null,seq__25161_25175);
if(temp__4657__auto___25184){
var seq__25161_25185__$1 = temp__4657__auto___25184;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25161_25185__$1)){
var c__19254__auto___25186 = cljs.core.chunk_first.call(null,seq__25161_25185__$1);
var G__25187 = cljs.core.chunk_rest.call(null,seq__25161_25185__$1);
var G__25188 = c__19254__auto___25186;
var G__25189 = cljs.core.count.call(null,c__19254__auto___25186);
var G__25190 = (0);
seq__25161_25175 = G__25187;
chunk__25162_25176 = G__25188;
count__25163_25177 = G__25189;
i__25164_25178 = G__25190;
continue;
} else {
var f_25191 = cljs.core.first.call(null,seq__25161_25185__$1);
cljs.core.println.call(null,"  ",f_25191);

var G__25192 = cljs.core.next.call(null,seq__25161_25185__$1);
var G__25193 = null;
var G__25194 = (0);
var G__25195 = (0);
seq__25161_25175 = G__25192;
chunk__25162_25176 = G__25193;
count__25163_25177 = G__25194;
i__25164_25178 = G__25195;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_25196 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__18443__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__18443__auto__)){
return or__18443__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_25196);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_25196)))?cljs.core.second.call(null,arglists_25196):arglists_25196));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__25165 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__25166 = null;
var count__25167 = (0);
var i__25168 = (0);
while(true){
if((i__25168 < count__25167)){
var vec__25169 = cljs.core._nth.call(null,chunk__25166,i__25168);
var name = cljs.core.nth.call(null,vec__25169,(0),null);
var map__25170 = cljs.core.nth.call(null,vec__25169,(1),null);
var map__25170__$1 = ((((!((map__25170 == null)))?((((map__25170.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25170.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25170):map__25170);
var doc = cljs.core.get.call(null,map__25170__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__25170__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__25197 = seq__25165;
var G__25198 = chunk__25166;
var G__25199 = count__25167;
var G__25200 = (i__25168 + (1));
seq__25165 = G__25197;
chunk__25166 = G__25198;
count__25167 = G__25199;
i__25168 = G__25200;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__25165);
if(temp__4657__auto__){
var seq__25165__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25165__$1)){
var c__19254__auto__ = cljs.core.chunk_first.call(null,seq__25165__$1);
var G__25201 = cljs.core.chunk_rest.call(null,seq__25165__$1);
var G__25202 = c__19254__auto__;
var G__25203 = cljs.core.count.call(null,c__19254__auto__);
var G__25204 = (0);
seq__25165 = G__25201;
chunk__25166 = G__25202;
count__25167 = G__25203;
i__25168 = G__25204;
continue;
} else {
var vec__25172 = cljs.core.first.call(null,seq__25165__$1);
var name = cljs.core.nth.call(null,vec__25172,(0),null);
var map__25173 = cljs.core.nth.call(null,vec__25172,(1),null);
var map__25173__$1 = ((((!((map__25173 == null)))?((((map__25173.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25173.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25173):map__25173);
var doc = cljs.core.get.call(null,map__25173__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__25173__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__25205 = cljs.core.next.call(null,seq__25165__$1);
var G__25206 = null;
var G__25207 = (0);
var G__25208 = (0);
seq__25165 = G__25205;
chunk__25166 = G__25206;
count__25167 = G__25207;
i__25168 = G__25208;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1463713700687