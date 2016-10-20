// Compiled by ClojureScript 1.9.227 {}
goog.provide('turtle.views');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('turtle.styles');
goog.require('turtle.eval');
goog.require('quil.core');
goog.require('clojure_turtle.core');
turtle.views.editor = cljs.core.atom.call(null,null);
turtle.views.eval_from_editor_BANG_ = (function turtle$views$eval_from_editor_BANG_(){
return turtle.eval.eval_code.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(ns turtle.draw\n     (:require\n     [clojure-turtle.core :as t]))",cljs.core.deref.call(null,turtle.views.editor).getValue()], null));
});
turtle.views.editor_view = (function turtle$views$editor_view(){
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (){
return cljs.core.reset_BANG_.call(null,turtle.views.editor,CodeMirror(document.getElementById("editor"),cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),"(t/home)\n(t/clean)\n(t/forward (rand-int 50))",new cljs.core.Keyword(null,"theme","theme",-1247880880),"railscasts",new cljs.core.Keyword(null,"mode","mode",654403691),"clojure"], null))));
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.editor","div.editor",-1423342585),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),(function (e){
if(cljs.core.truth_((function (){var and__6392__auto__ = e.ctrlKey;
if(cljs.core.truth_(and__6392__auto__)){
return cljs.core._EQ_.call(null,(13),e.keyCode);
} else {
return and__6392__auto__;
}
})())){
return turtle.views.eval_from_editor_BANG_.call(null);
} else {
return null;
}
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return turtle.views.eval_from_editor_BANG_.call(null);
})], null),"RUN"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"editor"], null)], null)], null);
})], null));
});
turtle.views.commands = new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.call(null,"; commands"),cljs.core.list(new cljs.core.Symbol("t","forward","t/forward",1083186252,null),(30)),cljs.core.list(new cljs.core.Symbol("t","back","t/back",1223012135,null),(30)),cljs.core.list(new cljs.core.Symbol("t","right","t/right",1187950066,null),(90)),cljs.core.list(new cljs.core.Symbol("t","left","t/left",1241415226,null),(90)),cljs.core.list(new cljs.core.Symbol("t","repeat","t/repeat",-1821743678,null),(3),cljs.core.list(new cljs.core.Symbol("t","all","t/all",-1762318423,null),new cljs.core.Symbol(null,"...","...",-1926939749,null))),cljs.core.list(new cljs.core.Symbol("t","penup","t/penup",-497116919,null)),cljs.core.list(new cljs.core.Symbol("t","pendown","t/pendown",1171800187,null)),cljs.core.list(new cljs.core.Symbol("t","setxy","t/setxy",1410964958,null),(0),(0)),cljs.core.list(new cljs.core.Symbol("t","setheading","t/setheading",-1154228701,null),(90)),cljs.core.list(new cljs.core.Symbol("t","clean","t/clean",1682065522,null)),cljs.core.list(new cljs.core.Symbol("t","home","t/home",1565974206,null)),cljs.core.list(new cljs.core.Symbol("t","color","t/color",-1642759720,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(255)], null)),cljs.core.list(new cljs.core.Symbol("t","start-fill","t/start-fill",1732056353,null)),cljs.core.list(new cljs.core.Symbol("t","end-fill","t/end-fill",-33784911,null)),cljs.core.list(new cljs.core.Symbol("t","wait","t/wait",1379867082,null),(1000))], null);
turtle.views.command_list_view = (function turtle$views$command_list_view(){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.command-list","div.command-list",-948006251)], null),(function (){var iter__7184__auto__ = (function turtle$views$command_list_view_$_iter__21174(s__21175){
return (new cljs.core.LazySeq(null,(function (){
var s__21175__$1 = s__21175;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__21175__$1);
if(temp__4657__auto__){
var s__21175__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__21175__$2)){
var c__7182__auto__ = cljs.core.chunk_first.call(null,s__21175__$2);
var size__7183__auto__ = cljs.core.count.call(null,c__7182__auto__);
var b__21177 = cljs.core.chunk_buffer.call(null,size__7183__auto__);
if((function (){var i__21176 = (0);
while(true){
if((i__21176 < size__7183__auto__)){
var command = cljs.core._nth.call(null,c__7182__auto__,i__21176);
cljs.core.chunk_append.call(null,b__21177,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),[cljs.core.str(command)].join('')], null));

var G__21178 = (i__21176 + (1));
i__21176 = G__21178;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21177),turtle$views$command_list_view_$_iter__21174.call(null,cljs.core.chunk_rest.call(null,s__21175__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21177),null);
}
} else {
var command = cljs.core.first.call(null,s__21175__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),[cljs.core.str(command)].join('')], null),turtle$views$command_list_view_$_iter__21174.call(null,cljs.core.rest.call(null,s__21175__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7184__auto__.call(null,turtle.views.commands);
})());
});
turtle.views.sketch = (function turtle$views$sketch(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"turtle-canvas",new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(400),(400)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,clojure_turtle.core.setup))?(function() { 
var G__21179__delegate = function (args){
return cljs.core.apply.call(null,clojure_turtle.core.setup,args);
};
var G__21179 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21180__i = 0, G__21180__a = new Array(arguments.length -  0);
while (G__21180__i < G__21180__a.length) {G__21180__a[G__21180__i] = arguments[G__21180__i + 0]; ++G__21180__i;}
  args = new cljs.core.IndexedSeq(G__21180__a,0);
} 
return G__21179__delegate.call(this,args);};
G__21179.cljs$lang$maxFixedArity = 0;
G__21179.cljs$lang$applyTo = (function (arglist__21181){
var args = cljs.core.seq(arglist__21181);
return G__21179__delegate(args);
});
G__21179.cljs$core$IFn$_invoke$arity$variadic = G__21179__delegate;
return G__21179;
})()
:clojure_turtle.core.setup),new cljs.core.Keyword(null,"no-start","no-start",1381488856),true,new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,clojure_turtle.core.draw))?(function() { 
var G__21182__delegate = function (args){
return cljs.core.apply.call(null,clojure_turtle.core.draw,args);
};
var G__21182 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21183__i = 0, G__21183__a = new Array(arguments.length -  0);
while (G__21183__i < G__21183__a.length) {G__21183__a[G__21183__i] = arguments[G__21183__i + 0]; ++G__21183__i;}
  args = new cljs.core.IndexedSeq(G__21183__a,0);
} 
return G__21182__delegate.call(this,args);};
G__21182.cljs$lang$maxFixedArity = 0;
G__21182.cljs$lang$applyTo = (function (arglist__21184){
var args = cljs.core.seq(arglist__21184);
return G__21182__delegate(args);
});
G__21182.cljs$core$IFn$_invoke$arity$variadic = G__21182__delegate;
return G__21182;
})()
:clojure_turtle.core.draw));
});
goog.exportSymbol('turtle.views.sketch', turtle.views.sketch);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__7577__7578__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__7577__7578__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),turtle.views.sketch,new cljs.core.Keyword(null,"host-id","host-id",742376279),"turtle-canvas"], null));
}
turtle.views.output_view = (function turtle$views$output_view(){
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (){
return turtle.views.sketch.call(null);
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.output","div.output",1460347316),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"canvas","canvas",-1798817489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"turtle-canvas"], null)], null)], null);
})], null));
});
turtle.views.app_view = (function turtle$views$app_view(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.app","div.app",-99849286),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [turtle.styles.styles_view], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [turtle.views.command_list_view], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [turtle.views.editor_view], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [turtle.views.output_view], null)], null);
});
