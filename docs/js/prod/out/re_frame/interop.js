// Compiled by ClojureScript 1.9.227 {}
goog.provide('re_frame.interop');
goog.require('cljs.core');
goog.require('goog.async.nextTick');
goog.require('reagent.core');
goog.require('reagent.ratom');
re_frame.interop.next_tick = goog.async.nextTick;
re_frame.interop.empty_queue = cljs.core.into.call(null,cljs.core.PersistentQueue.EMPTY,cljs.core.PersistentVector.EMPTY);
re_frame.interop.after_render = reagent.core.after_render;
/**
 * @define {boolean}
 */
re_frame.interop.debug_enabled_QMARK_ = goog.DEBUG;
re_frame.interop.ratom = (function re_frame$interop$ratom(x){
return reagent.core.atom.call(null,x);
});
re_frame.interop.ratom_QMARK_ = (function re_frame$interop$ratom_QMARK_(x){
if(!((x == null))){
if((false) || (x.reagent$ratom$IReactiveAtom$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,reagent.ratom.IReactiveAtom,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,reagent.ratom.IReactiveAtom,x);
}
});
re_frame.interop.deref_QMARK_ = (function re_frame$interop$deref_QMARK_(x){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition0$ & (32768))) || (x.cljs$core$IDeref$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,x);
}
});
re_frame.interop.make_reaction = (function re_frame$interop$make_reaction(f){
return reagent.ratom.make_reaction.call(null,f);
});
re_frame.interop.add_on_dispose_BANG_ = (function re_frame$interop$add_on_dispose_BANG_(a_ratom,f){
return reagent.ratom.add_on_dispose_BANG_.call(null,a_ratom,f);
});
re_frame.interop.dispose_BANG_ = (function re_frame$interop$dispose_BANG_(a_ratom){
return reagent.ratom.dispose_BANG_.call(null,a_ratom);
});
re_frame.interop.set_timeout_BANG_ = (function re_frame$interop$set_timeout_BANG_(f,ms){
return setTimeout(f,ms);
});
