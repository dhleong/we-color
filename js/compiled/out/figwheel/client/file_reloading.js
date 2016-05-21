// Compiled by ClojureScript 1.8.51 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__18443__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__18443__auto__){
return or__18443__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__18443__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__18443__auto__)){
return or__18443__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__24137_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__24137_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__24142 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__24143 = null;
var count__24144 = (0);
var i__24145 = (0);
while(true){
if((i__24145 < count__24144)){
var n = cljs.core._nth.call(null,chunk__24143,i__24145);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__24146 = seq__24142;
var G__24147 = chunk__24143;
var G__24148 = count__24144;
var G__24149 = (i__24145 + (1));
seq__24142 = G__24146;
chunk__24143 = G__24147;
count__24144 = G__24148;
i__24145 = G__24149;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__24142);
if(temp__4657__auto__){
var seq__24142__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24142__$1)){
var c__19254__auto__ = cljs.core.chunk_first.call(null,seq__24142__$1);
var G__24150 = cljs.core.chunk_rest.call(null,seq__24142__$1);
var G__24151 = c__19254__auto__;
var G__24152 = cljs.core.count.call(null,c__19254__auto__);
var G__24153 = (0);
seq__24142 = G__24150;
chunk__24143 = G__24151;
count__24144 = G__24152;
i__24145 = G__24153;
continue;
} else {
var n = cljs.core.first.call(null,seq__24142__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__24154 = cljs.core.next.call(null,seq__24142__$1);
var G__24155 = null;
var G__24156 = (0);
var G__24157 = (0);
seq__24142 = G__24154;
chunk__24143 = G__24155;
count__24144 = G__24156;
i__24145 = G__24157;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__24196_24203 = cljs.core.seq.call(null,deps);
var chunk__24197_24204 = null;
var count__24198_24205 = (0);
var i__24199_24206 = (0);
while(true){
if((i__24199_24206 < count__24198_24205)){
var dep_24207 = cljs.core._nth.call(null,chunk__24197_24204,i__24199_24206);
topo_sort_helper_STAR_.call(null,dep_24207,(depth + (1)),state);

var G__24208 = seq__24196_24203;
var G__24209 = chunk__24197_24204;
var G__24210 = count__24198_24205;
var G__24211 = (i__24199_24206 + (1));
seq__24196_24203 = G__24208;
chunk__24197_24204 = G__24209;
count__24198_24205 = G__24210;
i__24199_24206 = G__24211;
continue;
} else {
var temp__4657__auto___24212 = cljs.core.seq.call(null,seq__24196_24203);
if(temp__4657__auto___24212){
var seq__24196_24213__$1 = temp__4657__auto___24212;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24196_24213__$1)){
var c__19254__auto___24214 = cljs.core.chunk_first.call(null,seq__24196_24213__$1);
var G__24215 = cljs.core.chunk_rest.call(null,seq__24196_24213__$1);
var G__24216 = c__19254__auto___24214;
var G__24217 = cljs.core.count.call(null,c__19254__auto___24214);
var G__24218 = (0);
seq__24196_24203 = G__24215;
chunk__24197_24204 = G__24216;
count__24198_24205 = G__24217;
i__24199_24206 = G__24218;
continue;
} else {
var dep_24219 = cljs.core.first.call(null,seq__24196_24213__$1);
topo_sort_helper_STAR_.call(null,dep_24219,(depth + (1)),state);

var G__24220 = cljs.core.next.call(null,seq__24196_24213__$1);
var G__24221 = null;
var G__24222 = (0);
var G__24223 = (0);
seq__24196_24203 = G__24220;
chunk__24197_24204 = G__24221;
count__24198_24205 = G__24222;
i__24199_24206 = G__24223;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__24200){
var vec__24202 = p__24200;
var x = cljs.core.nth.call(null,vec__24202,(0),null);
var xs = cljs.core.nthnext.call(null,vec__24202,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__24202,x,xs,get_deps__$1){
return (function (p1__24158_SHARP_){
return clojure.set.difference.call(null,p1__24158_SHARP_,x);
});})(vec__24202,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__24236 = cljs.core.seq.call(null,provides);
var chunk__24237 = null;
var count__24238 = (0);
var i__24239 = (0);
while(true){
if((i__24239 < count__24238)){
var prov = cljs.core._nth.call(null,chunk__24237,i__24239);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__24240_24248 = cljs.core.seq.call(null,requires);
var chunk__24241_24249 = null;
var count__24242_24250 = (0);
var i__24243_24251 = (0);
while(true){
if((i__24243_24251 < count__24242_24250)){
var req_24252 = cljs.core._nth.call(null,chunk__24241_24249,i__24243_24251);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_24252,prov);

var G__24253 = seq__24240_24248;
var G__24254 = chunk__24241_24249;
var G__24255 = count__24242_24250;
var G__24256 = (i__24243_24251 + (1));
seq__24240_24248 = G__24253;
chunk__24241_24249 = G__24254;
count__24242_24250 = G__24255;
i__24243_24251 = G__24256;
continue;
} else {
var temp__4657__auto___24257 = cljs.core.seq.call(null,seq__24240_24248);
if(temp__4657__auto___24257){
var seq__24240_24258__$1 = temp__4657__auto___24257;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24240_24258__$1)){
var c__19254__auto___24259 = cljs.core.chunk_first.call(null,seq__24240_24258__$1);
var G__24260 = cljs.core.chunk_rest.call(null,seq__24240_24258__$1);
var G__24261 = c__19254__auto___24259;
var G__24262 = cljs.core.count.call(null,c__19254__auto___24259);
var G__24263 = (0);
seq__24240_24248 = G__24260;
chunk__24241_24249 = G__24261;
count__24242_24250 = G__24262;
i__24243_24251 = G__24263;
continue;
} else {
var req_24264 = cljs.core.first.call(null,seq__24240_24258__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_24264,prov);

var G__24265 = cljs.core.next.call(null,seq__24240_24258__$1);
var G__24266 = null;
var G__24267 = (0);
var G__24268 = (0);
seq__24240_24248 = G__24265;
chunk__24241_24249 = G__24266;
count__24242_24250 = G__24267;
i__24243_24251 = G__24268;
continue;
}
} else {
}
}
break;
}

var G__24269 = seq__24236;
var G__24270 = chunk__24237;
var G__24271 = count__24238;
var G__24272 = (i__24239 + (1));
seq__24236 = G__24269;
chunk__24237 = G__24270;
count__24238 = G__24271;
i__24239 = G__24272;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__24236);
if(temp__4657__auto__){
var seq__24236__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24236__$1)){
var c__19254__auto__ = cljs.core.chunk_first.call(null,seq__24236__$1);
var G__24273 = cljs.core.chunk_rest.call(null,seq__24236__$1);
var G__24274 = c__19254__auto__;
var G__24275 = cljs.core.count.call(null,c__19254__auto__);
var G__24276 = (0);
seq__24236 = G__24273;
chunk__24237 = G__24274;
count__24238 = G__24275;
i__24239 = G__24276;
continue;
} else {
var prov = cljs.core.first.call(null,seq__24236__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__24244_24277 = cljs.core.seq.call(null,requires);
var chunk__24245_24278 = null;
var count__24246_24279 = (0);
var i__24247_24280 = (0);
while(true){
if((i__24247_24280 < count__24246_24279)){
var req_24281 = cljs.core._nth.call(null,chunk__24245_24278,i__24247_24280);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_24281,prov);

var G__24282 = seq__24244_24277;
var G__24283 = chunk__24245_24278;
var G__24284 = count__24246_24279;
var G__24285 = (i__24247_24280 + (1));
seq__24244_24277 = G__24282;
chunk__24245_24278 = G__24283;
count__24246_24279 = G__24284;
i__24247_24280 = G__24285;
continue;
} else {
var temp__4657__auto___24286__$1 = cljs.core.seq.call(null,seq__24244_24277);
if(temp__4657__auto___24286__$1){
var seq__24244_24287__$1 = temp__4657__auto___24286__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24244_24287__$1)){
var c__19254__auto___24288 = cljs.core.chunk_first.call(null,seq__24244_24287__$1);
var G__24289 = cljs.core.chunk_rest.call(null,seq__24244_24287__$1);
var G__24290 = c__19254__auto___24288;
var G__24291 = cljs.core.count.call(null,c__19254__auto___24288);
var G__24292 = (0);
seq__24244_24277 = G__24289;
chunk__24245_24278 = G__24290;
count__24246_24279 = G__24291;
i__24247_24280 = G__24292;
continue;
} else {
var req_24293 = cljs.core.first.call(null,seq__24244_24287__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_24293,prov);

var G__24294 = cljs.core.next.call(null,seq__24244_24287__$1);
var G__24295 = null;
var G__24296 = (0);
var G__24297 = (0);
seq__24244_24277 = G__24294;
chunk__24245_24278 = G__24295;
count__24246_24279 = G__24296;
i__24247_24280 = G__24297;
continue;
}
} else {
}
}
break;
}

var G__24298 = cljs.core.next.call(null,seq__24236__$1);
var G__24299 = null;
var G__24300 = (0);
var G__24301 = (0);
seq__24236 = G__24298;
chunk__24237 = G__24299;
count__24238 = G__24300;
i__24239 = G__24301;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__24306_24310 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__24307_24311 = null;
var count__24308_24312 = (0);
var i__24309_24313 = (0);
while(true){
if((i__24309_24313 < count__24308_24312)){
var ns_24314 = cljs.core._nth.call(null,chunk__24307_24311,i__24309_24313);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_24314);

var G__24315 = seq__24306_24310;
var G__24316 = chunk__24307_24311;
var G__24317 = count__24308_24312;
var G__24318 = (i__24309_24313 + (1));
seq__24306_24310 = G__24315;
chunk__24307_24311 = G__24316;
count__24308_24312 = G__24317;
i__24309_24313 = G__24318;
continue;
} else {
var temp__4657__auto___24319 = cljs.core.seq.call(null,seq__24306_24310);
if(temp__4657__auto___24319){
var seq__24306_24320__$1 = temp__4657__auto___24319;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24306_24320__$1)){
var c__19254__auto___24321 = cljs.core.chunk_first.call(null,seq__24306_24320__$1);
var G__24322 = cljs.core.chunk_rest.call(null,seq__24306_24320__$1);
var G__24323 = c__19254__auto___24321;
var G__24324 = cljs.core.count.call(null,c__19254__auto___24321);
var G__24325 = (0);
seq__24306_24310 = G__24322;
chunk__24307_24311 = G__24323;
count__24308_24312 = G__24324;
i__24309_24313 = G__24325;
continue;
} else {
var ns_24326 = cljs.core.first.call(null,seq__24306_24320__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_24326);

var G__24327 = cljs.core.next.call(null,seq__24306_24320__$1);
var G__24328 = null;
var G__24329 = (0);
var G__24330 = (0);
seq__24306_24310 = G__24327;
chunk__24307_24311 = G__24328;
count__24308_24312 = G__24329;
i__24309_24313 = G__24330;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__18443__auto__ = goog.require__;
if(cljs.core.truth_(or__18443__auto__)){
return or__18443__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__24331__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__24331 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24332__i = 0, G__24332__a = new Array(arguments.length -  0);
while (G__24332__i < G__24332__a.length) {G__24332__a[G__24332__i] = arguments[G__24332__i + 0]; ++G__24332__i;}
  args = new cljs.core.IndexedSeq(G__24332__a,0);
} 
return G__24331__delegate.call(this,args);};
G__24331.cljs$lang$maxFixedArity = 0;
G__24331.cljs$lang$applyTo = (function (arglist__24333){
var args = cljs.core.seq(arglist__24333);
return G__24331__delegate(args);
});
G__24331.cljs$core$IFn$_invoke$arity$variadic = G__24331__delegate;
return G__24331;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__24335 = cljs.core._EQ_;
var expr__24336 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__24335.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__24336))){
var path_parts = ((function (pred__24335,expr__24336){
return (function (p1__24334_SHARP_){
return clojure.string.split.call(null,p1__24334_SHARP_,/[\/\\]/);
});})(pred__24335,expr__24336))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__24335,expr__24336){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e24338){if((e24338 instanceof Error)){
var e = e24338;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e24338;

}
}})());
});
;})(path_parts,sep,root,pred__24335,expr__24336))
} else {
if(cljs.core.truth_(pred__24335.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__24336))){
return ((function (pred__24335,expr__24336){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__24335,expr__24336){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__24335,expr__24336))
);

return deferred.addErrback(((function (deferred,pred__24335,expr__24336){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__24335,expr__24336))
);
});
;})(pred__24335,expr__24336))
} else {
return ((function (pred__24335,expr__24336){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__24335,expr__24336))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__24339,callback){
var map__24342 = p__24339;
var map__24342__$1 = ((((!((map__24342 == null)))?((((map__24342.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24342.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24342):map__24342);
var file_msg = map__24342__$1;
var request_url = cljs.core.get.call(null,map__24342__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__24342,map__24342__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__24342,map__24342__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__21304__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21304__auto__){
return (function (){
var f__21305__auto__ = (function (){var switch__21192__auto__ = ((function (c__21304__auto__){
return (function (state_24366){
var state_val_24367 = (state_24366[(1)]);
if((state_val_24367 === (7))){
var inst_24362 = (state_24366[(2)]);
var state_24366__$1 = state_24366;
var statearr_24368_24388 = state_24366__$1;
(statearr_24368_24388[(2)] = inst_24362);

(statearr_24368_24388[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24367 === (1))){
var state_24366__$1 = state_24366;
var statearr_24369_24389 = state_24366__$1;
(statearr_24369_24389[(2)] = null);

(statearr_24369_24389[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24367 === (4))){
var inst_24346 = (state_24366[(7)]);
var inst_24346__$1 = (state_24366[(2)]);
var state_24366__$1 = (function (){var statearr_24370 = state_24366;
(statearr_24370[(7)] = inst_24346__$1);

return statearr_24370;
})();
if(cljs.core.truth_(inst_24346__$1)){
var statearr_24371_24390 = state_24366__$1;
(statearr_24371_24390[(1)] = (5));

} else {
var statearr_24372_24391 = state_24366__$1;
(statearr_24372_24391[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24367 === (6))){
var state_24366__$1 = state_24366;
var statearr_24373_24392 = state_24366__$1;
(statearr_24373_24392[(2)] = null);

(statearr_24373_24392[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24367 === (3))){
var inst_24364 = (state_24366[(2)]);
var state_24366__$1 = state_24366;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24366__$1,inst_24364);
} else {
if((state_val_24367 === (2))){
var state_24366__$1 = state_24366;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24366__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_24367 === (11))){
var inst_24358 = (state_24366[(2)]);
var state_24366__$1 = (function (){var statearr_24374 = state_24366;
(statearr_24374[(8)] = inst_24358);

return statearr_24374;
})();
var statearr_24375_24393 = state_24366__$1;
(statearr_24375_24393[(2)] = null);

(statearr_24375_24393[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24367 === (9))){
var inst_24352 = (state_24366[(9)]);
var inst_24350 = (state_24366[(10)]);
var inst_24354 = inst_24352.call(null,inst_24350);
var state_24366__$1 = state_24366;
var statearr_24376_24394 = state_24366__$1;
(statearr_24376_24394[(2)] = inst_24354);

(statearr_24376_24394[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24367 === (5))){
var inst_24346 = (state_24366[(7)]);
var inst_24348 = figwheel.client.file_reloading.blocking_load.call(null,inst_24346);
var state_24366__$1 = state_24366;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24366__$1,(8),inst_24348);
} else {
if((state_val_24367 === (10))){
var inst_24350 = (state_24366[(10)]);
var inst_24356 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_24350);
var state_24366__$1 = state_24366;
var statearr_24377_24395 = state_24366__$1;
(statearr_24377_24395[(2)] = inst_24356);

(statearr_24377_24395[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24367 === (8))){
var inst_24352 = (state_24366[(9)]);
var inst_24346 = (state_24366[(7)]);
var inst_24350 = (state_24366[(2)]);
var inst_24351 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_24352__$1 = cljs.core.get.call(null,inst_24351,inst_24346);
var state_24366__$1 = (function (){var statearr_24378 = state_24366;
(statearr_24378[(9)] = inst_24352__$1);

(statearr_24378[(10)] = inst_24350);

return statearr_24378;
})();
if(cljs.core.truth_(inst_24352__$1)){
var statearr_24379_24396 = state_24366__$1;
(statearr_24379_24396[(1)] = (9));

} else {
var statearr_24380_24397 = state_24366__$1;
(statearr_24380_24397[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__21304__auto__))
;
return ((function (switch__21192__auto__,c__21304__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__21193__auto__ = null;
var figwheel$client$file_reloading$state_machine__21193__auto____0 = (function (){
var statearr_24384 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24384[(0)] = figwheel$client$file_reloading$state_machine__21193__auto__);

(statearr_24384[(1)] = (1));

return statearr_24384;
});
var figwheel$client$file_reloading$state_machine__21193__auto____1 = (function (state_24366){
while(true){
var ret_value__21194__auto__ = (function (){try{while(true){
var result__21195__auto__ = switch__21192__auto__.call(null,state_24366);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21195__auto__;
}
break;
}
}catch (e24385){if((e24385 instanceof Object)){
var ex__21196__auto__ = e24385;
var statearr_24386_24398 = state_24366;
(statearr_24386_24398[(5)] = ex__21196__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24366);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24385;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21194__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24399 = state_24366;
state_24366 = G__24399;
continue;
} else {
return ret_value__21194__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__21193__auto__ = function(state_24366){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__21193__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__21193__auto____1.call(this,state_24366);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__21193__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__21193__auto____0;
figwheel$client$file_reloading$state_machine__21193__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__21193__auto____1;
return figwheel$client$file_reloading$state_machine__21193__auto__;
})()
;})(switch__21192__auto__,c__21304__auto__))
})();
var state__21306__auto__ = (function (){var statearr_24387 = f__21305__auto__.call(null);
(statearr_24387[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21304__auto__);

return statearr_24387;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21306__auto__);
});})(c__21304__auto__))
);

return c__21304__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__24400,callback){
var map__24403 = p__24400;
var map__24403__$1 = ((((!((map__24403 == null)))?((((map__24403.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24403.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24403):map__24403);
var file_msg = map__24403__$1;
var namespace = cljs.core.get.call(null,map__24403__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__24403,map__24403__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__24403,map__24403__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__24405){
var map__24408 = p__24405;
var map__24408__$1 = ((((!((map__24408 == null)))?((((map__24408.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24408.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24408):map__24408);
var file_msg = map__24408__$1;
var namespace = cljs.core.get.call(null,map__24408__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__18431__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__18431__auto__){
var or__18443__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__18443__auto__)){
return or__18443__auto__;
} else {
var or__18443__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__18443__auto____$1)){
return or__18443__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__18431__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__24410,callback){
var map__24413 = p__24410;
var map__24413__$1 = ((((!((map__24413 == null)))?((((map__24413.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24413.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24413):map__24413);
var file_msg = map__24413__$1;
var request_url = cljs.core.get.call(null,map__24413__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__24413__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__21304__auto___24501 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21304__auto___24501,out){
return (function (){
var f__21305__auto__ = (function (){var switch__21192__auto__ = ((function (c__21304__auto___24501,out){
return (function (state_24483){
var state_val_24484 = (state_24483[(1)]);
if((state_val_24484 === (1))){
var inst_24461 = cljs.core.nth.call(null,files,(0),null);
var inst_24462 = cljs.core.nthnext.call(null,files,(1));
var inst_24463 = files;
var state_24483__$1 = (function (){var statearr_24485 = state_24483;
(statearr_24485[(7)] = inst_24462);

(statearr_24485[(8)] = inst_24463);

(statearr_24485[(9)] = inst_24461);

return statearr_24485;
})();
var statearr_24486_24502 = state_24483__$1;
(statearr_24486_24502[(2)] = null);

(statearr_24486_24502[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24484 === (2))){
var inst_24466 = (state_24483[(10)]);
var inst_24463 = (state_24483[(8)]);
var inst_24466__$1 = cljs.core.nth.call(null,inst_24463,(0),null);
var inst_24467 = cljs.core.nthnext.call(null,inst_24463,(1));
var inst_24468 = (inst_24466__$1 == null);
var inst_24469 = cljs.core.not.call(null,inst_24468);
var state_24483__$1 = (function (){var statearr_24487 = state_24483;
(statearr_24487[(10)] = inst_24466__$1);

(statearr_24487[(11)] = inst_24467);

return statearr_24487;
})();
if(inst_24469){
var statearr_24488_24503 = state_24483__$1;
(statearr_24488_24503[(1)] = (4));

} else {
var statearr_24489_24504 = state_24483__$1;
(statearr_24489_24504[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24484 === (3))){
var inst_24481 = (state_24483[(2)]);
var state_24483__$1 = state_24483;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24483__$1,inst_24481);
} else {
if((state_val_24484 === (4))){
var inst_24466 = (state_24483[(10)]);
var inst_24471 = figwheel.client.file_reloading.reload_js_file.call(null,inst_24466);
var state_24483__$1 = state_24483;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24483__$1,(7),inst_24471);
} else {
if((state_val_24484 === (5))){
var inst_24477 = cljs.core.async.close_BANG_.call(null,out);
var state_24483__$1 = state_24483;
var statearr_24490_24505 = state_24483__$1;
(statearr_24490_24505[(2)] = inst_24477);

(statearr_24490_24505[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24484 === (6))){
var inst_24479 = (state_24483[(2)]);
var state_24483__$1 = state_24483;
var statearr_24491_24506 = state_24483__$1;
(statearr_24491_24506[(2)] = inst_24479);

(statearr_24491_24506[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24484 === (7))){
var inst_24467 = (state_24483[(11)]);
var inst_24473 = (state_24483[(2)]);
var inst_24474 = cljs.core.async.put_BANG_.call(null,out,inst_24473);
var inst_24463 = inst_24467;
var state_24483__$1 = (function (){var statearr_24492 = state_24483;
(statearr_24492[(12)] = inst_24474);

(statearr_24492[(8)] = inst_24463);

return statearr_24492;
})();
var statearr_24493_24507 = state_24483__$1;
(statearr_24493_24507[(2)] = null);

(statearr_24493_24507[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__21304__auto___24501,out))
;
return ((function (switch__21192__auto__,c__21304__auto___24501,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21193__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21193__auto____0 = (function (){
var statearr_24497 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24497[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21193__auto__);

(statearr_24497[(1)] = (1));

return statearr_24497;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21193__auto____1 = (function (state_24483){
while(true){
var ret_value__21194__auto__ = (function (){try{while(true){
var result__21195__auto__ = switch__21192__auto__.call(null,state_24483);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21195__auto__;
}
break;
}
}catch (e24498){if((e24498 instanceof Object)){
var ex__21196__auto__ = e24498;
var statearr_24499_24508 = state_24483;
(statearr_24499_24508[(5)] = ex__21196__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24483);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24498;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21194__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24509 = state_24483;
state_24483 = G__24509;
continue;
} else {
return ret_value__21194__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21193__auto__ = function(state_24483){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21193__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21193__auto____1.call(this,state_24483);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21193__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21193__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21193__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21193__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21193__auto__;
})()
;})(switch__21192__auto__,c__21304__auto___24501,out))
})();
var state__21306__auto__ = (function (){var statearr_24500 = f__21305__auto__.call(null);
(statearr_24500[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21304__auto___24501);

return statearr_24500;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21306__auto__);
});})(c__21304__auto___24501,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__24510,opts){
var map__24514 = p__24510;
var map__24514__$1 = ((((!((map__24514 == null)))?((((map__24514.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24514.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24514):map__24514);
var eval_body__$1 = cljs.core.get.call(null,map__24514__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__24514__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__18431__auto__ = eval_body__$1;
if(cljs.core.truth_(and__18431__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__18431__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e24516){var e = e24516;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__24517_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__24517_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__24522){
var vec__24523 = p__24522;
var k = cljs.core.nth.call(null,vec__24523,(0),null);
var v = cljs.core.nth.call(null,vec__24523,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__24524){
var vec__24525 = p__24524;
var k = cljs.core.nth.call(null,vec__24525,(0),null);
var v = cljs.core.nth.call(null,vec__24525,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__24529,p__24530){
var map__24777 = p__24529;
var map__24777__$1 = ((((!((map__24777 == null)))?((((map__24777.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24777.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24777):map__24777);
var opts = map__24777__$1;
var before_jsload = cljs.core.get.call(null,map__24777__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__24777__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__24777__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__24778 = p__24530;
var map__24778__$1 = ((((!((map__24778 == null)))?((((map__24778.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24778.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24778):map__24778);
var msg = map__24778__$1;
var files = cljs.core.get.call(null,map__24778__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__24778__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__24778__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__21304__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21304__auto__,map__24777,map__24777__$1,opts,before_jsload,on_jsload,reload_dependents,map__24778,map__24778__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__21305__auto__ = (function (){var switch__21192__auto__ = ((function (c__21304__auto__,map__24777,map__24777__$1,opts,before_jsload,on_jsload,reload_dependents,map__24778,map__24778__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_24931){
var state_val_24932 = (state_24931[(1)]);
if((state_val_24932 === (7))){
var inst_24792 = (state_24931[(7)]);
var inst_24795 = (state_24931[(8)]);
var inst_24794 = (state_24931[(9)]);
var inst_24793 = (state_24931[(10)]);
var inst_24800 = cljs.core._nth.call(null,inst_24793,inst_24795);
var inst_24801 = figwheel.client.file_reloading.eval_body.call(null,inst_24800,opts);
var inst_24802 = (inst_24795 + (1));
var tmp24933 = inst_24792;
var tmp24934 = inst_24794;
var tmp24935 = inst_24793;
var inst_24792__$1 = tmp24933;
var inst_24793__$1 = tmp24935;
var inst_24794__$1 = tmp24934;
var inst_24795__$1 = inst_24802;
var state_24931__$1 = (function (){var statearr_24936 = state_24931;
(statearr_24936[(7)] = inst_24792__$1);

(statearr_24936[(8)] = inst_24795__$1);

(statearr_24936[(11)] = inst_24801);

(statearr_24936[(9)] = inst_24794__$1);

(statearr_24936[(10)] = inst_24793__$1);

return statearr_24936;
})();
var statearr_24937_25023 = state_24931__$1;
(statearr_24937_25023[(2)] = null);

(statearr_24937_25023[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24932 === (20))){
var inst_24835 = (state_24931[(12)]);
var inst_24843 = figwheel.client.file_reloading.sort_files.call(null,inst_24835);
var state_24931__$1 = state_24931;
var statearr_24938_25024 = state_24931__$1;
(statearr_24938_25024[(2)] = inst_24843);

(statearr_24938_25024[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24932 === (27))){
var state_24931__$1 = state_24931;
var statearr_24939_25025 = state_24931__$1;
(statearr_24939_25025[(2)] = null);

(statearr_24939_25025[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24932 === (1))){
var inst_24784 = (state_24931[(13)]);
var inst_24781 = before_jsload.call(null,files);
var inst_24782 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_24783 = (function (){return ((function (inst_24784,inst_24781,inst_24782,state_val_24932,c__21304__auto__,map__24777,map__24777__$1,opts,before_jsload,on_jsload,reload_dependents,map__24778,map__24778__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__24526_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__24526_SHARP_);
});
;})(inst_24784,inst_24781,inst_24782,state_val_24932,c__21304__auto__,map__24777,map__24777__$1,opts,before_jsload,on_jsload,reload_dependents,map__24778,map__24778__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_24784__$1 = cljs.core.filter.call(null,inst_24783,files);
var inst_24785 = cljs.core.not_empty.call(null,inst_24784__$1);
var state_24931__$1 = (function (){var statearr_24940 = state_24931;
(statearr_24940[(14)] = inst_24782);

(statearr_24940[(13)] = inst_24784__$1);

(statearr_24940[(15)] = inst_24781);

return statearr_24940;
})();
if(cljs.core.truth_(inst_24785)){
var statearr_24941_25026 = state_24931__$1;
(statearr_24941_25026[(1)] = (2));

} else {
var statearr_24942_25027 = state_24931__$1;
(statearr_24942_25027[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24932 === (24))){
var state_24931__$1 = state_24931;
var statearr_24943_25028 = state_24931__$1;
(statearr_24943_25028[(2)] = null);

(statearr_24943_25028[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24932 === (39))){
var inst_24885 = (state_24931[(16)]);
var state_24931__$1 = state_24931;
var statearr_24944_25029 = state_24931__$1;
(statearr_24944_25029[(2)] = inst_24885);

(statearr_24944_25029[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24932 === (46))){
var inst_24926 = (state_24931[(2)]);
var state_24931__$1 = state_24931;
var statearr_24945_25030 = state_24931__$1;
(statearr_24945_25030[(2)] = inst_24926);

(statearr_24945_25030[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24932 === (4))){
var inst_24829 = (state_24931[(2)]);
var inst_24830 = cljs.core.List.EMPTY;
var inst_24831 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_24830);
var inst_24832 = (function (){return ((function (inst_24829,inst_24830,inst_24831,state_val_24932,c__21304__auto__,map__24777,map__24777__$1,opts,before_jsload,on_jsload,reload_dependents,map__24778,map__24778__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__24527_SHARP_){
var and__18431__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__24527_SHARP_);
if(cljs.core.truth_(and__18431__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__24527_SHARP_));
} else {
return and__18431__auto__;
}
});
;})(inst_24829,inst_24830,inst_24831,state_val_24932,c__21304__auto__,map__24777,map__24777__$1,opts,before_jsload,on_jsload,reload_dependents,map__24778,map__24778__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_24833 = cljs.core.filter.call(null,inst_24832,files);
var inst_24834 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_24835 = cljs.core.concat.call(null,inst_24833,inst_24834);
var state_24931__$1 = (function (){var statearr_24946 = state_24931;
(statearr_24946[(12)] = inst_24835);

(statearr_24946[(17)] = inst_24829);

(statearr_24946[(18)] = inst_24831);

return statearr_24946;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_24947_25031 = state_24931__$1;
(statearr_24947_25031[(1)] = (16));

} else {
var statearr_24948_25032 = state_24931__$1;
(statearr_24948_25032[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24932 === (15))){
var inst_24819 = (state_24931[(2)]);
var state_24931__$1 = state_24931;
var statearr_24949_25033 = state_24931__$1;
(statearr_24949_25033[(2)] = inst_24819);

(statearr_24949_25033[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24932 === (21))){
var inst_24845 = (state_24931[(19)]);
var inst_24845__$1 = (state_24931[(2)]);
var inst_24846 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_24845__$1);
var state_24931__$1 = (function (){var statearr_24950 = state_24931;
(statearr_24950[(19)] = inst_24845__$1);

return statearr_24950;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24931__$1,(22),inst_24846);
} else {
if((state_val_24932 === (31))){
var inst_24929 = (state_24931[(2)]);
var state_24931__$1 = state_24931;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24931__$1,inst_24929);
} else {
if((state_val_24932 === (32))){
var inst_24885 = (state_24931[(16)]);
var inst_24890 = inst_24885.cljs$lang$protocol_mask$partition0$;
var inst_24891 = (inst_24890 & (64));
var inst_24892 = inst_24885.cljs$core$ISeq$;
var inst_24893 = (inst_24891) || (inst_24892);
var state_24931__$1 = state_24931;
if(cljs.core.truth_(inst_24893)){
var statearr_24951_25034 = state_24931__$1;
(statearr_24951_25034[(1)] = (35));

} else {
var statearr_24952_25035 = state_24931__$1;
(statearr_24952_25035[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24932 === (40))){
var inst_24906 = (state_24931[(20)]);
var inst_24905 = (state_24931[(2)]);
var inst_24906__$1 = cljs.core.get.call(null,inst_24905,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_24907 = cljs.core.get.call(null,inst_24905,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_24908 = cljs.core.not_empty.call(null,inst_24906__$1);
var state_24931__$1 = (function (){var statearr_24953 = state_24931;
(statearr_24953[(20)] = inst_24906__$1);

(statearr_24953[(21)] = inst_24907);

return statearr_24953;
})();
if(cljs.core.truth_(inst_24908)){
var statearr_24954_25036 = state_24931__$1;
(statearr_24954_25036[(1)] = (41));

} else {
var statearr_24955_25037 = state_24931__$1;
(statearr_24955_25037[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24932 === (33))){
var state_24931__$1 = state_24931;
var statearr_24956_25038 = state_24931__$1;
(statearr_24956_25038[(2)] = false);

(statearr_24956_25038[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24932 === (13))){
var inst_24805 = (state_24931[(22)]);
var inst_24809 = cljs.core.chunk_first.call(null,inst_24805);
var inst_24810 = cljs.core.chunk_rest.call(null,inst_24805);
var inst_24811 = cljs.core.count.call(null,inst_24809);
var inst_24792 = inst_24810;
var inst_24793 = inst_24809;
var inst_24794 = inst_24811;
var inst_24795 = (0);
var state_24931__$1 = (function (){var statearr_24957 = state_24931;
(statearr_24957[(7)] = inst_24792);

(statearr_24957[(8)] = inst_24795);

(statearr_24957[(9)] = inst_24794);

(statearr_24957[(10)] = inst_24793);

return statearr_24957;
})();
var statearr_24958_25039 = state_24931__$1;
(statearr_24958_25039[(2)] = null);

(statearr_24958_25039[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24932 === (22))){
var inst_24853 = (state_24931[(23)]);
var inst_24845 = (state_24931[(19)]);
var inst_24849 = (state_24931[(24)]);
var inst_24848 = (state_24931[(25)]);
var inst_24848__$1 = (state_24931[(2)]);
var inst_24849__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_24848__$1);
var inst_24850 = (function (){var all_files = inst_24845;
var res_SINGLEQUOTE_ = inst_24848__$1;
var res = inst_24849__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_24853,inst_24845,inst_24849,inst_24848,inst_24848__$1,inst_24849__$1,state_val_24932,c__21304__auto__,map__24777,map__24777__$1,opts,before_jsload,on_jsload,reload_dependents,map__24778,map__24778__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__24528_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__24528_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_24853,inst_24845,inst_24849,inst_24848,inst_24848__$1,inst_24849__$1,state_val_24932,c__21304__auto__,map__24777,map__24777__$1,opts,before_jsload,on_jsload,reload_dependents,map__24778,map__24778__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_24851 = cljs.core.filter.call(null,inst_24850,inst_24848__$1);
var inst_24852 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_24853__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_24852);
var inst_24854 = cljs.core.not_empty.call(null,inst_24853__$1);
var state_24931__$1 = (function (){var statearr_24959 = state_24931;
(statearr_24959[(26)] = inst_24851);

(statearr_24959[(23)] = inst_24853__$1);

(statearr_24959[(24)] = inst_24849__$1);

(statearr_24959[(25)] = inst_24848__$1);

return statearr_24959;
})();
if(cljs.core.truth_(inst_24854)){
var statearr_24960_25040 = state_24931__$1;
(statearr_24960_25040[(1)] = (23));

} else {
var statearr_24961_25041 = state_24931__$1;
(statearr_24961_25041[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24932 === (36))){
var state_24931__$1 = state_24931;
var statearr_24962_25042 = state_24931__$1;
(statearr_24962_25042[(2)] = false);

(statearr_24962_25042[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24932 === (41))){
var inst_24906 = (state_24931[(20)]);
var inst_24910 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_24911 = cljs.core.map.call(null,inst_24910,inst_24906);
var inst_24912 = cljs.core.pr_str.call(null,inst_24911);
var inst_24913 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_24912)].join('');
var inst_24914 = figwheel.client.utils.log.call(null,inst_24913);
var state_24931__$1 = state_24931;
var statearr_24963_25043 = state_24931__$1;
(statearr_24963_25043[(2)] = inst_24914);

(statearr_24963_25043[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24932 === (43))){
var inst_24907 = (state_24931[(21)]);
var inst_24917 = (state_24931[(2)]);
var inst_24918 = cljs.core.not_empty.call(null,inst_24907);
var state_24931__$1 = (function (){var statearr_24964 = state_24931;
(statearr_24964[(27)] = inst_24917);

return statearr_24964;
})();
if(cljs.core.truth_(inst_24918)){
var statearr_24965_25044 = state_24931__$1;
(statearr_24965_25044[(1)] = (44));

} else {
var statearr_24966_25045 = state_24931__$1;
(statearr_24966_25045[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24932 === (29))){
var inst_24851 = (state_24931[(26)]);
var inst_24885 = (state_24931[(16)]);
var inst_24853 = (state_24931[(23)]);
var inst_24845 = (state_24931[(19)]);
var inst_24849 = (state_24931[(24)]);
var inst_24848 = (state_24931[(25)]);
var inst_24881 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_24884 = (function (){var all_files = inst_24845;
var res_SINGLEQUOTE_ = inst_24848;
var res = inst_24849;
var files_not_loaded = inst_24851;
var dependencies_that_loaded = inst_24853;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_24851,inst_24885,inst_24853,inst_24845,inst_24849,inst_24848,inst_24881,state_val_24932,c__21304__auto__,map__24777,map__24777__$1,opts,before_jsload,on_jsload,reload_dependents,map__24778,map__24778__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__24883){
var map__24967 = p__24883;
var map__24967__$1 = ((((!((map__24967 == null)))?((((map__24967.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24967.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24967):map__24967);
var namespace = cljs.core.get.call(null,map__24967__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_24851,inst_24885,inst_24853,inst_24845,inst_24849,inst_24848,inst_24881,state_val_24932,c__21304__auto__,map__24777,map__24777__$1,opts,before_jsload,on_jsload,reload_dependents,map__24778,map__24778__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_24885__$1 = cljs.core.group_by.call(null,inst_24884,inst_24851);
var inst_24887 = (inst_24885__$1 == null);
var inst_24888 = cljs.core.not.call(null,inst_24887);
var state_24931__$1 = (function (){var statearr_24969 = state_24931;
(statearr_24969[(16)] = inst_24885__$1);

(statearr_24969[(28)] = inst_24881);

return statearr_24969;
})();
if(inst_24888){
var statearr_24970_25046 = state_24931__$1;
(statearr_24970_25046[(1)] = (32));

} else {
var statearr_24971_25047 = state_24931__$1;
(statearr_24971_25047[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24932 === (44))){
var inst_24907 = (state_24931[(21)]);
var inst_24920 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_24907);
var inst_24921 = cljs.core.pr_str.call(null,inst_24920);
var inst_24922 = [cljs.core.str("not required: "),cljs.core.str(inst_24921)].join('');
var inst_24923 = figwheel.client.utils.log.call(null,inst_24922);
var state_24931__$1 = state_24931;
var statearr_24972_25048 = state_24931__$1;
(statearr_24972_25048[(2)] = inst_24923);

(statearr_24972_25048[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24932 === (6))){
var inst_24826 = (state_24931[(2)]);
var state_24931__$1 = state_24931;
var statearr_24973_25049 = state_24931__$1;
(statearr_24973_25049[(2)] = inst_24826);

(statearr_24973_25049[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24932 === (28))){
var inst_24851 = (state_24931[(26)]);
var inst_24878 = (state_24931[(2)]);
var inst_24879 = cljs.core.not_empty.call(null,inst_24851);
var state_24931__$1 = (function (){var statearr_24974 = state_24931;
(statearr_24974[(29)] = inst_24878);

return statearr_24974;
})();
if(cljs.core.truth_(inst_24879)){
var statearr_24975_25050 = state_24931__$1;
(statearr_24975_25050[(1)] = (29));

} else {
var statearr_24976_25051 = state_24931__$1;
(statearr_24976_25051[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24932 === (25))){
var inst_24849 = (state_24931[(24)]);
var inst_24865 = (state_24931[(2)]);
var inst_24866 = cljs.core.not_empty.call(null,inst_24849);
var state_24931__$1 = (function (){var statearr_24977 = state_24931;
(statearr_24977[(30)] = inst_24865);

return statearr_24977;
})();
if(cljs.core.truth_(inst_24866)){
var statearr_24978_25052 = state_24931__$1;
(statearr_24978_25052[(1)] = (26));

} else {
var statearr_24979_25053 = state_24931__$1;
(statearr_24979_25053[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24932 === (34))){
var inst_24900 = (state_24931[(2)]);
var state_24931__$1 = state_24931;
if(cljs.core.truth_(inst_24900)){
var statearr_24980_25054 = state_24931__$1;
(statearr_24980_25054[(1)] = (38));

} else {
var statearr_24981_25055 = state_24931__$1;
(statearr_24981_25055[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24932 === (17))){
var state_24931__$1 = state_24931;
var statearr_24982_25056 = state_24931__$1;
(statearr_24982_25056[(2)] = recompile_dependents);

(statearr_24982_25056[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24932 === (3))){
var state_24931__$1 = state_24931;
var statearr_24983_25057 = state_24931__$1;
(statearr_24983_25057[(2)] = null);

(statearr_24983_25057[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24932 === (12))){
var inst_24822 = (state_24931[(2)]);
var state_24931__$1 = state_24931;
var statearr_24984_25058 = state_24931__$1;
(statearr_24984_25058[(2)] = inst_24822);

(statearr_24984_25058[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24932 === (2))){
var inst_24784 = (state_24931[(13)]);
var inst_24791 = cljs.core.seq.call(null,inst_24784);
var inst_24792 = inst_24791;
var inst_24793 = null;
var inst_24794 = (0);
var inst_24795 = (0);
var state_24931__$1 = (function (){var statearr_24985 = state_24931;
(statearr_24985[(7)] = inst_24792);

(statearr_24985[(8)] = inst_24795);

(statearr_24985[(9)] = inst_24794);

(statearr_24985[(10)] = inst_24793);

return statearr_24985;
})();
var statearr_24986_25059 = state_24931__$1;
(statearr_24986_25059[(2)] = null);

(statearr_24986_25059[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24932 === (23))){
var inst_24851 = (state_24931[(26)]);
var inst_24853 = (state_24931[(23)]);
var inst_24845 = (state_24931[(19)]);
var inst_24849 = (state_24931[(24)]);
var inst_24848 = (state_24931[(25)]);
var inst_24856 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_24858 = (function (){var all_files = inst_24845;
var res_SINGLEQUOTE_ = inst_24848;
var res = inst_24849;
var files_not_loaded = inst_24851;
var dependencies_that_loaded = inst_24853;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_24851,inst_24853,inst_24845,inst_24849,inst_24848,inst_24856,state_val_24932,c__21304__auto__,map__24777,map__24777__$1,opts,before_jsload,on_jsload,reload_dependents,map__24778,map__24778__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__24857){
var map__24987 = p__24857;
var map__24987__$1 = ((((!((map__24987 == null)))?((((map__24987.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24987.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24987):map__24987);
var request_url = cljs.core.get.call(null,map__24987__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_24851,inst_24853,inst_24845,inst_24849,inst_24848,inst_24856,state_val_24932,c__21304__auto__,map__24777,map__24777__$1,opts,before_jsload,on_jsload,reload_dependents,map__24778,map__24778__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_24859 = cljs.core.reverse.call(null,inst_24853);
var inst_24860 = cljs.core.map.call(null,inst_24858,inst_24859);
var inst_24861 = cljs.core.pr_str.call(null,inst_24860);
var inst_24862 = figwheel.client.utils.log.call(null,inst_24861);
var state_24931__$1 = (function (){var statearr_24989 = state_24931;
(statearr_24989[(31)] = inst_24856);

return statearr_24989;
})();
var statearr_24990_25060 = state_24931__$1;
(statearr_24990_25060[(2)] = inst_24862);

(statearr_24990_25060[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24932 === (35))){
var state_24931__$1 = state_24931;
var statearr_24991_25061 = state_24931__$1;
(statearr_24991_25061[(2)] = true);

(statearr_24991_25061[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24932 === (19))){
var inst_24835 = (state_24931[(12)]);
var inst_24841 = figwheel.client.file_reloading.expand_files.call(null,inst_24835);
var state_24931__$1 = state_24931;
var statearr_24992_25062 = state_24931__$1;
(statearr_24992_25062[(2)] = inst_24841);

(statearr_24992_25062[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24932 === (11))){
var state_24931__$1 = state_24931;
var statearr_24993_25063 = state_24931__$1;
(statearr_24993_25063[(2)] = null);

(statearr_24993_25063[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24932 === (9))){
var inst_24824 = (state_24931[(2)]);
var state_24931__$1 = state_24931;
var statearr_24994_25064 = state_24931__$1;
(statearr_24994_25064[(2)] = inst_24824);

(statearr_24994_25064[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24932 === (5))){
var inst_24795 = (state_24931[(8)]);
var inst_24794 = (state_24931[(9)]);
var inst_24797 = (inst_24795 < inst_24794);
var inst_24798 = inst_24797;
var state_24931__$1 = state_24931;
if(cljs.core.truth_(inst_24798)){
var statearr_24995_25065 = state_24931__$1;
(statearr_24995_25065[(1)] = (7));

} else {
var statearr_24996_25066 = state_24931__$1;
(statearr_24996_25066[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24932 === (14))){
var inst_24805 = (state_24931[(22)]);
var inst_24814 = cljs.core.first.call(null,inst_24805);
var inst_24815 = figwheel.client.file_reloading.eval_body.call(null,inst_24814,opts);
var inst_24816 = cljs.core.next.call(null,inst_24805);
var inst_24792 = inst_24816;
var inst_24793 = null;
var inst_24794 = (0);
var inst_24795 = (0);
var state_24931__$1 = (function (){var statearr_24997 = state_24931;
(statearr_24997[(32)] = inst_24815);

(statearr_24997[(7)] = inst_24792);

(statearr_24997[(8)] = inst_24795);

(statearr_24997[(9)] = inst_24794);

(statearr_24997[(10)] = inst_24793);

return statearr_24997;
})();
var statearr_24998_25067 = state_24931__$1;
(statearr_24998_25067[(2)] = null);

(statearr_24998_25067[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24932 === (45))){
var state_24931__$1 = state_24931;
var statearr_24999_25068 = state_24931__$1;
(statearr_24999_25068[(2)] = null);

(statearr_24999_25068[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24932 === (26))){
var inst_24851 = (state_24931[(26)]);
var inst_24853 = (state_24931[(23)]);
var inst_24845 = (state_24931[(19)]);
var inst_24849 = (state_24931[(24)]);
var inst_24848 = (state_24931[(25)]);
var inst_24868 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_24870 = (function (){var all_files = inst_24845;
var res_SINGLEQUOTE_ = inst_24848;
var res = inst_24849;
var files_not_loaded = inst_24851;
var dependencies_that_loaded = inst_24853;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_24851,inst_24853,inst_24845,inst_24849,inst_24848,inst_24868,state_val_24932,c__21304__auto__,map__24777,map__24777__$1,opts,before_jsload,on_jsload,reload_dependents,map__24778,map__24778__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__24869){
var map__25000 = p__24869;
var map__25000__$1 = ((((!((map__25000 == null)))?((((map__25000.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25000.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25000):map__25000);
var namespace = cljs.core.get.call(null,map__25000__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__25000__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_24851,inst_24853,inst_24845,inst_24849,inst_24848,inst_24868,state_val_24932,c__21304__auto__,map__24777,map__24777__$1,opts,before_jsload,on_jsload,reload_dependents,map__24778,map__24778__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_24871 = cljs.core.map.call(null,inst_24870,inst_24849);
var inst_24872 = cljs.core.pr_str.call(null,inst_24871);
var inst_24873 = figwheel.client.utils.log.call(null,inst_24872);
var inst_24874 = (function (){var all_files = inst_24845;
var res_SINGLEQUOTE_ = inst_24848;
var res = inst_24849;
var files_not_loaded = inst_24851;
var dependencies_that_loaded = inst_24853;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_24851,inst_24853,inst_24845,inst_24849,inst_24848,inst_24868,inst_24870,inst_24871,inst_24872,inst_24873,state_val_24932,c__21304__auto__,map__24777,map__24777__$1,opts,before_jsload,on_jsload,reload_dependents,map__24778,map__24778__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_24851,inst_24853,inst_24845,inst_24849,inst_24848,inst_24868,inst_24870,inst_24871,inst_24872,inst_24873,state_val_24932,c__21304__auto__,map__24777,map__24777__$1,opts,before_jsload,on_jsload,reload_dependents,map__24778,map__24778__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_24875 = setTimeout(inst_24874,(10));
var state_24931__$1 = (function (){var statearr_25002 = state_24931;
(statearr_25002[(33)] = inst_24873);

(statearr_25002[(34)] = inst_24868);

return statearr_25002;
})();
var statearr_25003_25069 = state_24931__$1;
(statearr_25003_25069[(2)] = inst_24875);

(statearr_25003_25069[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24932 === (16))){
var state_24931__$1 = state_24931;
var statearr_25004_25070 = state_24931__$1;
(statearr_25004_25070[(2)] = reload_dependents);

(statearr_25004_25070[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24932 === (38))){
var inst_24885 = (state_24931[(16)]);
var inst_24902 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24885);
var state_24931__$1 = state_24931;
var statearr_25005_25071 = state_24931__$1;
(statearr_25005_25071[(2)] = inst_24902);

(statearr_25005_25071[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24932 === (30))){
var state_24931__$1 = state_24931;
var statearr_25006_25072 = state_24931__$1;
(statearr_25006_25072[(2)] = null);

(statearr_25006_25072[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24932 === (10))){
var inst_24805 = (state_24931[(22)]);
var inst_24807 = cljs.core.chunked_seq_QMARK_.call(null,inst_24805);
var state_24931__$1 = state_24931;
if(inst_24807){
var statearr_25007_25073 = state_24931__$1;
(statearr_25007_25073[(1)] = (13));

} else {
var statearr_25008_25074 = state_24931__$1;
(statearr_25008_25074[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24932 === (18))){
var inst_24839 = (state_24931[(2)]);
var state_24931__$1 = state_24931;
if(cljs.core.truth_(inst_24839)){
var statearr_25009_25075 = state_24931__$1;
(statearr_25009_25075[(1)] = (19));

} else {
var statearr_25010_25076 = state_24931__$1;
(statearr_25010_25076[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24932 === (42))){
var state_24931__$1 = state_24931;
var statearr_25011_25077 = state_24931__$1;
(statearr_25011_25077[(2)] = null);

(statearr_25011_25077[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24932 === (37))){
var inst_24897 = (state_24931[(2)]);
var state_24931__$1 = state_24931;
var statearr_25012_25078 = state_24931__$1;
(statearr_25012_25078[(2)] = inst_24897);

(statearr_25012_25078[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24932 === (8))){
var inst_24792 = (state_24931[(7)]);
var inst_24805 = (state_24931[(22)]);
var inst_24805__$1 = cljs.core.seq.call(null,inst_24792);
var state_24931__$1 = (function (){var statearr_25013 = state_24931;
(statearr_25013[(22)] = inst_24805__$1);

return statearr_25013;
})();
if(inst_24805__$1){
var statearr_25014_25079 = state_24931__$1;
(statearr_25014_25079[(1)] = (10));

} else {
var statearr_25015_25080 = state_24931__$1;
(statearr_25015_25080[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__21304__auto__,map__24777,map__24777__$1,opts,before_jsload,on_jsload,reload_dependents,map__24778,map__24778__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__21192__auto__,c__21304__auto__,map__24777,map__24777__$1,opts,before_jsload,on_jsload,reload_dependents,map__24778,map__24778__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21193__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21193__auto____0 = (function (){
var statearr_25019 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25019[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__21193__auto__);

(statearr_25019[(1)] = (1));

return statearr_25019;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21193__auto____1 = (function (state_24931){
while(true){
var ret_value__21194__auto__ = (function (){try{while(true){
var result__21195__auto__ = switch__21192__auto__.call(null,state_24931);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21195__auto__;
}
break;
}
}catch (e25020){if((e25020 instanceof Object)){
var ex__21196__auto__ = e25020;
var statearr_25021_25081 = state_24931;
(statearr_25021_25081[(5)] = ex__21196__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24931);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25020;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21194__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25082 = state_24931;
state_24931 = G__25082;
continue;
} else {
return ret_value__21194__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__21193__auto__ = function(state_24931){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21193__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21193__auto____1.call(this,state_24931);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__21193__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__21193__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__21193__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__21193__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21193__auto__;
})()
;})(switch__21192__auto__,c__21304__auto__,map__24777,map__24777__$1,opts,before_jsload,on_jsload,reload_dependents,map__24778,map__24778__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__21306__auto__ = (function (){var statearr_25022 = f__21305__auto__.call(null);
(statearr_25022[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21304__auto__);

return statearr_25022;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21306__auto__);
});})(c__21304__auto__,map__24777,map__24777__$1,opts,before_jsload,on_jsload,reload_dependents,map__24778,map__24778__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__21304__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__25085,link){
var map__25088 = p__25085;
var map__25088__$1 = ((((!((map__25088 == null)))?((((map__25088.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25088.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25088):map__25088);
var file = cljs.core.get.call(null,map__25088__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__25088,map__25088__$1,file){
return (function (p1__25083_SHARP_,p2__25084_SHARP_){
if(cljs.core._EQ_.call(null,p1__25083_SHARP_,p2__25084_SHARP_)){
return p1__25083_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__25088,map__25088__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__25094){
var map__25095 = p__25094;
var map__25095__$1 = ((((!((map__25095 == null)))?((((map__25095.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25095.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25095):map__25095);
var match_length = cljs.core.get.call(null,map__25095__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__25095__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__25090_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__25090_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args25097 = [];
var len__19513__auto___25100 = arguments.length;
var i__19514__auto___25101 = (0);
while(true){
if((i__19514__auto___25101 < len__19513__auto___25100)){
args25097.push((arguments[i__19514__auto___25101]));

var G__25102 = (i__19514__auto___25101 + (1));
i__19514__auto___25101 = G__25102;
continue;
} else {
}
break;
}

var G__25099 = args25097.length;
switch (G__25099) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25097.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__25104_SHARP_,p2__25105_SHARP_){
return cljs.core.assoc.call(null,p1__25104_SHARP_,cljs.core.get.call(null,p2__25105_SHARP_,key),p2__25105_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__25106){
var map__25109 = p__25106;
var map__25109__$1 = ((((!((map__25109 == null)))?((((map__25109.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25109.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25109):map__25109);
var f_data = map__25109__$1;
var file = cljs.core.get.call(null,map__25109__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__25111,files_msg){
var map__25118 = p__25111;
var map__25118__$1 = ((((!((map__25118 == null)))?((((map__25118.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25118.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25118):map__25118);
var opts = map__25118__$1;
var on_cssload = cljs.core.get.call(null,map__25118__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__25120_25124 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__25121_25125 = null;
var count__25122_25126 = (0);
var i__25123_25127 = (0);
while(true){
if((i__25123_25127 < count__25122_25126)){
var f_25128 = cljs.core._nth.call(null,chunk__25121_25125,i__25123_25127);
figwheel.client.file_reloading.reload_css_file.call(null,f_25128);

var G__25129 = seq__25120_25124;
var G__25130 = chunk__25121_25125;
var G__25131 = count__25122_25126;
var G__25132 = (i__25123_25127 + (1));
seq__25120_25124 = G__25129;
chunk__25121_25125 = G__25130;
count__25122_25126 = G__25131;
i__25123_25127 = G__25132;
continue;
} else {
var temp__4657__auto___25133 = cljs.core.seq.call(null,seq__25120_25124);
if(temp__4657__auto___25133){
var seq__25120_25134__$1 = temp__4657__auto___25133;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25120_25134__$1)){
var c__19254__auto___25135 = cljs.core.chunk_first.call(null,seq__25120_25134__$1);
var G__25136 = cljs.core.chunk_rest.call(null,seq__25120_25134__$1);
var G__25137 = c__19254__auto___25135;
var G__25138 = cljs.core.count.call(null,c__19254__auto___25135);
var G__25139 = (0);
seq__25120_25124 = G__25136;
chunk__25121_25125 = G__25137;
count__25122_25126 = G__25138;
i__25123_25127 = G__25139;
continue;
} else {
var f_25140 = cljs.core.first.call(null,seq__25120_25134__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_25140);

var G__25141 = cljs.core.next.call(null,seq__25120_25134__$1);
var G__25142 = null;
var G__25143 = (0);
var G__25144 = (0);
seq__25120_25124 = G__25141;
chunk__25121_25125 = G__25142;
count__25122_25126 = G__25143;
i__25123_25127 = G__25144;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__25118,map__25118__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__25118,map__25118__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1463713700608