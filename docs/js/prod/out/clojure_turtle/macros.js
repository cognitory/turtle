// Compiled by ClojureScript 1.9.227 {}
goog.provide('clojure_turtle.macros');
goog.require('cljs.core');
/**
 * This macro was created to substitute for the purpose served by the square brackets in Logo
 *   in a call to REPEAT.  This macro returns a no-argument function that, when invoked, executes
 *   the commands described in the body inside the macro call/form.
 *   (Haskell programmers refer to the type of function returned a 'thunk'.)
 */
clojure_turtle.macros.all = (function clojure_turtle$macros$all(var_args){
var args__7486__auto__ = [];
var len__7479__auto___11727 = arguments.length;
var i__7480__auto___11728 = (0);
while(true){
if((i__7480__auto___11728 < len__7479__auto___11727)){
args__7486__auto__.push((arguments[i__7480__auto___11728]));

var G__11729 = (i__7480__auto___11728 + (1));
i__7480__auto___11728 = G__11729;
continue;
} else {
}
break;
}

var argseq__7487__auto__ = ((((2) < args__7486__auto__.length))?(new cljs.core.IndexedSeq(args__7486__auto__.slice((2)),(0),null)):null);
return clojure_turtle.macros.all.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7487__auto__);
});

clojure_turtle.macros.all.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null)),(function (){var x__7238__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7238__auto__);
})(),(function (){var x__7238__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7238__auto__);
})())));
});

clojure_turtle.macros.all.cljs$lang$maxFixedArity = (2);

clojure_turtle.macros.all.cljs$lang$applyTo = (function (seq11724){
var G__11725 = cljs.core.first.call(null,seq11724);
var seq11724__$1 = cljs.core.next.call(null,seq11724);
var G__11726 = cljs.core.first.call(null,seq11724__$1);
var seq11724__$2 = cljs.core.next.call(null,seq11724__$1);
return clojure_turtle.macros.all.cljs$core$IFn$_invoke$arity$variadic(G__11725,G__11726,seq11724__$2);
});


clojure_turtle.macros.all.cljs$lang$macro = true;
/**
 * A macro to translate the purpose of the Logo REPEAT function.
 */
clojure_turtle.macros.repeat = (function clojure_turtle$macros$repeat(var_args){
var args__7486__auto__ = [];
var len__7479__auto___11735 = arguments.length;
var i__7480__auto___11736 = (0);
while(true){
if((i__7480__auto___11736 < len__7479__auto___11735)){
args__7486__auto__.push((arguments[i__7480__auto___11736]));

var G__11737 = (i__7480__auto___11736 + (1));
i__7480__auto___11736 = G__11737;
continue;
} else {
}
break;
}

var argseq__7487__auto__ = ((((3) < args__7486__auto__.length))?(new cljs.core.IndexedSeq(args__7486__auto__.slice((3)),(0),null)):null);
return clojure_turtle.macros.repeat.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7487__auto__);
});

clojure_turtle.macros.repeat.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,n,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),(function (){var x__7238__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"states__11730__auto__","states__11730__auto__",-131320652,null)),(function (){var x__7238__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","repeatedly","cljs.core/repeatedly",-1346003388,null)),(function (){var x__7238__auto__ = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7238__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7238__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7238__auto__);
})(),(function (){var x__7238__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","dorun","cljs.core/dorun",1487325315,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"states__11730__auto__","states__11730__auto__",-131320652,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7238__auto__);
})(),(function (){var x__7238__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","last","cljs.core/last",1273893704,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"states__11730__auto__","states__11730__auto__",-131320652,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7238__auto__);
})())));
});

clojure_turtle.macros.repeat.cljs$lang$maxFixedArity = (3);

clojure_turtle.macros.repeat.cljs$lang$applyTo = (function (seq11731){
var G__11732 = cljs.core.first.call(null,seq11731);
var seq11731__$1 = cljs.core.next.call(null,seq11731);
var G__11733 = cljs.core.first.call(null,seq11731__$1);
var seq11731__$2 = cljs.core.next.call(null,seq11731__$1);
var G__11734 = cljs.core.first.call(null,seq11731__$2);
var seq11731__$3 = cljs.core.next.call(null,seq11731__$2);
return clojure_turtle.macros.repeat.cljs$core$IFn$_invoke$arity$variadic(G__11732,G__11733,G__11734,seq11731__$3);
});


clojure_turtle.macros.repeat.cljs$lang$macro = true;
