// Compiled by ClojureScript 1.9.227 {}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('reagent.impl.util');
goog.require('reagent.interop');
goog.require('reagent.ratom');
goog.require('reagent.impl.template');
goog.require('reagent.impl.batching');
goog.require('reagent.debug');
if(typeof reagent.dom.imported !== 'undefined'){
} else {
reagent.dom.imported = null;
}
reagent.dom.module = (function reagent$dom$module(){
if(cljs.core.some_QMARK_.call(null,reagent.dom.imported)){
return reagent.dom.imported;
} else {
if(typeof ReactDOM !== 'undefined'){
return reagent.dom.imported = ReactDOM;
} else {
if(typeof require !== 'undefined'){
var or__6404__auto__ = reagent.dom.imported = require("react-dom");
if(cljs.core.truth_(or__6404__auto__)){
return or__6404__auto__;
} else {
throw (new Error("require('react-dom') failed"));
}
} else {
throw (new Error("js/ReactDOM is missing"));

}
}
}
});
if(typeof reagent.dom.roots !== 'undefined'){
} else {
reagent.dom.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.dissoc,container);

return (reagent.dom.module.call(null)["unmountComponentAtNode"])(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR_12859 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{return (reagent.dom.module.call(null)["render"])(comp.call(null),container,((function (_STAR_always_update_STAR_12859){
return (function (){
var _STAR_always_update_STAR_12860 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

reagent.impl.batching.flush_after_render.call(null);

if(cljs.core.some_QMARK_.call(null,callback)){
return callback.call(null);
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_12860;
}});})(_STAR_always_update_STAR_12859))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_12859;
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp.call(null,comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element. The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var args12861 = [];
var len__7479__auto___12864 = arguments.length;
var i__7480__auto___12865 = (0);
while(true){
if((i__7480__auto___12865 < len__7479__auto___12864)){
args12861.push((arguments[i__7480__auto___12865]));

var G__12866 = (i__7480__auto___12865 + (1));
i__7480__auto___12865 = G__12866;
continue;
} else {
}
break;
}

var G__12863 = args12861.length;
switch (G__12863) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12861.length)].join('')));

}
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.call(null,comp,container,null);
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
reagent.ratom.flush_BANG_.call(null);

var f = (function (){
return reagent.impl.template.as_element.call(null,((cljs.core.fn_QMARK_.call(null,comp))?comp.call(null):comp));
});
return reagent.dom.render_comp.call(null,f,container,callback);
});

reagent.dom.render.cljs$lang$maxFixedArity = 3;

reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp.call(null,container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return (reagent.dom.module.call(null)["findDOMNode"])(this$);
});
reagent.impl.template.find_dom_node = reagent.dom.dom_node;
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_.call(null);

var seq__12872_12876 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,reagent.dom.roots)));
var chunk__12873_12877 = null;
var count__12874_12878 = (0);
var i__12875_12879 = (0);
while(true){
if((i__12875_12879 < count__12874_12878)){
var v_12880 = cljs.core._nth.call(null,chunk__12873_12877,i__12875_12879);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_12880);

var G__12881 = seq__12872_12876;
var G__12882 = chunk__12873_12877;
var G__12883 = count__12874_12878;
var G__12884 = (i__12875_12879 + (1));
seq__12872_12876 = G__12881;
chunk__12873_12877 = G__12882;
count__12874_12878 = G__12883;
i__12875_12879 = G__12884;
continue;
} else {
var temp__4657__auto___12885 = cljs.core.seq.call(null,seq__12872_12876);
if(temp__4657__auto___12885){
var seq__12872_12886__$1 = temp__4657__auto___12885;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12872_12886__$1)){
var c__7215__auto___12887 = cljs.core.chunk_first.call(null,seq__12872_12886__$1);
var G__12888 = cljs.core.chunk_rest.call(null,seq__12872_12886__$1);
var G__12889 = c__7215__auto___12887;
var G__12890 = cljs.core.count.call(null,c__7215__auto___12887);
var G__12891 = (0);
seq__12872_12876 = G__12888;
chunk__12873_12877 = G__12889;
count__12874_12878 = G__12890;
i__12875_12879 = G__12891;
continue;
} else {
var v_12892 = cljs.core.first.call(null,seq__12872_12886__$1);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_12892);

var G__12893 = cljs.core.next.call(null,seq__12872_12886__$1);
var G__12894 = null;
var G__12895 = (0);
var G__12896 = (0);
seq__12872_12876 = G__12893;
chunk__12873_12877 = G__12894;
count__12874_12878 = G__12895;
i__12875_12879 = G__12896;
continue;
}
} else {
}
}
break;
}

return "Updated";
});
