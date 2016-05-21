// Compiled by ClojureScript 1.8.51 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args21349 = [];
var len__19513__auto___21355 = arguments.length;
var i__19514__auto___21356 = (0);
while(true){
if((i__19514__auto___21356 < len__19513__auto___21355)){
args21349.push((arguments[i__19514__auto___21356]));

var G__21357 = (i__19514__auto___21356 + (1));
i__19514__auto___21356 = G__21357;
continue;
} else {
}
break;
}

var G__21351 = args21349.length;
switch (G__21351) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21349.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async21352 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21352 = (function (f,blockable,meta21353){
this.f = f;
this.blockable = blockable;
this.meta21353 = meta21353;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21352.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21354,meta21353__$1){
var self__ = this;
var _21354__$1 = this;
return (new cljs.core.async.t_cljs$core$async21352(self__.f,self__.blockable,meta21353__$1));
});

cljs.core.async.t_cljs$core$async21352.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21354){
var self__ = this;
var _21354__$1 = this;
return self__.meta21353;
});

cljs.core.async.t_cljs$core$async21352.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async21352.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async21352.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async21352.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async21352.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta21353","meta21353",-836897329,null)], null);
});

cljs.core.async.t_cljs$core$async21352.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21352.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21352";

cljs.core.async.t_cljs$core$async21352.cljs$lang$ctorPrWriter = (function (this__19049__auto__,writer__19050__auto__,opt__19051__auto__){
return cljs.core._write.call(null,writer__19050__auto__,"cljs.core.async/t_cljs$core$async21352");
});

cljs.core.async.__GT_t_cljs$core$async21352 = (function cljs$core$async$__GT_t_cljs$core$async21352(f__$1,blockable__$1,meta21353){
return (new cljs.core.async.t_cljs$core$async21352(f__$1,blockable__$1,meta21353));
});

}

return (new cljs.core.async.t_cljs$core$async21352(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args21361 = [];
var len__19513__auto___21364 = arguments.length;
var i__19514__auto___21365 = (0);
while(true){
if((i__19514__auto___21365 < len__19513__auto___21364)){
args21361.push((arguments[i__19514__auto___21365]));

var G__21366 = (i__19514__auto___21365 + (1));
i__19514__auto___21365 = G__21366;
continue;
} else {
}
break;
}

var G__21363 = args21361.length;
switch (G__21363) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21361.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args21368 = [];
var len__19513__auto___21371 = arguments.length;
var i__19514__auto___21372 = (0);
while(true){
if((i__19514__auto___21372 < len__19513__auto___21371)){
args21368.push((arguments[i__19514__auto___21372]));

var G__21373 = (i__19514__auto___21372 + (1));
i__19514__auto___21372 = G__21373;
continue;
} else {
}
break;
}

var G__21370 = args21368.length;
switch (G__21370) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21368.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args21375 = [];
var len__19513__auto___21378 = arguments.length;
var i__19514__auto___21379 = (0);
while(true){
if((i__19514__auto___21379 < len__19513__auto___21378)){
args21375.push((arguments[i__19514__auto___21379]));

var G__21380 = (i__19514__auto___21379 + (1));
i__19514__auto___21379 = G__21380;
continue;
} else {
}
break;
}

var G__21377 = args21375.length;
switch (G__21377) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21375.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_21382 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_21382);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_21382,ret){
return (function (){
return fn1.call(null,val_21382);
});})(val_21382,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args21383 = [];
var len__19513__auto___21386 = arguments.length;
var i__19514__auto___21387 = (0);
while(true){
if((i__19514__auto___21387 < len__19513__auto___21386)){
args21383.push((arguments[i__19514__auto___21387]));

var G__21388 = (i__19514__auto___21387 + (1));
i__19514__auto___21387 = G__21388;
continue;
} else {
}
break;
}

var G__21385 = args21383.length;
switch (G__21385) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21383.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__19358__auto___21390 = n;
var x_21391 = (0);
while(true){
if((x_21391 < n__19358__auto___21390)){
(a[x_21391] = (0));

var G__21392 = (x_21391 + (1));
x_21391 = G__21392;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__21393 = (i + (1));
i = G__21393;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async21397 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21397 = (function (alt_flag,flag,meta21398){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta21398 = meta21398;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21397.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_21399,meta21398__$1){
var self__ = this;
var _21399__$1 = this;
return (new cljs.core.async.t_cljs$core$async21397(self__.alt_flag,self__.flag,meta21398__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async21397.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_21399){
var self__ = this;
var _21399__$1 = this;
return self__.meta21398;
});})(flag))
;

cljs.core.async.t_cljs$core$async21397.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async21397.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async21397.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async21397.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async21397.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta21398","meta21398",-701955572,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async21397.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21397.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21397";

cljs.core.async.t_cljs$core$async21397.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__19049__auto__,writer__19050__auto__,opt__19051__auto__){
return cljs.core._write.call(null,writer__19050__auto__,"cljs.core.async/t_cljs$core$async21397");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async21397 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async21397(alt_flag__$1,flag__$1,meta21398){
return (new cljs.core.async.t_cljs$core$async21397(alt_flag__$1,flag__$1,meta21398));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async21397(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async21403 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21403 = (function (alt_handler,flag,cb,meta21404){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta21404 = meta21404;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21403.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21405,meta21404__$1){
var self__ = this;
var _21405__$1 = this;
return (new cljs.core.async.t_cljs$core$async21403(self__.alt_handler,self__.flag,self__.cb,meta21404__$1));
});

cljs.core.async.t_cljs$core$async21403.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21405){
var self__ = this;
var _21405__$1 = this;
return self__.meta21404;
});

cljs.core.async.t_cljs$core$async21403.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async21403.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async21403.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async21403.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async21403.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta21404","meta21404",1380754204,null)], null);
});

cljs.core.async.t_cljs$core$async21403.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21403.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21403";

cljs.core.async.t_cljs$core$async21403.cljs$lang$ctorPrWriter = (function (this__19049__auto__,writer__19050__auto__,opt__19051__auto__){
return cljs.core._write.call(null,writer__19050__auto__,"cljs.core.async/t_cljs$core$async21403");
});

cljs.core.async.__GT_t_cljs$core$async21403 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async21403(alt_handler__$1,flag__$1,cb__$1,meta21404){
return (new cljs.core.async.t_cljs$core$async21403(alt_handler__$1,flag__$1,cb__$1,meta21404));
});

}

return (new cljs.core.async.t_cljs$core$async21403(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__21406_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__21406_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__21407_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__21407_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__18443__auto__ = wport;
if(cljs.core.truth_(or__18443__auto__)){
return or__18443__auto__;
} else {
return port;
}
})()], null));
} else {
var G__21408 = (i + (1));
i = G__21408;
continue;
}
} else {
return null;
}
break;
}
})();
var or__18443__auto__ = ret;
if(cljs.core.truth_(or__18443__auto__)){
return or__18443__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__18431__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__18431__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__18431__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__19520__auto__ = [];
var len__19513__auto___21414 = arguments.length;
var i__19514__auto___21415 = (0);
while(true){
if((i__19514__auto___21415 < len__19513__auto___21414)){
args__19520__auto__.push((arguments[i__19514__auto___21415]));

var G__21416 = (i__19514__auto___21415 + (1));
i__19514__auto___21415 = G__21416;
continue;
} else {
}
break;
}

var argseq__19521__auto__ = ((((1) < args__19520__auto__.length))?(new cljs.core.IndexedSeq(args__19520__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19521__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__21411){
var map__21412 = p__21411;
var map__21412__$1 = ((((!((map__21412 == null)))?((((map__21412.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21412.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21412):map__21412);
var opts = map__21412__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq21409){
var G__21410 = cljs.core.first.call(null,seq21409);
var seq21409__$1 = cljs.core.next.call(null,seq21409);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__21410,seq21409__$1);
});
/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args21417 = [];
var len__19513__auto___21467 = arguments.length;
var i__19514__auto___21468 = (0);
while(true){
if((i__19514__auto___21468 < len__19513__auto___21467)){
args21417.push((arguments[i__19514__auto___21468]));

var G__21469 = (i__19514__auto___21468 + (1));
i__19514__auto___21468 = G__21469;
continue;
} else {
}
break;
}

var G__21419 = args21417.length;
switch (G__21419) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21417.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__21304__auto___21471 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21304__auto___21471){
return (function (){
var f__21305__auto__ = (function (){var switch__21192__auto__ = ((function (c__21304__auto___21471){
return (function (state_21443){
var state_val_21444 = (state_21443[(1)]);
if((state_val_21444 === (7))){
var inst_21439 = (state_21443[(2)]);
var state_21443__$1 = state_21443;
var statearr_21445_21472 = state_21443__$1;
(statearr_21445_21472[(2)] = inst_21439);

(statearr_21445_21472[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21444 === (1))){
var state_21443__$1 = state_21443;
var statearr_21446_21473 = state_21443__$1;
(statearr_21446_21473[(2)] = null);

(statearr_21446_21473[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21444 === (4))){
var inst_21422 = (state_21443[(7)]);
var inst_21422__$1 = (state_21443[(2)]);
var inst_21423 = (inst_21422__$1 == null);
var state_21443__$1 = (function (){var statearr_21447 = state_21443;
(statearr_21447[(7)] = inst_21422__$1);

return statearr_21447;
})();
if(cljs.core.truth_(inst_21423)){
var statearr_21448_21474 = state_21443__$1;
(statearr_21448_21474[(1)] = (5));

} else {
var statearr_21449_21475 = state_21443__$1;
(statearr_21449_21475[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21444 === (13))){
var state_21443__$1 = state_21443;
var statearr_21450_21476 = state_21443__$1;
(statearr_21450_21476[(2)] = null);

(statearr_21450_21476[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21444 === (6))){
var inst_21422 = (state_21443[(7)]);
var state_21443__$1 = state_21443;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21443__$1,(11),to,inst_21422);
} else {
if((state_val_21444 === (3))){
var inst_21441 = (state_21443[(2)]);
var state_21443__$1 = state_21443;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21443__$1,inst_21441);
} else {
if((state_val_21444 === (12))){
var state_21443__$1 = state_21443;
var statearr_21451_21477 = state_21443__$1;
(statearr_21451_21477[(2)] = null);

(statearr_21451_21477[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21444 === (2))){
var state_21443__$1 = state_21443;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21443__$1,(4),from);
} else {
if((state_val_21444 === (11))){
var inst_21432 = (state_21443[(2)]);
var state_21443__$1 = state_21443;
if(cljs.core.truth_(inst_21432)){
var statearr_21452_21478 = state_21443__$1;
(statearr_21452_21478[(1)] = (12));

} else {
var statearr_21453_21479 = state_21443__$1;
(statearr_21453_21479[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21444 === (9))){
var state_21443__$1 = state_21443;
var statearr_21454_21480 = state_21443__$1;
(statearr_21454_21480[(2)] = null);

(statearr_21454_21480[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21444 === (5))){
var state_21443__$1 = state_21443;
if(cljs.core.truth_(close_QMARK_)){
var statearr_21455_21481 = state_21443__$1;
(statearr_21455_21481[(1)] = (8));

} else {
var statearr_21456_21482 = state_21443__$1;
(statearr_21456_21482[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21444 === (14))){
var inst_21437 = (state_21443[(2)]);
var state_21443__$1 = state_21443;
var statearr_21457_21483 = state_21443__$1;
(statearr_21457_21483[(2)] = inst_21437);

(statearr_21457_21483[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21444 === (10))){
var inst_21429 = (state_21443[(2)]);
var state_21443__$1 = state_21443;
var statearr_21458_21484 = state_21443__$1;
(statearr_21458_21484[(2)] = inst_21429);

(statearr_21458_21484[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21444 === (8))){
var inst_21426 = cljs.core.async.close_BANG_.call(null,to);
var state_21443__$1 = state_21443;
var statearr_21459_21485 = state_21443__$1;
(statearr_21459_21485[(2)] = inst_21426);

(statearr_21459_21485[(1)] = (10));


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
});})(c__21304__auto___21471))
;
return ((function (switch__21192__auto__,c__21304__auto___21471){
return (function() {
var cljs$core$async$state_machine__21193__auto__ = null;
var cljs$core$async$state_machine__21193__auto____0 = (function (){
var statearr_21463 = [null,null,null,null,null,null,null,null];
(statearr_21463[(0)] = cljs$core$async$state_machine__21193__auto__);

(statearr_21463[(1)] = (1));

return statearr_21463;
});
var cljs$core$async$state_machine__21193__auto____1 = (function (state_21443){
while(true){
var ret_value__21194__auto__ = (function (){try{while(true){
var result__21195__auto__ = switch__21192__auto__.call(null,state_21443);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21195__auto__;
}
break;
}
}catch (e21464){if((e21464 instanceof Object)){
var ex__21196__auto__ = e21464;
var statearr_21465_21486 = state_21443;
(statearr_21465_21486[(5)] = ex__21196__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21443);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21464;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21194__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21487 = state_21443;
state_21443 = G__21487;
continue;
} else {
return ret_value__21194__auto__;
}
break;
}
});
cljs$core$async$state_machine__21193__auto__ = function(state_21443){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21193__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21193__auto____1.call(this,state_21443);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21193__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21193__auto____0;
cljs$core$async$state_machine__21193__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21193__auto____1;
return cljs$core$async$state_machine__21193__auto__;
})()
;})(switch__21192__auto__,c__21304__auto___21471))
})();
var state__21306__auto__ = (function (){var statearr_21466 = f__21305__auto__.call(null);
(statearr_21466[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21304__auto___21471);

return statearr_21466;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21306__auto__);
});})(c__21304__auto___21471))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__21671){
var vec__21672 = p__21671;
var v = cljs.core.nth.call(null,vec__21672,(0),null);
var p = cljs.core.nth.call(null,vec__21672,(1),null);
var job = vec__21672;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__21304__auto___21854 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21304__auto___21854,res,vec__21672,v,p,job,jobs,results){
return (function (){
var f__21305__auto__ = (function (){var switch__21192__auto__ = ((function (c__21304__auto___21854,res,vec__21672,v,p,job,jobs,results){
return (function (state_21677){
var state_val_21678 = (state_21677[(1)]);
if((state_val_21678 === (1))){
var state_21677__$1 = state_21677;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21677__$1,(2),res,v);
} else {
if((state_val_21678 === (2))){
var inst_21674 = (state_21677[(2)]);
var inst_21675 = cljs.core.async.close_BANG_.call(null,res);
var state_21677__$1 = (function (){var statearr_21679 = state_21677;
(statearr_21679[(7)] = inst_21674);

return statearr_21679;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21677__$1,inst_21675);
} else {
return null;
}
}
});})(c__21304__auto___21854,res,vec__21672,v,p,job,jobs,results))
;
return ((function (switch__21192__auto__,c__21304__auto___21854,res,vec__21672,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21193__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21193__auto____0 = (function (){
var statearr_21683 = [null,null,null,null,null,null,null,null];
(statearr_21683[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21193__auto__);

(statearr_21683[(1)] = (1));

return statearr_21683;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21193__auto____1 = (function (state_21677){
while(true){
var ret_value__21194__auto__ = (function (){try{while(true){
var result__21195__auto__ = switch__21192__auto__.call(null,state_21677);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21195__auto__;
}
break;
}
}catch (e21684){if((e21684 instanceof Object)){
var ex__21196__auto__ = e21684;
var statearr_21685_21855 = state_21677;
(statearr_21685_21855[(5)] = ex__21196__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21677);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21684;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21194__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21856 = state_21677;
state_21677 = G__21856;
continue;
} else {
return ret_value__21194__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21193__auto__ = function(state_21677){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21193__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21193__auto____1.call(this,state_21677);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21193__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21193__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21193__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21193__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21193__auto__;
})()
;})(switch__21192__auto__,c__21304__auto___21854,res,vec__21672,v,p,job,jobs,results))
})();
var state__21306__auto__ = (function (){var statearr_21686 = f__21305__auto__.call(null);
(statearr_21686[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21304__auto___21854);

return statearr_21686;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21306__auto__);
});})(c__21304__auto___21854,res,vec__21672,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__21687){
var vec__21688 = p__21687;
var v = cljs.core.nth.call(null,vec__21688,(0),null);
var p = cljs.core.nth.call(null,vec__21688,(1),null);
var job = vec__21688;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__19358__auto___21857 = n;
var __21858 = (0);
while(true){
if((__21858 < n__19358__auto___21857)){
var G__21689_21859 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__21689_21859) {
case "compute":
var c__21304__auto___21861 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__21858,c__21304__auto___21861,G__21689_21859,n__19358__auto___21857,jobs,results,process,async){
return (function (){
var f__21305__auto__ = (function (){var switch__21192__auto__ = ((function (__21858,c__21304__auto___21861,G__21689_21859,n__19358__auto___21857,jobs,results,process,async){
return (function (state_21702){
var state_val_21703 = (state_21702[(1)]);
if((state_val_21703 === (1))){
var state_21702__$1 = state_21702;
var statearr_21704_21862 = state_21702__$1;
(statearr_21704_21862[(2)] = null);

(statearr_21704_21862[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21703 === (2))){
var state_21702__$1 = state_21702;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21702__$1,(4),jobs);
} else {
if((state_val_21703 === (3))){
var inst_21700 = (state_21702[(2)]);
var state_21702__$1 = state_21702;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21702__$1,inst_21700);
} else {
if((state_val_21703 === (4))){
var inst_21692 = (state_21702[(2)]);
var inst_21693 = process.call(null,inst_21692);
var state_21702__$1 = state_21702;
if(cljs.core.truth_(inst_21693)){
var statearr_21705_21863 = state_21702__$1;
(statearr_21705_21863[(1)] = (5));

} else {
var statearr_21706_21864 = state_21702__$1;
(statearr_21706_21864[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21703 === (5))){
var state_21702__$1 = state_21702;
var statearr_21707_21865 = state_21702__$1;
(statearr_21707_21865[(2)] = null);

(statearr_21707_21865[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21703 === (6))){
var state_21702__$1 = state_21702;
var statearr_21708_21866 = state_21702__$1;
(statearr_21708_21866[(2)] = null);

(statearr_21708_21866[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21703 === (7))){
var inst_21698 = (state_21702[(2)]);
var state_21702__$1 = state_21702;
var statearr_21709_21867 = state_21702__$1;
(statearr_21709_21867[(2)] = inst_21698);

(statearr_21709_21867[(1)] = (3));


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
});})(__21858,c__21304__auto___21861,G__21689_21859,n__19358__auto___21857,jobs,results,process,async))
;
return ((function (__21858,switch__21192__auto__,c__21304__auto___21861,G__21689_21859,n__19358__auto___21857,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21193__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21193__auto____0 = (function (){
var statearr_21713 = [null,null,null,null,null,null,null];
(statearr_21713[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21193__auto__);

(statearr_21713[(1)] = (1));

return statearr_21713;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21193__auto____1 = (function (state_21702){
while(true){
var ret_value__21194__auto__ = (function (){try{while(true){
var result__21195__auto__ = switch__21192__auto__.call(null,state_21702);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21195__auto__;
}
break;
}
}catch (e21714){if((e21714 instanceof Object)){
var ex__21196__auto__ = e21714;
var statearr_21715_21868 = state_21702;
(statearr_21715_21868[(5)] = ex__21196__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21702);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21714;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21194__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21869 = state_21702;
state_21702 = G__21869;
continue;
} else {
return ret_value__21194__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21193__auto__ = function(state_21702){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21193__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21193__auto____1.call(this,state_21702);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21193__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21193__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21193__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21193__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21193__auto__;
})()
;})(__21858,switch__21192__auto__,c__21304__auto___21861,G__21689_21859,n__19358__auto___21857,jobs,results,process,async))
})();
var state__21306__auto__ = (function (){var statearr_21716 = f__21305__auto__.call(null);
(statearr_21716[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21304__auto___21861);

return statearr_21716;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21306__auto__);
});})(__21858,c__21304__auto___21861,G__21689_21859,n__19358__auto___21857,jobs,results,process,async))
);


break;
case "async":
var c__21304__auto___21870 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__21858,c__21304__auto___21870,G__21689_21859,n__19358__auto___21857,jobs,results,process,async){
return (function (){
var f__21305__auto__ = (function (){var switch__21192__auto__ = ((function (__21858,c__21304__auto___21870,G__21689_21859,n__19358__auto___21857,jobs,results,process,async){
return (function (state_21729){
var state_val_21730 = (state_21729[(1)]);
if((state_val_21730 === (1))){
var state_21729__$1 = state_21729;
var statearr_21731_21871 = state_21729__$1;
(statearr_21731_21871[(2)] = null);

(statearr_21731_21871[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21730 === (2))){
var state_21729__$1 = state_21729;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21729__$1,(4),jobs);
} else {
if((state_val_21730 === (3))){
var inst_21727 = (state_21729[(2)]);
var state_21729__$1 = state_21729;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21729__$1,inst_21727);
} else {
if((state_val_21730 === (4))){
var inst_21719 = (state_21729[(2)]);
var inst_21720 = async.call(null,inst_21719);
var state_21729__$1 = state_21729;
if(cljs.core.truth_(inst_21720)){
var statearr_21732_21872 = state_21729__$1;
(statearr_21732_21872[(1)] = (5));

} else {
var statearr_21733_21873 = state_21729__$1;
(statearr_21733_21873[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21730 === (5))){
var state_21729__$1 = state_21729;
var statearr_21734_21874 = state_21729__$1;
(statearr_21734_21874[(2)] = null);

(statearr_21734_21874[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21730 === (6))){
var state_21729__$1 = state_21729;
var statearr_21735_21875 = state_21729__$1;
(statearr_21735_21875[(2)] = null);

(statearr_21735_21875[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21730 === (7))){
var inst_21725 = (state_21729[(2)]);
var state_21729__$1 = state_21729;
var statearr_21736_21876 = state_21729__$1;
(statearr_21736_21876[(2)] = inst_21725);

(statearr_21736_21876[(1)] = (3));


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
});})(__21858,c__21304__auto___21870,G__21689_21859,n__19358__auto___21857,jobs,results,process,async))
;
return ((function (__21858,switch__21192__auto__,c__21304__auto___21870,G__21689_21859,n__19358__auto___21857,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21193__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21193__auto____0 = (function (){
var statearr_21740 = [null,null,null,null,null,null,null];
(statearr_21740[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21193__auto__);

(statearr_21740[(1)] = (1));

return statearr_21740;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21193__auto____1 = (function (state_21729){
while(true){
var ret_value__21194__auto__ = (function (){try{while(true){
var result__21195__auto__ = switch__21192__auto__.call(null,state_21729);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21195__auto__;
}
break;
}
}catch (e21741){if((e21741 instanceof Object)){
var ex__21196__auto__ = e21741;
var statearr_21742_21877 = state_21729;
(statearr_21742_21877[(5)] = ex__21196__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21729);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21741;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21194__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21878 = state_21729;
state_21729 = G__21878;
continue;
} else {
return ret_value__21194__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21193__auto__ = function(state_21729){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21193__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21193__auto____1.call(this,state_21729);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21193__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21193__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21193__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21193__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21193__auto__;
})()
;})(__21858,switch__21192__auto__,c__21304__auto___21870,G__21689_21859,n__19358__auto___21857,jobs,results,process,async))
})();
var state__21306__auto__ = (function (){var statearr_21743 = f__21305__auto__.call(null);
(statearr_21743[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21304__auto___21870);

return statearr_21743;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21306__auto__);
});})(__21858,c__21304__auto___21870,G__21689_21859,n__19358__auto___21857,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__21879 = (__21858 + (1));
__21858 = G__21879;
continue;
} else {
}
break;
}

var c__21304__auto___21880 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21304__auto___21880,jobs,results,process,async){
return (function (){
var f__21305__auto__ = (function (){var switch__21192__auto__ = ((function (c__21304__auto___21880,jobs,results,process,async){
return (function (state_21765){
var state_val_21766 = (state_21765[(1)]);
if((state_val_21766 === (1))){
var state_21765__$1 = state_21765;
var statearr_21767_21881 = state_21765__$1;
(statearr_21767_21881[(2)] = null);

(statearr_21767_21881[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21766 === (2))){
var state_21765__$1 = state_21765;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21765__$1,(4),from);
} else {
if((state_val_21766 === (3))){
var inst_21763 = (state_21765[(2)]);
var state_21765__$1 = state_21765;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21765__$1,inst_21763);
} else {
if((state_val_21766 === (4))){
var inst_21746 = (state_21765[(7)]);
var inst_21746__$1 = (state_21765[(2)]);
var inst_21747 = (inst_21746__$1 == null);
var state_21765__$1 = (function (){var statearr_21768 = state_21765;
(statearr_21768[(7)] = inst_21746__$1);

return statearr_21768;
})();
if(cljs.core.truth_(inst_21747)){
var statearr_21769_21882 = state_21765__$1;
(statearr_21769_21882[(1)] = (5));

} else {
var statearr_21770_21883 = state_21765__$1;
(statearr_21770_21883[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21766 === (5))){
var inst_21749 = cljs.core.async.close_BANG_.call(null,jobs);
var state_21765__$1 = state_21765;
var statearr_21771_21884 = state_21765__$1;
(statearr_21771_21884[(2)] = inst_21749);

(statearr_21771_21884[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21766 === (6))){
var inst_21751 = (state_21765[(8)]);
var inst_21746 = (state_21765[(7)]);
var inst_21751__$1 = cljs.core.async.chan.call(null,(1));
var inst_21752 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_21753 = [inst_21746,inst_21751__$1];
var inst_21754 = (new cljs.core.PersistentVector(null,2,(5),inst_21752,inst_21753,null));
var state_21765__$1 = (function (){var statearr_21772 = state_21765;
(statearr_21772[(8)] = inst_21751__$1);

return statearr_21772;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21765__$1,(8),jobs,inst_21754);
} else {
if((state_val_21766 === (7))){
var inst_21761 = (state_21765[(2)]);
var state_21765__$1 = state_21765;
var statearr_21773_21885 = state_21765__$1;
(statearr_21773_21885[(2)] = inst_21761);

(statearr_21773_21885[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21766 === (8))){
var inst_21751 = (state_21765[(8)]);
var inst_21756 = (state_21765[(2)]);
var state_21765__$1 = (function (){var statearr_21774 = state_21765;
(statearr_21774[(9)] = inst_21756);

return statearr_21774;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21765__$1,(9),results,inst_21751);
} else {
if((state_val_21766 === (9))){
var inst_21758 = (state_21765[(2)]);
var state_21765__$1 = (function (){var statearr_21775 = state_21765;
(statearr_21775[(10)] = inst_21758);

return statearr_21775;
})();
var statearr_21776_21886 = state_21765__$1;
(statearr_21776_21886[(2)] = null);

(statearr_21776_21886[(1)] = (2));


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
});})(c__21304__auto___21880,jobs,results,process,async))
;
return ((function (switch__21192__auto__,c__21304__auto___21880,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21193__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21193__auto____0 = (function (){
var statearr_21780 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_21780[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21193__auto__);

(statearr_21780[(1)] = (1));

return statearr_21780;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21193__auto____1 = (function (state_21765){
while(true){
var ret_value__21194__auto__ = (function (){try{while(true){
var result__21195__auto__ = switch__21192__auto__.call(null,state_21765);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21195__auto__;
}
break;
}
}catch (e21781){if((e21781 instanceof Object)){
var ex__21196__auto__ = e21781;
var statearr_21782_21887 = state_21765;
(statearr_21782_21887[(5)] = ex__21196__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21765);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21781;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21194__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21888 = state_21765;
state_21765 = G__21888;
continue;
} else {
return ret_value__21194__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21193__auto__ = function(state_21765){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21193__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21193__auto____1.call(this,state_21765);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21193__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21193__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21193__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21193__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21193__auto__;
})()
;})(switch__21192__auto__,c__21304__auto___21880,jobs,results,process,async))
})();
var state__21306__auto__ = (function (){var statearr_21783 = f__21305__auto__.call(null);
(statearr_21783[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21304__auto___21880);

return statearr_21783;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21306__auto__);
});})(c__21304__auto___21880,jobs,results,process,async))
);


var c__21304__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21304__auto__,jobs,results,process,async){
return (function (){
var f__21305__auto__ = (function (){var switch__21192__auto__ = ((function (c__21304__auto__,jobs,results,process,async){
return (function (state_21821){
var state_val_21822 = (state_21821[(1)]);
if((state_val_21822 === (7))){
var inst_21817 = (state_21821[(2)]);
var state_21821__$1 = state_21821;
var statearr_21823_21889 = state_21821__$1;
(statearr_21823_21889[(2)] = inst_21817);

(statearr_21823_21889[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21822 === (20))){
var state_21821__$1 = state_21821;
var statearr_21824_21890 = state_21821__$1;
(statearr_21824_21890[(2)] = null);

(statearr_21824_21890[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21822 === (1))){
var state_21821__$1 = state_21821;
var statearr_21825_21891 = state_21821__$1;
(statearr_21825_21891[(2)] = null);

(statearr_21825_21891[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21822 === (4))){
var inst_21786 = (state_21821[(7)]);
var inst_21786__$1 = (state_21821[(2)]);
var inst_21787 = (inst_21786__$1 == null);
var state_21821__$1 = (function (){var statearr_21826 = state_21821;
(statearr_21826[(7)] = inst_21786__$1);

return statearr_21826;
})();
if(cljs.core.truth_(inst_21787)){
var statearr_21827_21892 = state_21821__$1;
(statearr_21827_21892[(1)] = (5));

} else {
var statearr_21828_21893 = state_21821__$1;
(statearr_21828_21893[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21822 === (15))){
var inst_21799 = (state_21821[(8)]);
var state_21821__$1 = state_21821;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21821__$1,(18),to,inst_21799);
} else {
if((state_val_21822 === (21))){
var inst_21812 = (state_21821[(2)]);
var state_21821__$1 = state_21821;
var statearr_21829_21894 = state_21821__$1;
(statearr_21829_21894[(2)] = inst_21812);

(statearr_21829_21894[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21822 === (13))){
var inst_21814 = (state_21821[(2)]);
var state_21821__$1 = (function (){var statearr_21830 = state_21821;
(statearr_21830[(9)] = inst_21814);

return statearr_21830;
})();
var statearr_21831_21895 = state_21821__$1;
(statearr_21831_21895[(2)] = null);

(statearr_21831_21895[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21822 === (6))){
var inst_21786 = (state_21821[(7)]);
var state_21821__$1 = state_21821;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21821__$1,(11),inst_21786);
} else {
if((state_val_21822 === (17))){
var inst_21807 = (state_21821[(2)]);
var state_21821__$1 = state_21821;
if(cljs.core.truth_(inst_21807)){
var statearr_21832_21896 = state_21821__$1;
(statearr_21832_21896[(1)] = (19));

} else {
var statearr_21833_21897 = state_21821__$1;
(statearr_21833_21897[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21822 === (3))){
var inst_21819 = (state_21821[(2)]);
var state_21821__$1 = state_21821;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21821__$1,inst_21819);
} else {
if((state_val_21822 === (12))){
var inst_21796 = (state_21821[(10)]);
var state_21821__$1 = state_21821;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21821__$1,(14),inst_21796);
} else {
if((state_val_21822 === (2))){
var state_21821__$1 = state_21821;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21821__$1,(4),results);
} else {
if((state_val_21822 === (19))){
var state_21821__$1 = state_21821;
var statearr_21834_21898 = state_21821__$1;
(statearr_21834_21898[(2)] = null);

(statearr_21834_21898[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21822 === (11))){
var inst_21796 = (state_21821[(2)]);
var state_21821__$1 = (function (){var statearr_21835 = state_21821;
(statearr_21835[(10)] = inst_21796);

return statearr_21835;
})();
var statearr_21836_21899 = state_21821__$1;
(statearr_21836_21899[(2)] = null);

(statearr_21836_21899[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21822 === (9))){
var state_21821__$1 = state_21821;
var statearr_21837_21900 = state_21821__$1;
(statearr_21837_21900[(2)] = null);

(statearr_21837_21900[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21822 === (5))){
var state_21821__$1 = state_21821;
if(cljs.core.truth_(close_QMARK_)){
var statearr_21838_21901 = state_21821__$1;
(statearr_21838_21901[(1)] = (8));

} else {
var statearr_21839_21902 = state_21821__$1;
(statearr_21839_21902[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21822 === (14))){
var inst_21799 = (state_21821[(8)]);
var inst_21801 = (state_21821[(11)]);
var inst_21799__$1 = (state_21821[(2)]);
var inst_21800 = (inst_21799__$1 == null);
var inst_21801__$1 = cljs.core.not.call(null,inst_21800);
var state_21821__$1 = (function (){var statearr_21840 = state_21821;
(statearr_21840[(8)] = inst_21799__$1);

(statearr_21840[(11)] = inst_21801__$1);

return statearr_21840;
})();
if(inst_21801__$1){
var statearr_21841_21903 = state_21821__$1;
(statearr_21841_21903[(1)] = (15));

} else {
var statearr_21842_21904 = state_21821__$1;
(statearr_21842_21904[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21822 === (16))){
var inst_21801 = (state_21821[(11)]);
var state_21821__$1 = state_21821;
var statearr_21843_21905 = state_21821__$1;
(statearr_21843_21905[(2)] = inst_21801);

(statearr_21843_21905[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21822 === (10))){
var inst_21793 = (state_21821[(2)]);
var state_21821__$1 = state_21821;
var statearr_21844_21906 = state_21821__$1;
(statearr_21844_21906[(2)] = inst_21793);

(statearr_21844_21906[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21822 === (18))){
var inst_21804 = (state_21821[(2)]);
var state_21821__$1 = state_21821;
var statearr_21845_21907 = state_21821__$1;
(statearr_21845_21907[(2)] = inst_21804);

(statearr_21845_21907[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21822 === (8))){
var inst_21790 = cljs.core.async.close_BANG_.call(null,to);
var state_21821__$1 = state_21821;
var statearr_21846_21908 = state_21821__$1;
(statearr_21846_21908[(2)] = inst_21790);

(statearr_21846_21908[(1)] = (10));


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
});})(c__21304__auto__,jobs,results,process,async))
;
return ((function (switch__21192__auto__,c__21304__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21193__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21193__auto____0 = (function (){
var statearr_21850 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21850[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21193__auto__);

(statearr_21850[(1)] = (1));

return statearr_21850;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21193__auto____1 = (function (state_21821){
while(true){
var ret_value__21194__auto__ = (function (){try{while(true){
var result__21195__auto__ = switch__21192__auto__.call(null,state_21821);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21195__auto__;
}
break;
}
}catch (e21851){if((e21851 instanceof Object)){
var ex__21196__auto__ = e21851;
var statearr_21852_21909 = state_21821;
(statearr_21852_21909[(5)] = ex__21196__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21821);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21851;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21194__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21910 = state_21821;
state_21821 = G__21910;
continue;
} else {
return ret_value__21194__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21193__auto__ = function(state_21821){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21193__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21193__auto____1.call(this,state_21821);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21193__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21193__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21193__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21193__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21193__auto__;
})()
;})(switch__21192__auto__,c__21304__auto__,jobs,results,process,async))
})();
var state__21306__auto__ = (function (){var statearr_21853 = f__21305__auto__.call(null);
(statearr_21853[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21304__auto__);

return statearr_21853;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21306__auto__);
});})(c__21304__auto__,jobs,results,process,async))
);

return c__21304__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args21911 = [];
var len__19513__auto___21914 = arguments.length;
var i__19514__auto___21915 = (0);
while(true){
if((i__19514__auto___21915 < len__19513__auto___21914)){
args21911.push((arguments[i__19514__auto___21915]));

var G__21916 = (i__19514__auto___21915 + (1));
i__19514__auto___21915 = G__21916;
continue;
} else {
}
break;
}

var G__21913 = args21911.length;
switch (G__21913) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21911.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args21918 = [];
var len__19513__auto___21921 = arguments.length;
var i__19514__auto___21922 = (0);
while(true){
if((i__19514__auto___21922 < len__19513__auto___21921)){
args21918.push((arguments[i__19514__auto___21922]));

var G__21923 = (i__19514__auto___21922 + (1));
i__19514__auto___21922 = G__21923;
continue;
} else {
}
break;
}

var G__21920 = args21918.length;
switch (G__21920) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21918.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args21925 = [];
var len__19513__auto___21978 = arguments.length;
var i__19514__auto___21979 = (0);
while(true){
if((i__19514__auto___21979 < len__19513__auto___21978)){
args21925.push((arguments[i__19514__auto___21979]));

var G__21980 = (i__19514__auto___21979 + (1));
i__19514__auto___21979 = G__21980;
continue;
} else {
}
break;
}

var G__21927 = args21925.length;
switch (G__21927) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21925.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__21304__auto___21982 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21304__auto___21982,tc,fc){
return (function (){
var f__21305__auto__ = (function (){var switch__21192__auto__ = ((function (c__21304__auto___21982,tc,fc){
return (function (state_21953){
var state_val_21954 = (state_21953[(1)]);
if((state_val_21954 === (7))){
var inst_21949 = (state_21953[(2)]);
var state_21953__$1 = state_21953;
var statearr_21955_21983 = state_21953__$1;
(statearr_21955_21983[(2)] = inst_21949);

(statearr_21955_21983[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21954 === (1))){
var state_21953__$1 = state_21953;
var statearr_21956_21984 = state_21953__$1;
(statearr_21956_21984[(2)] = null);

(statearr_21956_21984[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21954 === (4))){
var inst_21930 = (state_21953[(7)]);
var inst_21930__$1 = (state_21953[(2)]);
var inst_21931 = (inst_21930__$1 == null);
var state_21953__$1 = (function (){var statearr_21957 = state_21953;
(statearr_21957[(7)] = inst_21930__$1);

return statearr_21957;
})();
if(cljs.core.truth_(inst_21931)){
var statearr_21958_21985 = state_21953__$1;
(statearr_21958_21985[(1)] = (5));

} else {
var statearr_21959_21986 = state_21953__$1;
(statearr_21959_21986[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21954 === (13))){
var state_21953__$1 = state_21953;
var statearr_21960_21987 = state_21953__$1;
(statearr_21960_21987[(2)] = null);

(statearr_21960_21987[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21954 === (6))){
var inst_21930 = (state_21953[(7)]);
var inst_21936 = p.call(null,inst_21930);
var state_21953__$1 = state_21953;
if(cljs.core.truth_(inst_21936)){
var statearr_21961_21988 = state_21953__$1;
(statearr_21961_21988[(1)] = (9));

} else {
var statearr_21962_21989 = state_21953__$1;
(statearr_21962_21989[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21954 === (3))){
var inst_21951 = (state_21953[(2)]);
var state_21953__$1 = state_21953;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21953__$1,inst_21951);
} else {
if((state_val_21954 === (12))){
var state_21953__$1 = state_21953;
var statearr_21963_21990 = state_21953__$1;
(statearr_21963_21990[(2)] = null);

(statearr_21963_21990[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21954 === (2))){
var state_21953__$1 = state_21953;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21953__$1,(4),ch);
} else {
if((state_val_21954 === (11))){
var inst_21930 = (state_21953[(7)]);
var inst_21940 = (state_21953[(2)]);
var state_21953__$1 = state_21953;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21953__$1,(8),inst_21940,inst_21930);
} else {
if((state_val_21954 === (9))){
var state_21953__$1 = state_21953;
var statearr_21964_21991 = state_21953__$1;
(statearr_21964_21991[(2)] = tc);

(statearr_21964_21991[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21954 === (5))){
var inst_21933 = cljs.core.async.close_BANG_.call(null,tc);
var inst_21934 = cljs.core.async.close_BANG_.call(null,fc);
var state_21953__$1 = (function (){var statearr_21965 = state_21953;
(statearr_21965[(8)] = inst_21933);

return statearr_21965;
})();
var statearr_21966_21992 = state_21953__$1;
(statearr_21966_21992[(2)] = inst_21934);

(statearr_21966_21992[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21954 === (14))){
var inst_21947 = (state_21953[(2)]);
var state_21953__$1 = state_21953;
var statearr_21967_21993 = state_21953__$1;
(statearr_21967_21993[(2)] = inst_21947);

(statearr_21967_21993[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21954 === (10))){
var state_21953__$1 = state_21953;
var statearr_21968_21994 = state_21953__$1;
(statearr_21968_21994[(2)] = fc);

(statearr_21968_21994[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21954 === (8))){
var inst_21942 = (state_21953[(2)]);
var state_21953__$1 = state_21953;
if(cljs.core.truth_(inst_21942)){
var statearr_21969_21995 = state_21953__$1;
(statearr_21969_21995[(1)] = (12));

} else {
var statearr_21970_21996 = state_21953__$1;
(statearr_21970_21996[(1)] = (13));

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
});})(c__21304__auto___21982,tc,fc))
;
return ((function (switch__21192__auto__,c__21304__auto___21982,tc,fc){
return (function() {
var cljs$core$async$state_machine__21193__auto__ = null;
var cljs$core$async$state_machine__21193__auto____0 = (function (){
var statearr_21974 = [null,null,null,null,null,null,null,null,null];
(statearr_21974[(0)] = cljs$core$async$state_machine__21193__auto__);

(statearr_21974[(1)] = (1));

return statearr_21974;
});
var cljs$core$async$state_machine__21193__auto____1 = (function (state_21953){
while(true){
var ret_value__21194__auto__ = (function (){try{while(true){
var result__21195__auto__ = switch__21192__auto__.call(null,state_21953);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21195__auto__;
}
break;
}
}catch (e21975){if((e21975 instanceof Object)){
var ex__21196__auto__ = e21975;
var statearr_21976_21997 = state_21953;
(statearr_21976_21997[(5)] = ex__21196__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21953);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21975;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21194__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21998 = state_21953;
state_21953 = G__21998;
continue;
} else {
return ret_value__21194__auto__;
}
break;
}
});
cljs$core$async$state_machine__21193__auto__ = function(state_21953){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21193__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21193__auto____1.call(this,state_21953);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21193__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21193__auto____0;
cljs$core$async$state_machine__21193__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21193__auto____1;
return cljs$core$async$state_machine__21193__auto__;
})()
;})(switch__21192__auto__,c__21304__auto___21982,tc,fc))
})();
var state__21306__auto__ = (function (){var statearr_21977 = f__21305__auto__.call(null);
(statearr_21977[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21304__auto___21982);

return statearr_21977;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21306__auto__);
});})(c__21304__auto___21982,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__21304__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21304__auto__){
return (function (){
var f__21305__auto__ = (function (){var switch__21192__auto__ = ((function (c__21304__auto__){
return (function (state_22062){
var state_val_22063 = (state_22062[(1)]);
if((state_val_22063 === (7))){
var inst_22058 = (state_22062[(2)]);
var state_22062__$1 = state_22062;
var statearr_22064_22085 = state_22062__$1;
(statearr_22064_22085[(2)] = inst_22058);

(statearr_22064_22085[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22063 === (1))){
var inst_22042 = init;
var state_22062__$1 = (function (){var statearr_22065 = state_22062;
(statearr_22065[(7)] = inst_22042);

return statearr_22065;
})();
var statearr_22066_22086 = state_22062__$1;
(statearr_22066_22086[(2)] = null);

(statearr_22066_22086[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22063 === (4))){
var inst_22045 = (state_22062[(8)]);
var inst_22045__$1 = (state_22062[(2)]);
var inst_22046 = (inst_22045__$1 == null);
var state_22062__$1 = (function (){var statearr_22067 = state_22062;
(statearr_22067[(8)] = inst_22045__$1);

return statearr_22067;
})();
if(cljs.core.truth_(inst_22046)){
var statearr_22068_22087 = state_22062__$1;
(statearr_22068_22087[(1)] = (5));

} else {
var statearr_22069_22088 = state_22062__$1;
(statearr_22069_22088[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22063 === (6))){
var inst_22042 = (state_22062[(7)]);
var inst_22049 = (state_22062[(9)]);
var inst_22045 = (state_22062[(8)]);
var inst_22049__$1 = f.call(null,inst_22042,inst_22045);
var inst_22050 = cljs.core.reduced_QMARK_.call(null,inst_22049__$1);
var state_22062__$1 = (function (){var statearr_22070 = state_22062;
(statearr_22070[(9)] = inst_22049__$1);

return statearr_22070;
})();
if(inst_22050){
var statearr_22071_22089 = state_22062__$1;
(statearr_22071_22089[(1)] = (8));

} else {
var statearr_22072_22090 = state_22062__$1;
(statearr_22072_22090[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22063 === (3))){
var inst_22060 = (state_22062[(2)]);
var state_22062__$1 = state_22062;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22062__$1,inst_22060);
} else {
if((state_val_22063 === (2))){
var state_22062__$1 = state_22062;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22062__$1,(4),ch);
} else {
if((state_val_22063 === (9))){
var inst_22049 = (state_22062[(9)]);
var inst_22042 = inst_22049;
var state_22062__$1 = (function (){var statearr_22073 = state_22062;
(statearr_22073[(7)] = inst_22042);

return statearr_22073;
})();
var statearr_22074_22091 = state_22062__$1;
(statearr_22074_22091[(2)] = null);

(statearr_22074_22091[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22063 === (5))){
var inst_22042 = (state_22062[(7)]);
var state_22062__$1 = state_22062;
var statearr_22075_22092 = state_22062__$1;
(statearr_22075_22092[(2)] = inst_22042);

(statearr_22075_22092[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22063 === (10))){
var inst_22056 = (state_22062[(2)]);
var state_22062__$1 = state_22062;
var statearr_22076_22093 = state_22062__$1;
(statearr_22076_22093[(2)] = inst_22056);

(statearr_22076_22093[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22063 === (8))){
var inst_22049 = (state_22062[(9)]);
var inst_22052 = cljs.core.deref.call(null,inst_22049);
var state_22062__$1 = state_22062;
var statearr_22077_22094 = state_22062__$1;
(statearr_22077_22094[(2)] = inst_22052);

(statearr_22077_22094[(1)] = (10));


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
});})(c__21304__auto__))
;
return ((function (switch__21192__auto__,c__21304__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__21193__auto__ = null;
var cljs$core$async$reduce_$_state_machine__21193__auto____0 = (function (){
var statearr_22081 = [null,null,null,null,null,null,null,null,null,null];
(statearr_22081[(0)] = cljs$core$async$reduce_$_state_machine__21193__auto__);

(statearr_22081[(1)] = (1));

return statearr_22081;
});
var cljs$core$async$reduce_$_state_machine__21193__auto____1 = (function (state_22062){
while(true){
var ret_value__21194__auto__ = (function (){try{while(true){
var result__21195__auto__ = switch__21192__auto__.call(null,state_22062);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21195__auto__;
}
break;
}
}catch (e22082){if((e22082 instanceof Object)){
var ex__21196__auto__ = e22082;
var statearr_22083_22095 = state_22062;
(statearr_22083_22095[(5)] = ex__21196__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22062);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22082;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21194__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22096 = state_22062;
state_22062 = G__22096;
continue;
} else {
return ret_value__21194__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__21193__auto__ = function(state_22062){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__21193__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__21193__auto____1.call(this,state_22062);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__21193__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__21193__auto____0;
cljs$core$async$reduce_$_state_machine__21193__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__21193__auto____1;
return cljs$core$async$reduce_$_state_machine__21193__auto__;
})()
;})(switch__21192__auto__,c__21304__auto__))
})();
var state__21306__auto__ = (function (){var statearr_22084 = f__21305__auto__.call(null);
(statearr_22084[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21304__auto__);

return statearr_22084;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21306__auto__);
});})(c__21304__auto__))
);

return c__21304__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args22097 = [];
var len__19513__auto___22149 = arguments.length;
var i__19514__auto___22150 = (0);
while(true){
if((i__19514__auto___22150 < len__19513__auto___22149)){
args22097.push((arguments[i__19514__auto___22150]));

var G__22151 = (i__19514__auto___22150 + (1));
i__19514__auto___22150 = G__22151;
continue;
} else {
}
break;
}

var G__22099 = args22097.length;
switch (G__22099) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22097.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__21304__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21304__auto__){
return (function (){
var f__21305__auto__ = (function (){var switch__21192__auto__ = ((function (c__21304__auto__){
return (function (state_22124){
var state_val_22125 = (state_22124[(1)]);
if((state_val_22125 === (7))){
var inst_22106 = (state_22124[(2)]);
var state_22124__$1 = state_22124;
var statearr_22126_22153 = state_22124__$1;
(statearr_22126_22153[(2)] = inst_22106);

(statearr_22126_22153[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22125 === (1))){
var inst_22100 = cljs.core.seq.call(null,coll);
var inst_22101 = inst_22100;
var state_22124__$1 = (function (){var statearr_22127 = state_22124;
(statearr_22127[(7)] = inst_22101);

return statearr_22127;
})();
var statearr_22128_22154 = state_22124__$1;
(statearr_22128_22154[(2)] = null);

(statearr_22128_22154[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22125 === (4))){
var inst_22101 = (state_22124[(7)]);
var inst_22104 = cljs.core.first.call(null,inst_22101);
var state_22124__$1 = state_22124;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22124__$1,(7),ch,inst_22104);
} else {
if((state_val_22125 === (13))){
var inst_22118 = (state_22124[(2)]);
var state_22124__$1 = state_22124;
var statearr_22129_22155 = state_22124__$1;
(statearr_22129_22155[(2)] = inst_22118);

(statearr_22129_22155[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22125 === (6))){
var inst_22109 = (state_22124[(2)]);
var state_22124__$1 = state_22124;
if(cljs.core.truth_(inst_22109)){
var statearr_22130_22156 = state_22124__$1;
(statearr_22130_22156[(1)] = (8));

} else {
var statearr_22131_22157 = state_22124__$1;
(statearr_22131_22157[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22125 === (3))){
var inst_22122 = (state_22124[(2)]);
var state_22124__$1 = state_22124;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22124__$1,inst_22122);
} else {
if((state_val_22125 === (12))){
var state_22124__$1 = state_22124;
var statearr_22132_22158 = state_22124__$1;
(statearr_22132_22158[(2)] = null);

(statearr_22132_22158[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22125 === (2))){
var inst_22101 = (state_22124[(7)]);
var state_22124__$1 = state_22124;
if(cljs.core.truth_(inst_22101)){
var statearr_22133_22159 = state_22124__$1;
(statearr_22133_22159[(1)] = (4));

} else {
var statearr_22134_22160 = state_22124__$1;
(statearr_22134_22160[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22125 === (11))){
var inst_22115 = cljs.core.async.close_BANG_.call(null,ch);
var state_22124__$1 = state_22124;
var statearr_22135_22161 = state_22124__$1;
(statearr_22135_22161[(2)] = inst_22115);

(statearr_22135_22161[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22125 === (9))){
var state_22124__$1 = state_22124;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22136_22162 = state_22124__$1;
(statearr_22136_22162[(1)] = (11));

} else {
var statearr_22137_22163 = state_22124__$1;
(statearr_22137_22163[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22125 === (5))){
var inst_22101 = (state_22124[(7)]);
var state_22124__$1 = state_22124;
var statearr_22138_22164 = state_22124__$1;
(statearr_22138_22164[(2)] = inst_22101);

(statearr_22138_22164[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22125 === (10))){
var inst_22120 = (state_22124[(2)]);
var state_22124__$1 = state_22124;
var statearr_22139_22165 = state_22124__$1;
(statearr_22139_22165[(2)] = inst_22120);

(statearr_22139_22165[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22125 === (8))){
var inst_22101 = (state_22124[(7)]);
var inst_22111 = cljs.core.next.call(null,inst_22101);
var inst_22101__$1 = inst_22111;
var state_22124__$1 = (function (){var statearr_22140 = state_22124;
(statearr_22140[(7)] = inst_22101__$1);

return statearr_22140;
})();
var statearr_22141_22166 = state_22124__$1;
(statearr_22141_22166[(2)] = null);

(statearr_22141_22166[(1)] = (2));


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
});})(c__21304__auto__))
;
return ((function (switch__21192__auto__,c__21304__auto__){
return (function() {
var cljs$core$async$state_machine__21193__auto__ = null;
var cljs$core$async$state_machine__21193__auto____0 = (function (){
var statearr_22145 = [null,null,null,null,null,null,null,null];
(statearr_22145[(0)] = cljs$core$async$state_machine__21193__auto__);

(statearr_22145[(1)] = (1));

return statearr_22145;
});
var cljs$core$async$state_machine__21193__auto____1 = (function (state_22124){
while(true){
var ret_value__21194__auto__ = (function (){try{while(true){
var result__21195__auto__ = switch__21192__auto__.call(null,state_22124);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21195__auto__;
}
break;
}
}catch (e22146){if((e22146 instanceof Object)){
var ex__21196__auto__ = e22146;
var statearr_22147_22167 = state_22124;
(statearr_22147_22167[(5)] = ex__21196__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22124);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22146;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21194__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22168 = state_22124;
state_22124 = G__22168;
continue;
} else {
return ret_value__21194__auto__;
}
break;
}
});
cljs$core$async$state_machine__21193__auto__ = function(state_22124){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21193__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21193__auto____1.call(this,state_22124);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21193__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21193__auto____0;
cljs$core$async$state_machine__21193__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21193__auto____1;
return cljs$core$async$state_machine__21193__auto__;
})()
;})(switch__21192__auto__,c__21304__auto__))
})();
var state__21306__auto__ = (function (){var statearr_22148 = f__21305__auto__.call(null);
(statearr_22148[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21304__auto__);

return statearr_22148;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21306__auto__);
});})(c__21304__auto__))
);

return c__21304__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__19106__auto__ = (((_ == null))?null:_);
var m__19107__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__19106__auto__)]);
if(!((m__19107__auto__ == null))){
return m__19107__auto__.call(null,_);
} else {
var m__19107__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__19107__auto____$1 == null))){
return m__19107__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__19106__auto__ = (((m == null))?null:m);
var m__19107__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__19106__auto__)]);
if(!((m__19107__auto__ == null))){
return m__19107__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__19107__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__19107__auto____$1 == null))){
return m__19107__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__19106__auto__ = (((m == null))?null:m);
var m__19107__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__19106__auto__)]);
if(!((m__19107__auto__ == null))){
return m__19107__auto__.call(null,m,ch);
} else {
var m__19107__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__19107__auto____$1 == null))){
return m__19107__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__19106__auto__ = (((m == null))?null:m);
var m__19107__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__19106__auto__)]);
if(!((m__19107__auto__ == null))){
return m__19107__auto__.call(null,m);
} else {
var m__19107__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__19107__auto____$1 == null))){
return m__19107__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async22390 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22390 = (function (mult,ch,cs,meta22391){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta22391 = meta22391;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22390.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_22392,meta22391__$1){
var self__ = this;
var _22392__$1 = this;
return (new cljs.core.async.t_cljs$core$async22390(self__.mult,self__.ch,self__.cs,meta22391__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async22390.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_22392){
var self__ = this;
var _22392__$1 = this;
return self__.meta22391;
});})(cs))
;

cljs.core.async.t_cljs$core$async22390.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async22390.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async22390.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async22390.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async22390.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async22390.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async22390.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta22391","meta22391",1565520784,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async22390.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22390.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22390";

cljs.core.async.t_cljs$core$async22390.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__19049__auto__,writer__19050__auto__,opt__19051__auto__){
return cljs.core._write.call(null,writer__19050__auto__,"cljs.core.async/t_cljs$core$async22390");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async22390 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async22390(mult__$1,ch__$1,cs__$1,meta22391){
return (new cljs.core.async.t_cljs$core$async22390(mult__$1,ch__$1,cs__$1,meta22391));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async22390(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__21304__auto___22611 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21304__auto___22611,cs,m,dchan,dctr,done){
return (function (){
var f__21305__auto__ = (function (){var switch__21192__auto__ = ((function (c__21304__auto___22611,cs,m,dchan,dctr,done){
return (function (state_22523){
var state_val_22524 = (state_22523[(1)]);
if((state_val_22524 === (7))){
var inst_22519 = (state_22523[(2)]);
var state_22523__$1 = state_22523;
var statearr_22525_22612 = state_22523__$1;
(statearr_22525_22612[(2)] = inst_22519);

(statearr_22525_22612[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22524 === (20))){
var inst_22424 = (state_22523[(7)]);
var inst_22434 = cljs.core.first.call(null,inst_22424);
var inst_22435 = cljs.core.nth.call(null,inst_22434,(0),null);
var inst_22436 = cljs.core.nth.call(null,inst_22434,(1),null);
var state_22523__$1 = (function (){var statearr_22526 = state_22523;
(statearr_22526[(8)] = inst_22435);

return statearr_22526;
})();
if(cljs.core.truth_(inst_22436)){
var statearr_22527_22613 = state_22523__$1;
(statearr_22527_22613[(1)] = (22));

} else {
var statearr_22528_22614 = state_22523__$1;
(statearr_22528_22614[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22524 === (27))){
var inst_22471 = (state_22523[(9)]);
var inst_22466 = (state_22523[(10)]);
var inst_22395 = (state_22523[(11)]);
var inst_22464 = (state_22523[(12)]);
var inst_22471__$1 = cljs.core._nth.call(null,inst_22464,inst_22466);
var inst_22472 = cljs.core.async.put_BANG_.call(null,inst_22471__$1,inst_22395,done);
var state_22523__$1 = (function (){var statearr_22529 = state_22523;
(statearr_22529[(9)] = inst_22471__$1);

return statearr_22529;
})();
if(cljs.core.truth_(inst_22472)){
var statearr_22530_22615 = state_22523__$1;
(statearr_22530_22615[(1)] = (30));

} else {
var statearr_22531_22616 = state_22523__$1;
(statearr_22531_22616[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22524 === (1))){
var state_22523__$1 = state_22523;
var statearr_22532_22617 = state_22523__$1;
(statearr_22532_22617[(2)] = null);

(statearr_22532_22617[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22524 === (24))){
var inst_22424 = (state_22523[(7)]);
var inst_22441 = (state_22523[(2)]);
var inst_22442 = cljs.core.next.call(null,inst_22424);
var inst_22404 = inst_22442;
var inst_22405 = null;
var inst_22406 = (0);
var inst_22407 = (0);
var state_22523__$1 = (function (){var statearr_22533 = state_22523;
(statearr_22533[(13)] = inst_22406);

(statearr_22533[(14)] = inst_22405);

(statearr_22533[(15)] = inst_22441);

(statearr_22533[(16)] = inst_22407);

(statearr_22533[(17)] = inst_22404);

return statearr_22533;
})();
var statearr_22534_22618 = state_22523__$1;
(statearr_22534_22618[(2)] = null);

(statearr_22534_22618[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22524 === (39))){
var state_22523__$1 = state_22523;
var statearr_22538_22619 = state_22523__$1;
(statearr_22538_22619[(2)] = null);

(statearr_22538_22619[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22524 === (4))){
var inst_22395 = (state_22523[(11)]);
var inst_22395__$1 = (state_22523[(2)]);
var inst_22396 = (inst_22395__$1 == null);
var state_22523__$1 = (function (){var statearr_22539 = state_22523;
(statearr_22539[(11)] = inst_22395__$1);

return statearr_22539;
})();
if(cljs.core.truth_(inst_22396)){
var statearr_22540_22620 = state_22523__$1;
(statearr_22540_22620[(1)] = (5));

} else {
var statearr_22541_22621 = state_22523__$1;
(statearr_22541_22621[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22524 === (15))){
var inst_22406 = (state_22523[(13)]);
var inst_22405 = (state_22523[(14)]);
var inst_22407 = (state_22523[(16)]);
var inst_22404 = (state_22523[(17)]);
var inst_22420 = (state_22523[(2)]);
var inst_22421 = (inst_22407 + (1));
var tmp22535 = inst_22406;
var tmp22536 = inst_22405;
var tmp22537 = inst_22404;
var inst_22404__$1 = tmp22537;
var inst_22405__$1 = tmp22536;
var inst_22406__$1 = tmp22535;
var inst_22407__$1 = inst_22421;
var state_22523__$1 = (function (){var statearr_22542 = state_22523;
(statearr_22542[(13)] = inst_22406__$1);

(statearr_22542[(14)] = inst_22405__$1);

(statearr_22542[(18)] = inst_22420);

(statearr_22542[(16)] = inst_22407__$1);

(statearr_22542[(17)] = inst_22404__$1);

return statearr_22542;
})();
var statearr_22543_22622 = state_22523__$1;
(statearr_22543_22622[(2)] = null);

(statearr_22543_22622[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22524 === (21))){
var inst_22445 = (state_22523[(2)]);
var state_22523__$1 = state_22523;
var statearr_22547_22623 = state_22523__$1;
(statearr_22547_22623[(2)] = inst_22445);

(statearr_22547_22623[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22524 === (31))){
var inst_22471 = (state_22523[(9)]);
var inst_22475 = done.call(null,null);
var inst_22476 = cljs.core.async.untap_STAR_.call(null,m,inst_22471);
var state_22523__$1 = (function (){var statearr_22548 = state_22523;
(statearr_22548[(19)] = inst_22475);

return statearr_22548;
})();
var statearr_22549_22624 = state_22523__$1;
(statearr_22549_22624[(2)] = inst_22476);

(statearr_22549_22624[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22524 === (32))){
var inst_22465 = (state_22523[(20)]);
var inst_22463 = (state_22523[(21)]);
var inst_22466 = (state_22523[(10)]);
var inst_22464 = (state_22523[(12)]);
var inst_22478 = (state_22523[(2)]);
var inst_22479 = (inst_22466 + (1));
var tmp22544 = inst_22465;
var tmp22545 = inst_22463;
var tmp22546 = inst_22464;
var inst_22463__$1 = tmp22545;
var inst_22464__$1 = tmp22546;
var inst_22465__$1 = tmp22544;
var inst_22466__$1 = inst_22479;
var state_22523__$1 = (function (){var statearr_22550 = state_22523;
(statearr_22550[(20)] = inst_22465__$1);

(statearr_22550[(21)] = inst_22463__$1);

(statearr_22550[(22)] = inst_22478);

(statearr_22550[(10)] = inst_22466__$1);

(statearr_22550[(12)] = inst_22464__$1);

return statearr_22550;
})();
var statearr_22551_22625 = state_22523__$1;
(statearr_22551_22625[(2)] = null);

(statearr_22551_22625[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22524 === (40))){
var inst_22491 = (state_22523[(23)]);
var inst_22495 = done.call(null,null);
var inst_22496 = cljs.core.async.untap_STAR_.call(null,m,inst_22491);
var state_22523__$1 = (function (){var statearr_22552 = state_22523;
(statearr_22552[(24)] = inst_22495);

return statearr_22552;
})();
var statearr_22553_22626 = state_22523__$1;
(statearr_22553_22626[(2)] = inst_22496);

(statearr_22553_22626[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22524 === (33))){
var inst_22482 = (state_22523[(25)]);
var inst_22484 = cljs.core.chunked_seq_QMARK_.call(null,inst_22482);
var state_22523__$1 = state_22523;
if(inst_22484){
var statearr_22554_22627 = state_22523__$1;
(statearr_22554_22627[(1)] = (36));

} else {
var statearr_22555_22628 = state_22523__$1;
(statearr_22555_22628[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22524 === (13))){
var inst_22414 = (state_22523[(26)]);
var inst_22417 = cljs.core.async.close_BANG_.call(null,inst_22414);
var state_22523__$1 = state_22523;
var statearr_22556_22629 = state_22523__$1;
(statearr_22556_22629[(2)] = inst_22417);

(statearr_22556_22629[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22524 === (22))){
var inst_22435 = (state_22523[(8)]);
var inst_22438 = cljs.core.async.close_BANG_.call(null,inst_22435);
var state_22523__$1 = state_22523;
var statearr_22557_22630 = state_22523__$1;
(statearr_22557_22630[(2)] = inst_22438);

(statearr_22557_22630[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22524 === (36))){
var inst_22482 = (state_22523[(25)]);
var inst_22486 = cljs.core.chunk_first.call(null,inst_22482);
var inst_22487 = cljs.core.chunk_rest.call(null,inst_22482);
var inst_22488 = cljs.core.count.call(null,inst_22486);
var inst_22463 = inst_22487;
var inst_22464 = inst_22486;
var inst_22465 = inst_22488;
var inst_22466 = (0);
var state_22523__$1 = (function (){var statearr_22558 = state_22523;
(statearr_22558[(20)] = inst_22465);

(statearr_22558[(21)] = inst_22463);

(statearr_22558[(10)] = inst_22466);

(statearr_22558[(12)] = inst_22464);

return statearr_22558;
})();
var statearr_22559_22631 = state_22523__$1;
(statearr_22559_22631[(2)] = null);

(statearr_22559_22631[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22524 === (41))){
var inst_22482 = (state_22523[(25)]);
var inst_22498 = (state_22523[(2)]);
var inst_22499 = cljs.core.next.call(null,inst_22482);
var inst_22463 = inst_22499;
var inst_22464 = null;
var inst_22465 = (0);
var inst_22466 = (0);
var state_22523__$1 = (function (){var statearr_22560 = state_22523;
(statearr_22560[(20)] = inst_22465);

(statearr_22560[(27)] = inst_22498);

(statearr_22560[(21)] = inst_22463);

(statearr_22560[(10)] = inst_22466);

(statearr_22560[(12)] = inst_22464);

return statearr_22560;
})();
var statearr_22561_22632 = state_22523__$1;
(statearr_22561_22632[(2)] = null);

(statearr_22561_22632[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22524 === (43))){
var state_22523__$1 = state_22523;
var statearr_22562_22633 = state_22523__$1;
(statearr_22562_22633[(2)] = null);

(statearr_22562_22633[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22524 === (29))){
var inst_22507 = (state_22523[(2)]);
var state_22523__$1 = state_22523;
var statearr_22563_22634 = state_22523__$1;
(statearr_22563_22634[(2)] = inst_22507);

(statearr_22563_22634[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22524 === (44))){
var inst_22516 = (state_22523[(2)]);
var state_22523__$1 = (function (){var statearr_22564 = state_22523;
(statearr_22564[(28)] = inst_22516);

return statearr_22564;
})();
var statearr_22565_22635 = state_22523__$1;
(statearr_22565_22635[(2)] = null);

(statearr_22565_22635[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22524 === (6))){
var inst_22455 = (state_22523[(29)]);
var inst_22454 = cljs.core.deref.call(null,cs);
var inst_22455__$1 = cljs.core.keys.call(null,inst_22454);
var inst_22456 = cljs.core.count.call(null,inst_22455__$1);
var inst_22457 = cljs.core.reset_BANG_.call(null,dctr,inst_22456);
var inst_22462 = cljs.core.seq.call(null,inst_22455__$1);
var inst_22463 = inst_22462;
var inst_22464 = null;
var inst_22465 = (0);
var inst_22466 = (0);
var state_22523__$1 = (function (){var statearr_22566 = state_22523;
(statearr_22566[(20)] = inst_22465);

(statearr_22566[(21)] = inst_22463);

(statearr_22566[(10)] = inst_22466);

(statearr_22566[(30)] = inst_22457);

(statearr_22566[(29)] = inst_22455__$1);

(statearr_22566[(12)] = inst_22464);

return statearr_22566;
})();
var statearr_22567_22636 = state_22523__$1;
(statearr_22567_22636[(2)] = null);

(statearr_22567_22636[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22524 === (28))){
var inst_22482 = (state_22523[(25)]);
var inst_22463 = (state_22523[(21)]);
var inst_22482__$1 = cljs.core.seq.call(null,inst_22463);
var state_22523__$1 = (function (){var statearr_22568 = state_22523;
(statearr_22568[(25)] = inst_22482__$1);

return statearr_22568;
})();
if(inst_22482__$1){
var statearr_22569_22637 = state_22523__$1;
(statearr_22569_22637[(1)] = (33));

} else {
var statearr_22570_22638 = state_22523__$1;
(statearr_22570_22638[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22524 === (25))){
var inst_22465 = (state_22523[(20)]);
var inst_22466 = (state_22523[(10)]);
var inst_22468 = (inst_22466 < inst_22465);
var inst_22469 = inst_22468;
var state_22523__$1 = state_22523;
if(cljs.core.truth_(inst_22469)){
var statearr_22571_22639 = state_22523__$1;
(statearr_22571_22639[(1)] = (27));

} else {
var statearr_22572_22640 = state_22523__$1;
(statearr_22572_22640[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22524 === (34))){
var state_22523__$1 = state_22523;
var statearr_22573_22641 = state_22523__$1;
(statearr_22573_22641[(2)] = null);

(statearr_22573_22641[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22524 === (17))){
var state_22523__$1 = state_22523;
var statearr_22574_22642 = state_22523__$1;
(statearr_22574_22642[(2)] = null);

(statearr_22574_22642[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22524 === (3))){
var inst_22521 = (state_22523[(2)]);
var state_22523__$1 = state_22523;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22523__$1,inst_22521);
} else {
if((state_val_22524 === (12))){
var inst_22450 = (state_22523[(2)]);
var state_22523__$1 = state_22523;
var statearr_22575_22643 = state_22523__$1;
(statearr_22575_22643[(2)] = inst_22450);

(statearr_22575_22643[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22524 === (2))){
var state_22523__$1 = state_22523;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22523__$1,(4),ch);
} else {
if((state_val_22524 === (23))){
var state_22523__$1 = state_22523;
var statearr_22576_22644 = state_22523__$1;
(statearr_22576_22644[(2)] = null);

(statearr_22576_22644[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22524 === (35))){
var inst_22505 = (state_22523[(2)]);
var state_22523__$1 = state_22523;
var statearr_22577_22645 = state_22523__$1;
(statearr_22577_22645[(2)] = inst_22505);

(statearr_22577_22645[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22524 === (19))){
var inst_22424 = (state_22523[(7)]);
var inst_22428 = cljs.core.chunk_first.call(null,inst_22424);
var inst_22429 = cljs.core.chunk_rest.call(null,inst_22424);
var inst_22430 = cljs.core.count.call(null,inst_22428);
var inst_22404 = inst_22429;
var inst_22405 = inst_22428;
var inst_22406 = inst_22430;
var inst_22407 = (0);
var state_22523__$1 = (function (){var statearr_22578 = state_22523;
(statearr_22578[(13)] = inst_22406);

(statearr_22578[(14)] = inst_22405);

(statearr_22578[(16)] = inst_22407);

(statearr_22578[(17)] = inst_22404);

return statearr_22578;
})();
var statearr_22579_22646 = state_22523__$1;
(statearr_22579_22646[(2)] = null);

(statearr_22579_22646[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22524 === (11))){
var inst_22424 = (state_22523[(7)]);
var inst_22404 = (state_22523[(17)]);
var inst_22424__$1 = cljs.core.seq.call(null,inst_22404);
var state_22523__$1 = (function (){var statearr_22580 = state_22523;
(statearr_22580[(7)] = inst_22424__$1);

return statearr_22580;
})();
if(inst_22424__$1){
var statearr_22581_22647 = state_22523__$1;
(statearr_22581_22647[(1)] = (16));

} else {
var statearr_22582_22648 = state_22523__$1;
(statearr_22582_22648[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22524 === (9))){
var inst_22452 = (state_22523[(2)]);
var state_22523__$1 = state_22523;
var statearr_22583_22649 = state_22523__$1;
(statearr_22583_22649[(2)] = inst_22452);

(statearr_22583_22649[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22524 === (5))){
var inst_22402 = cljs.core.deref.call(null,cs);
var inst_22403 = cljs.core.seq.call(null,inst_22402);
var inst_22404 = inst_22403;
var inst_22405 = null;
var inst_22406 = (0);
var inst_22407 = (0);
var state_22523__$1 = (function (){var statearr_22584 = state_22523;
(statearr_22584[(13)] = inst_22406);

(statearr_22584[(14)] = inst_22405);

(statearr_22584[(16)] = inst_22407);

(statearr_22584[(17)] = inst_22404);

return statearr_22584;
})();
var statearr_22585_22650 = state_22523__$1;
(statearr_22585_22650[(2)] = null);

(statearr_22585_22650[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22524 === (14))){
var state_22523__$1 = state_22523;
var statearr_22586_22651 = state_22523__$1;
(statearr_22586_22651[(2)] = null);

(statearr_22586_22651[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22524 === (45))){
var inst_22513 = (state_22523[(2)]);
var state_22523__$1 = state_22523;
var statearr_22587_22652 = state_22523__$1;
(statearr_22587_22652[(2)] = inst_22513);

(statearr_22587_22652[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22524 === (26))){
var inst_22455 = (state_22523[(29)]);
var inst_22509 = (state_22523[(2)]);
var inst_22510 = cljs.core.seq.call(null,inst_22455);
var state_22523__$1 = (function (){var statearr_22588 = state_22523;
(statearr_22588[(31)] = inst_22509);

return statearr_22588;
})();
if(inst_22510){
var statearr_22589_22653 = state_22523__$1;
(statearr_22589_22653[(1)] = (42));

} else {
var statearr_22590_22654 = state_22523__$1;
(statearr_22590_22654[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22524 === (16))){
var inst_22424 = (state_22523[(7)]);
var inst_22426 = cljs.core.chunked_seq_QMARK_.call(null,inst_22424);
var state_22523__$1 = state_22523;
if(inst_22426){
var statearr_22591_22655 = state_22523__$1;
(statearr_22591_22655[(1)] = (19));

} else {
var statearr_22592_22656 = state_22523__$1;
(statearr_22592_22656[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22524 === (38))){
var inst_22502 = (state_22523[(2)]);
var state_22523__$1 = state_22523;
var statearr_22593_22657 = state_22523__$1;
(statearr_22593_22657[(2)] = inst_22502);

(statearr_22593_22657[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22524 === (30))){
var state_22523__$1 = state_22523;
var statearr_22594_22658 = state_22523__$1;
(statearr_22594_22658[(2)] = null);

(statearr_22594_22658[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22524 === (10))){
var inst_22405 = (state_22523[(14)]);
var inst_22407 = (state_22523[(16)]);
var inst_22413 = cljs.core._nth.call(null,inst_22405,inst_22407);
var inst_22414 = cljs.core.nth.call(null,inst_22413,(0),null);
var inst_22415 = cljs.core.nth.call(null,inst_22413,(1),null);
var state_22523__$1 = (function (){var statearr_22595 = state_22523;
(statearr_22595[(26)] = inst_22414);

return statearr_22595;
})();
if(cljs.core.truth_(inst_22415)){
var statearr_22596_22659 = state_22523__$1;
(statearr_22596_22659[(1)] = (13));

} else {
var statearr_22597_22660 = state_22523__$1;
(statearr_22597_22660[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22524 === (18))){
var inst_22448 = (state_22523[(2)]);
var state_22523__$1 = state_22523;
var statearr_22598_22661 = state_22523__$1;
(statearr_22598_22661[(2)] = inst_22448);

(statearr_22598_22661[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22524 === (42))){
var state_22523__$1 = state_22523;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22523__$1,(45),dchan);
} else {
if((state_val_22524 === (37))){
var inst_22482 = (state_22523[(25)]);
var inst_22395 = (state_22523[(11)]);
var inst_22491 = (state_22523[(23)]);
var inst_22491__$1 = cljs.core.first.call(null,inst_22482);
var inst_22492 = cljs.core.async.put_BANG_.call(null,inst_22491__$1,inst_22395,done);
var state_22523__$1 = (function (){var statearr_22599 = state_22523;
(statearr_22599[(23)] = inst_22491__$1);

return statearr_22599;
})();
if(cljs.core.truth_(inst_22492)){
var statearr_22600_22662 = state_22523__$1;
(statearr_22600_22662[(1)] = (39));

} else {
var statearr_22601_22663 = state_22523__$1;
(statearr_22601_22663[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22524 === (8))){
var inst_22406 = (state_22523[(13)]);
var inst_22407 = (state_22523[(16)]);
var inst_22409 = (inst_22407 < inst_22406);
var inst_22410 = inst_22409;
var state_22523__$1 = state_22523;
if(cljs.core.truth_(inst_22410)){
var statearr_22602_22664 = state_22523__$1;
(statearr_22602_22664[(1)] = (10));

} else {
var statearr_22603_22665 = state_22523__$1;
(statearr_22603_22665[(1)] = (11));

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
});})(c__21304__auto___22611,cs,m,dchan,dctr,done))
;
return ((function (switch__21192__auto__,c__21304__auto___22611,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__21193__auto__ = null;
var cljs$core$async$mult_$_state_machine__21193__auto____0 = (function (){
var statearr_22607 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22607[(0)] = cljs$core$async$mult_$_state_machine__21193__auto__);

(statearr_22607[(1)] = (1));

return statearr_22607;
});
var cljs$core$async$mult_$_state_machine__21193__auto____1 = (function (state_22523){
while(true){
var ret_value__21194__auto__ = (function (){try{while(true){
var result__21195__auto__ = switch__21192__auto__.call(null,state_22523);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21195__auto__;
}
break;
}
}catch (e22608){if((e22608 instanceof Object)){
var ex__21196__auto__ = e22608;
var statearr_22609_22666 = state_22523;
(statearr_22609_22666[(5)] = ex__21196__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22523);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22608;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21194__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22667 = state_22523;
state_22523 = G__22667;
continue;
} else {
return ret_value__21194__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__21193__auto__ = function(state_22523){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__21193__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__21193__auto____1.call(this,state_22523);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__21193__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__21193__auto____0;
cljs$core$async$mult_$_state_machine__21193__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__21193__auto____1;
return cljs$core$async$mult_$_state_machine__21193__auto__;
})()
;})(switch__21192__auto__,c__21304__auto___22611,cs,m,dchan,dctr,done))
})();
var state__21306__auto__ = (function (){var statearr_22610 = f__21305__auto__.call(null);
(statearr_22610[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21304__auto___22611);

return statearr_22610;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21306__auto__);
});})(c__21304__auto___22611,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args22668 = [];
var len__19513__auto___22671 = arguments.length;
var i__19514__auto___22672 = (0);
while(true){
if((i__19514__auto___22672 < len__19513__auto___22671)){
args22668.push((arguments[i__19514__auto___22672]));

var G__22673 = (i__19514__auto___22672 + (1));
i__19514__auto___22672 = G__22673;
continue;
} else {
}
break;
}

var G__22670 = args22668.length;
switch (G__22670) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22668.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__19106__auto__ = (((m == null))?null:m);
var m__19107__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__19106__auto__)]);
if(!((m__19107__auto__ == null))){
return m__19107__auto__.call(null,m,ch);
} else {
var m__19107__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__19107__auto____$1 == null))){
return m__19107__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__19106__auto__ = (((m == null))?null:m);
var m__19107__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__19106__auto__)]);
if(!((m__19107__auto__ == null))){
return m__19107__auto__.call(null,m,ch);
} else {
var m__19107__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__19107__auto____$1 == null))){
return m__19107__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__19106__auto__ = (((m == null))?null:m);
var m__19107__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__19106__auto__)]);
if(!((m__19107__auto__ == null))){
return m__19107__auto__.call(null,m);
} else {
var m__19107__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__19107__auto____$1 == null))){
return m__19107__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__19106__auto__ = (((m == null))?null:m);
var m__19107__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__19106__auto__)]);
if(!((m__19107__auto__ == null))){
return m__19107__auto__.call(null,m,state_map);
} else {
var m__19107__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__19107__auto____$1 == null))){
return m__19107__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__19106__auto__ = (((m == null))?null:m);
var m__19107__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__19106__auto__)]);
if(!((m__19107__auto__ == null))){
return m__19107__auto__.call(null,m,mode);
} else {
var m__19107__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__19107__auto____$1 == null))){
return m__19107__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__19520__auto__ = [];
var len__19513__auto___22685 = arguments.length;
var i__19514__auto___22686 = (0);
while(true){
if((i__19514__auto___22686 < len__19513__auto___22685)){
args__19520__auto__.push((arguments[i__19514__auto___22686]));

var G__22687 = (i__19514__auto___22686 + (1));
i__19514__auto___22686 = G__22687;
continue;
} else {
}
break;
}

var argseq__19521__auto__ = ((((3) < args__19520__auto__.length))?(new cljs.core.IndexedSeq(args__19520__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__19521__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__22679){
var map__22680 = p__22679;
var map__22680__$1 = ((((!((map__22680 == null)))?((((map__22680.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22680.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22680):map__22680);
var opts = map__22680__$1;
var statearr_22682_22688 = state;
(statearr_22682_22688[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__22680,map__22680__$1,opts){
return (function (val){
var statearr_22683_22689 = state;
(statearr_22683_22689[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__22680,map__22680__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_22684_22690 = state;
(statearr_22684_22690[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq22675){
var G__22676 = cljs.core.first.call(null,seq22675);
var seq22675__$1 = cljs.core.next.call(null,seq22675);
var G__22677 = cljs.core.first.call(null,seq22675__$1);
var seq22675__$2 = cljs.core.next.call(null,seq22675__$1);
var G__22678 = cljs.core.first.call(null,seq22675__$2);
var seq22675__$3 = cljs.core.next.call(null,seq22675__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__22676,G__22677,G__22678,seq22675__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async22854 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22854 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta22855){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta22855 = meta22855;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22854.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_22856,meta22855__$1){
var self__ = this;
var _22856__$1 = this;
return (new cljs.core.async.t_cljs$core$async22854(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta22855__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22854.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_22856){
var self__ = this;
var _22856__$1 = this;
return self__.meta22855;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22854.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async22854.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22854.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async22854.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22854.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22854.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22854.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22854.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22854.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta22855","meta22855",-1666025445,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22854.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22854.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22854";

cljs.core.async.t_cljs$core$async22854.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__19049__auto__,writer__19050__auto__,opt__19051__auto__){
return cljs.core._write.call(null,writer__19050__auto__,"cljs.core.async/t_cljs$core$async22854");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async22854 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async22854(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta22855){
return (new cljs.core.async.t_cljs$core$async22854(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta22855));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async22854(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__21304__auto___23017 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21304__auto___23017,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__21305__auto__ = (function (){var switch__21192__auto__ = ((function (c__21304__auto___23017,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_22954){
var state_val_22955 = (state_22954[(1)]);
if((state_val_22955 === (7))){
var inst_22872 = (state_22954[(2)]);
var state_22954__$1 = state_22954;
var statearr_22956_23018 = state_22954__$1;
(statearr_22956_23018[(2)] = inst_22872);

(statearr_22956_23018[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22955 === (20))){
var inst_22884 = (state_22954[(7)]);
var state_22954__$1 = state_22954;
var statearr_22957_23019 = state_22954__$1;
(statearr_22957_23019[(2)] = inst_22884);

(statearr_22957_23019[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22955 === (27))){
var state_22954__$1 = state_22954;
var statearr_22958_23020 = state_22954__$1;
(statearr_22958_23020[(2)] = null);

(statearr_22958_23020[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22955 === (1))){
var inst_22860 = (state_22954[(8)]);
var inst_22860__$1 = calc_state.call(null);
var inst_22862 = (inst_22860__$1 == null);
var inst_22863 = cljs.core.not.call(null,inst_22862);
var state_22954__$1 = (function (){var statearr_22959 = state_22954;
(statearr_22959[(8)] = inst_22860__$1);

return statearr_22959;
})();
if(inst_22863){
var statearr_22960_23021 = state_22954__$1;
(statearr_22960_23021[(1)] = (2));

} else {
var statearr_22961_23022 = state_22954__$1;
(statearr_22961_23022[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22955 === (24))){
var inst_22907 = (state_22954[(9)]);
var inst_22914 = (state_22954[(10)]);
var inst_22928 = (state_22954[(11)]);
var inst_22928__$1 = inst_22907.call(null,inst_22914);
var state_22954__$1 = (function (){var statearr_22962 = state_22954;
(statearr_22962[(11)] = inst_22928__$1);

return statearr_22962;
})();
if(cljs.core.truth_(inst_22928__$1)){
var statearr_22963_23023 = state_22954__$1;
(statearr_22963_23023[(1)] = (29));

} else {
var statearr_22964_23024 = state_22954__$1;
(statearr_22964_23024[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22955 === (4))){
var inst_22875 = (state_22954[(2)]);
var state_22954__$1 = state_22954;
if(cljs.core.truth_(inst_22875)){
var statearr_22965_23025 = state_22954__$1;
(statearr_22965_23025[(1)] = (8));

} else {
var statearr_22966_23026 = state_22954__$1;
(statearr_22966_23026[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22955 === (15))){
var inst_22901 = (state_22954[(2)]);
var state_22954__$1 = state_22954;
if(cljs.core.truth_(inst_22901)){
var statearr_22967_23027 = state_22954__$1;
(statearr_22967_23027[(1)] = (19));

} else {
var statearr_22968_23028 = state_22954__$1;
(statearr_22968_23028[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22955 === (21))){
var inst_22906 = (state_22954[(12)]);
var inst_22906__$1 = (state_22954[(2)]);
var inst_22907 = cljs.core.get.call(null,inst_22906__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_22908 = cljs.core.get.call(null,inst_22906__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_22909 = cljs.core.get.call(null,inst_22906__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_22954__$1 = (function (){var statearr_22969 = state_22954;
(statearr_22969[(9)] = inst_22907);

(statearr_22969[(13)] = inst_22908);

(statearr_22969[(12)] = inst_22906__$1);

return statearr_22969;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_22954__$1,(22),inst_22909);
} else {
if((state_val_22955 === (31))){
var inst_22936 = (state_22954[(2)]);
var state_22954__$1 = state_22954;
if(cljs.core.truth_(inst_22936)){
var statearr_22970_23029 = state_22954__$1;
(statearr_22970_23029[(1)] = (32));

} else {
var statearr_22971_23030 = state_22954__$1;
(statearr_22971_23030[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22955 === (32))){
var inst_22913 = (state_22954[(14)]);
var state_22954__$1 = state_22954;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22954__$1,(35),out,inst_22913);
} else {
if((state_val_22955 === (33))){
var inst_22906 = (state_22954[(12)]);
var inst_22884 = inst_22906;
var state_22954__$1 = (function (){var statearr_22972 = state_22954;
(statearr_22972[(7)] = inst_22884);

return statearr_22972;
})();
var statearr_22973_23031 = state_22954__$1;
(statearr_22973_23031[(2)] = null);

(statearr_22973_23031[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22955 === (13))){
var inst_22884 = (state_22954[(7)]);
var inst_22891 = inst_22884.cljs$lang$protocol_mask$partition0$;
var inst_22892 = (inst_22891 & (64));
var inst_22893 = inst_22884.cljs$core$ISeq$;
var inst_22894 = (inst_22892) || (inst_22893);
var state_22954__$1 = state_22954;
if(cljs.core.truth_(inst_22894)){
var statearr_22974_23032 = state_22954__$1;
(statearr_22974_23032[(1)] = (16));

} else {
var statearr_22975_23033 = state_22954__$1;
(statearr_22975_23033[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22955 === (22))){
var inst_22913 = (state_22954[(14)]);
var inst_22914 = (state_22954[(10)]);
var inst_22912 = (state_22954[(2)]);
var inst_22913__$1 = cljs.core.nth.call(null,inst_22912,(0),null);
var inst_22914__$1 = cljs.core.nth.call(null,inst_22912,(1),null);
var inst_22915 = (inst_22913__$1 == null);
var inst_22916 = cljs.core._EQ_.call(null,inst_22914__$1,change);
var inst_22917 = (inst_22915) || (inst_22916);
var state_22954__$1 = (function (){var statearr_22976 = state_22954;
(statearr_22976[(14)] = inst_22913__$1);

(statearr_22976[(10)] = inst_22914__$1);

return statearr_22976;
})();
if(cljs.core.truth_(inst_22917)){
var statearr_22977_23034 = state_22954__$1;
(statearr_22977_23034[(1)] = (23));

} else {
var statearr_22978_23035 = state_22954__$1;
(statearr_22978_23035[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22955 === (36))){
var inst_22906 = (state_22954[(12)]);
var inst_22884 = inst_22906;
var state_22954__$1 = (function (){var statearr_22979 = state_22954;
(statearr_22979[(7)] = inst_22884);

return statearr_22979;
})();
var statearr_22980_23036 = state_22954__$1;
(statearr_22980_23036[(2)] = null);

(statearr_22980_23036[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22955 === (29))){
var inst_22928 = (state_22954[(11)]);
var state_22954__$1 = state_22954;
var statearr_22981_23037 = state_22954__$1;
(statearr_22981_23037[(2)] = inst_22928);

(statearr_22981_23037[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22955 === (6))){
var state_22954__$1 = state_22954;
var statearr_22982_23038 = state_22954__$1;
(statearr_22982_23038[(2)] = false);

(statearr_22982_23038[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22955 === (28))){
var inst_22924 = (state_22954[(2)]);
var inst_22925 = calc_state.call(null);
var inst_22884 = inst_22925;
var state_22954__$1 = (function (){var statearr_22983 = state_22954;
(statearr_22983[(7)] = inst_22884);

(statearr_22983[(15)] = inst_22924);

return statearr_22983;
})();
var statearr_22984_23039 = state_22954__$1;
(statearr_22984_23039[(2)] = null);

(statearr_22984_23039[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22955 === (25))){
var inst_22950 = (state_22954[(2)]);
var state_22954__$1 = state_22954;
var statearr_22985_23040 = state_22954__$1;
(statearr_22985_23040[(2)] = inst_22950);

(statearr_22985_23040[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22955 === (34))){
var inst_22948 = (state_22954[(2)]);
var state_22954__$1 = state_22954;
var statearr_22986_23041 = state_22954__$1;
(statearr_22986_23041[(2)] = inst_22948);

(statearr_22986_23041[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22955 === (17))){
var state_22954__$1 = state_22954;
var statearr_22987_23042 = state_22954__$1;
(statearr_22987_23042[(2)] = false);

(statearr_22987_23042[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22955 === (3))){
var state_22954__$1 = state_22954;
var statearr_22988_23043 = state_22954__$1;
(statearr_22988_23043[(2)] = false);

(statearr_22988_23043[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22955 === (12))){
var inst_22952 = (state_22954[(2)]);
var state_22954__$1 = state_22954;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22954__$1,inst_22952);
} else {
if((state_val_22955 === (2))){
var inst_22860 = (state_22954[(8)]);
var inst_22865 = inst_22860.cljs$lang$protocol_mask$partition0$;
var inst_22866 = (inst_22865 & (64));
var inst_22867 = inst_22860.cljs$core$ISeq$;
var inst_22868 = (inst_22866) || (inst_22867);
var state_22954__$1 = state_22954;
if(cljs.core.truth_(inst_22868)){
var statearr_22989_23044 = state_22954__$1;
(statearr_22989_23044[(1)] = (5));

} else {
var statearr_22990_23045 = state_22954__$1;
(statearr_22990_23045[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22955 === (23))){
var inst_22913 = (state_22954[(14)]);
var inst_22919 = (inst_22913 == null);
var state_22954__$1 = state_22954;
if(cljs.core.truth_(inst_22919)){
var statearr_22991_23046 = state_22954__$1;
(statearr_22991_23046[(1)] = (26));

} else {
var statearr_22992_23047 = state_22954__$1;
(statearr_22992_23047[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22955 === (35))){
var inst_22939 = (state_22954[(2)]);
var state_22954__$1 = state_22954;
if(cljs.core.truth_(inst_22939)){
var statearr_22993_23048 = state_22954__$1;
(statearr_22993_23048[(1)] = (36));

} else {
var statearr_22994_23049 = state_22954__$1;
(statearr_22994_23049[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22955 === (19))){
var inst_22884 = (state_22954[(7)]);
var inst_22903 = cljs.core.apply.call(null,cljs.core.hash_map,inst_22884);
var state_22954__$1 = state_22954;
var statearr_22995_23050 = state_22954__$1;
(statearr_22995_23050[(2)] = inst_22903);

(statearr_22995_23050[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22955 === (11))){
var inst_22884 = (state_22954[(7)]);
var inst_22888 = (inst_22884 == null);
var inst_22889 = cljs.core.not.call(null,inst_22888);
var state_22954__$1 = state_22954;
if(inst_22889){
var statearr_22996_23051 = state_22954__$1;
(statearr_22996_23051[(1)] = (13));

} else {
var statearr_22997_23052 = state_22954__$1;
(statearr_22997_23052[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22955 === (9))){
var inst_22860 = (state_22954[(8)]);
var state_22954__$1 = state_22954;
var statearr_22998_23053 = state_22954__$1;
(statearr_22998_23053[(2)] = inst_22860);

(statearr_22998_23053[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22955 === (5))){
var state_22954__$1 = state_22954;
var statearr_22999_23054 = state_22954__$1;
(statearr_22999_23054[(2)] = true);

(statearr_22999_23054[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22955 === (14))){
var state_22954__$1 = state_22954;
var statearr_23000_23055 = state_22954__$1;
(statearr_23000_23055[(2)] = false);

(statearr_23000_23055[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22955 === (26))){
var inst_22914 = (state_22954[(10)]);
var inst_22921 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_22914);
var state_22954__$1 = state_22954;
var statearr_23001_23056 = state_22954__$1;
(statearr_23001_23056[(2)] = inst_22921);

(statearr_23001_23056[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22955 === (16))){
var state_22954__$1 = state_22954;
var statearr_23002_23057 = state_22954__$1;
(statearr_23002_23057[(2)] = true);

(statearr_23002_23057[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22955 === (38))){
var inst_22944 = (state_22954[(2)]);
var state_22954__$1 = state_22954;
var statearr_23003_23058 = state_22954__$1;
(statearr_23003_23058[(2)] = inst_22944);

(statearr_23003_23058[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22955 === (30))){
var inst_22907 = (state_22954[(9)]);
var inst_22914 = (state_22954[(10)]);
var inst_22908 = (state_22954[(13)]);
var inst_22931 = cljs.core.empty_QMARK_.call(null,inst_22907);
var inst_22932 = inst_22908.call(null,inst_22914);
var inst_22933 = cljs.core.not.call(null,inst_22932);
var inst_22934 = (inst_22931) && (inst_22933);
var state_22954__$1 = state_22954;
var statearr_23004_23059 = state_22954__$1;
(statearr_23004_23059[(2)] = inst_22934);

(statearr_23004_23059[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22955 === (10))){
var inst_22860 = (state_22954[(8)]);
var inst_22880 = (state_22954[(2)]);
var inst_22881 = cljs.core.get.call(null,inst_22880,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_22882 = cljs.core.get.call(null,inst_22880,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_22883 = cljs.core.get.call(null,inst_22880,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_22884 = inst_22860;
var state_22954__$1 = (function (){var statearr_23005 = state_22954;
(statearr_23005[(16)] = inst_22881);

(statearr_23005[(17)] = inst_22882);

(statearr_23005[(7)] = inst_22884);

(statearr_23005[(18)] = inst_22883);

return statearr_23005;
})();
var statearr_23006_23060 = state_22954__$1;
(statearr_23006_23060[(2)] = null);

(statearr_23006_23060[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22955 === (18))){
var inst_22898 = (state_22954[(2)]);
var state_22954__$1 = state_22954;
var statearr_23007_23061 = state_22954__$1;
(statearr_23007_23061[(2)] = inst_22898);

(statearr_23007_23061[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22955 === (37))){
var state_22954__$1 = state_22954;
var statearr_23008_23062 = state_22954__$1;
(statearr_23008_23062[(2)] = null);

(statearr_23008_23062[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22955 === (8))){
var inst_22860 = (state_22954[(8)]);
var inst_22877 = cljs.core.apply.call(null,cljs.core.hash_map,inst_22860);
var state_22954__$1 = state_22954;
var statearr_23009_23063 = state_22954__$1;
(statearr_23009_23063[(2)] = inst_22877);

(statearr_23009_23063[(1)] = (10));


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
});})(c__21304__auto___23017,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__21192__auto__,c__21304__auto___23017,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__21193__auto__ = null;
var cljs$core$async$mix_$_state_machine__21193__auto____0 = (function (){
var statearr_23013 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23013[(0)] = cljs$core$async$mix_$_state_machine__21193__auto__);

(statearr_23013[(1)] = (1));

return statearr_23013;
});
var cljs$core$async$mix_$_state_machine__21193__auto____1 = (function (state_22954){
while(true){
var ret_value__21194__auto__ = (function (){try{while(true){
var result__21195__auto__ = switch__21192__auto__.call(null,state_22954);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21195__auto__;
}
break;
}
}catch (e23014){if((e23014 instanceof Object)){
var ex__21196__auto__ = e23014;
var statearr_23015_23064 = state_22954;
(statearr_23015_23064[(5)] = ex__21196__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22954);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23014;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21194__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23065 = state_22954;
state_22954 = G__23065;
continue;
} else {
return ret_value__21194__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__21193__auto__ = function(state_22954){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__21193__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__21193__auto____1.call(this,state_22954);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__21193__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__21193__auto____0;
cljs$core$async$mix_$_state_machine__21193__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__21193__auto____1;
return cljs$core$async$mix_$_state_machine__21193__auto__;
})()
;})(switch__21192__auto__,c__21304__auto___23017,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__21306__auto__ = (function (){var statearr_23016 = f__21305__auto__.call(null);
(statearr_23016[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21304__auto___23017);

return statearr_23016;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21306__auto__);
});})(c__21304__auto___23017,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__19106__auto__ = (((p == null))?null:p);
var m__19107__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__19106__auto__)]);
if(!((m__19107__auto__ == null))){
return m__19107__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__19107__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__19107__auto____$1 == null))){
return m__19107__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__19106__auto__ = (((p == null))?null:p);
var m__19107__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__19106__auto__)]);
if(!((m__19107__auto__ == null))){
return m__19107__auto__.call(null,p,v,ch);
} else {
var m__19107__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__19107__auto____$1 == null))){
return m__19107__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args23066 = [];
var len__19513__auto___23069 = arguments.length;
var i__19514__auto___23070 = (0);
while(true){
if((i__19514__auto___23070 < len__19513__auto___23069)){
args23066.push((arguments[i__19514__auto___23070]));

var G__23071 = (i__19514__auto___23070 + (1));
i__19514__auto___23070 = G__23071;
continue;
} else {
}
break;
}

var G__23068 = args23066.length;
switch (G__23068) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23066.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__19106__auto__ = (((p == null))?null:p);
var m__19107__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__19106__auto__)]);
if(!((m__19107__auto__ == null))){
return m__19107__auto__.call(null,p);
} else {
var m__19107__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__19107__auto____$1 == null))){
return m__19107__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__19106__auto__ = (((p == null))?null:p);
var m__19107__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__19106__auto__)]);
if(!((m__19107__auto__ == null))){
return m__19107__auto__.call(null,p,v);
} else {
var m__19107__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__19107__auto____$1 == null))){
return m__19107__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args23074 = [];
var len__19513__auto___23199 = arguments.length;
var i__19514__auto___23200 = (0);
while(true){
if((i__19514__auto___23200 < len__19513__auto___23199)){
args23074.push((arguments[i__19514__auto___23200]));

var G__23201 = (i__19514__auto___23200 + (1));
i__19514__auto___23200 = G__23201;
continue;
} else {
}
break;
}

var G__23076 = args23074.length;
switch (G__23076) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23074.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__18443__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__18443__auto__)){
return or__18443__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__18443__auto__,mults){
return (function (p1__23073_SHARP_){
if(cljs.core.truth_(p1__23073_SHARP_.call(null,topic))){
return p1__23073_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__23073_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__18443__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async23077 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23077 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta23078){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta23078 = meta23078;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23077.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_23079,meta23078__$1){
var self__ = this;
var _23079__$1 = this;
return (new cljs.core.async.t_cljs$core$async23077(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta23078__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23077.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_23079){
var self__ = this;
var _23079__$1 = this;
return self__.meta23078;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23077.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async23077.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23077.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async23077.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23077.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23077.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23077.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23077.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta23078","meta23078",-721468643,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23077.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23077.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23077";

cljs.core.async.t_cljs$core$async23077.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__19049__auto__,writer__19050__auto__,opt__19051__auto__){
return cljs.core._write.call(null,writer__19050__auto__,"cljs.core.async/t_cljs$core$async23077");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async23077 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async23077(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta23078){
return (new cljs.core.async.t_cljs$core$async23077(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta23078));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async23077(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__21304__auto___23203 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21304__auto___23203,mults,ensure_mult,p){
return (function (){
var f__21305__auto__ = (function (){var switch__21192__auto__ = ((function (c__21304__auto___23203,mults,ensure_mult,p){
return (function (state_23151){
var state_val_23152 = (state_23151[(1)]);
if((state_val_23152 === (7))){
var inst_23147 = (state_23151[(2)]);
var state_23151__$1 = state_23151;
var statearr_23153_23204 = state_23151__$1;
(statearr_23153_23204[(2)] = inst_23147);

(statearr_23153_23204[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23152 === (20))){
var state_23151__$1 = state_23151;
var statearr_23154_23205 = state_23151__$1;
(statearr_23154_23205[(2)] = null);

(statearr_23154_23205[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23152 === (1))){
var state_23151__$1 = state_23151;
var statearr_23155_23206 = state_23151__$1;
(statearr_23155_23206[(2)] = null);

(statearr_23155_23206[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23152 === (24))){
var inst_23130 = (state_23151[(7)]);
var inst_23139 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_23130);
var state_23151__$1 = state_23151;
var statearr_23156_23207 = state_23151__$1;
(statearr_23156_23207[(2)] = inst_23139);

(statearr_23156_23207[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23152 === (4))){
var inst_23082 = (state_23151[(8)]);
var inst_23082__$1 = (state_23151[(2)]);
var inst_23083 = (inst_23082__$1 == null);
var state_23151__$1 = (function (){var statearr_23157 = state_23151;
(statearr_23157[(8)] = inst_23082__$1);

return statearr_23157;
})();
if(cljs.core.truth_(inst_23083)){
var statearr_23158_23208 = state_23151__$1;
(statearr_23158_23208[(1)] = (5));

} else {
var statearr_23159_23209 = state_23151__$1;
(statearr_23159_23209[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23152 === (15))){
var inst_23124 = (state_23151[(2)]);
var state_23151__$1 = state_23151;
var statearr_23160_23210 = state_23151__$1;
(statearr_23160_23210[(2)] = inst_23124);

(statearr_23160_23210[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23152 === (21))){
var inst_23144 = (state_23151[(2)]);
var state_23151__$1 = (function (){var statearr_23161 = state_23151;
(statearr_23161[(9)] = inst_23144);

return statearr_23161;
})();
var statearr_23162_23211 = state_23151__$1;
(statearr_23162_23211[(2)] = null);

(statearr_23162_23211[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23152 === (13))){
var inst_23106 = (state_23151[(10)]);
var inst_23108 = cljs.core.chunked_seq_QMARK_.call(null,inst_23106);
var state_23151__$1 = state_23151;
if(inst_23108){
var statearr_23163_23212 = state_23151__$1;
(statearr_23163_23212[(1)] = (16));

} else {
var statearr_23164_23213 = state_23151__$1;
(statearr_23164_23213[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23152 === (22))){
var inst_23136 = (state_23151[(2)]);
var state_23151__$1 = state_23151;
if(cljs.core.truth_(inst_23136)){
var statearr_23165_23214 = state_23151__$1;
(statearr_23165_23214[(1)] = (23));

} else {
var statearr_23166_23215 = state_23151__$1;
(statearr_23166_23215[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23152 === (6))){
var inst_23130 = (state_23151[(7)]);
var inst_23082 = (state_23151[(8)]);
var inst_23132 = (state_23151[(11)]);
var inst_23130__$1 = topic_fn.call(null,inst_23082);
var inst_23131 = cljs.core.deref.call(null,mults);
var inst_23132__$1 = cljs.core.get.call(null,inst_23131,inst_23130__$1);
var state_23151__$1 = (function (){var statearr_23167 = state_23151;
(statearr_23167[(7)] = inst_23130__$1);

(statearr_23167[(11)] = inst_23132__$1);

return statearr_23167;
})();
if(cljs.core.truth_(inst_23132__$1)){
var statearr_23168_23216 = state_23151__$1;
(statearr_23168_23216[(1)] = (19));

} else {
var statearr_23169_23217 = state_23151__$1;
(statearr_23169_23217[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23152 === (25))){
var inst_23141 = (state_23151[(2)]);
var state_23151__$1 = state_23151;
var statearr_23170_23218 = state_23151__$1;
(statearr_23170_23218[(2)] = inst_23141);

(statearr_23170_23218[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23152 === (17))){
var inst_23106 = (state_23151[(10)]);
var inst_23115 = cljs.core.first.call(null,inst_23106);
var inst_23116 = cljs.core.async.muxch_STAR_.call(null,inst_23115);
var inst_23117 = cljs.core.async.close_BANG_.call(null,inst_23116);
var inst_23118 = cljs.core.next.call(null,inst_23106);
var inst_23092 = inst_23118;
var inst_23093 = null;
var inst_23094 = (0);
var inst_23095 = (0);
var state_23151__$1 = (function (){var statearr_23171 = state_23151;
(statearr_23171[(12)] = inst_23094);

(statearr_23171[(13)] = inst_23093);

(statearr_23171[(14)] = inst_23095);

(statearr_23171[(15)] = inst_23092);

(statearr_23171[(16)] = inst_23117);

return statearr_23171;
})();
var statearr_23172_23219 = state_23151__$1;
(statearr_23172_23219[(2)] = null);

(statearr_23172_23219[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23152 === (3))){
var inst_23149 = (state_23151[(2)]);
var state_23151__$1 = state_23151;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23151__$1,inst_23149);
} else {
if((state_val_23152 === (12))){
var inst_23126 = (state_23151[(2)]);
var state_23151__$1 = state_23151;
var statearr_23173_23220 = state_23151__$1;
(statearr_23173_23220[(2)] = inst_23126);

(statearr_23173_23220[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23152 === (2))){
var state_23151__$1 = state_23151;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23151__$1,(4),ch);
} else {
if((state_val_23152 === (23))){
var state_23151__$1 = state_23151;
var statearr_23174_23221 = state_23151__$1;
(statearr_23174_23221[(2)] = null);

(statearr_23174_23221[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23152 === (19))){
var inst_23082 = (state_23151[(8)]);
var inst_23132 = (state_23151[(11)]);
var inst_23134 = cljs.core.async.muxch_STAR_.call(null,inst_23132);
var state_23151__$1 = state_23151;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23151__$1,(22),inst_23134,inst_23082);
} else {
if((state_val_23152 === (11))){
var inst_23106 = (state_23151[(10)]);
var inst_23092 = (state_23151[(15)]);
var inst_23106__$1 = cljs.core.seq.call(null,inst_23092);
var state_23151__$1 = (function (){var statearr_23175 = state_23151;
(statearr_23175[(10)] = inst_23106__$1);

return statearr_23175;
})();
if(inst_23106__$1){
var statearr_23176_23222 = state_23151__$1;
(statearr_23176_23222[(1)] = (13));

} else {
var statearr_23177_23223 = state_23151__$1;
(statearr_23177_23223[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23152 === (9))){
var inst_23128 = (state_23151[(2)]);
var state_23151__$1 = state_23151;
var statearr_23178_23224 = state_23151__$1;
(statearr_23178_23224[(2)] = inst_23128);

(statearr_23178_23224[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23152 === (5))){
var inst_23089 = cljs.core.deref.call(null,mults);
var inst_23090 = cljs.core.vals.call(null,inst_23089);
var inst_23091 = cljs.core.seq.call(null,inst_23090);
var inst_23092 = inst_23091;
var inst_23093 = null;
var inst_23094 = (0);
var inst_23095 = (0);
var state_23151__$1 = (function (){var statearr_23179 = state_23151;
(statearr_23179[(12)] = inst_23094);

(statearr_23179[(13)] = inst_23093);

(statearr_23179[(14)] = inst_23095);

(statearr_23179[(15)] = inst_23092);

return statearr_23179;
})();
var statearr_23180_23225 = state_23151__$1;
(statearr_23180_23225[(2)] = null);

(statearr_23180_23225[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23152 === (14))){
var state_23151__$1 = state_23151;
var statearr_23184_23226 = state_23151__$1;
(statearr_23184_23226[(2)] = null);

(statearr_23184_23226[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23152 === (16))){
var inst_23106 = (state_23151[(10)]);
var inst_23110 = cljs.core.chunk_first.call(null,inst_23106);
var inst_23111 = cljs.core.chunk_rest.call(null,inst_23106);
var inst_23112 = cljs.core.count.call(null,inst_23110);
var inst_23092 = inst_23111;
var inst_23093 = inst_23110;
var inst_23094 = inst_23112;
var inst_23095 = (0);
var state_23151__$1 = (function (){var statearr_23185 = state_23151;
(statearr_23185[(12)] = inst_23094);

(statearr_23185[(13)] = inst_23093);

(statearr_23185[(14)] = inst_23095);

(statearr_23185[(15)] = inst_23092);

return statearr_23185;
})();
var statearr_23186_23227 = state_23151__$1;
(statearr_23186_23227[(2)] = null);

(statearr_23186_23227[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23152 === (10))){
var inst_23094 = (state_23151[(12)]);
var inst_23093 = (state_23151[(13)]);
var inst_23095 = (state_23151[(14)]);
var inst_23092 = (state_23151[(15)]);
var inst_23100 = cljs.core._nth.call(null,inst_23093,inst_23095);
var inst_23101 = cljs.core.async.muxch_STAR_.call(null,inst_23100);
var inst_23102 = cljs.core.async.close_BANG_.call(null,inst_23101);
var inst_23103 = (inst_23095 + (1));
var tmp23181 = inst_23094;
var tmp23182 = inst_23093;
var tmp23183 = inst_23092;
var inst_23092__$1 = tmp23183;
var inst_23093__$1 = tmp23182;
var inst_23094__$1 = tmp23181;
var inst_23095__$1 = inst_23103;
var state_23151__$1 = (function (){var statearr_23187 = state_23151;
(statearr_23187[(17)] = inst_23102);

(statearr_23187[(12)] = inst_23094__$1);

(statearr_23187[(13)] = inst_23093__$1);

(statearr_23187[(14)] = inst_23095__$1);

(statearr_23187[(15)] = inst_23092__$1);

return statearr_23187;
})();
var statearr_23188_23228 = state_23151__$1;
(statearr_23188_23228[(2)] = null);

(statearr_23188_23228[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23152 === (18))){
var inst_23121 = (state_23151[(2)]);
var state_23151__$1 = state_23151;
var statearr_23189_23229 = state_23151__$1;
(statearr_23189_23229[(2)] = inst_23121);

(statearr_23189_23229[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23152 === (8))){
var inst_23094 = (state_23151[(12)]);
var inst_23095 = (state_23151[(14)]);
var inst_23097 = (inst_23095 < inst_23094);
var inst_23098 = inst_23097;
var state_23151__$1 = state_23151;
if(cljs.core.truth_(inst_23098)){
var statearr_23190_23230 = state_23151__$1;
(statearr_23190_23230[(1)] = (10));

} else {
var statearr_23191_23231 = state_23151__$1;
(statearr_23191_23231[(1)] = (11));

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
});})(c__21304__auto___23203,mults,ensure_mult,p))
;
return ((function (switch__21192__auto__,c__21304__auto___23203,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__21193__auto__ = null;
var cljs$core$async$state_machine__21193__auto____0 = (function (){
var statearr_23195 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23195[(0)] = cljs$core$async$state_machine__21193__auto__);

(statearr_23195[(1)] = (1));

return statearr_23195;
});
var cljs$core$async$state_machine__21193__auto____1 = (function (state_23151){
while(true){
var ret_value__21194__auto__ = (function (){try{while(true){
var result__21195__auto__ = switch__21192__auto__.call(null,state_23151);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21195__auto__;
}
break;
}
}catch (e23196){if((e23196 instanceof Object)){
var ex__21196__auto__ = e23196;
var statearr_23197_23232 = state_23151;
(statearr_23197_23232[(5)] = ex__21196__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23151);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23196;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21194__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23233 = state_23151;
state_23151 = G__23233;
continue;
} else {
return ret_value__21194__auto__;
}
break;
}
});
cljs$core$async$state_machine__21193__auto__ = function(state_23151){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21193__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21193__auto____1.call(this,state_23151);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21193__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21193__auto____0;
cljs$core$async$state_machine__21193__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21193__auto____1;
return cljs$core$async$state_machine__21193__auto__;
})()
;})(switch__21192__auto__,c__21304__auto___23203,mults,ensure_mult,p))
})();
var state__21306__auto__ = (function (){var statearr_23198 = f__21305__auto__.call(null);
(statearr_23198[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21304__auto___23203);

return statearr_23198;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21306__auto__);
});})(c__21304__auto___23203,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args23234 = [];
var len__19513__auto___23237 = arguments.length;
var i__19514__auto___23238 = (0);
while(true){
if((i__19514__auto___23238 < len__19513__auto___23237)){
args23234.push((arguments[i__19514__auto___23238]));

var G__23239 = (i__19514__auto___23238 + (1));
i__19514__auto___23238 = G__23239;
continue;
} else {
}
break;
}

var G__23236 = args23234.length;
switch (G__23236) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23234.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args23241 = [];
var len__19513__auto___23244 = arguments.length;
var i__19514__auto___23245 = (0);
while(true){
if((i__19514__auto___23245 < len__19513__auto___23244)){
args23241.push((arguments[i__19514__auto___23245]));

var G__23246 = (i__19514__auto___23245 + (1));
i__19514__auto___23245 = G__23246;
continue;
} else {
}
break;
}

var G__23243 = args23241.length;
switch (G__23243) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23241.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args23248 = [];
var len__19513__auto___23319 = arguments.length;
var i__19514__auto___23320 = (0);
while(true){
if((i__19514__auto___23320 < len__19513__auto___23319)){
args23248.push((arguments[i__19514__auto___23320]));

var G__23321 = (i__19514__auto___23320 + (1));
i__19514__auto___23320 = G__23321;
continue;
} else {
}
break;
}

var G__23250 = args23248.length;
switch (G__23250) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23248.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__21304__auto___23323 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21304__auto___23323,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__21305__auto__ = (function (){var switch__21192__auto__ = ((function (c__21304__auto___23323,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_23289){
var state_val_23290 = (state_23289[(1)]);
if((state_val_23290 === (7))){
var state_23289__$1 = state_23289;
var statearr_23291_23324 = state_23289__$1;
(statearr_23291_23324[(2)] = null);

(statearr_23291_23324[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23290 === (1))){
var state_23289__$1 = state_23289;
var statearr_23292_23325 = state_23289__$1;
(statearr_23292_23325[(2)] = null);

(statearr_23292_23325[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23290 === (4))){
var inst_23253 = (state_23289[(7)]);
var inst_23255 = (inst_23253 < cnt);
var state_23289__$1 = state_23289;
if(cljs.core.truth_(inst_23255)){
var statearr_23293_23326 = state_23289__$1;
(statearr_23293_23326[(1)] = (6));

} else {
var statearr_23294_23327 = state_23289__$1;
(statearr_23294_23327[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23290 === (15))){
var inst_23285 = (state_23289[(2)]);
var state_23289__$1 = state_23289;
var statearr_23295_23328 = state_23289__$1;
(statearr_23295_23328[(2)] = inst_23285);

(statearr_23295_23328[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23290 === (13))){
var inst_23278 = cljs.core.async.close_BANG_.call(null,out);
var state_23289__$1 = state_23289;
var statearr_23296_23329 = state_23289__$1;
(statearr_23296_23329[(2)] = inst_23278);

(statearr_23296_23329[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23290 === (6))){
var state_23289__$1 = state_23289;
var statearr_23297_23330 = state_23289__$1;
(statearr_23297_23330[(2)] = null);

(statearr_23297_23330[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23290 === (3))){
var inst_23287 = (state_23289[(2)]);
var state_23289__$1 = state_23289;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23289__$1,inst_23287);
} else {
if((state_val_23290 === (12))){
var inst_23275 = (state_23289[(8)]);
var inst_23275__$1 = (state_23289[(2)]);
var inst_23276 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_23275__$1);
var state_23289__$1 = (function (){var statearr_23298 = state_23289;
(statearr_23298[(8)] = inst_23275__$1);

return statearr_23298;
})();
if(cljs.core.truth_(inst_23276)){
var statearr_23299_23331 = state_23289__$1;
(statearr_23299_23331[(1)] = (13));

} else {
var statearr_23300_23332 = state_23289__$1;
(statearr_23300_23332[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23290 === (2))){
var inst_23252 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_23253 = (0);
var state_23289__$1 = (function (){var statearr_23301 = state_23289;
(statearr_23301[(9)] = inst_23252);

(statearr_23301[(7)] = inst_23253);

return statearr_23301;
})();
var statearr_23302_23333 = state_23289__$1;
(statearr_23302_23333[(2)] = null);

(statearr_23302_23333[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23290 === (11))){
var inst_23253 = (state_23289[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_23289,(10),Object,null,(9));
var inst_23262 = chs__$1.call(null,inst_23253);
var inst_23263 = done.call(null,inst_23253);
var inst_23264 = cljs.core.async.take_BANG_.call(null,inst_23262,inst_23263);
var state_23289__$1 = state_23289;
var statearr_23303_23334 = state_23289__$1;
(statearr_23303_23334[(2)] = inst_23264);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23289__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23290 === (9))){
var inst_23253 = (state_23289[(7)]);
var inst_23266 = (state_23289[(2)]);
var inst_23267 = (inst_23253 + (1));
var inst_23253__$1 = inst_23267;
var state_23289__$1 = (function (){var statearr_23304 = state_23289;
(statearr_23304[(10)] = inst_23266);

(statearr_23304[(7)] = inst_23253__$1);

return statearr_23304;
})();
var statearr_23305_23335 = state_23289__$1;
(statearr_23305_23335[(2)] = null);

(statearr_23305_23335[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23290 === (5))){
var inst_23273 = (state_23289[(2)]);
var state_23289__$1 = (function (){var statearr_23306 = state_23289;
(statearr_23306[(11)] = inst_23273);

return statearr_23306;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23289__$1,(12),dchan);
} else {
if((state_val_23290 === (14))){
var inst_23275 = (state_23289[(8)]);
var inst_23280 = cljs.core.apply.call(null,f,inst_23275);
var state_23289__$1 = state_23289;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23289__$1,(16),out,inst_23280);
} else {
if((state_val_23290 === (16))){
var inst_23282 = (state_23289[(2)]);
var state_23289__$1 = (function (){var statearr_23307 = state_23289;
(statearr_23307[(12)] = inst_23282);

return statearr_23307;
})();
var statearr_23308_23336 = state_23289__$1;
(statearr_23308_23336[(2)] = null);

(statearr_23308_23336[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23290 === (10))){
var inst_23257 = (state_23289[(2)]);
var inst_23258 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_23289__$1 = (function (){var statearr_23309 = state_23289;
(statearr_23309[(13)] = inst_23257);

return statearr_23309;
})();
var statearr_23310_23337 = state_23289__$1;
(statearr_23310_23337[(2)] = inst_23258);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23289__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23290 === (8))){
var inst_23271 = (state_23289[(2)]);
var state_23289__$1 = state_23289;
var statearr_23311_23338 = state_23289__$1;
(statearr_23311_23338[(2)] = inst_23271);

(statearr_23311_23338[(1)] = (5));


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
});})(c__21304__auto___23323,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__21192__auto__,c__21304__auto___23323,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__21193__auto__ = null;
var cljs$core$async$state_machine__21193__auto____0 = (function (){
var statearr_23315 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23315[(0)] = cljs$core$async$state_machine__21193__auto__);

(statearr_23315[(1)] = (1));

return statearr_23315;
});
var cljs$core$async$state_machine__21193__auto____1 = (function (state_23289){
while(true){
var ret_value__21194__auto__ = (function (){try{while(true){
var result__21195__auto__ = switch__21192__auto__.call(null,state_23289);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21195__auto__;
}
break;
}
}catch (e23316){if((e23316 instanceof Object)){
var ex__21196__auto__ = e23316;
var statearr_23317_23339 = state_23289;
(statearr_23317_23339[(5)] = ex__21196__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23289);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23316;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21194__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23340 = state_23289;
state_23289 = G__23340;
continue;
} else {
return ret_value__21194__auto__;
}
break;
}
});
cljs$core$async$state_machine__21193__auto__ = function(state_23289){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21193__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21193__auto____1.call(this,state_23289);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21193__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21193__auto____0;
cljs$core$async$state_machine__21193__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21193__auto____1;
return cljs$core$async$state_machine__21193__auto__;
})()
;})(switch__21192__auto__,c__21304__auto___23323,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__21306__auto__ = (function (){var statearr_23318 = f__21305__auto__.call(null);
(statearr_23318[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21304__auto___23323);

return statearr_23318;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21306__auto__);
});})(c__21304__auto___23323,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args23342 = [];
var len__19513__auto___23398 = arguments.length;
var i__19514__auto___23399 = (0);
while(true){
if((i__19514__auto___23399 < len__19513__auto___23398)){
args23342.push((arguments[i__19514__auto___23399]));

var G__23400 = (i__19514__auto___23399 + (1));
i__19514__auto___23399 = G__23400;
continue;
} else {
}
break;
}

var G__23344 = args23342.length;
switch (G__23344) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23342.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21304__auto___23402 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21304__auto___23402,out){
return (function (){
var f__21305__auto__ = (function (){var switch__21192__auto__ = ((function (c__21304__auto___23402,out){
return (function (state_23374){
var state_val_23375 = (state_23374[(1)]);
if((state_val_23375 === (7))){
var inst_23353 = (state_23374[(7)]);
var inst_23354 = (state_23374[(8)]);
var inst_23353__$1 = (state_23374[(2)]);
var inst_23354__$1 = cljs.core.nth.call(null,inst_23353__$1,(0),null);
var inst_23355 = cljs.core.nth.call(null,inst_23353__$1,(1),null);
var inst_23356 = (inst_23354__$1 == null);
var state_23374__$1 = (function (){var statearr_23376 = state_23374;
(statearr_23376[(7)] = inst_23353__$1);

(statearr_23376[(8)] = inst_23354__$1);

(statearr_23376[(9)] = inst_23355);

return statearr_23376;
})();
if(cljs.core.truth_(inst_23356)){
var statearr_23377_23403 = state_23374__$1;
(statearr_23377_23403[(1)] = (8));

} else {
var statearr_23378_23404 = state_23374__$1;
(statearr_23378_23404[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23375 === (1))){
var inst_23345 = cljs.core.vec.call(null,chs);
var inst_23346 = inst_23345;
var state_23374__$1 = (function (){var statearr_23379 = state_23374;
(statearr_23379[(10)] = inst_23346);

return statearr_23379;
})();
var statearr_23380_23405 = state_23374__$1;
(statearr_23380_23405[(2)] = null);

(statearr_23380_23405[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23375 === (4))){
var inst_23346 = (state_23374[(10)]);
var state_23374__$1 = state_23374;
return cljs.core.async.ioc_alts_BANG_.call(null,state_23374__$1,(7),inst_23346);
} else {
if((state_val_23375 === (6))){
var inst_23370 = (state_23374[(2)]);
var state_23374__$1 = state_23374;
var statearr_23381_23406 = state_23374__$1;
(statearr_23381_23406[(2)] = inst_23370);

(statearr_23381_23406[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23375 === (3))){
var inst_23372 = (state_23374[(2)]);
var state_23374__$1 = state_23374;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23374__$1,inst_23372);
} else {
if((state_val_23375 === (2))){
var inst_23346 = (state_23374[(10)]);
var inst_23348 = cljs.core.count.call(null,inst_23346);
var inst_23349 = (inst_23348 > (0));
var state_23374__$1 = state_23374;
if(cljs.core.truth_(inst_23349)){
var statearr_23383_23407 = state_23374__$1;
(statearr_23383_23407[(1)] = (4));

} else {
var statearr_23384_23408 = state_23374__$1;
(statearr_23384_23408[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23375 === (11))){
var inst_23346 = (state_23374[(10)]);
var inst_23363 = (state_23374[(2)]);
var tmp23382 = inst_23346;
var inst_23346__$1 = tmp23382;
var state_23374__$1 = (function (){var statearr_23385 = state_23374;
(statearr_23385[(11)] = inst_23363);

(statearr_23385[(10)] = inst_23346__$1);

return statearr_23385;
})();
var statearr_23386_23409 = state_23374__$1;
(statearr_23386_23409[(2)] = null);

(statearr_23386_23409[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23375 === (9))){
var inst_23354 = (state_23374[(8)]);
var state_23374__$1 = state_23374;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23374__$1,(11),out,inst_23354);
} else {
if((state_val_23375 === (5))){
var inst_23368 = cljs.core.async.close_BANG_.call(null,out);
var state_23374__$1 = state_23374;
var statearr_23387_23410 = state_23374__$1;
(statearr_23387_23410[(2)] = inst_23368);

(statearr_23387_23410[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23375 === (10))){
var inst_23366 = (state_23374[(2)]);
var state_23374__$1 = state_23374;
var statearr_23388_23411 = state_23374__$1;
(statearr_23388_23411[(2)] = inst_23366);

(statearr_23388_23411[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23375 === (8))){
var inst_23353 = (state_23374[(7)]);
var inst_23354 = (state_23374[(8)]);
var inst_23355 = (state_23374[(9)]);
var inst_23346 = (state_23374[(10)]);
var inst_23358 = (function (){var cs = inst_23346;
var vec__23351 = inst_23353;
var v = inst_23354;
var c = inst_23355;
return ((function (cs,vec__23351,v,c,inst_23353,inst_23354,inst_23355,inst_23346,state_val_23375,c__21304__auto___23402,out){
return (function (p1__23341_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__23341_SHARP_);
});
;})(cs,vec__23351,v,c,inst_23353,inst_23354,inst_23355,inst_23346,state_val_23375,c__21304__auto___23402,out))
})();
var inst_23359 = cljs.core.filterv.call(null,inst_23358,inst_23346);
var inst_23346__$1 = inst_23359;
var state_23374__$1 = (function (){var statearr_23389 = state_23374;
(statearr_23389[(10)] = inst_23346__$1);

return statearr_23389;
})();
var statearr_23390_23412 = state_23374__$1;
(statearr_23390_23412[(2)] = null);

(statearr_23390_23412[(1)] = (2));


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
});})(c__21304__auto___23402,out))
;
return ((function (switch__21192__auto__,c__21304__auto___23402,out){
return (function() {
var cljs$core$async$state_machine__21193__auto__ = null;
var cljs$core$async$state_machine__21193__auto____0 = (function (){
var statearr_23394 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23394[(0)] = cljs$core$async$state_machine__21193__auto__);

(statearr_23394[(1)] = (1));

return statearr_23394;
});
var cljs$core$async$state_machine__21193__auto____1 = (function (state_23374){
while(true){
var ret_value__21194__auto__ = (function (){try{while(true){
var result__21195__auto__ = switch__21192__auto__.call(null,state_23374);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21195__auto__;
}
break;
}
}catch (e23395){if((e23395 instanceof Object)){
var ex__21196__auto__ = e23395;
var statearr_23396_23413 = state_23374;
(statearr_23396_23413[(5)] = ex__21196__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23374);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23395;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21194__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23414 = state_23374;
state_23374 = G__23414;
continue;
} else {
return ret_value__21194__auto__;
}
break;
}
});
cljs$core$async$state_machine__21193__auto__ = function(state_23374){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21193__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21193__auto____1.call(this,state_23374);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21193__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21193__auto____0;
cljs$core$async$state_machine__21193__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21193__auto____1;
return cljs$core$async$state_machine__21193__auto__;
})()
;})(switch__21192__auto__,c__21304__auto___23402,out))
})();
var state__21306__auto__ = (function (){var statearr_23397 = f__21305__auto__.call(null);
(statearr_23397[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21304__auto___23402);

return statearr_23397;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21306__auto__);
});})(c__21304__auto___23402,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args23415 = [];
var len__19513__auto___23464 = arguments.length;
var i__19514__auto___23465 = (0);
while(true){
if((i__19514__auto___23465 < len__19513__auto___23464)){
args23415.push((arguments[i__19514__auto___23465]));

var G__23466 = (i__19514__auto___23465 + (1));
i__19514__auto___23465 = G__23466;
continue;
} else {
}
break;
}

var G__23417 = args23415.length;
switch (G__23417) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23415.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21304__auto___23468 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21304__auto___23468,out){
return (function (){
var f__21305__auto__ = (function (){var switch__21192__auto__ = ((function (c__21304__auto___23468,out){
return (function (state_23441){
var state_val_23442 = (state_23441[(1)]);
if((state_val_23442 === (7))){
var inst_23423 = (state_23441[(7)]);
var inst_23423__$1 = (state_23441[(2)]);
var inst_23424 = (inst_23423__$1 == null);
var inst_23425 = cljs.core.not.call(null,inst_23424);
var state_23441__$1 = (function (){var statearr_23443 = state_23441;
(statearr_23443[(7)] = inst_23423__$1);

return statearr_23443;
})();
if(inst_23425){
var statearr_23444_23469 = state_23441__$1;
(statearr_23444_23469[(1)] = (8));

} else {
var statearr_23445_23470 = state_23441__$1;
(statearr_23445_23470[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23442 === (1))){
var inst_23418 = (0);
var state_23441__$1 = (function (){var statearr_23446 = state_23441;
(statearr_23446[(8)] = inst_23418);

return statearr_23446;
})();
var statearr_23447_23471 = state_23441__$1;
(statearr_23447_23471[(2)] = null);

(statearr_23447_23471[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23442 === (4))){
var state_23441__$1 = state_23441;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23441__$1,(7),ch);
} else {
if((state_val_23442 === (6))){
var inst_23436 = (state_23441[(2)]);
var state_23441__$1 = state_23441;
var statearr_23448_23472 = state_23441__$1;
(statearr_23448_23472[(2)] = inst_23436);

(statearr_23448_23472[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23442 === (3))){
var inst_23438 = (state_23441[(2)]);
var inst_23439 = cljs.core.async.close_BANG_.call(null,out);
var state_23441__$1 = (function (){var statearr_23449 = state_23441;
(statearr_23449[(9)] = inst_23438);

return statearr_23449;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23441__$1,inst_23439);
} else {
if((state_val_23442 === (2))){
var inst_23418 = (state_23441[(8)]);
var inst_23420 = (inst_23418 < n);
var state_23441__$1 = state_23441;
if(cljs.core.truth_(inst_23420)){
var statearr_23450_23473 = state_23441__$1;
(statearr_23450_23473[(1)] = (4));

} else {
var statearr_23451_23474 = state_23441__$1;
(statearr_23451_23474[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23442 === (11))){
var inst_23418 = (state_23441[(8)]);
var inst_23428 = (state_23441[(2)]);
var inst_23429 = (inst_23418 + (1));
var inst_23418__$1 = inst_23429;
var state_23441__$1 = (function (){var statearr_23452 = state_23441;
(statearr_23452[(8)] = inst_23418__$1);

(statearr_23452[(10)] = inst_23428);

return statearr_23452;
})();
var statearr_23453_23475 = state_23441__$1;
(statearr_23453_23475[(2)] = null);

(statearr_23453_23475[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23442 === (9))){
var state_23441__$1 = state_23441;
var statearr_23454_23476 = state_23441__$1;
(statearr_23454_23476[(2)] = null);

(statearr_23454_23476[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23442 === (5))){
var state_23441__$1 = state_23441;
var statearr_23455_23477 = state_23441__$1;
(statearr_23455_23477[(2)] = null);

(statearr_23455_23477[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23442 === (10))){
var inst_23433 = (state_23441[(2)]);
var state_23441__$1 = state_23441;
var statearr_23456_23478 = state_23441__$1;
(statearr_23456_23478[(2)] = inst_23433);

(statearr_23456_23478[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23442 === (8))){
var inst_23423 = (state_23441[(7)]);
var state_23441__$1 = state_23441;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23441__$1,(11),out,inst_23423);
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
});})(c__21304__auto___23468,out))
;
return ((function (switch__21192__auto__,c__21304__auto___23468,out){
return (function() {
var cljs$core$async$state_machine__21193__auto__ = null;
var cljs$core$async$state_machine__21193__auto____0 = (function (){
var statearr_23460 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23460[(0)] = cljs$core$async$state_machine__21193__auto__);

(statearr_23460[(1)] = (1));

return statearr_23460;
});
var cljs$core$async$state_machine__21193__auto____1 = (function (state_23441){
while(true){
var ret_value__21194__auto__ = (function (){try{while(true){
var result__21195__auto__ = switch__21192__auto__.call(null,state_23441);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21195__auto__;
}
break;
}
}catch (e23461){if((e23461 instanceof Object)){
var ex__21196__auto__ = e23461;
var statearr_23462_23479 = state_23441;
(statearr_23462_23479[(5)] = ex__21196__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23441);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23461;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21194__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23480 = state_23441;
state_23441 = G__23480;
continue;
} else {
return ret_value__21194__auto__;
}
break;
}
});
cljs$core$async$state_machine__21193__auto__ = function(state_23441){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21193__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21193__auto____1.call(this,state_23441);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21193__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21193__auto____0;
cljs$core$async$state_machine__21193__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21193__auto____1;
return cljs$core$async$state_machine__21193__auto__;
})()
;})(switch__21192__auto__,c__21304__auto___23468,out))
})();
var state__21306__auto__ = (function (){var statearr_23463 = f__21305__auto__.call(null);
(statearr_23463[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21304__auto___23468);

return statearr_23463;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21306__auto__);
});})(c__21304__auto___23468,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async23488 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23488 = (function (map_LT_,f,ch,meta23489){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta23489 = meta23489;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23488.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23490,meta23489__$1){
var self__ = this;
var _23490__$1 = this;
return (new cljs.core.async.t_cljs$core$async23488(self__.map_LT_,self__.f,self__.ch,meta23489__$1));
});

cljs.core.async.t_cljs$core$async23488.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23490){
var self__ = this;
var _23490__$1 = this;
return self__.meta23489;
});

cljs.core.async.t_cljs$core$async23488.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async23488.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async23488.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async23488.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async23488.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async23491 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23491 = (function (map_LT_,f,ch,meta23489,_,fn1,meta23492){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta23489 = meta23489;
this._ = _;
this.fn1 = fn1;
this.meta23492 = meta23492;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23491.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_23493,meta23492__$1){
var self__ = this;
var _23493__$1 = this;
return (new cljs.core.async.t_cljs$core$async23491(self__.map_LT_,self__.f,self__.ch,self__.meta23489,self__._,self__.fn1,meta23492__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async23491.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_23493){
var self__ = this;
var _23493__$1 = this;
return self__.meta23492;
});})(___$1))
;

cljs.core.async.t_cljs$core$async23491.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async23491.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async23491.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async23491.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__23481_SHARP_){
return f1.call(null,(((p1__23481_SHARP_ == null))?null:self__.f.call(null,p1__23481_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async23491.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta23489","meta23489",-811690790,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async23488","cljs.core.async/t_cljs$core$async23488",-1295186584,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta23492","meta23492",-1849752860,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async23491.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23491.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23491";

cljs.core.async.t_cljs$core$async23491.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__19049__auto__,writer__19050__auto__,opt__19051__auto__){
return cljs.core._write.call(null,writer__19050__auto__,"cljs.core.async/t_cljs$core$async23491");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async23491 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async23491(map_LT___$1,f__$1,ch__$1,meta23489__$1,___$2,fn1__$1,meta23492){
return (new cljs.core.async.t_cljs$core$async23491(map_LT___$1,f__$1,ch__$1,meta23489__$1,___$2,fn1__$1,meta23492));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async23491(self__.map_LT_,self__.f,self__.ch,self__.meta23489,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__18431__auto__ = ret;
if(cljs.core.truth_(and__18431__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__18431__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async23488.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async23488.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async23488.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta23489","meta23489",-811690790,null)], null);
});

cljs.core.async.t_cljs$core$async23488.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23488.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23488";

cljs.core.async.t_cljs$core$async23488.cljs$lang$ctorPrWriter = (function (this__19049__auto__,writer__19050__auto__,opt__19051__auto__){
return cljs.core._write.call(null,writer__19050__auto__,"cljs.core.async/t_cljs$core$async23488");
});

cljs.core.async.__GT_t_cljs$core$async23488 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async23488(map_LT___$1,f__$1,ch__$1,meta23489){
return (new cljs.core.async.t_cljs$core$async23488(map_LT___$1,f__$1,ch__$1,meta23489));
});

}

return (new cljs.core.async.t_cljs$core$async23488(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async23497 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23497 = (function (map_GT_,f,ch,meta23498){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta23498 = meta23498;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23497.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23499,meta23498__$1){
var self__ = this;
var _23499__$1 = this;
return (new cljs.core.async.t_cljs$core$async23497(self__.map_GT_,self__.f,self__.ch,meta23498__$1));
});

cljs.core.async.t_cljs$core$async23497.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23499){
var self__ = this;
var _23499__$1 = this;
return self__.meta23498;
});

cljs.core.async.t_cljs$core$async23497.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async23497.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async23497.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async23497.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async23497.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async23497.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async23497.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta23498","meta23498",1786113339,null)], null);
});

cljs.core.async.t_cljs$core$async23497.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23497.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23497";

cljs.core.async.t_cljs$core$async23497.cljs$lang$ctorPrWriter = (function (this__19049__auto__,writer__19050__auto__,opt__19051__auto__){
return cljs.core._write.call(null,writer__19050__auto__,"cljs.core.async/t_cljs$core$async23497");
});

cljs.core.async.__GT_t_cljs$core$async23497 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async23497(map_GT___$1,f__$1,ch__$1,meta23498){
return (new cljs.core.async.t_cljs$core$async23497(map_GT___$1,f__$1,ch__$1,meta23498));
});

}

return (new cljs.core.async.t_cljs$core$async23497(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async23503 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23503 = (function (filter_GT_,p,ch,meta23504){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta23504 = meta23504;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23503.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23505,meta23504__$1){
var self__ = this;
var _23505__$1 = this;
return (new cljs.core.async.t_cljs$core$async23503(self__.filter_GT_,self__.p,self__.ch,meta23504__$1));
});

cljs.core.async.t_cljs$core$async23503.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23505){
var self__ = this;
var _23505__$1 = this;
return self__.meta23504;
});

cljs.core.async.t_cljs$core$async23503.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async23503.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async23503.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async23503.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async23503.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async23503.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async23503.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async23503.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta23504","meta23504",908380259,null)], null);
});

cljs.core.async.t_cljs$core$async23503.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23503.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23503";

cljs.core.async.t_cljs$core$async23503.cljs$lang$ctorPrWriter = (function (this__19049__auto__,writer__19050__auto__,opt__19051__auto__){
return cljs.core._write.call(null,writer__19050__auto__,"cljs.core.async/t_cljs$core$async23503");
});

cljs.core.async.__GT_t_cljs$core$async23503 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async23503(filter_GT___$1,p__$1,ch__$1,meta23504){
return (new cljs.core.async.t_cljs$core$async23503(filter_GT___$1,p__$1,ch__$1,meta23504));
});

}

return (new cljs.core.async.t_cljs$core$async23503(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args23506 = [];
var len__19513__auto___23550 = arguments.length;
var i__19514__auto___23551 = (0);
while(true){
if((i__19514__auto___23551 < len__19513__auto___23550)){
args23506.push((arguments[i__19514__auto___23551]));

var G__23552 = (i__19514__auto___23551 + (1));
i__19514__auto___23551 = G__23552;
continue;
} else {
}
break;
}

var G__23508 = args23506.length;
switch (G__23508) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23506.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21304__auto___23554 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21304__auto___23554,out){
return (function (){
var f__21305__auto__ = (function (){var switch__21192__auto__ = ((function (c__21304__auto___23554,out){
return (function (state_23529){
var state_val_23530 = (state_23529[(1)]);
if((state_val_23530 === (7))){
var inst_23525 = (state_23529[(2)]);
var state_23529__$1 = state_23529;
var statearr_23531_23555 = state_23529__$1;
(statearr_23531_23555[(2)] = inst_23525);

(statearr_23531_23555[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23530 === (1))){
var state_23529__$1 = state_23529;
var statearr_23532_23556 = state_23529__$1;
(statearr_23532_23556[(2)] = null);

(statearr_23532_23556[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23530 === (4))){
var inst_23511 = (state_23529[(7)]);
var inst_23511__$1 = (state_23529[(2)]);
var inst_23512 = (inst_23511__$1 == null);
var state_23529__$1 = (function (){var statearr_23533 = state_23529;
(statearr_23533[(7)] = inst_23511__$1);

return statearr_23533;
})();
if(cljs.core.truth_(inst_23512)){
var statearr_23534_23557 = state_23529__$1;
(statearr_23534_23557[(1)] = (5));

} else {
var statearr_23535_23558 = state_23529__$1;
(statearr_23535_23558[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23530 === (6))){
var inst_23511 = (state_23529[(7)]);
var inst_23516 = p.call(null,inst_23511);
var state_23529__$1 = state_23529;
if(cljs.core.truth_(inst_23516)){
var statearr_23536_23559 = state_23529__$1;
(statearr_23536_23559[(1)] = (8));

} else {
var statearr_23537_23560 = state_23529__$1;
(statearr_23537_23560[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23530 === (3))){
var inst_23527 = (state_23529[(2)]);
var state_23529__$1 = state_23529;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23529__$1,inst_23527);
} else {
if((state_val_23530 === (2))){
var state_23529__$1 = state_23529;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23529__$1,(4),ch);
} else {
if((state_val_23530 === (11))){
var inst_23519 = (state_23529[(2)]);
var state_23529__$1 = state_23529;
var statearr_23538_23561 = state_23529__$1;
(statearr_23538_23561[(2)] = inst_23519);

(statearr_23538_23561[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23530 === (9))){
var state_23529__$1 = state_23529;
var statearr_23539_23562 = state_23529__$1;
(statearr_23539_23562[(2)] = null);

(statearr_23539_23562[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23530 === (5))){
var inst_23514 = cljs.core.async.close_BANG_.call(null,out);
var state_23529__$1 = state_23529;
var statearr_23540_23563 = state_23529__$1;
(statearr_23540_23563[(2)] = inst_23514);

(statearr_23540_23563[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23530 === (10))){
var inst_23522 = (state_23529[(2)]);
var state_23529__$1 = (function (){var statearr_23541 = state_23529;
(statearr_23541[(8)] = inst_23522);

return statearr_23541;
})();
var statearr_23542_23564 = state_23529__$1;
(statearr_23542_23564[(2)] = null);

(statearr_23542_23564[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23530 === (8))){
var inst_23511 = (state_23529[(7)]);
var state_23529__$1 = state_23529;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23529__$1,(11),out,inst_23511);
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
});})(c__21304__auto___23554,out))
;
return ((function (switch__21192__auto__,c__21304__auto___23554,out){
return (function() {
var cljs$core$async$state_machine__21193__auto__ = null;
var cljs$core$async$state_machine__21193__auto____0 = (function (){
var statearr_23546 = [null,null,null,null,null,null,null,null,null];
(statearr_23546[(0)] = cljs$core$async$state_machine__21193__auto__);

(statearr_23546[(1)] = (1));

return statearr_23546;
});
var cljs$core$async$state_machine__21193__auto____1 = (function (state_23529){
while(true){
var ret_value__21194__auto__ = (function (){try{while(true){
var result__21195__auto__ = switch__21192__auto__.call(null,state_23529);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21195__auto__;
}
break;
}
}catch (e23547){if((e23547 instanceof Object)){
var ex__21196__auto__ = e23547;
var statearr_23548_23565 = state_23529;
(statearr_23548_23565[(5)] = ex__21196__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23529);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23547;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21194__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23566 = state_23529;
state_23529 = G__23566;
continue;
} else {
return ret_value__21194__auto__;
}
break;
}
});
cljs$core$async$state_machine__21193__auto__ = function(state_23529){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21193__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21193__auto____1.call(this,state_23529);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21193__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21193__auto____0;
cljs$core$async$state_machine__21193__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21193__auto____1;
return cljs$core$async$state_machine__21193__auto__;
})()
;})(switch__21192__auto__,c__21304__auto___23554,out))
})();
var state__21306__auto__ = (function (){var statearr_23549 = f__21305__auto__.call(null);
(statearr_23549[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21304__auto___23554);

return statearr_23549;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21306__auto__);
});})(c__21304__auto___23554,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args23567 = [];
var len__19513__auto___23570 = arguments.length;
var i__19514__auto___23571 = (0);
while(true){
if((i__19514__auto___23571 < len__19513__auto___23570)){
args23567.push((arguments[i__19514__auto___23571]));

var G__23572 = (i__19514__auto___23571 + (1));
i__19514__auto___23571 = G__23572;
continue;
} else {
}
break;
}

var G__23569 = args23567.length;
switch (G__23569) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23567.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__21304__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21304__auto__){
return (function (){
var f__21305__auto__ = (function (){var switch__21192__auto__ = ((function (c__21304__auto__){
return (function (state_23739){
var state_val_23740 = (state_23739[(1)]);
if((state_val_23740 === (7))){
var inst_23735 = (state_23739[(2)]);
var state_23739__$1 = state_23739;
var statearr_23741_23782 = state_23739__$1;
(statearr_23741_23782[(2)] = inst_23735);

(statearr_23741_23782[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23740 === (20))){
var inst_23705 = (state_23739[(7)]);
var inst_23716 = (state_23739[(2)]);
var inst_23717 = cljs.core.next.call(null,inst_23705);
var inst_23691 = inst_23717;
var inst_23692 = null;
var inst_23693 = (0);
var inst_23694 = (0);
var state_23739__$1 = (function (){var statearr_23742 = state_23739;
(statearr_23742[(8)] = inst_23691);

(statearr_23742[(9)] = inst_23716);

(statearr_23742[(10)] = inst_23693);

(statearr_23742[(11)] = inst_23694);

(statearr_23742[(12)] = inst_23692);

return statearr_23742;
})();
var statearr_23743_23783 = state_23739__$1;
(statearr_23743_23783[(2)] = null);

(statearr_23743_23783[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23740 === (1))){
var state_23739__$1 = state_23739;
var statearr_23744_23784 = state_23739__$1;
(statearr_23744_23784[(2)] = null);

(statearr_23744_23784[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23740 === (4))){
var inst_23680 = (state_23739[(13)]);
var inst_23680__$1 = (state_23739[(2)]);
var inst_23681 = (inst_23680__$1 == null);
var state_23739__$1 = (function (){var statearr_23745 = state_23739;
(statearr_23745[(13)] = inst_23680__$1);

return statearr_23745;
})();
if(cljs.core.truth_(inst_23681)){
var statearr_23746_23785 = state_23739__$1;
(statearr_23746_23785[(1)] = (5));

} else {
var statearr_23747_23786 = state_23739__$1;
(statearr_23747_23786[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23740 === (15))){
var state_23739__$1 = state_23739;
var statearr_23751_23787 = state_23739__$1;
(statearr_23751_23787[(2)] = null);

(statearr_23751_23787[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23740 === (21))){
var state_23739__$1 = state_23739;
var statearr_23752_23788 = state_23739__$1;
(statearr_23752_23788[(2)] = null);

(statearr_23752_23788[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23740 === (13))){
var inst_23691 = (state_23739[(8)]);
var inst_23693 = (state_23739[(10)]);
var inst_23694 = (state_23739[(11)]);
var inst_23692 = (state_23739[(12)]);
var inst_23701 = (state_23739[(2)]);
var inst_23702 = (inst_23694 + (1));
var tmp23748 = inst_23691;
var tmp23749 = inst_23693;
var tmp23750 = inst_23692;
var inst_23691__$1 = tmp23748;
var inst_23692__$1 = tmp23750;
var inst_23693__$1 = tmp23749;
var inst_23694__$1 = inst_23702;
var state_23739__$1 = (function (){var statearr_23753 = state_23739;
(statearr_23753[(8)] = inst_23691__$1);

(statearr_23753[(10)] = inst_23693__$1);

(statearr_23753[(11)] = inst_23694__$1);

(statearr_23753[(14)] = inst_23701);

(statearr_23753[(12)] = inst_23692__$1);

return statearr_23753;
})();
var statearr_23754_23789 = state_23739__$1;
(statearr_23754_23789[(2)] = null);

(statearr_23754_23789[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23740 === (22))){
var state_23739__$1 = state_23739;
var statearr_23755_23790 = state_23739__$1;
(statearr_23755_23790[(2)] = null);

(statearr_23755_23790[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23740 === (6))){
var inst_23680 = (state_23739[(13)]);
var inst_23689 = f.call(null,inst_23680);
var inst_23690 = cljs.core.seq.call(null,inst_23689);
var inst_23691 = inst_23690;
var inst_23692 = null;
var inst_23693 = (0);
var inst_23694 = (0);
var state_23739__$1 = (function (){var statearr_23756 = state_23739;
(statearr_23756[(8)] = inst_23691);

(statearr_23756[(10)] = inst_23693);

(statearr_23756[(11)] = inst_23694);

(statearr_23756[(12)] = inst_23692);

return statearr_23756;
})();
var statearr_23757_23791 = state_23739__$1;
(statearr_23757_23791[(2)] = null);

(statearr_23757_23791[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23740 === (17))){
var inst_23705 = (state_23739[(7)]);
var inst_23709 = cljs.core.chunk_first.call(null,inst_23705);
var inst_23710 = cljs.core.chunk_rest.call(null,inst_23705);
var inst_23711 = cljs.core.count.call(null,inst_23709);
var inst_23691 = inst_23710;
var inst_23692 = inst_23709;
var inst_23693 = inst_23711;
var inst_23694 = (0);
var state_23739__$1 = (function (){var statearr_23758 = state_23739;
(statearr_23758[(8)] = inst_23691);

(statearr_23758[(10)] = inst_23693);

(statearr_23758[(11)] = inst_23694);

(statearr_23758[(12)] = inst_23692);

return statearr_23758;
})();
var statearr_23759_23792 = state_23739__$1;
(statearr_23759_23792[(2)] = null);

(statearr_23759_23792[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23740 === (3))){
var inst_23737 = (state_23739[(2)]);
var state_23739__$1 = state_23739;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23739__$1,inst_23737);
} else {
if((state_val_23740 === (12))){
var inst_23725 = (state_23739[(2)]);
var state_23739__$1 = state_23739;
var statearr_23760_23793 = state_23739__$1;
(statearr_23760_23793[(2)] = inst_23725);

(statearr_23760_23793[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23740 === (2))){
var state_23739__$1 = state_23739;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23739__$1,(4),in$);
} else {
if((state_val_23740 === (23))){
var inst_23733 = (state_23739[(2)]);
var state_23739__$1 = state_23739;
var statearr_23761_23794 = state_23739__$1;
(statearr_23761_23794[(2)] = inst_23733);

(statearr_23761_23794[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23740 === (19))){
var inst_23720 = (state_23739[(2)]);
var state_23739__$1 = state_23739;
var statearr_23762_23795 = state_23739__$1;
(statearr_23762_23795[(2)] = inst_23720);

(statearr_23762_23795[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23740 === (11))){
var inst_23691 = (state_23739[(8)]);
var inst_23705 = (state_23739[(7)]);
var inst_23705__$1 = cljs.core.seq.call(null,inst_23691);
var state_23739__$1 = (function (){var statearr_23763 = state_23739;
(statearr_23763[(7)] = inst_23705__$1);

return statearr_23763;
})();
if(inst_23705__$1){
var statearr_23764_23796 = state_23739__$1;
(statearr_23764_23796[(1)] = (14));

} else {
var statearr_23765_23797 = state_23739__$1;
(statearr_23765_23797[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23740 === (9))){
var inst_23727 = (state_23739[(2)]);
var inst_23728 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_23739__$1 = (function (){var statearr_23766 = state_23739;
(statearr_23766[(15)] = inst_23727);

return statearr_23766;
})();
if(cljs.core.truth_(inst_23728)){
var statearr_23767_23798 = state_23739__$1;
(statearr_23767_23798[(1)] = (21));

} else {
var statearr_23768_23799 = state_23739__$1;
(statearr_23768_23799[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23740 === (5))){
var inst_23683 = cljs.core.async.close_BANG_.call(null,out);
var state_23739__$1 = state_23739;
var statearr_23769_23800 = state_23739__$1;
(statearr_23769_23800[(2)] = inst_23683);

(statearr_23769_23800[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23740 === (14))){
var inst_23705 = (state_23739[(7)]);
var inst_23707 = cljs.core.chunked_seq_QMARK_.call(null,inst_23705);
var state_23739__$1 = state_23739;
if(inst_23707){
var statearr_23770_23801 = state_23739__$1;
(statearr_23770_23801[(1)] = (17));

} else {
var statearr_23771_23802 = state_23739__$1;
(statearr_23771_23802[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23740 === (16))){
var inst_23723 = (state_23739[(2)]);
var state_23739__$1 = state_23739;
var statearr_23772_23803 = state_23739__$1;
(statearr_23772_23803[(2)] = inst_23723);

(statearr_23772_23803[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23740 === (10))){
var inst_23694 = (state_23739[(11)]);
var inst_23692 = (state_23739[(12)]);
var inst_23699 = cljs.core._nth.call(null,inst_23692,inst_23694);
var state_23739__$1 = state_23739;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23739__$1,(13),out,inst_23699);
} else {
if((state_val_23740 === (18))){
var inst_23705 = (state_23739[(7)]);
var inst_23714 = cljs.core.first.call(null,inst_23705);
var state_23739__$1 = state_23739;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23739__$1,(20),out,inst_23714);
} else {
if((state_val_23740 === (8))){
var inst_23693 = (state_23739[(10)]);
var inst_23694 = (state_23739[(11)]);
var inst_23696 = (inst_23694 < inst_23693);
var inst_23697 = inst_23696;
var state_23739__$1 = state_23739;
if(cljs.core.truth_(inst_23697)){
var statearr_23773_23804 = state_23739__$1;
(statearr_23773_23804[(1)] = (10));

} else {
var statearr_23774_23805 = state_23739__$1;
(statearr_23774_23805[(1)] = (11));

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
});})(c__21304__auto__))
;
return ((function (switch__21192__auto__,c__21304__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__21193__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__21193__auto____0 = (function (){
var statearr_23778 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23778[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__21193__auto__);

(statearr_23778[(1)] = (1));

return statearr_23778;
});
var cljs$core$async$mapcat_STAR__$_state_machine__21193__auto____1 = (function (state_23739){
while(true){
var ret_value__21194__auto__ = (function (){try{while(true){
var result__21195__auto__ = switch__21192__auto__.call(null,state_23739);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21195__auto__;
}
break;
}
}catch (e23779){if((e23779 instanceof Object)){
var ex__21196__auto__ = e23779;
var statearr_23780_23806 = state_23739;
(statearr_23780_23806[(5)] = ex__21196__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23739);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23779;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21194__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23807 = state_23739;
state_23739 = G__23807;
continue;
} else {
return ret_value__21194__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__21193__auto__ = function(state_23739){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__21193__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__21193__auto____1.call(this,state_23739);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__21193__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__21193__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__21193__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__21193__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__21193__auto__;
})()
;})(switch__21192__auto__,c__21304__auto__))
})();
var state__21306__auto__ = (function (){var statearr_23781 = f__21305__auto__.call(null);
(statearr_23781[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21304__auto__);

return statearr_23781;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21306__auto__);
});})(c__21304__auto__))
);

return c__21304__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args23808 = [];
var len__19513__auto___23811 = arguments.length;
var i__19514__auto___23812 = (0);
while(true){
if((i__19514__auto___23812 < len__19513__auto___23811)){
args23808.push((arguments[i__19514__auto___23812]));

var G__23813 = (i__19514__auto___23812 + (1));
i__19514__auto___23812 = G__23813;
continue;
} else {
}
break;
}

var G__23810 = args23808.length;
switch (G__23810) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23808.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args23815 = [];
var len__19513__auto___23818 = arguments.length;
var i__19514__auto___23819 = (0);
while(true){
if((i__19514__auto___23819 < len__19513__auto___23818)){
args23815.push((arguments[i__19514__auto___23819]));

var G__23820 = (i__19514__auto___23819 + (1));
i__19514__auto___23819 = G__23820;
continue;
} else {
}
break;
}

var G__23817 = args23815.length;
switch (G__23817) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23815.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args23822 = [];
var len__19513__auto___23873 = arguments.length;
var i__19514__auto___23874 = (0);
while(true){
if((i__19514__auto___23874 < len__19513__auto___23873)){
args23822.push((arguments[i__19514__auto___23874]));

var G__23875 = (i__19514__auto___23874 + (1));
i__19514__auto___23874 = G__23875;
continue;
} else {
}
break;
}

var G__23824 = args23822.length;
switch (G__23824) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23822.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21304__auto___23877 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21304__auto___23877,out){
return (function (){
var f__21305__auto__ = (function (){var switch__21192__auto__ = ((function (c__21304__auto___23877,out){
return (function (state_23848){
var state_val_23849 = (state_23848[(1)]);
if((state_val_23849 === (7))){
var inst_23843 = (state_23848[(2)]);
var state_23848__$1 = state_23848;
var statearr_23850_23878 = state_23848__$1;
(statearr_23850_23878[(2)] = inst_23843);

(statearr_23850_23878[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23849 === (1))){
var inst_23825 = null;
var state_23848__$1 = (function (){var statearr_23851 = state_23848;
(statearr_23851[(7)] = inst_23825);

return statearr_23851;
})();
var statearr_23852_23879 = state_23848__$1;
(statearr_23852_23879[(2)] = null);

(statearr_23852_23879[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23849 === (4))){
var inst_23828 = (state_23848[(8)]);
var inst_23828__$1 = (state_23848[(2)]);
var inst_23829 = (inst_23828__$1 == null);
var inst_23830 = cljs.core.not.call(null,inst_23829);
var state_23848__$1 = (function (){var statearr_23853 = state_23848;
(statearr_23853[(8)] = inst_23828__$1);

return statearr_23853;
})();
if(inst_23830){
var statearr_23854_23880 = state_23848__$1;
(statearr_23854_23880[(1)] = (5));

} else {
var statearr_23855_23881 = state_23848__$1;
(statearr_23855_23881[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23849 === (6))){
var state_23848__$1 = state_23848;
var statearr_23856_23882 = state_23848__$1;
(statearr_23856_23882[(2)] = null);

(statearr_23856_23882[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23849 === (3))){
var inst_23845 = (state_23848[(2)]);
var inst_23846 = cljs.core.async.close_BANG_.call(null,out);
var state_23848__$1 = (function (){var statearr_23857 = state_23848;
(statearr_23857[(9)] = inst_23845);

return statearr_23857;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23848__$1,inst_23846);
} else {
if((state_val_23849 === (2))){
var state_23848__$1 = state_23848;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23848__$1,(4),ch);
} else {
if((state_val_23849 === (11))){
var inst_23828 = (state_23848[(8)]);
var inst_23837 = (state_23848[(2)]);
var inst_23825 = inst_23828;
var state_23848__$1 = (function (){var statearr_23858 = state_23848;
(statearr_23858[(7)] = inst_23825);

(statearr_23858[(10)] = inst_23837);

return statearr_23858;
})();
var statearr_23859_23883 = state_23848__$1;
(statearr_23859_23883[(2)] = null);

(statearr_23859_23883[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23849 === (9))){
var inst_23828 = (state_23848[(8)]);
var state_23848__$1 = state_23848;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23848__$1,(11),out,inst_23828);
} else {
if((state_val_23849 === (5))){
var inst_23825 = (state_23848[(7)]);
var inst_23828 = (state_23848[(8)]);
var inst_23832 = cljs.core._EQ_.call(null,inst_23828,inst_23825);
var state_23848__$1 = state_23848;
if(inst_23832){
var statearr_23861_23884 = state_23848__$1;
(statearr_23861_23884[(1)] = (8));

} else {
var statearr_23862_23885 = state_23848__$1;
(statearr_23862_23885[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23849 === (10))){
var inst_23840 = (state_23848[(2)]);
var state_23848__$1 = state_23848;
var statearr_23863_23886 = state_23848__$1;
(statearr_23863_23886[(2)] = inst_23840);

(statearr_23863_23886[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23849 === (8))){
var inst_23825 = (state_23848[(7)]);
var tmp23860 = inst_23825;
var inst_23825__$1 = tmp23860;
var state_23848__$1 = (function (){var statearr_23864 = state_23848;
(statearr_23864[(7)] = inst_23825__$1);

return statearr_23864;
})();
var statearr_23865_23887 = state_23848__$1;
(statearr_23865_23887[(2)] = null);

(statearr_23865_23887[(1)] = (2));


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
});})(c__21304__auto___23877,out))
;
return ((function (switch__21192__auto__,c__21304__auto___23877,out){
return (function() {
var cljs$core$async$state_machine__21193__auto__ = null;
var cljs$core$async$state_machine__21193__auto____0 = (function (){
var statearr_23869 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23869[(0)] = cljs$core$async$state_machine__21193__auto__);

(statearr_23869[(1)] = (1));

return statearr_23869;
});
var cljs$core$async$state_machine__21193__auto____1 = (function (state_23848){
while(true){
var ret_value__21194__auto__ = (function (){try{while(true){
var result__21195__auto__ = switch__21192__auto__.call(null,state_23848);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21195__auto__;
}
break;
}
}catch (e23870){if((e23870 instanceof Object)){
var ex__21196__auto__ = e23870;
var statearr_23871_23888 = state_23848;
(statearr_23871_23888[(5)] = ex__21196__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23848);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23870;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21194__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23889 = state_23848;
state_23848 = G__23889;
continue;
} else {
return ret_value__21194__auto__;
}
break;
}
});
cljs$core$async$state_machine__21193__auto__ = function(state_23848){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21193__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21193__auto____1.call(this,state_23848);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21193__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21193__auto____0;
cljs$core$async$state_machine__21193__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21193__auto____1;
return cljs$core$async$state_machine__21193__auto__;
})()
;})(switch__21192__auto__,c__21304__auto___23877,out))
})();
var state__21306__auto__ = (function (){var statearr_23872 = f__21305__auto__.call(null);
(statearr_23872[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21304__auto___23877);

return statearr_23872;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21306__auto__);
});})(c__21304__auto___23877,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args23890 = [];
var len__19513__auto___23960 = arguments.length;
var i__19514__auto___23961 = (0);
while(true){
if((i__19514__auto___23961 < len__19513__auto___23960)){
args23890.push((arguments[i__19514__auto___23961]));

var G__23962 = (i__19514__auto___23961 + (1));
i__19514__auto___23961 = G__23962;
continue;
} else {
}
break;
}

var G__23892 = args23890.length;
switch (G__23892) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23890.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21304__auto___23964 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21304__auto___23964,out){
return (function (){
var f__21305__auto__ = (function (){var switch__21192__auto__ = ((function (c__21304__auto___23964,out){
return (function (state_23930){
var state_val_23931 = (state_23930[(1)]);
if((state_val_23931 === (7))){
var inst_23926 = (state_23930[(2)]);
var state_23930__$1 = state_23930;
var statearr_23932_23965 = state_23930__$1;
(statearr_23932_23965[(2)] = inst_23926);

(statearr_23932_23965[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23931 === (1))){
var inst_23893 = (new Array(n));
var inst_23894 = inst_23893;
var inst_23895 = (0);
var state_23930__$1 = (function (){var statearr_23933 = state_23930;
(statearr_23933[(7)] = inst_23894);

(statearr_23933[(8)] = inst_23895);

return statearr_23933;
})();
var statearr_23934_23966 = state_23930__$1;
(statearr_23934_23966[(2)] = null);

(statearr_23934_23966[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23931 === (4))){
var inst_23898 = (state_23930[(9)]);
var inst_23898__$1 = (state_23930[(2)]);
var inst_23899 = (inst_23898__$1 == null);
var inst_23900 = cljs.core.not.call(null,inst_23899);
var state_23930__$1 = (function (){var statearr_23935 = state_23930;
(statearr_23935[(9)] = inst_23898__$1);

return statearr_23935;
})();
if(inst_23900){
var statearr_23936_23967 = state_23930__$1;
(statearr_23936_23967[(1)] = (5));

} else {
var statearr_23937_23968 = state_23930__$1;
(statearr_23937_23968[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23931 === (15))){
var inst_23920 = (state_23930[(2)]);
var state_23930__$1 = state_23930;
var statearr_23938_23969 = state_23930__$1;
(statearr_23938_23969[(2)] = inst_23920);

(statearr_23938_23969[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23931 === (13))){
var state_23930__$1 = state_23930;
var statearr_23939_23970 = state_23930__$1;
(statearr_23939_23970[(2)] = null);

(statearr_23939_23970[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23931 === (6))){
var inst_23895 = (state_23930[(8)]);
var inst_23916 = (inst_23895 > (0));
var state_23930__$1 = state_23930;
if(cljs.core.truth_(inst_23916)){
var statearr_23940_23971 = state_23930__$1;
(statearr_23940_23971[(1)] = (12));

} else {
var statearr_23941_23972 = state_23930__$1;
(statearr_23941_23972[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23931 === (3))){
var inst_23928 = (state_23930[(2)]);
var state_23930__$1 = state_23930;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23930__$1,inst_23928);
} else {
if((state_val_23931 === (12))){
var inst_23894 = (state_23930[(7)]);
var inst_23918 = cljs.core.vec.call(null,inst_23894);
var state_23930__$1 = state_23930;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23930__$1,(15),out,inst_23918);
} else {
if((state_val_23931 === (2))){
var state_23930__$1 = state_23930;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23930__$1,(4),ch);
} else {
if((state_val_23931 === (11))){
var inst_23910 = (state_23930[(2)]);
var inst_23911 = (new Array(n));
var inst_23894 = inst_23911;
var inst_23895 = (0);
var state_23930__$1 = (function (){var statearr_23942 = state_23930;
(statearr_23942[(10)] = inst_23910);

(statearr_23942[(7)] = inst_23894);

(statearr_23942[(8)] = inst_23895);

return statearr_23942;
})();
var statearr_23943_23973 = state_23930__$1;
(statearr_23943_23973[(2)] = null);

(statearr_23943_23973[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23931 === (9))){
var inst_23894 = (state_23930[(7)]);
var inst_23908 = cljs.core.vec.call(null,inst_23894);
var state_23930__$1 = state_23930;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23930__$1,(11),out,inst_23908);
} else {
if((state_val_23931 === (5))){
var inst_23903 = (state_23930[(11)]);
var inst_23894 = (state_23930[(7)]);
var inst_23898 = (state_23930[(9)]);
var inst_23895 = (state_23930[(8)]);
var inst_23902 = (inst_23894[inst_23895] = inst_23898);
var inst_23903__$1 = (inst_23895 + (1));
var inst_23904 = (inst_23903__$1 < n);
var state_23930__$1 = (function (){var statearr_23944 = state_23930;
(statearr_23944[(11)] = inst_23903__$1);

(statearr_23944[(12)] = inst_23902);

return statearr_23944;
})();
if(cljs.core.truth_(inst_23904)){
var statearr_23945_23974 = state_23930__$1;
(statearr_23945_23974[(1)] = (8));

} else {
var statearr_23946_23975 = state_23930__$1;
(statearr_23946_23975[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23931 === (14))){
var inst_23923 = (state_23930[(2)]);
var inst_23924 = cljs.core.async.close_BANG_.call(null,out);
var state_23930__$1 = (function (){var statearr_23948 = state_23930;
(statearr_23948[(13)] = inst_23923);

return statearr_23948;
})();
var statearr_23949_23976 = state_23930__$1;
(statearr_23949_23976[(2)] = inst_23924);

(statearr_23949_23976[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23931 === (10))){
var inst_23914 = (state_23930[(2)]);
var state_23930__$1 = state_23930;
var statearr_23950_23977 = state_23930__$1;
(statearr_23950_23977[(2)] = inst_23914);

(statearr_23950_23977[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23931 === (8))){
var inst_23903 = (state_23930[(11)]);
var inst_23894 = (state_23930[(7)]);
var tmp23947 = inst_23894;
var inst_23894__$1 = tmp23947;
var inst_23895 = inst_23903;
var state_23930__$1 = (function (){var statearr_23951 = state_23930;
(statearr_23951[(7)] = inst_23894__$1);

(statearr_23951[(8)] = inst_23895);

return statearr_23951;
})();
var statearr_23952_23978 = state_23930__$1;
(statearr_23952_23978[(2)] = null);

(statearr_23952_23978[(1)] = (2));


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
});})(c__21304__auto___23964,out))
;
return ((function (switch__21192__auto__,c__21304__auto___23964,out){
return (function() {
var cljs$core$async$state_machine__21193__auto__ = null;
var cljs$core$async$state_machine__21193__auto____0 = (function (){
var statearr_23956 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23956[(0)] = cljs$core$async$state_machine__21193__auto__);

(statearr_23956[(1)] = (1));

return statearr_23956;
});
var cljs$core$async$state_machine__21193__auto____1 = (function (state_23930){
while(true){
var ret_value__21194__auto__ = (function (){try{while(true){
var result__21195__auto__ = switch__21192__auto__.call(null,state_23930);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21195__auto__;
}
break;
}
}catch (e23957){if((e23957 instanceof Object)){
var ex__21196__auto__ = e23957;
var statearr_23958_23979 = state_23930;
(statearr_23958_23979[(5)] = ex__21196__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23930);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23957;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21194__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23980 = state_23930;
state_23930 = G__23980;
continue;
} else {
return ret_value__21194__auto__;
}
break;
}
});
cljs$core$async$state_machine__21193__auto__ = function(state_23930){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21193__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21193__auto____1.call(this,state_23930);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21193__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21193__auto____0;
cljs$core$async$state_machine__21193__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21193__auto____1;
return cljs$core$async$state_machine__21193__auto__;
})()
;})(switch__21192__auto__,c__21304__auto___23964,out))
})();
var state__21306__auto__ = (function (){var statearr_23959 = f__21305__auto__.call(null);
(statearr_23959[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21304__auto___23964);

return statearr_23959;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21306__auto__);
});})(c__21304__auto___23964,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args23981 = [];
var len__19513__auto___24055 = arguments.length;
var i__19514__auto___24056 = (0);
while(true){
if((i__19514__auto___24056 < len__19513__auto___24055)){
args23981.push((arguments[i__19514__auto___24056]));

var G__24057 = (i__19514__auto___24056 + (1));
i__19514__auto___24056 = G__24057;
continue;
} else {
}
break;
}

var G__23983 = args23981.length;
switch (G__23983) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23981.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21304__auto___24059 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21304__auto___24059,out){
return (function (){
var f__21305__auto__ = (function (){var switch__21192__auto__ = ((function (c__21304__auto___24059,out){
return (function (state_24025){
var state_val_24026 = (state_24025[(1)]);
if((state_val_24026 === (7))){
var inst_24021 = (state_24025[(2)]);
var state_24025__$1 = state_24025;
var statearr_24027_24060 = state_24025__$1;
(statearr_24027_24060[(2)] = inst_24021);

(statearr_24027_24060[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24026 === (1))){
var inst_23984 = [];
var inst_23985 = inst_23984;
var inst_23986 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_24025__$1 = (function (){var statearr_24028 = state_24025;
(statearr_24028[(7)] = inst_23986);

(statearr_24028[(8)] = inst_23985);

return statearr_24028;
})();
var statearr_24029_24061 = state_24025__$1;
(statearr_24029_24061[(2)] = null);

(statearr_24029_24061[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24026 === (4))){
var inst_23989 = (state_24025[(9)]);
var inst_23989__$1 = (state_24025[(2)]);
var inst_23990 = (inst_23989__$1 == null);
var inst_23991 = cljs.core.not.call(null,inst_23990);
var state_24025__$1 = (function (){var statearr_24030 = state_24025;
(statearr_24030[(9)] = inst_23989__$1);

return statearr_24030;
})();
if(inst_23991){
var statearr_24031_24062 = state_24025__$1;
(statearr_24031_24062[(1)] = (5));

} else {
var statearr_24032_24063 = state_24025__$1;
(statearr_24032_24063[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24026 === (15))){
var inst_24015 = (state_24025[(2)]);
var state_24025__$1 = state_24025;
var statearr_24033_24064 = state_24025__$1;
(statearr_24033_24064[(2)] = inst_24015);

(statearr_24033_24064[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24026 === (13))){
var state_24025__$1 = state_24025;
var statearr_24034_24065 = state_24025__$1;
(statearr_24034_24065[(2)] = null);

(statearr_24034_24065[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24026 === (6))){
var inst_23985 = (state_24025[(8)]);
var inst_24010 = inst_23985.length;
var inst_24011 = (inst_24010 > (0));
var state_24025__$1 = state_24025;
if(cljs.core.truth_(inst_24011)){
var statearr_24035_24066 = state_24025__$1;
(statearr_24035_24066[(1)] = (12));

} else {
var statearr_24036_24067 = state_24025__$1;
(statearr_24036_24067[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24026 === (3))){
var inst_24023 = (state_24025[(2)]);
var state_24025__$1 = state_24025;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24025__$1,inst_24023);
} else {
if((state_val_24026 === (12))){
var inst_23985 = (state_24025[(8)]);
var inst_24013 = cljs.core.vec.call(null,inst_23985);
var state_24025__$1 = state_24025;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24025__$1,(15),out,inst_24013);
} else {
if((state_val_24026 === (2))){
var state_24025__$1 = state_24025;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24025__$1,(4),ch);
} else {
if((state_val_24026 === (11))){
var inst_23993 = (state_24025[(10)]);
var inst_23989 = (state_24025[(9)]);
var inst_24003 = (state_24025[(2)]);
var inst_24004 = [];
var inst_24005 = inst_24004.push(inst_23989);
var inst_23985 = inst_24004;
var inst_23986 = inst_23993;
var state_24025__$1 = (function (){var statearr_24037 = state_24025;
(statearr_24037[(7)] = inst_23986);

(statearr_24037[(8)] = inst_23985);

(statearr_24037[(11)] = inst_24003);

(statearr_24037[(12)] = inst_24005);

return statearr_24037;
})();
var statearr_24038_24068 = state_24025__$1;
(statearr_24038_24068[(2)] = null);

(statearr_24038_24068[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24026 === (9))){
var inst_23985 = (state_24025[(8)]);
var inst_24001 = cljs.core.vec.call(null,inst_23985);
var state_24025__$1 = state_24025;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24025__$1,(11),out,inst_24001);
} else {
if((state_val_24026 === (5))){
var inst_23986 = (state_24025[(7)]);
var inst_23993 = (state_24025[(10)]);
var inst_23989 = (state_24025[(9)]);
var inst_23993__$1 = f.call(null,inst_23989);
var inst_23994 = cljs.core._EQ_.call(null,inst_23993__$1,inst_23986);
var inst_23995 = cljs.core.keyword_identical_QMARK_.call(null,inst_23986,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_23996 = (inst_23994) || (inst_23995);
var state_24025__$1 = (function (){var statearr_24039 = state_24025;
(statearr_24039[(10)] = inst_23993__$1);

return statearr_24039;
})();
if(cljs.core.truth_(inst_23996)){
var statearr_24040_24069 = state_24025__$1;
(statearr_24040_24069[(1)] = (8));

} else {
var statearr_24041_24070 = state_24025__$1;
(statearr_24041_24070[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24026 === (14))){
var inst_24018 = (state_24025[(2)]);
var inst_24019 = cljs.core.async.close_BANG_.call(null,out);
var state_24025__$1 = (function (){var statearr_24043 = state_24025;
(statearr_24043[(13)] = inst_24018);

return statearr_24043;
})();
var statearr_24044_24071 = state_24025__$1;
(statearr_24044_24071[(2)] = inst_24019);

(statearr_24044_24071[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24026 === (10))){
var inst_24008 = (state_24025[(2)]);
var state_24025__$1 = state_24025;
var statearr_24045_24072 = state_24025__$1;
(statearr_24045_24072[(2)] = inst_24008);

(statearr_24045_24072[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24026 === (8))){
var inst_23985 = (state_24025[(8)]);
var inst_23993 = (state_24025[(10)]);
var inst_23989 = (state_24025[(9)]);
var inst_23998 = inst_23985.push(inst_23989);
var tmp24042 = inst_23985;
var inst_23985__$1 = tmp24042;
var inst_23986 = inst_23993;
var state_24025__$1 = (function (){var statearr_24046 = state_24025;
(statearr_24046[(7)] = inst_23986);

(statearr_24046[(14)] = inst_23998);

(statearr_24046[(8)] = inst_23985__$1);

return statearr_24046;
})();
var statearr_24047_24073 = state_24025__$1;
(statearr_24047_24073[(2)] = null);

(statearr_24047_24073[(1)] = (2));


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
});})(c__21304__auto___24059,out))
;
return ((function (switch__21192__auto__,c__21304__auto___24059,out){
return (function() {
var cljs$core$async$state_machine__21193__auto__ = null;
var cljs$core$async$state_machine__21193__auto____0 = (function (){
var statearr_24051 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24051[(0)] = cljs$core$async$state_machine__21193__auto__);

(statearr_24051[(1)] = (1));

return statearr_24051;
});
var cljs$core$async$state_machine__21193__auto____1 = (function (state_24025){
while(true){
var ret_value__21194__auto__ = (function (){try{while(true){
var result__21195__auto__ = switch__21192__auto__.call(null,state_24025);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21195__auto__;
}
break;
}
}catch (e24052){if((e24052 instanceof Object)){
var ex__21196__auto__ = e24052;
var statearr_24053_24074 = state_24025;
(statearr_24053_24074[(5)] = ex__21196__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24025);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24052;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21194__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24075 = state_24025;
state_24025 = G__24075;
continue;
} else {
return ret_value__21194__auto__;
}
break;
}
});
cljs$core$async$state_machine__21193__auto__ = function(state_24025){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21193__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21193__auto____1.call(this,state_24025);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21193__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21193__auto____0;
cljs$core$async$state_machine__21193__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21193__auto____1;
return cljs$core$async$state_machine__21193__auto__;
})()
;})(switch__21192__auto__,c__21304__auto___24059,out))
})();
var state__21306__auto__ = (function (){var statearr_24054 = f__21305__auto__.call(null);
(statearr_24054[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21304__auto___24059);

return statearr_24054;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21306__auto__);
});})(c__21304__auto___24059,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1463713699976