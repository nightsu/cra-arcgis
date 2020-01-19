(function(){(this||window).webpackJsonpareactgis.registerAbsMids({"esri/geometry/support/normalizeUtils":184,"esri/tasks/geometry/cut":329,"esri/tasks/geometry/simplify":330,"esri/layers/graphics/editingSupport":1147})})(),(this.webpackJsonpareactgis=this.webpackJsonpareactgis||[]).push([[103],{1147:function(e,t,a){var r,n;r=[a.dj.c(e.i),t,a(31),a(32),a(26),a(108),a(91),a(27),a(39),a(28),a(50),a(184)],void 0===(n=function(e,t,a,r,n,i,s,o,u,l,d,p){function c(e,t,i){return r(this,void 0,void 0,(function(){var r,u,l,d;return a(this,(function(a){if(r=t.addFeatures&&t.addFeatures.length||t.updateFeatures&&t.updateFeatures.length||t.deleteFeatures&&t.deleteFeatures.length,u=t.addAttachments&&t.addAttachments.length||t.updateAttachments&&t.updateAttachments.length||t.deleteAttachments&&t.deleteAttachments.length,!t||!r&&!u)throw new o(e.type+"-layer:missing-parameters","'addFeatures', 'updateFeatures', 'deleteFeatures', 'addAttachments', 'updateAttachments' or 'deleteAttachments' parameter is required");if(!e.capabilities.data.isVersioned&&i&&i.gdbVersion)throw new o(e.type+"-layer:invalid-parameter","'gdbVersion' is applicable only if the layer supports versioned data. See: 'capabilities.data.isVersioned'");if(!e.capabilities.editing.supportsRollbackOnFailure&&i&&i.rollbackOnFailureEnabled)throw new o(e.type+"-layer:invalid-parameter","This layer does not support 'rollbackOnFailureEnabled' parameter. See: 'capabilities.editing.supportsRollbackOnFailure'");if(!e.capabilities.editing.supportsGlobalId&&i&&i.globalIdUsed)throw new o(e.type+"-layer:invalid-parameter","This layer does not support 'globalIdUsed' parameter. See: 'capabilities.editing.supportsGlobalId'");if(!e.capabilities.editing.supportsGlobalId&&u)throw new o(e.type+"-layer:invalid-parameter","'addAttachments', 'updateAttachments' and 'deleteAttachments' are applicable only if the layer supports global ids. See: 'capabilities.editing.supportsGlobalId'");if((!i||!i.globalIdUsed)&&u)throw new o(e.type+"-layer:invalid-parameter","When 'addAttachments', 'updateAttachments' or 'deleteAttachments' is specified, globalIdUsed should be set to true");return(l=n({},t)).addFeatures=s.isCollection(l.addFeatures)?l.addFeatures.toArray():l.addFeatures||[],l.updateFeatures=s.isCollection(l.updateFeatures)?l.updateFeatures.toArray():l.updateFeatures||[],l.deleteFeatures=s.isCollection(l.deleteFeatures)?l.deleteFeatures.toArray():l.deleteFeatures||[],l.addAttachments=l.addAttachments||[],l.updateAttachments=l.updateAttachments||[],l.deleteAttachments=l.deleteAttachments||[],l.addFeatures=l.addFeatures.map(m),l.updateFeatures=l.updateFeatures.map(m),d=i&&i.globalIdUsed,l.addFeatures.forEach((function(t){return h(t,e,d)})),l.updateFeatures.forEach((function(t){return h(t,e,d)})),l.deleteFeatures.forEach((function(t){return h(t,e,d)})),l.addAttachments.forEach((function(t){return f(t,e)})),l.updateAttachments.forEach((function(t){return f(t,e)})),[2,g(l)]}))}))}function h(e,t,a){if(a){if("attributes"in e&&!e.attributes[t.globalIdField])throw new o(t.type+"-layer:invalid-parameter","Feature should have 'globalId' when 'globalIdUsed' is true");if(!("attributes"in e||e.globalId))throw new o(t.type+"-layer:invalid-parameter","'globalId' of the feature should be passed when 'globalIdUsed' is true")}}function f(e,t){var a=e.feature,r=e.attachment;if(!a||"attributes"in a&&!a.attributes[t.globalIdField])throw new o(t.type+"-layer:invalid-parameter","Attachment should have reference to a feature with 'globalId'");if(!("attributes"in a||a.globalId))throw new o(t.type+"-layer:invalid-parameter","Attachment should have reference to 'globalId' of the parent feature");if(!r.globalId)throw new o(t.type+"-layer:invalid-parameter","Attachment should have 'globalId'");if(!r.data&&!r.uploadId)throw new o(t.type+"-layer:invalid-parameter","Attachment should have 'data' or 'uploadId'");if(!(r.data instanceof File&&r.data.name||r.name))throw new o(t.type+"-layer:invalid-parameter","'name' is required when attachment is specified as Base64 encoded string using 'data'");if(!t.capabilities.editing.supportsUploadWithItemId&&r.uploadId)throw new o(t.type+"-layer:invalid-parameter","This layer does not support 'uploadId' parameter. See: 'capabilities.editing.supportsUploadWithItemId'");if("string"==typeof r.data){var n=d.dataComponents(r.data);if(n&&!n.isBase64)throw new o(t.type+"-layer:invalid-parameter","Attachment 'data' should be a Blob, File or Base64 encoded string")}}function g(e){return r(this,void 0,void 0,(function(){var t,r,n,i,s,o;return a(this,(function(a){switch(a.label){case 0:return t=e.addFeatures,r=e.updateFeatures,n=t.concat(r).map((function(e){return e.geometry})),[4,p.normalizeCentralMeridian(n)];case 1:return i=a.sent(),s=t.length,o=r.length,i.slice(0,s).forEach((function(t,a){e.addFeatures[a].geometry=t})),i.slice(s,s+o).forEach((function(t,a){e.updateFeatures[a].geometry=t})),[2,e]}}))}))}function m(e){var t=new i;return e.attributes||(e.attributes={}),t.geometry=e.geometry,t.attributes=e.attributes,t}Object.defineProperty(t,"__esModule",{value:!0}),t.isEditableLayer=function(e){return!0===e.get("capabilities.operations.supportsEditing")},t.applyEdits=function(e,t,n){return r(this,void 0,void 0,(function(){var r,i,s,d,p,h,f,g,m;return a(this,(function(a){switch(a.label){case 0:return s={edits:t,result:l.create((function(e,t){r=e,i=t}))},e.emit("apply-edits",s),[4,e.load()];case 1:if(a.sent(),!function(e){return e&&null!=e.applyEdits}(d=e.source))return[2,l.reject(new o(e.type+"-layer:no-editing-support","Layer source does not support applyEdits capability",{layer:e}))];if(!e.editingEnabled)throw new o(e.type+"-layer:editing-disabled","Editing is disabled for layer",{layer:e});return[4,c(e,t,n)];case 2:p=a.sent(),a.label=3;case 3:return a.trys.push([3,5,,6]),[4,d.applyEdits(p,n)];case 4:return h=a.sent(),((g={addedFeatures:(f=function(e){return e.filter((function(e){return!e.error})).map(u.clone)})(h.addFeatureResults),updatedFeatures:f(h.updateFeatureResults),deletedFeatures:f(h.deleteFeatureResults),addedAttachments:f(h.addAttachmentResults),updatedAttachments:f(h.updateAttachmentResults),deletedAttachments:f(h.deleteAttachmentResults)}).addedFeatures.length||g.updatedFeatures.length||g.deletedFeatures.length||g.addedAttachments.length||g.updatedAttachments.length||g.deletedAttachments.length)&&e.emit("edits",g),r(g),[2,h];case 5:throw m=a.sent(),i(m),m;case 6:return[2]}}))}))}}.apply(null,r))||(e.exports=n)},184:function(e,t,a){var r,n;r=[a.dj.c(e.i),t,a(31),a(32),a(6),a(27),a(24),a(33),a(28),a(288),a(305),a(59),a(81),a(164),a(329),a(330)],void 0===(n=function(e,t,a,r,n,i,s,o,u,l,d,p,c,h,f,g){function m(e){return"polygon"===e.type}function y(e){return"polygon"===e[0].type}function v(e){return"polyline"===e[0].type}function b(e){return m(e)?e.rings:e.paths}function w(e,t){return Math.ceil((e-t)/(2*t))}function F(e,t){for(var a=0,r=b(e);a<r.length;a++)for(var n=0,i=r[a];n<i.length;n++){i[n][0]+=t}return e}function A(e){for(var t=[],a=0,r=0,n=0;n<e.length;n++){for(var i=e[n],s=null,o=0;o<i.length;o++)s=i[o],t.push(s),0===o?r=a=s[0]:(a=Math.min(a,s[0]),r=Math.max(r,s[0]));s&&t.push([(a+r)/2,0])}return t}function x(e,t){if(!(e instanceof d||e instanceof l)){var a="straightLineDensify: the input geometry is neither polyline nor polygon";throw E.error(a),new i(a)}for(var r=[],n=0,s=b(e);n<s.length;n++){var o=s[n],u=[];r.push(u),u.push([o[0][0],o[0][1]]);for(var p=0;p<o.length-1;p++){var c=o[p][0],h=o[p][1],f=o[p+1][0],g=o[p+1][1],y=Math.sqrt((f-c)*(f-c)+(g-h)*(g-h)),v=(g-h)/y,w=(f-c)/y,F=y/t;if(F>1){for(var A=1;A<=F-1;A++){var x=A*t,I=w*x+c,R=v*x+h;u.push([I,R])}var M=(y+Math.floor(F-1)*t)/2,O=w*M+c,S=v*M+h;u.push([O,S])}u.push([f,g])}}return m(e)?new l({rings:r,spatialReference:e.spatialReference}):new d({paths:r,spatialReference:e.spatialReference})}function I(e,t,a){if(t){var r=x(e,1e6);e=h.webMercatorToGeographic(r,!0)}return a&&(e=F(e,a)),e}function R(e,t,a){var r;if(Array.isArray(e)){if((r=e[0])>t){var n=w(r,t);e[0]=r+n*(-2*t)}else if(r<a){n=w(r,a);e[0]=r+n*(-2*a)}}else if((r=e.x)>t){n=w(r,t);e=e.clone().offset(n*(-2*t),0)}else if(r<a){n=w(r,a);e=e.clone().offset(n*(-2*a),0)}return e}function M(e,t){for(var a=-1,r=0;r<t.cutIndexes.length;r++)!function(r){for(var n=t.cutIndexes[r],i=t.geometries[r],s=b(i),o=0;o<s.length;o++)!function(e){var t=s[e];t.some((function(a){if(a[0]<180)return!0;for(var r=0,n=0;n<t.length;n++){var s=t[n][0];r=s>r?s:r}for(var o=-360*w(r=Number(r.toFixed(9)),180),u=0;u<t.length;u++){var l=i.getPoint(e,u);i.setPoint(e,u,l.clone().offset(o,0))}return!0}))}(o);if(n===a){if(y(e))for(var u=0,l=b(i);u<l.length;u++){var d=l[u];e[n]=e[n].addRing(d)}else if(v(e))for(var p=0,c=b(i);p<c.length;p++){var h=c[p];e[n]=e[n].addPath(h)}}else a=n,e[n]=i}(r);return e}Object.defineProperty(t,"__esModule",{value:!0});var E=s.getLogger("esri.geometry.support.normalizeUtils"),O={102100:{maxX:20037508.342788905,minX:-20037508.342788905,plus180Line:new d({paths:[[[20037508.342788905,-20037508.342788905],[20037508.342788905,20037508.342788905]]],spatialReference:p.WebMercator}),minus180Line:new d({paths:[[[-20037508.342788905,-20037508.342788905],[-20037508.342788905,20037508.342788905]]],spatialReference:p.WebMercator})},4326:{maxX:180,minX:-180,plus180Line:new d({paths:[[[180,-180],[180,180]]],spatialReference:p.WGS84}),minus180Line:new d({paths:[[[-180,-180],[-180,180]]],spatialReference:p.WGS84})}};t.straightLineDensify=x,t.normalizeCentralMeridian=function e(t,i,s){return r(this,void 0,void 0,(function(){var r,p,m,y,v,b,A,x,E,S,T,J,j,k,U,L,W,N,_,G,P,q,z,X,C,B,V,D,H,K,Q,Y,Z,$,ee,te,ae;return a(this,(function(a){switch(a.label){case 0:if(!Array.isArray(t))return[2,e([t],i)];for(r=i?i.url:n.geometryServiceUrl,S=0,T=[],J=[],j=0,k=t;j<k.length;j++)U=k[j],o.isNone(U)?J.push(U):(p||(p=U.spatialReference,m=c.getInfo(p),y=p.isWebMercator,v=O[A=y?102100:4326].maxX,b=O[A].minX,x=O[A].plus180Line,E=O[A].minus180Line),m?"mesh"===U.type?J.push(U):"point"===U.type?J.push(R(U.clone(),v,b)):"multipoint"===U.type?((L=U.clone()).points=L.points.map((function(e){return R(e,v,b)})),J.push(L)):"extent"===U.type?(N=U.clone(),W=N._normalize(!1,!1,m),J.push(W.rings?new l(W):W)):U.extent?(N=U.extent,_=w(N.xmin,b),P=0===(G=_*(2*v))?U.clone():F(U.clone(),G),N.offset(G,0),N.intersects(x)&&N.xmax!==v?(S=N.xmax>S?N.xmax:S,P=I(P,y),T.push(P),J.push("cut")):N.intersects(E)&&N.xmin!==b?(S=N.xmax*(2*v)>S?N.xmax*(2*v):S,P=I(P,y,360),T.push(P),J.push("cut")):J.push(P)):J.push(U.clone()):J.push(U));for(q=w(S,v),z=-90,X=q,C=new d;q>0;)B=360*q-180,C.addPath([[B,z],[B,-1*z]]),z*=-1,q--;return T.length>0&&X>0?[4,f.cut(r,T,C,s)]:[3,3];case 1:for(V=a.sent(),D=M(T,V),H=[],K=[],ee=0;ee<J.length;ee++)"cut"!==(te=J[ee])?K.push(te):(ae=D.shift(),Q=t[ee],o.isSome(Q)&&"polygon"===Q.type&&Q.rings&&Q.rings.length>1&&ae.rings.length>=Q.rings.length?(H.push(ae),K.push("simplify")):K.push(y?h.geographicToWebMercator(ae):ae));return H.length?[4,g.simplify(r,H,s)]:[2,K];case 2:for(Y=a.sent(),Z=[],ee=0;ee<K.length;ee++)"simplify"!==(te=K[ee])?Z.push(te):Z.push(y?h.geographicToWebMercator(Y.shift()):Y.shift());return[2,Z];case 3:for($=[],ee=0;ee<J.length;ee++)"cut"!==(te=J[ee])?$.push(te):(ae=T.shift(),$.push(!0===y?h.geographicToWebMercator(ae):ae));return[2,u.resolve($)]}}))}))},t.getDenormalizedExtent=function(e){var t;if(!e)return null;var a=e.extent;if(!a)return null;var r=e.spatialReference&&c.getInfo(e.spatialReference);if(!r)return a;var n,i=r.valid,s=i[0],o=i[1],u=2*o,l=a.width,d=a.xmin,p=a.xmax;if(d=(t=[p,d])[0],p=t[1],"extent"===e.type||0===l||l<=o||l>u||d<s||p>o)return a;switch(e.type){case"polygon":if(!(e.rings.length>1))return a;n=A(e.rings);break;case"polyline":if(!(e.paths.length>1))return a;n=A(e.paths);break;case"multipoint":n=e.points}for(var h=a.clone(),f=0;f<n.length;f++){var g=n[f][0];g<0?(g+=o,p=Math.max(g,p)):(g-=o,d=Math.min(g,d))}return h.xmin=d,h.xmax=p,h.width<l?(h.xmin-=o,h.xmax-=o,h):a},t.normalizeMapX=function(e,t){var a=c.getInfo(t);if(a){var r=a.valid,n=r[0],i=r[1],s=i-n;if(e<n)for(;e<n;)e+=s;if(e>i)for(;e>i;)e-=s}return e}}.apply(null,r))||(e.exports=n)},329:function(e,t,a){var r,n;r=[a.dj.c(e.i),t,a(26),a(32),a(31),a(48),a(51),a(50),a(40)],void 0===(n=function(e,t,a,r,n,i,s,o,u){Object.defineProperty(t,"__esModule",{value:!0}),t.cut=function(e,t,l,d){return r(this,void 0,void 0,(function(){var r,p,c,h,f,g,m;return n(this,(function(n){switch(n.label){case 0:return r="string"==typeof e?o.urlToObject(e):e,p=t[0].spatialReference,c=a({},d,{query:a({},r.query,{f:"json",sr:JSON.stringify(p),target:JSON.stringify({geometryType:u.getJsonType(t[0]),geometries:t}),cutter:JSON.stringify(l)})}),[4,s(r.path+"/cut",c)];case 1:return h=n.sent(),f=h.data,g=f.cutIndexes,m=f.geometries,[2,{cutIndexes:g,geometries:(void 0===m?[]:m).map((function(e){return i.fromJSON(e).set(p)}))}]}}))}))}}.apply(null,r))||(e.exports=n)},330:function(e,t,a){var r,n;r=[a.dj.c(e.i),t,a(26),a(32),a(31),a(51),a(50),a(40)],void 0===(n=function(e,t,a,r,n,i,s,o){function u(e){return{geometryType:o.getJsonType(e[0]),geometries:e.map((function(e){return e.toJSON()}))}}function l(e,t,a){var r=o.getGeometryType(t);return e.map((function(e){var t=r.fromJSON(e);return t.spatialReference=a,t}))}Object.defineProperty(t,"__esModule",{value:!0}),t.simplify=function(e,t,d){return r(this,void 0,void 0,(function(){var r,p,c,h;return n(this,(function(n){switch(n.label){case 0:return r="string"==typeof e?s.urlToObject(e):e,p=t[0].spatialReference,c=o.getJsonType(t[0]),h=a({},d,{query:a({},r.query,{f:"json",sr:p.wkid?p.wkid:JSON.stringify(p),geometries:JSON.stringify(u(t))})}),[4,i(r.path+"/simplify",h)];case 1:return[2,l(n.sent().data,c,p)]}}))}))}}.apply(null,r))||(e.exports=n)}}]);
//# sourceMappingURL=103.e73ae019.chunk.js.map