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
var len__7479__auto___19226 = arguments.length;
var i__7480__auto___19227 = (0);
while(true){
if((i__7480__auto___19227 < len__7479__auto___19226)){
args__7486__auto__.push((arguments[i__7480__auto___19227]));

var G__19228 = (i__7480__auto___19227 + (1));
i__7480__auto___19227 = G__19228;
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

clojure_turtle.macros.all.cljs$lang$applyTo = (function (seq19223){
var G__19224 = cljs.core.first.call(null,seq19223);
var seq19223__$1 = cljs.core.next.call(null,seq19223);
var G__19225 = cljs.core.first.call(null,seq19223__$1);
var seq19223__$2 = cljs.core.next.call(null,seq19223__$1);
return clojure_turtle.macros.all.cljs$core$IFn$_invoke$arity$variadic(G__19224,G__19225,seq19223__$2);
});


clojure_turtle.macros.all.cljs$lang$macro = true;
/**
 * A macro to translate the purpose of the Logo REPEAT function.
 */
clojure_turtle.macros.repeat = (function clojure_turtle$macros$repeat(var_args){
var args__7486__auto__ = [];
var len__7479__auto___19234 = arguments.length;
var i__7480__auto___19235 = (0);
while(true){
if((i__7480__auto___19235 < len__7479__auto___19234)){
args__7486__auto__.push((arguments[i__7480__auto___19235]));

var G__19236 = (i__7480__auto___19235 + (1));
i__7480__auto___19235 = G__19236;
continue;
} else {
}
break;
}

var argseq__7487__auto__ = ((((3) < args__7486__auto__.length))?(new cljs.core.IndexedSeq(args__7486__auto__.slice((3)),(0),null)):null);
return clojure_turtle.macros.repeat.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7487__auto__);
});

clojure_turtle.macros.repeat.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,n,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),(function (){var x__7238__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"states__19229__auto__","states__19229__auto__",-410952700,null)),(function (){var x__7238__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","repeatedly","cljs.core/repeatedly",-1346003388,null)),(function (){var x__7238__auto__ = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7238__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7238__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7238__auto__);
})(),(function (){var x__7238__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","dorun","cljs.core/dorun",1487325315,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"states__19229__auto__","states__19229__auto__",-410952700,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7238__auto__);
})(),(function (){var x__7238__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","last","cljs.core/last",1273893704,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"states__19229__auto__","states__19229__auto__",-410952700,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7238__auto__);
})())));
});

clojure_turtle.macros.repeat.cljs$lang$maxFixedArity = (3);

clojure_turtle.macros.repeat.cljs$lang$applyTo = (function (seq19230){
var G__19231 = cljs.core.first.call(null,seq19230);
var seq19230__$1 = cljs.core.next.call(null,seq19230);
var G__19232 = cljs.core.first.call(null,seq19230__$1);
var seq19230__$2 = cljs.core.next.call(null,seq19230__$1);
var G__19233 = cljs.core.first.call(null,seq19230__$2);
var seq19230__$3 = cljs.core.next.call(null,seq19230__$2);
return clojure_turtle.macros.repeat.cljs$core$IFn$_invoke$arity$variadic(G__19231,G__19232,G__19233,seq19230__$3);
});


clojure_turtle.macros.repeat.cljs$lang$macro = true;
