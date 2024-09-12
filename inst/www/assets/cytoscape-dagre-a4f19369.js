import{c as A,g as U}from"./core-js-bbf708ea.js";import{r as q}from"./dagre-9b2543cb.js";var N={exports:{}};(function(W,H){(function(u,c){W.exports=c(q())})(A,function(P){return function(u){var c={};function e(n){if(c[n])return c[n].exports;var t=c[n]={i:n,l:!1,exports:{}};return u[n].call(t.exports,t,t.exports,e),t.l=!0,t.exports}return e.m=u,e.c=c,e.d=function(n,t,a){e.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:a})},e.r=function(n){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,t){if(t&1&&(n=e(n)),t&8||t&4&&typeof n=="object"&&n&&n.__esModule)return n;var a=Object.create(null);if(e.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:n}),t&2&&typeof n!="string")for(var d in n)e.d(a,d,(function(x){return n[x]}).bind(null,d));return a},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},e.p="",e(e.s=0)}([function(u,c,e){var n=e(1),t=function(d){d&&d("layout","dagre",n)};typeof cytoscape<"u"&&t(cytoscape),u.exports=t},function(u,c,e){function n(r){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?n=function(p){return typeof p}:n=function(p){return p&&typeof Symbol=="function"&&p.constructor===Symbol&&p!==Symbol.prototype?"symbol":typeof p},n(r)}var t=function(m){return typeof m=="function"},a=e(2),d=e(3),x=e(4);function E(r){this.options=d({},a,r)}E.prototype.run=function(){var r=this.options,m=this,p=r.cy,B=r.eles,F=function(f,g){return t(g)?g.apply(f,[f]):g},i=r.boundingBox||{x1:0,y1:0,w:p.width(),h:p.height()};i.x2===void 0&&(i.x2=i.x1+i.w),i.w===void 0&&(i.w=i.x2-i.x1),i.y2===void 0&&(i.y2=i.y1+i.h),i.h===void 0&&(i.h=i.y2-i.y1);var y=new x.graphlib.Graph({multigraph:!0,compound:!0}),L={},h=function(f,g){g!=null&&(L[f]=g)};h("nodesep",r.nodeSep),h("edgesep",r.edgeSep),h("ranksep",r.rankSep),h("rankdir",r.rankDir),h("align",r.align),h("ranker",r.ranker),h("acyclicer",r.acyclicer),y.setGraph(L),y.setDefaultEdgeLabel(function(){return{}}),y.setDefaultNodeLabel(function(){return{}});var l=B.nodes();t(r.sort)&&(l=l.sort(r.sort));for(var S=0;S<l.length;S++){var w=l[S],k=w.layoutDimensions(r);y.setNode(w.id(),{width:k.w,height:k.h,name:w.id()})}for(var j=0;j<l.length;j++){var D=l[j];D.isChild()&&y.setParent(D.id(),D.parent().id())}var v=B.edges().stdFilter(function(s){return!s.source().isParent()&&!s.target().isParent()});t(r.sort)&&(v=v.sort(r.sort));for(var O=0;O<v.length;O++){var b=v[O];y.setEdge(b.source().id(),b.target().id(),{minlen:F(b,r.minLen),weight:F(b,r.edgeWeight),name:b.id()},b.id())}x.layout(y);for(var G=y.nodes(),M=0;M<G.length;M++){var I=G[M],C=y.node(I);p.getElementById(I).scratch().dagre=C}var o;r.boundingBox?(o={x1:1/0,x2:-1/0,y1:1/0,y2:-1/0},l.forEach(function(s){var f=s.scratch().dagre;o.x1=Math.min(o.x1,f.x),o.x2=Math.max(o.x2,f.x),o.y1=Math.min(o.y1,f.y),o.y2=Math.max(o.y2,f.y)}),o.w=o.x2-o.x1,o.h=o.y2-o.y1):o=i;var T=function(f){if(r.boundingBox){var g=o.w===0?0:(f.x-o.x1)/o.w,V=o.h===0?0:(f.y-o.y1)/o.h;return{x:i.x1+g*i.w,y:i.y1+V*i.h}}else return f};return l.layoutPositions(m,r,function(s){s=n(s)==="object"?s:this;var f=s.scratch().dagre;return T({x:f.x,y:f.y})}),this},u.exports=E},function(u,c){var e={nodeSep:void 0,edgeSep:void 0,rankSep:void 0,rankDir:void 0,align:void 0,acyclicer:void 0,ranker:void 0,minLen:function(t){return 1},edgeWeight:function(t){return 1},fit:!0,padding:30,spacingFactor:void 0,nodeDimensionsIncludeLabels:!1,animate:!1,animateFilter:function(t,a){return!0},animationDuration:500,animationEasing:void 0,boundingBox:void 0,transform:function(t,a){return a},ready:function(){},sort:void 0,stop:function(){}};u.exports=e},function(u,c){u.exports=Object.assign!=null?Object.assign.bind(Object):function(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),a=1;a<n;a++)t[a-1]=arguments[a];return t.forEach(function(d){Object.keys(d).forEach(function(x){return e[x]=d[x]})}),e}},function(u,c){u.exports=P}])})})(N);var z=N.exports;const Q=U(z);export{Q as d};
