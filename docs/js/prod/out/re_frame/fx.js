// Compiled by ClojureScript 1.9.227 {}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.fx.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.register = cljs.core.partial.call(null,re_frame.registrar.register_handler,re_frame.fx.kind);
/**
 * An interceptor which actions a `context's` (side) `:effects`.
 * 
 *   For each key in the `:effects` map, call the `effects handler` previously
 *   registered using `reg-fx`.
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 *   call the registered effects handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p__19181){
var vec__19182 = p__19181;
var k = cljs.core.nth.call(null,vec__19182,(0),null);
var value = cljs.core.nth.call(null,vec__19182,(1),null);
var temp__4655__auto__ = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,k,true);
if(cljs.core.truth_(temp__4655__auto__)){
var effect_fn = temp__4655__auto__;
return effect_fn.call(null,value);
} else {
return null;
}
}),new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context)));
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__19185 = cljs.core.seq.call(null,value);
var chunk__19186 = null;
var count__19187 = (0);
var i__19188 = (0);
while(true){
if((i__19188 < count__19187)){
var map__19189 = cljs.core._nth.call(null,chunk__19186,i__19188);
var map__19189__$1 = ((((!((map__19189 == null)))?((((map__19189.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19189.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19189):map__19189);
var effect = map__19189__$1;
var ms = cljs.core.get.call(null,map__19189__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__19189__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value: ",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__19185,chunk__19186,count__19187,i__19188,map__19189,map__19189__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__19185,chunk__19186,count__19187,i__19188,map__19189,map__19189__$1,effect,ms,dispatch))
,ms);
}

var G__19193 = seq__19185;
var G__19194 = chunk__19186;
var G__19195 = count__19187;
var G__19196 = (i__19188 + (1));
seq__19185 = G__19193;
chunk__19186 = G__19194;
count__19187 = G__19195;
i__19188 = G__19196;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__19185);
if(temp__4657__auto__){
var seq__19185__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19185__$1)){
var c__7215__auto__ = cljs.core.chunk_first.call(null,seq__19185__$1);
var G__19197 = cljs.core.chunk_rest.call(null,seq__19185__$1);
var G__19198 = c__7215__auto__;
var G__19199 = cljs.core.count.call(null,c__7215__auto__);
var G__19200 = (0);
seq__19185 = G__19197;
chunk__19186 = G__19198;
count__19187 = G__19199;
i__19188 = G__19200;
continue;
} else {
var map__19191 = cljs.core.first.call(null,seq__19185__$1);
var map__19191__$1 = ((((!((map__19191 == null)))?((((map__19191.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19191.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19191):map__19191);
var effect = map__19191__$1;
var ms = cljs.core.get.call(null,map__19191__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__19191__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value: ",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__19185,chunk__19186,count__19187,i__19188,map__19191,map__19191__$1,effect,ms,dispatch,seq__19185__$1,temp__4657__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__19185,chunk__19186,count__19187,i__19188,map__19191,map__19191__$1,effect,ms,dispatch,seq__19185__$1,temp__4657__auto__))
,ms);
}

var G__19201 = cljs.core.next.call(null,seq__19185__$1);
var G__19202 = null;
var G__19203 = (0);
var G__19204 = (0);
seq__19185 = G__19201;
chunk__19186 = G__19202;
count__19187 = G__19203;
i__19188 = G__19204;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if(!(cljs.core.vector_QMARK_.call(null,value))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch value. Expected a vector, but got: ",value);
} else {
return re_frame.router.dispatch.call(null,value);
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if(!(cljs.core.sequential_QMARK_.call(null,value))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-n value. Expected a collection, got got: ",value);
} else {
}

var seq__19205 = cljs.core.seq.call(null,value);
var chunk__19206 = null;
var count__19207 = (0);
var i__19208 = (0);
while(true){
if((i__19208 < count__19207)){
var event = cljs.core._nth.call(null,chunk__19206,i__19208);
re_frame.router.dispatch.call(null,event);

var G__19209 = seq__19205;
var G__19210 = chunk__19206;
var G__19211 = count__19207;
var G__19212 = (i__19208 + (1));
seq__19205 = G__19209;
chunk__19206 = G__19210;
count__19207 = G__19211;
i__19208 = G__19212;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__19205);
if(temp__4657__auto__){
var seq__19205__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19205__$1)){
var c__7215__auto__ = cljs.core.chunk_first.call(null,seq__19205__$1);
var G__19213 = cljs.core.chunk_rest.call(null,seq__19205__$1);
var G__19214 = c__7215__auto__;
var G__19215 = cljs.core.count.call(null,c__7215__auto__);
var G__19216 = (0);
seq__19205 = G__19213;
chunk__19206 = G__19214;
count__19207 = G__19215;
i__19208 = G__19216;
continue;
} else {
var event = cljs.core.first.call(null,seq__19205__$1);
re_frame.router.dispatch.call(null,event);

var G__19217 = cljs.core.next.call(null,seq__19205__$1);
var G__19218 = null;
var G__19219 = (0);
var G__19220 = (0);
seq__19205 = G__19217;
chunk__19206 = G__19218;
count__19207 = G__19219;
i__19208 = G__19220;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.call(null,re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_.call(null,value)){
return cljs.core.doall.call(null,cljs.core.map.call(null,clear_event,value));
} else {
return clear_event.call(null,value);
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"db","db",993250759),(function (value){
return cljs.core.reset_BANG_.call(null,re_frame.db.app_db,value);
}));
