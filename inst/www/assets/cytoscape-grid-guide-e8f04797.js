import{g as xe}from"./core-js-93797867.js";import{r as ze}from"./functional-red-black-tree-9a31655a.js";var pe={exports:{}},se={},ue;function we(){return ue||(ue=1,Object.extend=function(v){v=v||{};for(var s=1;s<arguments.length;s++){var S=arguments[s];if(S)for(var m in S)S.hasOwnProperty(m)&&(Array.isArray(S[m])?v[m]=S[m].slice():typeof S[m]=="object"?v[m]=Object.extend(v[m],S[m]):v[m]=S[m])}return v}),se}var j,de;function Se(){return de||(de=1,j=function(v,s,S){var m={};m.changeOptions=function(c){s=c.gridSpacing,S=c.snapToGridCenter?.5:0};var t=function(c){return c.scratch("_gridGuide")||c.scratch("_gridGuide",{}),c.scratch("_gridGuide")};return m.snapPos=function(c){var u=S?Math.floor(c.x/s):Math.round(c.x/s),z=S?Math.floor(c.y/s):Math.round(c.y/s),g={x:(u+S)*s,y:(z+S)*s};return g},m.snapNode=function(c){var u=c.position(),z=m.snapPos(u);c.position(z)},m.snapNodesTopDown=function(c){v.startBatch(),c.union(c.descendants()).filter(":childless").positions(function(u,z){typeof u=="number"&&(u=z);var g=u.position();return m.snapPos(g)}),v.endBatch()},m.onFreeNode=function(c){var u,z=c.target||c.cyTarget;z.selected()?u=c.cy.$(":selected"):u=z,m.snapNodesTopDown(u)},m.recoverSnapNode=function(c){var u=t(c).snap;u&&c.position(u.oldPos)},m}),j}var ee,ce;function Te(){return ce||(ce=1,ee=function(v,s){var S={},m,t,c,u;S.onTapStartNode=function(h){if(!(h.originalEvent.altKey||h.originalEvent.ctrlKey||h.originalEvent.metaKey||h.originalEvent.shiftKey)){var a=h.target||h.cyTarget;a.selected()?t=h.cy.$(":selected"):t=a,c=h.position||h.cyPosition,a.grabbable()&&!a.locked()&&(m=a,m.lock(),v.on("tapdrag",f),v.on("tapend",z))}};var z=function(h){v.off("tapdrag",f),v.off("tapend",z),m.unlock(),h.preventDefault()},g=function(){return{x:u.x-c.x,y:u.y-c.y}},f=function(h){m.position(),u=h.position||h.cyPosition,u=s.snapPos(u);var a=g();if(a.x!=0||a.y!=0){m.unlock();var M=t.union(t.descendants());M.filter(":childless").positions(function(w,T){typeof w=="number"&&(w=T);var b=w.position();return s.snapPos({x:b.x+a.x,y:b.y+a.y})}),c=u,m.lock(),m.trigger("drag")}};return S}),ee}var te,ge;function be(){return ge||(ge=1,te=function(v,s,S){var m=v,t=function(w){m=w},c=function(w){var T=w.getBoundingClientRect();return{top:T.top+document.documentElement.scrollTop,left:T.left+document.documentElement.scrollLeft}},u=document.createElement("canvas"),z=s.container(),g=u.getContext("2d");z.appendChild(u);var f=function(){u.height=0,u.width=0,u.style.position="absolute",u.style.top=0,u.style.left=0,u.style.zIndex=m.gridStackOrder};f();var h=function(){var w=s.zoom(),T=s.width(),b=s.height(),C=m.gridSpacing*w,e=s.pan(),O=e.x%C,p=e.y%C;g.strokeStyle=m.gridColor,g.lineWidth=m.lineWidth;var W='	<svg width="'+T+'" height="'+b+`" xmlns="http://www.w3.org/2000/svg">
	            <defs>
	                <pattern id="horizontalLines" width="`+C+'" height="'+C+`" patternUnits="userSpaceOnUse">
	                    <path d="M `+C+' 0 L 0 0 0 0" fill="none" stroke="'+m.gridColor+'" stroke-width="'+m.lineWidth+`" />
	                </pattern>
	                <pattern id="verticalLines" width="`+C+'" height="'+C+`" patternUnits="userSpaceOnUse">
	                    <path d="M 0 0 L 0 0 0 `+C+'" fill="none" stroke="'+m.gridColor+'" stroke-width="'+m.lineWidth+`" />
	                </pattern>
	            </defs>
	            <rect width="100%" height="100%" fill="url(#horizontalLines)" transform="translate(0, `+p+`)" />
	            <rect width="100%" height="100%" fill="url(#verticalLines)" transform="translate(`+O+`, 0)" />
	        </svg>
`,k=new Image;W=encodeURIComponent(W),k.onload=function(){a(),g.drawImage(k,0,0)},k.src="data:image/svg+xml,"+W},a=function(){var w=s.width(),T=s.height();g.clearRect(0,0,w,T)},M=S(function(){u.height=s.height(),u.width=s.width(),u.style.position="absolute",u.style.top=0,u.style.left=0,u.style.zIndex=m.gridStackOrder,setTimeout(function(){u.height=s.height(),u.width=s.width();var w=c(u),T=c(z);u.style.top=-(w.top-T.top),u.style.left=-(w.left-T.left),h()},0)},250);return{initCanvas:M,resizeCanvas:M,resetCanvas:f,clearCanvas:a,drawGrid:h,changeOptions:t,sizeCanvas:h}}),te}var ie,ve;function Pe(){return ve||(ve=1,ie=function(v){var s=function(c){v=Number(c.gridSpacing)},S=function(c){return c.scratch("_gridGuide")||c.scratch("_gridGuide",{}),c.scratch("_gridGuide")};function m(c){var u=c.width(),z=c.height(),g=Math.round((u-v)/(v*2))*(v*2),f=Math.round((z-v)/(v*2))*(v*2);g=g>0?g+v:v,f=f>0?f+v:v,(u!=g||z!=f)&&(c.style({width:g,height:f}),S(c).resize={oldWidth:u,oldHeight:z})}function t(c){var u=S(c).resize;u&&c.style({width:u.oldWidth,height:u.oldHeight})}return{resizeNode:m,recoverNodeDimensions:t,changeOptions:s}}),ie}var re,fe;function Le(){return fe||(fe=1,re=function(v,s,S,m,t,c,u,z){var g=function(n){return function(P){n(P)}},f={snapToGridDuringDrag:new g(T),resize:new g(e),snapToGridOnRelease:new g(k),drawGrid:new g(V),guidelines:new g(i),parentPadding:new g(d)};function h(n,P){return function(L){var G=L.target||L.cyTarget;(!G.is(":parent")||P)&&n(G)}}function a(n){return function(){v.nodes().not(":parent").each(function(P,L){typeof P=="number"&&(P=L),n(P)})}}function M(n){return function(){v.nodes().each(function(P,L){typeof P=="number"&&(P=L),n(P)})}}function w(n){return n?"on":"off"}function T(n){v[w(n)]("tapstart","node",m.onTapStartNode)}var b=a(S.resizeNode);h(S.resizeNode);var C=a(S.recoverNodeDimensions);function e(n){v[w(n)]("ready",b),n?b():C()}var O=M(s.snapNodesTopDown),p=M(s.recoverSnapNode),W=h(s.snapNode,!0);function k(n){v[w(n)]("add","node",W),v[w(n)]("ready",O),v[w(n)]("free","node",s.onFreeNode),n?O():p()}var _=function(){x.zoomDash&&t.drawGrid()},R=function(){x.panGrid&&t.drawGrid()};function V(n){v[w(n)]("zoom",_),v[w(n)]("pan",R),n?(t.initCanvas(),v.on("resize",t.resizeCanvas)):(t.clearCanvas(),t.resetCanvas(),v.off("resize",t.resizeCanvas))}var H=null,B=function(n){var P=n.target||n.cyTarget,L=P.selected()?n.cy.$(":selected"):P;H=c.getTopMostNodes(L.nodes()),c.lines.init(H)},I=function(n){this.id()==H.id()&&(c.lines.update(H),x.snapToAlignmentLocationDuringDrag&&c.lines.snapToAlignmentLocation(H))},F=function(n){x.snapToAlignmentLocationOnRelease&&c.lines.snapToAlignmentLocation(H),c.lines.destroy(),H=null},X=function(n){c.lines.resize()},Z=function(n){c.getMousePos(n)},U=function(n){H&&(c.setMousePos(v.pan()),c.lines.init(H))};function i(n){n?(c.resizeCanvas(),v.on("tapstart","node",Z),v.on("grab",B),v.on("pan",U),v.on("drag","node",I),v.on("free",F),window.addEventListener("resize",X)):(v.off("tapstart","node",Z),v.off("grab",B),v.off("pan",U),v.off("drag","node",I),v.off("free",F),c.resetCanvas(),window.removeEventListener("resize",X))}var r=function(n){u.setPaddingOfParent(v.nodes(":parent"),n)},l=function(n){u.setPaddingOfParent(n,!0)};function d(n){r(n),v[w(n)]("ready",r),v[w(n)]("add","node:parent",h(l,!0))}var y={},x,o={drawGrid:["gridSpacing","zoomDash","panGrid","gridStackOrder","gridColor","lineWidth","lineDash"],guidelines:["gridSpacing","guidelinesStackOrder","guidelinesTolerance","guidelinesStyle","distributionGuidelines","range","minDistRange","geometricGuidelineRange"],resize:["gridSpacing"],parentPadding:["gridSpacing","parentSpacing"],snapToGridOnRelease:["gridSpacing","snapToGridCenter"]};function D(n){x=Object.extend({},n),n.guidelines=n.initPosAlignment||n.distributionGuidelines||n.geometricGuideline;for(var P in n)if(y[P]!=n[P])if(f.hasOwnProperty(P))f[P](n[P]);else for(var L in o){var G=o[L];G.indexOf(P)>=0&&(L=="drawGrid"&&(t.changeOptions(n),n.drawGrid&&t.resizeCanvas()),L=="snapToGridOnRelease"&&(s.changeOptions(n),n.snapToGridOnRelease&&O()),L=="guidelines"&&c.changeOptions(n),L=="resize"&&(S.changeOptions(n),n.resize&&b()),L=="parentPadding"&&u.changeOptions(n))}y=Object.extend({},y,n)}return{init:D,syncWithOptions:D}}),re}var ne,he;function Ce(){return he||(he=1,ne=function(v,s,S){var m=ze(),t=v,c=function(i){t=i,t.guidelinesTolerance==0&&(t.guidelinesTolerance=.001)},u=function(i){var r=i.getBoundingClientRect();return{top:r.top+document.documentElement.scrollTop,left:r.left+document.documentElement.scrollLeft}},z=S(function(){g(),f.height=s.height(),f.width=s.width(),f.style.position="absolute",f.style.top=0,f.style.left=0,f.style.zIndex=t.guidelinesStackOrder,setTimeout(function(){f.height=s.height(),f.width=s.width();var i=u(f),r=u(h);f.style.top=-(i.top-r.top),f.style.left=-(i.left-r.left)},0)},250),g=function(){var i=s.width(),r=s.height();a.clearRect(0,0,i,r)},f=document.createElement("canvas"),h=s.container(),a=f.getContext("2d");h.appendChild(f);var M=function(){f.height=0,f.width=0,f.style.position="absolute",f.style.top=0,f.style.left=0,f.style.zIndex=t.guidelinesStackOrder};M();var w=null,T=null,b,C,e={},O={},p={h:null,v:null};e.getDims=function(i){var r=i.renderedPosition(),l=i.renderedWidth(),d=i.renderedHeight(),y={left:Number(i.renderedStyle("padding-left").replace("px","")),right:Number(i.renderedStyle("padding-right").replace("px","")),top:Number(i.renderedStyle("padding-top").replace("px","")),bottom:Number(i.renderedStyle("padding-bottom").replace("px",""))};return{horizontal:{center:r.x,left:Math.round(r.x-(y.left+l/2)),right:Math.round(r.x+(y.right+l/2))},vertical:{center:r.y,top:Math.round(r.y-(y.top+d/2)),bottom:Math.round(r.y+(y.bottom+d/2))}}},e.init=function(i){w=m(),T=m(),b||(O.x=s.pan("x"),O.y=s.pan("y"),b=i.renderedPosition());var r=s.nodes(":visible");C=i.union(i.ancestors()),C=C.union(i.descendants()),r.not(C).each(function(l,d){typeof l=="number"&&(l=d);var y=e.getDims(l);["left","center","right"].forEach(function(x){var o=y.horizontal[x];T.get(o)?T.get(o).push(l):T=T.insert(o,[l])}),["top","center","bottom"].forEach(function(x){var o=y.vertical[x];w.get(o)?w.get(o).push(l):w=w.insert(o,[l])})}),a.lineWidth=t.lineWidth,e.update(i)},e.destroy=function(){e.clear(),w=null,T=null,b=null,_={},p={h:null,v:null},U&&(U.unlock(),U=void 0)},e.clear=g,e.drawLine=function(i,r,l,d){a.setLineDash(d),a.beginPath(),a.moveTo(i.x,i.y),a.lineTo(r.x,r.y),a.strokeStyle=l,a.stroke()},e.drawArrow=function(i,r){r=="right"?(a.setLineDash([]),a.beginPath(),a.moveTo(i.x-5,i.y-5),a.lineTo(i.x,i.y),a.lineTo(i.x-5,i.y+5),a.stroke()):r=="left"?(a.setLineDash([]),a.beginPath(),a.moveTo(i.x+5,i.y-5),a.lineTo(i.x,i.y),a.lineTo(i.x+5,i.y+5),a.stroke()):r=="top"?(a.setLineDash([]),a.beginPath(),a.moveTo(i.x-5,i.y+5),a.lineTo(i.x,i.y),a.lineTo(i.x+5,i.y+5),a.stroke()):r=="bottom"&&(a.setLineDash([]),a.beginPath(),a.moveTo(i.x-5,i.y-5),a.lineTo(i.x,i.y),a.lineTo(i.x+5,i.y-5),a.stroke())},e.drawCross=function(i){a.setLineDash([]),a.beginPath(),a.moveTo(i.x-5,i.y+5),a.lineTo(i.x+5,i.y-5),a.moveTo(i.x-5,i.y-5),a.lineTo(i.x+5,i.y+5),a.stroke()};var W=function(i,r){for(var l=i[0],d=e.getDims(l)[r].center,y=i[0],x=e.getDims(y)[r].center,o=0;o<i.length;o++){var D=i[o];e.getDims(D)[r].center<d&&(d=e.getDims(D)[r].center,l=D),e.getDims(D)[r].center>x&&(x=e.getDims(D)[r].center,y=D)}if(r=="horizontal")var n=(d+x)/2<e.getDims(i[1])[r].center?x+(.5*y.width()+t.guidelinesStyle.distGuidelineOffset)*s.zoom():d-(.5*l.width()+t.guidelinesStyle.distGuidelineOffset)*s.zoom();else var n=(d+x)/2<e.getDims(i[1])[r].center?x+(.5*y.height()+t.guidelinesStyle.distGuidelineOffset)*s.zoom():d-(.5*l.height()+t.guidelinesStyle.distGuidelineOffset)*s.zoom();return n};e.horizontalDistribution=function(i){var r=null,l=null,d=e.getDims(i),y=d.horizontal.center,x=d.vertical.center;if(T.forEach(function(n,P){for(var L=0;L<P.length;L++){var G=P[L],A=e.getDims(G);if(Math.abs(A.vertical.center-d.vertical.center)<t.guidelinesStyle.range*s.zoom()&&A.horizontal.right==n&&d.horizontal.left-A.horizontal.right>t.guidelinesStyle.minDistRange){var q=Math.round(2*y)-n;T.forEach(function($,E){for(var N=0;N<E.length;N++){var Y=E[N];Math.abs(e.getDims(Y).vertical.center-x)<t.guidelinesStyle.range*s.zoom()&&Math.abs(q-e.getDims(Y).horizontal.left)<2*t.guidelinesTolerance&&(r=G,l=Y)}},q-t.guidelinesTolerance,q+t.guidelinesTolerance)}}},y-t.guidelinesStyle.range*s.zoom(),y),r){p.hd=y-(e.getDims(l).horizontal.left+e.getDims(r).horizontal.right)/2,(!t.geometricGuideline||p.h==null||Math.abs(p.h)>Math.abs(p.hd))&&(p.h=p.hd);var o=W([r,i,l],"vertical");e.drawLine({x:e.getDims(r).horizontal.right,y:o},{x:d.horizontal.left,y:o},t.guidelinesStyle.horizontalDistColor,t.guidelinesStyle.horizontalDistLine),e.drawLine({x:e.getDims(l).horizontal.left,y:o},{x:d.horizontal.right,y:o},t.guidelinesStyle.horizontalDistColor,t.guidelinesStyle.horizontalDistLine),e.drawLine({x:e.getDims(r).horizontal.right,y:o},{x:e.getDims(r).horizontal.right,y:e.getDims(r).vertical.center},t.guidelinesStyle.horizontalDistColor,t.guidelinesStyle.horizontalDistLine),e.drawLine({x:e.getDims(l).horizontal.left,y:o},{x:e.getDims(l).horizontal.left,y:e.getDims(l).vertical.center},t.guidelinesStyle.horizontalDistColor,t.guidelinesStyle.horizontalDistLine),e.drawLine({x:d.horizontal.left,y:o},{x:d.horizontal.left,y:x},t.guidelinesStyle.horizontalDistColor,t.guidelinesStyle.horizontalDistLine),e.drawLine({x:d.horizontal.right,y:o},{x:d.horizontal.right,y:x},t.guidelinesStyle.horizontalDistColor,t.guidelinesStyle.horizontalDistLine),e.drawArrow({x:e.getDims(r).horizontal.right,y:o},"left"),e.drawArrow({x:d.horizontal.left,y:o},"right"),e.drawArrow({x:d.horizontal.right,y:o},"left"),e.drawArrow({x:e.getDims(l).horizontal.left,y:o},"right")}else{var D=e.horizontalDistributionNext(i,"left");D||e.horizontalDistributionNext(i,"right")}},e.verticalDistribution=function(i){var r=null,l=null,d=e.getDims(i),y=d.horizontal.center,x=d.vertical.center;if(w.forEach(function(n,P){for(var L=0;L<P.length;L++){var G=P[L],A=e.getDims(G);if(Math.abs(A.horizontal.center-d.horizontal.center)<t.guidelinesStyle.range*s.zoom()&&A.vertical.bottom==n&&d.vertical.top-A.vertical.bottom>t.guidelinesStyle.minDistRange){var q=Math.round(2*x-n);w.forEach(function($,E){for(var N=0;N<E.length;N++){var Y=E[N];Math.abs(e.getDims(Y).horizontal.center-y)<t.guidelinesStyle.range*s.zoom()&&Math.abs(q-e.getDims(Y).vertical.top)<2*t.guidelinesTolerance&&(r=G,l=Y)}},q-t.guidelinesTolerance,q+t.guidelinesTolerance)}}},x-t.guidelinesStyle.range*s.zoom(),x),r){p.vd=x-(e.getDims(r).vertical.bottom+e.getDims(l).vertical.top)/2,(!t.geometricGuideline||p.v==null||Math.abs(p.v)>Math.abs(p.vd))&&(p.v=p.vd);var o=W([r,i,l],"horizontal");e.drawLine({y:e.getDims(r).vertical.bottom,x:o},{y:d.vertical.top,x:o},t.guidelinesStyle.verticalDistColor,t.guidelinesStyle.verticalDistLine),e.drawLine({y:e.getDims(l).vertical.top,x:o},{y:d.vertical.bottom,x:o},t.guidelinesStyle.verticalDistColor,t.guidelinesStyle.verticalDistLine),e.drawLine({y:e.getDims(r).vertical.bottom,x:o},{y:e.getDims(r).vertical.bottom,x:e.getDims(r).horizontal.center},t.guidelinesStyle.verticalDistColor,t.guidelinesStyle.verticalDistLine),e.drawLine({y:e.getDims(l).vertical.top,x:o},{y:e.getDims(l).vertical.top,x:e.getDims(l).horizontal.center},t.guidelinesStyle.verticalDistColor,t.guidelinesStyle.verticalDistLine),e.drawLine({y:d.vertical.bottom,x:o},{y:d.vertical.bottom,x:y},t.guidelinesStyle.verticalDistColor,t.guidelinesStyle.verticalDistLine),e.drawLine({y:d.vertical.top,x:o},{y:d.vertical.top,x:y},t.guidelinesStyle.verticalDistColor,t.guidelinesStyle.verticalDistLine),e.drawArrow({x:o,y:e.getDims(r).vertical.bottom},"top"),e.drawArrow({x:o,y:d.vertical.top},"bottom"),e.drawArrow({x:o,y:e.getDims(l).vertical.top},"bottom"),e.drawArrow({x:o,y:d.vertical.bottom},"top")}else{var D=e.verticalDistributionNext(i,"below");D||e.verticalDistributionNext(i,"above")}},e.searchForLine=function(i,r){var l,d,y,x,o,D,n,P=e.getDims(r)[i],L=Number.MAX_SAFE_INTEGER;i=="horizontal"?(D=T,x="y",o="x",p.h=null):(D=w,x="x",o="y",p.v=null),y=r.renderedPosition(x);for(var G in P)if(l=P[G],D.forEach(function(A,q){for(var $=0;$<q.length;$++){var E=q[$];if(t.centerToEdgeAlignment||G!="center"&&E.renderedPosition(o)!=A||G=="center"&&E.renderedPosition(o)==A){var N=Math.abs(y-E.renderedPosition(x));N<L&&N<t.guidelinesStyle.geometricGuidelineRange*s.zoom()&&(d=E,L=N,n=A)}}},l-Number(t.guidelinesTolerance),l+Number(t.guidelinesTolerance)),d){L=e.getDims(r)[i][G],i=="horizontal"?(p.h=L-n,e.drawLine({x:L,y:r.renderedPosition("y")},{x:L,y:d.renderedPosition("y")},t.guidelinesStyle.strokeStyle,t.guidelinesStyle.lineDash)):(p.v=L-n,e.drawLine({x:r.renderedPosition("x"),y:L},{x:d.renderedPosition("x"),y:L},t.guidelinesStyle.strokeStyle,t.guidelinesStyle.lineDash));break}},e.horizontalDistributionNext=function(i,r){var l=null,d=null,y=e.getDims(i),x=y.horizontal.center,o=y.vertical.center,D="right",n="left",P=x;if(r=="left"){D="left",n="right";var P=x-t.guidelinesStyle.range*s.zoom()}var L={left:function(G,A){return A-G>t.guidelinesStyle.minDistRange},right:function(G,A){return G-A>t.guidelinesStyle.minDistRange}};return T.forEach(function(G,A){for(var q=0;q<A.length;q++){var $=A[q],E=e.getDims($);if(Math.abs(E.vertical.center-y.vertical.center)<t.guidelinesStyle.range*s.zoom()&&E.horizontal[n]==G&&L[r](E.horizontal[n],y.horizontal[D])){var N=E.horizontal[D]-(y.horizontal[D]-G);T.forEach(function(Y,K){for(var J=0;J<K.length;J++){var Q=K[J];Math.abs(e.getDims(Q).vertical.center-o)<t.guidelinesStyle.range*s.zoom()&&Math.abs(N-e.getDims(Q).horizontal[n])<2*t.guidelinesTolerance&&(l=$,d=Q)}},N-t.guidelinesTolerance,N+t.guidelinesTolerance)}}},P,P+t.guidelinesStyle.range*s.zoom()),l?(p.hd=e.getDims(i).horizontal[D]-e.getDims(l).horizontal[n]-(e.getDims(l).horizontal[D]-e.getDims(d).horizontal[n]),(!t.geometricGuideline||p.h==null||Math.abs(p.h)>Math.abs(p.hd))&&(p.h=p.hd),e.drawDH(i,l,d,r),!0):(t.geometricGuideline||(p.h=null),!1)},e.drawDH=function(i,r,l,d){var y=e.getDims(i).vertical.center,x="right",o="left";d=="left"&&(x="left",o="right");var D=W([r,i,l],"vertical");e.drawLine({x:e.getDims(r).horizontal[o],y:D},{x:e.getDims(i).horizontal[x],y:D},t.guidelinesStyle.horizontalDistColor,t.guidelinesStyle.horizontalDistLine),e.drawLine({x:e.getDims(i).horizontal[x],y:D},{x:e.getDims(i).horizontal[x],y},t.guidelinesStyle.horizontalDistColor,t.guidelinesStyle.horizontalDistLine),e.drawLine({x:e.getDims(l).horizontal[o],y:D},{x:e.getDims(r).horizontal[x],y:D},t.guidelinesStyle.horizontalDistColor,t.guidelinesStyle.horizontalDistLine),e.drawLine({x:e.getDims(l).horizontal[o],y:D},{x:e.getDims(l).horizontal[o],y:e.getDims(l).vertical.center},t.guidelinesStyle.horizontalDistColor,t.guidelinesStyle.horizontalDistLine),e.drawLine({x:e.getDims(r).horizontal[o],y:D},{x:e.getDims(r).horizontal[o],y:e.getDims(r).vertical.center},t.guidelinesStyle.horizontalDistColor,t.guidelinesStyle.horizontalDistLine),e.drawLine({x:e.getDims(r).horizontal[x],y:D},{x:e.getDims(r).horizontal[x],y:e.getDims(r).vertical.center},t.guidelinesStyle.horizontalDistColor,t.guidelinesStyle.horizontalDistLine),e.drawArrow({x:e.getDims(i).horizontal[x],y:D},o),e.drawArrow({x:e.getDims(r).horizontal[o],y:D},x),e.drawArrow({x:e.getDims(r).horizontal[x],y:D},o),e.drawArrow({x:e.getDims(l).horizontal[o],y:D},x)},e.verticalDistributionNext=function(i,r){var l=null,d=null,y=e.getDims(i),x=y.horizontal.center,o=y.vertical.center,D="top",n="bottom",P=o-t.guidelinesStyle.range*s.zoom();r=="above"&&(D="bottom",n="top",P=o);var L={below:function(G,A){return A-G>t.guidelinesStyle.minDistRange},above:function(G,A){return G-A>t.guidelinesStyle.minDistRange}};return w.forEach(function(G,A){for(var q=0;q<A.length;q++){var $=A[q],E=e.getDims($);if(Math.abs(E.horizontal.center-y.horizontal.center)<t.guidelinesStyle.range*s.zoom()&&E.vertical[n]==G&&L[r](E.vertical[n],y.vertical[D])){var N=E.vertical[D]-(y.vertical[D]-G);w.forEach(function(Y,K){for(var J=0;J<K.length;J++){var Q=K[J];Math.abs(e.getDims(Q).horizontal.center-x)<t.guidelinesStyle.range*s.zoom()&&Math.abs(N-e.getDims(Q).vertical[n])<2*t.guidelinesTolerance&&(l=$,d=Q)}},N-t.guidelinesTolerance,N+t.guidelinesTolerance)}}},P,P+t.guidelinesStyle.range*s.zoom()),l?(p.vd=e.getDims(i).vertical[D]-e.getDims(l).vertical[n]-(e.getDims(l).vertical[D]-e.getDims(d).vertical[n]),(!t.geometricGuideline||p.v==null||Math.abs(p.v)>Math.abs(p.vd))&&(p.v=p.vd),e.drawDV(i,l,d,r),!0):(t.geometricGuideline||(p.v=null),!1)},e.drawDV=function(i,r,l,d){var y=e.getDims(i),x=y.horizontal.center,o="top",D="bottom";d=="above"&&(o="bottom",D="top");var n=W([r,i,l],"horizontal");e.drawLine({x:n,y:y.vertical[o]},{x:n,y:e.getDims(r).vertical[D]},t.guidelinesStyle.verticalDistColor,t.guidelinesStyle.verticalDistLine),e.drawLine({x:n,y:e.getDims(r).vertical[o]},{x:n,y:e.getDims(l).vertical[D]},t.guidelinesStyle.verticalDistColor,t.guidelinesStyle.verticalDistLine),e.drawLine({x,y:y.vertical[o]},{x:n,y:y.vertical[o]},t.guidelinesStyle.verticalDistColor,t.guidelinesStyle.verticalDistLine),e.drawLine({x:e.getDims(r).horizontal.center,y:e.getDims(r).vertical[D]},{x:n,y:e.getDims(r).vertical[D]},t.guidelinesStyle.verticalDistColor,t.guidelinesStyle.verticalDistLine),e.drawLine({x:e.getDims(r).horizontal.center,y:e.getDims(r).vertical[o]},{x:n,y:e.getDims(r).vertical[o]},t.guidelinesStyle.verticalDistColor,t.guidelinesStyle.verticalDistLine),e.drawLine({x:n,y:e.getDims(l).vertical[D]},{x:e.getDims(l).horizontal.center,y:e.getDims(l).vertical[D]},t.guidelinesStyle.verticalDistColor,t.guidelinesStyle.verticalDistLine),e.drawArrow({x:n,y:y.vertical[o]},D),e.drawArrow({x:n,y:e.getDims(r).vertical[D]},o),e.drawArrow({x:n,y:e.getDims(r).vertical[o]},D),e.drawArrow({x:n,y:e.getDims(l).vertical[D]},o)},e.update=function(i){e.clear(),t.initPosAlignment&&B(i),i.each(function(r,l){typeof r=="number"&&(r=l),t.geometricGuideline&&(e.searchForLine("horizontal",r),e.searchForLine("vertical",r)),t.distributionGuidelines&&(e.horizontalDistribution(r),e.verticalDistribution(r))})},e.resize=function(){z()};function k(i){for(var r={},l=0;l<i.length;l++)r[i[l].id()]=!0;var d=i.filter(function(y,x){typeof y=="number"&&(y=x);for(var o=y.parent()[0];o!=null;){if(r[o.id()])return!1;o=o.parent()[0]}return!0});return d}var _={},R={},V=function(i){_=i.renderedPosition||i.cyRenderedPosition,R.x=_.x,R.y=_.y},H=function(i){R.x+=i.x-O.x,R.y+=i.y-O.y,O.x=i.x,O.y=i.y},B=function(i){var r=i.renderedPosition();Math.abs(b.y-r.y)<t.guidelinesTolerance?(e.drawLine({x:R.x,y:_.y},{x:r.x,y:_.y},t.guidelinesStyle.initPosAlignmentColor,t.guidelinesStyle.initPosAlignmentLine),_.y==R.y?e.drawCross(R):e.drawCross(_)):Math.abs(b.x-r.x)<t.guidelinesTolerance&&(e.drawLine({x:_.x,y:R.y},{x:_.x,y:r.y},t.guidelinesStyle.initPosAlignmentColor,t.guidelinesStyle.initPosAlignmentLine),_.x==R.x?e.drawCross(R):e.drawCross(_))};function I(i,r){var l=k(r),d=l.union(l.descendants());d.filter(":childless").forEach(function(y,x){typeof y=="number"&&(y=x);var o={x:i.x+y.renderedPosition("x"),y:i.y+y.renderedPosition("y")};y.renderedPosition(o)})}var F;s.on("tapstart","node",function(){F=this});var X,Z={x:0,y:0};s.on("mousemove",function(i){X=i.renderedPosition||i.cyRenderedPosition,U&&U.each(function(r,l){if(typeof r=="number"&&(r=l),r.locked()&&(Math.abs(X.x-Z.x)>2*t.guidelinesTolerance||Math.abs(X.y-Z.y)>2*t.guidelinesTolerance)){r.unlock();var d={};d.x=X.x-F.renderedPosition("x"),d.y=X.y-F.renderedPosition("y"),I(d,r)}})});var U;return e.snapToAlignmentLocation=function(i){U=i,i.each(function(r,l){typeof r=="number"&&(r=l);var d=r.renderedPosition();p.h&&(Z=X,d.x-=p.h,r.renderedPosition(d)),p.v&&(Z=X,d.y-=p.v,r.renderedPosition(d)),(p.v||p.h)&&(p.h=null,p.v=null,U.lock())}),e.update(i)},{changeOptions:c,lines:e,getTopMostNodes:k,getMousePos:V,setMousePos:H,resizeCanvas:z,resetCanvas:M}}),ne}var ae,me;function Me(){return me||(me=1,ae=function(v,s){var S=v,m="_gridParentPadding",t;function c(){s.style().selector("."+m).style("compound-sizing-wrt-labels","exclude").style("padding-left",t).style("padding-right",t).style("padding-top",t).style("padding-bottom",t).update()}function u(g){S=g,t=S.parentSpacing<0?S.gridSpacing:S.parentSpacing,c()}function z(g,f){f?g.addClass(m):g.removeClass(m)}return{changeOptions:u,setPaddingOfParent:z}}),ae}var oe,ye;function Oe(){return ye||(ye=1,oe=function(v,s,S){function m(u,z,g){var f=u.union(u.descendants());f.filter(":childless").positions(function(h,a){typeof h=="number"&&(h=a);var M=h.position();return{x:M.x+z,y:M.y+g}})}function t(u){for(var z={},g=0;g<u.length;g++)z[u[g].id()]=!0;var f=u.filter(function(h,a){typeof h=="number"&&(h=a);for(var M=h.parent()[0];M!=null;){if(z[M.id()])return!1;M=M.parent()[0]}return!0});return f}if(S||v("collection","align",function(u,z,g){var f=t(this.nodes(":visible")),h=g||f[0];f=f.not(h),u=u||"none",z=z||"none";var a=0,M=0;z=="left"?a=-1:z=="right"&&(a=1),u=="top"?M=-1:u=="bottom"&&(M=1);for(var w=0;w<f.length;w++){var T=f[w],b=Object.assign({},T.position()),C=Object.assign({},T.position());z!="none"&&(C.x=h.position("x")+a*(h.outerWidth()-T.outerWidth())/2),u!="none"&&(C.y=h.position("y")+M*(h.outerHeight()-T.outerHeight())/2),m(T,C.x-b.x,C.y-b.y)}return this}),s.undoRedo){let u=function(){for(var g={},f=s.nodes(),h=0;h<f.length;h++){var a=f[h];g[a.id()]={x:a.position("x"),y:a.position("y")}}return g},z=function(g){var f={};return s.nodes().not(":parent").positions(function(h,a){typeof h=="number"&&(h=a),f[h.id()]={x:h.position("x"),y:h.position("y")};var M=g[h.id()];return{x:M.x,y:M.y}}),f};var c=s.undoRedo(null,!0);c.action("align",function(g){var f;return g.firstTime?(f=u(),g.nodes.align(g.horizontal,g.vertical,g.alignTo)):f=z(g),f},function(g){return z(g)})}}),oe}var le,De;function Ge(){if(De)return le;De=1;var v=function(){var s="Expected a function",S=Math.max,m=Date.now,t=m||function(){return new Date().getTime()};function c(z,g,f){var h,a,M,w,T,b,C,e=0,O=!1,p=!0;if(typeof z!="function")throw new TypeError(s);if(g=g<0?0:+g||0,f===!0){var W=!0;p=!1}else u(f)&&(W=!!f.leading,O="maxWait"in f&&S(+f.maxWait||0,g),p="trailing"in f?!!f.trailing:p);function k(){b&&clearTimeout(b),a&&clearTimeout(a),e=0,a=b=C=void 0}function _(B,I){I&&clearTimeout(I),a=b=C=void 0,B&&(e=t(),M=z.apply(T,h),!b&&!a&&(h=T=void 0))}function R(){var B=g-(t()-w);B<=0||B>g?_(C,a):b=setTimeout(R,B)}function V(){_(p,b)}function H(){if(h=arguments,w=t(),T=this,C=p&&(b||!W),O===!1)var B=W&&!b;else{!a&&!W&&(e=w);var I=O-(w-e),F=I<=0||I>O;F?(a&&(a=clearTimeout(a)),e=w,M=z.apply(T,h)):a||(a=setTimeout(V,I))}return F&&b?b=clearTimeout(b):!b&&g!==O&&(b=setTimeout(R,g)),B&&(F=!0,M=z.apply(T,h)),F&&!b&&!a&&(h=T=void 0),M}return H.cancel=k,H}function u(z){var g=typeof z;return!!z&&(g=="object"||g=="function")}return c}();return le=v,le}(function(v){(function(){var s=function(S){if(!S)return;we();var m=!1,t={snapToGridOnRelease:!0,snapToGridDuringDrag:!1,snapToAlignmentLocationOnRelease:!1,snapToAlignmentLocationDuringDrag:!1,distributionGuidelines:!1,geometricGuideline:!1,initPosAlignment:!1,centerToEdgeAlignment:!1,resize:!1,parentPadding:!1,drawGrid:!0,gridSpacing:20,snapToGridCenter:!0,zoomDash:!0,panGrid:!1,gridStackOrder:-1,gridColor:"#dedede",lineWidth:1,guidelinesStackOrder:4,guidelinesTolerance:2,guidelinesStyle:{strokeStyle:"#8b7d6b",geometricGuidelineRange:400,range:100,minDistRange:10,distGuidelineOffset:10,horizontalDistColor:"#ff0000",verticalDistColor:"#00ff00",initPosAlignmentColor:"#0000ff",lineDash:[0,0],horizontalDistLine:[0,0],verticalDistLine:[0,0],initPosAlignmentLine:[0,0]},parentSpacing:-1},c=Se(),u=Te(),z=be(),g=Pe(),f=Le(),h=Ce(),a=Me(),M=Oe(),w=Ge();function T(b){return b.scratch("_gridGuide")||b.scratch("_gridGuide",{}),b.scratch("_gridGuide")}S("core","gridGuide",function(b){var C=this,e=T(C),O=Object.extend({},e.options||t,b);if(e.options=O,e.initialized){var R=e.eventsController;R.syncWithOptions(O)}else{var p,W,k,_,R,V,H;p=c(C,O.gridSpacing,O.snapToGridCenter),W=g(O.gridSpacing),k=u(C,p),_=z(O,C,w),V=h(O,C,w),H=a(O,C),R=f(C,p,W,k,_,V,H,O),M(S,C,m),m=!0,R.init(O),e.initialized=!0,e.eventsController=R}return this})};v.exports&&(v.exports=s),typeof cytoscape<"u"&&s(cytoscape)})()})(pe);var Ae=pe.exports;const Ee=xe(Ae);export{Ee as g};