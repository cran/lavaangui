var B,N;function V(){if(N)return B;N=1,B=C;var a=0,h=1;function k(l,r,e,t,i,n){this._color=l,this.key=r,this.value=e,this.left=t,this.right=i,this._count=n}function b(l){return new k(l._color,l.key,l.value,l.left,l.right,l._count)}function m(l,r){return new k(l,r.key,r.value,r.left,r.right,r._count)}function g(l){l._count=1+(l.left?l.left._count:0)+(l.right?l.right._count:0)}function P(l,r){this._compare=l,this.root=r}var s=P.prototype;Object.defineProperty(s,"keys",{get:function(){var l=[];return this.forEach(function(r,e){l.push(r)}),l}}),Object.defineProperty(s,"values",{get:function(){var l=[];return this.forEach(function(r,e){l.push(e)}),l}}),Object.defineProperty(s,"length",{get:function(){return this.root?this.root._count:0}}),s.insert=function(l,r){for(var e=this._compare,t=this.root,i=[],n=[];t;){var o=e(l,t.key);i.push(t),n.push(o),o<=0?t=t.left:t=t.right}i.push(new k(a,l,r,null,null,1));for(var f=i.length-2;f>=0;--f){var t=i[f];n[f]<=0?i[f]=new k(t._color,t.key,t.value,i[f+1],t.right,t._count+1):i[f]=new k(t._color,t.key,t.value,t.left,i[f+1],t._count+1)}for(var f=i.length-1;f>1;--f){var c=i[f-1],t=i[f];if(c._color===h||t._color===h)break;var u=i[f-2];if(u.left===c)if(c.left===t){var _=u.right;if(_&&_._color===a)c._color=h,u.right=m(h,_),u._color=a,f-=1;else{if(u._color=a,u.left=c.right,c._color=h,c.right=u,i[f-2]=c,i[f-1]=t,g(u),g(c),f>=3){var v=i[f-3];v.left===u?v.left=c:v.right=c}break}}else{var _=u.right;if(_&&_._color===a)c._color=h,u.right=m(h,_),u._color=a,f-=1;else{if(c.right=t.left,u._color=a,u.left=t.right,t._color=h,t.left=c,t.right=u,i[f-2]=t,i[f-1]=c,g(u),g(c),g(t),f>=3){var v=i[f-3];v.left===u?v.left=t:v.right=t}break}}else if(c.right===t){var _=u.left;if(_&&_._color===a)c._color=h,u.left=m(h,_),u._color=a,f-=1;else{if(u._color=a,u.right=c.left,c._color=h,c.left=u,i[f-2]=c,i[f-1]=t,g(u),g(c),f>=3){var v=i[f-3];v.right===u?v.right=c:v.left=c}break}}else{var _=u.left;if(_&&_._color===a)c._color=h,u.left=m(h,_),u._color=a,f-=1;else{if(c.left=t.right,u._color=a,u.right=t.left,t._color=h,t.right=c,t.left=u,i[f-2]=t,i[f-1]=c,g(u),g(c),g(t),f>=3){var v=i[f-3];v.right===u?v.right=t:v.left=t}break}}}return i[0]._color=h,new P(e,i[0])};function j(l,r){if(r.left){var e=j(l,r.left);if(e)return e}var e=l(r.key,r.value);if(e)return e;if(r.right)return j(l,r.right)}function O(l,r,e,t){var i=r(l,t.key);if(i<=0){if(t.left){var n=O(l,r,e,t.left);if(n)return n}var n=e(t.key,t.value);if(n)return n}if(t.right)return O(l,r,e,t.right)}function R(l,r,e,t,i){var n=e(l,i.key),o=e(r,i.key),f;if(n<=0&&(i.left&&(f=R(l,r,e,t,i.left),f)||o>0&&(f=t(i.key,i.value),f)))return f;if(o>0&&i.right)return R(l,r,e,t,i.right)}s.forEach=function(r,e,t){if(this.root)switch(arguments.length){case 1:return j(r,this.root);case 2:return O(e,this._compare,r,this.root);case 3:return this._compare(e,t)>=0?void 0:R(e,t,this._compare,r,this.root)}},Object.defineProperty(s,"begin",{get:function(){for(var l=[],r=this.root;r;)l.push(r),r=r.left;return new w(this,l)}}),Object.defineProperty(s,"end",{get:function(){for(var l=[],r=this.root;r;)l.push(r),r=r.right;return new w(this,l)}}),s.at=function(l){if(l<0)return new w(this,[]);for(var r=this.root,e=[];;){if(e.push(r),r.left){if(l<r.left._count){r=r.left;continue}l-=r.left._count}if(!l)return new w(this,e);if(l-=1,r.right){if(l>=r.right._count)break;r=r.right}else break}return new w(this,[])},s.ge=function(l){for(var r=this._compare,e=this.root,t=[],i=0;e;){var n=r(l,e.key);t.push(e),n<=0&&(i=t.length),n<=0?e=e.left:e=e.right}return t.length=i,new w(this,t)},s.gt=function(l){for(var r=this._compare,e=this.root,t=[],i=0;e;){var n=r(l,e.key);t.push(e),n<0&&(i=t.length),n<0?e=e.left:e=e.right}return t.length=i,new w(this,t)},s.lt=function(l){for(var r=this._compare,e=this.root,t=[],i=0;e;){var n=r(l,e.key);t.push(e),n>0&&(i=t.length),n<=0?e=e.left:e=e.right}return t.length=i,new w(this,t)},s.le=function(l){for(var r=this._compare,e=this.root,t=[],i=0;e;){var n=r(l,e.key);t.push(e),n>=0&&(i=t.length),n<0?e=e.left:e=e.right}return t.length=i,new w(this,t)},s.find=function(l){for(var r=this._compare,e=this.root,t=[];e;){var i=r(l,e.key);if(t.push(e),i===0)return new w(this,t);i<=0?e=e.left:e=e.right}return new w(this,[])},s.remove=function(l){var r=this.find(l);return r?r.remove():this},s.get=function(l){for(var r=this._compare,e=this.root;e;){var t=r(l,e.key);if(t===0)return e.value;t<=0?e=e.left:e=e.right}};function w(l,r){this.tree=l,this._stack=r}var y=w.prototype;Object.defineProperty(y,"valid",{get:function(){return this._stack.length>0}}),Object.defineProperty(y,"node",{get:function(){return this._stack.length>0?this._stack[this._stack.length-1]:null},enumerable:!0}),y.clone=function(){return new w(this.tree,this._stack.slice())};function E(l,r){l.key=r.key,l.value=r.value,l.left=r.left,l.right=r.right,l._color=r._color,l._count=r._count}function T(l){for(var r,e,t,i,n=l.length-1;n>=0;--n){if(r=l[n],n===0){r._color=h;return}if(e=l[n-1],e.left===r){if(t=e.right,t.right&&t.right._color===a){if(t=e.right=b(t),i=t.right=b(t.right),e.right=t.left,t.left=e,t.right=i,t._color=e._color,r._color=h,e._color=h,i._color=h,g(e),g(t),n>1){var o=l[n-2];o.left===e?o.left=t:o.right=t}l[n-1]=t;return}else if(t.left&&t.left._color===a){if(t=e.right=b(t),i=t.left=b(t.left),e.right=i.left,t.left=i.right,i.left=e,i.right=t,i._color=e._color,e._color=h,t._color=h,r._color=h,g(e),g(t),g(i),n>1){var o=l[n-2];o.left===e?o.left=i:o.right=i}l[n-1]=i;return}if(t._color===h)if(e._color===a){e._color=h,e.right=m(a,t);return}else{e.right=m(a,t);continue}else{if(t=b(t),e.right=t.left,t.left=e,t._color=e._color,e._color=a,g(e),g(t),n>1){var o=l[n-2];o.left===e?o.left=t:o.right=t}l[n-1]=t,l[n]=e,n+1<l.length?l[n+1]=r:l.push(r),n=n+2}}else{if(t=e.left,t.left&&t.left._color===a){if(t=e.left=b(t),i=t.left=b(t.left),e.left=t.right,t.right=e,t.left=i,t._color=e._color,r._color=h,e._color=h,i._color=h,g(e),g(t),n>1){var o=l[n-2];o.right===e?o.right=t:o.left=t}l[n-1]=t;return}else if(t.right&&t.right._color===a){if(t=e.left=b(t),i=t.right=b(t.right),e.left=i.right,t.right=i.left,i.right=e,i.left=t,i._color=e._color,e._color=h,t._color=h,r._color=h,g(e),g(t),g(i),n>1){var o=l[n-2];o.right===e?o.right=i:o.left=i}l[n-1]=i;return}if(t._color===h)if(e._color===a){e._color=h,e.left=m(a,t);return}else{e.left=m(a,t);continue}else{if(t=b(t),e.left=t.right,t.right=e,t._color=e._color,e._color=a,g(e),g(t),n>1){var o=l[n-2];o.right===e?o.right=t:o.left=t}l[n-1]=t,l[n]=e,n+1<l.length?l[n+1]=r:l.push(r),n=n+2}}}}y.remove=function(){var l=this._stack;if(l.length===0)return this.tree;var r=new Array(l.length),e=l[l.length-1];r[r.length-1]=new k(e._color,e.key,e.value,e.left,e.right,e._count);for(var t=l.length-2;t>=0;--t){var e=l[t];e.left===l[t+1]?r[t]=new k(e._color,e.key,e.value,r[t+1],e.right,e._count):r[t]=new k(e._color,e.key,e.value,e.left,r[t+1],e._count)}if(e=r[r.length-1],e.left&&e.right){var i=r.length;for(e=e.left;e.right;)r.push(e),e=e.right;var n=r[i-1];r.push(new k(e._color,n.key,n.value,e.left,e.right,e._count)),r[i-1].key=e.key,r[i-1].value=e.value;for(var t=r.length-2;t>=i;--t)e=r[t],r[t]=new k(e._color,e.key,e.value,e.left,r[t+1],e._count);r[i-1].left=r[i]}if(e=r[r.length-1],e._color===a){var o=r[r.length-2];o.left===e?o.left=null:o.right===e&&(o.right=null),r.pop();for(var t=0;t<r.length;++t)r[t]._count--;return new P(this.tree._compare,r[0])}else if(e.left||e.right){e.left?E(e,e.left):e.right&&E(e,e.right),e._color=h;for(var t=0;t<r.length-1;++t)r[t]._count--;return new P(this.tree._compare,r[0])}else{if(r.length===1)return new P(this.tree._compare,null);for(var t=0;t<r.length;++t)r[t]._count--;var f=r[r.length-2];T(r),f.left===e?f.left=null:f.right=null}return new P(this.tree._compare,r[0])},Object.defineProperty(y,"key",{get:function(){if(this._stack.length>0)return this._stack[this._stack.length-1].key},enumerable:!0}),Object.defineProperty(y,"value",{get:function(){if(this._stack.length>0)return this._stack[this._stack.length-1].value},enumerable:!0}),Object.defineProperty(y,"index",{get:function(){var l=0,r=this._stack;if(r.length===0){var e=this.tree.root;return e?e._count:0}else r[r.length-1].left&&(l=r[r.length-1].left._count);for(var t=r.length-2;t>=0;--t)r[t+1]===r[t].right&&(++l,r[t].left&&(l+=r[t].left._count));return l},enumerable:!0}),y.next=function(){var l=this._stack;if(l.length!==0){var r=l[l.length-1];if(r.right)for(r=r.right;r;)l.push(r),r=r.left;else for(l.pop();l.length>0&&l[l.length-1].right===r;)r=l[l.length-1],l.pop()}},Object.defineProperty(y,"hasNext",{get:function(){var l=this._stack;if(l.length===0)return!1;if(l[l.length-1].right)return!0;for(var r=l.length-1;r>0;--r)if(l[r-1].left===l[r])return!0;return!1}}),y.update=function(l){var r=this._stack;if(r.length===0)throw new Error("Can't update empty node!");var e=new Array(r.length),t=r[r.length-1];e[e.length-1]=new k(t._color,t.key,l,t.left,t.right,t._count);for(var i=r.length-2;i>=0;--i)t=r[i],t.left===r[i+1]?e[i]=new k(t._color,t.key,t.value,e[i+1],t.right,t._count):e[i]=new k(t._color,t.key,t.value,t.left,e[i+1],t._count);return new P(this.tree._compare,e[0])},y.prev=function(){var l=this._stack;if(l.length!==0){var r=l[l.length-1];if(r.left)for(r=r.left;r;)l.push(r),r=r.right;else for(l.pop();l.length>0&&l[l.length-1].left===r;)r=l[l.length-1],l.pop()}},Object.defineProperty(y,"hasPrev",{get:function(){var l=this._stack;if(l.length===0)return!1;if(l[l.length-1].left)return!0;for(var r=l.length-1;r>0;--r)if(l[r-1].right===l[r])return!0;return!1}});function A(l,r){return l<r?-1:l>r?1:0}function C(l){return new P(l||A,null)}return B}export{V as r};