// Compiled by ClojureScript 1.9.227 {}
goog.provide('quil.sketch');
goog.require('cljs.core');
goog.require('quil.util');
goog.require('quil.middlewares.deprecated_options');
goog.require('goog.dom');
goog.require('goog.events');
goog.require('goog.events.EventType');
quil.sketch._STAR_applet_STAR_ = null;
quil.sketch.current_applet = (function quil$sketch$current_applet(){
return quil.sketch._STAR_applet_STAR_;
});
quil.sketch.rendering_modes = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"java2d","java2d",166099237),(Processing.prototype.PConstants["JAVA2D"]),new cljs.core.Keyword(null,"p2d","p2d",-2106175755),(Processing.prototype.PConstants["P2D"]),new cljs.core.Keyword(null,"p3d","p3d",-850380194),(Processing.prototype.PConstants["P3D"]),new cljs.core.Keyword(null,"opengl","opengl",-614998103),(Processing.prototype.PConstants["OPENGL"])], null);
quil.sketch.resolve_renderer = (function quil$sketch$resolve_renderer(mode){
return quil.util.resolve_constant_key.call(null,mode,quil.sketch.rendering_modes);
});
quil.sketch.size = (function quil$sketch$size(var_args){
var args19077 = [];
var len__7479__auto___19080 = arguments.length;
var i__7480__auto___19081 = (0);
while(true){
if((i__7480__auto___19081 < len__7479__auto___19080)){
args19077.push((arguments[i__7480__auto___19081]));

var G__19082 = (i__7480__auto___19081 + (1));
i__7480__auto___19081 = G__19082;
continue;
} else {
}
break;
}

var G__19079 = args19077.length;
switch (G__19079) {
case 2:
return quil.sketch.size.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return quil.sketch.size.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19077.length)].join('')));

}
});

quil.sketch.size.cljs$core$IFn$_invoke$arity$2 = (function (width,height){
return quil.sketch.current_applet.call(null).size((width | (0)),(height | (0)));
});

quil.sketch.size.cljs$core$IFn$_invoke$arity$3 = (function (width,height,mode){
return quil.sketch.current_applet.call(null).size((width | (0)),(height | (0)),quil.util.resolve_constant_key.call(null,mode,quil.sketch.rendering_modes));
});

quil.sketch.size.cljs$lang$maxFixedArity = 3;

quil.sketch.bind_handlers = (function quil$sketch$bind_handlers(prc,opts){
var seq__19096 = cljs.core.seq.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"keyPressed","keyPressed",1791025256),new cljs.core.Keyword(null,"mouseOut","mouseOut",-386669045),new cljs.core.Keyword(null,"mouseScrolled","mouseScrolled",31878252),new cljs.core.Keyword(null,"mouseDragged","mouseDragged",129975181),new cljs.core.Keyword(null,"setup","setup",1987730512),new cljs.core.Keyword(null,"keyReleased","keyReleased",541714964),new cljs.core.Keyword(null,"mouseClicked","mouseClicked",1764302965),new cljs.core.Keyword(null,"mouseReleased","mouseReleased",1116234838),new cljs.core.Keyword(null,"mousePressed","mousePressed",1776186454),new cljs.core.Keyword(null,"mouseMoved","mouseMoved",-1936954058),new cljs.core.Keyword(null,"mouseOver","mouseOver",-1334461930),new cljs.core.Keyword(null,"keyTyped","keyTyped",1437329399),new cljs.core.Keyword(null,"draw","draw",1358331674)],[new cljs.core.Keyword(null,"key-pressed","key-pressed",-757100364),new cljs.core.Keyword(null,"mouse-exited","mouse-exited",-483205244),new cljs.core.Keyword(null,"mouse-wheel","mouse-wheel",1811662439),new cljs.core.Keyword(null,"mouse-dragged","mouse-dragged",-1220073441),new cljs.core.Keyword(null,"setup","setup",1987730512),new cljs.core.Keyword(null,"key-released","key-released",215919828),new cljs.core.Keyword(null,"mouse-clicked","mouse-clicked",-199339421),new cljs.core.Keyword(null,"mouse-released","mouse-released",-664480061),new cljs.core.Keyword(null,"mouse-pressed","mouse-pressed",736955536),new cljs.core.Keyword(null,"mouse-moved","mouse-moved",-1918152310),new cljs.core.Keyword(null,"mouse-entered","mouse-entered",811350322),new cljs.core.Keyword(null,"key-typed","key-typed",-876037597),new cljs.core.Keyword(null,"draw","draw",1358331674)]));
var chunk__19097 = null;
var count__19098 = (0);
var i__19099 = (0);
while(true){
if((i__19099 < count__19098)){
var vec__19100 = cljs.core._nth.call(null,chunk__19097,i__19099);
var processing_name = cljs.core.nth.call(null,vec__19100,(0),null);
var quil_name = cljs.core.nth.call(null,vec__19100,(1),null);
var temp__4657__auto___19108 = opts.call(null,quil_name);
if(cljs.core.truth_(temp__4657__auto___19108)){
var handler_19109 = temp__4657__auto___19108;
(prc[cljs.core.name.call(null,processing_name)] = ((function (seq__19096,chunk__19097,count__19098,i__19099,handler_19109,temp__4657__auto___19108,vec__19100,processing_name,quil_name){
return (function (){
var _STAR_applet_STAR_19103 = quil.sketch._STAR_applet_STAR_;
quil.sketch._STAR_applet_STAR_ = prc;

try{return handler_19109.call(null);
}finally {quil.sketch._STAR_applet_STAR_ = _STAR_applet_STAR_19103;
}});})(seq__19096,chunk__19097,count__19098,i__19099,handler_19109,temp__4657__auto___19108,vec__19100,processing_name,quil_name))
);
} else {
}

var G__19110 = seq__19096;
var G__19111 = chunk__19097;
var G__19112 = count__19098;
var G__19113 = (i__19099 + (1));
seq__19096 = G__19110;
chunk__19097 = G__19111;
count__19098 = G__19112;
i__19099 = G__19113;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__19096);
if(temp__4657__auto__){
var seq__19096__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19096__$1)){
var c__7215__auto__ = cljs.core.chunk_first.call(null,seq__19096__$1);
var G__19114 = cljs.core.chunk_rest.call(null,seq__19096__$1);
var G__19115 = c__7215__auto__;
var G__19116 = cljs.core.count.call(null,c__7215__auto__);
var G__19117 = (0);
seq__19096 = G__19114;
chunk__19097 = G__19115;
count__19098 = G__19116;
i__19099 = G__19117;
continue;
} else {
var vec__19104 = cljs.core.first.call(null,seq__19096__$1);
var processing_name = cljs.core.nth.call(null,vec__19104,(0),null);
var quil_name = cljs.core.nth.call(null,vec__19104,(1),null);
var temp__4657__auto___19118__$1 = opts.call(null,quil_name);
if(cljs.core.truth_(temp__4657__auto___19118__$1)){
var handler_19119 = temp__4657__auto___19118__$1;
(prc[cljs.core.name.call(null,processing_name)] = ((function (seq__19096,chunk__19097,count__19098,i__19099,handler_19119,temp__4657__auto___19118__$1,vec__19104,processing_name,quil_name,seq__19096__$1,temp__4657__auto__){
return (function (){
var _STAR_applet_STAR_19107 = quil.sketch._STAR_applet_STAR_;
quil.sketch._STAR_applet_STAR_ = prc;

try{return handler_19119.call(null);
}finally {quil.sketch._STAR_applet_STAR_ = _STAR_applet_STAR_19107;
}});})(seq__19096,chunk__19097,count__19098,i__19099,handler_19119,temp__4657__auto___19118__$1,vec__19104,processing_name,quil_name,seq__19096__$1,temp__4657__auto__))
);
} else {
}

var G__19120 = cljs.core.next.call(null,seq__19096__$1);
var G__19121 = null;
var G__19122 = (0);
var G__19123 = (0);
seq__19096 = G__19120;
chunk__19097 = G__19121;
count__19098 = G__19122;
i__19099 = G__19123;
continue;
}
} else {
return null;
}
}
break;
}
});
quil.sketch.make_sketch = (function quil$sketch$make_sketch(options){
var opts = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(500),(300)], null)], null),(function (p1__19124_SHARP_){
return p1__19124_SHARP_.call(null,options);
}).call(null,cljs.core.apply.call(null,cljs.core.comp,cljs.core.cons.call(null,quil.middlewares.deprecated_options.deprecated_options,new cljs.core.Keyword(null,"middleware","middleware",1462115504).cljs$core$IFn$_invoke$arity$2(options,cljs.core.PersistentVector.EMPTY)))));
var sketch_size = (function (){var or__6404__auto__ = new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__6404__auto__)){
return or__6404__auto__;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(200),(200)], null);
}
})();
var renderer = new cljs.core.Keyword(null,"renderer","renderer",336841071).cljs$core$IFn$_invoke$arity$1(opts);
var features = cljs.core.set.call(null,new cljs.core.Keyword(null,"features","features",-1146962336).cljs$core$IFn$_invoke$arity$1(opts));
var opts__$1 = cljs.core.update_in.call(null,cljs.core.update_in.call(null,opts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"setup","setup",1987730512)], null),((function (opts,sketch_size,renderer,features){
return (function (p1__19125_SHARP_){
return ((function (opts,sketch_size,renderer,features){
return (function (){
cljs.core.apply.call(null,quil.sketch.size,cljs.core.concat.call(null,sketch_size,(cljs.core.truth_(renderer)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [renderer], null):cljs.core.PersistentVector.EMPTY)));

if(cljs.core.truth_(p1__19125_SHARP_)){
return p1__19125_SHARP_.call(null);
} else {
return null;
}
});
;})(opts,sketch_size,renderer,features))
});})(opts,sketch_size,renderer,features))
),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mouse-wheel","mouse-wheel",1811662439)], null),((function (opts,sketch_size,renderer,features){
return (function (p1__19126_SHARP_){
if(cljs.core.truth_(p1__19126_SHARP_)){
return ((function (opts,sketch_size,renderer,features){
return (function (){
return p1__19126_SHARP_.call(null,((-1) * quil.sketch._STAR_applet_STAR_.mouseScroll));
});
;})(opts,sketch_size,renderer,features))
} else {
return null;
}
});})(opts,sketch_size,renderer,features))
);
var attach_function = ((function (opts,sketch_size,renderer,features,opts__$1){
return (function (prc){
quil.sketch.bind_handlers.call(null,prc,opts__$1);

prc.quil = cljs.core.atom.call(null,null);

return prc.target_frame_rate = cljs.core.atom.call(null,(60));
});})(opts,sketch_size,renderer,features,opts__$1))
;
var sketch = (new Processing.Sketch(attach_function));
if(cljs.core.contains_QMARK_.call(null,features,new cljs.core.Keyword(null,"global-key-events","global-key-events",335064944))){
((sketch["options"])["globalKeyEvents"] = true);
} else {
}

return sketch;
});
quil.sketch.sketch = (function quil$sketch$sketch(var_args){
var args__7486__auto__ = [];
var len__7479__auto___19128 = arguments.length;
var i__7480__auto___19129 = (0);
while(true){
if((i__7480__auto___19129 < len__7479__auto___19128)){
args__7486__auto__.push((arguments[i__7480__auto___19129]));

var G__19130 = (i__7480__auto___19129 + (1));
i__7480__auto___19129 = G__19130;
continue;
} else {
}
break;
}

var argseq__7487__auto__ = ((((0) < args__7486__auto__.length))?(new cljs.core.IndexedSeq(args__7486__auto__.slice((0)),(0),null)):null);
return quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic(argseq__7487__auto__);
});

quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic = (function (opts){
var opts_map = cljs.core.apply.call(null,cljs.core.hash_map,opts);
var host_elem = goog.dom.getElement(new cljs.core.Keyword(null,"host","host",-1558485167).cljs$core$IFn$_invoke$arity$1(opts_map));
var renderer = (function (){var or__6404__auto__ = new cljs.core.Keyword(null,"renderer","renderer",336841071).cljs$core$IFn$_invoke$arity$1(opts_map);
if(cljs.core.truth_(or__6404__auto__)){
return or__6404__auto__;
} else {
return new cljs.core.Keyword(null,"p2d","p2d",-2106175755);
}
})();
if(cljs.core.truth_(host_elem)){
if(cljs.core.truth_(host_elem.processing_context)){
if(cljs.core._EQ_.call(null,renderer,host_elem.processing_context)){
} else {
console.warn("WARNING: Using different context on one canvas!");
}
} else {
host_elem.processing_context = renderer;
}

return (new Processing(host_elem,quil.sketch.make_sketch.call(null,opts_map)));
} else {
return console.warn("WARNING: Cannot create sketch. :host is not specified.");
}
});

quil.sketch.sketch.cljs$lang$maxFixedArity = (0);

quil.sketch.sketch.cljs$lang$applyTo = (function (seq19127){
return quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq19127));
});

quil.sketch.sketch_init_list = cljs.core.atom.call(null,cljs.core.List.EMPTY);
quil.sketch.empty_body_QMARK_ = (function quil$sketch$empty_body_QMARK_(){
var child = document.body.childNodes;
return (child.length <= (1));
});
quil.sketch.add_canvas = (function quil$sketch$add_canvas(canvas_id){
var canvas = document.createElement("canvas");
canvas.setAttribute("id",canvas_id);

return document.body.appendChild(canvas);
});
quil.sketch.init_sketches = (function quil$sketch$init_sketches(){
var add_elem_QMARK_ = quil.sketch.empty_body_QMARK_.call(null);
var seq__19135 = cljs.core.seq.call(null,cljs.core.deref.call(null,quil.sketch.sketch_init_list));
var chunk__19136 = null;
var count__19137 = (0);
var i__19138 = (0);
while(true){
if((i__19138 < count__19137)){
var sk = cljs.core._nth.call(null,chunk__19136,i__19138);
if(cljs.core.truth_(add_elem_QMARK_)){
quil.sketch.add_canvas.call(null,new cljs.core.Keyword(null,"host-id","host-id",742376279).cljs$core$IFn$_invoke$arity$1(sk));
} else {
}

new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(sk).call(null);

var G__19139 = seq__19135;
var G__19140 = chunk__19136;
var G__19141 = count__19137;
var G__19142 = (i__19138 + (1));
seq__19135 = G__19139;
chunk__19136 = G__19140;
count__19137 = G__19141;
i__19138 = G__19142;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__19135);
if(temp__4657__auto__){
var seq__19135__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19135__$1)){
var c__7215__auto__ = cljs.core.chunk_first.call(null,seq__19135__$1);
var G__19143 = cljs.core.chunk_rest.call(null,seq__19135__$1);
var G__19144 = c__7215__auto__;
var G__19145 = cljs.core.count.call(null,c__7215__auto__);
var G__19146 = (0);
seq__19135 = G__19143;
chunk__19136 = G__19144;
count__19137 = G__19145;
i__19138 = G__19146;
continue;
} else {
var sk = cljs.core.first.call(null,seq__19135__$1);
if(cljs.core.truth_(add_elem_QMARK_)){
quil.sketch.add_canvas.call(null,new cljs.core.Keyword(null,"host-id","host-id",742376279).cljs$core$IFn$_invoke$arity$1(sk));
} else {
}

new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(sk).call(null);

var G__19147 = cljs.core.next.call(null,seq__19135__$1);
var G__19148 = null;
var G__19149 = (0);
var G__19150 = (0);
seq__19135 = G__19147;
chunk__19136 = G__19148;
count__19137 = G__19149;
i__19138 = G__19150;
continue;
}
} else {
return null;
}
}
break;
}
});
quil.sketch.add_sketch_to_init_list = (function quil$sketch$add_sketch_to_init_list(sk){
return cljs.core.swap_BANG_.call(null,quil.sketch.sketch_init_list,cljs.core.conj,sk);
});
goog.events.listenOnce(window,goog.events.EventType.LOAD,quil.sketch.init_sketches);
