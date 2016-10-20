// Compiled by ClojureScript 1.9.227 {}
goog.provide('cljs.source_map');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.source_map.base64_vlq');
/**
 * Take a seq of source file names and return a map from
 * file number to integer index. For reverse source maps.
 */
cljs.source_map.indexed_sources = (function cljs$source_map$indexed_sources(sources){
return cljs.core.reduce.call(null,(function (m,p__14635){
var vec__14636 = p__14635;
var i = cljs.core.nth.call(null,vec__14636,(0),null);
var v = cljs.core.nth.call(null,vec__14636,(1),null);
return cljs.core.assoc.call(null,m,v,i);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.call(null,(function (a,b){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
}),sources));
});
/**
 * Take a seq of source file names and return a comparator
 * that can be used to construct a sorted map. For reverse
 * source maps.
 */
cljs.source_map.source_compare = (function cljs$source_map$source_compare(sources){
var sources__$1 = cljs.source_map.indexed_sources.call(null,sources);
return ((function (sources__$1){
return (function (a,b){
return cljs.core.compare.call(null,sources__$1.call(null,a),sources__$1.call(null,b));
});
;})(sources__$1))
});
/**
 * Take a source map segment represented as a vector
 * and return a map.
 */
cljs.source_map.seg__GT_map = (function cljs$source_map$seg__GT_map(seg,source_map){
var vec__14642 = seg;
var gcol = cljs.core.nth.call(null,vec__14642,(0),null);
var source = cljs.core.nth.call(null,vec__14642,(1),null);
var line = cljs.core.nth.call(null,vec__14642,(2),null);
var col = cljs.core.nth.call(null,vec__14642,(3),null);
var name = cljs.core.nth.call(null,vec__14642,(4),null);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol,new cljs.core.Keyword(null,"source","source",-433931539),(goog.object.get(source_map,"sources")[source]),new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"name","name",1843675177),(function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,seg));
if(cljs.core.truth_(temp__4657__auto__)){
var name__$1 = temp__4657__auto__;
return (goog.object.get(source_map,"names")[name__$1]);
} else {
return null;
}
})()], null);
});
/**
 * Combine a source map segment vector and a relative
 * source map segment vector and combine them to get
 * an absolute segment posititon information as a vector.
 */
cljs.source_map.seg_combine = (function cljs$source_map$seg_combine(seg,relseg){
var vec__14651 = seg;
var gcol = cljs.core.nth.call(null,vec__14651,(0),null);
var source = cljs.core.nth.call(null,vec__14651,(1),null);
var line = cljs.core.nth.call(null,vec__14651,(2),null);
var col = cljs.core.nth.call(null,vec__14651,(3),null);
var name = cljs.core.nth.call(null,vec__14651,(4),null);
var vec__14654 = relseg;
var rgcol = cljs.core.nth.call(null,vec__14654,(0),null);
var rsource = cljs.core.nth.call(null,vec__14654,(1),null);
var rline = cljs.core.nth.call(null,vec__14654,(2),null);
var rcol = cljs.core.nth.call(null,vec__14654,(3),null);
var rname = cljs.core.nth.call(null,vec__14654,(4),null);
var nseg = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(gcol + rgcol),((function (){var or__6404__auto__ = source;
if(cljs.core.truth_(or__6404__auto__)){
return or__6404__auto__;
} else {
return (0);
}
})() + rsource),((function (){var or__6404__auto__ = line;
if(cljs.core.truth_(or__6404__auto__)){
return or__6404__auto__;
} else {
return (0);
}
})() + rline),((function (){var or__6404__auto__ = col;
if(cljs.core.truth_(or__6404__auto__)){
return or__6404__auto__;
} else {
return (0);
}
})() + rcol),((function (){var or__6404__auto__ = name;
if(cljs.core.truth_(or__6404__auto__)){
return or__6404__auto__;
} else {
return (0);
}
})() + rname)], null);
if(cljs.core.truth_(name)){
return cljs.core.with_meta.call(null,nseg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),(name + rname)], null));
} else {
return nseg;
}
});
/**
 * Helper for decode-reverse. Take a reverse source map and
 *   update it with a segment map.
 */
cljs.source_map.update_reverse_result = (function cljs$source_map$update_reverse_result(result,segmap,gline){
var map__14659 = segmap;
var map__14659__$1 = ((((!((map__14659 == null)))?((((map__14659.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14659.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14659):map__14659);
var gcol = cljs.core.get.call(null,map__14659__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__14659__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__14659__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__14659__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__14659__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gline","gline",-1086242431),gline,new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null),cljs.core.fnil.call(null,((function (map__14659,map__14659__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [line], null),cljs.core.fnil.call(null,((function (map__14659,map__14659__$1,gcol,source,line,col,name,d,d__$1){
return (function (m__$1){
return cljs.core.update_in.call(null,m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [col], null),cljs.core.fnil.call(null,((function (map__14659,map__14659__$1,gcol,source,line,col,name,d,d__$1){
return (function (v){
return cljs.core.conj.call(null,v,d__$1);
});})(map__14659,map__14659__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__14659,map__14659__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});})(map__14659,map__14659__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a reverse source map
 *   mapping original ClojureScript source locations to the generated
 *   JavaScript.
 */
cljs.source_map.decode_reverse = (function cljs$source_map$decode_reverse(var_args){
var args14661 = [];
var len__7479__auto___14667 = arguments.length;
var i__7480__auto___14668 = (0);
while(true){
if((i__7480__auto___14668 < len__7479__auto___14667)){
args14661.push((arguments[i__7480__auto___14668]));

var G__14669 = (i__7480__auto___14668 + (1));
i__7480__auto___14668 = G__14669;
continue;
} else {
}
break;
}

var G__14663 = args14661.length;
switch (G__14663) {
case 1:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14661.length)].join('')));

}
});

cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1 = (function (source_map){
return cljs.source_map.decode_reverse.call(null,goog.object.get(source_map,"mappings"),source_map);
});

cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2 = (function (mappings,source_map){
var sources = goog.object.get(source_map,"sources");
var relseg_init = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null);
var lines = cljs.core.seq.call(null,clojure.string.split.call(null,mappings,/;/));
var gline = (0);
var lines__$1 = lines;
var relseg = relseg_init;
var result = cljs.core.sorted_map_by.call(null,cljs.source_map.source_compare.call(null,sources));
while(true){
if(lines__$1){
var line = cljs.core.first.call(null,lines__$1);
var vec__14664 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__14671 = cljs.core.next.call(null,segs__$1);
var G__14672 = nrelseg;
var G__14673 = cljs.source_map.update_reverse_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__14671;
relseg__$1 = G__14672;
result__$1 = G__14673;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__14664,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__14664,(1),null);
var G__14674 = (gline + (1));
var G__14675 = cljs.core.next.call(null,lines__$1);
var G__14676 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__14677 = result__$1;
gline = G__14674;
lines__$1 = G__14675;
relseg = G__14676;
result = G__14677;
continue;
} else {
return result;
}
break;
}
});

cljs.source_map.decode_reverse.cljs$lang$maxFixedArity = 2;

/**
 * Helper for decode. Take a source map and update it based on a
 *   segment map.
 */
cljs.source_map.update_result = (function cljs$source_map$update_result(result,segmap,gline){
var map__14681 = segmap;
var map__14681__$1 = ((((!((map__14681 == null)))?((((map__14681.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14681.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14681):map__14681);
var gcol = cljs.core.get.call(null,map__14681__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__14681__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__14681__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__14681__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__14681__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"source","source",-433931539),source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.call(null,((function (map__14681,map__14681__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.call(null,((function (map__14681,map__14681__$1,gcol,source,line,col,name,d,d__$1){
return (function (p1__14678_SHARP_){
return cljs.core.conj.call(null,p1__14678_SHARP_,d__$1);
});})(map__14681,map__14681__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__14681,map__14681__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var args14683 = [];
var len__7479__auto___14689 = arguments.length;
var i__7480__auto___14690 = (0);
while(true){
if((i__7480__auto___14690 < len__7479__auto___14689)){
args14683.push((arguments[i__7480__auto___14690]));

var G__14691 = (i__7480__auto___14690 + (1));
i__7480__auto___14690 = G__14691;
continue;
} else {
}
break;
}

var G__14685 = args14683.length;
switch (G__14685) {
case 1:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14683.length)].join('')));

}
});

cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1 = (function (source_map){
return cljs.source_map.decode.call(null,goog.object.get(source_map,"mappings"),source_map);
});

cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2 = (function (mappings,source_map){
var sources = goog.object.get(source_map,"sources");
var relseg_init = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null);
var lines = cljs.core.seq.call(null,clojure.string.split.call(null,mappings,/;/));
var gline = (0);
var lines__$1 = lines;
var relseg = relseg_init;
var result = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(lines__$1){
var line = cljs.core.first.call(null,lines__$1);
var vec__14686 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__14693 = cljs.core.next.call(null,segs__$1);
var G__14694 = nrelseg;
var G__14695 = cljs.source_map.update_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__14693;
relseg__$1 = G__14694;
result__$1 = G__14695;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__14686,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__14686,(1),null);
var G__14696 = (gline + (1));
var G__14697 = cljs.core.next.call(null,lines__$1);
var G__14698 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__14699 = result__$1;
gline = G__14696;
lines__$1 = G__14697;
relseg = G__14698;
result = G__14699;
continue;
} else {
return result;
}
break;
}
});

cljs.source_map.decode.cljs$lang$maxFixedArity = 2;

/**
 * Take a nested sorted map encoding line and column information
 * for a file and return a vector of vectors of encoded segments.
 * Each vector represents a line, and the internal vectors are segments
 * representing the contents of the line.
 */
cljs.source_map.lines__GT_segs = (function cljs$source_map$lines__GT_segs(lines){
var relseg = cljs.core.atom.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null));
return cljs.core.reduce.call(null,((function (relseg){
return (function (segs,cols){
cljs.core.swap_BANG_.call(null,relseg,((function (relseg){
return (function (p__14712){
var vec__14713 = p__14712;
var _ = cljs.core.nth.call(null,vec__14713,(0),null);
var source = cljs.core.nth.call(null,vec__14713,(1),null);
var line = cljs.core.nth.call(null,vec__14713,(2),null);
var col = cljs.core.nth.call(null,vec__14713,(3),null);
var name = cljs.core.nth.call(null,vec__14713,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
});})(relseg))
);

return cljs.core.conj.call(null,segs,cljs.core.reduce.call(null,((function (relseg){
return (function (cols__$1,p__14716){
var vec__14717 = p__14716;
var gcol = cljs.core.nth.call(null,vec__14717,(0),null);
var sidx = cljs.core.nth.call(null,vec__14717,(1),null);
var line = cljs.core.nth.call(null,vec__14717,(2),null);
var col = cljs.core.nth.call(null,vec__14717,(3),null);
var name = cljs.core.nth.call(null,vec__14717,(4),null);
var seg = vec__14717;
var offset = cljs.core.map.call(null,cljs.core._,seg,cljs.core.deref.call(null,relseg));
cljs.core.swap_BANG_.call(null,relseg,((function (offset,vec__14717,gcol,sidx,line,col,name,seg,relseg){
return (function (p__14720){
var vec__14721 = p__14720;
var _ = cljs.core.nth.call(null,vec__14721,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__14721,(1),null);
var ___$2 = cljs.core.nth.call(null,vec__14721,(2),null);
var ___$3 = cljs.core.nth.call(null,vec__14721,(3),null);
var lname = cljs.core.nth.call(null,vec__14721,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol,sidx,line,col,(function (){var or__6404__auto__ = name;
if(cljs.core.truth_(or__6404__auto__)){
return or__6404__auto__;
} else {
return lname;
}
})()], null);
});})(offset,vec__14717,gcol,sidx,line,col,name,seg,relseg))
);

return cljs.core.conj.call(null,cols__$1,cljs.source_map.base64_vlq.encode.call(null,offset));
});})(relseg))
,cljs.core.PersistentVector.EMPTY,cols));
});})(relseg))
,cljs.core.PersistentVector.EMPTY,lines);
});
/**
 * Take an internal source map representation represented as nested
 * sorted maps of file, line, column and return a source map v3 JSON
 * string.
 */
cljs.source_map.encode = (function cljs$source_map$encode(m,opts){
var lines = cljs.core.atom.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null));
var names__GT_idx = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var name_idx = cljs.core.atom.call(null,(0));
var preamble_lines = cljs.core.take.call(null,(function (){var or__6404__auto__ = new cljs.core.Keyword(null,"preamble-line-count","preamble-line-count",-659949744).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__6404__auto__)){
return or__6404__auto__;
} else {
return (0);
}
})(),cljs.core.repeat.call(null,cljs.core.PersistentVector.EMPTY));
var info__GT_segv = ((function (lines,names__GT_idx,name_idx,preamble_lines){
return (function (info,source_idx,line,col){
var segv = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gcol","gcol",309250807).cljs$core$IFn$_invoke$arity$1(info),source_idx,line,col], null);
var temp__4655__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info);
if(cljs.core.truth_(temp__4655__auto__)){
var name = temp__4655__auto__;
var idx = (function (){var temp__4655__auto____$1 = cljs.core.get.call(null,cljs.core.deref.call(null,names__GT_idx),name);
if(cljs.core.truth_(temp__4655__auto____$1)){
var idx = temp__4655__auto____$1;
return idx;
} else {
var cidx = cljs.core.deref.call(null,name_idx);
cljs.core.swap_BANG_.call(null,names__GT_idx,cljs.core.assoc,name,cidx);

cljs.core.swap_BANG_.call(null,name_idx,cljs.core.inc);

return cidx;
}
})();
return cljs.core.conj.call(null,segv,idx);
} else {
return segv;
}
});})(lines,names__GT_idx,name_idx,preamble_lines))
;
var encode_cols = ((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (infos,source_idx,line,col){
var seq__14809 = cljs.core.seq.call(null,infos);
var chunk__14810 = null;
var count__14811 = (0);
var i__14812 = (0);
while(true){
if((i__14812 < count__14811)){
var info = cljs.core._nth.call(null,chunk__14810,i__14812);
var segv_14891 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_14892 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_14893 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_14892 > (lc_14893 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__14809,chunk__14810,count__14811,i__14812,segv_14891,gline_14892,lc_14893,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_14892 - (lc_14893 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_14891], null));
});})(seq__14809,chunk__14810,count__14811,i__14812,segv_14891,gline_14892,lc_14893,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__14809,chunk__14810,count__14811,i__14812,segv_14891,gline_14892,lc_14893,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_14892], null),cljs.core.conj,segv_14891);
});})(seq__14809,chunk__14810,count__14811,i__14812,segv_14891,gline_14892,lc_14893,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}

var G__14894 = seq__14809;
var G__14895 = chunk__14810;
var G__14896 = count__14811;
var G__14897 = (i__14812 + (1));
seq__14809 = G__14894;
chunk__14810 = G__14895;
count__14811 = G__14896;
i__14812 = G__14897;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__14809);
if(temp__4657__auto__){
var seq__14809__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14809__$1)){
var c__7215__auto__ = cljs.core.chunk_first.call(null,seq__14809__$1);
var G__14898 = cljs.core.chunk_rest.call(null,seq__14809__$1);
var G__14899 = c__7215__auto__;
var G__14900 = cljs.core.count.call(null,c__7215__auto__);
var G__14901 = (0);
seq__14809 = G__14898;
chunk__14810 = G__14899;
count__14811 = G__14900;
i__14812 = G__14901;
continue;
} else {
var info = cljs.core.first.call(null,seq__14809__$1);
var segv_14902 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_14903 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_14904 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_14903 > (lc_14904 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__14809,chunk__14810,count__14811,i__14812,segv_14902,gline_14903,lc_14904,info,seq__14809__$1,temp__4657__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_14903 - (lc_14904 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_14902], null));
});})(seq__14809,chunk__14810,count__14811,i__14812,segv_14902,gline_14903,lc_14904,info,seq__14809__$1,temp__4657__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__14809,chunk__14810,count__14811,i__14812,segv_14902,gline_14903,lc_14904,info,seq__14809__$1,temp__4657__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_14903], null),cljs.core.conj,segv_14902);
});})(seq__14809,chunk__14810,count__14811,i__14812,segv_14902,gline_14903,lc_14904,info,seq__14809__$1,temp__4657__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}

var G__14905 = cljs.core.next.call(null,seq__14809__$1);
var G__14906 = null;
var G__14907 = (0);
var G__14908 = (0);
seq__14809 = G__14905;
chunk__14810 = G__14906;
count__14811 = G__14907;
i__14812 = G__14908;
continue;
}
} else {
return null;
}
}
break;
}
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
;
var seq__14813_14909 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__14814_14910 = null;
var count__14815_14911 = (0);
var i__14816_14912 = (0);
while(true){
if((i__14816_14912 < count__14815_14911)){
var vec__14817_14913 = cljs.core._nth.call(null,chunk__14814_14910,i__14816_14912);
var source_idx_14914 = cljs.core.nth.call(null,vec__14817_14913,(0),null);
var vec__14820_14915 = cljs.core.nth.call(null,vec__14817_14913,(1),null);
var __14916 = cljs.core.nth.call(null,vec__14820_14915,(0),null);
var lines_14917__$1 = cljs.core.nth.call(null,vec__14820_14915,(1),null);
var seq__14823_14918 = cljs.core.seq.call(null,lines_14917__$1);
var chunk__14824_14919 = null;
var count__14825_14920 = (0);
var i__14826_14921 = (0);
while(true){
if((i__14826_14921 < count__14825_14920)){
var vec__14827_14922 = cljs.core._nth.call(null,chunk__14824_14919,i__14826_14921);
var line_14923 = cljs.core.nth.call(null,vec__14827_14922,(0),null);
var cols_14924 = cljs.core.nth.call(null,vec__14827_14922,(1),null);
var seq__14830_14925 = cljs.core.seq.call(null,cols_14924);
var chunk__14831_14926 = null;
var count__14832_14927 = (0);
var i__14833_14928 = (0);
while(true){
if((i__14833_14928 < count__14832_14927)){
var vec__14834_14929 = cljs.core._nth.call(null,chunk__14831_14926,i__14833_14928);
var col_14930 = cljs.core.nth.call(null,vec__14834_14929,(0),null);
var infos_14931 = cljs.core.nth.call(null,vec__14834_14929,(1),null);
encode_cols.call(null,infos_14931,source_idx_14914,line_14923,col_14930);

var G__14932 = seq__14830_14925;
var G__14933 = chunk__14831_14926;
var G__14934 = count__14832_14927;
var G__14935 = (i__14833_14928 + (1));
seq__14830_14925 = G__14932;
chunk__14831_14926 = G__14933;
count__14832_14927 = G__14934;
i__14833_14928 = G__14935;
continue;
} else {
var temp__4657__auto___14936 = cljs.core.seq.call(null,seq__14830_14925);
if(temp__4657__auto___14936){
var seq__14830_14937__$1 = temp__4657__auto___14936;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14830_14937__$1)){
var c__7215__auto___14938 = cljs.core.chunk_first.call(null,seq__14830_14937__$1);
var G__14939 = cljs.core.chunk_rest.call(null,seq__14830_14937__$1);
var G__14940 = c__7215__auto___14938;
var G__14941 = cljs.core.count.call(null,c__7215__auto___14938);
var G__14942 = (0);
seq__14830_14925 = G__14939;
chunk__14831_14926 = G__14940;
count__14832_14927 = G__14941;
i__14833_14928 = G__14942;
continue;
} else {
var vec__14837_14943 = cljs.core.first.call(null,seq__14830_14937__$1);
var col_14944 = cljs.core.nth.call(null,vec__14837_14943,(0),null);
var infos_14945 = cljs.core.nth.call(null,vec__14837_14943,(1),null);
encode_cols.call(null,infos_14945,source_idx_14914,line_14923,col_14944);

var G__14946 = cljs.core.next.call(null,seq__14830_14937__$1);
var G__14947 = null;
var G__14948 = (0);
var G__14949 = (0);
seq__14830_14925 = G__14946;
chunk__14831_14926 = G__14947;
count__14832_14927 = G__14948;
i__14833_14928 = G__14949;
continue;
}
} else {
}
}
break;
}

var G__14950 = seq__14823_14918;
var G__14951 = chunk__14824_14919;
var G__14952 = count__14825_14920;
var G__14953 = (i__14826_14921 + (1));
seq__14823_14918 = G__14950;
chunk__14824_14919 = G__14951;
count__14825_14920 = G__14952;
i__14826_14921 = G__14953;
continue;
} else {
var temp__4657__auto___14954 = cljs.core.seq.call(null,seq__14823_14918);
if(temp__4657__auto___14954){
var seq__14823_14955__$1 = temp__4657__auto___14954;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14823_14955__$1)){
var c__7215__auto___14956 = cljs.core.chunk_first.call(null,seq__14823_14955__$1);
var G__14957 = cljs.core.chunk_rest.call(null,seq__14823_14955__$1);
var G__14958 = c__7215__auto___14956;
var G__14959 = cljs.core.count.call(null,c__7215__auto___14956);
var G__14960 = (0);
seq__14823_14918 = G__14957;
chunk__14824_14919 = G__14958;
count__14825_14920 = G__14959;
i__14826_14921 = G__14960;
continue;
} else {
var vec__14840_14961 = cljs.core.first.call(null,seq__14823_14955__$1);
var line_14962 = cljs.core.nth.call(null,vec__14840_14961,(0),null);
var cols_14963 = cljs.core.nth.call(null,vec__14840_14961,(1),null);
var seq__14843_14964 = cljs.core.seq.call(null,cols_14963);
var chunk__14844_14965 = null;
var count__14845_14966 = (0);
var i__14846_14967 = (0);
while(true){
if((i__14846_14967 < count__14845_14966)){
var vec__14847_14968 = cljs.core._nth.call(null,chunk__14844_14965,i__14846_14967);
var col_14969 = cljs.core.nth.call(null,vec__14847_14968,(0),null);
var infos_14970 = cljs.core.nth.call(null,vec__14847_14968,(1),null);
encode_cols.call(null,infos_14970,source_idx_14914,line_14962,col_14969);

var G__14971 = seq__14843_14964;
var G__14972 = chunk__14844_14965;
var G__14973 = count__14845_14966;
var G__14974 = (i__14846_14967 + (1));
seq__14843_14964 = G__14971;
chunk__14844_14965 = G__14972;
count__14845_14966 = G__14973;
i__14846_14967 = G__14974;
continue;
} else {
var temp__4657__auto___14975__$1 = cljs.core.seq.call(null,seq__14843_14964);
if(temp__4657__auto___14975__$1){
var seq__14843_14976__$1 = temp__4657__auto___14975__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14843_14976__$1)){
var c__7215__auto___14977 = cljs.core.chunk_first.call(null,seq__14843_14976__$1);
var G__14978 = cljs.core.chunk_rest.call(null,seq__14843_14976__$1);
var G__14979 = c__7215__auto___14977;
var G__14980 = cljs.core.count.call(null,c__7215__auto___14977);
var G__14981 = (0);
seq__14843_14964 = G__14978;
chunk__14844_14965 = G__14979;
count__14845_14966 = G__14980;
i__14846_14967 = G__14981;
continue;
} else {
var vec__14850_14982 = cljs.core.first.call(null,seq__14843_14976__$1);
var col_14983 = cljs.core.nth.call(null,vec__14850_14982,(0),null);
var infos_14984 = cljs.core.nth.call(null,vec__14850_14982,(1),null);
encode_cols.call(null,infos_14984,source_idx_14914,line_14962,col_14983);

var G__14985 = cljs.core.next.call(null,seq__14843_14976__$1);
var G__14986 = null;
var G__14987 = (0);
var G__14988 = (0);
seq__14843_14964 = G__14985;
chunk__14844_14965 = G__14986;
count__14845_14966 = G__14987;
i__14846_14967 = G__14988;
continue;
}
} else {
}
}
break;
}

var G__14989 = cljs.core.next.call(null,seq__14823_14955__$1);
var G__14990 = null;
var G__14991 = (0);
var G__14992 = (0);
seq__14823_14918 = G__14989;
chunk__14824_14919 = G__14990;
count__14825_14920 = G__14991;
i__14826_14921 = G__14992;
continue;
}
} else {
}
}
break;
}

var G__14993 = seq__14813_14909;
var G__14994 = chunk__14814_14910;
var G__14995 = count__14815_14911;
var G__14996 = (i__14816_14912 + (1));
seq__14813_14909 = G__14993;
chunk__14814_14910 = G__14994;
count__14815_14911 = G__14995;
i__14816_14912 = G__14996;
continue;
} else {
var temp__4657__auto___14997 = cljs.core.seq.call(null,seq__14813_14909);
if(temp__4657__auto___14997){
var seq__14813_14998__$1 = temp__4657__auto___14997;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14813_14998__$1)){
var c__7215__auto___14999 = cljs.core.chunk_first.call(null,seq__14813_14998__$1);
var G__15000 = cljs.core.chunk_rest.call(null,seq__14813_14998__$1);
var G__15001 = c__7215__auto___14999;
var G__15002 = cljs.core.count.call(null,c__7215__auto___14999);
var G__15003 = (0);
seq__14813_14909 = G__15000;
chunk__14814_14910 = G__15001;
count__14815_14911 = G__15002;
i__14816_14912 = G__15003;
continue;
} else {
var vec__14853_15004 = cljs.core.first.call(null,seq__14813_14998__$1);
var source_idx_15005 = cljs.core.nth.call(null,vec__14853_15004,(0),null);
var vec__14856_15006 = cljs.core.nth.call(null,vec__14853_15004,(1),null);
var __15007 = cljs.core.nth.call(null,vec__14856_15006,(0),null);
var lines_15008__$1 = cljs.core.nth.call(null,vec__14856_15006,(1),null);
var seq__14859_15009 = cljs.core.seq.call(null,lines_15008__$1);
var chunk__14860_15010 = null;
var count__14861_15011 = (0);
var i__14862_15012 = (0);
while(true){
if((i__14862_15012 < count__14861_15011)){
var vec__14863_15013 = cljs.core._nth.call(null,chunk__14860_15010,i__14862_15012);
var line_15014 = cljs.core.nth.call(null,vec__14863_15013,(0),null);
var cols_15015 = cljs.core.nth.call(null,vec__14863_15013,(1),null);
var seq__14866_15016 = cljs.core.seq.call(null,cols_15015);
var chunk__14867_15017 = null;
var count__14868_15018 = (0);
var i__14869_15019 = (0);
while(true){
if((i__14869_15019 < count__14868_15018)){
var vec__14870_15020 = cljs.core._nth.call(null,chunk__14867_15017,i__14869_15019);
var col_15021 = cljs.core.nth.call(null,vec__14870_15020,(0),null);
var infos_15022 = cljs.core.nth.call(null,vec__14870_15020,(1),null);
encode_cols.call(null,infos_15022,source_idx_15005,line_15014,col_15021);

var G__15023 = seq__14866_15016;
var G__15024 = chunk__14867_15017;
var G__15025 = count__14868_15018;
var G__15026 = (i__14869_15019 + (1));
seq__14866_15016 = G__15023;
chunk__14867_15017 = G__15024;
count__14868_15018 = G__15025;
i__14869_15019 = G__15026;
continue;
} else {
var temp__4657__auto___15027__$1 = cljs.core.seq.call(null,seq__14866_15016);
if(temp__4657__auto___15027__$1){
var seq__14866_15028__$1 = temp__4657__auto___15027__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14866_15028__$1)){
var c__7215__auto___15029 = cljs.core.chunk_first.call(null,seq__14866_15028__$1);
var G__15030 = cljs.core.chunk_rest.call(null,seq__14866_15028__$1);
var G__15031 = c__7215__auto___15029;
var G__15032 = cljs.core.count.call(null,c__7215__auto___15029);
var G__15033 = (0);
seq__14866_15016 = G__15030;
chunk__14867_15017 = G__15031;
count__14868_15018 = G__15032;
i__14869_15019 = G__15033;
continue;
} else {
var vec__14873_15034 = cljs.core.first.call(null,seq__14866_15028__$1);
var col_15035 = cljs.core.nth.call(null,vec__14873_15034,(0),null);
var infos_15036 = cljs.core.nth.call(null,vec__14873_15034,(1),null);
encode_cols.call(null,infos_15036,source_idx_15005,line_15014,col_15035);

var G__15037 = cljs.core.next.call(null,seq__14866_15028__$1);
var G__15038 = null;
var G__15039 = (0);
var G__15040 = (0);
seq__14866_15016 = G__15037;
chunk__14867_15017 = G__15038;
count__14868_15018 = G__15039;
i__14869_15019 = G__15040;
continue;
}
} else {
}
}
break;
}

var G__15041 = seq__14859_15009;
var G__15042 = chunk__14860_15010;
var G__15043 = count__14861_15011;
var G__15044 = (i__14862_15012 + (1));
seq__14859_15009 = G__15041;
chunk__14860_15010 = G__15042;
count__14861_15011 = G__15043;
i__14862_15012 = G__15044;
continue;
} else {
var temp__4657__auto___15045__$1 = cljs.core.seq.call(null,seq__14859_15009);
if(temp__4657__auto___15045__$1){
var seq__14859_15046__$1 = temp__4657__auto___15045__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14859_15046__$1)){
var c__7215__auto___15047 = cljs.core.chunk_first.call(null,seq__14859_15046__$1);
var G__15048 = cljs.core.chunk_rest.call(null,seq__14859_15046__$1);
var G__15049 = c__7215__auto___15047;
var G__15050 = cljs.core.count.call(null,c__7215__auto___15047);
var G__15051 = (0);
seq__14859_15009 = G__15048;
chunk__14860_15010 = G__15049;
count__14861_15011 = G__15050;
i__14862_15012 = G__15051;
continue;
} else {
var vec__14876_15052 = cljs.core.first.call(null,seq__14859_15046__$1);
var line_15053 = cljs.core.nth.call(null,vec__14876_15052,(0),null);
var cols_15054 = cljs.core.nth.call(null,vec__14876_15052,(1),null);
var seq__14879_15055 = cljs.core.seq.call(null,cols_15054);
var chunk__14880_15056 = null;
var count__14881_15057 = (0);
var i__14882_15058 = (0);
while(true){
if((i__14882_15058 < count__14881_15057)){
var vec__14883_15059 = cljs.core._nth.call(null,chunk__14880_15056,i__14882_15058);
var col_15060 = cljs.core.nth.call(null,vec__14883_15059,(0),null);
var infos_15061 = cljs.core.nth.call(null,vec__14883_15059,(1),null);
encode_cols.call(null,infos_15061,source_idx_15005,line_15053,col_15060);

var G__15062 = seq__14879_15055;
var G__15063 = chunk__14880_15056;
var G__15064 = count__14881_15057;
var G__15065 = (i__14882_15058 + (1));
seq__14879_15055 = G__15062;
chunk__14880_15056 = G__15063;
count__14881_15057 = G__15064;
i__14882_15058 = G__15065;
continue;
} else {
var temp__4657__auto___15066__$2 = cljs.core.seq.call(null,seq__14879_15055);
if(temp__4657__auto___15066__$2){
var seq__14879_15067__$1 = temp__4657__auto___15066__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14879_15067__$1)){
var c__7215__auto___15068 = cljs.core.chunk_first.call(null,seq__14879_15067__$1);
var G__15069 = cljs.core.chunk_rest.call(null,seq__14879_15067__$1);
var G__15070 = c__7215__auto___15068;
var G__15071 = cljs.core.count.call(null,c__7215__auto___15068);
var G__15072 = (0);
seq__14879_15055 = G__15069;
chunk__14880_15056 = G__15070;
count__14881_15057 = G__15071;
i__14882_15058 = G__15072;
continue;
} else {
var vec__14886_15073 = cljs.core.first.call(null,seq__14879_15067__$1);
var col_15074 = cljs.core.nth.call(null,vec__14886_15073,(0),null);
var infos_15075 = cljs.core.nth.call(null,vec__14886_15073,(1),null);
encode_cols.call(null,infos_15075,source_idx_15005,line_15053,col_15074);

var G__15076 = cljs.core.next.call(null,seq__14879_15067__$1);
var G__15077 = null;
var G__15078 = (0);
var G__15079 = (0);
seq__14879_15055 = G__15076;
chunk__14880_15056 = G__15077;
count__14881_15057 = G__15078;
i__14882_15058 = G__15079;
continue;
}
} else {
}
}
break;
}

var G__15080 = cljs.core.next.call(null,seq__14859_15046__$1);
var G__15081 = null;
var G__15082 = (0);
var G__15083 = (0);
seq__14859_15009 = G__15080;
chunk__14860_15010 = G__15081;
count__14861_15011 = G__15082;
i__14862_15012 = G__15083;
continue;
}
} else {
}
}
break;
}

var G__15084 = cljs.core.next.call(null,seq__14813_14998__$1);
var G__15085 = null;
var G__15086 = (0);
var G__15087 = (0);
seq__14813_14909 = G__15084;
chunk__14814_14910 = G__15085;
count__14815_14911 = G__15086;
i__14816_14912 = G__15087;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__14889 = ({"version": (3), "file": new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys.call(null,m);
var f = cljs.core.comp.call(null,((new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633).cljs$core$IFn$_invoke$arity$1(opts) === true)?((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__14724_SHARP_){
return [cljs.core.str(p1__14724_SHARP_),cljs.core.str("?rel="),cljs.core.str((new Date()).valueOf())].join('');
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
:cljs.core.identity),((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__14725_SHARP_){
return cljs.core.last.call(null,clojure.string.split.call(null,p1__14725_SHARP_,/\//));
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
);
return cljs.core.into_array.call(null,cljs.core.map.call(null,f,paths));
})(), "lineCount": new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.call(null,";",cljs.core.map.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__14726_SHARP_){
return clojure.string.join.call(null,",",p1__14726_SHARP_);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,cljs.source_map.lines__GT_segs.call(null,cljs.core.concat.call(null,preamble_lines,cljs.core.deref.call(null,lines))))), "names": cljs.core.into_array.call(null,cljs.core.map.call(null,clojure.set.map_invert.call(null,cljs.core.deref.call(null,names__GT_idx)),cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.deref.call(null,names__GT_idx)))))});
if(cljs.core.truth_(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts))){
var G__14890 = G__14889;
goog.object.set(G__14890,"sourcesContent",cljs.core.into_array.call(null,new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts)));

return G__14890;
} else {
return G__14889;
}
})();
return JSON.stringify(source_map_file_contents);
});
/**
 * Merge an internal source map representation of a single
 * ClojureScript file mapping original to generated with a
 * second source map mapping original JS to generated JS.
 * The is to support source maps that work through multiple
 * compilation steps like Google Closure optimization passes.
 */
cljs.source_map.merge_source_maps = (function cljs$source_map$merge_source_maps(cljs_map,js_map){
var line_map_seq = cljs.core.seq.call(null,cljs_map);
var new_lines = cljs.core.sorted_map.call(null);
while(true){
if(line_map_seq){
var vec__15097 = cljs.core.first.call(null,line_map_seq);
var line = cljs.core.nth.call(null,vec__15097,(0),null);
var col_map = cljs.core.nth.call(null,vec__15097,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq.call(null,col_map);
var new_cols = cljs.core.sorted_map.call(null);
while(true){
if(col_map_seq){
var vec__15100 = cljs.core.first.call(null,col_map_seq);
var col = cljs.core.nth.call(null,vec__15100,(0),null);
var infos = cljs.core.nth.call(null,vec__15100,(1),null);
var G__15106 = cljs.core.next.call(null,col_map_seq);
var G__15107 = cljs.core.assoc.call(null,new_cols,col,cljs.core.reduce.call(null,((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__15100,col,infos,vec__15097,line,col_map){
return (function (v,p__15103){
var map__15104 = p__15103;
var map__15104__$1 = ((((!((map__15104 == null)))?((((map__15104.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15104.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15104):map__15104);
var gline = cljs.core.get.call(null,map__15104__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol = cljs.core.get.call(null,map__15104__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
return cljs.core.into.call(null,v,cljs.core.get_in.call(null,js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__15100,col,infos,vec__15097,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__15106;
new_cols = G__15107;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__15108 = cljs.core.next.call(null,line_map_seq);
var G__15109 = cljs.core.assoc.call(null,new_lines,line,new_cols);
line_map_seq = G__15108;
new_lines = G__15109;
continue;
} else {
return new_lines;
}
break;
}
});
/**
 * Given a ClojureScript to JavaScript source map, invert it. Useful when
 * mapping JavaScript stack traces when environment support is unavailable.
 */
cljs.source_map.invert_reverse_map = (function cljs$source_map$invert_reverse_map(reverse_map){
var inverted = cljs.core.atom.call(null,cljs.core.sorted_map.call(null));
var seq__15172_15234 = cljs.core.seq.call(null,reverse_map);
var chunk__15173_15235 = null;
var count__15174_15236 = (0);
var i__15175_15237 = (0);
while(true){
if((i__15175_15237 < count__15174_15236)){
var vec__15176_15238 = cljs.core._nth.call(null,chunk__15173_15235,i__15175_15237);
var line_15239 = cljs.core.nth.call(null,vec__15176_15238,(0),null);
var columns_15240 = cljs.core.nth.call(null,vec__15176_15238,(1),null);
var seq__15179_15241 = cljs.core.seq.call(null,columns_15240);
var chunk__15180_15242 = null;
var count__15181_15243 = (0);
var i__15182_15244 = (0);
while(true){
if((i__15182_15244 < count__15181_15243)){
var vec__15183_15245 = cljs.core._nth.call(null,chunk__15180_15242,i__15182_15244);
var column_15246 = cljs.core.nth.call(null,vec__15183_15245,(0),null);
var column_info_15247 = cljs.core.nth.call(null,vec__15183_15245,(1),null);
var seq__15186_15248 = cljs.core.seq.call(null,column_info_15247);
var chunk__15187_15249 = null;
var count__15188_15250 = (0);
var i__15189_15251 = (0);
while(true){
if((i__15189_15251 < count__15188_15250)){
var map__15190_15252 = cljs.core._nth.call(null,chunk__15187_15249,i__15189_15251);
var map__15190_15253__$1 = ((((!((map__15190_15252 == null)))?((((map__15190_15252.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15190_15252.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15190_15252):map__15190_15252);
var gline_15254 = cljs.core.get.call(null,map__15190_15253__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_15255 = cljs.core.get.call(null,map__15190_15253__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_15256 = cljs.core.get.call(null,map__15190_15253__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_15254], null),cljs.core.fnil.call(null,((function (seq__15186_15248,chunk__15187_15249,count__15188_15250,i__15189_15251,seq__15179_15241,chunk__15180_15242,count__15181_15243,i__15182_15244,seq__15172_15234,chunk__15173_15235,count__15174_15236,i__15175_15237,map__15190_15252,map__15190_15253__$1,gline_15254,gcol_15255,name_15256,vec__15183_15245,column_15246,column_info_15247,vec__15176_15238,line_15239,columns_15240,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_15255], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_15239,new cljs.core.Keyword(null,"col","col",-1959363084),column_15246,new cljs.core.Keyword(null,"name","name",1843675177),name_15256], null));
});})(seq__15186_15248,chunk__15187_15249,count__15188_15250,i__15189_15251,seq__15179_15241,chunk__15180_15242,count__15181_15243,i__15182_15244,seq__15172_15234,chunk__15173_15235,count__15174_15236,i__15175_15237,map__15190_15252,map__15190_15253__$1,gline_15254,gcol_15255,name_15256,vec__15183_15245,column_15246,column_info_15247,vec__15176_15238,line_15239,columns_15240,inverted))
,cljs.core.sorted_map.call(null)));

var G__15257 = seq__15186_15248;
var G__15258 = chunk__15187_15249;
var G__15259 = count__15188_15250;
var G__15260 = (i__15189_15251 + (1));
seq__15186_15248 = G__15257;
chunk__15187_15249 = G__15258;
count__15188_15250 = G__15259;
i__15189_15251 = G__15260;
continue;
} else {
var temp__4657__auto___15261 = cljs.core.seq.call(null,seq__15186_15248);
if(temp__4657__auto___15261){
var seq__15186_15262__$1 = temp__4657__auto___15261;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15186_15262__$1)){
var c__7215__auto___15263 = cljs.core.chunk_first.call(null,seq__15186_15262__$1);
var G__15264 = cljs.core.chunk_rest.call(null,seq__15186_15262__$1);
var G__15265 = c__7215__auto___15263;
var G__15266 = cljs.core.count.call(null,c__7215__auto___15263);
var G__15267 = (0);
seq__15186_15248 = G__15264;
chunk__15187_15249 = G__15265;
count__15188_15250 = G__15266;
i__15189_15251 = G__15267;
continue;
} else {
var map__15192_15268 = cljs.core.first.call(null,seq__15186_15262__$1);
var map__15192_15269__$1 = ((((!((map__15192_15268 == null)))?((((map__15192_15268.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15192_15268.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15192_15268):map__15192_15268);
var gline_15270 = cljs.core.get.call(null,map__15192_15269__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_15271 = cljs.core.get.call(null,map__15192_15269__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_15272 = cljs.core.get.call(null,map__15192_15269__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_15270], null),cljs.core.fnil.call(null,((function (seq__15186_15248,chunk__15187_15249,count__15188_15250,i__15189_15251,seq__15179_15241,chunk__15180_15242,count__15181_15243,i__15182_15244,seq__15172_15234,chunk__15173_15235,count__15174_15236,i__15175_15237,map__15192_15268,map__15192_15269__$1,gline_15270,gcol_15271,name_15272,seq__15186_15262__$1,temp__4657__auto___15261,vec__15183_15245,column_15246,column_info_15247,vec__15176_15238,line_15239,columns_15240,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_15271], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_15239,new cljs.core.Keyword(null,"col","col",-1959363084),column_15246,new cljs.core.Keyword(null,"name","name",1843675177),name_15272], null));
});})(seq__15186_15248,chunk__15187_15249,count__15188_15250,i__15189_15251,seq__15179_15241,chunk__15180_15242,count__15181_15243,i__15182_15244,seq__15172_15234,chunk__15173_15235,count__15174_15236,i__15175_15237,map__15192_15268,map__15192_15269__$1,gline_15270,gcol_15271,name_15272,seq__15186_15262__$1,temp__4657__auto___15261,vec__15183_15245,column_15246,column_info_15247,vec__15176_15238,line_15239,columns_15240,inverted))
,cljs.core.sorted_map.call(null)));

var G__15273 = cljs.core.next.call(null,seq__15186_15262__$1);
var G__15274 = null;
var G__15275 = (0);
var G__15276 = (0);
seq__15186_15248 = G__15273;
chunk__15187_15249 = G__15274;
count__15188_15250 = G__15275;
i__15189_15251 = G__15276;
continue;
}
} else {
}
}
break;
}

var G__15277 = seq__15179_15241;
var G__15278 = chunk__15180_15242;
var G__15279 = count__15181_15243;
var G__15280 = (i__15182_15244 + (1));
seq__15179_15241 = G__15277;
chunk__15180_15242 = G__15278;
count__15181_15243 = G__15279;
i__15182_15244 = G__15280;
continue;
} else {
var temp__4657__auto___15281 = cljs.core.seq.call(null,seq__15179_15241);
if(temp__4657__auto___15281){
var seq__15179_15282__$1 = temp__4657__auto___15281;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15179_15282__$1)){
var c__7215__auto___15283 = cljs.core.chunk_first.call(null,seq__15179_15282__$1);
var G__15284 = cljs.core.chunk_rest.call(null,seq__15179_15282__$1);
var G__15285 = c__7215__auto___15283;
var G__15286 = cljs.core.count.call(null,c__7215__auto___15283);
var G__15287 = (0);
seq__15179_15241 = G__15284;
chunk__15180_15242 = G__15285;
count__15181_15243 = G__15286;
i__15182_15244 = G__15287;
continue;
} else {
var vec__15194_15288 = cljs.core.first.call(null,seq__15179_15282__$1);
var column_15289 = cljs.core.nth.call(null,vec__15194_15288,(0),null);
var column_info_15290 = cljs.core.nth.call(null,vec__15194_15288,(1),null);
var seq__15197_15291 = cljs.core.seq.call(null,column_info_15290);
var chunk__15198_15292 = null;
var count__15199_15293 = (0);
var i__15200_15294 = (0);
while(true){
if((i__15200_15294 < count__15199_15293)){
var map__15201_15295 = cljs.core._nth.call(null,chunk__15198_15292,i__15200_15294);
var map__15201_15296__$1 = ((((!((map__15201_15295 == null)))?((((map__15201_15295.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15201_15295.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15201_15295):map__15201_15295);
var gline_15297 = cljs.core.get.call(null,map__15201_15296__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_15298 = cljs.core.get.call(null,map__15201_15296__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_15299 = cljs.core.get.call(null,map__15201_15296__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_15297], null),cljs.core.fnil.call(null,((function (seq__15197_15291,chunk__15198_15292,count__15199_15293,i__15200_15294,seq__15179_15241,chunk__15180_15242,count__15181_15243,i__15182_15244,seq__15172_15234,chunk__15173_15235,count__15174_15236,i__15175_15237,map__15201_15295,map__15201_15296__$1,gline_15297,gcol_15298,name_15299,vec__15194_15288,column_15289,column_info_15290,seq__15179_15282__$1,temp__4657__auto___15281,vec__15176_15238,line_15239,columns_15240,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_15298], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_15239,new cljs.core.Keyword(null,"col","col",-1959363084),column_15289,new cljs.core.Keyword(null,"name","name",1843675177),name_15299], null));
});})(seq__15197_15291,chunk__15198_15292,count__15199_15293,i__15200_15294,seq__15179_15241,chunk__15180_15242,count__15181_15243,i__15182_15244,seq__15172_15234,chunk__15173_15235,count__15174_15236,i__15175_15237,map__15201_15295,map__15201_15296__$1,gline_15297,gcol_15298,name_15299,vec__15194_15288,column_15289,column_info_15290,seq__15179_15282__$1,temp__4657__auto___15281,vec__15176_15238,line_15239,columns_15240,inverted))
,cljs.core.sorted_map.call(null)));

var G__15300 = seq__15197_15291;
var G__15301 = chunk__15198_15292;
var G__15302 = count__15199_15293;
var G__15303 = (i__15200_15294 + (1));
seq__15197_15291 = G__15300;
chunk__15198_15292 = G__15301;
count__15199_15293 = G__15302;
i__15200_15294 = G__15303;
continue;
} else {
var temp__4657__auto___15304__$1 = cljs.core.seq.call(null,seq__15197_15291);
if(temp__4657__auto___15304__$1){
var seq__15197_15305__$1 = temp__4657__auto___15304__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15197_15305__$1)){
var c__7215__auto___15306 = cljs.core.chunk_first.call(null,seq__15197_15305__$1);
var G__15307 = cljs.core.chunk_rest.call(null,seq__15197_15305__$1);
var G__15308 = c__7215__auto___15306;
var G__15309 = cljs.core.count.call(null,c__7215__auto___15306);
var G__15310 = (0);
seq__15197_15291 = G__15307;
chunk__15198_15292 = G__15308;
count__15199_15293 = G__15309;
i__15200_15294 = G__15310;
continue;
} else {
var map__15203_15311 = cljs.core.first.call(null,seq__15197_15305__$1);
var map__15203_15312__$1 = ((((!((map__15203_15311 == null)))?((((map__15203_15311.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15203_15311.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15203_15311):map__15203_15311);
var gline_15313 = cljs.core.get.call(null,map__15203_15312__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_15314 = cljs.core.get.call(null,map__15203_15312__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_15315 = cljs.core.get.call(null,map__15203_15312__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_15313], null),cljs.core.fnil.call(null,((function (seq__15197_15291,chunk__15198_15292,count__15199_15293,i__15200_15294,seq__15179_15241,chunk__15180_15242,count__15181_15243,i__15182_15244,seq__15172_15234,chunk__15173_15235,count__15174_15236,i__15175_15237,map__15203_15311,map__15203_15312__$1,gline_15313,gcol_15314,name_15315,seq__15197_15305__$1,temp__4657__auto___15304__$1,vec__15194_15288,column_15289,column_info_15290,seq__15179_15282__$1,temp__4657__auto___15281,vec__15176_15238,line_15239,columns_15240,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_15314], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_15239,new cljs.core.Keyword(null,"col","col",-1959363084),column_15289,new cljs.core.Keyword(null,"name","name",1843675177),name_15315], null));
});})(seq__15197_15291,chunk__15198_15292,count__15199_15293,i__15200_15294,seq__15179_15241,chunk__15180_15242,count__15181_15243,i__15182_15244,seq__15172_15234,chunk__15173_15235,count__15174_15236,i__15175_15237,map__15203_15311,map__15203_15312__$1,gline_15313,gcol_15314,name_15315,seq__15197_15305__$1,temp__4657__auto___15304__$1,vec__15194_15288,column_15289,column_info_15290,seq__15179_15282__$1,temp__4657__auto___15281,vec__15176_15238,line_15239,columns_15240,inverted))
,cljs.core.sorted_map.call(null)));

var G__15316 = cljs.core.next.call(null,seq__15197_15305__$1);
var G__15317 = null;
var G__15318 = (0);
var G__15319 = (0);
seq__15197_15291 = G__15316;
chunk__15198_15292 = G__15317;
count__15199_15293 = G__15318;
i__15200_15294 = G__15319;
continue;
}
} else {
}
}
break;
}

var G__15320 = cljs.core.next.call(null,seq__15179_15282__$1);
var G__15321 = null;
var G__15322 = (0);
var G__15323 = (0);
seq__15179_15241 = G__15320;
chunk__15180_15242 = G__15321;
count__15181_15243 = G__15322;
i__15182_15244 = G__15323;
continue;
}
} else {
}
}
break;
}

var G__15324 = seq__15172_15234;
var G__15325 = chunk__15173_15235;
var G__15326 = count__15174_15236;
var G__15327 = (i__15175_15237 + (1));
seq__15172_15234 = G__15324;
chunk__15173_15235 = G__15325;
count__15174_15236 = G__15326;
i__15175_15237 = G__15327;
continue;
} else {
var temp__4657__auto___15328 = cljs.core.seq.call(null,seq__15172_15234);
if(temp__4657__auto___15328){
var seq__15172_15329__$1 = temp__4657__auto___15328;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15172_15329__$1)){
var c__7215__auto___15330 = cljs.core.chunk_first.call(null,seq__15172_15329__$1);
var G__15331 = cljs.core.chunk_rest.call(null,seq__15172_15329__$1);
var G__15332 = c__7215__auto___15330;
var G__15333 = cljs.core.count.call(null,c__7215__auto___15330);
var G__15334 = (0);
seq__15172_15234 = G__15331;
chunk__15173_15235 = G__15332;
count__15174_15236 = G__15333;
i__15175_15237 = G__15334;
continue;
} else {
var vec__15205_15335 = cljs.core.first.call(null,seq__15172_15329__$1);
var line_15336 = cljs.core.nth.call(null,vec__15205_15335,(0),null);
var columns_15337 = cljs.core.nth.call(null,vec__15205_15335,(1),null);
var seq__15208_15338 = cljs.core.seq.call(null,columns_15337);
var chunk__15209_15339 = null;
var count__15210_15340 = (0);
var i__15211_15341 = (0);
while(true){
if((i__15211_15341 < count__15210_15340)){
var vec__15212_15342 = cljs.core._nth.call(null,chunk__15209_15339,i__15211_15341);
var column_15343 = cljs.core.nth.call(null,vec__15212_15342,(0),null);
var column_info_15344 = cljs.core.nth.call(null,vec__15212_15342,(1),null);
var seq__15215_15345 = cljs.core.seq.call(null,column_info_15344);
var chunk__15216_15346 = null;
var count__15217_15347 = (0);
var i__15218_15348 = (0);
while(true){
if((i__15218_15348 < count__15217_15347)){
var map__15219_15349 = cljs.core._nth.call(null,chunk__15216_15346,i__15218_15348);
var map__15219_15350__$1 = ((((!((map__15219_15349 == null)))?((((map__15219_15349.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15219_15349.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15219_15349):map__15219_15349);
var gline_15351 = cljs.core.get.call(null,map__15219_15350__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_15352 = cljs.core.get.call(null,map__15219_15350__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_15353 = cljs.core.get.call(null,map__15219_15350__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_15351], null),cljs.core.fnil.call(null,((function (seq__15215_15345,chunk__15216_15346,count__15217_15347,i__15218_15348,seq__15208_15338,chunk__15209_15339,count__15210_15340,i__15211_15341,seq__15172_15234,chunk__15173_15235,count__15174_15236,i__15175_15237,map__15219_15349,map__15219_15350__$1,gline_15351,gcol_15352,name_15353,vec__15212_15342,column_15343,column_info_15344,vec__15205_15335,line_15336,columns_15337,seq__15172_15329__$1,temp__4657__auto___15328,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_15352], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_15336,new cljs.core.Keyword(null,"col","col",-1959363084),column_15343,new cljs.core.Keyword(null,"name","name",1843675177),name_15353], null));
});})(seq__15215_15345,chunk__15216_15346,count__15217_15347,i__15218_15348,seq__15208_15338,chunk__15209_15339,count__15210_15340,i__15211_15341,seq__15172_15234,chunk__15173_15235,count__15174_15236,i__15175_15237,map__15219_15349,map__15219_15350__$1,gline_15351,gcol_15352,name_15353,vec__15212_15342,column_15343,column_info_15344,vec__15205_15335,line_15336,columns_15337,seq__15172_15329__$1,temp__4657__auto___15328,inverted))
,cljs.core.sorted_map.call(null)));

var G__15354 = seq__15215_15345;
var G__15355 = chunk__15216_15346;
var G__15356 = count__15217_15347;
var G__15357 = (i__15218_15348 + (1));
seq__15215_15345 = G__15354;
chunk__15216_15346 = G__15355;
count__15217_15347 = G__15356;
i__15218_15348 = G__15357;
continue;
} else {
var temp__4657__auto___15358__$1 = cljs.core.seq.call(null,seq__15215_15345);
if(temp__4657__auto___15358__$1){
var seq__15215_15359__$1 = temp__4657__auto___15358__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15215_15359__$1)){
var c__7215__auto___15360 = cljs.core.chunk_first.call(null,seq__15215_15359__$1);
var G__15361 = cljs.core.chunk_rest.call(null,seq__15215_15359__$1);
var G__15362 = c__7215__auto___15360;
var G__15363 = cljs.core.count.call(null,c__7215__auto___15360);
var G__15364 = (0);
seq__15215_15345 = G__15361;
chunk__15216_15346 = G__15362;
count__15217_15347 = G__15363;
i__15218_15348 = G__15364;
continue;
} else {
var map__15221_15365 = cljs.core.first.call(null,seq__15215_15359__$1);
var map__15221_15366__$1 = ((((!((map__15221_15365 == null)))?((((map__15221_15365.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15221_15365.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15221_15365):map__15221_15365);
var gline_15367 = cljs.core.get.call(null,map__15221_15366__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_15368 = cljs.core.get.call(null,map__15221_15366__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_15369 = cljs.core.get.call(null,map__15221_15366__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_15367], null),cljs.core.fnil.call(null,((function (seq__15215_15345,chunk__15216_15346,count__15217_15347,i__15218_15348,seq__15208_15338,chunk__15209_15339,count__15210_15340,i__15211_15341,seq__15172_15234,chunk__15173_15235,count__15174_15236,i__15175_15237,map__15221_15365,map__15221_15366__$1,gline_15367,gcol_15368,name_15369,seq__15215_15359__$1,temp__4657__auto___15358__$1,vec__15212_15342,column_15343,column_info_15344,vec__15205_15335,line_15336,columns_15337,seq__15172_15329__$1,temp__4657__auto___15328,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_15368], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_15336,new cljs.core.Keyword(null,"col","col",-1959363084),column_15343,new cljs.core.Keyword(null,"name","name",1843675177),name_15369], null));
});})(seq__15215_15345,chunk__15216_15346,count__15217_15347,i__15218_15348,seq__15208_15338,chunk__15209_15339,count__15210_15340,i__15211_15341,seq__15172_15234,chunk__15173_15235,count__15174_15236,i__15175_15237,map__15221_15365,map__15221_15366__$1,gline_15367,gcol_15368,name_15369,seq__15215_15359__$1,temp__4657__auto___15358__$1,vec__15212_15342,column_15343,column_info_15344,vec__15205_15335,line_15336,columns_15337,seq__15172_15329__$1,temp__4657__auto___15328,inverted))
,cljs.core.sorted_map.call(null)));

var G__15370 = cljs.core.next.call(null,seq__15215_15359__$1);
var G__15371 = null;
var G__15372 = (0);
var G__15373 = (0);
seq__15215_15345 = G__15370;
chunk__15216_15346 = G__15371;
count__15217_15347 = G__15372;
i__15218_15348 = G__15373;
continue;
}
} else {
}
}
break;
}

var G__15374 = seq__15208_15338;
var G__15375 = chunk__15209_15339;
var G__15376 = count__15210_15340;
var G__15377 = (i__15211_15341 + (1));
seq__15208_15338 = G__15374;
chunk__15209_15339 = G__15375;
count__15210_15340 = G__15376;
i__15211_15341 = G__15377;
continue;
} else {
var temp__4657__auto___15378__$1 = cljs.core.seq.call(null,seq__15208_15338);
if(temp__4657__auto___15378__$1){
var seq__15208_15379__$1 = temp__4657__auto___15378__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15208_15379__$1)){
var c__7215__auto___15380 = cljs.core.chunk_first.call(null,seq__15208_15379__$1);
var G__15381 = cljs.core.chunk_rest.call(null,seq__15208_15379__$1);
var G__15382 = c__7215__auto___15380;
var G__15383 = cljs.core.count.call(null,c__7215__auto___15380);
var G__15384 = (0);
seq__15208_15338 = G__15381;
chunk__15209_15339 = G__15382;
count__15210_15340 = G__15383;
i__15211_15341 = G__15384;
continue;
} else {
var vec__15223_15385 = cljs.core.first.call(null,seq__15208_15379__$1);
var column_15386 = cljs.core.nth.call(null,vec__15223_15385,(0),null);
var column_info_15387 = cljs.core.nth.call(null,vec__15223_15385,(1),null);
var seq__15226_15388 = cljs.core.seq.call(null,column_info_15387);
var chunk__15227_15389 = null;
var count__15228_15390 = (0);
var i__15229_15391 = (0);
while(true){
if((i__15229_15391 < count__15228_15390)){
var map__15230_15392 = cljs.core._nth.call(null,chunk__15227_15389,i__15229_15391);
var map__15230_15393__$1 = ((((!((map__15230_15392 == null)))?((((map__15230_15392.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15230_15392.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15230_15392):map__15230_15392);
var gline_15394 = cljs.core.get.call(null,map__15230_15393__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_15395 = cljs.core.get.call(null,map__15230_15393__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_15396 = cljs.core.get.call(null,map__15230_15393__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_15394], null),cljs.core.fnil.call(null,((function (seq__15226_15388,chunk__15227_15389,count__15228_15390,i__15229_15391,seq__15208_15338,chunk__15209_15339,count__15210_15340,i__15211_15341,seq__15172_15234,chunk__15173_15235,count__15174_15236,i__15175_15237,map__15230_15392,map__15230_15393__$1,gline_15394,gcol_15395,name_15396,vec__15223_15385,column_15386,column_info_15387,seq__15208_15379__$1,temp__4657__auto___15378__$1,vec__15205_15335,line_15336,columns_15337,seq__15172_15329__$1,temp__4657__auto___15328,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_15395], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_15336,new cljs.core.Keyword(null,"col","col",-1959363084),column_15386,new cljs.core.Keyword(null,"name","name",1843675177),name_15396], null));
});})(seq__15226_15388,chunk__15227_15389,count__15228_15390,i__15229_15391,seq__15208_15338,chunk__15209_15339,count__15210_15340,i__15211_15341,seq__15172_15234,chunk__15173_15235,count__15174_15236,i__15175_15237,map__15230_15392,map__15230_15393__$1,gline_15394,gcol_15395,name_15396,vec__15223_15385,column_15386,column_info_15387,seq__15208_15379__$1,temp__4657__auto___15378__$1,vec__15205_15335,line_15336,columns_15337,seq__15172_15329__$1,temp__4657__auto___15328,inverted))
,cljs.core.sorted_map.call(null)));

var G__15397 = seq__15226_15388;
var G__15398 = chunk__15227_15389;
var G__15399 = count__15228_15390;
var G__15400 = (i__15229_15391 + (1));
seq__15226_15388 = G__15397;
chunk__15227_15389 = G__15398;
count__15228_15390 = G__15399;
i__15229_15391 = G__15400;
continue;
} else {
var temp__4657__auto___15401__$2 = cljs.core.seq.call(null,seq__15226_15388);
if(temp__4657__auto___15401__$2){
var seq__15226_15402__$1 = temp__4657__auto___15401__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15226_15402__$1)){
var c__7215__auto___15403 = cljs.core.chunk_first.call(null,seq__15226_15402__$1);
var G__15404 = cljs.core.chunk_rest.call(null,seq__15226_15402__$1);
var G__15405 = c__7215__auto___15403;
var G__15406 = cljs.core.count.call(null,c__7215__auto___15403);
var G__15407 = (0);
seq__15226_15388 = G__15404;
chunk__15227_15389 = G__15405;
count__15228_15390 = G__15406;
i__15229_15391 = G__15407;
continue;
} else {
var map__15232_15408 = cljs.core.first.call(null,seq__15226_15402__$1);
var map__15232_15409__$1 = ((((!((map__15232_15408 == null)))?((((map__15232_15408.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15232_15408.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15232_15408):map__15232_15408);
var gline_15410 = cljs.core.get.call(null,map__15232_15409__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_15411 = cljs.core.get.call(null,map__15232_15409__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_15412 = cljs.core.get.call(null,map__15232_15409__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_15410], null),cljs.core.fnil.call(null,((function (seq__15226_15388,chunk__15227_15389,count__15228_15390,i__15229_15391,seq__15208_15338,chunk__15209_15339,count__15210_15340,i__15211_15341,seq__15172_15234,chunk__15173_15235,count__15174_15236,i__15175_15237,map__15232_15408,map__15232_15409__$1,gline_15410,gcol_15411,name_15412,seq__15226_15402__$1,temp__4657__auto___15401__$2,vec__15223_15385,column_15386,column_info_15387,seq__15208_15379__$1,temp__4657__auto___15378__$1,vec__15205_15335,line_15336,columns_15337,seq__15172_15329__$1,temp__4657__auto___15328,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_15411], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_15336,new cljs.core.Keyword(null,"col","col",-1959363084),column_15386,new cljs.core.Keyword(null,"name","name",1843675177),name_15412], null));
});})(seq__15226_15388,chunk__15227_15389,count__15228_15390,i__15229_15391,seq__15208_15338,chunk__15209_15339,count__15210_15340,i__15211_15341,seq__15172_15234,chunk__15173_15235,count__15174_15236,i__15175_15237,map__15232_15408,map__15232_15409__$1,gline_15410,gcol_15411,name_15412,seq__15226_15402__$1,temp__4657__auto___15401__$2,vec__15223_15385,column_15386,column_info_15387,seq__15208_15379__$1,temp__4657__auto___15378__$1,vec__15205_15335,line_15336,columns_15337,seq__15172_15329__$1,temp__4657__auto___15328,inverted))
,cljs.core.sorted_map.call(null)));

var G__15413 = cljs.core.next.call(null,seq__15226_15402__$1);
var G__15414 = null;
var G__15415 = (0);
var G__15416 = (0);
seq__15226_15388 = G__15413;
chunk__15227_15389 = G__15414;
count__15228_15390 = G__15415;
i__15229_15391 = G__15416;
continue;
}
} else {
}
}
break;
}

var G__15417 = cljs.core.next.call(null,seq__15208_15379__$1);
var G__15418 = null;
var G__15419 = (0);
var G__15420 = (0);
seq__15208_15338 = G__15417;
chunk__15209_15339 = G__15418;
count__15210_15340 = G__15419;
i__15211_15341 = G__15420;
continue;
}
} else {
}
}
break;
}

var G__15421 = cljs.core.next.call(null,seq__15172_15329__$1);
var G__15422 = null;
var G__15423 = (0);
var G__15424 = (0);
seq__15172_15234 = G__15421;
chunk__15173_15235 = G__15422;
count__15174_15236 = G__15423;
i__15175_15237 = G__15424;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref.call(null,inverted);
});
