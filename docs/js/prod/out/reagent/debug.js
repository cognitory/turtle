// Compiled by ClojureScript 1.9.227 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__12467__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__12467 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12468__i = 0, G__12468__a = new Array(arguments.length -  0);
while (G__12468__i < G__12468__a.length) {G__12468__a[G__12468__i] = arguments[G__12468__i + 0]; ++G__12468__i;}
  args = new cljs.core.IndexedSeq(G__12468__a,0);
} 
return G__12467__delegate.call(this,args);};
G__12467.cljs$lang$maxFixedArity = 0;
G__12467.cljs$lang$applyTo = (function (arglist__12469){
var args = cljs.core.seq(arglist__12469);
return G__12467__delegate(args);
});
G__12467.cljs$core$IFn$_invoke$arity$variadic = G__12467__delegate;
return G__12467;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__12470__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__12470 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12471__i = 0, G__12471__a = new Array(arguments.length -  0);
while (G__12471__i < G__12471__a.length) {G__12471__a[G__12471__i] = arguments[G__12471__i + 0]; ++G__12471__i;}
  args = new cljs.core.IndexedSeq(G__12471__a,0);
} 
return G__12470__delegate.call(this,args);};
G__12470.cljs$lang$maxFixedArity = 0;
G__12470.cljs$lang$applyTo = (function (arglist__12472){
var args = cljs.core.seq(arglist__12472);
return G__12470__delegate(args);
});
G__12470.cljs$core$IFn$_invoke$arity$variadic = G__12470__delegate;
return G__12470;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});
