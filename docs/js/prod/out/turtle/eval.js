// Compiled by ClojureScript 1.9.227 {}
goog.provide('turtle.eval');
goog.require('cljs.core');
goog.require('cljs.js');
goog.require('clojure.string');
turtle.eval.eval_code = (function turtle$eval$eval_code(code){
return cljs.js.eval_str.call(null,cljs.js.empty_state.call(null),clojure.string.join.call(null,"\n",code),new cljs.core.Symbol(null,"dummy-symbol","dummy-symbol",-412954789,null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"turtle.draw","turtle.draw",-984620289,null),new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),true,new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320),false,new cljs.core.Keyword(null,"eval","eval",-1103567905),cljs.js.js_eval,new cljs.core.Keyword(null,"load","load",-1318641184),(function (name,cb){
return cb.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lang","lang",-1819677104),new cljs.core.Keyword(null,"clj","clj",-660495428),new cljs.core.Keyword(null,"source","source",-433931539),""], null));
}),new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"statement","statement",-32780863)], null),(function (p__11719){
var map__11720 = p__11719;
var map__11720__$1 = ((((!((map__11720 == null)))?((((map__11720.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11720.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11720):map__11720);
var x = map__11720__$1;
var error = cljs.core.get.call(null,map__11720__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var value = cljs.core.get.call(null,map__11720__$1,new cljs.core.Keyword(null,"value","value",305978217));
if(cljs.core.truth_(error)){
turtle.eval._STAR_er = x;

return console.log([cljs.core.str(error)].join(''));
} else {
return null;
}
}));
});
