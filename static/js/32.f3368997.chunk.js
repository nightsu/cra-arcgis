(function(){(this||window).webpackJsonpareactgis.registerAbsMids({"esri/layers/support/Field":112,"esri/geometry/support/normalizeUtils":184,"esri/tasks/support/FeatureSet":185,"esri/tasks/geometry/cut":329,"esri/tasks/geometry/simplify":330,"esri/tasks/support/GPMessage":537,"esri/core/queryUtils":621,"esri/tasks/mixins/NAServiceDescription":622,"esri/tasks/support/NAMessage":623,"esri/tasks/support/DirectionsFeatureSet":859})})(),(this.webpackJsonpareactgis=this.webpackJsonpareactgis||[]).push([[32,122],{112:function(e,t,r){var n,o;n=[r.dj.c(e.i),t,r(22),r(20),r(47),r(34),r(23),r(54),r(354),r(360)],void 0===(o=function(e,t,r,n,o,i,s,a,u,p){var l=new o.default({binary:"binary",coordinate:"coordinate",countOrAmount:"count-or-amount",dateAndTime:"date-and-time",description:"description",locationOrPlaceName:"location-or-place-name",measurement:"measurement",nameOrTitle:"name-or-title",none:"none",orderedOrRanked:"ordered-or-ranked",percentageOrRatio:"percentage-or-ratio",typeOrCategory:"type-or-category",uniqueIdentifier:"unique-identifier"});return function(e){function t(t){var r=e.call(this,t)||this;return r.alias=null,r.defaultValue=void 0,r.description=null,r.domain=null,r.editable=!0,r.length=-1,r.name=null,r.nullable=!0,r.type=null,r.valueType=null,r}var o;return r(t,e),o=t,t.prototype.readDescription=function(e,t){var r,n=t.description;try{r=JSON.parse(n)}catch(e){}return r?r.value:null},t.prototype.readValueType=function(e,t){var r,n=t.description;try{r=JSON.parse(n)}catch(e){}return r?l.fromJSON(r.fieldValueType):null},t.prototype.clone=function(){return new o({alias:this.alias,defaultValue:this.defaultValue,description:this.description,domain:this.domain&&this.domain.clone()||null,editable:this.editable,length:this.length,name:this.name,nullable:this.nullable,type:this.type,valueType:this.valueType})},n([s.property({type:String,json:{write:!0}})],t.prototype,"alias",void 0),n([s.property({type:[String,Number],json:{write:{allowNull:!0}}})],t.prototype,"defaultValue",void 0),n([s.property()],t.prototype,"description",void 0),n([s.reader("description")],t.prototype,"readDescription",null),n([s.property({types:u.types,json:{read:{reader:u.fromJSON},write:!0}})],t.prototype,"domain",void 0),n([s.property({type:Boolean,json:{write:!0}})],t.prototype,"editable",void 0),n([s.property({type:a.Integer,json:{write:!0}})],t.prototype,"length",void 0),n([s.property({type:String,json:{write:!0}})],t.prototype,"name",void 0),n([s.property({type:Boolean,json:{write:!0}})],t.prototype,"nullable",void 0),n([s.enumeration.serializable()(p.kebabDict)],t.prototype,"type",void 0),n([s.property()],t.prototype,"valueType",void 0),n([s.reader("valueType",["description"])],t.prototype,"readValueType",null),o=n([s.subclass("esri.layers.support.Field")],t)}(s.declared(i.JSONSupport))}.apply(null,n))||(e.exports=o)},184:function(e,t,r){var n,o;n=[r.dj.c(e.i),t,r(31),r(32),r(6),r(27),r(24),r(33),r(28),r(288),r(305),r(59),r(81),r(164),r(329),r(330)],void 0===(o=function(e,t,r,n,o,i,s,a,u,p,l,c,f,y,d,v){function h(e){return"polygon"===e.type}function m(e){return"polygon"===e[0].type}function g(e){return"polyline"===e[0].type}function w(e){return h(e)?e.rings:e.paths}function T(e,t){return Math.ceil((e-t)/(2*t))}function x(e,t){for(var r=0,n=w(e);r<n.length;r++)for(var o=0,i=n[r];o<i.length;o++){i[o][0]+=t}return e}function S(e){for(var t=[],r=0,n=0,o=0;o<e.length;o++){for(var i=e[o],s=null,a=0;a<i.length;a++)s=i[a],t.push(s),0===a?n=r=s[0]:(r=Math.min(r,s[0]),n=Math.max(n,s[0]));s&&t.push([(r+n)/2,0])}return t}function b(e,t){if(!(e instanceof l||e instanceof p)){var r="straightLineDensify: the input geometry is neither polyline nor polygon";throw N.error(r),new i(r)}for(var n=[],o=0,s=w(e);o<s.length;o++){var a=s[o],u=[];n.push(u),u.push([a[0][0],a[0][1]]);for(var c=0;c<a.length-1;c++){var f=a[c][0],y=a[c][1],d=a[c+1][0],v=a[c+1][1],m=Math.sqrt((d-f)*(d-f)+(v-y)*(v-y)),g=(v-y)/m,T=(d-f)/m,x=m/t;if(x>1){for(var S=1;S<=x-1;S++){var b=S*t,M=T*b+f,j=g*b+y;u.push([M,j])}var O=(m+Math.floor(x-1)*t)/2,J=T*O+f,R=g*O+y;u.push([J,R])}u.push([d,v])}}return h(e)?new p({rings:n,spatialReference:e.spatialReference}):new l({paths:n,spatialReference:e.spatialReference})}function M(e,t,r){if(t){var n=b(e,1e6);e=y.webMercatorToGeographic(n,!0)}return r&&(e=x(e,r)),e}function j(e,t,r){var n;if(Array.isArray(e)){if((n=e[0])>t){var o=T(n,t);e[0]=n+o*(-2*t)}else if(n<r){o=T(n,r);e[0]=n+o*(-2*r)}}else if((n=e.x)>t){o=T(n,t);e=e.clone().offset(o*(-2*t),0)}else if(n<r){o=T(n,r);e=e.clone().offset(o*(-2*r),0)}return e}function O(e,t){for(var r=-1,n=0;n<t.cutIndexes.length;n++)!function(n){for(var o=t.cutIndexes[n],i=t.geometries[n],s=w(i),a=0;a<s.length;a++)!function(e){var t=s[e];t.some((function(r){if(r[0]<180)return!0;for(var n=0,o=0;o<t.length;o++){var s=t[o][0];n=s>n?s:n}for(var a=-360*T(n=Number(n.toFixed(9)),180),u=0;u<t.length;u++){var p=i.getPoint(e,u);i.setPoint(e,u,p.clone().offset(a,0))}return!0}))}(a);if(o===r){if(m(e))for(var u=0,p=w(i);u<p.length;u++){var l=p[u];e[o]=e[o].addRing(l)}else if(g(e))for(var c=0,f=w(i);c<f.length;c++){var y=f[c];e[o]=e[o].addPath(y)}}else r=o,e[o]=i}(n);return e}Object.defineProperty(t,"__esModule",{value:!0});var N=s.getLogger("esri.geometry.support.normalizeUtils"),J={102100:{maxX:20037508.342788905,minX:-20037508.342788905,plus180Line:new l({paths:[[[20037508.342788905,-20037508.342788905],[20037508.342788905,20037508.342788905]]],spatialReference:c.WebMercator}),minus180Line:new l({paths:[[[-20037508.342788905,-20037508.342788905],[-20037508.342788905,20037508.342788905]]],spatialReference:c.WebMercator})},4326:{maxX:180,minX:-180,plus180Line:new l({paths:[[[180,-180],[180,180]]],spatialReference:c.WGS84}),minus180Line:new l({paths:[[[-180,-180],[-180,180]]],spatialReference:c.WGS84})}};t.straightLineDensify=b,t.normalizeCentralMeridian=function e(t,i,s){return n(this,void 0,void 0,(function(){var n,c,h,m,g,w,S,b,N,R,P,_,k,A,D,G,I,q,F,z,L,E,U,V,C,W,Z,X,B,Q,H,$,K,Y,ee,te,re;return r(this,(function(r){switch(r.label){case 0:if(!Array.isArray(t))return[2,e([t],i)];for(n=i?i.url:o.geometryServiceUrl,R=0,P=[],_=[],k=0,A=t;k<A.length;k++)D=A[k],a.isNone(D)?_.push(D):(c||(c=D.spatialReference,h=f.getInfo(c),m=c.isWebMercator,g=J[S=m?102100:4326].maxX,w=J[S].minX,b=J[S].plus180Line,N=J[S].minus180Line),h?"mesh"===D.type?_.push(D):"point"===D.type?_.push(j(D.clone(),g,w)):"multipoint"===D.type?((G=D.clone()).points=G.points.map((function(e){return j(e,g,w)})),_.push(G)):"extent"===D.type?(q=D.clone(),I=q._normalize(!1,!1,h),_.push(I.rings?new p(I):I)):D.extent?(q=D.extent,F=T(q.xmin,w),L=0===(z=F*(2*g))?D.clone():x(D.clone(),z),q.offset(z,0),q.intersects(b)&&q.xmax!==g?(R=q.xmax>R?q.xmax:R,L=M(L,m),P.push(L),_.push("cut")):q.intersects(N)&&q.xmin!==w?(R=q.xmax*(2*g)>R?q.xmax*(2*g):R,L=M(L,m,360),P.push(L),_.push("cut")):_.push(L)):_.push(D.clone()):_.push(D));for(E=T(R,g),U=-90,V=E,C=new l;E>0;)W=360*E-180,C.addPath([[W,U],[W,-1*U]]),U*=-1,E--;return P.length>0&&V>0?[4,d.cut(n,P,C,s)]:[3,3];case 1:for(Z=r.sent(),X=O(P,Z),B=[],Q=[],ee=0;ee<_.length;ee++)"cut"!==(te=_[ee])?Q.push(te):(re=X.shift(),H=t[ee],a.isSome(H)&&"polygon"===H.type&&H.rings&&H.rings.length>1&&re.rings.length>=H.rings.length?(B.push(re),Q.push("simplify")):Q.push(m?y.geographicToWebMercator(re):re));return B.length?[4,v.simplify(n,B,s)]:[2,Q];case 2:for($=r.sent(),K=[],ee=0;ee<Q.length;ee++)"simplify"!==(te=Q[ee])?K.push(te):K.push(m?y.geographicToWebMercator($.shift()):$.shift());return[2,K];case 3:for(Y=[],ee=0;ee<_.length;ee++)"cut"!==(te=_[ee])?Y.push(te):(re=P.shift(),Y.push(!0===m?y.geographicToWebMercator(re):re));return[2,u.resolve(Y)]}}))}))},t.getDenormalizedExtent=function(e){var t;if(!e)return null;var r=e.extent;if(!r)return null;var n=e.spatialReference&&f.getInfo(e.spatialReference);if(!n)return r;var o,i=n.valid,s=i[0],a=i[1],u=2*a,p=r.width,l=r.xmin,c=r.xmax;if(l=(t=[c,l])[0],c=t[1],"extent"===e.type||0===p||p<=a||p>u||l<s||c>a)return r;switch(e.type){case"polygon":if(!(e.rings.length>1))return r;o=S(e.rings);break;case"polyline":if(!(e.paths.length>1))return r;o=S(e.paths);break;case"multipoint":o=e.points}for(var y=r.clone(),d=0;d<o.length;d++){var v=o[d][0];v<0?(v+=a,c=Math.max(v,c)):(v-=a,l=Math.min(v,l))}return y.xmin=l,y.xmax=c,y.width<p?(y.xmin-=a,y.xmax-=a,y):r},t.normalizeMapX=function(e,t){var r=f.getInfo(t);if(r){var n=r.valid,o=n[0],i=n[1],s=i-o;if(e<o)for(;e<o;)e+=s;if(e>i)for(;e>i;)e-=s}return e}}.apply(null,n))||(e.exports=o)},185:function(e,t,r){var n,o;n=[r.dj.c(e.i),t,r(20),r(22),r(48),r(108),r(47),r(34),r(33),r(23),r(59),r(40),r(112)],void 0===(o=function(e,t,r,n,o,i,s,a,u,p,l,c,f){var y=new s.default({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryEnvelope:"extent"}),d=function(e){function t(t){var r=e.call(this,t)||this;return r.displayFieldName=null,r.exceededTransferLimit=!1,r.features=[],r.fields=null,r.geometryType=null,r.hasM=!1,r.hasZ=!1,r.queryGeometry=null,r.spatialReference=null,r}return n(t,e),t.prototype.readFeatures=function(e,t){for(var r=l.fromJSON(t.spatialReference),n=[],o=0;o<e.length;o++){var s=e[o],a=i.fromJSON(s),p=s.geometry&&s.geometry.spatialReference;u.isSome(a.geometry)&&!p&&(a.geometry.spatialReference=r),n.push(a)}return n},t.prototype.writeGeometryType=function(e,t,r,n){if(e)y.write(e,t,r,n);else{var o=this.features;if(o)for(var i=0,s=o;i<s.length;i++){var a=s[i];if(a&&u.isSome(a.geometry))return void y.write(a.geometry.type,t,r,n)}}},t.prototype.writeSpatialReference=function(e,t){if(e)t.spatialReference=e.toJSON();else{var r=this.features;if(r)for(var n=0,o=r;n<o.length;n++){var i=o[n];i&&u.isSome(i.geometry)&&i.geometry.spatialReference&&(t.spatialReference=i.geometry.spatialReference.toJSON())}}},t.prototype.toJSON=function(e){var t=this.write(null);if(t.features&&Array.isArray(e)&&e.length>0)for(var r=0;r<t.features.length;r++){var n=t.features[r];if(n.geometry){var o=e&&e[r];n.geometry=o&&o.toJSON()||n.geometry}}return t},t.prototype.quantize=function(e){for(var t=e.scale,r=t[0],n=t[1],o=e.translate,i=o[0],s=o[1],a=this.features,p=this._getQuantizationFunction(this.geometryType,(function(e){return Math.round((e-i)/r)}),(function(e){return Math.round((s-e)/n)})),l=0,c=a.length;l<c;l++)p(u.expect(a[l].geometry))||(a.splice(l,1),l--,c--);return this.transform=e,this},t.prototype.unquantize=function(){var e=this,t=e.geometryType,r=e.features,n=e.transform;if(!n)return this;for(var o=n.translate,i=o[0],s=o[1],a=n.scale,p=a[0],l=a[1],c=this._getHydrationFunction(t,(function(e){return e*p+i}),(function(e){return s-e*l})),f=0,y=r;f<y.length;f++){var d=y[f].geometry;u.isSome(d)&&c(d)}return this},t.prototype._quantizePoints=function(e,t,r){for(var n,o,i=[],s=0,a=e.length;s<a;s++){var u=e[s];if(s>0){var p=t(u[0]),l=r(u[1]);p===n&&l===o||(i.push([p-n,l-o]),n=p,o=l)}else n=t(u[0]),o=r(u[1]),i.push([n,o])}return i.length>0?i:null},t.prototype._getQuantizationFunction=function(e,t,r){var n=this;return"point"===e?function(e){return e.x=t(e.x),e.y=r(e.y),e}:"polyline"===e||"polygon"===e?function(e){for(var o=c.isPolygon(e)?e.rings:e.paths,i=[],s=0,a=o.length;s<a;s++){var u=o[s],p=n._quantizePoints(u,t,r);p&&i.push(p)}return i.length>0?(c.isPolygon(e)?e.rings=i:e.paths=i,e):null}:"multipoint"===e?function(e){var o;return(o=n._quantizePoints(e.points,t,r)).length>0?(e.points=o,e):null}:"extent"===e?function(e){return e}:null},t.prototype._getHydrationFunction=function(e,t,r){return"point"===e?function(e){e.x=t(e.x),e.y=r(e.y)}:"polyline"===e||"polygon"===e?function(e){for(var n,o,i=c.isPolygon(e)?e.rings:e.paths,s=0,a=i.length;s<a;s++)for(var u=i[s],p=0,l=u.length;p<l;p++){var f=u[p];p>0?(n+=f[0],o+=f[1]):(n=f[0],o=f[1]),f[0]=t(n),f[1]=r(o)}}:"extent"===e?function(e){e.xmin=t(e.xmin),e.ymin=r(e.ymin),e.xmax=t(e.xmax),e.ymax=r(e.ymax)}:"multipoint"===e?function(e){for(var n,o,i=e.points,s=0,a=i.length;s<a;s++){var u=i[s];s>0?(n+=u[0],o+=u[1]):(n=u[0],o=u[1]),u[0]=t(n),u[1]=r(o)}}:void 0},r([p.property({type:String,json:{write:!0}})],t.prototype,"displayFieldName",void 0),r([p.property({type:Boolean,json:{write:{overridePolicy:function(e){return{enabled:e}}}}})],t.prototype,"exceededTransferLimit",void 0),r([p.property({type:[i],json:{write:!0}})],t.prototype,"features",void 0),r([p.reader("features")],t.prototype,"readFeatures",null),r([p.property({type:[f],json:{write:!0}})],t.prototype,"fields",void 0),r([p.property({type:["point","multipoint","polyline","polygon","extent","mesh"],json:{read:{reader:y.read}}})],t.prototype,"geometryType",void 0),r([p.writer("geometryType")],t.prototype,"writeGeometryType",null),r([p.property({type:Boolean,json:{write:{overridePolicy:function(e){return{enabled:e}}}}})],t.prototype,"hasM",void 0),r([p.property({type:Boolean,json:{write:{overridePolicy:function(e){return{enabled:e}}}}})],t.prototype,"hasZ",void 0),r([p.property({types:o.geometryTypes,json:{read:c.fromJSON,write:!0}})],t.prototype,"queryGeometry",void 0),r([p.property({type:l,json:{write:!0}})],t.prototype,"spatialReference",void 0),r([p.writer("spatialReference")],t.prototype,"writeSpatialReference",null),r([p.property({json:{write:!0}})],t.prototype,"transform",void 0),r([p.subclass("esri.tasks.support.FeatureSet")],t)}(p.declared(a.JSONSupport));return d.prototype.toJSON.isDefaultToJSON=!0,d||(d={}),d}.apply(null,n))||(e.exports=o)},329:function(e,t,r){var n,o;n=[r.dj.c(e.i),t,r(26),r(32),r(31),r(48),r(51),r(50),r(40)],void 0===(o=function(e,t,r,n,o,i,s,a,u){Object.defineProperty(t,"__esModule",{value:!0}),t.cut=function(e,t,p,l){return n(this,void 0,void 0,(function(){var n,c,f,y,d,v,h;return o(this,(function(o){switch(o.label){case 0:return n="string"==typeof e?a.urlToObject(e):e,c=t[0].spatialReference,f=r({},l,{query:r({},n.query,{f:"json",sr:JSON.stringify(c),target:JSON.stringify({geometryType:u.getJsonType(t[0]),geometries:t}),cutter:JSON.stringify(p)})}),[4,s(n.path+"/cut",f)];case 1:return y=o.sent(),d=y.data,v=d.cutIndexes,h=d.geometries,[2,{cutIndexes:v,geometries:(void 0===h?[]:h).map((function(e){return i.fromJSON(e).set(c)}))}]}}))}))}}.apply(null,n))||(e.exports=o)},330:function(e,t,r){var n,o;n=[r.dj.c(e.i),t,r(26),r(32),r(31),r(51),r(50),r(40)],void 0===(o=function(e,t,r,n,o,i,s,a){function u(e){return{geometryType:a.getJsonType(e[0]),geometries:e.map((function(e){return e.toJSON()}))}}function p(e,t,r){var n=a.getGeometryType(t);return e.map((function(e){var t=n.fromJSON(e);return t.spatialReference=r,t}))}Object.defineProperty(t,"__esModule",{value:!0}),t.simplify=function(e,t,l){return n(this,void 0,void 0,(function(){var n,c,f,y;return o(this,(function(o){switch(o.label){case 0:return n="string"==typeof e?s.urlToObject(e):e,c=t[0].spatialReference,f=a.getJsonType(t[0]),y=r({},l,{query:r({},n.query,{f:"json",sr:c.wkid?c.wkid:JSON.stringify(c),geometries:JSON.stringify(u(t))})}),[4,i(n.path+"/simplify",y)];case 1:return[2,p(o.sent().data,f,c)]}}))}))}}.apply(null,n))||(e.exports=o)},537:function(e,t,r){var n,o;n=[r.dj.c(e.i),t,r(22),r(20),r(47),r(34),r(23)],void 0===(o=function(e,t,r,n,o,i,s){var a=new o.default({esriJobMessageTypeInformative:"informative",esriJobMessageTypeProcessDefinition:"process-definition",esriJobMessageTypeProcessStart:"process-start",esriJobMessageTypeProcessStop:"process-stop",esriJobMessageTypeWarning:"warning",esriJobMessageTypeError:"error",esriJobMessageTypeEmpty:"empty",esriJobMessageTypeAbort:"abort"});return function(e){function t(t){var r=e.call(this,t)||this;return r.description=null,r.type=null,r}return r(t,e),n([s.property({type:String,json:{write:!0}})],t.prototype,"description",void 0),n([s.property({type:String,json:{read:a.read,write:a.write}})],t.prototype,"type",void 0),n([s.subclass("esri.tasks.support.GPMessage")],t)}(s.declared(i.JSONSupport))}.apply(null,n))||(e.exports=o)},621:function(e,t,r){var n,o;n=[r.dj.c(e.i),t],void 0===(o=function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e){void 0===e&&(e={}),this._options=e}return e.prototype.toQueryParams=function(e){var t=this;if(!e)return null;var r=e.toJSON(),n={};return Object.keys(r).forEach((function(e){var o=t._options[e];if(o){var i="boolean"!=typeof o&&o.name?o.name:e,s="boolean"!=typeof o&&o.getter?o.getter(r):r[e];null!=s&&(n[i]=function(e){if(!Array.isArray(e))return!1;var t=e[0];return"number"==typeof t||"string"==typeof t}(s)?s.join(","):"object"==typeof s?JSON.stringify(s):s)}else n[e]=r[e]}),this),n},e}();t.createQueryParamsHelper=function(e){return new r(e)}}.apply(null,n))||(e.exports=o)},622:function(e,t,r){var n,o;n=[r.dj.c(e.i),t,r(20),r(22),r(31),r(32),r(51),r(27),r(33),r(352),r(50),r(23),r(395)],void 0===(o=function(e,t,r,n,o,i,s,a,u,p,l,c,f){function y(e){return i(this,void 0,void 0,(function(){var t,r,n,i;return o(this,(function(o){switch(o.label){case 0:return o.trys.push([0,2,,3]),[4,s(e+("/"===e[e.length-1]?"":"/")+"retrieveTravelModes",{query:{f:"json"}})];case 1:return t=o.sent().data,r=t.supportedTravelModes,n=t.defaultTravelMode,[2,{supportedTravelModes:r,defaultTravelMode:n}];case 2:throw i=o.sent(),new a("network-service:retrieveTravelModes","Could not get to the NAServer's retrieveTravelModes.",{error:i});case 3:return[2]}}))}))}function d(e){return i(this,void 0,void 0,(function(){var t,r,n,i,a,u,c,f,y,d,v,h,m,g,w,T;return o(this,(function(o){switch(o.label){case 0:return[4,s(e.substring(0,e.indexOf("/rest/")+6)+"info",{query:{f:"json"}})];case 1:return(t=o.sent().data)&&t.owningSystemUrl?(e=t.owningSystemUrl,[4,s(e+("/"===e[e.length-1]?"":"/")+"sharing/rest/portals/self",{query:{f:"json"}})]):[2,{supportedTravelModes:[],defaultTravelMode:null}];case 2:return r=o.sent().data,(n=p.getDeepValue("helperServices.routingUtilities.url",r))?(i=l.urlToObject(e),a=/\/solveClosestFacility$/.test(i.path)?"Route":/\/solveClosestFacility$/.test(i.path)?"ClosestFacility":"ServiceAreas",[4,s(n+("/"===n[n.length-1]?"":"/")+"GetTravelModes/execute",{query:{f:"json",serviceName:a}})]):[2,{supportedTravelModes:[],defaultTravelMode:null}];case 3:if(u=o.sent(),c=[],f=null,u&&u.data&&u.data.results&&u.data.results.length)for(y=u.data.results,d=0,v=y;d<v.length;d++)if("supportedTravelModes"===(h=v[d]).paramName){if(h.value&&h.value.features)for(m=0,g=h.value.features;m<g.length;m++)(w=g[m].attributes)&&(T=JSON.parse(w.TravelMode),c.push(T))}else"defaultTravelMode"===h.paramName&&(f=h.value);return[2,{supportedTravelModes:c,defaultTravelMode:f}]}}))}))}Object.defineProperty(t,"__esModule",{value:!0}),t.NAServiceDescriptionMixin=function(e){return function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return n(t,e),t.prototype.getServiceDescription=function(){return i(this,void 0,void 0,(function(){return o(this,(function(e){return this._serviceDescriptionPromise||(this._serviceDescriptionPromise=this._fetchServiceDescription()),[2,this._serviceDescriptionPromise]}))}))},t.prototype._fetchServiceDescription=function(){return i(this,void 0,void 0,(function(){var e,t,r,n,i,u;return o(this,(function(o){switch(o.label){case 0:if(!this.url||!this.parsedUrl)throw new a("network-service:missing-url","Url to Network service is missing");return e=this.url,[4,s(e,{query:{f:"json"}})];case 1:for((t=o.sent().data).supportedTravelModes||(t.supportedTravelModes=[]),r=0;r<t.supportedTravelModes.length;r++)t.supportedTravelModes[r].id||(t.supportedTravelModes[r].id=t.supportedTravelModes[r].itemId);return[4,t.currentVersion>=10.4?y(e):d(e)];case 2:return n=o.sent(),i=n.defaultTravelMode,u=n.supportedTravelModes,t.defaultTravelMode=i,t.supportedTravelModes=u,[2,t]}}))}))},t.prototype._isInputGeometryZAware=function(e,t){for(var r=0;r<t.length;r++){var n=e[t[r]];if(n&&n.length)for(var o=0,i=n;o<i.length;o++){var s=i[o];if(u.isSome(s)&&s.hasZ)return!0}}return!1},t.prototype._dropZValuesOffInputGeometry=function(e,t){for(var r=0;r<t.length;r++){var n=e[t[r]];if(n&&n.length)for(var o=0,i=n;o<i.length;o++){i[o].z=void 0}}console.log("The remote Network Analysis service is powered by a network dataset which is not Z-aware.\nZ-coordinates of the input geometry are ignored.")},r([c.subclass("esri.tasks.mixins.NAServiceDescription")],t)}(c.declared(e))};var v=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return n(t,e),r([c.subclass("esri.tasks.mixins.NAServiceDescription")],t)}(c.declared(t.NAServiceDescriptionMixin(f)));t.NAServiceDescription=v}.apply(null,n))||(e.exports=o)},623:function(e,t,r){var n,o;n=[r.dj.c(e.i),t,r(22),r(20),r(47),r(23),r(537)],void 0===(o=function(e,t,r,n,o,i,s){var a=new o.default({0:"informative",1:"process-definition",2:"process-start",3:"process-stop",50:"warning",100:"error",101:"empty",200:"abort"});return function(e){function t(t){var r=e.call(this,t)||this;return r.type=null,r}return r(t,e),n([i.property({type:String,json:{read:a.read,write:a.write}})],t.prototype,"type",void 0),n([i.subclass("esri.tasks.support.NAMessage")],t)}(i.declared(s))}.apply(null,n))||(e.exports=o)},859:function(e,t,r){var n,o;n=[r(86),r(201),r(305),r(59),r(185),r(108)],void 0===(o=function(e,t,r,n,o,i){return o.createSubclass({declaredClass:"esri.tasks.support.DirectionsFeatureSet",properties:{geometryType:"polyline",extent:{type:e,json:{read:{source:"summary.envelope"}}},features:{value:null,json:{read:function(e,r){(e||[]).forEach((function(e){this._decompressFeatureGeometry(e,r.summary.envelope.spatialReference)}),this);var o=n.fromJSON(r.spatialReference);return e.map((function(e){var r=i.fromJSON(e),n=e.geometry&&e.geometry.spatialReference;return r.geometry&&!n&&(r.geometry.spatialReference=o),r.strings=e.strings,r.events=(e.events||[]).map((function(r){var n=new i({geometry:new t({x:r.point.x,y:r.point.y,z:r.point.z,hasZ:void 0!==r.point.z,spatialReference:e.geometry&&e.geometry.spatialReference}),attributes:{ETA:r.ETA,arriveTimeUTC:r.arriveTimeUTC}});return n.strings=r.strings,n})),r}))}}},mergedGeometry:{value:null,readOnly:!0,dependsOn:["features","extent.spatialReference"],get:function(){if(!this.features)return null;var e=this.features.map((function(e){return e.geometry})),t=this.get("extent.spatialReference");return this._mergePolylinesToSinglePath(e,t)}},routeId:null,routeName:null,strings:{value:null,readOnly:!0,dependsOn:["features"],get:function(){return this.features.map((function(e){return e.strings}))}},totalDriveTime:{value:null,json:{read:{source:"summary.totalDriveTime"}}},totalLength:{value:null,json:{read:{source:"summary.totalLength"}}},totalTime:{value:null,json:{read:{source:"summary.totalTime"}}}},_decompressFeatureGeometry:function(e,t){e.geometry=this._decompressGeometry(e.compressedGeometry,t)},_decompressGeometry:function(e,t){var r,n,o,i,s,a,u,p,l=0,c=0,f=0,y=0,d=[],v=0,h=0,m=0;if((s=e.match(/((\+|\-)[^\+\-\|]+|\|)/g))||(s=[]),0===parseInt(s[v],32)){v=2;var g=parseInt(s[v],32);v++,a=parseInt(s[v],32),v++,1&g&&(h=s.indexOf("|")+1,u=parseInt(s[h],32),h++),2&g&&(m=s.indexOf("|",h)+1,p=parseInt(s[m],32),m++)}else a=parseInt(s[v],32),v++;for(;v<s.length&&"|"!==s[v];){r=parseInt(s[v],32)+l,v++,l=r,n=parseInt(s[v],32)+c,v++,c=n;var w=[r/a,n/a];h&&(i=parseInt(s[h],32)+f,h++,f=i,w.push(i/u)),m&&(o=parseInt(s[m],32)+y,m++,y=o,w.push(o/p)),d.push(w)}return{paths:[d],hasZ:h>0,hasM:m>0,spatialReference:t}},_mergePolylinesToSinglePath:function(e,t){var n=[];(e||[]).forEach((function(e){e.paths.forEach((function(e){n=n.concat(e)}))}));var o=[],i=[0,0];return n.forEach((function(e){e[0]===i[0]&&e[1]===i[1]||(o.push(e),i=e)})),new r({paths:[o]},t)}})}.apply(null,n))||(e.exports=o)}}]);
//# sourceMappingURL=32.f3368997.chunk.js.map