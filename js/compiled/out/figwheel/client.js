// Compiled by ClojureScript 1.8.51 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__25580 = cljs.core._EQ_;
var expr__25581 = (function (){var or__18443__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e25584){if((e25584 instanceof Error)){
var e = e25584;
return false;
} else {
throw e25584;

}
}})();
if(cljs.core.truth_(or__18443__auto__)){
return or__18443__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__25580.call(null,"true",expr__25581))){
return true;
} else {
if(cljs.core.truth_(pred__25580.call(null,"false",expr__25581))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__25581)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
} else {
}

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e25586){if((e25586 instanceof Error)){
var e = e25586;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e25586;

}
}} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.repl_print_fn = (function figwheel$client$repl_print_fn(var_args){
var args__19520__auto__ = [];
var len__19513__auto___25588 = arguments.length;
var i__19514__auto___25589 = (0);
while(true){
if((i__19514__auto___25589 < len__19513__auto___25588)){
args__19520__auto__.push((arguments[i__19514__auto___25589]));

var G__25590 = (i__19514__auto___25589 + (1));
i__19514__auto___25589 = G__25590;
continue;
} else {
}
break;
}

var argseq__19521__auto__ = ((((0) < args__19520__auto__.length))?(new cljs.core.IndexedSeq(args__19520__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__19521__auto__);
});

figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));

return null;
});

figwheel.client.repl_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_print_fn.cljs$lang$applyTo = (function (seq25587){
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25587));
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__25591){
var map__25594 = p__25591;
var map__25594__$1 = ((((!((map__25594 == null)))?((((map__25594.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25594.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25594):map__25594);
var message = cljs.core.get.call(null,map__25594__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__25594__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__18443__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__18443__auto__)){
return or__18443__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__18431__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__18431__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__18431__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__21304__auto___25756 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21304__auto___25756,ch){
return (function (){
var f__21305__auto__ = (function (){var switch__21192__auto__ = ((function (c__21304__auto___25756,ch){
return (function (state_25725){
var state_val_25726 = (state_25725[(1)]);
if((state_val_25726 === (7))){
var inst_25721 = (state_25725[(2)]);
var state_25725__$1 = state_25725;
var statearr_25727_25757 = state_25725__$1;
(statearr_25727_25757[(2)] = inst_25721);

(statearr_25727_25757[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25726 === (1))){
var state_25725__$1 = state_25725;
var statearr_25728_25758 = state_25725__$1;
(statearr_25728_25758[(2)] = null);

(statearr_25728_25758[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25726 === (4))){
var inst_25678 = (state_25725[(7)]);
var inst_25678__$1 = (state_25725[(2)]);
var state_25725__$1 = (function (){var statearr_25729 = state_25725;
(statearr_25729[(7)] = inst_25678__$1);

return statearr_25729;
})();
if(cljs.core.truth_(inst_25678__$1)){
var statearr_25730_25759 = state_25725__$1;
(statearr_25730_25759[(1)] = (5));

} else {
var statearr_25731_25760 = state_25725__$1;
(statearr_25731_25760[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25726 === (15))){
var inst_25685 = (state_25725[(8)]);
var inst_25700 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_25685);
var inst_25701 = cljs.core.first.call(null,inst_25700);
var inst_25702 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_25701);
var inst_25703 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_25702)].join('');
var inst_25704 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_25703);
var state_25725__$1 = state_25725;
var statearr_25732_25761 = state_25725__$1;
(statearr_25732_25761[(2)] = inst_25704);

(statearr_25732_25761[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25726 === (13))){
var inst_25709 = (state_25725[(2)]);
var state_25725__$1 = state_25725;
var statearr_25733_25762 = state_25725__$1;
(statearr_25733_25762[(2)] = inst_25709);

(statearr_25733_25762[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25726 === (6))){
var state_25725__$1 = state_25725;
var statearr_25734_25763 = state_25725__$1;
(statearr_25734_25763[(2)] = null);

(statearr_25734_25763[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25726 === (17))){
var inst_25707 = (state_25725[(2)]);
var state_25725__$1 = state_25725;
var statearr_25735_25764 = state_25725__$1;
(statearr_25735_25764[(2)] = inst_25707);

(statearr_25735_25764[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25726 === (3))){
var inst_25723 = (state_25725[(2)]);
var state_25725__$1 = state_25725;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25725__$1,inst_25723);
} else {
if((state_val_25726 === (12))){
var inst_25684 = (state_25725[(9)]);
var inst_25698 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_25684,opts);
var state_25725__$1 = state_25725;
if(cljs.core.truth_(inst_25698)){
var statearr_25736_25765 = state_25725__$1;
(statearr_25736_25765[(1)] = (15));

} else {
var statearr_25737_25766 = state_25725__$1;
(statearr_25737_25766[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25726 === (2))){
var state_25725__$1 = state_25725;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25725__$1,(4),ch);
} else {
if((state_val_25726 === (11))){
var inst_25685 = (state_25725[(8)]);
var inst_25690 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_25691 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_25685);
var inst_25692 = cljs.core.async.timeout.call(null,(1000));
var inst_25693 = [inst_25691,inst_25692];
var inst_25694 = (new cljs.core.PersistentVector(null,2,(5),inst_25690,inst_25693,null));
var state_25725__$1 = state_25725;
return cljs.core.async.ioc_alts_BANG_.call(null,state_25725__$1,(14),inst_25694);
} else {
if((state_val_25726 === (9))){
var inst_25685 = (state_25725[(8)]);
var inst_25711 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_25712 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_25685);
var inst_25713 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_25712);
var inst_25714 = [cljs.core.str("Not loading: "),cljs.core.str(inst_25713)].join('');
var inst_25715 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_25714);
var state_25725__$1 = (function (){var statearr_25738 = state_25725;
(statearr_25738[(10)] = inst_25711);

return statearr_25738;
})();
var statearr_25739_25767 = state_25725__$1;
(statearr_25739_25767[(2)] = inst_25715);

(statearr_25739_25767[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25726 === (5))){
var inst_25678 = (state_25725[(7)]);
var inst_25680 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_25681 = (new cljs.core.PersistentArrayMap(null,2,inst_25680,null));
var inst_25682 = (new cljs.core.PersistentHashSet(null,inst_25681,null));
var inst_25683 = figwheel.client.focus_msgs.call(null,inst_25682,inst_25678);
var inst_25684 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_25683);
var inst_25685 = cljs.core.first.call(null,inst_25683);
var inst_25686 = figwheel.client.autoload_QMARK_.call(null);
var state_25725__$1 = (function (){var statearr_25740 = state_25725;
(statearr_25740[(8)] = inst_25685);

(statearr_25740[(9)] = inst_25684);

return statearr_25740;
})();
if(cljs.core.truth_(inst_25686)){
var statearr_25741_25768 = state_25725__$1;
(statearr_25741_25768[(1)] = (8));

} else {
var statearr_25742_25769 = state_25725__$1;
(statearr_25742_25769[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25726 === (14))){
var inst_25696 = (state_25725[(2)]);
var state_25725__$1 = state_25725;
var statearr_25743_25770 = state_25725__$1;
(statearr_25743_25770[(2)] = inst_25696);

(statearr_25743_25770[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25726 === (16))){
var state_25725__$1 = state_25725;
var statearr_25744_25771 = state_25725__$1;
(statearr_25744_25771[(2)] = null);

(statearr_25744_25771[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25726 === (10))){
var inst_25717 = (state_25725[(2)]);
var state_25725__$1 = (function (){var statearr_25745 = state_25725;
(statearr_25745[(11)] = inst_25717);

return statearr_25745;
})();
var statearr_25746_25772 = state_25725__$1;
(statearr_25746_25772[(2)] = null);

(statearr_25746_25772[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25726 === (8))){
var inst_25684 = (state_25725[(9)]);
var inst_25688 = figwheel.client.reload_file_state_QMARK_.call(null,inst_25684,opts);
var state_25725__$1 = state_25725;
if(cljs.core.truth_(inst_25688)){
var statearr_25747_25773 = state_25725__$1;
(statearr_25747_25773[(1)] = (11));

} else {
var statearr_25748_25774 = state_25725__$1;
(statearr_25748_25774[(1)] = (12));

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
});})(c__21304__auto___25756,ch))
;
return ((function (switch__21192__auto__,c__21304__auto___25756,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__21193__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__21193__auto____0 = (function (){
var statearr_25752 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25752[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__21193__auto__);

(statearr_25752[(1)] = (1));

return statearr_25752;
});
var figwheel$client$file_reloader_plugin_$_state_machine__21193__auto____1 = (function (state_25725){
while(true){
var ret_value__21194__auto__ = (function (){try{while(true){
var result__21195__auto__ = switch__21192__auto__.call(null,state_25725);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21195__auto__;
}
break;
}
}catch (e25753){if((e25753 instanceof Object)){
var ex__21196__auto__ = e25753;
var statearr_25754_25775 = state_25725;
(statearr_25754_25775[(5)] = ex__21196__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25725);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25753;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21194__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25776 = state_25725;
state_25725 = G__25776;
continue;
} else {
return ret_value__21194__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__21193__auto__ = function(state_25725){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__21193__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__21193__auto____1.call(this,state_25725);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__21193__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__21193__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__21193__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__21193__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__21193__auto__;
})()
;})(switch__21192__auto__,c__21304__auto___25756,ch))
})();
var state__21306__auto__ = (function (){var statearr_25755 = f__21305__auto__.call(null);
(statearr_25755[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21304__auto___25756);

return statearr_25755;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21306__auto__);
});})(c__21304__auto___25756,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__25777_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__25777_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_25784 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_25784){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_25782 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_25783 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),figwheel.client.utils.eval_helper.call(null,code,opts)], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_25783;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_25782;
}}catch (e25781){if((e25781 instanceof Error)){
var e = e25781;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_25784], null));
} else {
var e = e25781;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_25784))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__25785){
var map__25792 = p__25785;
var map__25792__$1 = ((((!((map__25792 == null)))?((((map__25792.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25792.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25792):map__25792);
var opts = map__25792__$1;
var build_id = cljs.core.get.call(null,map__25792__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__25792,map__25792__$1,opts,build_id){
return (function (p__25794){
var vec__25795 = p__25794;
var map__25796 = cljs.core.nth.call(null,vec__25795,(0),null);
var map__25796__$1 = ((((!((map__25796 == null)))?((((map__25796.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25796.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25796):map__25796);
var msg = map__25796__$1;
var msg_name = cljs.core.get.call(null,map__25796__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__25795,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__25795,map__25796,map__25796__$1,msg,msg_name,_,map__25792,map__25792__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__25795,map__25796,map__25796__$1,msg,msg_name,_,map__25792,map__25792__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__25792,map__25792__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__25802){
var vec__25803 = p__25802;
var map__25804 = cljs.core.nth.call(null,vec__25803,(0),null);
var map__25804__$1 = ((((!((map__25804 == null)))?((((map__25804.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25804.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25804):map__25804);
var msg = map__25804__$1;
var msg_name = cljs.core.get.call(null,map__25804__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__25803,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__25806){
var map__25816 = p__25806;
var map__25816__$1 = ((((!((map__25816 == null)))?((((map__25816.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25816.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25816):map__25816);
var on_compile_warning = cljs.core.get.call(null,map__25816__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__25816__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__25816,map__25816__$1,on_compile_warning,on_compile_fail){
return (function (p__25818){
var vec__25819 = p__25818;
var map__25820 = cljs.core.nth.call(null,vec__25819,(0),null);
var map__25820__$1 = ((((!((map__25820 == null)))?((((map__25820.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25820.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25820):map__25820);
var msg = map__25820__$1;
var msg_name = cljs.core.get.call(null,map__25820__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__25819,(1));
var pred__25822 = cljs.core._EQ_;
var expr__25823 = msg_name;
if(cljs.core.truth_(pred__25822.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__25823))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__25822.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__25823))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__25816,map__25816__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__21304__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21304__auto__,msg_hist,msg_names,msg){
return (function (){
var f__21305__auto__ = (function (){var switch__21192__auto__ = ((function (c__21304__auto__,msg_hist,msg_names,msg){
return (function (state_26039){
var state_val_26040 = (state_26039[(1)]);
if((state_val_26040 === (7))){
var inst_25963 = (state_26039[(2)]);
var state_26039__$1 = state_26039;
if(cljs.core.truth_(inst_25963)){
var statearr_26041_26087 = state_26039__$1;
(statearr_26041_26087[(1)] = (8));

} else {
var statearr_26042_26088 = state_26039__$1;
(statearr_26042_26088[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26040 === (20))){
var inst_26033 = (state_26039[(2)]);
var state_26039__$1 = state_26039;
var statearr_26043_26089 = state_26039__$1;
(statearr_26043_26089[(2)] = inst_26033);

(statearr_26043_26089[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26040 === (27))){
var inst_26029 = (state_26039[(2)]);
var state_26039__$1 = state_26039;
var statearr_26044_26090 = state_26039__$1;
(statearr_26044_26090[(2)] = inst_26029);

(statearr_26044_26090[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26040 === (1))){
var inst_25956 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_26039__$1 = state_26039;
if(cljs.core.truth_(inst_25956)){
var statearr_26045_26091 = state_26039__$1;
(statearr_26045_26091[(1)] = (2));

} else {
var statearr_26046_26092 = state_26039__$1;
(statearr_26046_26092[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26040 === (24))){
var inst_26031 = (state_26039[(2)]);
var state_26039__$1 = state_26039;
var statearr_26047_26093 = state_26039__$1;
(statearr_26047_26093[(2)] = inst_26031);

(statearr_26047_26093[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26040 === (4))){
var inst_26037 = (state_26039[(2)]);
var state_26039__$1 = state_26039;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26039__$1,inst_26037);
} else {
if((state_val_26040 === (15))){
var inst_26035 = (state_26039[(2)]);
var state_26039__$1 = state_26039;
var statearr_26048_26094 = state_26039__$1;
(statearr_26048_26094[(2)] = inst_26035);

(statearr_26048_26094[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26040 === (21))){
var inst_25994 = (state_26039[(2)]);
var state_26039__$1 = state_26039;
var statearr_26049_26095 = state_26039__$1;
(statearr_26049_26095[(2)] = inst_25994);

(statearr_26049_26095[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26040 === (31))){
var inst_26018 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_26039__$1 = state_26039;
if(cljs.core.truth_(inst_26018)){
var statearr_26050_26096 = state_26039__$1;
(statearr_26050_26096[(1)] = (34));

} else {
var statearr_26051_26097 = state_26039__$1;
(statearr_26051_26097[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26040 === (32))){
var inst_26027 = (state_26039[(2)]);
var state_26039__$1 = state_26039;
var statearr_26052_26098 = state_26039__$1;
(statearr_26052_26098[(2)] = inst_26027);

(statearr_26052_26098[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26040 === (33))){
var inst_26016 = (state_26039[(2)]);
var state_26039__$1 = state_26039;
var statearr_26053_26099 = state_26039__$1;
(statearr_26053_26099[(2)] = inst_26016);

(statearr_26053_26099[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26040 === (13))){
var inst_25977 = figwheel.client.heads_up.clear.call(null);
var state_26039__$1 = state_26039;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26039__$1,(16),inst_25977);
} else {
if((state_val_26040 === (22))){
var inst_25998 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25999 = figwheel.client.heads_up.append_message.call(null,inst_25998);
var state_26039__$1 = state_26039;
var statearr_26054_26100 = state_26039__$1;
(statearr_26054_26100[(2)] = inst_25999);

(statearr_26054_26100[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26040 === (36))){
var inst_26025 = (state_26039[(2)]);
var state_26039__$1 = state_26039;
var statearr_26055_26101 = state_26039__$1;
(statearr_26055_26101[(2)] = inst_26025);

(statearr_26055_26101[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26040 === (29))){
var inst_26009 = (state_26039[(2)]);
var state_26039__$1 = state_26039;
var statearr_26056_26102 = state_26039__$1;
(statearr_26056_26102[(2)] = inst_26009);

(statearr_26056_26102[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26040 === (6))){
var inst_25958 = (state_26039[(7)]);
var state_26039__$1 = state_26039;
var statearr_26057_26103 = state_26039__$1;
(statearr_26057_26103[(2)] = inst_25958);

(statearr_26057_26103[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26040 === (28))){
var inst_26005 = (state_26039[(2)]);
var inst_26006 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26007 = figwheel.client.heads_up.display_warning.call(null,inst_26006);
var state_26039__$1 = (function (){var statearr_26058 = state_26039;
(statearr_26058[(8)] = inst_26005);

return statearr_26058;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26039__$1,(29),inst_26007);
} else {
if((state_val_26040 === (25))){
var inst_26003 = figwheel.client.heads_up.clear.call(null);
var state_26039__$1 = state_26039;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26039__$1,(28),inst_26003);
} else {
if((state_val_26040 === (34))){
var inst_26020 = figwheel.client.heads_up.flash_loaded.call(null);
var state_26039__$1 = state_26039;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26039__$1,(37),inst_26020);
} else {
if((state_val_26040 === (17))){
var inst_25985 = (state_26039[(2)]);
var state_26039__$1 = state_26039;
var statearr_26059_26104 = state_26039__$1;
(statearr_26059_26104[(2)] = inst_25985);

(statearr_26059_26104[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26040 === (3))){
var inst_25975 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_26039__$1 = state_26039;
if(cljs.core.truth_(inst_25975)){
var statearr_26060_26105 = state_26039__$1;
(statearr_26060_26105[(1)] = (13));

} else {
var statearr_26061_26106 = state_26039__$1;
(statearr_26061_26106[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26040 === (12))){
var inst_25971 = (state_26039[(2)]);
var state_26039__$1 = state_26039;
var statearr_26062_26107 = state_26039__$1;
(statearr_26062_26107[(2)] = inst_25971);

(statearr_26062_26107[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26040 === (2))){
var inst_25958 = (state_26039[(7)]);
var inst_25958__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_26039__$1 = (function (){var statearr_26063 = state_26039;
(statearr_26063[(7)] = inst_25958__$1);

return statearr_26063;
})();
if(cljs.core.truth_(inst_25958__$1)){
var statearr_26064_26108 = state_26039__$1;
(statearr_26064_26108[(1)] = (5));

} else {
var statearr_26065_26109 = state_26039__$1;
(statearr_26065_26109[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26040 === (23))){
var inst_26001 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_26039__$1 = state_26039;
if(cljs.core.truth_(inst_26001)){
var statearr_26066_26110 = state_26039__$1;
(statearr_26066_26110[(1)] = (25));

} else {
var statearr_26067_26111 = state_26039__$1;
(statearr_26067_26111[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26040 === (35))){
var state_26039__$1 = state_26039;
var statearr_26068_26112 = state_26039__$1;
(statearr_26068_26112[(2)] = null);

(statearr_26068_26112[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26040 === (19))){
var inst_25996 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_26039__$1 = state_26039;
if(cljs.core.truth_(inst_25996)){
var statearr_26069_26113 = state_26039__$1;
(statearr_26069_26113[(1)] = (22));

} else {
var statearr_26070_26114 = state_26039__$1;
(statearr_26070_26114[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26040 === (11))){
var inst_25967 = (state_26039[(2)]);
var state_26039__$1 = state_26039;
var statearr_26071_26115 = state_26039__$1;
(statearr_26071_26115[(2)] = inst_25967);

(statearr_26071_26115[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26040 === (9))){
var inst_25969 = figwheel.client.heads_up.clear.call(null);
var state_26039__$1 = state_26039;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26039__$1,(12),inst_25969);
} else {
if((state_val_26040 === (5))){
var inst_25960 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_26039__$1 = state_26039;
var statearr_26072_26116 = state_26039__$1;
(statearr_26072_26116[(2)] = inst_25960);

(statearr_26072_26116[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26040 === (14))){
var inst_25987 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_26039__$1 = state_26039;
if(cljs.core.truth_(inst_25987)){
var statearr_26073_26117 = state_26039__$1;
(statearr_26073_26117[(1)] = (18));

} else {
var statearr_26074_26118 = state_26039__$1;
(statearr_26074_26118[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26040 === (26))){
var inst_26011 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_26039__$1 = state_26039;
if(cljs.core.truth_(inst_26011)){
var statearr_26075_26119 = state_26039__$1;
(statearr_26075_26119[(1)] = (30));

} else {
var statearr_26076_26120 = state_26039__$1;
(statearr_26076_26120[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26040 === (16))){
var inst_25979 = (state_26039[(2)]);
var inst_25980 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25981 = figwheel.client.format_messages.call(null,inst_25980);
var inst_25982 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25983 = figwheel.client.heads_up.display_error.call(null,inst_25981,inst_25982);
var state_26039__$1 = (function (){var statearr_26077 = state_26039;
(statearr_26077[(9)] = inst_25979);

return statearr_26077;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26039__$1,(17),inst_25983);
} else {
if((state_val_26040 === (30))){
var inst_26013 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26014 = figwheel.client.heads_up.display_warning.call(null,inst_26013);
var state_26039__$1 = state_26039;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26039__$1,(33),inst_26014);
} else {
if((state_val_26040 === (10))){
var inst_25973 = (state_26039[(2)]);
var state_26039__$1 = state_26039;
var statearr_26078_26121 = state_26039__$1;
(statearr_26078_26121[(2)] = inst_25973);

(statearr_26078_26121[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26040 === (18))){
var inst_25989 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25990 = figwheel.client.format_messages.call(null,inst_25989);
var inst_25991 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25992 = figwheel.client.heads_up.display_error.call(null,inst_25990,inst_25991);
var state_26039__$1 = state_26039;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26039__$1,(21),inst_25992);
} else {
if((state_val_26040 === (37))){
var inst_26022 = (state_26039[(2)]);
var state_26039__$1 = state_26039;
var statearr_26079_26122 = state_26039__$1;
(statearr_26079_26122[(2)] = inst_26022);

(statearr_26079_26122[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26040 === (8))){
var inst_25965 = figwheel.client.heads_up.flash_loaded.call(null);
var state_26039__$1 = state_26039;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26039__$1,(11),inst_25965);
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
});})(c__21304__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__21192__auto__,c__21304__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21193__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21193__auto____0 = (function (){
var statearr_26083 = [null,null,null,null,null,null,null,null,null,null];
(statearr_26083[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21193__auto__);

(statearr_26083[(1)] = (1));

return statearr_26083;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21193__auto____1 = (function (state_26039){
while(true){
var ret_value__21194__auto__ = (function (){try{while(true){
var result__21195__auto__ = switch__21192__auto__.call(null,state_26039);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21195__auto__;
}
break;
}
}catch (e26084){if((e26084 instanceof Object)){
var ex__21196__auto__ = e26084;
var statearr_26085_26123 = state_26039;
(statearr_26085_26123[(5)] = ex__21196__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26039);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26084;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21194__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26124 = state_26039;
state_26039 = G__26124;
continue;
} else {
return ret_value__21194__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21193__auto__ = function(state_26039){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21193__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21193__auto____1.call(this,state_26039);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21193__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21193__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21193__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21193__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21193__auto__;
})()
;})(switch__21192__auto__,c__21304__auto__,msg_hist,msg_names,msg))
})();
var state__21306__auto__ = (function (){var statearr_26086 = f__21305__auto__.call(null);
(statearr_26086[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21304__auto__);

return statearr_26086;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21306__auto__);
});})(c__21304__auto__,msg_hist,msg_names,msg))
);

return c__21304__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__21304__auto___26187 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21304__auto___26187,ch){
return (function (){
var f__21305__auto__ = (function (){var switch__21192__auto__ = ((function (c__21304__auto___26187,ch){
return (function (state_26170){
var state_val_26171 = (state_26170[(1)]);
if((state_val_26171 === (1))){
var state_26170__$1 = state_26170;
var statearr_26172_26188 = state_26170__$1;
(statearr_26172_26188[(2)] = null);

(statearr_26172_26188[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26171 === (2))){
var state_26170__$1 = state_26170;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26170__$1,(4),ch);
} else {
if((state_val_26171 === (3))){
var inst_26168 = (state_26170[(2)]);
var state_26170__$1 = state_26170;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26170__$1,inst_26168);
} else {
if((state_val_26171 === (4))){
var inst_26158 = (state_26170[(7)]);
var inst_26158__$1 = (state_26170[(2)]);
var state_26170__$1 = (function (){var statearr_26173 = state_26170;
(statearr_26173[(7)] = inst_26158__$1);

return statearr_26173;
})();
if(cljs.core.truth_(inst_26158__$1)){
var statearr_26174_26189 = state_26170__$1;
(statearr_26174_26189[(1)] = (5));

} else {
var statearr_26175_26190 = state_26170__$1;
(statearr_26175_26190[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26171 === (5))){
var inst_26158 = (state_26170[(7)]);
var inst_26160 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_26158);
var state_26170__$1 = state_26170;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26170__$1,(8),inst_26160);
} else {
if((state_val_26171 === (6))){
var state_26170__$1 = state_26170;
var statearr_26176_26191 = state_26170__$1;
(statearr_26176_26191[(2)] = null);

(statearr_26176_26191[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26171 === (7))){
var inst_26166 = (state_26170[(2)]);
var state_26170__$1 = state_26170;
var statearr_26177_26192 = state_26170__$1;
(statearr_26177_26192[(2)] = inst_26166);

(statearr_26177_26192[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26171 === (8))){
var inst_26162 = (state_26170[(2)]);
var state_26170__$1 = (function (){var statearr_26178 = state_26170;
(statearr_26178[(8)] = inst_26162);

return statearr_26178;
})();
var statearr_26179_26193 = state_26170__$1;
(statearr_26179_26193[(2)] = null);

(statearr_26179_26193[(1)] = (2));


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
});})(c__21304__auto___26187,ch))
;
return ((function (switch__21192__auto__,c__21304__auto___26187,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__21193__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__21193__auto____0 = (function (){
var statearr_26183 = [null,null,null,null,null,null,null,null,null];
(statearr_26183[(0)] = figwheel$client$heads_up_plugin_$_state_machine__21193__auto__);

(statearr_26183[(1)] = (1));

return statearr_26183;
});
var figwheel$client$heads_up_plugin_$_state_machine__21193__auto____1 = (function (state_26170){
while(true){
var ret_value__21194__auto__ = (function (){try{while(true){
var result__21195__auto__ = switch__21192__auto__.call(null,state_26170);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21195__auto__;
}
break;
}
}catch (e26184){if((e26184 instanceof Object)){
var ex__21196__auto__ = e26184;
var statearr_26185_26194 = state_26170;
(statearr_26185_26194[(5)] = ex__21196__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26170);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26184;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21194__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26195 = state_26170;
state_26170 = G__26195;
continue;
} else {
return ret_value__21194__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__21193__auto__ = function(state_26170){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__21193__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__21193__auto____1.call(this,state_26170);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__21193__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__21193__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__21193__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__21193__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__21193__auto__;
})()
;})(switch__21192__auto__,c__21304__auto___26187,ch))
})();
var state__21306__auto__ = (function (){var statearr_26186 = f__21305__auto__.call(null);
(statearr_26186[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21304__auto___26187);

return statearr_26186;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21306__auto__);
});})(c__21304__auto___26187,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__21304__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21304__auto__){
return (function (){
var f__21305__auto__ = (function (){var switch__21192__auto__ = ((function (c__21304__auto__){
return (function (state_26216){
var state_val_26217 = (state_26216[(1)]);
if((state_val_26217 === (1))){
var inst_26211 = cljs.core.async.timeout.call(null,(3000));
var state_26216__$1 = state_26216;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26216__$1,(2),inst_26211);
} else {
if((state_val_26217 === (2))){
var inst_26213 = (state_26216[(2)]);
var inst_26214 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_26216__$1 = (function (){var statearr_26218 = state_26216;
(statearr_26218[(7)] = inst_26213);

return statearr_26218;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26216__$1,inst_26214);
} else {
return null;
}
}
});})(c__21304__auto__))
;
return ((function (switch__21192__auto__,c__21304__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__21193__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__21193__auto____0 = (function (){
var statearr_26222 = [null,null,null,null,null,null,null,null];
(statearr_26222[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__21193__auto__);

(statearr_26222[(1)] = (1));

return statearr_26222;
});
var figwheel$client$enforce_project_plugin_$_state_machine__21193__auto____1 = (function (state_26216){
while(true){
var ret_value__21194__auto__ = (function (){try{while(true){
var result__21195__auto__ = switch__21192__auto__.call(null,state_26216);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21195__auto__;
}
break;
}
}catch (e26223){if((e26223 instanceof Object)){
var ex__21196__auto__ = e26223;
var statearr_26224_26226 = state_26216;
(statearr_26224_26226[(5)] = ex__21196__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26216);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26223;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21194__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26227 = state_26216;
state_26216 = G__26227;
continue;
} else {
return ret_value__21194__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__21193__auto__ = function(state_26216){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__21193__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__21193__auto____1.call(this,state_26216);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__21193__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__21193__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__21193__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__21193__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__21193__auto__;
})()
;})(switch__21192__auto__,c__21304__auto__))
})();
var state__21306__auto__ = (function (){var statearr_26225 = f__21305__auto__.call(null);
(statearr_26225[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21304__auto__);

return statearr_26225;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21306__auto__);
});})(c__21304__auto__))
);

return c__21304__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__26228){
var map__26235 = p__26228;
var map__26235__$1 = ((((!((map__26235 == null)))?((((map__26235.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26235.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26235):map__26235);
var ed = map__26235__$1;
var formatted_exception = cljs.core.get.call(null,map__26235__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__26235__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__26235__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__26237_26241 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__26238_26242 = null;
var count__26239_26243 = (0);
var i__26240_26244 = (0);
while(true){
if((i__26240_26244 < count__26239_26243)){
var msg_26245 = cljs.core._nth.call(null,chunk__26238_26242,i__26240_26244);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_26245);

var G__26246 = seq__26237_26241;
var G__26247 = chunk__26238_26242;
var G__26248 = count__26239_26243;
var G__26249 = (i__26240_26244 + (1));
seq__26237_26241 = G__26246;
chunk__26238_26242 = G__26247;
count__26239_26243 = G__26248;
i__26240_26244 = G__26249;
continue;
} else {
var temp__4657__auto___26250 = cljs.core.seq.call(null,seq__26237_26241);
if(temp__4657__auto___26250){
var seq__26237_26251__$1 = temp__4657__auto___26250;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26237_26251__$1)){
var c__19254__auto___26252 = cljs.core.chunk_first.call(null,seq__26237_26251__$1);
var G__26253 = cljs.core.chunk_rest.call(null,seq__26237_26251__$1);
var G__26254 = c__19254__auto___26252;
var G__26255 = cljs.core.count.call(null,c__19254__auto___26252);
var G__26256 = (0);
seq__26237_26241 = G__26253;
chunk__26238_26242 = G__26254;
count__26239_26243 = G__26255;
i__26240_26244 = G__26256;
continue;
} else {
var msg_26257 = cljs.core.first.call(null,seq__26237_26251__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_26257);

var G__26258 = cljs.core.next.call(null,seq__26237_26251__$1);
var G__26259 = null;
var G__26260 = (0);
var G__26261 = (0);
seq__26237_26241 = G__26258;
chunk__26238_26242 = G__26259;
count__26239_26243 = G__26260;
i__26240_26244 = G__26261;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__26262){
var map__26265 = p__26262;
var map__26265__$1 = ((((!((map__26265 == null)))?((((map__26265.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26265.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26265):map__26265);
var w = map__26265__$1;
var message = cljs.core.get.call(null,map__26265__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,true,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__18431__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__18431__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__18431__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__26273 = cljs.core.seq.call(null,plugins);
var chunk__26274 = null;
var count__26275 = (0);
var i__26276 = (0);
while(true){
if((i__26276 < count__26275)){
var vec__26277 = cljs.core._nth.call(null,chunk__26274,i__26276);
var k = cljs.core.nth.call(null,vec__26277,(0),null);
var plugin = cljs.core.nth.call(null,vec__26277,(1),null);
if(cljs.core.truth_(plugin)){
var pl_26279 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__26273,chunk__26274,count__26275,i__26276,pl_26279,vec__26277,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_26279.call(null,msg_hist);
});})(seq__26273,chunk__26274,count__26275,i__26276,pl_26279,vec__26277,k,plugin))
);
} else {
}

var G__26280 = seq__26273;
var G__26281 = chunk__26274;
var G__26282 = count__26275;
var G__26283 = (i__26276 + (1));
seq__26273 = G__26280;
chunk__26274 = G__26281;
count__26275 = G__26282;
i__26276 = G__26283;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__26273);
if(temp__4657__auto__){
var seq__26273__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26273__$1)){
var c__19254__auto__ = cljs.core.chunk_first.call(null,seq__26273__$1);
var G__26284 = cljs.core.chunk_rest.call(null,seq__26273__$1);
var G__26285 = c__19254__auto__;
var G__26286 = cljs.core.count.call(null,c__19254__auto__);
var G__26287 = (0);
seq__26273 = G__26284;
chunk__26274 = G__26285;
count__26275 = G__26286;
i__26276 = G__26287;
continue;
} else {
var vec__26278 = cljs.core.first.call(null,seq__26273__$1);
var k = cljs.core.nth.call(null,vec__26278,(0),null);
var plugin = cljs.core.nth.call(null,vec__26278,(1),null);
if(cljs.core.truth_(plugin)){
var pl_26288 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__26273,chunk__26274,count__26275,i__26276,pl_26288,vec__26278,k,plugin,seq__26273__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_26288.call(null,msg_hist);
});})(seq__26273,chunk__26274,count__26275,i__26276,pl_26288,vec__26278,k,plugin,seq__26273__$1,temp__4657__auto__))
);
} else {
}

var G__26289 = cljs.core.next.call(null,seq__26273__$1);
var G__26290 = null;
var G__26291 = (0);
var G__26292 = (0);
seq__26273 = G__26289;
chunk__26274 = G__26290;
count__26275 = G__26291;
i__26276 = G__26292;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args26293 = [];
var len__19513__auto___26296 = arguments.length;
var i__19514__auto___26297 = (0);
while(true){
if((i__19514__auto___26297 < len__19513__auto___26296)){
args26293.push((arguments[i__19514__auto___26297]));

var G__26298 = (i__19514__auto___26297 + (1));
i__19514__auto___26297 = G__26298;
continue;
} else {
}
break;
}

var G__26295 = args26293.length;
switch (G__26295) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26293.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__19520__auto__ = [];
var len__19513__auto___26304 = arguments.length;
var i__19514__auto___26305 = (0);
while(true){
if((i__19514__auto___26305 < len__19513__auto___26304)){
args__19520__auto__.push((arguments[i__19514__auto___26305]));

var G__26306 = (i__19514__auto___26305 + (1));
i__19514__auto___26305 = G__26306;
continue;
} else {
}
break;
}

var argseq__19521__auto__ = ((((0) < args__19520__auto__.length))?(new cljs.core.IndexedSeq(args__19520__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__19521__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__26301){
var map__26302 = p__26301;
var map__26302__$1 = ((((!((map__26302 == null)))?((((map__26302.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26302.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26302):map__26302);
var opts = map__26302__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq26300){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26300));
});

//# sourceMappingURL=client.js.map?rel=1463713701450