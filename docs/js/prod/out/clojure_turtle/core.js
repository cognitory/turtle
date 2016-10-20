// Compiled by ClojureScript 1.9.227 {}
goog.provide('clojure_turtle.core');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('clojure_turtle.macros');
/**
 * The default color to be used (ex: if color is not specified)
 */
clojure_turtle.core.DEFAULT_COLOR = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null);

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {clojure_turtle.core.Object}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
clojure_turtle.core.Turtle = (function (x,y,angle,pen,color,fill,commands,start_from,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.angle = angle;
this.pen = pen;
this.color = color;
this.fill = fill;
this.commands = commands;
this.start_from = start_from;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
clojure_turtle.core.Turtle.prototype.toString = (function (){
var self__ = this;
var turt = this;
return [cljs.core.str(cljs.core.select_keys.call(null,turt,cljs.core.keys.call(null,turt)))].join('');
});

clojure_turtle.core.Turtle.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7026__auto__,k__7027__auto__){
var self__ = this;
var this__7026__auto____$1 = this;
return cljs.core._lookup.call(null,this__7026__auto____$1,k__7027__auto__,null);
});

clojure_turtle.core.Turtle.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7028__auto__,k12108,else__7029__auto__){
var self__ = this;
var this__7028__auto____$1 = this;
var G__12110 = (((k12108 instanceof cljs.core.Keyword))?k12108.fqn:null);
switch (G__12110) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
case "angle":
return self__.angle;

break;
case "pen":
return self__.pen;

break;
case "color":
return self__.color;

break;
case "fill":
return self__.fill;

break;
case "commands":
return self__.commands;

break;
case "start-from":
return self__.start_from;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k12108,else__7029__auto__);

}
});

clojure_turtle.core.Turtle.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7040__auto__,writer__7041__auto__,opts__7042__auto__){
var self__ = this;
var this__7040__auto____$1 = this;
var pr_pair__7043__auto__ = ((function (this__7040__auto____$1){
return (function (keyval__7044__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__7041__auto__,cljs.core.pr_writer,""," ","",opts__7042__auto__,keyval__7044__auto__);
});})(this__7040__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__7041__auto__,pr_pair__7043__auto__,"#clojure-turtle.core.Turtle{",", ","}",opts__7042__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"angle","angle",1622094254),self__.angle],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pen","pen",2006675445),self__.pen],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"color","color",1011675173),self__.color],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fill","fill",883462889),self__.fill],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"commands","commands",161008658),self__.commands],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-from","start-from",1934364841),self__.start_from],null))], null),self__.__extmap));
});

clojure_turtle.core.Turtle.prototype.cljs$core$IIterable$ = true;

clojure_turtle.core.Turtle.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12107){
var self__ = this;
var G__12107__$1 = this;
return (new cljs.core.RecordIter((0),G__12107__$1,8,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"angle","angle",1622094254),new cljs.core.Keyword(null,"pen","pen",2006675445),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"commands","commands",161008658),new cljs.core.Keyword(null,"start-from","start-from",1934364841)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

clojure_turtle.core.Turtle.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7024__auto__){
var self__ = this;
var this__7024__auto____$1 = this;
return self__.__meta;
});

clojure_turtle.core.Turtle.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7020__auto__){
var self__ = this;
var this__7020__auto____$1 = this;
return (new clojure_turtle.core.Turtle(self__.x,self__.y,self__.angle,self__.pen,self__.color,self__.fill,self__.commands,self__.start_from,self__.__meta,self__.__extmap,self__.__hash));
});

clojure_turtle.core.Turtle.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7030__auto__){
var self__ = this;
var this__7030__auto____$1 = this;
return (8 + cljs.core.count.call(null,self__.__extmap));
});

clojure_turtle.core.Turtle.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7021__auto__){
var self__ = this;
var this__7021__auto____$1 = this;
var h__6839__auto__ = self__.__hash;
if(!((h__6839__auto__ == null))){
return h__6839__auto__;
} else {
var h__6839__auto____$1 = cljs.core.hash_imap.call(null,this__7021__auto____$1);
self__.__hash = h__6839__auto____$1;

return h__6839__auto____$1;
}
});

clojure_turtle.core.Turtle.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7022__auto__,other__7023__auto__){
var self__ = this;
var this__7022__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6392__auto__ = other__7023__auto__;
if(cljs.core.truth_(and__6392__auto__)){
var and__6392__auto____$1 = (this__7022__auto____$1.constructor === other__7023__auto__.constructor);
if(and__6392__auto____$1){
return cljs.core.equiv_map.call(null,this__7022__auto____$1,other__7023__auto__);
} else {
return and__6392__auto____$1;
}
} else {
return and__6392__auto__;
}
})())){
return true;
} else {
return false;
}
});

clojure_turtle.core.Turtle.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7035__auto__,k__7036__auto__){
var self__ = this;
var this__7035__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"color","color",1011675173),null,new cljs.core.Keyword(null,"start-from","start-from",1934364841),null,new cljs.core.Keyword(null,"fill","fill",883462889),null,new cljs.core.Keyword(null,"angle","angle",1622094254),null,new cljs.core.Keyword(null,"commands","commands",161008658),null,new cljs.core.Keyword(null,"pen","pen",2006675445),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__7036__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__7035__auto____$1),self__.__meta),k__7036__auto__);
} else {
return (new clojure_turtle.core.Turtle(self__.x,self__.y,self__.angle,self__.pen,self__.color,self__.fill,self__.commands,self__.start_from,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__7036__auto__)),null));
}
});

clojure_turtle.core.Turtle.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7033__auto__,k__7034__auto__,G__12107){
var self__ = this;
var this__7033__auto____$1 = this;
var pred__12111 = cljs.core.keyword_identical_QMARK_;
var expr__12112 = k__7034__auto__;
if(cljs.core.truth_(pred__12111.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__12112))){
return (new clojure_turtle.core.Turtle(G__12107,self__.y,self__.angle,self__.pen,self__.color,self__.fill,self__.commands,self__.start_from,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__12111.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__12112))){
return (new clojure_turtle.core.Turtle(self__.x,G__12107,self__.angle,self__.pen,self__.color,self__.fill,self__.commands,self__.start_from,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__12111.call(null,new cljs.core.Keyword(null,"angle","angle",1622094254),expr__12112))){
return (new clojure_turtle.core.Turtle(self__.x,self__.y,G__12107,self__.pen,self__.color,self__.fill,self__.commands,self__.start_from,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__12111.call(null,new cljs.core.Keyword(null,"pen","pen",2006675445),expr__12112))){
return (new clojure_turtle.core.Turtle(self__.x,self__.y,self__.angle,G__12107,self__.color,self__.fill,self__.commands,self__.start_from,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__12111.call(null,new cljs.core.Keyword(null,"color","color",1011675173),expr__12112))){
return (new clojure_turtle.core.Turtle(self__.x,self__.y,self__.angle,self__.pen,G__12107,self__.fill,self__.commands,self__.start_from,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__12111.call(null,new cljs.core.Keyword(null,"fill","fill",883462889),expr__12112))){
return (new clojure_turtle.core.Turtle(self__.x,self__.y,self__.angle,self__.pen,self__.color,G__12107,self__.commands,self__.start_from,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__12111.call(null,new cljs.core.Keyword(null,"commands","commands",161008658),expr__12112))){
return (new clojure_turtle.core.Turtle(self__.x,self__.y,self__.angle,self__.pen,self__.color,self__.fill,G__12107,self__.start_from,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__12111.call(null,new cljs.core.Keyword(null,"start-from","start-from",1934364841),expr__12112))){
return (new clojure_turtle.core.Turtle(self__.x,self__.y,self__.angle,self__.pen,self__.color,self__.fill,self__.commands,G__12107,self__.__meta,self__.__extmap,null));
} else {
return (new clojure_turtle.core.Turtle(self__.x,self__.y,self__.angle,self__.pen,self__.color,self__.fill,self__.commands,self__.start_from,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__7034__auto__,G__12107),null));
}
}
}
}
}
}
}
}
});

clojure_turtle.core.Turtle.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7038__auto__){
var self__ = this;
var this__7038__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"angle","angle",1622094254),self__.angle],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pen","pen",2006675445),self__.pen],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"color","color",1011675173),self__.color],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fill","fill",883462889),self__.fill],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"commands","commands",161008658),self__.commands],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-from","start-from",1934364841),self__.start_from],null))], null),self__.__extmap));
});

clojure_turtle.core.Turtle.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7025__auto__,G__12107){
var self__ = this;
var this__7025__auto____$1 = this;
return (new clojure_turtle.core.Turtle(self__.x,self__.y,self__.angle,self__.pen,self__.color,self__.fill,self__.commands,self__.start_from,G__12107,self__.__extmap,self__.__hash));
});

clojure_turtle.core.Turtle.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7031__auto__,entry__7032__auto__){
var self__ = this;
var this__7031__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__7032__auto__)){
return cljs.core._assoc.call(null,this__7031__auto____$1,cljs.core._nth.call(null,entry__7032__auto__,(0)),cljs.core._nth.call(null,entry__7032__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__7031__auto____$1,entry__7032__auto__);
}
});

clojure_turtle.core.Turtle.getBasis = (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.Symbol(null,"angle","angle",-1032341515,null),new cljs.core.Symbol(null,"pen","pen",-647760324,null),new cljs.core.Symbol(null,"color","color",-1642760596,null),new cljs.core.Symbol(null,"fill","fill",-1770972880,null),new cljs.core.Symbol(null,"commands","commands",1801540185,null),new cljs.core.Symbol(null,"start-from","start-from",-720070928,null)], null);
});

clojure_turtle.core.Turtle.cljs$lang$type = true;

clojure_turtle.core.Turtle.cljs$lang$ctorPrSeq = (function (this__7060__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"clojure-turtle.core/Turtle");
});

clojure_turtle.core.Turtle.cljs$lang$ctorPrWriter = (function (this__7060__auto__,writer__7061__auto__){
return cljs.core._write.call(null,writer__7061__auto__,"clojure-turtle.core/Turtle");
});

clojure_turtle.core.__GT_Turtle = (function clojure_turtle$core$__GT_Turtle(x,y,angle,pen,color,fill,commands,start_from){
return (new clojure_turtle.core.Turtle(x,y,angle,pen,color,fill,commands,start_from,null,null,null));
});

clojure_turtle.core.map__GT_Turtle = (function clojure_turtle$core$map__GT_Turtle(G__12109){
return (new clojure_turtle.core.Turtle(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__12109),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__12109),new cljs.core.Keyword(null,"angle","angle",1622094254).cljs$core$IFn$_invoke$arity$1(G__12109),new cljs.core.Keyword(null,"pen","pen",2006675445).cljs$core$IFn$_invoke$arity$1(G__12109),new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(G__12109),new cljs.core.Keyword(null,"fill","fill",883462889).cljs$core$IFn$_invoke$arity$1(G__12109),new cljs.core.Keyword(null,"commands","commands",161008658).cljs$core$IFn$_invoke$arity$1(G__12109),new cljs.core.Keyword(null,"start-from","start-from",1934364841).cljs$core$IFn$_invoke$arity$1(G__12109),null,cljs.core.dissoc.call(null,G__12109,new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"angle","angle",1622094254),new cljs.core.Keyword(null,"pen","pen",2006675445),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"commands","commands",161008658),new cljs.core.Keyword(null,"start-from","start-from",1934364841)),null));
});

/**
 * This method determines what gets returned when passing a Turtle record instance to pr-str, which in turn affects what gets printed at the REPL
 */
clojure_turtle.core.pr_str_turtle = (function clojure_turtle$core$pr_str_turtle(turt){
return cljs.core.pr_str.call(null,cljs.core.select_keys.call(null,turt,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"angle","angle",1622094254),new cljs.core.Keyword(null,"pen","pen",2006675445),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"fill","fill",883462889)], null)));
});
clojure_turtle.core.Turtle.prototype.cljs$core$IPrintWithWriter$ = true;

clojure_turtle.core.Turtle.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (turt,writer,_){
var turt__$1 = this;
return cljs.core._write.call(null,writer,clojure_turtle.core.pr_str_turtle.call(null,turt__$1));
});
/**
 * Returns an entity that represents a turtle.
 */
clojure_turtle.core.new_turtle = (function clojure_turtle$core$new_turtle(){
return cljs.core.atom.call(null,clojure_turtle.core.map__GT_Turtle.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"angle","angle",1622094254),(90),new cljs.core.Keyword(null,"pen","pen",2006675445),true,new cljs.core.Keyword(null,"color","color",1011675173),clojure_turtle.core.DEFAULT_COLOR,new cljs.core.Keyword(null,"fill","fill",883462889),false,new cljs.core.Keyword(null,"commands","commands",161008658),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"start-from","start-from",1934364841),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null)], null)));
});
/**
 * The default turtle entity used when no turtle is specified for an operation.
 */
clojure_turtle.core.turtle = clojure_turtle.core.new_turtle.call(null);
/**
 * A helper function used in the implementation of basic operations to abstract
 *   out the interface of applying a function to a turtle entity.
 */
clojure_turtle.core.alter_turtle = (function clojure_turtle$core$alter_turtle(turt_state,f){
cljs.core.swap_BANG_.call(null,turt_state,f);

return turt_state;
});
/**
 * Take a color vector, as passed to the `color` fn, and return a color vector
 *   in the form [red blue green alpha], where all RGB and alpha values are integers
 *   in the range 0-255 inclusive. In order to make the color vector represent full
 *   opacity, the alpha value will be 255.
 */
clojure_turtle.core.make_opaque = (function clojure_turtle$core$make_opaque(color_vec){
var rgb_vec = (function (){var G__12116 = cljs.core.count.call(null,color_vec);
switch (G__12116) {
case (1):
return cljs.core.repeat.call(null,(3),cljs.core.first.call(null,color_vec));

break;
case (3):
return color_vec;

break;
case (4):
return cljs.core.take.call(null,(3),color_vec);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(cljs.core.count.call(null,color_vec))].join('')));

}
})();
var rgba_vec = cljs.core.concat.call(null,rgb_vec,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255)], null));
return rgba_vec;
});
/**
 * Set the turtle's color using [red green blue].
 *   RGB values are in the range 0 to 255, inclusive.
 */
clojure_turtle.core.color = (function clojure_turtle$core$color(var_args){
var args12118 = [];
var len__7479__auto___12121 = arguments.length;
var i__7480__auto___12122 = (0);
while(true){
if((i__7480__auto___12122 < len__7479__auto___12121)){
args12118.push((arguments[i__7480__auto___12122]));

var G__12123 = (i__7480__auto___12122 + (1));
i__7480__auto___12122 = G__12123;
continue;
} else {
}
break;
}

var G__12120 = args12118.length;
switch (G__12120) {
case 1:
return clojure_turtle.core.color.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure_turtle.core.color.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12118.length)].join('')));

}
});

clojure_turtle.core.color.cljs$core$IFn$_invoke$arity$1 = (function (c){
return clojure_turtle.core.color.call(null,clojure_turtle.core.turtle,c);
});

clojure_turtle.core.color.cljs$core$IFn$_invoke$arity$2 = (function (turt_state,c){
var alter_fn = (function clojure_turtle$core$alter_fn(t){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,t,new cljs.core.Keyword(null,"color","color",1011675173),c),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"commands","commands",161008658)], null),cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"color","color",1011675173),c], null));
});
return clojure_turtle.core.alter_turtle.call(null,turt_state,alter_fn);
});

clojure_turtle.core.color.cljs$lang$maxFixedArity = 2;

/**
 * Rotate the turtle turt clockwise by ang degrees.
 */
clojure_turtle.core.right = (function clojure_turtle$core$right(var_args){
var args12125 = [];
var len__7479__auto___12138 = arguments.length;
var i__7480__auto___12139 = (0);
while(true){
if((i__7480__auto___12139 < len__7479__auto___12138)){
args12125.push((arguments[i__7480__auto___12139]));

var G__12140 = (i__7480__auto___12139 + (1));
i__7480__auto___12139 = G__12140;
continue;
} else {
}
break;
}

var G__12127 = args12125.length;
switch (G__12127) {
case 1:
return clojure_turtle.core.right.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure_turtle.core.right.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12125.length)].join('')));

}
});

clojure_turtle.core.right.cljs$core$IFn$_invoke$arity$1 = (function (ang){
return clojure_turtle.core.right.call(null,clojure_turtle.core.turtle,ang);
});

clojure_turtle.core.right.cljs$core$IFn$_invoke$arity$2 = (function (turt_state,ang){
var add_angle = (function clojure_turtle$core$add_angle(p__12133){
var map__12136 = p__12133;
var map__12136__$1 = ((((!((map__12136 == null)))?((((map__12136.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12136.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12136):map__12136);
var t = map__12136__$1;
var angle = cljs.core.get.call(null,map__12136__$1,new cljs.core.Keyword(null,"angle","angle",1622094254));
var new_angle = cljs.core.mod.call(null,(angle - ang),(360));
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,t,new cljs.core.Keyword(null,"angle","angle",1622094254),new_angle),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"commands","commands",161008658)], null),cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"setheading","setheading",1500207184),new_angle], null));
});
return clojure_turtle.core.alter_turtle.call(null,turt_state,add_angle);
});

clojure_turtle.core.right.cljs$lang$maxFixedArity = 2;

/**
 * Same as right, but turns the turtle counter-clockwise.
 */
clojure_turtle.core.left = (function clojure_turtle$core$left(var_args){
var args12142 = [];
var len__7479__auto___12145 = arguments.length;
var i__7480__auto___12146 = (0);
while(true){
if((i__7480__auto___12146 < len__7479__auto___12145)){
args12142.push((arguments[i__7480__auto___12146]));

var G__12147 = (i__7480__auto___12146 + (1));
i__7480__auto___12146 = G__12147;
continue;
} else {
}
break;
}

var G__12144 = args12142.length;
switch (G__12144) {
case 1:
return clojure_turtle.core.left.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure_turtle.core.left.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12142.length)].join('')));

}
});

clojure_turtle.core.left.cljs$core$IFn$_invoke$arity$1 = (function (ang){
return clojure_turtle.core.right.call(null,((-1) * ang));
});

clojure_turtle.core.left.cljs$core$IFn$_invoke$arity$2 = (function (turt_state,ang){
return clojure_turtle.core.right.call(null,turt_state,((-1) * ang));
});

clojure_turtle.core.left.cljs$lang$maxFixedArity = 2;

clojure_turtle.core.deg__GT_radians = quil.core.radians;
clojure_turtle.core.radians__GT_deg = quil.core.degrees;
clojure_turtle.core.atan = quil.core.atan;
/**
 * Move the turtle turt forward in the direction that it is facing by length len.
 */
clojure_turtle.core.forward = (function clojure_turtle$core$forward(var_args){
var args12149 = [];
var len__7479__auto___12152 = arguments.length;
var i__7480__auto___12153 = (0);
while(true){
if((i__7480__auto___12153 < len__7479__auto___12152)){
args12149.push((arguments[i__7480__auto___12153]));

var G__12154 = (i__7480__auto___12153 + (1));
i__7480__auto___12153 = G__12154;
continue;
} else {
}
break;
}

var G__12151 = args12149.length;
switch (G__12151) {
case 1:
return clojure_turtle.core.forward.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure_turtle.core.forward.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12149.length)].join('')));

}
});

clojure_turtle.core.forward.cljs$core$IFn$_invoke$arity$1 = (function (len){
return clojure_turtle.core.forward.call(null,clojure_turtle.core.turtle,len);
});

clojure_turtle.core.forward.cljs$core$IFn$_invoke$arity$2 = (function (turt_state,len){
var rads = clojure_turtle.core.deg__GT_radians.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,turt_state),new cljs.core.Keyword(null,"angle","angle",1622094254)));
var dx = (len * Math.cos(rads));
var dy = (len * Math.sin(rads));
var alter_fn = ((function (rads,dx,dy){
return (function (t){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,t,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185)], null),cljs.core._PLUS_,dx),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"y","y",-1757859776)], null),cljs.core._PLUS_,dy),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"commands","commands",161008658)], null),cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"translate","translate",1336199447),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dx,dy], null)], null));
});})(rads,dx,dy))
;
return clojure_turtle.core.alter_turtle.call(null,turt_state,alter_fn);
});

clojure_turtle.core.forward.cljs$lang$maxFixedArity = 2;

/**
 * Same as forward, but move the turtle backwards, which is opposite of the direction it is facing.
 */
clojure_turtle.core.back = (function clojure_turtle$core$back(var_args){
var args12156 = [];
var len__7479__auto___12159 = arguments.length;
var i__7480__auto___12160 = (0);
while(true){
if((i__7480__auto___12160 < len__7479__auto___12159)){
args12156.push((arguments[i__7480__auto___12160]));

var G__12161 = (i__7480__auto___12160 + (1));
i__7480__auto___12160 = G__12161;
continue;
} else {
}
break;
}

var G__12158 = args12156.length;
switch (G__12158) {
case 1:
return clojure_turtle.core.back.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure_turtle.core.back.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12156.length)].join('')));

}
});

clojure_turtle.core.back.cljs$core$IFn$_invoke$arity$1 = (function (len){
return clojure_turtle.core.forward.call(null,((-1) * len));
});

clojure_turtle.core.back.cljs$core$IFn$_invoke$arity$2 = (function (turt_state,len){
return clojure_turtle.core.forward.call(null,turt_state,((-1) * len));
});

clojure_turtle.core.back.cljs$lang$maxFixedArity = 2;

/**
 * Instruct the turtle to pick its pen up. Subsequent movements will not draw to screen until the pen is put down again.
 */
clojure_turtle.core.penup = (function clojure_turtle$core$penup(var_args){
var args12163 = [];
var len__7479__auto___12166 = arguments.length;
var i__7480__auto___12167 = (0);
while(true){
if((i__7480__auto___12167 < len__7479__auto___12166)){
args12163.push((arguments[i__7480__auto___12167]));

var G__12168 = (i__7480__auto___12167 + (1));
i__7480__auto___12167 = G__12168;
continue;
} else {
}
break;
}

var G__12165 = args12163.length;
switch (G__12165) {
case 0:
return clojure_turtle.core.penup.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return clojure_turtle.core.penup.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12163.length)].join('')));

}
});

clojure_turtle.core.penup.cljs$core$IFn$_invoke$arity$0 = (function (){
return clojure_turtle.core.penup.call(null,clojure_turtle.core.turtle);
});

clojure_turtle.core.penup.cljs$core$IFn$_invoke$arity$1 = (function (turt_state){
var alter_fn = (function clojure_turtle$core$alter_fn(t){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,t,new cljs.core.Keyword(null,"pen","pen",2006675445),false),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"commands","commands",161008658)], null),cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pen","pen",2006675445),false], null));
});
return clojure_turtle.core.alter_turtle.call(null,turt_state,alter_fn);
});

clojure_turtle.core.penup.cljs$lang$maxFixedArity = 1;

/**
 * Instruct the turtle to put its pen down. Subsequent movements will draw to screen.
 */
clojure_turtle.core.pendown = (function clojure_turtle$core$pendown(var_args){
var args12170 = [];
var len__7479__auto___12173 = arguments.length;
var i__7480__auto___12174 = (0);
while(true){
if((i__7480__auto___12174 < len__7479__auto___12173)){
args12170.push((arguments[i__7480__auto___12174]));

var G__12175 = (i__7480__auto___12174 + (1));
i__7480__auto___12174 = G__12175;
continue;
} else {
}
break;
}

var G__12172 = args12170.length;
switch (G__12172) {
case 0:
return clojure_turtle.core.pendown.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return clojure_turtle.core.pendown.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12170.length)].join('')));

}
});

clojure_turtle.core.pendown.cljs$core$IFn$_invoke$arity$0 = (function (){
return clojure_turtle.core.pendown.call(null,clojure_turtle.core.turtle);
});

clojure_turtle.core.pendown.cljs$core$IFn$_invoke$arity$1 = (function (turt_state){
var alter_fn = (function clojure_turtle$core$alter_fn(t){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,t,new cljs.core.Keyword(null,"pen","pen",2006675445),true),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"commands","commands",161008658)], null),cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pen","pen",2006675445),true], null));
});
return clojure_turtle.core.alter_turtle.call(null,turt_state,alter_fn);
});

clojure_turtle.core.pendown.cljs$lang$maxFixedArity = 1;

/**
 * Make the turtle fill the area created by his subsequent moves, until end-fill is called.
 */
clojure_turtle.core.start_fill = (function clojure_turtle$core$start_fill(var_args){
var args12177 = [];
var len__7479__auto___12180 = arguments.length;
var i__7480__auto___12181 = (0);
while(true){
if((i__7480__auto___12181 < len__7479__auto___12180)){
args12177.push((arguments[i__7480__auto___12181]));

var G__12182 = (i__7480__auto___12181 + (1));
i__7480__auto___12181 = G__12182;
continue;
} else {
}
break;
}

var G__12179 = args12177.length;
switch (G__12179) {
case 0:
return clojure_turtle.core.start_fill.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return clojure_turtle.core.start_fill.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12177.length)].join('')));

}
});

clojure_turtle.core.start_fill.cljs$core$IFn$_invoke$arity$0 = (function (){
return clojure_turtle.core.start_fill.call(null,clojure_turtle.core.turtle);
});

clojure_turtle.core.start_fill.cljs$core$IFn$_invoke$arity$1 = (function (turt_state){
var alter_fn = (function clojure_turtle$core$alter_fn(t){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,t,new cljs.core.Keyword(null,"fill","fill",883462889),true),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"commands","commands",161008658)], null),cljs.core.conj,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"start-fill","start-fill",91524710)], null));
});
return clojure_turtle.core.alter_turtle.call(null,turt_state,alter_fn);
});

clojure_turtle.core.start_fill.cljs$lang$maxFixedArity = 1;

/**
 * Stop filling the area of turtle moves. Must be called start-fill.
 */
clojure_turtle.core.end_fill = (function clojure_turtle$core$end_fill(var_args){
var args12184 = [];
var len__7479__auto___12187 = arguments.length;
var i__7480__auto___12188 = (0);
while(true){
if((i__7480__auto___12188 < len__7479__auto___12187)){
args12184.push((arguments[i__7480__auto___12188]));

var G__12189 = (i__7480__auto___12188 + (1));
i__7480__auto___12188 = G__12189;
continue;
} else {
}
break;
}

var G__12186 = args12184.length;
switch (G__12186) {
case 0:
return clojure_turtle.core.end_fill.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return clojure_turtle.core.end_fill.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12184.length)].join('')));

}
});

clojure_turtle.core.end_fill.cljs$core$IFn$_invoke$arity$0 = (function (){
return clojure_turtle.core.end_fill.call(null,clojure_turtle.core.turtle);
});

clojure_turtle.core.end_fill.cljs$core$IFn$_invoke$arity$1 = (function (turt_state){
var alter_fn = (function clojure_turtle$core$alter_fn(t){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,t,new cljs.core.Keyword(null,"fill","fill",883462889),false),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"commands","commands",161008658)], null),cljs.core.conj,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"end-fill","end-fill",-1674316866)], null));
});
return clojure_turtle.core.alter_turtle.call(null,turt_state,alter_fn);
});

clojure_turtle.core.end_fill.cljs$lang$maxFixedArity = 1;

/**
 * Sleeps for ms miliseconds. Can be used in a repeat to show commands execute in real time
 */
clojure_turtle.core.wait = (function clojure_turtle$core$wait(ms){
var get_time = (function clojure_turtle$core$wait_$_get_time(){
return (new Date()).getTime();
});
var initial_time = get_time.call(null);
while(true){
if((get_time.call(null) < (initial_time + ms))){
continue;
} else {
return null;
}
break;
}
});
/**
 * Clear the lines state, which effectively clears the drawing canvas.
 */
clojure_turtle.core.clean = (function clojure_turtle$core$clean(var_args){
var args12192 = [];
var len__7479__auto___12195 = arguments.length;
var i__7480__auto___12196 = (0);
while(true){
if((i__7480__auto___12196 < len__7479__auto___12195)){
args12192.push((arguments[i__7480__auto___12196]));

var G__12197 = (i__7480__auto___12196 + (1));
i__7480__auto___12196 = G__12197;
continue;
} else {
}
break;
}

var G__12194 = args12192.length;
switch (G__12194) {
case 0:
return clojure_turtle.core.clean.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return clojure_turtle.core.clean.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12192.length)].join('')));

}
});

clojure_turtle.core.clean.cljs$core$IFn$_invoke$arity$0 = (function (){
return clojure_turtle.core.clean.call(null,clojure_turtle.core.turtle);
});

clojure_turtle.core.clean.cljs$core$IFn$_invoke$arity$1 = (function (turt_state){
var alter_fn = (function clojure_turtle$core$alter_fn(t){
var curr_pos_map = cljs.core.select_keys.call(null,t,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null));
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,t,new cljs.core.Keyword(null,"commands","commands",161008658),cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"start-from","start-from",1934364841),curr_pos_map);
});
return clojure_turtle.core.alter_turtle.call(null,turt_state,alter_fn);
});

clojure_turtle.core.clean.cljs$lang$maxFixedArity = 1;

/**
 * Set the position of turtle turt to x-coordinate x and y-coordinate y.
 */
clojure_turtle.core.setxy = (function clojure_turtle$core$setxy(var_args){
var args12199 = [];
var len__7479__auto___12202 = arguments.length;
var i__7480__auto___12203 = (0);
while(true){
if((i__7480__auto___12203 < len__7479__auto___12202)){
args12199.push((arguments[i__7480__auto___12203]));

var G__12204 = (i__7480__auto___12203 + (1));
i__7480__auto___12203 = G__12204;
continue;
} else {
}
break;
}

var G__12201 = args12199.length;
switch (G__12201) {
case 2:
return clojure_turtle.core.setxy.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure_turtle.core.setxy.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12199.length)].join('')));

}
});

clojure_turtle.core.setxy.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return clojure_turtle.core.setxy.call(null,clojure_turtle.core.turtle,x,y);
});

clojure_turtle.core.setxy.cljs$core$IFn$_invoke$arity$3 = (function (turt_state,x,y){
var pen_down_QMARK_ = cljs.core.get.call(null,cljs.core.deref.call(null,turt_state),new cljs.core.Keyword(null,"pen","pen",2006675445));
var alter_fn = ((function (pen_down_QMARK_){
return (function clojure_turtle$core$alter_fn(t){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,t,new cljs.core.Keyword(null,"x","x",2099068185),x),new cljs.core.Keyword(null,"y","y",-1757859776),y),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"commands","commands",161008658)], null),cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"setxy","setxy",-229566621),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null));
});})(pen_down_QMARK_))
;
return clojure_turtle.core.alter_turtle.call(null,turt_state,alter_fn);
});

clojure_turtle.core.setxy.cljs$lang$maxFixedArity = 3;

/**
 * Set the direction which the turtle is facing, given in degrees, where 0 is to the right,
 *   90 is up, 180 is left, and 270 is down.
 */
clojure_turtle.core.setheading = (function clojure_turtle$core$setheading(var_args){
var args12206 = [];
var len__7479__auto___12209 = arguments.length;
var i__7480__auto___12210 = (0);
while(true){
if((i__7480__auto___12210 < len__7479__auto___12209)){
args12206.push((arguments[i__7480__auto___12210]));

var G__12211 = (i__7480__auto___12210 + (1));
i__7480__auto___12210 = G__12211;
continue;
} else {
}
break;
}

var G__12208 = args12206.length;
switch (G__12208) {
case 1:
return clojure_turtle.core.setheading.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure_turtle.core.setheading.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12206.length)].join('')));

}
});

clojure_turtle.core.setheading.cljs$core$IFn$_invoke$arity$1 = (function (ang){
return clojure_turtle.core.setheading.call(null,clojure_turtle.core.turtle,ang);
});

clojure_turtle.core.setheading.cljs$core$IFn$_invoke$arity$2 = (function (turt_state,ang){
var alter_fn = (function clojure_turtle$core$alter_fn(t){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,t,new cljs.core.Keyword(null,"angle","angle",1622094254),ang),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"commands","commands",161008658)], null),cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"setheading","setheading",1500207184),ang], null));
});
return clojure_turtle.core.alter_turtle.call(null,turt_state,alter_fn);
});

clojure_turtle.core.setheading.cljs$lang$maxFixedArity = 2;

/**
 * Set the turtle at coordinates (0,0), facing up (heading = 90 degrees)
 */
clojure_turtle.core.home = (function clojure_turtle$core$home(var_args){
var args12213 = [];
var len__7479__auto___12216 = arguments.length;
var i__7480__auto___12217 = (0);
while(true){
if((i__7480__auto___12217 < len__7479__auto___12216)){
args12213.push((arguments[i__7480__auto___12217]));

var G__12218 = (i__7480__auto___12217 + (1));
i__7480__auto___12217 = G__12218;
continue;
} else {
}
break;
}

var G__12215 = args12213.length;
switch (G__12215) {
case 0:
return clojure_turtle.core.home.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return clojure_turtle.core.home.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12213.length)].join('')));

}
});

clojure_turtle.core.home.cljs$core$IFn$_invoke$arity$0 = (function (){
return clojure_turtle.core.home.call(null,clojure_turtle.core.turtle);
});

clojure_turtle.core.home.cljs$core$IFn$_invoke$arity$1 = (function (turt_state){
clojure_turtle.core.setxy.call(null,turt_state,(0),(0));

return clojure_turtle.core.setheading.call(null,turt_state,(90));
});

clojure_turtle.core.home.cljs$lang$maxFixedArity = 1;

/**
 * A helper function for the Quil rendering function.
 */
clojure_turtle.core.reset_rendering = (function clojure_turtle$core$reset_rendering(){
quil.core.background.call(null,(200));

return quil.core.stroke_weight.call(null,(1));
});
/**
 * A helper function for the Quil rendering function.
 */
clojure_turtle.core.setup = (function clojure_turtle$core$setup(){
quil.core.smooth.call(null);

setTimeout((function (){
return quil.sketch._STAR_applet_STAR_ = quil.core.get_sketch_by_id.call(null,"turtle-canvas");
}),(5));

return clojure_turtle.core.reset_rendering.call(null);
});
/**
 * A helper function that draws the triangle that represents the turtle onto the screen.
 */
clojure_turtle.core.get_turtle_sprite = (function clojure_turtle$core$get_turtle_sprite(var_args){
var args12220 = [];
var len__7479__auto___12223 = arguments.length;
var i__7480__auto___12224 = (0);
while(true){
if((i__7480__auto___12224 < len__7479__auto___12223)){
args12220.push((arguments[i__7480__auto___12224]));

var G__12225 = (i__7480__auto___12224 + (1));
i__7480__auto___12224 = G__12225;
continue;
} else {
}
break;
}

var G__12222 = args12220.length;
switch (G__12222) {
case 0:
return clojure_turtle.core.get_turtle_sprite.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return clojure_turtle.core.get_turtle_sprite.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12220.length)].join('')));

}
});

clojure_turtle.core.get_turtle_sprite.cljs$core$IFn$_invoke$arity$0 = (function (){
return clojure_turtle.core.get_turtle_sprite.call(null,clojure_turtle.core.turtle);
});

clojure_turtle.core.get_turtle_sprite.cljs$core$IFn$_invoke$arity$1 = (function (turt){
var short_leg = (5);
var long_leg = (12);
var hypoteneuse = Math.sqrt(((short_leg * short_leg) + (long_leg * long_leg)));
var large_angle = clojure_turtle.core.radians__GT_deg.call(null,clojure_turtle.core.atan.call(null,(long_leg / short_leg)));
var small_angle = ((90) - large_angle);
var turt_copy_state = clojure_turtle.core.clean.call(null,clojure_turtle.core.pendown.call(null,cljs.core.atom.call(null,turt)));
var current_color = new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(turt);
var opaque_color = clojure_turtle.core.make_opaque.call(null,current_color);
clojure_turtle.core.left.call(null,clojure_turtle.core.forward.call(null,clojure_turtle.core.left.call(null,clojure_turtle.core.forward.call(null,clojure_turtle.core.left.call(null,clojure_turtle.core.forward.call(null,clojure_turtle.core.left.call(null,clojure_turtle.core.forward.call(null,clojure_turtle.core.right.call(null,clojure_turtle.core.color.call(null,clojure_turtle.core.setxy.call(null,turt_copy_state,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(turt),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(turt)),opaque_color),(90)),short_leg),((180) - large_angle)),hypoteneuse),((180) - ((2) * small_angle))),hypoteneuse),((180) - large_angle)),short_leg),(90));

return turt_copy_state;
});

clojure_turtle.core.get_turtle_sprite.cljs$lang$maxFixedArity = 1;

/**
 * Takes a seq of turtle commands and converts them into Quil commands to draw
 *   onto the canvas
 */
clojure_turtle.core.draw_turtle_commands = (function clojure_turtle$core$draw_turtle_commands(turt){
var new_turtle = cljs.core.deref.call(null,clojure_turtle.core.new_turtle.call(null));
var start_from_pos = cljs.core.get.call(null,turt,new cljs.core.Keyword(null,"start-from","start-from",1934364841));
var new_turtle_with_start = cljs.core.assoc.call(null,cljs.core.assoc.call(null,new_turtle,new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(start_from_pos)),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(start_from_pos));
var t = new_turtle_with_start;
var commands = new cljs.core.Keyword(null,"commands","commands",161008658).cljs$core$IFn$_invoke$arity$1(turt);
while(true){
if(cljs.core.empty_QMARK_.call(null,commands)){
return t;
} else {
var next_cmd = cljs.core.first.call(null,commands);
var cmd_name = cljs.core.first.call(null,next_cmd);
var cmd_vals = cljs.core.rest.call(null,next_cmd);
var rest_cmds = cljs.core.rest.call(null,commands);
var G__12234 = (((cmd_name instanceof cljs.core.Keyword))?cmd_name.fqn:null);
switch (G__12234) {
case "color":
var c = cljs.core.first.call(null,cmd_vals);
cljs.core.apply.call(null,quil.core.stroke,c);

cljs.core.apply.call(null,quil.core.fill,c);

var G__12242 = cljs.core.assoc.call(null,t,new cljs.core.Keyword(null,"color","color",1011675173),c);
var G__12243 = rest_cmds;
t = G__12242;
commands = G__12243;
continue;

break;
case "setxy":
var vec__12235 = cljs.core.first.call(null,cmd_vals);
var x = cljs.core.nth.call(null,vec__12235,(0),null);
var y = cljs.core.nth.call(null,vec__12235,(1),null);
var G__12244 = cljs.core.assoc.call(null,t,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y);
var G__12245 = rest_cmds;
t = G__12244;
commands = G__12245;
continue;

break;
case "setheading":
var G__12246 = cljs.core.assoc.call(null,t,new cljs.core.Keyword(null,"angle","angle",1622094254),cljs.core.first.call(null,cmd_vals));
var G__12247 = rest_cmds;
t = G__12246;
commands = G__12247;
continue;

break;
case "translate":
var x = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(t);
var y = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(t);
var vec__12238 = cljs.core.first.call(null,cmd_vals);
var dx = cljs.core.nth.call(null,vec__12238,(0),null);
var dy = cljs.core.nth.call(null,vec__12238,(1),null);
var new_x = (x + dx);
var new_y = (y + dy);
if(cljs.core.truth_(new cljs.core.Keyword(null,"pen","pen",2006675445).cljs$core$IFn$_invoke$arity$1(t))){
quil.core.line.call(null,x,y,new_x,new_y);

if(cljs.core.truth_(new cljs.core.Keyword(null,"fill","fill",883462889).cljs$core$IFn$_invoke$arity$1(t))){
quil.core.vertex.call(null,x,y);

quil.core.vertex.call(null,new_x,new_y);
} else {
}
} else {
}

var G__12248 = cljs.core.assoc.call(null,t,new cljs.core.Keyword(null,"x","x",2099068185),new_x,new cljs.core.Keyword(null,"y","y",-1757859776),new_y);
var G__12249 = rest_cmds;
t = G__12248;
commands = G__12249;
continue;

break;
case "pen":
var G__12250 = cljs.core.assoc.call(null,t,new cljs.core.Keyword(null,"pen","pen",2006675445),cljs.core.first.call(null,cmd_vals));
var G__12251 = rest_cmds;
t = G__12250;
commands = G__12251;
continue;

break;
case "start-fill":
if(cljs.core.truth_(new cljs.core.Keyword(null,"fill","fill",883462889).cljs$core$IFn$_invoke$arity$1(t))){
} else {
quil.core.begin_shape.call(null);
}

var G__12252 = cljs.core.assoc.call(null,t,new cljs.core.Keyword(null,"fill","fill",883462889),true);
var G__12253 = rest_cmds;
t = G__12252;
commands = G__12253;
continue;

break;
case "end-fill":
if(cljs.core.truth_(new cljs.core.Keyword(null,"fill","fill",883462889).cljs$core$IFn$_invoke$arity$1(t))){
quil.core.end_shape.call(null);
} else {
}

var G__12254 = cljs.core.assoc.call(null,t,new cljs.core.Keyword(null,"fill","fill",883462889),false);
var G__12255 = rest_cmds;
t = G__12254;
commands = G__12255;
continue;

break;
default:
return t;

}
}
break;
}
});
/**
 * The function passed to Quil for doing rendering.
 */
clojure_turtle.core.draw_turtle = (function clojure_turtle$core$draw_turtle(turt_state){
quil.core.push_matrix.call(null);

quil.core.translate.call(null,(quil.core.width.call(null) / (2)),(quil.core.height.call(null) / (2)));

clojure_turtle.core.reset_rendering.call(null);

quil.core.push_matrix.call(null);

quil.core.scale.call(null,1.0,-1.0);

cljs.core.apply.call(null,quil.core.stroke,clojure_turtle.core.DEFAULT_COLOR);

cljs.core.apply.call(null,quil.core.fill,clojure_turtle.core.DEFAULT_COLOR);

clojure_turtle.core.draw_turtle_commands.call(null,cljs.core.deref.call(null,turt_state));

var sprite_12256 = clojure_turtle.core.get_turtle_sprite.call(null,cljs.core.deref.call(null,turt_state));
clojure_turtle.core.draw_turtle_commands.call(null,cljs.core.deref.call(null,sprite_12256));

quil.core.pop_matrix.call(null);

return quil.core.pop_matrix.call(null);
});
/**
 * The function passed to Quil for doing rendering.
 */
clojure_turtle.core.draw = (function clojure_turtle$core$draw(){
return clojure_turtle.core.draw_turtle.call(null,clojure_turtle.core.turtle);
});
/**
 * Executes `then` clause iff generating ClojureScript code. Stolen from Prismatic code.
 *   Ref. http://goo.gl/DhhhSN, http://goo.gl/Bhdyna.
 */
clojure_turtle.core.if_cljs = (function clojure_turtle$core$if_cljs(_AMPERSAND_form,_AMPERSAND_env,then,else$){
if(cljs.core.truth_(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env))){
return then;
} else {
return else$;
}
});

clojure_turtle.core.if_cljs.cljs$lang$macro = true;
/**
 * Opens up a new window that shows the turtle rendering canvas.  In CLJS it will render
 *   to a new HTML5 canvas object. An optional config map can be provided, where the key
 *   :title indicates the window title (clj), the :size key indicates a vector of 2 values
 *   indicating the width and height of the window.
 */
clojure_turtle.core.new_window = (function clojure_turtle$core$new_window(var_args){
var args__7486__auto__ = [];
var len__7479__auto___12272 = arguments.length;
var i__7480__auto___12273 = (0);
while(true){
if((i__7480__auto___12273 < len__7479__auto___12272)){
args__7486__auto__.push((arguments[i__7480__auto___12273]));

var G__12274 = (i__7480__auto___12273 + (1));
i__7480__auto___12273 = G__12274;
continue;
} else {
}
break;
}

var argseq__7487__auto__ = ((((2) < args__7486__auto__.length))?(new cljs.core.IndexedSeq(args__7486__auto__.slice((2)),(0),null)):null);
return clojure_turtle.core.new_window.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7487__auto__);
});

clojure_turtle.core.new_window.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__12260){
var vec__12261 = p__12260;
var config = cljs.core.nth.call(null,vec__12261,(0),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("clojure-turtle.core","if-cljs","clojure-turtle.core/if-cljs",1147190338,null)),(function (){var x__7238__auto__ = (function (){var default_config = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(323),(200)], null)], null);
var map__12266 = cljs.core.merge.call(null,default_config,config);
var map__12266__$1 = ((((!((map__12266 == null)))?((((map__12266.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12266.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12266):map__12266);
var host = cljs.core.get.call(null,map__12266__$1,new cljs.core.Keyword(null,"host","host",-1558485167));
var size = cljs.core.get.call(null,map__12266__$1,new cljs.core.Keyword(null,"size","size",1098693007));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__7238__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("quil.sketch","add-canvas","quil.sketch/add-canvas",-44468094,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"turtle-canvas"))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7238__auto__);
})(),(function (){var x__7238__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("quil.core","defsketch","quil.core/defsketch",137571269,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"example","example",-115247617,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"host","host",-1558485167)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"turtle-canvas"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"setup","setup",1987730512)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("clojure-turtle.core","setup","clojure-turtle.core/setup",-224051665,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"draw","draw",1358331674)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("clojure-turtle.core","draw","clojure-turtle.core/draw",1759977673,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"size","size",1098693007)),(function (){var x__7238__auto__ = size;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7238__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7238__auto__);
})())));
})();
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7238__auto__);
})(),(function (){var x__7238__auto__ = (function (){var default_config = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Watch the turtle go!",new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(323),(200)], null)], null);
var map__12270 = cljs.core.merge.call(null,default_config,config);
var map__12270__$1 = ((((!((map__12270 == null)))?((((map__12270.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12270.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12270):map__12270);
var title = cljs.core.get.call(null,map__12270__$1,new cljs.core.Keyword(null,"title","title",636505583));
var size = cljs.core.get.call(null,map__12270__$1,new cljs.core.Keyword(null,"size","size",1098693007));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("quil.core","defsketch","quil.core/defsketch",137571269,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"example","example",-115247617,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"title","title",636505583)),(function (){var x__7238__auto__ = title;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7238__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"setup","setup",1987730512)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("clojure-turtle.core","setup","clojure-turtle.core/setup",-224051665,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"draw","draw",1358331674)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("clojure-turtle.core","draw","clojure-turtle.core/draw",1759977673,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"size","size",1098693007)),(function (){var x__7238__auto__ = size;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7238__auto__);
})())));
})();
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7238__auto__);
})())));
});

clojure_turtle.core.new_window.cljs$lang$maxFixedArity = (2);

clojure_turtle.core.new_window.cljs$lang$applyTo = (function (seq12257){
var G__12258 = cljs.core.first.call(null,seq12257);
var seq12257__$1 = cljs.core.next.call(null,seq12257);
var G__12259 = cljs.core.first.call(null,seq12257__$1);
var seq12257__$2 = cljs.core.next.call(null,seq12257__$1);
return clojure_turtle.core.new_window.cljs$core$IFn$_invoke$arity$variadic(G__12258,G__12259,seq12257__$2);
});


clojure_turtle.core.new_window.cljs$lang$macro = true;
