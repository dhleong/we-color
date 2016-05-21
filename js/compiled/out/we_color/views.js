// Compiled by ClojureScript 1.8.51 {}
goog.provide('we_color.views');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('re_frame.core');
we_color.views.color_field = (function we_color$views$color_field(in_type){
var v = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [in_type], null));
return ((function (v){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea.color","textarea.color",-1059687435),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"id","id",-1388402092),in_type,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,v),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (v){
return (function (e){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [in_type,e.target.value], null));

return true;
});})(v))
], null)], null);
});
;})(v))
});
we_color.views.color_label = (function we_color$views$color_label(field_for,fa_class){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div>label.color","div>label.color",1895663907),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),field_for], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fa.fa-5x","i.fa.fa-5x",-1319950785),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),fa_class], null)], null)], null);
});
we_color.views.format_choices = (function we_color$views$format_choices(for_color,formats){
var current_format = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"format","format",-1306924766),for_color], null));
return ((function (current_format){
return (function (){
var selected_fmt = cljs.core.deref.call(null,current_format);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.color-choices","ul.color-choices",-685593063),(function (){var iter__19223__auto__ = ((function (selected_fmt,current_format){
return (function we_color$views$format_choices_$_iter__22177(s__22178){
return (new cljs.core.LazySeq(null,((function (selected_fmt,current_format){
return (function (){
var s__22178__$1 = s__22178;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__22178__$1);
if(temp__4657__auto__){
var s__22178__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__22178__$2)){
var c__19221__auto__ = cljs.core.chunk_first.call(null,s__22178__$2);
var size__19222__auto__ = cljs.core.count.call(null,c__19221__auto__);
var b__22180 = cljs.core.chunk_buffer.call(null,size__19222__auto__);
if((function (){var i__22179 = (0);
while(true){
if((i__22179 < size__19222__auto__)){
var fmt = cljs.core._nth.call(null,c__19221__auto__,i__22179);
cljs.core.chunk_append.call(null,b__22180,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.color-choice","li.color-choice",102833134),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"radio","radio",1323726374),new cljs.core.Keyword(null,"id","id",-1388402092),fmt,new cljs.core.Keyword(null,"name","name",1843675177),for_color,new cljs.core.Keyword(null,"value","value",305978217),fmt,new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core._EQ_.call(null,fmt,selected_fmt),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (i__22179,fmt,c__19221__auto__,size__19222__auto__,b__22180,s__22178__$2,temp__4657__auto__,selected_fmt,current_format){
return (function (p1__22172_SHARP_){
var new_fmt = cljs.core.keyword.call(null,p1__22172_SHARP_.target.value);
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"format","format",-1306924766),for_color,new_fmt], null));

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"invalidate","invalidate",992224116),for_color], null));
});})(i__22179,fmt,c__19221__auto__,size__19222__auto__,b__22180,s__22178__$2,temp__4657__auto__,selected_fmt,current_format))
], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.color-choice","label.color-choice",2002334052),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),fmt], null),clojure.string.replace.call(null,clojure.string.capitalize.call(null,cljs.core.name.call(null,fmt)),"-c","-C")], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),fmt], null)));

var G__22181 = (i__22179 + (1));
i__22179 = G__22181;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22180),we_color$views$format_choices_$_iter__22177.call(null,cljs.core.chunk_rest.call(null,s__22178__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22180),null);
}
} else {
var fmt = cljs.core.first.call(null,s__22178__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.color-choice","li.color-choice",102833134),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"radio","radio",1323726374),new cljs.core.Keyword(null,"id","id",-1388402092),fmt,new cljs.core.Keyword(null,"name","name",1843675177),for_color,new cljs.core.Keyword(null,"value","value",305978217),fmt,new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core._EQ_.call(null,fmt,selected_fmt),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (fmt,s__22178__$2,temp__4657__auto__,selected_fmt,current_format){
return (function (p1__22172_SHARP_){
var new_fmt = cljs.core.keyword.call(null,p1__22172_SHARP_.target.value);
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"format","format",-1306924766),for_color,new_fmt], null));

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"invalidate","invalidate",992224116),for_color], null));
});})(fmt,s__22178__$2,temp__4657__auto__,selected_fmt,current_format))
], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.color-choice","label.color-choice",2002334052),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),fmt], null),clojure.string.replace.call(null,clojure.string.capitalize.call(null,cljs.core.name.call(null,fmt)),"-c","-C")], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),fmt], null)),we_color$views$format_choices_$_iter__22177.call(null,cljs.core.rest.call(null,s__22178__$2)));
}
} else {
return null;
}
break;
}
});})(selected_fmt,current_format))
,null,null));
});})(selected_fmt,current_format))
;
return iter__19223__auto__.call(null,formats);
})()], null);
});
;})(current_format))
});
we_color.views.main_panel = (function we_color$views$main_panel(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#colors","div#colors",-84822528),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.color.col-md-6","div.color.col-md-6",-1126545584),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [we_color.views.color_label,new cljs.core.Keyword(null,"ios","ios",-778010715),new cljs.core.Keyword(null,"fa-apple","fa-apple",-1343600627)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [we_color.views.color_field,new cljs.core.Keyword(null,"ios","ios",-778010715)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [we_color.views.format_choices,new cljs.core.Keyword(null,"ios","ios",-778010715),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"objective-c","objective-c",-146888277),new cljs.core.Keyword(null,"swift","swift",-1816498455)], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.color.col-md-6","div.color.col-md-6",-1126545584),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [we_color.views.color_label,new cljs.core.Keyword(null,"android","android",-2084094573),new cljs.core.Keyword(null,"fa-android","fa-android",-1734223134)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [we_color.views.color_field,new cljs.core.Keyword(null,"android","android",-2084094573)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [we_color.views.format_choices,new cljs.core.Keyword(null,"android","android",-2084094573),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hex","hex",41691346),new cljs.core.Keyword(null,"int","int",-1741416922),new cljs.core.Keyword(null,"res","res",-1395007879)], null)], null)], null)], null)], null);
});

//# sourceMappingURL=views.js.map?rel=1463758939521