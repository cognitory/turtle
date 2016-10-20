// Compiled by ClojureScript 1.9.227 {}
goog.provide('garden.util');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('garden.types');
goog.require('goog.string');
goog.require('goog.string.format');
/**
 * Formats a string using goog.string.format.
 */
garden.util.format = (function garden$util$format(var_args){
var args__7486__auto__ = [];
var len__7479__auto___16618 = arguments.length;
var i__7480__auto___16619 = (0);
while(true){
if((i__7480__auto___16619 < len__7479__auto___16618)){
args__7486__auto__.push((arguments[i__7480__auto___16619]));

var G__16620 = (i__7480__auto___16619 + (1));
i__7480__auto___16619 = G__16620;
continue;
} else {
}
break;
}

var argseq__7487__auto__ = ((((1) < args__7486__auto__.length))?(new cljs.core.IndexedSeq(args__7486__auto__.slice((1)),(0),null)):null);
return garden.util.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7487__auto__);
});

garden.util.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return cljs.core.apply.call(null,goog.string.format,fmt,args);
});

garden.util.format.cljs$lang$maxFixedArity = (1);

garden.util.format.cljs$lang$applyTo = (function (seq16616){
var G__16617 = cljs.core.first.call(null,seq16616);
var seq16616__$1 = cljs.core.next.call(null,seq16616);
return garden.util.format.cljs$core$IFn$_invoke$arity$variadic(G__16617,seq16616__$1);
});


/**
 * @interface
 */
garden.util.ToString = function(){};

/**
 * Convert a value into a string.
 */
garden.util.to_str = (function garden$util$to_str(this$){
if((!((this$ == null))) && (!((this$.garden$util$ToString$to_str$arity$1 == null)))){
return this$.garden$util$ToString$to_str$arity$1(this$);
} else {
var x__7067__auto__ = (((this$ == null))?null:this$);
var m__7068__auto__ = (garden.util.to_str[goog.typeOf(x__7067__auto__)]);
if(!((m__7068__auto__ == null))){
return m__7068__auto__.call(null,this$);
} else {
var m__7068__auto____$1 = (garden.util.to_str["_"]);
if(!((m__7068__auto____$1 == null))){
return m__7068__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"ToString.to-str",this$);
}
}
}
});

cljs.core.Keyword.prototype.garden$util$ToString$ = true;

cljs.core.Keyword.prototype.garden$util$ToString$to_str$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.name.call(null,this$__$1);
});

(garden.util.ToString["_"] = true);

(garden.util.to_str["_"] = (function (this$){
return [cljs.core.str(this$)].join('');
}));

(garden.util.ToString["null"] = true);

(garden.util.to_str["null"] = (function (this$){
return "";
}));
/**
 * Convert a variable number of values into strings.
 */
garden.util.as_str = (function garden$util$as_str(var_args){
var args__7486__auto__ = [];
var len__7479__auto___16622 = arguments.length;
var i__7480__auto___16623 = (0);
while(true){
if((i__7480__auto___16623 < len__7479__auto___16622)){
args__7486__auto__.push((arguments[i__7480__auto___16623]));

var G__16624 = (i__7480__auto___16623 + (1));
i__7480__auto___16623 = G__16624;
continue;
} else {
}
break;
}

var argseq__7487__auto__ = ((((0) < args__7486__auto__.length))?(new cljs.core.IndexedSeq(args__7486__auto__.slice((0)),(0),null)):null);
return garden.util.as_str.cljs$core$IFn$_invoke$arity$variadic(argseq__7487__auto__);
});

garden.util.as_str.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,garden.util.to_str,args));
});

garden.util.as_str.cljs$lang$maxFixedArity = (0);

garden.util.as_str.cljs$lang$applyTo = (function (seq16621){
return garden.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16621));
});

/**
 * Convert a string to an integer with optional base.
 */
garden.util.string__GT_int = (function garden$util$string__GT_int(var_args){
var args__7486__auto__ = [];
var len__7479__auto___16631 = arguments.length;
var i__7480__auto___16632 = (0);
while(true){
if((i__7480__auto___16632 < len__7479__auto___16631)){
args__7486__auto__.push((arguments[i__7480__auto___16632]));

var G__16633 = (i__7480__auto___16632 + (1));
i__7480__auto___16632 = G__16633;
continue;
} else {
}
break;
}

var argseq__7487__auto__ = ((((1) < args__7486__auto__.length))?(new cljs.core.IndexedSeq(args__7486__auto__.slice((1)),(0),null)):null);
return garden.util.string__GT_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7487__auto__);
});

garden.util.string__GT_int.cljs$core$IFn$_invoke$arity$variadic = (function (s,p__16627){
var vec__16628 = p__16627;
var radix = cljs.core.nth.call(null,vec__16628,(0),null);
var radix__$1 = (function (){var or__6404__auto__ = radix;
if(cljs.core.truth_(or__6404__auto__)){
return or__6404__auto__;
} else {
return (10);
}
})();
return parseInt(s,radix__$1);
});

garden.util.string__GT_int.cljs$lang$maxFixedArity = (1);

garden.util.string__GT_int.cljs$lang$applyTo = (function (seq16625){
var G__16626 = cljs.core.first.call(null,seq16625);
var seq16625__$1 = cljs.core.next.call(null,seq16625);
return garden.util.string__GT_int.cljs$core$IFn$_invoke$arity$variadic(G__16626,seq16625__$1);
});

/**
 * Convert an integer to a string with optional base.
 */
garden.util.int__GT_string = (function garden$util$int__GT_string(var_args){
var args__7486__auto__ = [];
var len__7479__auto___16640 = arguments.length;
var i__7480__auto___16641 = (0);
while(true){
if((i__7480__auto___16641 < len__7479__auto___16640)){
args__7486__auto__.push((arguments[i__7480__auto___16641]));

var G__16642 = (i__7480__auto___16641 + (1));
i__7480__auto___16641 = G__16642;
continue;
} else {
}
break;
}

var argseq__7487__auto__ = ((((1) < args__7486__auto__.length))?(new cljs.core.IndexedSeq(args__7486__auto__.slice((1)),(0),null)):null);
return garden.util.int__GT_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7487__auto__);
});

garden.util.int__GT_string.cljs$core$IFn$_invoke$arity$variadic = (function (i,p__16636){
var vec__16637 = p__16636;
var radix = cljs.core.nth.call(null,vec__16637,(0),null);
var radix__$1 = (function (){var or__6404__auto__ = radix;
if(cljs.core.truth_(or__6404__auto__)){
return or__6404__auto__;
} else {
return (10);
}
})();
return i.toString(radix__$1);
});

garden.util.int__GT_string.cljs$lang$maxFixedArity = (1);

garden.util.int__GT_string.cljs$lang$applyTo = (function (seq16634){
var G__16635 = cljs.core.first.call(null,seq16634);
var seq16634__$1 = cljs.core.next.call(null,seq16634);
return garden.util.int__GT_string.cljs$core$IFn$_invoke$arity$variadic(G__16635,seq16634__$1);
});

/**
 * Return a space separated list of values.
 */
garden.util.space_join = (function garden$util$space_join(xs){
return clojure.string.join.call(null," ",cljs.core.map.call(null,garden.util.to_str,xs));
});
/**
 * Return a comma separated list of values. Subsequences are joined with
 * spaces.
 */
garden.util.comma_join = (function garden$util$comma_join(xs){
var ys = (function (){var iter__7184__auto__ = (function garden$util$comma_join_$_iter__16647(s__16648){
return (new cljs.core.LazySeq(null,(function (){
var s__16648__$1 = s__16648;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__16648__$1);
if(temp__4657__auto__){
var s__16648__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__16648__$2)){
var c__7182__auto__ = cljs.core.chunk_first.call(null,s__16648__$2);
var size__7183__auto__ = cljs.core.count.call(null,c__7182__auto__);
var b__16650 = cljs.core.chunk_buffer.call(null,size__7183__auto__);
if((function (){var i__16649 = (0);
while(true){
if((i__16649 < size__7183__auto__)){
var x = cljs.core._nth.call(null,c__7182__auto__,i__16649);
cljs.core.chunk_append.call(null,b__16650,((cljs.core.sequential_QMARK_.call(null,x))?garden.util.space_join.call(null,x):garden.util.to_str.call(null,x)));

var G__16651 = (i__16649 + (1));
i__16649 = G__16651;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16650),garden$util$comma_join_$_iter__16647.call(null,cljs.core.chunk_rest.call(null,s__16648__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16650),null);
}
} else {
var x = cljs.core.first.call(null,s__16648__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?garden.util.space_join.call(null,x):garden.util.to_str.call(null,x)),garden$util$comma_join_$_iter__16647.call(null,cljs.core.rest.call(null,s__16648__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7184__auto__.call(null,xs);
})();
return clojure.string.join.call(null,", ",ys);
});
/**
 * Wrap a string with double quotes.
 */
garden.util.wrap_quotes = (function garden$util$wrap_quotes(s){
return [cljs.core.str("\""),cljs.core.str(s),cljs.core.str("\"")].join('');
});
/**
 * True if `(map? x)` and `x` does not satisfy `clojure.lang.IRecord`.
 */
garden.util.hash_map_QMARK_ = (function garden$util$hash_map_QMARK_(x){
return (cljs.core.map_QMARK_.call(null,x)) && (!(cljs.core.record_QMARK_.call(null,x)));
});
/**
 * Alias to `vector?`.
 */
garden.util.rule_QMARK_ = cljs.core.vector_QMARK_;
/**
 * Alias to `hash-map?`.
 */
garden.util.declaration_QMARK_ = garden.util.hash_map_QMARK_;
garden.util.at_rule_QMARK_ = (function garden$util$at_rule_QMARK_(x){
return (x instanceof garden.types.CSSAtRule);
});
/**
 * True if `x` is a CSS `@media` rule.
 */
garden.util.at_media_QMARK_ = (function garden$util$at_media_QMARK_(x){
var and__6392__auto__ = garden.util.at_rule_QMARK_.call(null,x);
if(cljs.core.truth_(and__6392__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"identifier","identifier",-805503498).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"media","media",-1066138403));
} else {
return and__6392__auto__;
}
});
/**
 * True if `x` is a CSS `@keyframes` rule.
 */
garden.util.at_keyframes_QMARK_ = (function garden$util$at_keyframes_QMARK_(x){
var and__6392__auto__ = garden.util.at_rule_QMARK_.call(null,x);
if(cljs.core.truth_(and__6392__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"identifier","identifier",-805503498).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"keyframes","keyframes",-1437976012));
} else {
return and__6392__auto__;
}
});
/**
 * True if `x` is a CSS `@import` rule.
 */
garden.util.at_import_QMARK_ = (function garden$util$at_import_QMARK_(x){
var and__6392__auto__ = garden.util.at_rule_QMARK_.call(null,x);
if(cljs.core.truth_(and__6392__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"identifier","identifier",-805503498).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"import","import",-1399500709));
} else {
return and__6392__auto__;
}
});
/**
 * Attach a CSS style prefix to s.
 */
garden.util.prefix = (function garden$util$prefix(p,s){
var p__$1 = garden.util.to_str.call(null,p);
if(cljs.core._EQ_.call(null,"-",cljs.core.last.call(null,p__$1))){
return [cljs.core.str(p__$1),cljs.core.str(s)].join('');
} else {
return [cljs.core.str(p__$1),cljs.core.str("-"),cljs.core.str(s)].join('');
}
});
/**
 * Attach a CSS vendor prefix to s.
 */
garden.util.vendor_prefix = (function garden$util$vendor_prefix(p,s){
var p__$1 = garden.util.to_str.call(null,p);
if(cljs.core._EQ_.call(null,"-",cljs.core.first.call(null,p__$1))){
return garden.util.prefix.call(null,p__$1,s);
} else {
return garden.util.prefix.call(null,[cljs.core.str("-"),cljs.core.str(p__$1)].join(''),s);
}
});
/**
 * True if n is a natural number.
 */
garden.util.natural_QMARK_ = (function garden$util$natural_QMARK_(n){
return (cljs.core.integer_QMARK_.call(null,n)) && ((n > (0)));
});
/**
 * True if n is a number between a and b.
 */
garden.util.between_QMARK_ = (function garden$util$between_QMARK_(n,a,b){
var bottom = (function (){var x__6742__auto__ = a;
var y__6743__auto__ = b;
return ((x__6742__auto__ < y__6743__auto__) ? x__6742__auto__ : y__6743__auto__);
})();
var top = (function (){var x__6735__auto__ = a;
var y__6736__auto__ = b;
return ((x__6735__auto__ > y__6736__auto__) ? x__6735__auto__ : y__6736__auto__);
})();
return ((n >= bottom)) && ((n <= top));
});
/**
 * Return a number such that n is no less than a and no more than b.
 */
garden.util.clip = (function garden$util$clip(a,b,n){
var vec__16655 = (((a <= b))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,a], null));
var a__$1 = cljs.core.nth.call(null,vec__16655,(0),null);
var b__$1 = cljs.core.nth.call(null,vec__16655,(1),null);
var x__6735__auto__ = a__$1;
var y__6736__auto__ = (function (){var x__6742__auto__ = b__$1;
var y__6743__auto__ = n;
return ((x__6742__auto__ < y__6743__auto__) ? x__6742__auto__ : y__6743__auto__);
})();
return ((x__6735__auto__ > y__6736__auto__) ? x__6735__auto__ : y__6736__auto__);
});
/**
 * Return the average of two or more numbers.
 */
garden.util.average = (function garden$util$average(var_args){
var args__7486__auto__ = [];
var len__7479__auto___16661 = arguments.length;
var i__7480__auto___16662 = (0);
while(true){
if((i__7480__auto___16662 < len__7479__auto___16661)){
args__7486__auto__.push((arguments[i__7480__auto___16662]));

var G__16663 = (i__7480__auto___16662 + (1));
i__7480__auto___16662 = G__16663;
continue;
} else {
}
break;
}

var argseq__7487__auto__ = ((((2) < args__7486__auto__.length))?(new cljs.core.IndexedSeq(args__7486__auto__.slice((2)),(0),null)):null);
return garden.util.average.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7487__auto__);
});

garden.util.average.cljs$core$IFn$_invoke$arity$variadic = (function (n,m,more){
return (cljs.core.apply.call(null,cljs.core._PLUS_,n,m,more) / (2.0 + cljs.core.count.call(null,more)));
});

garden.util.average.cljs$lang$maxFixedArity = (2);

garden.util.average.cljs$lang$applyTo = (function (seq16658){
var G__16659 = cljs.core.first.call(null,seq16658);
var seq16658__$1 = cljs.core.next.call(null,seq16658);
var G__16660 = cljs.core.first.call(null,seq16658__$1);
var seq16658__$2 = cljs.core.next.call(null,seq16658__$1);
return garden.util.average.cljs$core$IFn$_invoke$arity$variadic(G__16659,G__16660,seq16658__$2);
});

/**
 * All the ways to take one item from each sequence.
 */
garden.util.cartesian_product = (function garden$util$cartesian_product(var_args){
var args__7486__auto__ = [];
var len__7479__auto___16665 = arguments.length;
var i__7480__auto___16666 = (0);
while(true){
if((i__7480__auto___16666 < len__7479__auto___16665)){
args__7486__auto__.push((arguments[i__7480__auto___16666]));

var G__16667 = (i__7480__auto___16666 + (1));
i__7480__auto___16666 = G__16667;
continue;
} else {
}
break;
}

var argseq__7487__auto__ = ((((0) < args__7486__auto__.length))?(new cljs.core.IndexedSeq(args__7486__auto__.slice((0)),(0),null)):null);
return garden.util.cartesian_product.cljs$core$IFn$_invoke$arity$variadic(argseq__7487__auto__);
});

garden.util.cartesian_product.cljs$core$IFn$_invoke$arity$variadic = (function (seqs){
var v_original_seqs = cljs.core.vec.call(null,seqs);
var step = ((function (v_original_seqs){
return (function garden$util$step(v_seqs){
var increment = ((function (v_original_seqs){
return (function (v_seqs__$1){
var i = (cljs.core.count.call(null,v_seqs__$1) - (1));
var v_seqs__$2 = v_seqs__$1;
while(true){
if(cljs.core._EQ_.call(null,i,(-1))){
return null;
} else {
var temp__4655__auto__ = cljs.core.next.call(null,v_seqs__$2.call(null,i));
if(temp__4655__auto__){
var rst = temp__4655__auto__;
return cljs.core.assoc.call(null,v_seqs__$2,i,rst);
} else {
var G__16668 = (i - (1));
var G__16669 = cljs.core.assoc.call(null,v_seqs__$2,i,v_original_seqs.call(null,i));
i = G__16668;
v_seqs__$2 = G__16669;
continue;
}
}
break;
}
});})(v_original_seqs))
;
if(cljs.core.truth_(v_seqs)){
return cljs.core.cons.call(null,cljs.core.map.call(null,cljs.core.first,v_seqs),(new cljs.core.LazySeq(null,((function (increment,v_original_seqs){
return (function (){
return garden$util$step.call(null,increment.call(null,v_seqs));
});})(increment,v_original_seqs))
,null,null)));
} else {
return null;
}
});})(v_original_seqs))
;
if(cljs.core.every_QMARK_.call(null,cljs.core.seq,seqs)){
return (new cljs.core.LazySeq(null,((function (v_original_seqs,step){
return (function (){
return step.call(null,v_original_seqs);
});})(v_original_seqs,step))
,null,null));
} else {
return null;
}
});

garden.util.cartesian_product.cljs$lang$maxFixedArity = (0);

garden.util.cartesian_product.cljs$lang$applyTo = (function (seq16664){
return garden.util.cartesian_product.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16664));
});

