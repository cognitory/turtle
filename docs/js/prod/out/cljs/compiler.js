// Compiled by ClojureScript 1.9.227 {}
goog.provide('cljs.compiler');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('cljs.tools.reader');
goog.require('cljs.env');
goog.require('cljs.analyzer');
goog.require('cljs.source_map');
goog.require('goog.string.StringBuffer');
goog.require('clojure.string');
cljs.compiler.js_reserved = cljs.analyzer.js_reserved;
cljs.compiler._STAR_recompiled_STAR_ = null;
cljs.compiler._STAR_inputs_STAR_ = null;
cljs.compiler._STAR_source_map_data_STAR_ = null;
cljs.compiler._STAR_lexical_renames_STAR_ = cljs.core.PersistentArrayMap.EMPTY;
cljs.compiler.cljs_reserved_file_names = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["deps.cljs",null], null), null);
cljs.compiler.ns_first_segments = (function cljs$compiler$ns_first_segments(){
var get_first_ns_segment = (function cljs$compiler$ns_first_segments_$_get_first_ns_segment(ns){
return cljs.core.first.call(null,clojure.string.split.call(null,[cljs.core.str(ns)].join(''),/\./));
});
return cljs.core.map.call(null,get_first_ns_segment,cljs.core.keys.call(null,new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_))));
});
cljs.compiler.shadow_depth = (function cljs$compiler$shadow_depth(s){
var map__15451 = s;
var map__15451__$1 = ((((!((map__15451 == null)))?((((map__15451.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15451.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15451):map__15451);
var name = cljs.core.get.call(null,map__15451__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__15451__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var d = (0);
var G__15454 = info;
var map__15455 = G__15454;
var map__15455__$1 = ((((!((map__15455 == null)))?((((map__15455.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15455.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15455):map__15455);
var shadow = cljs.core.get.call(null,map__15455__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
var d__$1 = d;
var G__15454__$1 = G__15454;
while(true){
var d__$2 = d__$1;
var map__15457 = G__15454__$1;
var map__15457__$1 = ((((!((map__15457 == null)))?((((map__15457.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15457.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15457):map__15457);
var shadow__$1 = cljs.core.get.call(null,map__15457__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
if(cljs.core.truth_(shadow__$1)){
var G__15459 = (d__$2 + (1));
var G__15460 = shadow__$1;
d__$1 = G__15459;
G__15454__$1 = G__15460;
continue;
} else {
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([[cljs.core.str(name)].join('')], true),cljs.compiler.ns_first_segments.call(null)))){
return (d__$2 + (1));
} else {
return d__$2;

}
}
break;
}
});
cljs.compiler.hash_scope = (function cljs$compiler$hash_scope(s){
return cljs.core.hash_combine.call(null,cljs.core._hash.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(s)),cljs.compiler.shadow_depth.call(null,s));
});
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__15461){
var map__15466 = p__15461;
var map__15466__$1 = ((((!((map__15466 == null)))?((((map__15466.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15466.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15466):map__15466);
var name_var = map__15466__$1;
var name = cljs.core.get.call(null,map__15466__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__15466__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var name__$1 = clojure.string.replace.call(null,[cljs.core.str(name)].join(''),"..","_DOT__DOT_");
var map__15468 = info;
var map__15468__$1 = ((((!((map__15468 == null)))?((((map__15468.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15468.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15468):map__15468);
var ns = cljs.core.get.call(null,map__15468__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var fn_scope = cljs.core.get.call(null,map__15468__$1,new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859));
var scoped_name = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,"_$_",cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.str,new cljs.core.Keyword(null,"name","name",1843675177)),fn_scope),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name__$1], null))));
return cljs.core.symbol.call(null,cljs.compiler.munge.call(null,[cljs.core.str(clojure.string.replace.call(null,[cljs.core.str(ns)].join(''),".","$")),cljs.core.str("$"),cljs.core.str(scoped_name)].join('')));
});
cljs.compiler.munge_reserved = (function cljs$compiler$munge_reserved(reserved){
return (function (s){
if(!((cljs.core.get.call(null,reserved,s) == null))){
return [cljs.core.str(s),cljs.core.str("$")].join('');
} else {
return s;
}
});
});
cljs.compiler.munge = (function cljs$compiler$munge(var_args){
var args15470 = [];
var len__7479__auto___15473 = arguments.length;
var i__7480__auto___15474 = (0);
while(true){
if((i__7480__auto___15474 < len__7479__auto___15473)){
args15470.push((arguments[i__7480__auto___15474]));

var G__15475 = (i__7480__auto___15474 + (1));
i__7480__auto___15474 = G__15475;
continue;
} else {
}
break;
}

var G__15472 = args15470.length;
switch (G__15472) {
case 1:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15470.length)].join('')));

}
});

cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cljs.compiler.munge.call(null,s,cljs.compiler.js_reserved);
});

cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2 = (function (s,reserved){
if(cljs.analyzer.cljs_map_QMARK_.call(null,s)){
var name_var = s;
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(name_var);
var field = new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(name_var);
var info = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(name_var);
if(!((new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531).cljs$core$IFn$_invoke$arity$1(info) == null))){
return cljs.compiler.fn_self_name.call(null,s);
} else {
var depth = cljs.compiler.shadow_depth.call(null,s);
var code = cljs.compiler.hash_scope.call(null,s);
var renamed = cljs.core.get.call(null,cljs.compiler._STAR_lexical_renames_STAR_,code);
var name__$1 = ((field === true)?[cljs.core.str("self__."),cljs.core.str(name)].join(''):((!((renamed == null)))?renamed:name
));
var munged_name = cljs.compiler.munge.call(null,name__$1,reserved);
if((field === true) || ((depth === (0)))){
return munged_name;
} else {
return cljs.core.symbol.call(null,[cljs.core.str(munged_name),cljs.core.str("__$"),cljs.core.str(depth)].join(''));
}
}
} else {
var ss = clojure.string.replace.call(null,[cljs.core.str(s)].join(''),"..","_DOT__DOT_");
var ss__$1 = clojure.string.replace.call(null,ss,(new RegExp("\\/(.)")),".$1");
var rf = cljs.compiler.munge_reserved.call(null,reserved);
var ss__$2 = cljs.core.map.call(null,rf,clojure.string.split.call(null,ss__$1,/\./));
var ss__$3 = clojure.string.join.call(null,".",ss__$2);
var ms = cljs.core.munge.call(null,ss__$3);
if((s instanceof cljs.core.Symbol)){
return cljs.core.symbol.call(null,ms);
} else {
return ms;
}
}
});

cljs.compiler.munge.cljs$lang$maxFixedArity = 2;

cljs.compiler.comma_sep = (function cljs$compiler$comma_sep(xs){
return cljs.core.interpose.call(null,",",xs);
});
cljs.compiler.escape_char = (function cljs$compiler$escape_char(c){
var cp = goog.string.hashCode(c);
var G__15478 = cp;
switch (G__15478) {
case (34):
return "\\\"";

break;
case (92):
return "\\\\";

break;
case (8):
return "\\b";

break;
case (12):
return "\\f";

break;
case (10):
return "\\n";

break;
case (13):
return "\\r";

break;
case (9):
return "\\t";

break;
default:
if((((31) < cp)) && ((cp < (127)))){
return c;
} else {
var unpadded = cp.toString((16));
var pad = cljs.core.subs.call(null,"0000",unpadded.length);
return [cljs.core.str("\\u"),cljs.core.str(pad),cljs.core.str(unpadded)].join('');
}

}
});
cljs.compiler.escape_string = (function cljs$compiler$escape_string(s){
var sb = (new goog.string.StringBuffer());
var seq__15484_15488 = cljs.core.seq.call(null,s);
var chunk__15485_15489 = null;
var count__15486_15490 = (0);
var i__15487_15491 = (0);
while(true){
if((i__15487_15491 < count__15486_15490)){
var c_15492 = cljs.core._nth.call(null,chunk__15485_15489,i__15487_15491);
sb.append(cljs.compiler.escape_char.call(null,c_15492));

var G__15493 = seq__15484_15488;
var G__15494 = chunk__15485_15489;
var G__15495 = count__15486_15490;
var G__15496 = (i__15487_15491 + (1));
seq__15484_15488 = G__15493;
chunk__15485_15489 = G__15494;
count__15486_15490 = G__15495;
i__15487_15491 = G__15496;
continue;
} else {
var temp__4657__auto___15497 = cljs.core.seq.call(null,seq__15484_15488);
if(temp__4657__auto___15497){
var seq__15484_15498__$1 = temp__4657__auto___15497;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15484_15498__$1)){
var c__7215__auto___15499 = cljs.core.chunk_first.call(null,seq__15484_15498__$1);
var G__15500 = cljs.core.chunk_rest.call(null,seq__15484_15498__$1);
var G__15501 = c__7215__auto___15499;
var G__15502 = cljs.core.count.call(null,c__7215__auto___15499);
var G__15503 = (0);
seq__15484_15488 = G__15500;
chunk__15485_15489 = G__15501;
count__15486_15490 = G__15502;
i__15487_15491 = G__15503;
continue;
} else {
var c_15504 = cljs.core.first.call(null,seq__15484_15498__$1);
sb.append(cljs.compiler.escape_char.call(null,c_15504));

var G__15505 = cljs.core.next.call(null,seq__15484_15498__$1);
var G__15506 = null;
var G__15507 = (0);
var G__15508 = (0);
seq__15484_15488 = G__15505;
chunk__15485_15489 = G__15506;
count__15486_15490 = G__15507;
i__15487_15491 = G__15508;
continue;
}
} else {
}
}
break;
}

return sb.toString();
});
cljs.compiler.wrap_in_double_quotes = (function cljs$compiler$wrap_in_double_quotes(x){
return [cljs.core.str("\""),cljs.core.str(x),cljs.core.str("\"")].join('');
});
if(typeof cljs.compiler.emit_STAR_ !== 'undefined'){
} else {
cljs.compiler.emit_STAR_ = (function (){var method_table__7329__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__7330__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__7331__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__7332__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__7333__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.compiler","emit*"),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__7333__auto__,method_table__7329__auto__,prefer_table__7330__auto__,method_cache__7331__auto__,cached_hierarchy__7332__auto__));
})();
}
cljs.compiler.emit = (function cljs$compiler$emit(ast){
var val__13600__auto__ = cljs.env._STAR_compiler_STAR_;
if((val__13600__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = cljs.env.default_compiler_env.call(null);
} else {
}

try{if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
var map__15514_15519 = ast;
var map__15514_15520__$1 = ((((!((map__15514_15519 == null)))?((((map__15514_15519.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15514_15519.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15514_15519):map__15514_15519);
var env_15521 = cljs.core.get.call(null,map__15514_15520__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env_15521))){
var map__15516_15522 = env_15521;
var map__15516_15523__$1 = ((((!((map__15516_15522 == null)))?((((map__15516_15522.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15516_15522.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15516_15522):map__15516_15522);
var line_15524 = cljs.core.get.call(null,map__15516_15523__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_15525 = cljs.core.get.call(null,map__15516_15523__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,((function (map__15516_15522,map__15516_15523__$1,line_15524,column_15525,map__15514_15519,map__15514_15520__$1,env_15521,val__13600__auto__){
return (function (m){
var minfo = (function (){var G__15518 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gcol","gcol",309250807),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"gline","gline",-1086242431),new cljs.core.Keyword(null,"gen-line","gen-line",589592125).cljs$core$IFn$_invoke$arity$1(m)], null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast),new cljs.core.Keyword(null,"var","var",-769682797))){
return cljs.core.assoc.call(null,G__15518,new cljs.core.Keyword(null,"name","name",1843675177),[cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(ast)))].join(''));
} else {
return G__15518;
}
})();
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-map","source-map",1706252311),(line_15524 - (1))], null),cljs.core.fnil.call(null,((function (minfo,map__15516_15522,map__15516_15523__$1,line_15524,column_15525,map__15514_15519,map__15514_15520__$1,env_15521,val__13600__auto__){
return (function (line__$1){
return cljs.core.update_in.call(null,line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_15525)?(column_15525 - (1)):(0))], null),cljs.core.fnil.call(null,((function (minfo,map__15516_15522,map__15516_15523__$1,line_15524,column_15525,map__15514_15519,map__15514_15520__$1,env_15521,val__13600__auto__){
return (function (column__$1){
return cljs.core.conj.call(null,column__$1,minfo);
});})(minfo,map__15516_15522,map__15516_15523__$1,line_15524,column_15525,map__15514_15519,map__15514_15520__$1,env_15521,val__13600__auto__))
,cljs.core.PersistentVector.EMPTY));
});})(minfo,map__15516_15522,map__15516_15523__$1,line_15524,column_15525,map__15514_15519,map__15514_15520__$1,env_15521,val__13600__auto__))
,cljs.core.sorted_map.call(null)));
});})(map__15516_15522,map__15516_15523__$1,line_15524,column_15525,map__15514_15519,map__15514_15520__$1,env_15521,val__13600__auto__))
);
} else {
}
} else {
}

return cljs.compiler.emit_STAR_.call(null,ast);
}finally {if((val__13600__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = null;
} else {
}
}});
cljs.compiler.emits = (function cljs$compiler$emits(var_args){
var args__7486__auto__ = [];
var len__7479__auto___15532 = arguments.length;
var i__7480__auto___15533 = (0);
while(true){
if((i__7480__auto___15533 < len__7479__auto___15532)){
args__7486__auto__.push((arguments[i__7480__auto___15533]));

var G__15534 = (i__7480__auto___15533 + (1));
i__7480__auto___15533 = G__15534;
continue;
} else {
}
break;
}

var argseq__7487__auto__ = ((((0) < args__7486__auto__.length))?(new cljs.core.IndexedSeq(args__7486__auto__.slice((0)),(0),null)):null);
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(argseq__7487__auto__);
});

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
var seq__15528_15535 = cljs.core.seq.call(null,xs);
var chunk__15529_15536 = null;
var count__15530_15537 = (0);
var i__15531_15538 = (0);
while(true){
if((i__15531_15538 < count__15530_15537)){
var x_15539 = cljs.core._nth.call(null,chunk__15529_15536,i__15531_15538);
if((x_15539 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x_15539)){
cljs.compiler.emit.call(null,x_15539);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x_15539)){
cljs.core.apply.call(null,cljs.compiler.emits,x_15539);
} else {
if(goog.isFunction(x_15539)){
x_15539.call(null);
} else {
var s_15540 = cljs.core.print_str.call(null,x_15539);
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__15528_15535,chunk__15529_15536,count__15530_15537,i__15531_15538,s_15540,x_15539){
return (function (p1__15526_SHARP_){
return (p1__15526_SHARP_ + cljs.core.count.call(null,s_15540));
});})(seq__15528_15535,chunk__15529_15536,count__15530_15537,i__15531_15538,s_15540,x_15539))
);
}

cljs.core.print.call(null,s_15540);

}
}
}
}

var G__15541 = seq__15528_15535;
var G__15542 = chunk__15529_15536;
var G__15543 = count__15530_15537;
var G__15544 = (i__15531_15538 + (1));
seq__15528_15535 = G__15541;
chunk__15529_15536 = G__15542;
count__15530_15537 = G__15543;
i__15531_15538 = G__15544;
continue;
} else {
var temp__4657__auto___15545 = cljs.core.seq.call(null,seq__15528_15535);
if(temp__4657__auto___15545){
var seq__15528_15546__$1 = temp__4657__auto___15545;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15528_15546__$1)){
var c__7215__auto___15547 = cljs.core.chunk_first.call(null,seq__15528_15546__$1);
var G__15548 = cljs.core.chunk_rest.call(null,seq__15528_15546__$1);
var G__15549 = c__7215__auto___15547;
var G__15550 = cljs.core.count.call(null,c__7215__auto___15547);
var G__15551 = (0);
seq__15528_15535 = G__15548;
chunk__15529_15536 = G__15549;
count__15530_15537 = G__15550;
i__15531_15538 = G__15551;
continue;
} else {
var x_15552 = cljs.core.first.call(null,seq__15528_15546__$1);
if((x_15552 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x_15552)){
cljs.compiler.emit.call(null,x_15552);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x_15552)){
cljs.core.apply.call(null,cljs.compiler.emits,x_15552);
} else {
if(goog.isFunction(x_15552)){
x_15552.call(null);
} else {
var s_15553 = cljs.core.print_str.call(null,x_15552);
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__15528_15535,chunk__15529_15536,count__15530_15537,i__15531_15538,s_15553,x_15552,seq__15528_15546__$1,temp__4657__auto___15545){
return (function (p1__15526_SHARP_){
return (p1__15526_SHARP_ + cljs.core.count.call(null,s_15553));
});})(seq__15528_15535,chunk__15529_15536,count__15530_15537,i__15531_15538,s_15553,x_15552,seq__15528_15546__$1,temp__4657__auto___15545))
);
}

cljs.core.print.call(null,s_15553);

}
}
}
}

var G__15554 = cljs.core.next.call(null,seq__15528_15546__$1);
var G__15555 = null;
var G__15556 = (0);
var G__15557 = (0);
seq__15528_15535 = G__15554;
chunk__15529_15536 = G__15555;
count__15530_15537 = G__15556;
i__15531_15538 = G__15557;
continue;
}
} else {
}
}
break;
}

return null;
});

cljs.compiler.emits.cljs$lang$maxFixedArity = (0);

cljs.compiler.emits.cljs$lang$applyTo = (function (seq15527){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15527));
});

cljs.compiler.emitln = (function cljs$compiler$emitln(var_args){
var args__7486__auto__ = [];
var len__7479__auto___15562 = arguments.length;
var i__7480__auto___15563 = (0);
while(true){
if((i__7480__auto___15563 < len__7479__auto___15562)){
args__7486__auto__.push((arguments[i__7480__auto___15563]));

var G__15564 = (i__7480__auto___15563 + (1));
i__7480__auto___15563 = G__15564;
continue;
} else {
}
break;
}

var argseq__7487__auto__ = ((((0) < args__7486__auto__.length))?(new cljs.core.IndexedSeq(args__7486__auto__.slice((0)),(0),null)):null);
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(argseq__7487__auto__);
});

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
cljs.core.apply.call(null,cljs.compiler.emits,xs);

cljs.core.println.call(null);

if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,(function (p__15559){
var map__15560 = p__15559;
var map__15560__$1 = ((((!((map__15560 == null)))?((((map__15560.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15560.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15560):map__15560);
var m = map__15560__$1;
var gen_line = cljs.core.get.call(null,map__15560__$1,new cljs.core.Keyword(null,"gen-line","gen-line",589592125));
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"gen-line","gen-line",589592125),(gen_line + (1)),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(0));
}));
} else {
}

return null;
});

cljs.compiler.emitln.cljs$lang$maxFixedArity = (0);

cljs.compiler.emitln.cljs$lang$applyTo = (function (seq15558){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15558));
});

cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__7390__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_15567_15569 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_15568_15570 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_15567_15569,_STAR_print_fn_STAR_15568_15570,sb__7390__auto__){
return (function (x__7391__auto__){
return sb__7390__auto__.append(x__7391__auto__);
});})(_STAR_print_newline_STAR_15567_15569,_STAR_print_fn_STAR_15568_15570,sb__7390__auto__))
;

try{cljs.compiler.emit.call(null,expr);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_15568_15570;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_15567_15569;
}
return [cljs.core.str(sb__7390__auto__)].join('');
});
if(typeof cljs.compiler.emit_constant !== 'undefined'){
} else {
cljs.compiler.emit_constant = (function (){var method_table__7329__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__7330__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__7331__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__7332__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__7333__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.compiler","emit-constant"),cljs.core.type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__7333__auto__,method_table__7329__auto__,prefer_table__7330__auto__,method_cache__7331__auto__,cached_hierarchy__7332__auto__));
})();
}
cljs.core._add_method.call(null,cljs.compiler.emit_constant,null,(function (x){
return cljs.compiler.emits.call(null,"null");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,Number,(function (x){
return cljs.compiler.emits.call(null,"(",x,")");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,String,(function (x){
return cljs.compiler.emits.call(null,cljs.compiler.wrap_in_double_quotes.call(null,cljs.compiler.escape_string.call(null,x)));
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,Boolean,(function (x){
return cljs.compiler.emits.call(null,(cljs.core.truth_(x)?"true":"false"));
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,RegExp,(function (x){
if(cljs.core._EQ_.call(null,"",[cljs.core.str(x)].join(''))){
return cljs.compiler.emits.call(null,"(new RegExp(\"\"))");
} else {
var vec__15571 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,[cljs.core.str(x)].join(''));
var _ = cljs.core.nth.call(null,vec__15571,(0),null);
var flags = cljs.core.nth.call(null,vec__15571,(1),null);
var pattern = cljs.core.nth.call(null,vec__15571,(2),null);
return cljs.compiler.emits.call(null,pattern);
}
}));
cljs.compiler.emits_keyword = (function cljs$compiler$emits_keyword(kw){
var ns = cljs.core.namespace.call(null,kw);
var name = cljs.core.name.call(null,kw);
cljs.compiler.emits.call(null,"new cljs.core.Keyword(");

cljs.compiler.emit_constant.call(null,ns);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,name);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,(cljs.core.truth_(ns)?[cljs.core.str(ns),cljs.core.str("/"),cljs.core.str(name)].join(''):name));

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,cljs.core.hash.call(null,kw));

return cljs.compiler.emits.call(null,")");
});
cljs.compiler.emits_symbol = (function cljs$compiler$emits_symbol(sym){
var ns = cljs.core.namespace.call(null,sym);
var name = cljs.core.name.call(null,sym);
var symstr = ((!((ns == null)))?[cljs.core.str(ns),cljs.core.str("/"),cljs.core.str(name)].join(''):name);
cljs.compiler.emits.call(null,"new cljs.core.Symbol(");

cljs.compiler.emit_constant.call(null,ns);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,name);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,symstr);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,cljs.core.hash.call(null,sym));

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,null);

return cljs.compiler.emits.call(null,")");
});
cljs.core._add_method.call(null,cljs.compiler.emit_constant,cljs.core.Keyword,(function (x){
if(cljs.core.truth_(new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_))))){
var value = x.call(null,new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
return cljs.compiler.emits.call(null,"cljs.core.",value);
} else {
return cljs.compiler.emits_keyword.call(null,x);
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,cljs.core.Symbol,(function (x){
if(cljs.core.truth_(new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_))))){
var value = x.call(null,new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
return cljs.compiler.emits.call(null,"cljs.core.",value);
} else {
return cljs.compiler.emits_symbol.call(null,x);
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,Date,(function (date){
return cljs.compiler.emits.call(null,"new Date(",date.getTime(),")");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,cljs.core.UUID,(function (uuid){
var uuid_str = uuid.toString();
return cljs.compiler.emits.call(null,"new cljs.core.UUID(\"",uuid_str,"\", ",cljs.core.hash.call(null,uuid_str),")");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"no-op","no-op",-93046065),(function (m){
return null;
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"var","var",-769682797),(function (p__15575){
var map__15576 = p__15575;
var map__15576__$1 = ((((!((map__15576 == null)))?((((map__15576.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15576.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15576):map__15576);
var arg = map__15576__$1;
var info = cljs.core.get.call(null,map__15576__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var env = cljs.core.get.call(null,map__15576__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var form = cljs.core.get.call(null,map__15576__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var var_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info);
var info__$1 = ((cljs.core._EQ_.call(null,cljs.core.namespace.call(null,var_name),"js"))?(function (){var js_module_name = cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-module-index","js-module-index",2072061931),cljs.core.name.call(null,var_name)], null));
var or__6404__auto__ = js_module_name;
if(cljs.core.truth_(or__6404__auto__)){
return or__6404__auto__;
} else {
return cljs.core.name.call(null,var_name);
}
})():info);
if(cljs.core.truth_(new cljs.core.Keyword(null,"binding-form?","binding-form?",1728940169).cljs$core$IFn$_invoke$arity$1(arg))){
return cljs.compiler.emits.call(null,cljs.compiler.munge.call(null,arg));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__15435__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15435__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,(function (){var G__15578 = info__$1;
if(cljs.core.not_EQ_.call(null,form,new cljs.core.Symbol("js","-Infinity","js/-Infinity",958706333,null))){
return cljs.compiler.munge.call(null,G__15578);
} else {
return G__15578;
}
})());

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15435__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"var-special","var-special",1131576802),(function (p__15579){
var map__15580 = p__15579;
var map__15580__$1 = ((((!((map__15580 == null)))?((((map__15580.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15580.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15580):map__15580);
var arg = map__15580__$1;
var env = cljs.core.get.call(null,map__15580__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var var$ = cljs.core.get.call(null,map__15580__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var sym = cljs.core.get.call(null,map__15580__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var meta = cljs.core.get.call(null,map__15580__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
if(cljs.analyzer.ast_QMARK_.call(null,sym)){
} else {
throw (new Error("Assert failed: (ana/ast? sym)"));
}

if(cljs.analyzer.ast_QMARK_.call(null,meta)){
} else {
throw (new Error("Assert failed: (ana/ast? meta)"));
}

var map__15582 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(var$);
var map__15582__$1 = ((((!((map__15582 == null)))?((((map__15582.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15582.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15582):map__15582);
var name = cljs.core.get.call(null,map__15582__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env__15435__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15435__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"new cljs.core.Var(function(){return ",cljs.compiler.munge.call(null,name),";},",sym,",",meta,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15435__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"meta","meta",1499536964),(function (p__15584){
var map__15585 = p__15584;
var map__15585__$1 = ((((!((map__15585 == null)))?((((map__15585.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15585.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15585):map__15585);
var expr = cljs.core.get.call(null,map__15585__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var meta = cljs.core.get.call(null,map__15585__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var env = cljs.core.get.call(null,map__15585__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__15435__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15435__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"cljs.core.with_meta(",expr,",",meta,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15435__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.array_map_threshold = (8);
cljs.compiler.distinct_keys_QMARK_ = (function cljs$compiler$distinct_keys_QMARK_(keys){
return (cljs.core.every_QMARK_.call(null,(function (p1__15587_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__15587_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
}),keys)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,keys)),cljs.core.count.call(null,keys)));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"map","map",1371690461),(function (p__15588){
var map__15589 = p__15588;
var map__15589__$1 = ((((!((map__15589 == null)))?((((map__15589.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15589.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15589):map__15589);
var env = cljs.core.get.call(null,map__15589__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var keys = cljs.core.get.call(null,map__15589__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.call(null,map__15589__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env__15435__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15435__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if((cljs.core.count.call(null,keys) === (0))){
cljs.compiler.emits.call(null,"cljs.core.PersistentArrayMap.EMPTY");
} else {
if((cljs.core.count.call(null,keys) <= cljs.compiler.array_map_threshold)){
if(cljs.core.truth_(cljs.compiler.distinct_keys_QMARK_.call(null,keys))){
cljs.compiler.emits.call(null,"new cljs.core.PersistentArrayMap(null, ",cljs.core.count.call(null,keys),", [",cljs.compiler.comma_sep.call(null,cljs.core.interleave.call(null,keys,vals)),"], null)");
} else {
cljs.compiler.emits.call(null,"cljs.core.PersistentArrayMap.fromArray([",cljs.compiler.comma_sep.call(null,cljs.core.interleave.call(null,keys,vals)),"], true, false)");
}
} else {
cljs.compiler.emits.call(null,"cljs.core.PersistentHashMap.fromArrays([",cljs.compiler.comma_sep.call(null,keys),"],[",cljs.compiler.comma_sep.call(null,vals),"])");

}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15435__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"list","list",765357683),(function (p__15591){
var map__15592 = p__15591;
var map__15592__$1 = ((((!((map__15592 == null)))?((((map__15592.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15592.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15592):map__15592);
var items = cljs.core.get.call(null,map__15592__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__15592__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__15435__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15435__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.empty_QMARK_.call(null,items)){
cljs.compiler.emits.call(null,"cljs.core.List.EMPTY");
} else {
cljs.compiler.emits.call(null,"cljs.core.list(",cljs.compiler.comma_sep.call(null,items),")");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15435__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (p__15594){
var map__15595 = p__15594;
var map__15595__$1 = ((((!((map__15595 == null)))?((((map__15595.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15595.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15595):map__15595);
var items = cljs.core.get.call(null,map__15595__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__15595__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__15435__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15435__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.empty_QMARK_.call(null,items)){
cljs.compiler.emits.call(null,"cljs.core.PersistentVector.EMPTY");
} else {
var cnt_15597 = cljs.core.count.call(null,items);
if((cnt_15597 < (32))){
cljs.compiler.emits.call(null,"new cljs.core.PersistentVector(null, ",cnt_15597,", 5, cljs.core.PersistentVector.EMPTY_NODE, [",cljs.compiler.comma_sep.call(null,items),"], null)");
} else {
cljs.compiler.emits.call(null,"cljs.core.PersistentVector.fromArray([",cljs.compiler.comma_sep.call(null,items),"], true)");
}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15435__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.distinct_constants_QMARK_ = (function cljs$compiler$distinct_constants_QMARK_(items){
return (cljs.core.every_QMARK_.call(null,(function (p1__15598_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__15598_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
}),items)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,items)),cljs.core.count.call(null,items)));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set","set",304602554),(function (p__15599){
var map__15600 = p__15599;
var map__15600__$1 = ((((!((map__15600 == null)))?((((map__15600.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15600.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15600):map__15600);
var items = cljs.core.get.call(null,map__15600__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__15600__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__15435__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15435__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.empty_QMARK_.call(null,items)){
cljs.compiler.emits.call(null,"cljs.core.PersistentHashSet.EMPTY");
} else {
if(cljs.core.truth_(cljs.compiler.distinct_constants_QMARK_.call(null,items))){
cljs.compiler.emits.call(null,"new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, ",cljs.core.count.call(null,items),", [",cljs.compiler.comma_sep.call(null,cljs.core.interleave.call(null,items,cljs.core.repeat.call(null,"null"))),"], null), null)");
} else {
cljs.compiler.emits.call(null,"cljs.core.PersistentHashSet.fromArray([",cljs.compiler.comma_sep.call(null,items),"], true)");

}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15435__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-value","js-value",-758336661),(function (p__15602){
var map__15603 = p__15602;
var map__15603__$1 = ((((!((map__15603 == null)))?((((map__15603.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15603.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15603):map__15603);
var items = cljs.core.get.call(null,map__15603__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var js_type = cljs.core.get.call(null,map__15603__$1,new cljs.core.Keyword(null,"js-type","js-type",539386702));
var env = cljs.core.get.call(null,map__15603__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__15435__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15435__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core._EQ_.call(null,js_type,new cljs.core.Keyword(null,"object","object",1474613949))){
cljs.compiler.emits.call(null,"({");

var temp__4657__auto___15621 = cljs.core.seq.call(null,items);
if(temp__4657__auto___15621){
var items_15622__$1 = temp__4657__auto___15621;
var vec__15605_15623 = items_15622__$1;
var seq__15606_15624 = cljs.core.seq.call(null,vec__15605_15623);
var first__15607_15625 = cljs.core.first.call(null,seq__15606_15624);
var seq__15606_15626__$1 = cljs.core.next.call(null,seq__15606_15624);
var vec__15608_15627 = first__15607_15625;
var k_15628 = cljs.core.nth.call(null,vec__15608_15627,(0),null);
var v_15629 = cljs.core.nth.call(null,vec__15608_15627,(1),null);
var r_15630 = seq__15606_15626__$1;
cljs.compiler.emits.call(null,"\"",cljs.core.name.call(null,k_15628),"\": ",v_15629);

var seq__15611_15631 = cljs.core.seq.call(null,r_15630);
var chunk__15612_15632 = null;
var count__15613_15633 = (0);
var i__15614_15634 = (0);
while(true){
if((i__15614_15634 < count__15613_15633)){
var vec__15615_15635 = cljs.core._nth.call(null,chunk__15612_15632,i__15614_15634);
var k_15636__$1 = cljs.core.nth.call(null,vec__15615_15635,(0),null);
var v_15637__$1 = cljs.core.nth.call(null,vec__15615_15635,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_15636__$1),"\": ",v_15637__$1);

var G__15638 = seq__15611_15631;
var G__15639 = chunk__15612_15632;
var G__15640 = count__15613_15633;
var G__15641 = (i__15614_15634 + (1));
seq__15611_15631 = G__15638;
chunk__15612_15632 = G__15639;
count__15613_15633 = G__15640;
i__15614_15634 = G__15641;
continue;
} else {
var temp__4657__auto___15642__$1 = cljs.core.seq.call(null,seq__15611_15631);
if(temp__4657__auto___15642__$1){
var seq__15611_15643__$1 = temp__4657__auto___15642__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15611_15643__$1)){
var c__7215__auto___15644 = cljs.core.chunk_first.call(null,seq__15611_15643__$1);
var G__15645 = cljs.core.chunk_rest.call(null,seq__15611_15643__$1);
var G__15646 = c__7215__auto___15644;
var G__15647 = cljs.core.count.call(null,c__7215__auto___15644);
var G__15648 = (0);
seq__15611_15631 = G__15645;
chunk__15612_15632 = G__15646;
count__15613_15633 = G__15647;
i__15614_15634 = G__15648;
continue;
} else {
var vec__15618_15649 = cljs.core.first.call(null,seq__15611_15643__$1);
var k_15650__$1 = cljs.core.nth.call(null,vec__15618_15649,(0),null);
var v_15651__$1 = cljs.core.nth.call(null,vec__15618_15649,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_15650__$1),"\": ",v_15651__$1);

var G__15652 = cljs.core.next.call(null,seq__15611_15643__$1);
var G__15653 = null;
var G__15654 = (0);
var G__15655 = (0);
seq__15611_15631 = G__15652;
chunk__15612_15632 = G__15653;
count__15613_15633 = G__15654;
i__15614_15634 = G__15655;
continue;
}
} else {
}
}
break;
}
} else {
}

cljs.compiler.emits.call(null,"})");
} else {
cljs.compiler.emits.call(null,"[",cljs.compiler.comma_sep.call(null,items),"]");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15435__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"constant","constant",-379609303),(function (p__15656){
var map__15657 = p__15656;
var map__15657__$1 = ((((!((map__15657 == null)))?((((map__15657.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15657.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15657):map__15657);
var form = cljs.core.get.call(null,map__15657__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var env = cljs.core.get.call(null,map__15657__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__15435__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15435__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_constant.call(null,form);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15435__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.truthy_constant_QMARK_ = (function cljs$compiler$truthy_constant_QMARK_(p__15659){
var map__15662 = p__15659;
var map__15662__$1 = ((((!((map__15662 == null)))?((((map__15662.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15662.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15662):map__15662);
var op = cljs.core.get.call(null,map__15662__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__15662__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var and__6392__auto__ = cljs.core._EQ_.call(null,op,new cljs.core.Keyword(null,"constant","constant",-379609303));
if(and__6392__auto__){
var and__6392__auto____$1 = form;
if(cljs.core.truth_(and__6392__auto____$1)){
return !(((typeof form === 'string') && (cljs.core._EQ_.call(null,form,""))) || ((typeof form === 'number') && ((form === (0)))));
} else {
return and__6392__auto____$1;
}
} else {
return and__6392__auto__;
}
});
cljs.compiler.falsey_constant_QMARK_ = (function cljs$compiler$falsey_constant_QMARK_(p__15664){
var map__15667 = p__15664;
var map__15667__$1 = ((((!((map__15667 == null)))?((((map__15667.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15667.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15667):map__15667);
var op = cljs.core.get.call(null,map__15667__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__15667__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
return (cljs.core._EQ_.call(null,op,new cljs.core.Keyword(null,"constant","constant",-379609303))) && ((form === false) || ((form == null)));
});
cljs.compiler.safe_test_QMARK_ = (function cljs$compiler$safe_test_QMARK_(env,e){
var tag = cljs.analyzer.infer_tag.call(null,env,e);
var or__6404__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"seq","seq",-177272256,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null], null), null).call(null,tag);
if(cljs.core.truth_(or__6404__auto__)){
return or__6404__auto__;
} else {
return cljs.compiler.truthy_constant_QMARK_.call(null,e);
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"if","if",-458814265),(function (p__15669){
var map__15670 = p__15669;
var map__15670__$1 = ((((!((map__15670 == null)))?((((map__15670.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15670.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15670):map__15670);
var test = cljs.core.get.call(null,map__15670__$1,new cljs.core.Keyword(null,"test","test",577538877));
var then = cljs.core.get.call(null,map__15670__$1,new cljs.core.Keyword(null,"then","then",460598070));
var else$ = cljs.core.get.call(null,map__15670__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var env = cljs.core.get.call(null,map__15670__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var unchecked = cljs.core.get.call(null,map__15670__$1,new cljs.core.Keyword(null,"unchecked","unchecked",924418378));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
var checked = cljs.core.not.call(null,(function (){var or__6404__auto__ = unchecked;
if(cljs.core.truth_(or__6404__auto__)){
return or__6404__auto__;
} else {
return cljs.compiler.safe_test_QMARK_.call(null,env,test);
}
})());
if(cljs.core.truth_(cljs.compiler.truthy_constant_QMARK_.call(null,test))){
return cljs.compiler.emitln.call(null,then);
} else {
if(cljs.core.truth_(cljs.compiler.falsey_constant_QMARK_.call(null,test))){
return cljs.compiler.emitln.call(null,else$);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"(",((checked)?"cljs.core.truth_":null),"(",test,")?",then,":",else$,")");
} else {
if(checked){
cljs.compiler.emitln.call(null,"if(cljs.core.truth_(",test,")){");
} else {
cljs.compiler.emitln.call(null,"if(",test,"){");
}

cljs.compiler.emitln.call(null,then,"} else {");

return cljs.compiler.emitln.call(null,else$,"}");
}

}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"case*","case*",716180697),(function (p__15672){
var map__15673 = p__15672;
var map__15673__$1 = ((((!((map__15673 == null)))?((((map__15673.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15673.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15673):map__15673);
var v = cljs.core.get.call(null,map__15673__$1,new cljs.core.Keyword(null,"v","v",21465059));
var tests = cljs.core.get.call(null,map__15673__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var thens = cljs.core.get.call(null,map__15673__$1,new cljs.core.Keyword(null,"thens","thens",226631442));
var default$ = cljs.core.get.call(null,map__15673__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var env = cljs.core.get.call(null,map__15673__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"expr","expr",745722291))){
cljs.compiler.emitln.call(null,"(function(){");
} else {
}

var gs = cljs.core.gensym.call(null,"caseval__");
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,"var ",gs,";");
} else {
}

cljs.compiler.emitln.call(null,"switch (",v,") {");

var seq__15675_15693 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),cljs.core.interleave.call(null,tests,thens)));
var chunk__15676_15694 = null;
var count__15677_15695 = (0);
var i__15678_15696 = (0);
while(true){
if((i__15678_15696 < count__15677_15695)){
var vec__15679_15697 = cljs.core._nth.call(null,chunk__15676_15694,i__15678_15696);
var ts_15698 = cljs.core.nth.call(null,vec__15679_15697,(0),null);
var then_15699 = cljs.core.nth.call(null,vec__15679_15697,(1),null);
var seq__15682_15700 = cljs.core.seq.call(null,ts_15698);
var chunk__15683_15701 = null;
var count__15684_15702 = (0);
var i__15685_15703 = (0);
while(true){
if((i__15685_15703 < count__15684_15702)){
var test_15704 = cljs.core._nth.call(null,chunk__15683_15701,i__15685_15703);
cljs.compiler.emitln.call(null,"case ",test_15704,":");

var G__15705 = seq__15682_15700;
var G__15706 = chunk__15683_15701;
var G__15707 = count__15684_15702;
var G__15708 = (i__15685_15703 + (1));
seq__15682_15700 = G__15705;
chunk__15683_15701 = G__15706;
count__15684_15702 = G__15707;
i__15685_15703 = G__15708;
continue;
} else {
var temp__4657__auto___15709 = cljs.core.seq.call(null,seq__15682_15700);
if(temp__4657__auto___15709){
var seq__15682_15710__$1 = temp__4657__auto___15709;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15682_15710__$1)){
var c__7215__auto___15711 = cljs.core.chunk_first.call(null,seq__15682_15710__$1);
var G__15712 = cljs.core.chunk_rest.call(null,seq__15682_15710__$1);
var G__15713 = c__7215__auto___15711;
var G__15714 = cljs.core.count.call(null,c__7215__auto___15711);
var G__15715 = (0);
seq__15682_15700 = G__15712;
chunk__15683_15701 = G__15713;
count__15684_15702 = G__15714;
i__15685_15703 = G__15715;
continue;
} else {
var test_15716 = cljs.core.first.call(null,seq__15682_15710__$1);
cljs.compiler.emitln.call(null,"case ",test_15716,":");

var G__15717 = cljs.core.next.call(null,seq__15682_15710__$1);
var G__15718 = null;
var G__15719 = (0);
var G__15720 = (0);
seq__15682_15700 = G__15717;
chunk__15683_15701 = G__15718;
count__15684_15702 = G__15719;
i__15685_15703 = G__15720;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_15699);
} else {
cljs.compiler.emitln.call(null,then_15699);
}

cljs.compiler.emitln.call(null,"break;");

var G__15721 = seq__15675_15693;
var G__15722 = chunk__15676_15694;
var G__15723 = count__15677_15695;
var G__15724 = (i__15678_15696 + (1));
seq__15675_15693 = G__15721;
chunk__15676_15694 = G__15722;
count__15677_15695 = G__15723;
i__15678_15696 = G__15724;
continue;
} else {
var temp__4657__auto___15725 = cljs.core.seq.call(null,seq__15675_15693);
if(temp__4657__auto___15725){
var seq__15675_15726__$1 = temp__4657__auto___15725;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15675_15726__$1)){
var c__7215__auto___15727 = cljs.core.chunk_first.call(null,seq__15675_15726__$1);
var G__15728 = cljs.core.chunk_rest.call(null,seq__15675_15726__$1);
var G__15729 = c__7215__auto___15727;
var G__15730 = cljs.core.count.call(null,c__7215__auto___15727);
var G__15731 = (0);
seq__15675_15693 = G__15728;
chunk__15676_15694 = G__15729;
count__15677_15695 = G__15730;
i__15678_15696 = G__15731;
continue;
} else {
var vec__15686_15732 = cljs.core.first.call(null,seq__15675_15726__$1);
var ts_15733 = cljs.core.nth.call(null,vec__15686_15732,(0),null);
var then_15734 = cljs.core.nth.call(null,vec__15686_15732,(1),null);
var seq__15689_15735 = cljs.core.seq.call(null,ts_15733);
var chunk__15690_15736 = null;
var count__15691_15737 = (0);
var i__15692_15738 = (0);
while(true){
if((i__15692_15738 < count__15691_15737)){
var test_15739 = cljs.core._nth.call(null,chunk__15690_15736,i__15692_15738);
cljs.compiler.emitln.call(null,"case ",test_15739,":");

var G__15740 = seq__15689_15735;
var G__15741 = chunk__15690_15736;
var G__15742 = count__15691_15737;
var G__15743 = (i__15692_15738 + (1));
seq__15689_15735 = G__15740;
chunk__15690_15736 = G__15741;
count__15691_15737 = G__15742;
i__15692_15738 = G__15743;
continue;
} else {
var temp__4657__auto___15744__$1 = cljs.core.seq.call(null,seq__15689_15735);
if(temp__4657__auto___15744__$1){
var seq__15689_15745__$1 = temp__4657__auto___15744__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15689_15745__$1)){
var c__7215__auto___15746 = cljs.core.chunk_first.call(null,seq__15689_15745__$1);
var G__15747 = cljs.core.chunk_rest.call(null,seq__15689_15745__$1);
var G__15748 = c__7215__auto___15746;
var G__15749 = cljs.core.count.call(null,c__7215__auto___15746);
var G__15750 = (0);
seq__15689_15735 = G__15747;
chunk__15690_15736 = G__15748;
count__15691_15737 = G__15749;
i__15692_15738 = G__15750;
continue;
} else {
var test_15751 = cljs.core.first.call(null,seq__15689_15745__$1);
cljs.compiler.emitln.call(null,"case ",test_15751,":");

var G__15752 = cljs.core.next.call(null,seq__15689_15745__$1);
var G__15753 = null;
var G__15754 = (0);
var G__15755 = (0);
seq__15689_15735 = G__15752;
chunk__15690_15736 = G__15753;
count__15691_15737 = G__15754;
i__15692_15738 = G__15755;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_15734);
} else {
cljs.compiler.emitln.call(null,then_15734);
}

cljs.compiler.emitln.call(null,"break;");

var G__15756 = cljs.core.next.call(null,seq__15675_15726__$1);
var G__15757 = null;
var G__15758 = (0);
var G__15759 = (0);
seq__15675_15693 = G__15756;
chunk__15676_15694 = G__15757;
count__15677_15695 = G__15758;
i__15678_15696 = G__15759;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(default$)){
cljs.compiler.emitln.call(null,"default:");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",default$);
} else {
cljs.compiler.emitln.call(null,default$);
}
} else {
}

cljs.compiler.emitln.call(null,"}");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.call(null,"return ",gs,";})()");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"throw","throw",-1044625833),(function (p__15760){
var map__15761 = p__15760;
var map__15761__$1 = ((((!((map__15761 == null)))?((((map__15761.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15761.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15761):map__15761);
var throw$ = cljs.core.get.call(null,map__15761__$1,new cljs.core.Keyword(null,"throw","throw",-1044625833));
var env = cljs.core.get.call(null,map__15761__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emits.call(null,"(function(){throw ",throw$,"})()");
} else {
return cljs.compiler.emitln.call(null,"throw ",throw$,";");
}
}));
cljs.compiler.base_types = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 15, ["boolean",null,"object",null,"*",null,"string",null,"Object",null,"Number",null,"null",null,"Date",null,"number",null,"String",null,"RegExp",null,"...*",null,"Array",null,"array",null,"Boolean",null], null), null);
cljs.compiler.mapped_types = new cljs.core.PersistentArrayMap(null, 1, ["nil","null"], null);
cljs.compiler.resolve_type = (function cljs$compiler$resolve_type(env,t){
if(cljs.core.truth_(cljs.core.get.call(null,cljs.compiler.base_types,t))){
return t;
} else {
if(cljs.core.truth_(cljs.core.get.call(null,cljs.compiler.mapped_types,t))){
return cljs.core.get.call(null,cljs.compiler.mapped_types,t);
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"!"))){
return [cljs.core.str("!"),cljs.core.str(cljs$compiler$resolve_type.call(null,env,cljs.core.subs.call(null,t,(1))))].join('');
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"{"))){
return t;
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"function"))){
var idx = t.lastIndexOf(":");
var vec__15768 = ((!(((-1) === idx)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,t,(0),idx),cljs.core.subs.call(null,t,(idx + (1)),cljs.core.count.call(null,t))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,null], null));
var fstr = cljs.core.nth.call(null,vec__15768,(0),null);
var rstr = cljs.core.nth.call(null,vec__15768,(1),null);
var ret_t = (cljs.core.truth_(rstr)?cljs$compiler$resolve_type.call(null,env,rstr):null);
var axstr = cljs.core.subs.call(null,fstr,(9),(cljs.core.count.call(null,fstr) - (1)));
var args_ts = ((clojure.string.blank_QMARK_.call(null,axstr))?null:cljs.core.map.call(null,cljs.core.comp.call(null,((function (idx,vec__15768,fstr,rstr,ret_t,axstr){
return (function (p1__15763_SHARP_){
return cljs$compiler$resolve_type.call(null,env,p1__15763_SHARP_);
});})(idx,vec__15768,fstr,rstr,ret_t,axstr))
,clojure.string.trim),clojure.string.split.call(null,axstr,/,/)));
var G__15771 = [cljs.core.str("function("),cljs.core.str(clojure.string.join.call(null,",",args_ts)),cljs.core.str(")")].join('');
if(cljs.core.truth_(ret_t)){
return [cljs.core.str(G__15771),cljs.core.str(":"),cljs.core.str(ret_t)].join('');
} else {
return G__15771;
}
} else {
if(cljs.core.truth_(goog.string.endsWith(t,"="))){
return [cljs.core.str(cljs$compiler$resolve_type.call(null,env,cljs.core.subs.call(null,t,(0),(cljs.core.count.call(null,t) - (1))))),cljs.core.str("=")].join('');
} else {
return cljs.compiler.munge.call(null,[cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,env,cljs.core.symbol.call(null,t))))].join(''));

}
}
}
}
}
}
});
cljs.compiler.resolve_types = (function cljs$compiler$resolve_types(env,ts){
var ts__$1 = cljs.core.subs.call(null,clojure.string.trim.call(null,ts),(1),(cljs.core.count.call(null,ts) - (1)));
var xs = clojure.string.split.call(null,ts__$1,/\|/);
return [cljs.core.str("{"),cljs.core.str(clojure.string.join.call(null,"|",cljs.core.map.call(null,((function (ts__$1,xs){
return (function (p1__15772_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__15772_SHARP_);
});})(ts__$1,xs))
,xs))),cljs.core.str("}")].join('');
});
cljs.compiler.munge_param_return = (function cljs$compiler$munge_param_return(env,line){
if(cljs.core.truth_(cljs.core.re_find.call(null,/@param/,line))){
var vec__15779 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__15780 = cljs.core.seq.call(null,vec__15779);
var first__15781 = cljs.core.first.call(null,seq__15780);
var seq__15780__$1 = cljs.core.next.call(null,seq__15780);
var p = first__15781;
var first__15781__$1 = cljs.core.first.call(null,seq__15780__$1);
var seq__15780__$2 = cljs.core.next.call(null,seq__15780__$1);
var ts = first__15781__$1;
var first__15781__$2 = cljs.core.first.call(null,seq__15780__$2);
var seq__15780__$3 = cljs.core.next.call(null,seq__15780__$2);
var n = first__15781__$2;
var xs = seq__15780__$3;
if(cljs.core.truth_((function (){var and__6392__auto__ = cljs.core._EQ_.call(null,"@param",p);
if(and__6392__auto__){
var and__6392__auto____$1 = ts;
if(cljs.core.truth_(and__6392__auto____$1)){
return goog.string.startsWith(ts,"{");
} else {
return and__6392__auto____$1;
}
} else {
return and__6392__auto__;
}
})())){
return clojure.string.join.call(null," ",cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.compiler.resolve_types.call(null,env,ts),cljs.compiler.munge.call(null,n)], null),xs));
} else {
return line;
}
} else {
if(cljs.core.truth_(cljs.core.re_find.call(null,/@return/,line))){
var vec__15782 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__15783 = cljs.core.seq.call(null,vec__15782);
var first__15784 = cljs.core.first.call(null,seq__15783);
var seq__15783__$1 = cljs.core.next.call(null,seq__15783);
var p = first__15784;
var first__15784__$1 = cljs.core.first.call(null,seq__15783__$1);
var seq__15783__$2 = cljs.core.next.call(null,seq__15783__$1);
var ts = first__15784__$1;
var xs = seq__15783__$2;
if(cljs.core.truth_((function (){var and__6392__auto__ = cljs.core._EQ_.call(null,"@return",p);
if(and__6392__auto__){
var and__6392__auto____$1 = ts;
if(cljs.core.truth_(and__6392__auto____$1)){
return goog.string.startsWith(ts,"{");
} else {
return and__6392__auto____$1;
}
} else {
return and__6392__auto__;
}
})())){
return clojure.string.join.call(null," ",cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.compiler.resolve_types.call(null,env,ts)], null),xs));
} else {
return line;
}
} else {
return line;

}
}
});
cljs.compiler.checking_types_QMARK_ = (function cljs$compiler$checking_types_QMARK_(){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"warn","warn",-436710552),null,new cljs.core.Keyword(null,"error","error",-978969032),null], null), null).call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"closure-warnings","closure-warnings",1362834211),new cljs.core.Keyword(null,"check-types","check-types",-833794607)], null)));
});
/**
 * Emit a nicely formatted comment string.
 */
cljs.compiler.emit_comment = (function cljs$compiler$emit_comment(var_args){
var args15786 = [];
var len__7479__auto___15821 = arguments.length;
var i__7480__auto___15822 = (0);
while(true){
if((i__7480__auto___15822 < len__7479__auto___15821)){
args15786.push((arguments[i__7480__auto___15822]));

var G__15823 = (i__7480__auto___15822 + (1));
i__7480__auto___15822 = G__15823;
continue;
} else {
}
break;
}

var G__15788 = args15786.length;
switch (G__15788) {
case 2:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15786.length)].join('')));

}
});

cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$2 = (function (doc,jsdoc){
return cljs.compiler.emit_comment.call(null,null,doc,jsdoc);
});

cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3 = (function (env,doc,jsdoc){
var docs = (cljs.core.truth_(doc)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [doc], null):null);
var docs__$1 = (cljs.core.truth_(jsdoc)?cljs.core.concat.call(null,docs,jsdoc):docs);
var docs__$2 = cljs.core.remove.call(null,cljs.core.nil_QMARK_,docs__$1);
var print_comment_lines = ((function (docs,docs__$1,docs__$2){
return (function cljs$compiler$print_comment_lines(e){
var vec__15810 = cljs.core.map.call(null,((function (docs,docs__$1,docs__$2){
return (function (p1__15785_SHARP_){
if(cljs.core.truth_(cljs.compiler.checking_types_QMARK_.call(null))){
return cljs.compiler.munge_param_return.call(null,env,p1__15785_SHARP_);
} else {
return p1__15785_SHARP_;
}
});})(docs,docs__$1,docs__$2))
,clojure.string.split_lines.call(null,e));
var seq__15811 = cljs.core.seq.call(null,vec__15810);
var first__15812 = cljs.core.first.call(null,seq__15811);
var seq__15811__$1 = cljs.core.next.call(null,seq__15811);
var x = first__15812;
var ys = seq__15811__$1;
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,x,"*/","* /"));

var seq__15813 = cljs.core.seq.call(null,ys);
var chunk__15814 = null;
var count__15815 = (0);
var i__15816 = (0);
while(true){
if((i__15816 < count__15815)){
var next_line = cljs.core._nth.call(null,chunk__15814,i__15816);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));

var G__15825 = seq__15813;
var G__15826 = chunk__15814;
var G__15827 = count__15815;
var G__15828 = (i__15816 + (1));
seq__15813 = G__15825;
chunk__15814 = G__15826;
count__15815 = G__15827;
i__15816 = G__15828;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__15813);
if(temp__4657__auto__){
var seq__15813__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15813__$1)){
var c__7215__auto__ = cljs.core.chunk_first.call(null,seq__15813__$1);
var G__15829 = cljs.core.chunk_rest.call(null,seq__15813__$1);
var G__15830 = c__7215__auto__;
var G__15831 = cljs.core.count.call(null,c__7215__auto__);
var G__15832 = (0);
seq__15813 = G__15829;
chunk__15814 = G__15830;
count__15815 = G__15831;
i__15816 = G__15832;
continue;
} else {
var next_line = cljs.core.first.call(null,seq__15813__$1);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));

var G__15833 = cljs.core.next.call(null,seq__15813__$1);
var G__15834 = null;
var G__15835 = (0);
var G__15836 = (0);
seq__15813 = G__15833;
chunk__15814 = G__15834;
count__15815 = G__15835;
i__15816 = G__15836;
continue;
}
} else {
return null;
}
}
break;
}
});})(docs,docs__$1,docs__$2))
;
if(cljs.core.seq.call(null,docs__$2)){
cljs.compiler.emitln.call(null,"/**");

var seq__15817_15837 = cljs.core.seq.call(null,docs__$2);
var chunk__15818_15838 = null;
var count__15819_15839 = (0);
var i__15820_15840 = (0);
while(true){
if((i__15820_15840 < count__15819_15839)){
var e_15841 = cljs.core._nth.call(null,chunk__15818_15838,i__15820_15840);
if(cljs.core.truth_(e_15841)){
print_comment_lines.call(null,e_15841);
} else {
}

var G__15842 = seq__15817_15837;
var G__15843 = chunk__15818_15838;
var G__15844 = count__15819_15839;
var G__15845 = (i__15820_15840 + (1));
seq__15817_15837 = G__15842;
chunk__15818_15838 = G__15843;
count__15819_15839 = G__15844;
i__15820_15840 = G__15845;
continue;
} else {
var temp__4657__auto___15846 = cljs.core.seq.call(null,seq__15817_15837);
if(temp__4657__auto___15846){
var seq__15817_15847__$1 = temp__4657__auto___15846;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15817_15847__$1)){
var c__7215__auto___15848 = cljs.core.chunk_first.call(null,seq__15817_15847__$1);
var G__15849 = cljs.core.chunk_rest.call(null,seq__15817_15847__$1);
var G__15850 = c__7215__auto___15848;
var G__15851 = cljs.core.count.call(null,c__7215__auto___15848);
var G__15852 = (0);
seq__15817_15837 = G__15849;
chunk__15818_15838 = G__15850;
count__15819_15839 = G__15851;
i__15820_15840 = G__15852;
continue;
} else {
var e_15853 = cljs.core.first.call(null,seq__15817_15847__$1);
if(cljs.core.truth_(e_15853)){
print_comment_lines.call(null,e_15853);
} else {
}

var G__15854 = cljs.core.next.call(null,seq__15817_15847__$1);
var G__15855 = null;
var G__15856 = (0);
var G__15857 = (0);
seq__15817_15837 = G__15854;
chunk__15818_15838 = G__15855;
count__15819_15839 = G__15856;
i__15820_15840 = G__15857;
continue;
}
} else {
}
}
break;
}

return cljs.compiler.emitln.call(null," */");
} else {
return null;
}
});

cljs.compiler.emit_comment.cljs$lang$maxFixedArity = 3;

cljs.compiler.valid_define_value_QMARK_ = (function cljs$compiler$valid_define_value_QMARK_(x){
return (typeof x === 'string') || (x === true) || (x === false) || (typeof x === 'number');
});
cljs.compiler.get_define = (function cljs$compiler$get_define(mname,jsdoc){
var opts = cljs.core.get.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.Keyword(null,"options","options",99638489));
var and__6392__auto__ = cljs.core.some.call(null,((function (opts){
return (function (p1__15859_SHARP_){
return goog.string.startsWith(p1__15859_SHARP_,"@define");
});})(opts))
,jsdoc);
if(cljs.core.truth_(and__6392__auto__)){
var and__6392__auto____$1 = opts;
if(cljs.core.truth_(and__6392__auto____$1)){
var and__6392__auto____$2 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"none","none",1333468478));
if(and__6392__auto____$2){
var define = cljs.core.get_in.call(null,opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"closure-defines","closure-defines",-1213856476),[cljs.core.str(mname)].join('')], null));
if(cljs.core.truth_(cljs.compiler.valid_define_value_QMARK_.call(null,define))){
return cljs.core.pr_str.call(null,define);
} else {
return null;
}
} else {
return and__6392__auto____$2;
}
} else {
return and__6392__auto____$1;
}
} else {
return and__6392__auto__;
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"def","def",-1043430536),(function (p__15860){
var map__15861 = p__15860;
var map__15861__$1 = ((((!((map__15861 == null)))?((((map__15861.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15861.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15861):map__15861);
var name = cljs.core.get.call(null,map__15861__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var var$ = cljs.core.get.call(null,map__15861__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var init = cljs.core.get.call(null,map__15861__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var env = cljs.core.get.call(null,map__15861__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var doc = cljs.core.get.call(null,map__15861__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var jsdoc = cljs.core.get.call(null,map__15861__$1,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516));
var export$ = cljs.core.get.call(null,map__15861__$1,new cljs.core.Keyword(null,"export","export",214356590));
var test = cljs.core.get.call(null,map__15861__$1,new cljs.core.Keyword(null,"test","test",577538877));
var var_ast = cljs.core.get.call(null,map__15861__$1,new cljs.core.Keyword(null,"var-ast","var-ast",1200379319));
if(cljs.core.truth_((function (){var or__6404__auto__ = init;
if(cljs.core.truth_(or__6404__auto__)){
return or__6404__auto__;
} else {
return new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env);
}
})())){
var mname = cljs.compiler.munge.call(null,name);
cljs.compiler.emit_comment.call(null,env,doc,cljs.core.concat.call(null,jsdoc,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516).cljs$core$IFn$_invoke$arity$1(init)));

if(cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env))){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,"return (");
} else {
}

cljs.compiler.emitln.call(null,"(function (){");
} else {
}

cljs.compiler.emits.call(null,var$);

if(cljs.core.truth_(init)){
cljs.compiler.emits.call(null," = ",(function (){var temp__4655__auto__ = cljs.compiler.get_define.call(null,mname,jsdoc);
if(cljs.core.truth_(temp__4655__auto__)){
var define = temp__4655__auto__;
return define;
} else {
return init;
}
})());
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,"; return (");

cljs.compiler.emits.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"var-special","var-special",1131576802),new cljs.core.Keyword(null,"env","env",-1815813235),cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291))], null),var_ast));

cljs.compiler.emitln.call(null,");})()");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,")");
} else {
}
} else {
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
} else {
cljs.compiler.emitln.call(null,";");
}

if(cljs.core.truth_(export$)){
cljs.compiler.emitln.call(null,"goog.exportSymbol('",cljs.compiler.munge.call(null,export$),"', ",mname,");");
} else {
}

if(cljs.core.truth_((function (){var and__6392__auto__ = cljs.analyzer._STAR_load_tests_STAR_;
if(cljs.core.truth_(and__6392__auto__)){
return test;
} else {
return and__6392__auto__;
}
})())){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,";");
} else {
}

return cljs.compiler.emitln.call(null,var$,".cljs$lang$test = ",test,";");
} else {
return null;
}
} else {
return null;
}
}));
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__15863){
var map__15884 = p__15863;
var map__15884__$1 = ((((!((map__15884 == null)))?((((map__15884.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15884.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15884):map__15884);
var name = cljs.core.get.call(null,map__15884__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__15884__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__15884__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var arglist = cljs.core.gensym.call(null,"arglist__");
var delegate_name = [cljs.core.str(cljs.compiler.munge.call(null,name)),cljs.core.str("__delegate")].join('');
cljs.compiler.emitln.call(null,"(function (",arglist,"){");

var seq__15886_15904 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.drop_last.call(null,(2),params)));
var chunk__15887_15905 = null;
var count__15888_15906 = (0);
var i__15889_15907 = (0);
while(true){
if((i__15889_15907 < count__15888_15906)){
var vec__15890_15908 = cljs.core._nth.call(null,chunk__15887_15905,i__15889_15907);
var i_15909 = cljs.core.nth.call(null,vec__15890_15908,(0),null);
var param_15910 = cljs.core.nth.call(null,vec__15890_15908,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_15910);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");

var G__15911 = seq__15886_15904;
var G__15912 = chunk__15887_15905;
var G__15913 = count__15888_15906;
var G__15914 = (i__15889_15907 + (1));
seq__15886_15904 = G__15911;
chunk__15887_15905 = G__15912;
count__15888_15906 = G__15913;
i__15889_15907 = G__15914;
continue;
} else {
var temp__4657__auto___15915 = cljs.core.seq.call(null,seq__15886_15904);
if(temp__4657__auto___15915){
var seq__15886_15916__$1 = temp__4657__auto___15915;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15886_15916__$1)){
var c__7215__auto___15917 = cljs.core.chunk_first.call(null,seq__15886_15916__$1);
var G__15918 = cljs.core.chunk_rest.call(null,seq__15886_15916__$1);
var G__15919 = c__7215__auto___15917;
var G__15920 = cljs.core.count.call(null,c__7215__auto___15917);
var G__15921 = (0);
seq__15886_15904 = G__15918;
chunk__15887_15905 = G__15919;
count__15888_15906 = G__15920;
i__15889_15907 = G__15921;
continue;
} else {
var vec__15893_15922 = cljs.core.first.call(null,seq__15886_15916__$1);
var i_15923 = cljs.core.nth.call(null,vec__15893_15922,(0),null);
var param_15924 = cljs.core.nth.call(null,vec__15893_15922,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_15924);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");

var G__15925 = cljs.core.next.call(null,seq__15886_15916__$1);
var G__15926 = null;
var G__15927 = (0);
var G__15928 = (0);
seq__15886_15904 = G__15925;
chunk__15887_15905 = G__15926;
count__15888_15906 = G__15927;
i__15889_15907 = G__15928;
continue;
}
} else {
}
}
break;
}

if(((1) < cljs.core.count.call(null,params))){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,cljs.core.butlast.call(null,params)));

cljs.compiler.emitln.call(null," = cljs.core.first(",arglist,");");

cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = cljs.core.rest(",arglist,");");

cljs.compiler.emits.call(null,"return ",delegate_name,"(");

var seq__15896_15929 = cljs.core.seq.call(null,params);
var chunk__15897_15930 = null;
var count__15898_15931 = (0);
var i__15899_15932 = (0);
while(true){
if((i__15899_15932 < count__15898_15931)){
var param_15933 = cljs.core._nth.call(null,chunk__15897_15930,i__15899_15932);
cljs.compiler.emit.call(null,param_15933);

if(cljs.core._EQ_.call(null,param_15933,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__15934 = seq__15896_15929;
var G__15935 = chunk__15897_15930;
var G__15936 = count__15898_15931;
var G__15937 = (i__15899_15932 + (1));
seq__15896_15929 = G__15934;
chunk__15897_15930 = G__15935;
count__15898_15931 = G__15936;
i__15899_15932 = G__15937;
continue;
} else {
var temp__4657__auto___15938 = cljs.core.seq.call(null,seq__15896_15929);
if(temp__4657__auto___15938){
var seq__15896_15939__$1 = temp__4657__auto___15938;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15896_15939__$1)){
var c__7215__auto___15940 = cljs.core.chunk_first.call(null,seq__15896_15939__$1);
var G__15941 = cljs.core.chunk_rest.call(null,seq__15896_15939__$1);
var G__15942 = c__7215__auto___15940;
var G__15943 = cljs.core.count.call(null,c__7215__auto___15940);
var G__15944 = (0);
seq__15896_15929 = G__15941;
chunk__15897_15930 = G__15942;
count__15898_15931 = G__15943;
i__15899_15932 = G__15944;
continue;
} else {
var param_15945 = cljs.core.first.call(null,seq__15896_15939__$1);
cljs.compiler.emit.call(null,param_15945);

if(cljs.core._EQ_.call(null,param_15945,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__15946 = cljs.core.next.call(null,seq__15896_15939__$1);
var G__15947 = null;
var G__15948 = (0);
var G__15949 = (0);
seq__15896_15929 = G__15946;
chunk__15897_15930 = G__15947;
count__15898_15931 = G__15948;
i__15899_15932 = G__15949;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,");");
} else {
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = cljs.core.seq(",arglist,");");

cljs.compiler.emits.call(null,"return ",delegate_name,"(");

var seq__15900_15950 = cljs.core.seq.call(null,params);
var chunk__15901_15951 = null;
var count__15902_15952 = (0);
var i__15903_15953 = (0);
while(true){
if((i__15903_15953 < count__15902_15952)){
var param_15954 = cljs.core._nth.call(null,chunk__15901_15951,i__15903_15953);
cljs.compiler.emit.call(null,param_15954);

if(cljs.core._EQ_.call(null,param_15954,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__15955 = seq__15900_15950;
var G__15956 = chunk__15901_15951;
var G__15957 = count__15902_15952;
var G__15958 = (i__15903_15953 + (1));
seq__15900_15950 = G__15955;
chunk__15901_15951 = G__15956;
count__15902_15952 = G__15957;
i__15903_15953 = G__15958;
continue;
} else {
var temp__4657__auto___15959 = cljs.core.seq.call(null,seq__15900_15950);
if(temp__4657__auto___15959){
var seq__15900_15960__$1 = temp__4657__auto___15959;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15900_15960__$1)){
var c__7215__auto___15961 = cljs.core.chunk_first.call(null,seq__15900_15960__$1);
var G__15962 = cljs.core.chunk_rest.call(null,seq__15900_15960__$1);
var G__15963 = c__7215__auto___15961;
var G__15964 = cljs.core.count.call(null,c__7215__auto___15961);
var G__15965 = (0);
seq__15900_15950 = G__15962;
chunk__15901_15951 = G__15963;
count__15902_15952 = G__15964;
i__15903_15953 = G__15965;
continue;
} else {
var param_15966 = cljs.core.first.call(null,seq__15900_15960__$1);
cljs.compiler.emit.call(null,param_15966);

if(cljs.core._EQ_.call(null,param_15966,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__15967 = cljs.core.next.call(null,seq__15900_15960__$1);
var G__15968 = null;
var G__15969 = (0);
var G__15970 = (0);
seq__15900_15950 = G__15967;
chunk__15901_15951 = G__15968;
count__15902_15952 = G__15969;
i__15903_15953 = G__15970;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,");");
}

return cljs.compiler.emits.call(null,"})");
});
cljs.compiler.emit_fn_params = (function cljs$compiler$emit_fn_params(params){
var seq__15975 = cljs.core.seq.call(null,params);
var chunk__15976 = null;
var count__15977 = (0);
var i__15978 = (0);
while(true){
if((i__15978 < count__15977)){
var param = cljs.core._nth.call(null,chunk__15976,i__15978);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__15979 = seq__15975;
var G__15980 = chunk__15976;
var G__15981 = count__15977;
var G__15982 = (i__15978 + (1));
seq__15975 = G__15979;
chunk__15976 = G__15980;
count__15977 = G__15981;
i__15978 = G__15982;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__15975);
if(temp__4657__auto__){
var seq__15975__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15975__$1)){
var c__7215__auto__ = cljs.core.chunk_first.call(null,seq__15975__$1);
var G__15983 = cljs.core.chunk_rest.call(null,seq__15975__$1);
var G__15984 = c__7215__auto__;
var G__15985 = cljs.core.count.call(null,c__7215__auto__);
var G__15986 = (0);
seq__15975 = G__15983;
chunk__15976 = G__15984;
count__15977 = G__15985;
i__15978 = G__15986;
continue;
} else {
var param = cljs.core.first.call(null,seq__15975__$1);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__15987 = cljs.core.next.call(null,seq__15975__$1);
var G__15988 = null;
var G__15989 = (0);
var G__15990 = (0);
seq__15975 = G__15987;
chunk__15976 = G__15988;
count__15977 = G__15989;
i__15978 = G__15990;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__15991){
var map__15994 = p__15991;
var map__15994__$1 = ((((!((map__15994 == null)))?((((map__15994.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15994.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15994):map__15994);
var type = cljs.core.get.call(null,map__15994__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__15994__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var variadic = cljs.core.get.call(null,map__15994__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var params = cljs.core.get.call(null,map__15994__$1,new cljs.core.Keyword(null,"params","params",710516235));
var expr = cljs.core.get.call(null,map__15994__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__15994__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__15994__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var max_fixed_arity = cljs.core.get.call(null,map__15994__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var env__15435__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15435__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"(function ",cljs.compiler.munge.call(null,name),"(");

cljs.compiler.emit_fn_params.call(null,params);

cljs.compiler.emitln.call(null,"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"while(true){");
} else {
}

cljs.compiler.emits.call(null,expr);

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"break;");

cljs.compiler.emitln.call(null,"}");
} else {
}

cljs.compiler.emits.call(null,"})");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15435__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
/**
 * Emit code that copies function arguments into an array starting at an index.
 *   Returns name of var holding the array.
 */
cljs.compiler.emit_arguments_to_array = (function cljs$compiler$emit_arguments_to_array(startslice){
if(((startslice >= (0))) && (cljs.core.integer_QMARK_.call(null,startslice))){
} else {
throw (new Error("Assert failed: (and (>= startslice 0) (integer? startslice))"));
}

var mname = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
var i = [cljs.core.str(mname),cljs.core.str("__i")].join('');
var a = [cljs.core.str(mname),cljs.core.str("__a")].join('');
cljs.compiler.emitln.call(null,"var ",i," = 0, ",a," = new Array(arguments.length -  ",startslice,");");

cljs.compiler.emitln.call(null,"while (",i," < ",a,".length) {",a,"[",i,"] = arguments[",i," + ",startslice,"]; ++",i,";}");

return a;
});
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__15996){
var map__16007 = p__15996;
var map__16007__$1 = ((((!((map__16007 == null)))?((((map__16007.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16007.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16007):map__16007);
var f = map__16007__$1;
var type = cljs.core.get.call(null,map__16007__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__16007__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var variadic = cljs.core.get.call(null,map__16007__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var params = cljs.core.get.call(null,map__16007__$1,new cljs.core.Keyword(null,"params","params",710516235));
var expr = cljs.core.get.call(null,map__16007__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__16007__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__16007__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var max_fixed_arity = cljs.core.get.call(null,map__16007__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var env__15435__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15435__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var name_16017__$1 = (function (){var or__6404__auto__ = name;
if(cljs.core.truth_(or__6404__auto__)){
return or__6404__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_16018 = cljs.compiler.munge.call(null,name_16017__$1);
var delegate_name_16019 = [cljs.core.str(mname_16018),cljs.core.str("__delegate")].join('');
cljs.compiler.emitln.call(null,"(function() { ");

cljs.compiler.emits.call(null,"var ",delegate_name_16019," = function (");

var seq__16009_16020 = cljs.core.seq.call(null,params);
var chunk__16010_16021 = null;
var count__16011_16022 = (0);
var i__16012_16023 = (0);
while(true){
if((i__16012_16023 < count__16011_16022)){
var param_16024 = cljs.core._nth.call(null,chunk__16010_16021,i__16012_16023);
cljs.compiler.emit.call(null,param_16024);

if(cljs.core._EQ_.call(null,param_16024,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__16025 = seq__16009_16020;
var G__16026 = chunk__16010_16021;
var G__16027 = count__16011_16022;
var G__16028 = (i__16012_16023 + (1));
seq__16009_16020 = G__16025;
chunk__16010_16021 = G__16026;
count__16011_16022 = G__16027;
i__16012_16023 = G__16028;
continue;
} else {
var temp__4657__auto___16029 = cljs.core.seq.call(null,seq__16009_16020);
if(temp__4657__auto___16029){
var seq__16009_16030__$1 = temp__4657__auto___16029;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16009_16030__$1)){
var c__7215__auto___16031 = cljs.core.chunk_first.call(null,seq__16009_16030__$1);
var G__16032 = cljs.core.chunk_rest.call(null,seq__16009_16030__$1);
var G__16033 = c__7215__auto___16031;
var G__16034 = cljs.core.count.call(null,c__7215__auto___16031);
var G__16035 = (0);
seq__16009_16020 = G__16032;
chunk__16010_16021 = G__16033;
count__16011_16022 = G__16034;
i__16012_16023 = G__16035;
continue;
} else {
var param_16036 = cljs.core.first.call(null,seq__16009_16030__$1);
cljs.compiler.emit.call(null,param_16036);

if(cljs.core._EQ_.call(null,param_16036,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__16037 = cljs.core.next.call(null,seq__16009_16030__$1);
var G__16038 = null;
var G__16039 = (0);
var G__16040 = (0);
seq__16009_16020 = G__16037;
chunk__16010_16021 = G__16038;
count__16011_16022 = G__16039;
i__16012_16023 = G__16040;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"){");

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"while(true){");
} else {
}

cljs.compiler.emits.call(null,expr);

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"break;");

cljs.compiler.emitln.call(null,"}");
} else {
}

cljs.compiler.emitln.call(null,"};");

cljs.compiler.emitln.call(null,"var ",mname_16018," = function (",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):params)),"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",(cljs.core.count.call(null,params) - (1)),") {");

var a_16041 = cljs.compiler.emit_arguments_to_array.call(null,(cljs.core.count.call(null,params) - (1)));
cljs.compiler.emitln.call(null,"  ",cljs.core.last.call(null,params)," = new cljs.core.IndexedSeq(",a_16041,",0);");

cljs.compiler.emitln.call(null,"} ");
} else {
}

cljs.compiler.emits.call(null,"return ",delegate_name_16019,".call(this,");

var seq__16013_16042 = cljs.core.seq.call(null,params);
var chunk__16014_16043 = null;
var count__16015_16044 = (0);
var i__16016_16045 = (0);
while(true){
if((i__16016_16045 < count__16015_16044)){
var param_16046 = cljs.core._nth.call(null,chunk__16014_16043,i__16016_16045);
cljs.compiler.emit.call(null,param_16046);

if(cljs.core._EQ_.call(null,param_16046,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__16047 = seq__16013_16042;
var G__16048 = chunk__16014_16043;
var G__16049 = count__16015_16044;
var G__16050 = (i__16016_16045 + (1));
seq__16013_16042 = G__16047;
chunk__16014_16043 = G__16048;
count__16015_16044 = G__16049;
i__16016_16045 = G__16050;
continue;
} else {
var temp__4657__auto___16051 = cljs.core.seq.call(null,seq__16013_16042);
if(temp__4657__auto___16051){
var seq__16013_16052__$1 = temp__4657__auto___16051;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16013_16052__$1)){
var c__7215__auto___16053 = cljs.core.chunk_first.call(null,seq__16013_16052__$1);
var G__16054 = cljs.core.chunk_rest.call(null,seq__16013_16052__$1);
var G__16055 = c__7215__auto___16053;
var G__16056 = cljs.core.count.call(null,c__7215__auto___16053);
var G__16057 = (0);
seq__16013_16042 = G__16054;
chunk__16014_16043 = G__16055;
count__16015_16044 = G__16056;
i__16016_16045 = G__16057;
continue;
} else {
var param_16058 = cljs.core.first.call(null,seq__16013_16052__$1);
cljs.compiler.emit.call(null,param_16058);

if(cljs.core._EQ_.call(null,param_16058,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__16059 = cljs.core.next.call(null,seq__16013_16052__$1);
var G__16060 = null;
var G__16061 = (0);
var G__16062 = (0);
seq__16013_16042 = G__16059;
chunk__16014_16043 = G__16060;
count__16015_16044 = G__16061;
i__16016_16045 = G__16062;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.call(null,");");

cljs.compiler.emitln.call(null,"};");

cljs.compiler.emitln.call(null,mname_16018,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emits.call(null,mname_16018,".cljs$lang$applyTo = ");

cljs.compiler.emit_apply_to.call(null,cljs.core.assoc.call(null,f,new cljs.core.Keyword(null,"name","name",1843675177),name_16017__$1));

cljs.compiler.emitln.call(null,";");

cljs.compiler.emitln.call(null,mname_16018,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_16019,";");

cljs.compiler.emitln.call(null,"return ",mname_16018,";");

cljs.compiler.emitln.call(null,"})()");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15435__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p__16066){
var map__16067 = p__16066;
var map__16067__$1 = ((((!((map__16067 == null)))?((((map__16067.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16067.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16067):map__16067);
var name = cljs.core.get.call(null,map__16067__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__16067__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var methods$ = cljs.core.get.call(null,map__16067__$1,new cljs.core.Keyword(null,"methods","methods",453930866));
var max_fixed_arity = cljs.core.get.call(null,map__16067__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var variadic = cljs.core.get.call(null,map__16067__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var recur_frames = cljs.core.get.call(null,map__16067__$1,new cljs.core.Keyword(null,"recur-frames","recur-frames",-307205196));
var loop_lets = cljs.core.get.call(null,map__16067__$1,new cljs.core.Keyword(null,"loop-lets","loop-lets",2036794185));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var loop_locals = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.compiler.munge,cljs.core.concat.call(null,cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.filter.call(null,((function (map__16067,map__16067__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__16063_SHARP_){
var and__6392__auto__ = p1__16063_SHARP_;
if(cljs.core.truth_(and__6392__auto__)){
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__16063_SHARP_));
} else {
return and__6392__auto__;
}
});})(map__16067,map__16067__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,recur_frames)),cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"params","params",710516235),loop_lets))));
if(loop_locals){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emitln.call(null,"((function (",cljs.compiler.comma_sep.call(null,cljs.core.map.call(null,cljs.compiler.munge,loop_locals)),"){");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
} else {
cljs.compiler.emits.call(null,"return ");
}
} else {
}

if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,methods$))){
if(cljs.core.truth_(variadic)){
cljs.compiler.emit_variadic_fn_method.call(null,cljs.core.assoc.call(null,cljs.core.first.call(null,methods$),new cljs.core.Keyword(null,"name","name",1843675177),name));
} else {
cljs.compiler.emit_fn_method.call(null,cljs.core.assoc.call(null,cljs.core.first.call(null,methods$),new cljs.core.Keyword(null,"name","name",1843675177),name));
}
} else {
var name_16102__$1 = (function (){var or__6404__auto__ = name;
if(cljs.core.truth_(or__6404__auto__)){
return or__6404__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_16103 = cljs.compiler.munge.call(null,name_16102__$1);
var maxparams_16104 = cljs.core.apply.call(null,cljs.core.max_key,cljs.core.count,cljs.core.map.call(null,new cljs.core.Keyword(null,"params","params",710516235),methods$));
var mmap_16105 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (name_16102__$1,mname_16103,maxparams_16104,loop_locals,map__16067,map__16067__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.call(null,cljs.core.symbol.call(null,[cljs.core.str(mname_16103),cljs.core.str("__"),cljs.core.str(cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
});})(name_16102__$1,mname_16103,maxparams_16104,loop_locals,map__16067,map__16067__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,methods$));
var ms_16106 = cljs.core.sort_by.call(null,((function (name_16102__$1,mname_16103,maxparams_16104,mmap_16105,loop_locals,map__16067,map__16067__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__16064_SHARP_){
return cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__16064_SHARP_)));
});})(name_16102__$1,mname_16103,maxparams_16104,mmap_16105,loop_locals,map__16067,map__16067__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,cljs.core.seq.call(null,mmap_16105));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emitln.call(null,"(function() {");

cljs.compiler.emitln.call(null,"var ",mname_16103," = null;");

var seq__16069_16107 = cljs.core.seq.call(null,ms_16106);
var chunk__16070_16108 = null;
var count__16071_16109 = (0);
var i__16072_16110 = (0);
while(true){
if((i__16072_16110 < count__16071_16109)){
var vec__16073_16111 = cljs.core._nth.call(null,chunk__16070_16108,i__16072_16110);
var n_16112 = cljs.core.nth.call(null,vec__16073_16111,(0),null);
var meth_16113 = cljs.core.nth.call(null,vec__16073_16111,(1),null);
cljs.compiler.emits.call(null,"var ",n_16112," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_16113))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_16113);
} else {
cljs.compiler.emit_fn_method.call(null,meth_16113);
}

cljs.compiler.emitln.call(null,";");

var G__16114 = seq__16069_16107;
var G__16115 = chunk__16070_16108;
var G__16116 = count__16071_16109;
var G__16117 = (i__16072_16110 + (1));
seq__16069_16107 = G__16114;
chunk__16070_16108 = G__16115;
count__16071_16109 = G__16116;
i__16072_16110 = G__16117;
continue;
} else {
var temp__4657__auto___16118 = cljs.core.seq.call(null,seq__16069_16107);
if(temp__4657__auto___16118){
var seq__16069_16119__$1 = temp__4657__auto___16118;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16069_16119__$1)){
var c__7215__auto___16120 = cljs.core.chunk_first.call(null,seq__16069_16119__$1);
var G__16121 = cljs.core.chunk_rest.call(null,seq__16069_16119__$1);
var G__16122 = c__7215__auto___16120;
var G__16123 = cljs.core.count.call(null,c__7215__auto___16120);
var G__16124 = (0);
seq__16069_16107 = G__16121;
chunk__16070_16108 = G__16122;
count__16071_16109 = G__16123;
i__16072_16110 = G__16124;
continue;
} else {
var vec__16076_16125 = cljs.core.first.call(null,seq__16069_16119__$1);
var n_16126 = cljs.core.nth.call(null,vec__16076_16125,(0),null);
var meth_16127 = cljs.core.nth.call(null,vec__16076_16125,(1),null);
cljs.compiler.emits.call(null,"var ",n_16126," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_16127))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_16127);
} else {
cljs.compiler.emit_fn_method.call(null,meth_16127);
}

cljs.compiler.emitln.call(null,";");

var G__16128 = cljs.core.next.call(null,seq__16069_16119__$1);
var G__16129 = null;
var G__16130 = (0);
var G__16131 = (0);
seq__16069_16107 = G__16128;
chunk__16070_16108 = G__16129;
count__16071_16109 = G__16130;
i__16072_16110 = G__16131;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,mname_16103," = function(",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,maxparams_16104),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):maxparams_16104)),"){");

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,maxparams_16104));

cljs.compiler.emitln.call(null," = var_args;");
} else {
}

cljs.compiler.emitln.call(null,"switch(arguments.length){");

var seq__16079_16132 = cljs.core.seq.call(null,ms_16106);
var chunk__16080_16133 = null;
var count__16081_16134 = (0);
var i__16082_16135 = (0);
while(true){
if((i__16082_16135 < count__16081_16134)){
var vec__16083_16136 = cljs.core._nth.call(null,chunk__16080_16133,i__16082_16135);
var n_16137 = cljs.core.nth.call(null,vec__16083_16136,(0),null);
var meth_16138 = cljs.core.nth.call(null,vec__16083_16136,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_16138))){
cljs.compiler.emitln.call(null,"default:");

var restarg_16139 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_16139," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_16140 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_16139," = new cljs.core.IndexedSeq(",a_16140,",0);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_16137,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_16104)),(((cljs.core.count.call(null,maxparams_16104) > (1)))?", ":null),restarg_16139,");");
} else {
var pcnt_16141 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_16138));
cljs.compiler.emitln.call(null,"case ",pcnt_16141,":");

cljs.compiler.emitln.call(null,"return ",n_16137,".call(this",(((pcnt_16141 === (0)))?null:cljs.core._conj.call(null,(function (){var x__7238__auto__ = cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_16141,maxparams_16104));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7238__auto__);
})(),",")),");");
}

var G__16142 = seq__16079_16132;
var G__16143 = chunk__16080_16133;
var G__16144 = count__16081_16134;
var G__16145 = (i__16082_16135 + (1));
seq__16079_16132 = G__16142;
chunk__16080_16133 = G__16143;
count__16081_16134 = G__16144;
i__16082_16135 = G__16145;
continue;
} else {
var temp__4657__auto___16146 = cljs.core.seq.call(null,seq__16079_16132);
if(temp__4657__auto___16146){
var seq__16079_16147__$1 = temp__4657__auto___16146;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16079_16147__$1)){
var c__7215__auto___16148 = cljs.core.chunk_first.call(null,seq__16079_16147__$1);
var G__16149 = cljs.core.chunk_rest.call(null,seq__16079_16147__$1);
var G__16150 = c__7215__auto___16148;
var G__16151 = cljs.core.count.call(null,c__7215__auto___16148);
var G__16152 = (0);
seq__16079_16132 = G__16149;
chunk__16080_16133 = G__16150;
count__16081_16134 = G__16151;
i__16082_16135 = G__16152;
continue;
} else {
var vec__16086_16153 = cljs.core.first.call(null,seq__16079_16147__$1);
var n_16154 = cljs.core.nth.call(null,vec__16086_16153,(0),null);
var meth_16155 = cljs.core.nth.call(null,vec__16086_16153,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_16155))){
cljs.compiler.emitln.call(null,"default:");

var restarg_16156 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_16156," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_16157 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_16156," = new cljs.core.IndexedSeq(",a_16157,",0);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_16154,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_16104)),(((cljs.core.count.call(null,maxparams_16104) > (1)))?", ":null),restarg_16156,");");
} else {
var pcnt_16158 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_16155));
cljs.compiler.emitln.call(null,"case ",pcnt_16158,":");

cljs.compiler.emitln.call(null,"return ",n_16154,".call(this",(((pcnt_16158 === (0)))?null:cljs.core._conj.call(null,(function (){var x__7238__auto__ = cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_16158,maxparams_16104));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7238__auto__);
})(),",")),");");
}

var G__16159 = cljs.core.next.call(null,seq__16079_16147__$1);
var G__16160 = null;
var G__16161 = (0);
var G__16162 = (0);
seq__16079_16132 = G__16159;
chunk__16080_16133 = G__16160;
count__16081_16134 = G__16161;
i__16082_16135 = G__16162;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"throw(new Error('Invalid arity: ' + arguments.length));");

cljs.compiler.emitln.call(null,"};");

if(cljs.core.truth_(variadic)){
cljs.compiler.emitln.call(null,mname_16103,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emitln.call(null,mname_16103,".cljs$lang$applyTo = ",cljs.core.some.call(null,((function (name_16102__$1,mname_16103,maxparams_16104,mmap_16105,ms_16106,loop_locals,map__16067,map__16067__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__16065_SHARP_){
var vec__16089 = p1__16065_SHARP_;
var n = cljs.core.nth.call(null,vec__16089,(0),null);
var m = cljs.core.nth.call(null,vec__16089,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
});})(name_16102__$1,mname_16103,maxparams_16104,mmap_16105,ms_16106,loop_locals,map__16067,map__16067__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,ms_16106),".cljs$lang$applyTo;");
} else {
}

var seq__16092_16163 = cljs.core.seq.call(null,ms_16106);
var chunk__16093_16164 = null;
var count__16094_16165 = (0);
var i__16095_16166 = (0);
while(true){
if((i__16095_16166 < count__16094_16165)){
var vec__16096_16167 = cljs.core._nth.call(null,chunk__16093_16164,i__16095_16166);
var n_16168 = cljs.core.nth.call(null,vec__16096_16167,(0),null);
var meth_16169 = cljs.core.nth.call(null,vec__16096_16167,(1),null);
var c_16170 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_16169));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_16169))){
cljs.compiler.emitln.call(null,mname_16103,".cljs$core$IFn$_invoke$arity$variadic = ",n_16168,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_16103,".cljs$core$IFn$_invoke$arity$",c_16170," = ",n_16168,";");
}

var G__16171 = seq__16092_16163;
var G__16172 = chunk__16093_16164;
var G__16173 = count__16094_16165;
var G__16174 = (i__16095_16166 + (1));
seq__16092_16163 = G__16171;
chunk__16093_16164 = G__16172;
count__16094_16165 = G__16173;
i__16095_16166 = G__16174;
continue;
} else {
var temp__4657__auto___16175 = cljs.core.seq.call(null,seq__16092_16163);
if(temp__4657__auto___16175){
var seq__16092_16176__$1 = temp__4657__auto___16175;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16092_16176__$1)){
var c__7215__auto___16177 = cljs.core.chunk_first.call(null,seq__16092_16176__$1);
var G__16178 = cljs.core.chunk_rest.call(null,seq__16092_16176__$1);
var G__16179 = c__7215__auto___16177;
var G__16180 = cljs.core.count.call(null,c__7215__auto___16177);
var G__16181 = (0);
seq__16092_16163 = G__16178;
chunk__16093_16164 = G__16179;
count__16094_16165 = G__16180;
i__16095_16166 = G__16181;
continue;
} else {
var vec__16099_16182 = cljs.core.first.call(null,seq__16092_16176__$1);
var n_16183 = cljs.core.nth.call(null,vec__16099_16182,(0),null);
var meth_16184 = cljs.core.nth.call(null,vec__16099_16182,(1),null);
var c_16185 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_16184));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_16184))){
cljs.compiler.emitln.call(null,mname_16103,".cljs$core$IFn$_invoke$arity$variadic = ",n_16183,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_16103,".cljs$core$IFn$_invoke$arity$",c_16185," = ",n_16183,";");
}

var G__16186 = cljs.core.next.call(null,seq__16092_16176__$1);
var G__16187 = null;
var G__16188 = (0);
var G__16189 = (0);
seq__16092_16163 = G__16186;
chunk__16093_16164 = G__16187;
count__16094_16165 = G__16188;
i__16095_16166 = G__16189;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"return ",mname_16103,";");

cljs.compiler.emitln.call(null,"})()");
}

if(loop_locals){
return cljs.compiler.emitln.call(null,";})(",cljs.compiler.comma_sep.call(null,loop_locals),"))");
} else {
return null;
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"do","do",46310725),(function (p__16190){
var map__16191 = p__16190;
var map__16191__$1 = ((((!((map__16191 == null)))?((((map__16191.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16191.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16191):map__16191);
var statements = cljs.core.get.call(null,map__16191__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var ret = cljs.core.get.call(null,map__16191__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var env = cljs.core.get.call(null,map__16191__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_((function (){var and__6392__auto__ = statements;
if(cljs.core.truth_(and__6392__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context);
} else {
return and__6392__auto__;
}
})())){
cljs.compiler.emitln.call(null,"(function (){");
} else {
}

var seq__16193_16197 = cljs.core.seq.call(null,statements);
var chunk__16194_16198 = null;
var count__16195_16199 = (0);
var i__16196_16200 = (0);
while(true){
if((i__16196_16200 < count__16195_16199)){
var s_16201 = cljs.core._nth.call(null,chunk__16194_16198,i__16196_16200);
cljs.compiler.emitln.call(null,s_16201);

var G__16202 = seq__16193_16197;
var G__16203 = chunk__16194_16198;
var G__16204 = count__16195_16199;
var G__16205 = (i__16196_16200 + (1));
seq__16193_16197 = G__16202;
chunk__16194_16198 = G__16203;
count__16195_16199 = G__16204;
i__16196_16200 = G__16205;
continue;
} else {
var temp__4657__auto___16206 = cljs.core.seq.call(null,seq__16193_16197);
if(temp__4657__auto___16206){
var seq__16193_16207__$1 = temp__4657__auto___16206;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16193_16207__$1)){
var c__7215__auto___16208 = cljs.core.chunk_first.call(null,seq__16193_16207__$1);
var G__16209 = cljs.core.chunk_rest.call(null,seq__16193_16207__$1);
var G__16210 = c__7215__auto___16208;
var G__16211 = cljs.core.count.call(null,c__7215__auto___16208);
var G__16212 = (0);
seq__16193_16197 = G__16209;
chunk__16194_16198 = G__16210;
count__16195_16199 = G__16211;
i__16196_16200 = G__16212;
continue;
} else {
var s_16213 = cljs.core.first.call(null,seq__16193_16207__$1);
cljs.compiler.emitln.call(null,s_16213);

var G__16214 = cljs.core.next.call(null,seq__16193_16207__$1);
var G__16215 = null;
var G__16216 = (0);
var G__16217 = (0);
seq__16193_16197 = G__16214;
chunk__16194_16198 = G__16215;
count__16195_16199 = G__16216;
i__16196_16200 = G__16217;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emit.call(null,ret);

if(cljs.core.truth_((function (){var and__6392__auto__ = statements;
if(cljs.core.truth_(and__6392__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context);
} else {
return and__6392__auto__;
}
})())){
return cljs.compiler.emitln.call(null,"})()");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"try","try",1380742522),(function (p__16218){
var map__16219 = p__16218;
var map__16219__$1 = ((((!((map__16219 == null)))?((((map__16219.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16219.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16219):map__16219);
var env = cljs.core.get.call(null,map__16219__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var try$ = cljs.core.get.call(null,map__16219__$1,new cljs.core.Keyword(null,"try","try",1380742522));
var catch$ = cljs.core.get.call(null,map__16219__$1,new cljs.core.Keyword(null,"catch","catch",1038065524));
var name = cljs.core.get.call(null,map__16219__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var finally$ = cljs.core.get.call(null,map__16219__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_((function (){var or__6404__auto__ = name;
if(cljs.core.truth_(or__6404__auto__)){
return or__6404__auto__;
} else {
return finally$;
}
})())){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

cljs.compiler.emits.call(null,"try{",try$,"}");

if(cljs.core.truth_(name)){
cljs.compiler.emits.call(null,"catch (",cljs.compiler.munge.call(null,name),"){",catch$,"}");
} else {
}

if(cljs.core.truth_(finally$)){
if(cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"constant","constant",-379609303),new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(finally$))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("finally block cannot contain constant"),cljs.core.str("\n"),cljs.core.str("(not= :constant (:op finally))")].join('')));
}

cljs.compiler.emits.call(null,"finally {",finally$,"}");
} else {
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"})()");
} else {
return null;
}
} else {
return cljs.compiler.emits.call(null,try$);
}
}));
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__16221,is_loop){
var map__16233 = p__16221;
var map__16233__$1 = ((((!((map__16233 == null)))?((((map__16233.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16233.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16233):map__16233);
var bindings = cljs.core.get.call(null,map__16233__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var expr = cljs.core.get.call(null,map__16233__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__16233__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var _STAR_lexical_renames_STAR_16235_16244 = cljs.compiler._STAR_lexical_renames_STAR_;
cljs.compiler._STAR_lexical_renames_STAR_ = cljs.core.into.call(null,cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),context))?cljs.core.map.call(null,((function (_STAR_lexical_renames_STAR_16235_16244,context,map__16233,map__16233__$1,bindings,expr,env){
return (function (binding){
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.compiler.hash_scope.call(null,binding),cljs.core.gensym.call(null,[cljs.core.str(name),cljs.core.str("-")].join(''))],null));
});})(_STAR_lexical_renames_STAR_16235_16244,context,map__16233,map__16233__$1,bindings,expr,env))
,bindings):null));

try{var seq__16236_16245 = cljs.core.seq.call(null,bindings);
var chunk__16237_16246 = null;
var count__16238_16247 = (0);
var i__16239_16248 = (0);
while(true){
if((i__16239_16248 < count__16238_16247)){
var map__16240_16249 = cljs.core._nth.call(null,chunk__16237_16246,i__16239_16248);
var map__16240_16250__$1 = ((((!((map__16240_16249 == null)))?((((map__16240_16249.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16240_16249.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16240_16249):map__16240_16249);
var binding_16251 = map__16240_16250__$1;
var init_16252 = cljs.core.get.call(null,map__16240_16250__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_16251);

cljs.compiler.emitln.call(null," = ",init_16252,";");

var G__16253 = seq__16236_16245;
var G__16254 = chunk__16237_16246;
var G__16255 = count__16238_16247;
var G__16256 = (i__16239_16248 + (1));
seq__16236_16245 = G__16253;
chunk__16237_16246 = G__16254;
count__16238_16247 = G__16255;
i__16239_16248 = G__16256;
continue;
} else {
var temp__4657__auto___16257 = cljs.core.seq.call(null,seq__16236_16245);
if(temp__4657__auto___16257){
var seq__16236_16258__$1 = temp__4657__auto___16257;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16236_16258__$1)){
var c__7215__auto___16259 = cljs.core.chunk_first.call(null,seq__16236_16258__$1);
var G__16260 = cljs.core.chunk_rest.call(null,seq__16236_16258__$1);
var G__16261 = c__7215__auto___16259;
var G__16262 = cljs.core.count.call(null,c__7215__auto___16259);
var G__16263 = (0);
seq__16236_16245 = G__16260;
chunk__16237_16246 = G__16261;
count__16238_16247 = G__16262;
i__16239_16248 = G__16263;
continue;
} else {
var map__16242_16264 = cljs.core.first.call(null,seq__16236_16258__$1);
var map__16242_16265__$1 = ((((!((map__16242_16264 == null)))?((((map__16242_16264.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16242_16264.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16242_16264):map__16242_16264);
var binding_16266 = map__16242_16265__$1;
var init_16267 = cljs.core.get.call(null,map__16242_16265__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_16266);

cljs.compiler.emitln.call(null," = ",init_16267,";");

var G__16268 = cljs.core.next.call(null,seq__16236_16258__$1);
var G__16269 = null;
var G__16270 = (0);
var G__16271 = (0);
seq__16236_16245 = G__16268;
chunk__16237_16246 = G__16269;
count__16238_16247 = G__16270;
i__16239_16248 = G__16271;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(is_loop)){
cljs.compiler.emitln.call(null,"while(true){");
} else {
}

cljs.compiler.emits.call(null,expr);

if(cljs.core.truth_(is_loop)){
cljs.compiler.emitln.call(null,"break;");

cljs.compiler.emitln.call(null,"}");
} else {
}
}finally {cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR_16235_16244;
}
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"})()");
} else {
return null;
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"let","let",-1282412701),(function (ast){
return cljs.compiler.emit_let.call(null,ast,false);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"loop","loop",-395552849),(function (ast){
return cljs.compiler.emit_let.call(null,ast,true);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"recur","recur",-437573268),(function (p__16272){
var map__16273 = p__16272;
var map__16273__$1 = ((((!((map__16273 == null)))?((((map__16273.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16273.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16273):map__16273);
var frame = cljs.core.get.call(null,map__16273__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var exprs = cljs.core.get.call(null,map__16273__$1,new cljs.core.Keyword(null,"exprs","exprs",1795829094));
var env = cljs.core.get.call(null,map__16273__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var temps = cljs.core.vec.call(null,cljs.core.take.call(null,cljs.core.count.call(null,exprs),cljs.core.repeatedly.call(null,cljs.core.gensym)));
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(frame);
var n__7319__auto___16275 = cljs.core.count.call(null,exprs);
var i_16276 = (0);
while(true){
if((i_16276 < n__7319__auto___16275)){
cljs.compiler.emitln.call(null,"var ",temps.call(null,i_16276)," = ",exprs.call(null,i_16276),";");

var G__16277 = (i_16276 + (1));
i_16276 = G__16277;
continue;
} else {
}
break;
}

var n__7319__auto___16278 = cljs.core.count.call(null,exprs);
var i_16279 = (0);
while(true){
if((i_16279 < n__7319__auto___16278)){
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,params.call(null,i_16279))," = ",temps.call(null,i_16279),";");

var G__16280 = (i_16279 + (1));
i_16279 = G__16280;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.call(null,"continue;");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"letfn","letfn",-2121022354),(function (p__16281){
var map__16282 = p__16281;
var map__16282__$1 = ((((!((map__16282 == null)))?((((map__16282.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16282.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16282):map__16282);
var bindings = cljs.core.get.call(null,map__16282__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var expr = cljs.core.get.call(null,map__16282__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__16282__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var seq__16284_16292 = cljs.core.seq.call(null,bindings);
var chunk__16285_16293 = null;
var count__16286_16294 = (0);
var i__16287_16295 = (0);
while(true){
if((i__16287_16295 < count__16286_16294)){
var map__16288_16296 = cljs.core._nth.call(null,chunk__16285_16293,i__16287_16295);
var map__16288_16297__$1 = ((((!((map__16288_16296 == null)))?((((map__16288_16296.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16288_16296.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16288_16296):map__16288_16296);
var binding_16298 = map__16288_16297__$1;
var init_16299 = cljs.core.get.call(null,map__16288_16297__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_16298)," = ",init_16299,";");

var G__16300 = seq__16284_16292;
var G__16301 = chunk__16285_16293;
var G__16302 = count__16286_16294;
var G__16303 = (i__16287_16295 + (1));
seq__16284_16292 = G__16300;
chunk__16285_16293 = G__16301;
count__16286_16294 = G__16302;
i__16287_16295 = G__16303;
continue;
} else {
var temp__4657__auto___16304 = cljs.core.seq.call(null,seq__16284_16292);
if(temp__4657__auto___16304){
var seq__16284_16305__$1 = temp__4657__auto___16304;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16284_16305__$1)){
var c__7215__auto___16306 = cljs.core.chunk_first.call(null,seq__16284_16305__$1);
var G__16307 = cljs.core.chunk_rest.call(null,seq__16284_16305__$1);
var G__16308 = c__7215__auto___16306;
var G__16309 = cljs.core.count.call(null,c__7215__auto___16306);
var G__16310 = (0);
seq__16284_16292 = G__16307;
chunk__16285_16293 = G__16308;
count__16286_16294 = G__16309;
i__16287_16295 = G__16310;
continue;
} else {
var map__16290_16311 = cljs.core.first.call(null,seq__16284_16305__$1);
var map__16290_16312__$1 = ((((!((map__16290_16311 == null)))?((((map__16290_16311.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16290_16311.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16290_16311):map__16290_16311);
var binding_16313 = map__16290_16312__$1;
var init_16314 = cljs.core.get.call(null,map__16290_16312__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_16313)," = ",init_16314,";");

var G__16315 = cljs.core.next.call(null,seq__16284_16305__$1);
var G__16316 = null;
var G__16317 = (0);
var G__16318 = (0);
seq__16284_16292 = G__16315;
chunk__16285_16293 = G__16316;
count__16286_16294 = G__16317;
i__16287_16295 = G__16318;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.call(null,expr);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"})()");
} else {
return null;
}
}));
cljs.compiler.protocol_prefix = (function cljs$compiler$protocol_prefix(psym){
return cljs.core.symbol.call(null,[cljs.core.str([cljs.core.str(psym)].join('').replace((new RegExp("\\.","g")),"$").replace("/","$")),cljs.core.str("$")].join(''));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"invoke","invoke",1145927159),(function (p__16321){
var map__16322 = p__16321;
var map__16322__$1 = ((((!((map__16322 == null)))?((((map__16322.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16322.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16322):map__16322);
var expr = map__16322__$1;
var f = cljs.core.get.call(null,map__16322__$1,new cljs.core.Keyword(null,"f","f",-1597136552));
var args = cljs.core.get.call(null,map__16322__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__16322__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var info = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(f);
var fn_QMARK_ = (function (){var and__6392__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__6392__auto__)){
var and__6392__auto____$1 = cljs.core.not.call(null,new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(info));
if(and__6392__auto____$1){
return new cljs.core.Keyword(null,"fn-var","fn-var",1086204730).cljs$core$IFn$_invoke$arity$1(info);
} else {
return and__6392__auto____$1;
}
} else {
return and__6392__auto__;
}
})();
var protocol = new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(info);
var tag = cljs.analyzer.infer_tag.call(null,env,cljs.core.first.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr)));
var proto_QMARK_ = (function (){var and__6392__auto__ = protocol;
if(cljs.core.truth_(and__6392__auto__)){
var and__6392__auto____$1 = tag;
if(cljs.core.truth_(and__6392__auto____$1)){
var or__6404__auto__ = (function (){var and__6392__auto____$2 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__6392__auto____$2)){
var and__6392__auto____$3 = protocol;
if(cljs.core.truth_(and__6392__auto____$3)){
return cljs.core._EQ_.call(null,tag,new cljs.core.Symbol(null,"not-native","not-native",-236392494,null));
} else {
return and__6392__auto____$3;
}
} else {
return and__6392__auto____$2;
}
})();
if(cljs.core.truth_(or__6404__auto__)){
return or__6404__auto__;
} else {
var and__6392__auto____$2 = (function (){var or__6404__auto____$1 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(or__6404__auto____$1)){
return or__6404__auto____$1;
} else {
return new cljs.core.Keyword(null,"protocol-inline","protocol-inline",1550487556).cljs$core$IFn$_invoke$arity$1(env);
}
})();
if(cljs.core.truth_(and__6392__auto____$2)){
var or__6404__auto____$1 = cljs.core._EQ_.call(null,protocol,tag);
if(or__6404__auto____$1){
return or__6404__auto____$1;
} else {
var and__6392__auto____$3 = !(cljs.core.set_QMARK_.call(null,tag));
if(and__6392__auto____$3){
var and__6392__auto____$4 = cljs.core.not.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, [new cljs.core.Symbol(null,"clj","clj",980036099,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null,new cljs.core.Symbol(null,"object","object",-1179821820,null),null,new cljs.core.Symbol(null,"any","any",-948528346,null),null,new cljs.core.Symbol(null,"number","number",-1084057331,null),null,new cljs.core.Symbol(null,"clj-or-nil","clj-or-nil",-2008798668,null),null,new cljs.core.Symbol(null,"array","array",-440182315,null),null,new cljs.core.Symbol(null,"string","string",-349010059,null),null,new cljs.core.Symbol(null,"function","function",-486723946,null),null,new cljs.core.Symbol(null,"clj-nil","clj-nil",1321798654,null),null], null), null).call(null,tag));
if(and__6392__auto____$4){
var temp__4657__auto__ = new cljs.core.Keyword(null,"protocols","protocols",-5615896).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_existing_var.call(null,env,cljs.core.symbol.call(null,cljs.core.name.call(null,tag))));
if(cljs.core.truth_(temp__4657__auto__)){
var ps = temp__4657__auto__;
return ps.call(null,protocol);
} else {
return null;
}
} else {
return and__6392__auto____$4;
}
} else {
return and__6392__auto____$3;
}
}
} else {
return and__6392__auto____$2;
}
}
} else {
return and__6392__auto____$1;
}
} else {
return and__6392__auto__;
}
})();
var opt_not_QMARK_ = (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info),new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null))) && (cljs.core._EQ_.call(null,cljs.analyzer.infer_tag.call(null,env,cljs.core.first.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr))),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)));
var ns = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(info);
var js_QMARK_ = (cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"js","js",-886355190,null))) || (cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"Math","Math",2033287572,null)));
var goog_QMARK_ = (cljs.core.truth_(ns)?(function (){var or__6404__auto__ = cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"goog","goog",-70603925,null));
if(or__6404__auto__){
return or__6404__auto__;
} else {
var temp__4657__auto__ = [cljs.core.str(ns)].join('');
if(cljs.core.truth_(temp__4657__auto__)){
var ns_str = temp__4657__auto__;
return cljs.core._EQ_.call(null,cljs.core.get.call(null,clojure.string.split.call(null,ns_str,/\./),(0),null),"goog");
} else {
return null;
}
}
})():null);
var keyword_QMARK_ = (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f),new cljs.core.Keyword(null,"constant","constant",-379609303))) && ((new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(f) instanceof cljs.core.Keyword));
var vec__16324 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count.call(null,args);
var variadic_QMARK_ = new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(info);
var mps = new cljs.core.Keyword(null,"method-params","method-params",-980792179).cljs$core$IFn$_invoke$arity$1(info);
var mfa = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(info);
if((cljs.core.not.call(null,variadic_QMARK_)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,mps),(1)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
} else {
if(cljs.core.truth_((function (){var and__6392__auto__ = variadic_QMARK_;
if(cljs.core.truth_(and__6392__auto__)){
return (arity > mfa);
} else {
return and__6392__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__16322,map__16322__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str(cljs.compiler.munge.call(null,info__$1)),cljs.core.str(".cljs$core$IFn$_invoke$arity$variadic")].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__16322,map__16322__$1,expr,f,args,env){
return (function (p1__16319_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__16319_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__16322,map__16322__$1,expr,f,args,env))
);
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__16322,map__16322__$1,expr,f,args,env))
),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa], null)], null);
} else {
var arities = cljs.core.map.call(null,cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([arity], true),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__16322,map__16322__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str(cljs.compiler.munge.call(null,info__$1)),cljs.core.str(".cljs$core$IFn$_invoke$arity$"),cljs.core.str(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__16322,map__16322__$1,expr,f,args,env){
return (function (p1__16320_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__16320_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__16322,map__16322__$1,expr,f,args,env))
);
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__16322,map__16322__$1,expr,f,args,env))
),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.call(null,vec__16324,(0),null);
var variadic_invoke = cljs.core.nth.call(null,vec__16324,(1),null);
var env__15435__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15435__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(opt_not_QMARK_){
cljs.compiler.emits.call(null,"!(",cljs.core.first.call(null,args),")");
} else {
if(cljs.core.truth_(proto_QMARK_)){
var pimpl_16327 = [cljs.core.str(cljs.compiler.munge.call(null,cljs.compiler.protocol_prefix.call(null,protocol))),cljs.core.str(cljs.compiler.munge.call(null,cljs.core.name.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)))),cljs.core.str("$arity$"),cljs.core.str(cljs.core.count.call(null,args))].join('');
cljs.compiler.emits.call(null,cljs.core.first.call(null,args),".",pimpl_16327,"(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",cljs.core.rest.call(null,args))),")");
} else {
if(keyword_QMARK_){
cljs.compiler.emits.call(null,f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count.call(null,args),"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_16328 = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,mfa_16328,args)),(((mfa_16328 === (0)))?null:","),"cljs.core.array_seq([",cljs.compiler.comma_sep.call(null,cljs.core.drop.call(null,mfa_16328,args)),"], 0))");
} else {
if(cljs.core.truth_((function (){var or__6404__auto__ = fn_QMARK_;
if(cljs.core.truth_(or__6404__auto__)){
return or__6404__auto__;
} else {
var or__6404__auto____$1 = js_QMARK_;
if(or__6404__auto____$1){
return or__6404__auto____$1;
} else {
return goog_QMARK_;
}
}
})())){
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(cljs.core.truth_((function (){var and__6392__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__6392__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f__$1),new cljs.core.Keyword(null,"var","var",-769682797));
} else {
return and__6392__auto__;
}
})())){
var fprop_16329 = [cljs.core.str(".cljs$core$IFn$_invoke$arity$"),cljs.core.str(cljs.core.count.call(null,args))].join('');
cljs.compiler.emits.call(null,"(",f__$1,fprop_16329," ? ",f__$1,fprop_16329,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),"))");
} else {
cljs.compiler.emits.call(null,f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),")");
}

}
}
}
}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15435__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"new","new",-2085437848),(function (p__16330){
var map__16331 = p__16330;
var map__16331__$1 = ((((!((map__16331 == null)))?((((map__16331.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16331.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16331):map__16331);
var ctor = cljs.core.get.call(null,map__16331__$1,new cljs.core.Keyword(null,"ctor","ctor",1750864802));
var args = cljs.core.get.call(null,map__16331__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__16331__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__15435__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15435__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"(new ",ctor,"(",cljs.compiler.comma_sep.call(null,args),"))");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15435__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set!","set!",-1389817006),(function (p__16333){
var map__16334 = p__16333;
var map__16334__$1 = ((((!((map__16334 == null)))?((((map__16334.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16334.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16334):map__16334);
var target = cljs.core.get.call(null,map__16334__$1,new cljs.core.Keyword(null,"target","target",253001721));
var val = cljs.core.get.call(null,map__16334__$1,new cljs.core.Keyword(null,"val","val",128701612));
var env = cljs.core.get.call(null,map__16334__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__15435__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15435__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,target," = ",val);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15435__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.load_libs = (function cljs$compiler$load_libs(libs,seen,reloads){
var loaded_libs = cljs.compiler.munge.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null));
var loaded_libs_temp = cljs.compiler.munge.call(null,cljs.core.gensym.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null)));
if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs)))){
cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs_temp," = ",loaded_libs," || cljs.core.set();");

cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs," = cljs.core.set();");
} else {
}

var seq__16340_16344 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,seen)),cljs.core.distinct.call(null,cljs.core.vals.call(null,libs))));
var chunk__16341_16345 = null;
var count__16342_16346 = (0);
var i__16343_16347 = (0);
while(true){
if((i__16343_16347 < count__16342_16346)){
var lib_16348 = cljs.core._nth.call(null,chunk__16341_16345,i__16343_16347);
if(cljs.core.truth_((function (){var or__6404__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__6404__auto__)){
return or__6404__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_16348),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_16348),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__6404__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__6404__auto__)){
return or__6404__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_16348),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_16348),"', 'reload-all');");
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_16348),"');");

}
}

var G__16349 = seq__16340_16344;
var G__16350 = chunk__16341_16345;
var G__16351 = count__16342_16346;
var G__16352 = (i__16343_16347 + (1));
seq__16340_16344 = G__16349;
chunk__16341_16345 = G__16350;
count__16342_16346 = G__16351;
i__16343_16347 = G__16352;
continue;
} else {
var temp__4657__auto___16353 = cljs.core.seq.call(null,seq__16340_16344);
if(temp__4657__auto___16353){
var seq__16340_16354__$1 = temp__4657__auto___16353;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16340_16354__$1)){
var c__7215__auto___16355 = cljs.core.chunk_first.call(null,seq__16340_16354__$1);
var G__16356 = cljs.core.chunk_rest.call(null,seq__16340_16354__$1);
var G__16357 = c__7215__auto___16355;
var G__16358 = cljs.core.count.call(null,c__7215__auto___16355);
var G__16359 = (0);
seq__16340_16344 = G__16356;
chunk__16341_16345 = G__16357;
count__16342_16346 = G__16358;
i__16343_16347 = G__16359;
continue;
} else {
var lib_16360 = cljs.core.first.call(null,seq__16340_16354__$1);
if(cljs.core.truth_((function (){var or__6404__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__6404__auto__)){
return or__6404__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_16360),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_16360),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__6404__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__6404__auto__)){
return or__6404__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_16360),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_16360),"', 'reload-all');");
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_16360),"');");

}
}

var G__16361 = cljs.core.next.call(null,seq__16340_16354__$1);
var G__16362 = null;
var G__16363 = (0);
var G__16364 = (0);
seq__16340_16344 = G__16361;
chunk__16341_16345 = G__16362;
count__16342_16346 = G__16363;
i__16343_16347 = G__16364;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs)))){
return cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs," = cljs.core.into(",loaded_libs_temp,", ",loaded_libs,");");
} else {
return null;
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns","ns",441598760),(function (p__16365){
var map__16366 = p__16365;
var map__16366__$1 = ((((!((map__16366 == null)))?((((map__16366.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16366.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16366):map__16366);
var name = cljs.core.get.call(null,map__16366__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__16366__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__16366__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__16366__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__16366__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__16366__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
cljs.compiler.emitln.call(null,"goog.provide('",cljs.compiler.munge.call(null,name),"');");

if(cljs.core._EQ_.call(null,name,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null))){
} else {
cljs.compiler.emitln.call(null,"goog.require('cljs.core');");
}

cljs.compiler.load_libs.call(null,requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads));

return cljs.compiler.load_libs.call(null,uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads));
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"deftype*","deftype*",-677871637),(function (p__16368){
var map__16369 = p__16368;
var map__16369__$1 = ((((!((map__16369 == null)))?((((map__16369.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16369.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16369):map__16369);
var t = cljs.core.get.call(null,map__16369__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__16369__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__16369__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__16369__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__16369__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.map.call(null,cljs.compiler.munge,fields);
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__16371_16389 = cljs.core.seq.call(null,protocols);
var chunk__16372_16390 = null;
var count__16373_16391 = (0);
var i__16374_16392 = (0);
while(true){
if((i__16374_16392 < count__16373_16391)){
var protocol_16393 = cljs.core._nth.call(null,chunk__16372_16390,i__16374_16392);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str(protocol_16393)].join('')),"}");

var G__16394 = seq__16371_16389;
var G__16395 = chunk__16372_16390;
var G__16396 = count__16373_16391;
var G__16397 = (i__16374_16392 + (1));
seq__16371_16389 = G__16394;
chunk__16372_16390 = G__16395;
count__16373_16391 = G__16396;
i__16374_16392 = G__16397;
continue;
} else {
var temp__4657__auto___16398 = cljs.core.seq.call(null,seq__16371_16389);
if(temp__4657__auto___16398){
var seq__16371_16399__$1 = temp__4657__auto___16398;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16371_16399__$1)){
var c__7215__auto___16400 = cljs.core.chunk_first.call(null,seq__16371_16399__$1);
var G__16401 = cljs.core.chunk_rest.call(null,seq__16371_16399__$1);
var G__16402 = c__7215__auto___16400;
var G__16403 = cljs.core.count.call(null,c__7215__auto___16400);
var G__16404 = (0);
seq__16371_16389 = G__16401;
chunk__16372_16390 = G__16402;
count__16373_16391 = G__16403;
i__16374_16392 = G__16404;
continue;
} else {
var protocol_16405 = cljs.core.first.call(null,seq__16371_16399__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str(protocol_16405)].join('')),"}");

var G__16406 = cljs.core.next.call(null,seq__16371_16399__$1);
var G__16407 = null;
var G__16408 = (0);
var G__16409 = (0);
seq__16371_16389 = G__16406;
chunk__16372_16390 = G__16407;
count__16373_16391 = G__16408;
i__16374_16392 = G__16409;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__16375_16410 = cljs.core.seq.call(null,fields__$1);
var chunk__16376_16411 = null;
var count__16377_16412 = (0);
var i__16378_16413 = (0);
while(true){
if((i__16378_16413 < count__16377_16412)){
var fld_16414 = cljs.core._nth.call(null,chunk__16376_16411,i__16378_16413);
cljs.compiler.emitln.call(null,"this.",fld_16414," = ",fld_16414,";");

var G__16415 = seq__16375_16410;
var G__16416 = chunk__16376_16411;
var G__16417 = count__16377_16412;
var G__16418 = (i__16378_16413 + (1));
seq__16375_16410 = G__16415;
chunk__16376_16411 = G__16416;
count__16377_16412 = G__16417;
i__16378_16413 = G__16418;
continue;
} else {
var temp__4657__auto___16419 = cljs.core.seq.call(null,seq__16375_16410);
if(temp__4657__auto___16419){
var seq__16375_16420__$1 = temp__4657__auto___16419;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16375_16420__$1)){
var c__7215__auto___16421 = cljs.core.chunk_first.call(null,seq__16375_16420__$1);
var G__16422 = cljs.core.chunk_rest.call(null,seq__16375_16420__$1);
var G__16423 = c__7215__auto___16421;
var G__16424 = cljs.core.count.call(null,c__7215__auto___16421);
var G__16425 = (0);
seq__16375_16410 = G__16422;
chunk__16376_16411 = G__16423;
count__16377_16412 = G__16424;
i__16378_16413 = G__16425;
continue;
} else {
var fld_16426 = cljs.core.first.call(null,seq__16375_16420__$1);
cljs.compiler.emitln.call(null,"this.",fld_16426," = ",fld_16426,";");

var G__16427 = cljs.core.next.call(null,seq__16375_16420__$1);
var G__16428 = null;
var G__16429 = (0);
var G__16430 = (0);
seq__16375_16410 = G__16427;
chunk__16376_16411 = G__16428;
count__16377_16412 = G__16429;
i__16378_16413 = G__16430;
continue;
}
} else {
}
}
break;
}

var seq__16379_16431 = cljs.core.seq.call(null,pmasks);
var chunk__16380_16432 = null;
var count__16381_16433 = (0);
var i__16382_16434 = (0);
while(true){
if((i__16382_16434 < count__16381_16433)){
var vec__16383_16435 = cljs.core._nth.call(null,chunk__16380_16432,i__16382_16434);
var pno_16436 = cljs.core.nth.call(null,vec__16383_16435,(0),null);
var pmask_16437 = cljs.core.nth.call(null,vec__16383_16435,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_16436,"$ = ",pmask_16437,";");

var G__16438 = seq__16379_16431;
var G__16439 = chunk__16380_16432;
var G__16440 = count__16381_16433;
var G__16441 = (i__16382_16434 + (1));
seq__16379_16431 = G__16438;
chunk__16380_16432 = G__16439;
count__16381_16433 = G__16440;
i__16382_16434 = G__16441;
continue;
} else {
var temp__4657__auto___16442 = cljs.core.seq.call(null,seq__16379_16431);
if(temp__4657__auto___16442){
var seq__16379_16443__$1 = temp__4657__auto___16442;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16379_16443__$1)){
var c__7215__auto___16444 = cljs.core.chunk_first.call(null,seq__16379_16443__$1);
var G__16445 = cljs.core.chunk_rest.call(null,seq__16379_16443__$1);
var G__16446 = c__7215__auto___16444;
var G__16447 = cljs.core.count.call(null,c__7215__auto___16444);
var G__16448 = (0);
seq__16379_16431 = G__16445;
chunk__16380_16432 = G__16446;
count__16381_16433 = G__16447;
i__16382_16434 = G__16448;
continue;
} else {
var vec__16386_16449 = cljs.core.first.call(null,seq__16379_16443__$1);
var pno_16450 = cljs.core.nth.call(null,vec__16386_16449,(0),null);
var pmask_16451 = cljs.core.nth.call(null,vec__16386_16449,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_16450,"$ = ",pmask_16451,";");

var G__16452 = cljs.core.next.call(null,seq__16379_16443__$1);
var G__16453 = null;
var G__16454 = (0);
var G__16455 = (0);
seq__16379_16431 = G__16452;
chunk__16380_16432 = G__16453;
count__16381_16433 = G__16454;
i__16382_16434 = G__16455;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"})");

return cljs.compiler.emit.call(null,body);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"defrecord*","defrecord*",718069562),(function (p__16456){
var map__16457 = p__16456;
var map__16457__$1 = ((((!((map__16457 == null)))?((((map__16457.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16457.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16457):map__16457);
var t = cljs.core.get.call(null,map__16457__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__16457__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__16457__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__16457__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__16457__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.concat.call(null,cljs.core.map.call(null,cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)], null));
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__16459_16477 = cljs.core.seq.call(null,protocols);
var chunk__16460_16478 = null;
var count__16461_16479 = (0);
var i__16462_16480 = (0);
while(true){
if((i__16462_16480 < count__16461_16479)){
var protocol_16481 = cljs.core._nth.call(null,chunk__16460_16478,i__16462_16480);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str(protocol_16481)].join('')),"}");

var G__16482 = seq__16459_16477;
var G__16483 = chunk__16460_16478;
var G__16484 = count__16461_16479;
var G__16485 = (i__16462_16480 + (1));
seq__16459_16477 = G__16482;
chunk__16460_16478 = G__16483;
count__16461_16479 = G__16484;
i__16462_16480 = G__16485;
continue;
} else {
var temp__4657__auto___16486 = cljs.core.seq.call(null,seq__16459_16477);
if(temp__4657__auto___16486){
var seq__16459_16487__$1 = temp__4657__auto___16486;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16459_16487__$1)){
var c__7215__auto___16488 = cljs.core.chunk_first.call(null,seq__16459_16487__$1);
var G__16489 = cljs.core.chunk_rest.call(null,seq__16459_16487__$1);
var G__16490 = c__7215__auto___16488;
var G__16491 = cljs.core.count.call(null,c__7215__auto___16488);
var G__16492 = (0);
seq__16459_16477 = G__16489;
chunk__16460_16478 = G__16490;
count__16461_16479 = G__16491;
i__16462_16480 = G__16492;
continue;
} else {
var protocol_16493 = cljs.core.first.call(null,seq__16459_16487__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str(protocol_16493)].join('')),"}");

var G__16494 = cljs.core.next.call(null,seq__16459_16487__$1);
var G__16495 = null;
var G__16496 = (0);
var G__16497 = (0);
seq__16459_16477 = G__16494;
chunk__16460_16478 = G__16495;
count__16461_16479 = G__16496;
i__16462_16480 = G__16497;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__16463_16498 = cljs.core.seq.call(null,fields__$1);
var chunk__16464_16499 = null;
var count__16465_16500 = (0);
var i__16466_16501 = (0);
while(true){
if((i__16466_16501 < count__16465_16500)){
var fld_16502 = cljs.core._nth.call(null,chunk__16464_16499,i__16466_16501);
cljs.compiler.emitln.call(null,"this.",fld_16502," = ",fld_16502,";");

var G__16503 = seq__16463_16498;
var G__16504 = chunk__16464_16499;
var G__16505 = count__16465_16500;
var G__16506 = (i__16466_16501 + (1));
seq__16463_16498 = G__16503;
chunk__16464_16499 = G__16504;
count__16465_16500 = G__16505;
i__16466_16501 = G__16506;
continue;
} else {
var temp__4657__auto___16507 = cljs.core.seq.call(null,seq__16463_16498);
if(temp__4657__auto___16507){
var seq__16463_16508__$1 = temp__4657__auto___16507;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16463_16508__$1)){
var c__7215__auto___16509 = cljs.core.chunk_first.call(null,seq__16463_16508__$1);
var G__16510 = cljs.core.chunk_rest.call(null,seq__16463_16508__$1);
var G__16511 = c__7215__auto___16509;
var G__16512 = cljs.core.count.call(null,c__7215__auto___16509);
var G__16513 = (0);
seq__16463_16498 = G__16510;
chunk__16464_16499 = G__16511;
count__16465_16500 = G__16512;
i__16466_16501 = G__16513;
continue;
} else {
var fld_16514 = cljs.core.first.call(null,seq__16463_16508__$1);
cljs.compiler.emitln.call(null,"this.",fld_16514," = ",fld_16514,";");

var G__16515 = cljs.core.next.call(null,seq__16463_16508__$1);
var G__16516 = null;
var G__16517 = (0);
var G__16518 = (0);
seq__16463_16498 = G__16515;
chunk__16464_16499 = G__16516;
count__16465_16500 = G__16517;
i__16466_16501 = G__16518;
continue;
}
} else {
}
}
break;
}

var seq__16467_16519 = cljs.core.seq.call(null,pmasks);
var chunk__16468_16520 = null;
var count__16469_16521 = (0);
var i__16470_16522 = (0);
while(true){
if((i__16470_16522 < count__16469_16521)){
var vec__16471_16523 = cljs.core._nth.call(null,chunk__16468_16520,i__16470_16522);
var pno_16524 = cljs.core.nth.call(null,vec__16471_16523,(0),null);
var pmask_16525 = cljs.core.nth.call(null,vec__16471_16523,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_16524,"$ = ",pmask_16525,";");

var G__16526 = seq__16467_16519;
var G__16527 = chunk__16468_16520;
var G__16528 = count__16469_16521;
var G__16529 = (i__16470_16522 + (1));
seq__16467_16519 = G__16526;
chunk__16468_16520 = G__16527;
count__16469_16521 = G__16528;
i__16470_16522 = G__16529;
continue;
} else {
var temp__4657__auto___16530 = cljs.core.seq.call(null,seq__16467_16519);
if(temp__4657__auto___16530){
var seq__16467_16531__$1 = temp__4657__auto___16530;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16467_16531__$1)){
var c__7215__auto___16532 = cljs.core.chunk_first.call(null,seq__16467_16531__$1);
var G__16533 = cljs.core.chunk_rest.call(null,seq__16467_16531__$1);
var G__16534 = c__7215__auto___16532;
var G__16535 = cljs.core.count.call(null,c__7215__auto___16532);
var G__16536 = (0);
seq__16467_16519 = G__16533;
chunk__16468_16520 = G__16534;
count__16469_16521 = G__16535;
i__16470_16522 = G__16536;
continue;
} else {
var vec__16474_16537 = cljs.core.first.call(null,seq__16467_16531__$1);
var pno_16538 = cljs.core.nth.call(null,vec__16474_16537,(0),null);
var pmask_16539 = cljs.core.nth.call(null,vec__16474_16537,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_16538,"$ = ",pmask_16539,";");

var G__16540 = cljs.core.next.call(null,seq__16467_16531__$1);
var G__16541 = null;
var G__16542 = (0);
var G__16543 = (0);
seq__16467_16519 = G__16540;
chunk__16468_16520 = G__16541;
count__16469_16521 = G__16542;
i__16470_16522 = G__16543;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"})");

return cljs.compiler.emit.call(null,body);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"dot","dot",1442709401),(function (p__16544){
var map__16545 = p__16544;
var map__16545__$1 = ((((!((map__16545 == null)))?((((map__16545.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16545.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16545):map__16545);
var target = cljs.core.get.call(null,map__16545__$1,new cljs.core.Keyword(null,"target","target",253001721));
var field = cljs.core.get.call(null,map__16545__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var method = cljs.core.get.call(null,map__16545__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.call(null,map__16545__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__16545__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__15435__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15435__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(field)){
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,field,cljs.core.PersistentHashSet.EMPTY));
} else {
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,method,cljs.core.PersistentHashSet.EMPTY),"(",cljs.compiler.comma_sep.call(null,args),")");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15435__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js","js",1768080579),(function (p__16547){
var map__16548 = p__16547;
var map__16548__$1 = ((((!((map__16548 == null)))?((((map__16548.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16548.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16548):map__16548);
var op = cljs.core.get.call(null,map__16548__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var env = cljs.core.get.call(null,map__16548__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var code = cljs.core.get.call(null,map__16548__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var segs = cljs.core.get.call(null,map__16548__$1,new cljs.core.Keyword(null,"segs","segs",-1940299576));
var args = cljs.core.get.call(null,map__16548__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_((function (){var and__6392__auto__ = code;
if(cljs.core.truth_(and__6392__auto__)){
return goog.string.startsWith(clojure.string.trim.call(null,code),"/*");
} else {
return and__6392__auto__;
}
})())){
return cljs.compiler.emits.call(null,code);
} else {
var env__15435__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15435__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(code)){
cljs.compiler.emits.call(null,code);
} else {
cljs.compiler.emits.call(null,cljs.core.interleave.call(null,cljs.core.concat.call(null,segs,cljs.core.repeat.call(null,null)),cljs.core.concat.call(null,args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null))));
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15435__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.build_affecting_options = (function cljs$compiler$build_affecting_options(opts){
return cljs.core.select_keys.call(null,opts,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),new cljs.core.Keyword(null,"optimize-constants","optimize-constants",232704518),new cljs.core.Keyword(null,"elide-asserts","elide-asserts",537063272),new cljs.core.Keyword(null,"target","target",253001721)], null));
});
cljs.compiler.emit_constants_table = (function cljs$compiler$emit_constants_table(table){
var seq__16562 = cljs.core.seq.call(null,table);
var chunk__16563 = null;
var count__16564 = (0);
var i__16565 = (0);
while(true){
if((i__16565 < count__16564)){
var vec__16566 = cljs.core._nth.call(null,chunk__16563,i__16565);
var sym = cljs.core.nth.call(null,vec__16566,(0),null);
var value = cljs.core.nth.call(null,vec__16566,(1),null);
var ns_16572 = cljs.core.namespace.call(null,sym);
var name_16573 = cljs.core.name.call(null,sym);
cljs.compiler.emits.call(null,"cljs.core.",value," = ");

if((sym instanceof cljs.core.Keyword)){
cljs.compiler.emits_keyword.call(null,sym);
} else {
if((sym instanceof cljs.core.Symbol)){
cljs.compiler.emits_symbol.call(null,sym);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot emit constant for type "),cljs.core.str(cljs.core.type.call(null,sym))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"invalid-constant-type","invalid-constant-type",1294847471)], null));

}
}

cljs.compiler.emits.call(null,";\n");

var G__16574 = seq__16562;
var G__16575 = chunk__16563;
var G__16576 = count__16564;
var G__16577 = (i__16565 + (1));
seq__16562 = G__16574;
chunk__16563 = G__16575;
count__16564 = G__16576;
i__16565 = G__16577;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__16562);
if(temp__4657__auto__){
var seq__16562__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16562__$1)){
var c__7215__auto__ = cljs.core.chunk_first.call(null,seq__16562__$1);
var G__16578 = cljs.core.chunk_rest.call(null,seq__16562__$1);
var G__16579 = c__7215__auto__;
var G__16580 = cljs.core.count.call(null,c__7215__auto__);
var G__16581 = (0);
seq__16562 = G__16578;
chunk__16563 = G__16579;
count__16564 = G__16580;
i__16565 = G__16581;
continue;
} else {
var vec__16569 = cljs.core.first.call(null,seq__16562__$1);
var sym = cljs.core.nth.call(null,vec__16569,(0),null);
var value = cljs.core.nth.call(null,vec__16569,(1),null);
var ns_16582 = cljs.core.namespace.call(null,sym);
var name_16583 = cljs.core.name.call(null,sym);
cljs.compiler.emits.call(null,"cljs.core.",value," = ");

if((sym instanceof cljs.core.Keyword)){
cljs.compiler.emits_keyword.call(null,sym);
} else {
if((sym instanceof cljs.core.Symbol)){
cljs.compiler.emits_symbol.call(null,sym);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot emit constant for type "),cljs.core.str(cljs.core.type.call(null,sym))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"invalid-constant-type","invalid-constant-type",1294847471)], null));

}
}

cljs.compiler.emits.call(null,";\n");

var G__16584 = cljs.core.next.call(null,seq__16562__$1);
var G__16585 = null;
var G__16586 = (0);
var G__16587 = (0);
seq__16562 = G__16584;
chunk__16563 = G__16585;
count__16564 = G__16586;
i__16565 = G__16587;
continue;
}
} else {
return null;
}
}
break;
}
});
