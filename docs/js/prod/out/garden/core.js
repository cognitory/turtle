// Compiled by ClojureScript 1.9.227 {}
goog.provide('garden.core');
goog.require('cljs.core');
goog.require('garden.compiler');
/**
 * Convert a variable number of Clojure data structure to a string of
 *   CSS. The first argument may be a list of flags for the compiler.
 */
garden.core.css = (function garden$core$css(var_args){
var args__7486__auto__ = [];
var len__7479__auto___21159 = arguments.length;
var i__7480__auto___21160 = (0);
while(true){
if((i__7480__auto___21160 < len__7479__auto___21159)){
args__7486__auto__.push((arguments[i__7480__auto___21160]));

var G__21161 = (i__7480__auto___21160 + (1));
i__7480__auto___21160 = G__21161;
continue;
} else {
}
break;
}

var argseq__7487__auto__ = ((((0) < args__7486__auto__.length))?(new cljs.core.IndexedSeq(args__7486__auto__.slice((0)),(0),null)):null);
return garden.core.css.cljs$core$IFn$_invoke$arity$variadic(argseq__7487__auto__);
});

garden.core.css.cljs$core$IFn$_invoke$arity$variadic = (function (rules){
return cljs.core.apply.call(null,garden.compiler.compile_css,rules);
});

garden.core.css.cljs$lang$maxFixedArity = (0);

garden.core.css.cljs$lang$applyTo = (function (seq21158){
return garden.core.css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21158));
});

/**
 * Convert a variable number of maps into a string of CSS for use with
 *   the HTML `style` attribute.
 */
garden.core.style = (function garden$core$style(var_args){
var args__7486__auto__ = [];
var len__7479__auto___21163 = arguments.length;
var i__7480__auto___21164 = (0);
while(true){
if((i__7480__auto___21164 < len__7479__auto___21163)){
args__7486__auto__.push((arguments[i__7480__auto___21164]));

var G__21165 = (i__7480__auto___21164 + (1));
i__7480__auto___21164 = G__21165;
continue;
} else {
}
break;
}

var argseq__7487__auto__ = ((((0) < args__7486__auto__.length))?(new cljs.core.IndexedSeq(args__7486__auto__.slice((0)),(0),null)):null);
return garden.core.style.cljs$core$IFn$_invoke$arity$variadic(argseq__7487__auto__);
});

garden.core.style.cljs$core$IFn$_invoke$arity$variadic = (function (maps){
return garden.compiler.compile_style.call(null,maps);
});

garden.core.style.cljs$lang$maxFixedArity = (0);

garden.core.style.cljs$lang$applyTo = (function (seq21162){
return garden.core.style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21162));
});

