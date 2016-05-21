// Compiled by ClojureScript 1.8.51 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('cljs.core.async');
goog.require('goog.string');

figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(var_args){
var args__19520__auto__ = [];
var len__19513__auto___25346 = arguments.length;
var i__19514__auto___25347 = (0);
while(true){
if((i__19514__auto___25347 < len__19513__auto___25346)){
args__19520__auto__.push((arguments[i__19514__auto___25347]));

var G__25348 = (i__19514__auto___25347 + (1));
i__19514__auto___25347 = G__25348;
continue;
} else {
}
break;
}

var argseq__19521__auto__ = ((((2) < args__19520__auto__.length))?(new cljs.core.IndexedSeq(args__19520__auto__.slice((2)),(0),null)):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19521__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__25338_25349 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__25339_25350 = null;
var count__25340_25351 = (0);
var i__25341_25352 = (0);
while(true){
if((i__25341_25352 < count__25340_25351)){
var k_25353 = cljs.core._nth.call(null,chunk__25339_25350,i__25341_25352);
e.setAttribute(cljs.core.name.call(null,k_25353),cljs.core.get.call(null,attrs,k_25353));

var G__25354 = seq__25338_25349;
var G__25355 = chunk__25339_25350;
var G__25356 = count__25340_25351;
var G__25357 = (i__25341_25352 + (1));
seq__25338_25349 = G__25354;
chunk__25339_25350 = G__25355;
count__25340_25351 = G__25356;
i__25341_25352 = G__25357;
continue;
} else {
var temp__4657__auto___25358 = cljs.core.seq.call(null,seq__25338_25349);
if(temp__4657__auto___25358){
var seq__25338_25359__$1 = temp__4657__auto___25358;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25338_25359__$1)){
var c__19254__auto___25360 = cljs.core.chunk_first.call(null,seq__25338_25359__$1);
var G__25361 = cljs.core.chunk_rest.call(null,seq__25338_25359__$1);
var G__25362 = c__19254__auto___25360;
var G__25363 = cljs.core.count.call(null,c__19254__auto___25360);
var G__25364 = (0);
seq__25338_25349 = G__25361;
chunk__25339_25350 = G__25362;
count__25340_25351 = G__25363;
i__25341_25352 = G__25364;
continue;
} else {
var k_25365 = cljs.core.first.call(null,seq__25338_25359__$1);
e.setAttribute(cljs.core.name.call(null,k_25365),cljs.core.get.call(null,attrs,k_25365));

var G__25366 = cljs.core.next.call(null,seq__25338_25359__$1);
var G__25367 = null;
var G__25368 = (0);
var G__25369 = (0);
seq__25338_25349 = G__25366;
chunk__25339_25350 = G__25367;
count__25340_25351 = G__25368;
i__25341_25352 = G__25369;
continue;
}
} else {
}
}
break;
}

var seq__25342_25370 = cljs.core.seq.call(null,children);
var chunk__25343_25371 = null;
var count__25344_25372 = (0);
var i__25345_25373 = (0);
while(true){
if((i__25345_25373 < count__25344_25372)){
var ch_25374 = cljs.core._nth.call(null,chunk__25343_25371,i__25345_25373);
e.appendChild(ch_25374);

var G__25375 = seq__25342_25370;
var G__25376 = chunk__25343_25371;
var G__25377 = count__25344_25372;
var G__25378 = (i__25345_25373 + (1));
seq__25342_25370 = G__25375;
chunk__25343_25371 = G__25376;
count__25344_25372 = G__25377;
i__25345_25373 = G__25378;
continue;
} else {
var temp__4657__auto___25379 = cljs.core.seq.call(null,seq__25342_25370);
if(temp__4657__auto___25379){
var seq__25342_25380__$1 = temp__4657__auto___25379;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25342_25380__$1)){
var c__19254__auto___25381 = cljs.core.chunk_first.call(null,seq__25342_25380__$1);
var G__25382 = cljs.core.chunk_rest.call(null,seq__25342_25380__$1);
var G__25383 = c__19254__auto___25381;
var G__25384 = cljs.core.count.call(null,c__19254__auto___25381);
var G__25385 = (0);
seq__25342_25370 = G__25382;
chunk__25343_25371 = G__25383;
count__25344_25372 = G__25384;
i__25345_25373 = G__25385;
continue;
} else {
var ch_25386 = cljs.core.first.call(null,seq__25342_25380__$1);
e.appendChild(ch_25386);

var G__25387 = cljs.core.next.call(null,seq__25342_25380__$1);
var G__25388 = null;
var G__25389 = (0);
var G__25390 = (0);
seq__25342_25370 = G__25387;
chunk__25343_25371 = G__25388;
count__25344_25372 = G__25389;
i__25345_25373 = G__25390;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq25335){
var G__25336 = cljs.core.first.call(null,seq25335);
var seq25335__$1 = cljs.core.next.call(null,seq25335);
var G__25337 = cljs.core.first.call(null,seq25335__$1);
var seq25335__$2 = cljs.core.next.call(null,seq25335__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__25336,G__25337,seq25335__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__19368__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__19369__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__19370__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__19371__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__19372__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__19368__auto__,prefer_table__19369__auto__,method_cache__19370__auto__,cached_hierarchy__19371__auto__,hierarchy__19372__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__19368__auto__,prefer_table__19369__auto__,method_cache__19370__auto__,cached_hierarchy__19371__auto__,hierarchy__19372__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__19372__auto__,method_table__19368__auto__,prefer_table__19369__auto__,method_cache__19370__auto__,cached_hierarchy__19371__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_25391 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_25391.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_25391.innerHTML = figwheel.client.heads_up.cljs_logo_svg;

el_25391.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_25391);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__25392,st_map){
var map__25397 = p__25392;
var map__25397__$1 = ((((!((map__25397 == null)))?((((map__25397.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25397.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25397):map__25397);
var container_el = cljs.core.get.call(null,map__25397__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__25397,map__25397__$1,container_el){
return (function (p__25399){
var vec__25400 = p__25399;
var k = cljs.core.nth.call(null,vec__25400,(0),null);
var v = cljs.core.nth.call(null,vec__25400,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__25397,map__25397__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__25401,dom_str){
var map__25404 = p__25401;
var map__25404__$1 = ((((!((map__25404 == null)))?((((map__25404.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25404.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25404):map__25404);
var c = map__25404__$1;
var content_area_el = cljs.core.get.call(null,map__25404__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__25406){
var map__25409 = p__25406;
var map__25409__$1 = ((((!((map__25409 == null)))?((((map__25409.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25409.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25409):map__25409);
var content_area_el = cljs.core.get.call(null,map__25409__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__21304__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21304__auto__){
return (function (){
var f__21305__auto__ = (function (){var switch__21192__auto__ = ((function (c__21304__auto__){
return (function (state_25452){
var state_val_25453 = (state_25452[(1)]);
if((state_val_25453 === (1))){
var inst_25437 = (state_25452[(7)]);
var inst_25437__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_25438 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_25439 = ["10px","10px","100%","68px","1.0"];
var inst_25440 = cljs.core.PersistentHashMap.fromArrays(inst_25438,inst_25439);
var inst_25441 = cljs.core.merge.call(null,inst_25440,style);
var inst_25442 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_25437__$1,inst_25441);
var inst_25443 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_25437__$1,msg);
var inst_25444 = cljs.core.async.timeout.call(null,(300));
var state_25452__$1 = (function (){var statearr_25454 = state_25452;
(statearr_25454[(7)] = inst_25437__$1);

(statearr_25454[(8)] = inst_25442);

(statearr_25454[(9)] = inst_25443);

return statearr_25454;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25452__$1,(2),inst_25444);
} else {
if((state_val_25453 === (2))){
var inst_25437 = (state_25452[(7)]);
var inst_25446 = (state_25452[(2)]);
var inst_25447 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_25448 = ["auto"];
var inst_25449 = cljs.core.PersistentHashMap.fromArrays(inst_25447,inst_25448);
var inst_25450 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_25437,inst_25449);
var state_25452__$1 = (function (){var statearr_25455 = state_25452;
(statearr_25455[(10)] = inst_25446);

return statearr_25455;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25452__$1,inst_25450);
} else {
return null;
}
}
});})(c__21304__auto__))
;
return ((function (switch__21192__auto__,c__21304__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__21193__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__21193__auto____0 = (function (){
var statearr_25459 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25459[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__21193__auto__);

(statearr_25459[(1)] = (1));

return statearr_25459;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__21193__auto____1 = (function (state_25452){
while(true){
var ret_value__21194__auto__ = (function (){try{while(true){
var result__21195__auto__ = switch__21192__auto__.call(null,state_25452);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21195__auto__;
}
break;
}
}catch (e25460){if((e25460 instanceof Object)){
var ex__21196__auto__ = e25460;
var statearr_25461_25463 = state_25452;
(statearr_25461_25463[(5)] = ex__21196__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25452);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25460;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21194__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25464 = state_25452;
state_25452 = G__25464;
continue;
} else {
return ret_value__21194__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__21193__auto__ = function(state_25452){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__21193__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__21193__auto____1.call(this,state_25452);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__21193__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__21193__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__21193__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__21193__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__21193__auto__;
})()
;})(switch__21192__auto__,c__21304__auto__))
})();
var state__21306__auto__ = (function (){var statearr_25462 = f__21305__auto__.call(null);
(statearr_25462[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21304__auto__);

return statearr_25462;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21306__auto__);
});})(c__21304__auto__))
);

return c__21304__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function figwheel$client$heads_up$file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg){
var msg__$1 = goog.string.htmlEscape(msg);
var temp__4655__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg__$1);
if(cljs.core.truth_(temp__4655__auto__)){
var vec__25466 = temp__4655__auto__;
var f = cljs.core.nth.call(null,vec__25466,(0),null);
var ln = cljs.core.nth.call(null,vec__25466,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg__$1);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg__$1),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__25469 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__25469,(0),null);
var file_line = cljs.core.nth.call(null,vec__25469,(1),null);
var file_column = cljs.core.nth.call(null,vec__25469,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__25469,file_name,file_line,file_column){
return (function (p1__25467_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(goog.string.htmlEscape(p1__25467_SHARP_)),cljs.core.str("</div>")].join('');
});})(vec__25469,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__18443__auto__ = file_line;
if(cljs.core.truth_(or__18443__auto__)){
return or__18443__auto__;
} else {
var and__18431__auto__ = cause;
if(cljs.core.truth_(and__18431__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__18431__auto__;
}
}
})(),[cljs.core.str(msg),cljs.core.str((cljs.core.truth_(cause)?[cljs.core.str("Error on file "),cljs.core.str(goog.string.htmlEscape(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause))),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''):""))].join('')))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function figwheel$client$heads_up$append_message(message){
var map__25472 = figwheel.client.heads_up.ensure_container.call(null);
var map__25472__$1 = ((((!((map__25472 == null)))?((((map__25472.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25472.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25472):map__25472);
var content_area_el = cljs.core.get.call(null,map__25472__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__21304__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21304__auto__){
return (function (){
var f__21305__auto__ = (function (){var switch__21192__auto__ = ((function (c__21304__auto__){
return (function (state_25520){
var state_val_25521 = (state_25520[(1)]);
if((state_val_25521 === (1))){
var inst_25503 = (state_25520[(7)]);
var inst_25503__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_25504 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_25505 = ["0.0"];
var inst_25506 = cljs.core.PersistentHashMap.fromArrays(inst_25504,inst_25505);
var inst_25507 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_25503__$1,inst_25506);
var inst_25508 = cljs.core.async.timeout.call(null,(300));
var state_25520__$1 = (function (){var statearr_25522 = state_25520;
(statearr_25522[(8)] = inst_25507);

(statearr_25522[(7)] = inst_25503__$1);

return statearr_25522;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25520__$1,(2),inst_25508);
} else {
if((state_val_25521 === (2))){
var inst_25503 = (state_25520[(7)]);
var inst_25510 = (state_25520[(2)]);
var inst_25511 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_25512 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_25513 = cljs.core.PersistentHashMap.fromArrays(inst_25511,inst_25512);
var inst_25514 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_25503,inst_25513);
var inst_25515 = cljs.core.async.timeout.call(null,(200));
var state_25520__$1 = (function (){var statearr_25523 = state_25520;
(statearr_25523[(9)] = inst_25510);

(statearr_25523[(10)] = inst_25514);

return statearr_25523;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25520__$1,(3),inst_25515);
} else {
if((state_val_25521 === (3))){
var inst_25503 = (state_25520[(7)]);
var inst_25517 = (state_25520[(2)]);
var inst_25518 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_25503,"");
var state_25520__$1 = (function (){var statearr_25524 = state_25520;
(statearr_25524[(11)] = inst_25517);

return statearr_25524;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25520__$1,inst_25518);
} else {
return null;
}
}
}
});})(c__21304__auto__))
;
return ((function (switch__21192__auto__,c__21304__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__21193__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__21193__auto____0 = (function (){
var statearr_25528 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25528[(0)] = figwheel$client$heads_up$clear_$_state_machine__21193__auto__);

(statearr_25528[(1)] = (1));

return statearr_25528;
});
var figwheel$client$heads_up$clear_$_state_machine__21193__auto____1 = (function (state_25520){
while(true){
var ret_value__21194__auto__ = (function (){try{while(true){
var result__21195__auto__ = switch__21192__auto__.call(null,state_25520);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21195__auto__;
}
break;
}
}catch (e25529){if((e25529 instanceof Object)){
var ex__21196__auto__ = e25529;
var statearr_25530_25532 = state_25520;
(statearr_25530_25532[(5)] = ex__21196__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25520);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25529;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21194__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25533 = state_25520;
state_25520 = G__25533;
continue;
} else {
return ret_value__21194__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__21193__auto__ = function(state_25520){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__21193__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__21193__auto____1.call(this,state_25520);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__21193__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__21193__auto____0;
figwheel$client$heads_up$clear_$_state_machine__21193__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__21193__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__21193__auto__;
})()
;})(switch__21192__auto__,c__21304__auto__))
})();
var state__21306__auto__ = (function (){var statearr_25531 = f__21305__auto__.call(null);
(statearr_25531[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21304__auto__);

return statearr_25531;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21306__auto__);
});})(c__21304__auto__))
);

return c__21304__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__21304__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21304__auto__){
return (function (){
var f__21305__auto__ = (function (){var switch__21192__auto__ = ((function (c__21304__auto__){
return (function (state_25565){
var state_val_25566 = (state_25565[(1)]);
if((state_val_25566 === (1))){
var inst_25555 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_25565__$1 = state_25565;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25565__$1,(2),inst_25555);
} else {
if((state_val_25566 === (2))){
var inst_25557 = (state_25565[(2)]);
var inst_25558 = cljs.core.async.timeout.call(null,(400));
var state_25565__$1 = (function (){var statearr_25567 = state_25565;
(statearr_25567[(7)] = inst_25557);

return statearr_25567;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25565__$1,(3),inst_25558);
} else {
if((state_val_25566 === (3))){
var inst_25560 = (state_25565[(2)]);
var inst_25561 = figwheel.client.heads_up.clear.call(null);
var state_25565__$1 = (function (){var statearr_25568 = state_25565;
(statearr_25568[(8)] = inst_25560);

return statearr_25568;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25565__$1,(4),inst_25561);
} else {
if((state_val_25566 === (4))){
var inst_25563 = (state_25565[(2)]);
var state_25565__$1 = state_25565;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25565__$1,inst_25563);
} else {
return null;
}
}
}
}
});})(c__21304__auto__))
;
return ((function (switch__21192__auto__,c__21304__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__21193__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__21193__auto____0 = (function (){
var statearr_25572 = [null,null,null,null,null,null,null,null,null];
(statearr_25572[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__21193__auto__);

(statearr_25572[(1)] = (1));

return statearr_25572;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__21193__auto____1 = (function (state_25565){
while(true){
var ret_value__21194__auto__ = (function (){try{while(true){
var result__21195__auto__ = switch__21192__auto__.call(null,state_25565);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21195__auto__;
}
break;
}
}catch (e25573){if((e25573 instanceof Object)){
var ex__21196__auto__ = e25573;
var statearr_25574_25576 = state_25565;
(statearr_25574_25576[(5)] = ex__21196__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25565);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25573;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21194__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25577 = state_25565;
state_25565 = G__25577;
continue;
} else {
return ret_value__21194__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__21193__auto__ = function(state_25565){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__21193__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__21193__auto____1.call(this,state_25565);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__21193__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__21193__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__21193__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__21193__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__21193__auto__;
})()
;})(switch__21192__auto__,c__21304__auto__))
})();
var state__21306__auto__ = (function (){var statearr_25575 = f__21305__auto__.call(null);
(statearr_25575[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21304__auto__);

return statearr_25575;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21306__auto__);
});})(c__21304__auto__))
);

return c__21304__auto__;
});
figwheel.client.heads_up.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' style='position:absolute; top:9px; left: 10px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";

//# sourceMappingURL=heads_up.js.map?rel=1463713701134