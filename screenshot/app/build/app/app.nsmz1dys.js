/*! Built with http://stenciljs.com */
(function(Context,namespace,hydratedCssClass,resourcesUrl,s){"use strict";
s=document.querySelector("script[data-namespace='app']");if(s){resourcesUrl=s.getAttribute('data-resources-url');}
(function(resourcesUrl){var e,t,n,r,i;e=window,t=1,n={red:255,green:0,blue:255,alpha:255},i=(r={flat:function(e,t){return{r:n.red,g:n.green,b:n.blue,a:n.alpha}},movement:function(e,t){return{r:(t.r*(n.red/255)+n.red)/2,g:(t.g*(n.green/255)+n.green)/2,b:(t.b*(n.blue/255)+n.blue)/2,a:t.a}}}).flat,e.resemble=function(e){var n={},r=[],a=[],o={red:16,green:16,blue:16,alpha:16,minBrightness:16,maxBrightness:240},h=!1,u=!1;function g(){var e,t=a.length;for(e=0;e<t;e++)"function"==typeof a[e]&&a[e](n)}function s(e,t,n){var r,i;for(r=0;r<e;r++)for(i=0;i<t;i++)n(r,i)}function f(e,t){var n,i=new Image;i.onload=function(){var e,n=document.createElement("canvas"),a=i.width,o=i.height;n.width=a,n.height=o,n.getContext("2d").drawImage(i,0,0,a,o),e=n.getContext("2d").getImageData(0,0,a,o),r.push(e),t(e,a,o)},"string"==typeof e?i.src=e:((n=new FileReader).onload=function(e){i.src=e.target.result},n.readAsDataURL(e))}function l(e,t,n){var r=Math.abs(e-t);return void 0!==e&&void 0!==t&&(e===t||r<o[n])}function c(e,t){var n=l(e.a,t.a,"alpha");return l(e.brightness,t.brightness,"minBrightness")&&n}function d(e,t,n){return.3*e+.59*t+.11*n}function m(e,t){var n=e.r===t.r,r=e.g===t.g,i=e.b===t.b;return n&&r&&i}function b(e,t,n,r,i,a){var h,u,g,s,f,l=0,c=0,d=0;for(D(e),u=-1;u<=1;u++)for(g=-1;g<=1;g++)if(0===u&&0===g);else{if(null===(h=w(t,4*((r+g)*a+(i+u)))))continue;if(x(h),D(h),s=e,f=h,Math.abs(s.brightness-f.brightness)>o.maxBrightness&&l++,m(e,h)&&d++,Math.abs(h.h-e.h)>.3&&c++,c>1||l>1)return!0}return d<2}function v(e,t,n,r){var a=i(n,r);e[t]=a.r,e[t+1]=a.g,e[t+2]=a.b,e[t+3]=a.a}function p(e,n,r){e[n]=r.brightness,e[n+1]=r.brightness,e[n+2]=r.brightness,e[n+3]=r.a*t}function w(e,t,n){var r;return void 0!==(r=e[t])?{r,g:e[t+1],b:e[t+2],a:e[t+3]}:null}function x(e){e.brightness=d(e.r,e.g,e.b)}function D(e){e.h=function(e,t,n){e/=255,t/=255,n/=255;var r,i,a=Math.max(e,t,n),o=Math.min(e,t,n);if(a==o)r=0;else{switch(i=a-o,a){case e:r=(t-n)/i+(t<n?6:0);break;case t:r=(n-e)/i+2;break;case n:r=(e-t)/i+4}r/=6}return r}(e.r,e.g,e.b)}function y(e,t,n){var r,i;return e.height<n||e.width<t?((r=document.createElement("canvas")).width=t,r.height=n,(i=r.getContext("2d")).putImageData(e,0,0),i.getImageData(0,0,t,n)):e}function B(i){var d,m="function"==typeof i;m||(d=i);var D={ignoreNothing:function(){return o.red=16,o.green=16,o.blue=16,o.alpha=16,o.minBrightness=16,o.maxBrightness=240,h=!1,u=!1,m&&i(),D},ignoreAntialiasing:function(){return o.red=32,o.green=32,o.blue=32,o.alpha=32,o.minBrightness=64,o.maxBrightness=96,h=!0,u=!1,m&&i(),D},ignoreColors:function(){return o.alpha=16,o.minBrightness=16,o.maxBrightness=240,h=!1,u=!0,m&&i(),D},repaint:function(){return m&&i(),D},onComplete:function(i){a.push(i);var o=function(){!function(i,a){function o(){var e,i;2===r.length&&(e=r[0].width>r[1].width?r[0].width:r[1].width,i=r[0].height>r[1].height?r[0].height:r[1].height,r[0].width===r[1].width&&r[0].height===r[1].height?n.isSameDimensions=!0:n.isSameDimensions=!1,n.dimensionDifference={width:r[0].width-r[1].width,height:r[0].height-r[1].height},function(e,r,i,a){var o=document.createElement("canvas"),g=e.data,f=r.data;o.width=i,o.height=a;var d,m=o.getContext("2d"),D=m.createImageData(i,a),y=D.data,B=0,C=Date.now();(i>1200||a>1200)&&h&&(d=6),s(a,i,function(e,n){if(!d||e%d!=0&&n%d!=0){var r,a,o,s,m,D,C=4*(e*i+n),M=w(g,C),I=w(f,C);if(null!==M&&null!==I)return u?(x(M),x(I),void(c(M,I)?p(y,C,I):(v(y,C,M,I),B++))):(a=I,o=l((r=M).r,a.r,"red"),s=l(r.g,a.g,"green"),m=l(r.b,a.b,"blue"),D=l(r.a,a.a,"alpha"),void(o&&s&&m&&D?function(e,n,r){e[n]=r.r,e[n+1]=r.g,e[n+2]=r.b,e[n+3]=r.a*t}(y,C,M):h&&(x(M),x(I),b(M,g,0,e,n,i)||b(I,f,0,e,n,i))&&c(M,I)?p(y,C,I):(v(y,C,M,I),B++)))}}),n.misMatchPercentage=(B/(a*i)*100).toFixed(2),n.analysisTime=Date.now()-C,n.getImageDataUrl=function(e){var t=0;return e&&(t=function(e,t,n){t.font="12px sans-serif";var r=t.measureText(e).width+4;return r>n.width&&(n.width=r),n.height+=22,t.fillStyle="#666",t.fillRect(0,0,n.width,18),t.fillStyle="#fff",t.fillRect(0,18,n.width,4),t.fillStyle="#fff",t.textBaseline="top",t.font="12px sans-serif",t.fillText(e,2,1),22}(e,m,o)),m.putImageData(D,0,t),o.toDataURL("image/png")}}(y(r[0],e,i),y(r[1],e,i),e,i),g())}r=[],f(e,o),f(a,o)}(0,d)};return o(),B(o)}};return D}return{onComplete:function(t){a.push(t),f(e,function(e,t,r){!function(e,t,r){var i=0,a=0,o=0,h=0,u=0;s(r,t,function(n,r){var g=4*(n*t+r),s=e[g],f=e[g+1],l=e[g+2],c=d(s,f,l);i++,a+=s/255*100,o+=f/255*100,h+=l/255*100,u+=c/255*100}),n.red=Math.floor(a/i),n.green=Math.floor(o/i),n.blue=Math.floor(h/i),n.brightness=Math.floor(u/i),g()}(e.data,t,r)})},compareTo:function(e){return B(e)}}},e.resemble.outputSettings=function(e){var a;if(e.errorColor)for(a in e.errorColor)n[a]=void 0===e.errorColor[a]?n[a]:e.errorColor[a];return e.errorType&&r[e.errorType]&&(i=r[e.errorType]),t=e.transparency||t,this};
})(resourcesUrl);


(function(resourcesUrl){const t={ipad:function(t){return c(t,/iPad/i)},iphone:function(t){return c(t,/iPhone/i)},ios:function(t){return c(t,/iPad|iPhone|iPod/i)},android:function(t){return c(t,/android|sink/i)},phablet:function(t){const n=t.innerWidth,e=t.innerHeight,o=Math.min(n,e),i=Math.max(n,e);return o>390&&o<520&&i>620&&i<800},tablet:function(t){const n=t.innerWidth,e=t.innerHeight,o=Math.min(n,e),i=Math.max(n,e);return o>460&&o<820&&i>780&&i<1400},cordova:i,capacitor:r,electron:function(t){return c(t,/electron/)},pwa:function(t){return t.matchMedia("(display-mode: standalone)").matches},mobile:o,desktop:function(t){return!o(t)},hybrid:function(t){return i(t)||r(t)}};function n(t,n){return function(t){return e(t)}(t).includes(n)}function e(n){n.Ionic=n.Ionic||{};let e=n.Ionic.platforms;if(null==e){e=n.Ionic.platforms=function(n){return Object.keys(t).filter(e=>t[e](n))}(n);const o=n.document.documentElement.classList;e.forEach(t=>o.add(`plt-${t}`))}return e}function o(t){return function(t,n){return t.matchMedia("(any-pointer:coarse)").matches}(t)}function i(t){const n=t;return!!(n.cordova||n.phonegap||n.PhoneGap)}function r(t){const n=t.Capacitor;return!(!n||!n.isNative)}function c(t,n){return n.test(t.navigator.userAgent)}const s=window,u=s.Ionic=s.Ionic||{};Object.defineProperty(u,"queue",{get:()=>Context.queue}),e(s),Context.isPlatform=n;const a=Object.assign({},function(){try{const t=window.sessionStorage.getItem("ionic-persist-config");return t?JSON.parse(t):{}}catch(t){return{}}}(),{persistConfig:!1},u.config,function(){const t={};return window.location.search.slice(1).split("&").map(t=>t.split("=")).map(([t,n])=>[decodeURIComponent(t),decodeURIComponent(n)]).filter(([t])=>(function(n,e){return"ionic:"===t.substr(0,"ionic:".length)})()).map(([t,n])=>[t.slice("ionic:".length),n]).forEach(([n,e])=>{t[n]=e}),t}()),d=u.config=Context.config=new class{constructor(t){this.m=new Map(Object.entries(t))}get(t,n){const e=this.m.get(t);return void 0!==e?e:n}getBoolean(t,n=!1){const e=this.m.get(t);return void 0===e?n:"string"==typeof e?"true"===e:!!e}getNumber(t,n){const e=parseFloat(this.m.get(t));return isNaN(e)?void 0!==n?n:NaN:e}set(t,n){this.m.set(t,n)}}(a);d.getBoolean("persistConfig")&&function(t){try{window.sessionStorage.setItem("ionic-persist-config",JSON.stringify(t))}catch(t){return}}(a);const f=document.documentElement,m=d.get("mode",f.getAttribute("mode")||(n(s,"ios")?"ios":"md"));u.mode=Context.mode=m,d.set("mode",m),f.setAttribute("mode",m),f.classList.add(m);
})(resourcesUrl);
(function(t,n,e,o){"use strict";function i(t,n){return"sc-"+t.t+(n&&n!==E?"-"+n:"")}function c(t,n){return t+(n?"-h":"-s")}function f(t){return{n:t[0],e:t[1],o:!!t[2],i:!!t[3],c:!!t[4]}}function r(t,n){if(A(n)&&"object"!=typeof n&&"function"!=typeof n){if(t===Boolean||3===t)return"false"!==n&&(""===n||!!n);if(t===Number||4===t)return parseFloat(n);if(t===String||2===t)return n.toString()}return n}function s(t,n,e,o){const i=t.f.get(n);i&&((o=i["s-ld"]||i.$activeLoading)&&((e=o.indexOf(n))>-1&&o.splice(e,1),o.length||(i["s-init"]&&i["s-init"](),i.$initLoad&&i.$initLoad())),t.f.delete(n))}function l(t,n){let e,o,i=null,c=!1,f=!1;for(var r=arguments.length;r-- >2;)L.push(arguments[r]);for(;L.length>0;){let n=L.pop();if(n&&void 0!==n.pop)for(r=n.length;r--;)L.push(n[r]);else"boolean"==typeof n&&(n=null),(f="function"!=typeof t)&&(null==n?n="":"number"==typeof n?n=String(n):"string"!=typeof n&&(f=!1)),f&&c?i[i.length-1].vtext+=n:null===i?i=[f?{vtext:n}:n]:i.push(f?{vtext:n}:n),c=f}if(null!=n){if(n.className&&(n.class=n.className),"object"==typeof n.class){for(r in n.class)n.class[r]&&L.push(r);n.class=L.join(" "),L.length=0}null!=n.key&&(e=n.key),null!=n.name&&(o=n.name)}return"function"==typeof t?t(n,i||[],q):{vtag:t,vchildren:i,vtext:void 0,vattrs:n,vkey:e,vname:o,r:void 0,s:!1}}function u(t){return{vtag:t.vtag,vchildren:t.vchildren,vtext:t.vtext,vattrs:t.vattrs,vkey:t.vkey,vname:t.vname}}function a(t,n){t.l.has(n)||(t.l.set(n,!0),t.u?t.queue.write(()=>p(t,n)):t.queue.tick(()=>p(t,n)))}function p(t,n,e,o,i,c){if(t.l.delete(n),!t.a.has(n)){if(o=t.p.get(n),e=!o){if((i=t.f.get(n))&&i.$rendered&&(i["s-rn"]=!0),i&&!i["s-rn"])return(i["s-rc"]=i["s-rc"]||[]).push(()=>{p(t,n)}),void(i.$onRender=i["s-rc"]);o=function f(t,n,e,o,i,c,r){try{o=new(i=t.v(n).d),function s(t,n,e,o,i,c,f){for(f in t.m.set(o,e),t.b.has(e)||t.b.set(e,{}),(c=Object.assign({color:{type:String}},n.properties)).mode={type:String},c)v(t,c[f],e,o,f,i)}(t,i,n,o,e),function l(t,n,e){if(n){const o=t.m.get(e);n.forEach(n=>{e[n.method]={emit:e=>{t.y(o,n.name,{bubbles:n.bubbles,composed:n.composed,cancelable:n.cancelable,detail:e})}}})}}(t,i.events,o);try{if(c=t.g.get(n)){for(r=0;r<c.length;r+=2)o[c[r]](c[r+1]);t.g.delete(n)}}catch(e){t.w(e,2,n)}}catch(e){o={},t.w(e,7,n,!0)}return t.p.set(n,o),o}(t,n,t.M.get(n));try{o.componentWillLoad&&(c=o.componentWillLoad())}catch(e){t.w(e,3,n)}}else try{o.componentWillUpdate&&(c=o.componentWillUpdate())}catch(e){t.w(e,5,n)}c&&c.then?c.then(()=>d(t,n,o,e)):d(t,n,o,e)}}function d(t,n,e,o){(function i(t,n,e,o){try{const i=n.d.host,f=n.d.encapsulation,r="shadow"===f&&t.C.k;let s,u;if(u=r?e.shadowRoot:e,!e["s-rn"]){t.x(t,t.C,n,e);const i=e["s-sc"];i&&(t.C.W(e,c(i,!0)),o.render||t.C.W(e,c(i)))}if(o.render||o.hostData||i||s){t.j=!0;const n=o.render&&o.render();let i;i=o.hostData&&o.hostData(),t.j=!1;const c=t.N.get(e)||{};c.r=u;const s=l(null,i,n);t.N.set(e,t.render(e,c,s,r,f))}e["s-rn"]=!0,e.$onRender&&(e["s-rc"]=e.$onRender),e["s-rc"]&&(e["s-rc"].forEach(t=>t()),e["s-rc"]=null)}catch(n){t.j=!1,t.w(n,8,e,!0)}})(t,t.v(n),n,e);try{o?n["s-init"]():k(t.N.get(n))}catch(e){t.w(e,6,n,!0)}}function v(t,n,e,o,i,c,f,s){if(n.type||n.state){const l=t.b.get(e);n.state||(!n.attr||void 0!==l[i]&&""!==l[i]||(f=c&&c.O)&&A(s=f[n.attr])&&(l[i]=r(n.type,s)),e.hasOwnProperty(i)&&(void 0===l[i]&&(l[i]=r(n.type,e[i])),"mode"!==i&&delete e[i])),o.hasOwnProperty(i)&&void 0===l[i]&&(l[i]=o[i]),n.watchCallbacks&&(l[B+i]=n.watchCallbacks.slice()),b(o,i,function l(n){return(n=t.b.get(t.m.get(this)))&&n[i]},function u(e,o){(o=t.m.get(this))&&(n.state||n.mutable)&&m(t,o,i,e)})}else if(n.elementRef)h(o,i,e);else if(n.method)h(e,i,o[i].bind(o));else if(n.context){const c=t.S(n.context);void 0!==c&&h(o,i,c.A&&c.A(e)||c)}else n.connect&&h(o,i,t.T(n.connect))}function m(t,n,e,o,i,c,f){(i=t.b.get(n))||t.b.set(n,i={});const r=i[e];if(o!==r&&(i[e]=o,c=t.p.get(n))){if(f=i[B+e])for(let t=0;t<f.length;t++)try{c[f[t]].call(c,o,r,e)}catch(t){}!t.j&&n["s-rn"]&&a(t,n)}}function h(t,n,e){Object.defineProperty(t,n,{configurable:!0,value:e})}function b(t,n,e,o){Object.defineProperty(t,n,{configurable:!0,get:e,set:o})}function y(t,n,e,o,i,c,f){if("class"!==e||c)if("style"===e){for(const t in o)i&&null!=i[t]||(/-/.test(t)?n.style.R(t):n.style[t]="");for(const t in i)o&&i[t]===o[t]||(/-/.test(t)?n.style.setProperty(t,i[t]):n.style[t]=i[t])}else if("o"!==e[0]||"n"!==e[1]||!/[A-Z]/.test(e[2])||e in n)if("list"!==e&&"type"!==e&&!c&&(e in n||-1!==["object","function"].indexOf(typeof i)&&null!==i)){const o=t.v(n);o&&o.L&&o.L[e]?w(n,e,i):"ref"!==e&&(w(n,e,null==i?"":i),null!=i&&!1!==i||t.C.q(n,e))}else null!=i&&"key"!==e?function r(t,n,e,o="boolean"==typeof e){const i=n!==(n=n.replace(/^xlink\:?/,""));null==e||o&&(!e||"false"===e)?i?t.removeAttributeNS(D,T(n)):t.removeAttribute(n):"function"!=typeof e&&(e=o?"":e.toString(),i?t.setAttributeNS(D,T(n),e):t.setAttribute(n,e))}(n,e,i):(c||t.C.B(n,e)&&(null==i||!1===i))&&t.C.q(n,e);else e=T(e)in n?T(e.substring(2)):T(e[2])+e.substring(3),i?i!==o&&t.C.D(n,e,i):t.C.P(n,e);else if(o!==i){const t=g(o),e=g(i),c=t.filter(t=>!e.includes(t)),f=g(n.className).filter(t=>!c.includes(t)),r=e.filter(n=>!t.includes(n)&&!f.includes(n));f.push(...r),n.className=f.join(" ")}}function g(t){return null==t||""===t?[]:t.trim().split(/\s+/)}function w(t,n,e){try{t[n]=e}catch(t){}}function M(t,n,e,o,i){const c=11===e.r.nodeType&&e.r.host?e.r.host:e.r,f=n&&n.vattrs||O,r=e.vattrs||O;for(i in f)r&&null!=r[i]||null==f[i]||y(t,c,i,f[i],void 0,o,e.s);for(i in r)i in f&&r[i]===("value"===i||"checked"===i?c[i]:f[i])||y(t,c,i,f[i],r[i],o,e.s)}function $(t,n){function e(i,c,f,r,s,l,p,h,b){if(h=c.vchildren[f],u||(d=!0,"slot"===h.vtag&&(a&&n.W(r,a+"-s"),h.vchildren?h.F=!0:h.H=!0)),A(h.vtext))h.r=n.I(h.vtext);else if(h.H)h.r=n.I("");else{if(l=h.r=P||"svg"===h.vtag?n.U("http://www.w3.org/2000/svg",h.vtag):n.Q(h.F?"slot-fb":h.vtag),P="svg"===h.vtag||"foreignObject"!==h.vtag&&P,M(t,null,h,P),A(a)&&l["s-si"]!==a&&n.W(l,l["s-si"]=a),h.vchildren)for(s=0;s<h.vchildren.length;++s)(p=e(i,h,s,l))&&n.Z(l,p);"svg"===h.vtag&&(P=!1)}return h.r["s-hn"]=v,(h.F||h.H)&&(h.r["s-sr"]=!0,h.r["s-cr"]=m,h.r["s-sn"]=h.vname||"",(b=i&&i.vchildren&&i.vchildren[f])&&b.vtag===h.vtag&&i.r&&o(i.r)),h.r}function o(e,i,c,f){t.z=!0;const l=n.G(e);for(c=l.length-1;c>=0;c--)(f=l[c])["s-hn"]!==v&&f["s-ol"]&&(n.J(f),n.K(s(f),f,r(f)),n.J(f["s-ol"]),f["s-ol"]=null,d=!0),i&&o(f,i);t.z=!1}function i(t,o,i,c,f,s,l,u){const a=t["s-cr"]||t.$defaultHolder;for((l=a&&n.V(a)||t).shadowRoot&&n.X(l)===v&&(l=l.shadowRoot);f<=s;++f)c[f]&&(u=A(c[f].vtext)?n.I(c[f].vtext):e(null,i,f,t))&&(c[f].r=u,n.K(l,u,r(o)))}function c(t,e,i,c){for(;e<=i;++e)A(t[e])&&(c=t[e].r,p=!0,c["s-ol"]?n.J(c["s-ol"]):o(c,!0),n.J(c))}function f(t,n){return t.vtag===n.vtag&&t.vkey===n.vkey&&("slot"!==t.vtag||t.vname===n.vname)}function r(t){return t&&t["s-ol"]?t["s-ol"]:t}function s(t){return n.V(t["s-ol"]?t["s-ol"]:t)}const l=[];let u,a,p,d,v,m;return function h(b,y,g,w,$,k,C,x,W,j,N,E){if(v=n.X(b),m=b["s-cr"],u=w,a=b["s-sc"],d=p=!1,function l(u,a,p){const d=a.r=u.r,v=u.vchildren,m=a.vchildren;P=a.r&&A(n.Y(a.r))&&void 0!==a.r.ownerSVGElement,P="svg"===a.vtag||"foreignObject"!==a.vtag&&P,A(a.vtext)?(p=d["s-cr"]||d.$defaultHolder)?n._(n.V(p),a.vtext):u.vtext!==a.vtext&&n._(d,a.vtext):("slot"!==a.vtag&&M(t,u,a,P),A(v)&&A(m)?function h(t,u,a,p,d,v,m,b){let y=0,g=0,w=u.length-1,M=u[0],$=u[w],k=p.length-1,C=p[0],x=p[k];for(;y<=w&&g<=k;)if(null==M)M=u[++y];else if(null==$)$=u[--w];else if(null==C)C=p[++g];else if(null==x)x=p[--k];else if(f(M,C))l(M,C),M=u[++y],C=p[++g];else if(f($,x))l($,x),$=u[--w],x=p[--k];else if(f(M,x))"slot"!==M.vtag&&"slot"!==x.vtag||o(n.V(M.r)),l(M,x),n.K(t,M.r,n.tt($.r)),M=u[++y],x=p[--k];else if(f($,C))"slot"!==M.vtag&&"slot"!==x.vtag||o(n.V($.r)),l($,C),n.K(t,$.r,M.r),$=u[--w],C=p[++g];else{for(d=null,v=y;v<=w;++v)if(u[v]&&A(u[v].vkey)&&u[v].vkey===C.vkey){d=v;break}A(d)?((b=u[d]).vtag!==C.vtag?m=e(u&&u[g],a,d,t):(l(b,C),u[d]=void 0,m=b.r),C=p[++g]):(m=e(u&&u[g],a,g,t),C=p[++g]),m&&n.K(s(M.r),m,r(M.r))}y>w?i(t,null==p[k+1]?null:p[k+1].r,a,p,g,k):g>k&&c(u,y,w)}(d,v,a,m):A(m)?(A(u.vtext)&&n._(d,""),i(d,null,a,m,0,m.length-1)):A(v)&&c(v,0,v.length-1)),P&&"svg"===a.vtag&&(P=!1)}(y,g),d){for(function t(e,o,i,c,f,r,s,u,a,d){for(f=0,r=(o=n.G(e)).length;f<r;f++){if((i=o[f])["s-sr"]&&(c=i["s-cr"]))for(u=n.G(n.V(c)),a=i["s-sn"],s=u.length-1;s>=0;s--)(c=u[s])["s-cn"]||c["s-nr"]||c["s-hn"]===i["s-hn"]||((3===(d=n.nt(c))||8===d)&&""===a||1===d&&null===n.et(c,"slot")&&""===a||1===d&&n.et(c,"slot")===a)&&(l.some(t=>t.ot===c)||(p=!0,c["s-sn"]=a,l.push({it:i,ot:c})));1===n.nt(i)&&t(i)}}(g.r),C=0;C<l.length;C++)(x=l[C]).ot["s-ol"]||((W=n.I(""))["s-nr"]=x.ot,n.K(n.V(x.ot),x.ot["s-ol"]=W,x.ot));for(t.z=!0,C=0;C<l.length;C++){for(x=l[C],N=n.V(x.it),E=n.tt(x.it),W=x.ot["s-ol"];W=n.ct(W);)if((j=W["s-nr"])&&j&&j["s-sn"]===x.ot["s-sn"]&&N===n.V(j)&&(j=n.tt(j))&&j&&!j["s-nr"]){E=j;break}(!E&&N!==n.V(x.ot)||n.tt(x.ot)!==E)&&x.ot!==E&&(n.J(x.ot),n.K(N,x.ot,E))}t.z=!1}return p&&function t(e,o,i,c,f,r,s,l){for(c=0,f=(i=n.G(e)).length;c<f;c++)if(o=i[c],1===n.nt(o)){if(o["s-sr"])for(s=o["s-sn"],o.hidden=!1,r=0;r<f;r++)if(i[r]["s-hn"]!==o["s-hn"])if(l=n.nt(i[r]),""!==s){if(1===l&&s===n.et(i[r],"slot")){o.hidden=!0;break}}else if(1===l||3===l&&""!==n.ft(i[r]).trim()){o.hidden=!0;break}t(o)}}(g.r),l.length=0,g}}function k(t,n){t&&(t.vattrs&&t.vattrs.ref&&t.vattrs.ref(n?null:t.r),t.vchildren&&t.vchildren.forEach(t=>{k(t,n)}))}function C(t,n,e,o,i){const c=t.nt(n);let f,r,s,l;if(i&&1===c){(r=t.et(n,N))&&(s=r.split("."))[0]===o&&((l={}).vtag=t.X(l.r=n),e.vchildren||(e.vchildren=[]),e.vchildren[s[1]]=l,e=l,i=""!==s[2]);for(let c=0;c<n.childNodes.length;c++)C(t,n.childNodes[c],e,o,i)}else 3===c&&(f=n.previousSibling)&&8===t.nt(f)&&"s"===(s=t.ft(f).split("."))[0]&&s[1]===o&&((l={vtext:t.ft(n)}).r=n,e.vchildren||(e.vchildren=[]),e.vchildren[s[2]]=l)}function x(t,n,e,o){e.connectedCallback=function(){(function e(t,n,o){t.rt.has(o)||(t.rt.set(o,!0),function i(t,n){const e=t.v(n);e.st&&e.st.forEach(e=>{e.o||t.C.D(n,e.n,function o(t,n,e,i){return o=>{(i=t.p.get(n))?i[e](o):((i=t.g.get(n)||[]).push(e,o),t.g.set(n,i))}}(t,n,e.e),e.c,e.i)})}(t,o)),t.a.delete(o),t.lt.has(o)||(t.lt.set(o,!0),o["s-id"]||(o["s-id"]=t.ut()),function c(t,n,e){for(e=n;e=t.C.Y(e);)if(t.at(e)){t.pt.has(n)||(t.f.set(n,e),e.$activeLoading&&(e["s-ld"]=e.$activeLoading),(e["s-ld"]=e["s-ld"]||[]).push(n));break}}(t,o),t.queue.tick(()=>{t.M.set(o,function e(t,n,o,i,c){return o.mode||(o.mode=t.dt(o)),o["s-cr"]||t.et(o,j)||t.k&&1===n.vt||(o["s-cr"]=t.I(""),o["s-cr"]["s-cn"]=!0,t.K(o,o["s-cr"],t.G(o)[0])),t.k||1!==n.vt||(o.shadowRoot=o),1===n.vt&&t.k&&!o.shadowRoot&&t.mt(o,{mode:"open"}),i={ht:o["s-id"],O:{}},n.L&&Object.keys(n.L).forEach(e=>{(c=n.L[e].bt)&&(i.O[c]=t.et(o,c))}),i}(t.C,n,o)),t.yt(n,o)}))})(t,n,this)},e.attributeChangedCallback=function(t,e,o){(function i(t,n,e,o,c,f,s){if(t&&o!==c)for(f in t)if((s=t[f]).bt&&T(s.bt)===T(e)){n[f]=r(s.gt,c);break}})(n.L,this,t,e,o)},e.disconnectedCallback=function(){(function n(t,e){if(!t.z&&function o(t,n){for(;n;){if(!t.V(n))return 9!==t.nt(n);n=t.V(n)}}(t.C,e)){t.a.set(e,!0),s(t,e),k(t.N.get(e),!0),t.C.P(e),t.rt.delete(e);{const n=t.p.get(e);n&&n.componentDidUnload&&n.componentDidUnload()}[t.f,t.wt,t.M].forEach(t=>t.delete(e))}})(t,this)},e["s-init"]=function(){(function n(t,e,o,i,c){if(!t.pt.has(e)&&(i=t.p.get(e))&&!t.a.has(e)&&(!e["s-ld"]||!e["s-ld"].length)){delete e["s-ld"],t.pt.set(e,!0);try{k(t.N.get(e)),(c=t.wt.get(e))&&(c.forEach(t=>t(e)),t.wt.delete(e)),i.componentDidLoad&&i.componentDidLoad()}catch(n){t.w(n,4,e)}t.C.W(e,o),s(t,e)}})(t,this,o)},e.forceUpdate=function(){a(t,this)},function i(t,n,e){n&&Object.keys(n).forEach(o=>{const i=n[o],c=i.Mt;1===c||2===c?b(e,o,function n(){return(t.b.get(this)||{})[o]},function n(e){m(t,this,o,r(i.gt,e))}):6===c&&h(e,o,R)})}(t,n.L,e)}function W(t,n,e,o){return function(){const i=arguments;return function c(t,n,e){let o=n[e];const i=t.$t.body;return i?(o||(o=i.querySelector(e)),o||(o=n[e]=t.Q(e),t.Z(i,o)),o.componentOnReady()):Promise.resolve()}(t,n,e).then(t=>t[o].apply(t,i))}}const j="ssrv",N="ssrc",E="$",O={},S={enter:13,escape:27,space:32,tab:9,left:37,up:38,right:39,down:40},A=t=>null!=t,T=t=>t.toLowerCase(),R=()=>{},L=[],q={forEach:(t,n)=>{t.forEach((t,e,o)=>n(u(t),e,o))},map:(t,n)=>t.map((t,e,o)=>(function i(t){return{vtag:t.vtag,vchildren:t.vchildren,vtext:t.vtext,vattrs:t.vattrs,vkey:t.vkey,vname:t.vname}})(n(u(t),e,o)))},B="wc-",D="http://www.w3.org/1999/xlink";let P=!1;(function F(t,n,e,o,c,r){function s(t,n){if(!e.customElements.get(t.t)){x(y,u[t.t]=t,n.prototype,r);{const e=n.observedAttributes=[];for(const n in t.L)t.L[n].bt&&e.push(t.L[n].bt)}e.customElements.define(t.t,n)}}const u={html:{}},p={},d=e[t]=e[t]||{},v=function m(t,n,e){t.ael||(t.ael=((t,n,e,o)=>t.addEventListener(n,e,o)),t.rel=((t,n,e,o)=>t.removeEventListener(n,e,o)));const o=new WeakMap,i={$t:e,kt:!1,nt:t=>t.nodeType,Q:t=>e.createElement(t),U:(t,n)=>e.createElementNS(t,n),I:t=>e.createTextNode(t),Ct:t=>e.createComment(t),K:(t,n,e)=>t.insertBefore(n,e),J:t=>t.remove(),Z:(t,n)=>t.appendChild(n),W:(t,n)=>t.classList.add(n),G:t=>t.childNodes,V:t=>t.parentNode,tt:t=>t.nextSibling,ct:t=>t.previousSibling,X:t=>T(t.nodeName),ft:t=>t.textContent,_:(t,n)=>t.textContent=n,et:(t,n)=>t.getAttribute(n),xt:(t,n,e)=>t.setAttribute(n,e),Wt:(t,n,e,o)=>t.setAttributeNS(n,e,o),q:(t,n)=>t.removeAttribute(n),B:(t,n)=>t.hasAttribute(n),dt:n=>n.getAttribute("mode")||(t.Context||{}).mode,jt:(t,o)=>"child"===o?t.firstElementChild:"parent"===o?i.Y(t):"body"===o?e.body:"document"===o?e:"window"===o?n:t,D:(n,e,c,f,r,s,l,u)=>{const a=e;let p=n,d=o.get(n);if(d&&d[a]&&d[a](),"string"==typeof s?p=i.jt(n,s):"object"==typeof s?p=s:(u=e.split(":")).length>1&&(p=i.jt(n,u[0]),e=u[1]),!p)return;let v=c;(u=e.split(".")).length>1&&(e=u[0],v=(t=>{t.keyCode===S[u[1]]&&c(t)})),l=i.kt?{capture:!!f,passive:!!r}:!!f,t.ael(p,e,v,l),d||o.set(n,d={}),d[a]=(()=>{p&&t.rel(p,e,v,l),d[a]=null})},P:(t,n)=>{const e=o.get(t);e&&(n?e[n]&&e[n]():Object.keys(e).forEach(t=>{e[t]&&e[t]()}))},mt:(t,n)=>t.attachShadow(n)};i.k=!!i.$t.documentElement.attachShadow,i.Nt=((t,e,o)=>t&&t.dispatchEvent(new n.CustomEvent(e,o)));try{n.addEventListener("e",null,Object.defineProperty({},"passive",{get:()=>i.kt=!0}))}catch(t){}return i.Y=((t,n)=>(n=i.V(t))&&11===i.nt(n)?n.host:n),i}(d,e,o);n.isServer=n.isPrerender=!(n.isClient=!0),n.window=e,n.location=e.location,n.document=o,n.resourcesUrl=n.publicPath=c,n.enableListener=((t,n,e,o,i)=>(function c(t,n,e,o,i,f){if(n){const c=t.m.get(n),r=t.v(c);if(r&&r.st)if(o){const o=r.st.find(t=>t.n===e);o&&t.C.D(c,e,t=>n[o.e](t),o.c,void 0===f?o.i:!!f,i)}else t.C.P(c,e)}})(y,t,n,e,o,i)),n.emit=((t,e,o)=>v.Nt(t,n.eventNameFn?n.eventNameFn(e):e,o)),d.h=l,d.Context=n;const h=e["s-defined"]=e.$definedCmps=e["s-defined"]||e.$definedCmps||{};let b=0;const y={C:v,Et:s,y:n.emit,v:t=>u[v.X(t)],S:t=>n[t],isClient:!0,at:t=>!(!h[v.X(t)]&&!y.v(t)),ut:()=>t+b++,w:(t,n,e)=>void 0,T:t=>(function n(t,e,o){return{create:W(t,e,o,"create"),componentOnReady:W(t,e,o,"componentOnReady")}})(v,p,t),queue:n.queue=function g(t,n){function e(t){for(let n=0;n<t.length;n++)try{t[n](c())}catch(t){}t.length=0}function o(t,n){let e,o=0;for(;o<t.length&&(e=c())<n;)try{t[o++](e)}catch(t){}o===t.length?t.length=0:0!==o&&t.splice(0,o)}function i(){a++,e(s);const n=c()+7*Math.ceil(a*(1/22));o(l,n),o(u,n),l.length>0&&(u.push(...l),l.length=0),(p=s.length+l.length+u.length>0)?t.raf(i):a=0}const c=()=>n.performance.now(),f=Promise.resolve(),r=[],s=[],l=[],u=[];let a=0,p=!1;return t.raf||(t.raf=n.requestAnimationFrame.bind(n)),{tick(t){r.push(t),1===r.length&&f.then(()=>e(r))},read(n){s.push(n),p||(p=!0,t.raf(i))},write(n){l.push(n),p||(p=!0,t.raf(i))}}}(d,e),yt:function w(t,n,e){if(t.d)a(y,n);else{const e="string"==typeof t.Ot?t.Ot:t.Ot[n.mode],o=2===t.vt||1===t.vt&&!v.k;import(c+e+(o?".sc":"")+".js").then(e=>{try{t.d=e[(t=>T(t).split("-").map(t=>t.charAt(0).toUpperCase()+t.slice(1)).join(""))(t.t)],function o(t,n,e,i,c){if(i){const e=n.t+(c||E);if(!n[e]){const o=t.Q("template");n[e]=o,o.innerHTML=`<style>${i}</style>`,t.Z(t.$t.head,o)}}}(v,t,t.vt,t.d.style,t.d.styleMode)}catch(n){t.d=class{}}a(y,n)}).catch(t=>void 0)}},f:new WeakMap,St:new WeakMap,lt:new WeakMap,rt:new WeakMap,pt:new WeakMap,m:new WeakMap,M:new WeakMap,p:new WeakMap,a:new WeakMap,l:new WeakMap,wt:new WeakMap,g:new WeakMap,N:new WeakMap,b:new WeakMap};y.render=$(y,v);const M=v.$t.documentElement;M["s-ld"]=[],M["s-rn"]=!0,M["s-init"]=(()=>{y.pt.set(M,d.loaded=y.u=!0),v.Nt(e,"appload",{detail:{namespace:t}})}),function k(t,n,e){const o=e.querySelectorAll(`[${j}]`),i=o.length;let c,f,r,s,l,u;if(i>0)for(t.pt.set(e,!0),s=0;s<i;s++)for(c=o[s],f=n.et(c,j),(r={}).vtag=n.X(r.r=c),t.N.set(c,r),l=0,u=c.childNodes.length;l<u;l++)C(n,c.childNodes[l],r,f,!0)}(y,v,M),y.x=((t,n,e,o)=>{(function c(t,n,e,o){const c=2===e.vt||1===e.vt&&!t.C.k;let f=e.t+o.mode,r=e[f];if(c&&(o["s-sc"]=i(e,o.mode)),r||(r=e[f=e.t+E],c&&(o["s-sc"]=i(e))),r){let i=n.$t.head;if(n.k)if(1===e.vt)i=o.shadowRoot;else{let t=o;for(;t=n.V(t);)if(t.host&&t.host.shadowRoot){i=t.host.shadowRoot;break}}let c=t.St.get(i);if(c||t.St.set(i,c={}),!c[f]){let t;{t=r.content.cloneNode(!0),c[f]=!0;const e=i.querySelectorAll("[data-styles]");n.K(i,t,e.length&&e[e.length-1].nextSibling||i.firstChild)}}}})(t,n,e,o)}),(d.components||[]).map(t=>{const n=function e(t,n,o){const i={t:t[0],L:{color:{bt:"color"}}};i.Ot=t[1];const c=t[3];if(c)for(n=0;n<c.length;n++)o=c[n],i.L[o[0]]={Mt:o[1],At:!!o[2],bt:"string"==typeof o[3]?o[3]:o[3]?o[0]:0,gt:o[4]};return i.vt=t[4],t[5]&&(i.st=t[5].map(f)),i}(t);return u[n.t]=n}).forEach(t=>s(t,class extends HTMLElement{})),function N(t,n,e,o,i,c){if(n.componentOnReady=((n,e)=>{if(!n.nodeName.includes("-"))return e(null),!1;const o=t.v(n);if(o)if(t.pt.has(n))e(n);else{const o=t.wt.get(n)||[];o.push(e),t.wt.set(n,o)}return!!o}),i){for(c=i.length-1;c>=0;c--)n.componentOnReady(i[c][0],i[c][1])&&i.splice(c,1);for(c=0;c<o.length;c++)if(!e[o[c]].componentOnReady)return;for(c=0;c<i.length;c++)i[c][1](null);i.length=0}}(y,d,e,e["s-apps"],e["s-cr"]),d.initialized=!0})(o,e,t,n,resourcesUrl,hydratedCssClass)})(window,document,Context,namespace);
})({},"App","hydrated");