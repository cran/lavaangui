import{g as R}from"./core-js-bbf708ea.js";var P={exports:{}};(function(k){(function(){var x=function(S){if(!S)return;function g(i,d){i.scratch("_undoRedo")===void 0&&i.scratch("_undoRedo",{});var o=i.scratch("_undoRedo");return d===void 0?o:o[d]}function _(i,d,o){var s=g(i);s[d]=o,i.scratch("_undoRedo",s)}function b(i){var d={};return d.options={isDebug:!1,actions:{},undoableDrag:!0,stackSizeLimit:void 0,beforeUndo:function(){},afterUndo:function(){},beforeRedo:function(){},afterRedo:function(){},ready:function(){}},d.actions={},d.undoStack=[],d.redoStack=[],d.reset=function(o,s){this.undoStack=o||[],this.redoStack=s||[]},d.undo=function(){if(this.isUndoStackEmpty())this.options.isDebug&&console.log("Undoing cannot be done because undo stack is empty!");else{var o=this.undoStack.pop();i.trigger("beforeUndo",[o.name,o.args]);var s=this.actions[o.name]._undo(o.args);return this.redoStack.push({name:o.name,args:s}),i.trigger("afterUndo",[o.name,o.args,s]),s}},d.redo=function(){if(this.isRedoStackEmpty())this.options.isDebug&&console.log("Redoing cannot be done because redo stack is empty!");else{var o=this.redoStack.pop();i.trigger(o.firstTime?"beforeDo":"beforeRedo",[o.name,o.args]),o.args||(o.args={}),o.args.firstTime=!!o.firstTime;var s=this.actions[o.name]._do(o.args);return this.undoStack.push({name:o.name,args:s}),this.options.stackSizeLimit!=null&&this.undoStack.length>this.options.stackSizeLimit&&this.undoStack.shift(),i.trigger(o.firstTime?"afterDo":"afterRedo",[o.name,o.args,s]),s}},d.do=function(o,s){return this.redoStack.length=0,this.redoStack.push({name:o,args:s,firstTime:!0}),this.redo()},d.undoAll=function(){for(;!this.isUndoStackEmpty();)this.undo()},d.redoAll=function(){for(;!this.isRedoStackEmpty();)this.redo()},d.action=function(o,s,l){return this.actions[o]={_do:s,_undo:l},this},d.removeAction=function(o){delete this.actions[o]},d.isUndoStackEmpty=function(){return this.undoStack.length===0},d.isRedoStackEmpty=function(){return this.redoStack.length===0},d.getUndoStack=function(){return this.undoStack},d.getRedoStack=function(){return this.redoStack},d}S("core","undoRedo",function(i,d){var o=this,s=g(o,"instance")||b(o);if(_(o,"instance",s),i){for(var l in i)s.options.hasOwnProperty(l)&&(s.options[l]=i[l]);if(i.actions)for(var l in i.actions)s.actions[l]=i.actions[l]}if(!g(o,"isInitialized")&&!d){var v=w(o);for(var l in v)s.actions[l]=v[l];y(o,s.options.undoableDrag),_(o,"isInitialized",!0)}return s.options.ready(),s});function y(i,d){var o=null;i.on("grab","node",function(){(typeof d=="function"?d.call(this):d)&&(o={},o.lastMouseDownPosition={x:this.position("x"),y:this.position("y")},o.node=this)}),i.on("free","node",function(){var s=g(i,"instance");if(typeof d=="function"?d.call(this):d){if(o==null)return;var l=o.node,v=o.lastMouseDownPosition,h={x:l.position("x"),y:l.position("y")};if(h.x!=v.x||h.y!=v.y){var m={x:h.x-v.x,y:h.y-v.y},p;l.selected()?p=i.nodes(":visible").filter(":selected"):p=i.collection([l]);var E={positionDiff:m,nodes:p,move:!1};s.do("drag",E),o=null}}})}function w(i){function d(n){for(var e={},r=0;r<n.length;r++)e[n[r].id()]=!0;var u=n.filter(function(a,f){typeof a=="number"&&(a=f);for(var c=a.parent()[0];c!=null;){if(e[c.id()])return!1;c=c.parent()[0]}return!0});return u}function o(n,e,r){for(var u=r?e:d(e),a=0;a<u.length;a++){var f=u[a],c=f.position("x"),t=f.position("y");f.isParent()||f.position({x:c+n.x,y:t+n.y});var T=f.children();o(n,T,!0)}}function s(n){return typeof n=="string"?i.$(n):n}function l(n){return s(n).restore()}function v(n){var e={};return i.nodes().not(":parent").positions(function(r,u){typeof r=="number"&&(r=u),e[r.id()]={x:r.position("x"),y:r.position("y")};var a=n[r.id()];return{x:a.x,y:a.y}}),e}function h(){for(var n={},e=i.nodes(),r=0;r<e.length;r++){var u=e[r];n[u.id()]={x:u.position("x"),y:u.position("y")}}return n}function m(n){var e={};if(n.firstTime){var r=n.parentData==null?null:n.parentData,u=n.nodes.union(n.nodes.descendants());e.elesToRestore=u.union(u.connectedEdges()),e.movedEles=n.nodes.move({parent:r});var a={x:n.posDiffX,y:n.posDiffY};o(a,e.movedEles)}else e.elesToRestore=n.movedEles.remove(),e.movedEles=n.elesToRestore.restore();return n.callback&&(e.callback=n.callback,n.callback(e.movedEles)),e}function p(n){var e={};if(n.firstTime){var r=n.parentData==null?null:n.parentData,u=n.nodes.union(n.nodes.descendants()),a={};u.forEach(function(t){t.parent().id()?a[t.id()]=t.parent():a[t.id()]=null});var f={};u.forEach(function(t){f[t.id()]={},f[t.id()].x=t.position("x"),f[t.id()].y=t.position("y")}),e.oldParent=a,e.oldPosition=f,e.newParent=r,e.movedEles=u,n.nodes.move({parent:r}).nodes();var c={x:n.posDiffX,y:n.posDiffY};o(c,e.movedEles)}else e.oldParent={},n.movedEles.forEach(function(t){t.parent().id()?e.oldParent[t.id()]=t.parent():e.oldParent[t.id()]=null}),e.oldPosition={},n.movedEles.forEach(function(t){e.oldPosition[t.id()]={},e.oldPosition[t.id()].x=t.position("x"),e.oldPosition[t.id()].y=t.position("y")}),e.newParent=n.oldParent,e.movedEles=n.movedEles,e.movedEles.forEach(function(t){typeof e.newParent!="object"?t.move({parent:e.newParent}):e.newParent[t.id()]==null?t.move({parent:null}):t.move({parent:e.newParent[t.id()].id()}),t.position(n.oldPosition[t.id()])});return n.callback&&(e.callback=n.callback,n.callback(e.movedEles)),e}function E(n,e){for(var r=[],u=g(i,"instance"),a=u.actions,f=0;f<n.length;f++){var c=n[f];if(!a.hasOwnProperty(c.name))throw"Action "+c.name+" does not exist as an undoable function"}for(var f=0;f<n.length;f++){var c=n[f];c.param.firstTime=n.firstTime;var t;e=="undo"?t=a[c.name]._undo(c.param):t=a[c.name]._do(c.param),r.unshift({name:c.name,param:t})}return r}return{add:{_do:function(n){return n.firstTime?i.add(n):l(n)},_undo:i.remove},remove:{_do:i.remove,_undo:l},restore:{_do:l,_undo:i.remove},select:{_do:function(n){return s(n).select()},_undo:function(n){return s(n).unselect()}},unselect:{_do:function(n){return s(n).unselect()},_undo:function(n){return s(n).select()}},move:{_do:function(n){var e=s(n.eles),r=e.nodes(),u=e.edges(),a=[],f=[],c=[];return r.forEach(function(t){a.push(t.parent().length>1?t.parent().id():null)}),u.forEach(function(t){f.push(t.source().id()),c.push(t.target().id())}),{oldNodesParents:a,newNodes:r.move(n.location),oldEdgesSources:f,oldEdgesTargets:c,newEdges:u.move(n.location)}},_undo:function(n){var e=i.collection(),r={};if(n.newNodes.length>0){r.parent=n.newNodes[0].parent().id();for(var u=0;u<n.newNodes.length;u++){var a=n.newNodes[u].move({parent:n.oldNodesParents[u]});e=e.union(a)}}else{r.source=n.newEdges[0].source().id(),r.target=n.newEdges[0].target().id();for(var u=0;u<n.newEdges.length;u++){var f=n.newEdges[u].move({source:n.oldEdgesSources[u],target:n.oldEdgesTargets[u]});e=e.union(f)}}return{eles:e,location:r}}},drag:{_do:function(n){return n.move&&(o(n.positionDiff,n.nodes),i.elements().unselect()),n},_undo:function(n){var e={x:-1*n.positionDiff.x,y:-1*n.positionDiff.y},r={positionDiff:n.positionDiff,nodes:n.nodes,move:!0};return o(e,n.nodes),i.elements().unselect(),r}},layout:{_do:function(n){if(n.firstTime){var e=h(),r;return n.eles?r=s(n.eles).layout(n.options):r=i.layout(n.options),r&&r.run&&r.run(),e}else return v(n)},_undo:function(n){return v(n)}},changeParent:{_do:function(n){return i.nodes()[0].component?p(n):m(n)},_undo:function(n){return i.nodes()[0].component?p(n):m(n)}},batch:{_do:function(n){return E(n,"do")},_undo:function(n){return E(n,"undo")}}}}};k.exports&&(k.exports=x),typeof cytoscape<"u"&&x(cytoscape)})()})(P);var N=P.exports;const U=R(N);export{U as u};
