// Compiled by ClojureScript 1.9.227 {}
goog.provide('turtle.core');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('reagent.core');
goog.require('turtle.views');
cljs.core.enable_console_print_BANG_.call(null);
turtle.core.render = (function turtle$core$render(){
return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [turtle.views.app_view], null),document.getElementById("app"));
});
turtle.core.init = (function turtle$core$init(){
return turtle.core.render.call(null);
});
goog.exportSymbol('turtle.core.init', turtle.core.init);
turtle.core.reload = (function turtle$core$reload(){
return turtle.core.render.call(null);
});
goog.exportSymbol('turtle.core.reload', turtle.core.reload);
