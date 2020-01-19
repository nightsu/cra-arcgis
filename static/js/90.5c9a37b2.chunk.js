(function(){(this||window).webpackJsonpareactgis.registerAbsMids({"esri/renderers/support/utils":64,"esri/renderers/visualVariables/support/ColorStop":76,"esri/renderers/support/numberUtils":77,"esri/layers/support/commonProperties":92,"esri/layers/mixins/OperationalLayer":155,"esri/symbols/support/ElevationInfo":160,"esri/symbols/support/FeatureExpressionInfo":162,"esri/symbols/support/unitConversionUtils":163})})(),(this.webpackJsonpareactgis=this.webpackJsonpareactgis||[]).push([[90,35,89,91,92,93,94,95,96,97,102],{155:function(e,r,t){var n,i;n=[t.dj.c(e.i),r,t(22),t(20),t(27),t(28),t(23),t(326),t(151),t(92)],void 0===(i=function(e,r,n,i,a,o,l,s,u,c){Object.defineProperty(r,"__esModule",{value:!0}),r.OperationalLayer=function(e){return function(e){function t(){var r=null!==e&&e.apply(this,arguments)||this;return r.title="Layer",r}return n(t,e),t.prototype.writeListMode=function(e,r,t,n){n&&"ground"===n.layerContainerType?r[t]=e:e&&u.willPropertyWrite(this,t,{},n)&&(r[t]=e)},t.prototype.writeTitle=function(e,r){r.title=e||"Layer"},t.prototype.writeOperationalLayerType=function(e,r){e&&(r.layerType=e)},t.prototype.read=function(e,r){var t=this,n=arguments;r&&(r.layer=this),s.readLoadable(this,e,(function(r){return t.inherited(n,[e,r])}),r)},t.prototype.write=function(e,t){if(t&&t.origin){var n=t.origin+"/"+(t.layerContainerType||"operational-layers"),i=r.supportedTypes[n],o=i&&i[this.operationalLayerType];if("write"!==o&&"readwrite"!==o)return t.messages&&t.messages.push(new a("layer:unsupported","Layers ("+this.title+", "+this.id+") of type '"+this.declaredClass+"' are not supported in the context of '"+n+"'",{layer:this})),null}var l=this.inherited(arguments,[e,t]),s=!!t&&!!t.messages&&!!t.messages.filter((function(e){return e instanceof a&&"web-document-write:property-required"===e.name})).length;return!this.url&&s?null:l},i([l.property({type:String,json:{write:{ignoreOrigin:!0},origins:{"web-scene":{write:{isRequired:!0,ignoreOrigin:!0}}}}})],t.prototype,"id",void 0),i([l.property({json:{write:{ignoreOrigin:!0}}})],t.prototype,"listMode",void 0),i([l.writer("listMode")],t.prototype,"writeListMode",null),i([l.property({type:String,json:{write:{ignoreOrigin:!0,allowNull:!0},origins:{"web-scene":{write:{isRequired:!0,ignoreOrigin:!0}}}}})],t.prototype,"title",void 0),i([l.writer("title")],t.prototype,"writeTitle",null),i([l.property({type:String,readOnly:!0,json:{write:{target:"layerType",ignoreOrigin:!0}}})],t.prototype,"operationalLayerType",void 0),i([l.writer("operationalLayerType")],t.prototype,"writeOperationalLayerType",null),i([l.property(c.opacity)],t.prototype,"opacity",void 0),i([l.property({type:Boolean,json:{read:{source:"visibility"},write:{target:"visibility"},origins:{"web-document":{read:{source:"visibility"},write:{target:"visibility"},default:!0}}}})],t.prototype,"visible",void 0),i([l.subclass("esri.layers.mixins.OperationalLayer")],t)}(l.declared(e))},r.typeModuleMap={ArcGISFeatureLayer:function(){return o.create((function(e){return Promise.all([t.e(0),t.e(1),t.e(4),t.e(75)]).then(function(){var r=[t(179)];e.apply(null,r)}.bind(this)).catch(t.oe)}))},ArcGISImageServiceLayer:function(){return o.create((function(e){return Promise.all([t.e(0),t.e(5),t.e(6),t.e(23)]).then(function(){var r=[t(318)];e.apply(null,r)}.bind(this)).catch(t.oe)}))},ArcGISImageServiceVectorLayer:function(){return o.resolve(null)},ArcGISMapServiceLayer:function(){return o.create((function(e){return Promise.all([t.e(0),t.e(1),t.e(7),t.e(17),t.e(108)]).then(function(){var r=[t(312)];e.apply(null,r)}.bind(this)).catch(t.oe)}))},ArcGISSceneServiceLayer:function(){return o.create((function(e){return Promise.all([t.e(0),t.e(1),t.e(4),t.e(9),t.e(77)]).then(function(){var r=[t(314)];e.apply(null,r)}.bind(this)).catch(t.oe)}))},ArcGISStreamLayer:function(){return o.create((function(e){return Promise.all([t.e(0),t.e(1),t.e(4),t.e(30)]).then(function(){var r=[t(322)];e.apply(null,r)}.bind(this)).catch(t.oe)}))},ArcGISTiledElevationServiceLayer:function(){return o.create((function(e){return t.e(15).then(function(){var r=[t(307)];e.apply(null,r)}.bind(this)).catch(t.oe)}))},ArcGISTiledImageServiceLayer:function(){return o.create((function(e){return Promise.all([t.e(0),t.e(1),t.e(7),t.e(16)]).then(function(){var r=[t(153)];e.apply(null,r)}.bind(this)).catch(t.oe)}))},ArcGISTiledMapServiceLayer:function(){return o.create((function(e){return Promise.all([t.e(0),t.e(1),t.e(7),t.e(16)]).then(function(){var r=[t(153)];e.apply(null,r)}.bind(this)).catch(t.oe)}))},BingMapsAerial:function(){return o.create((function(e){return t.e(20).then(function(){var r=[t(83)];e.apply(null,r)}.bind(this)).catch(t.oe)}))},BingMapsRoad:function(){return o.create((function(e){return t.e(20).then(function(){var r=[t(83)];e.apply(null,r)}.bind(this)).catch(t.oe)}))},BingMapsHybrid:function(){return o.create((function(e){return t.e(20).then(function(){var r=[t(83)];e.apply(null,r)}.bind(this)).catch(t.oe)}))},BuildingSceneLayer:function(){return o.create((function(e){return Promise.all([t.e(0),t.e(1),t.e(9),t.e(25)]).then(function(){var r=[t(321)];e.apply(null,r)}.bind(this)).catch(t.oe)}))},CSV:function(){return o.create((function(e){return Promise.all([t.e(0),t.e(1),t.e(4),t.e(27)]).then(function(){var r=[t(317)];e.apply(null,r)}.bind(this)).catch(t.oe)}))},GeoRSS:function(){return o.create((function(e){return t.e(104).then(function(){var r=[t(311)];e.apply(null,r)}.bind(this)).catch(t.oe)}))},GroupLayer:function(){return o.create((function(e){return t.e(118).then(function(){var r=[t(303)];e.apply(null,r)}.bind(this)).catch(t.oe)}))},IntegratedMeshLayer:function(){return o.create((function(e){return Promise.all([t.e(9),t.e(131)]).then(function(){var r=[t(315)];e.apply(null,r)}.bind(this)).catch(t.oe)}))},KML:function(){return o.create((function(e){return Promise.all([t.e(0),t.e(1),t.e(33)]).then(function(){var r=[t(319)];e.apply(null,r)}.bind(this)).catch(t.oe)}))},OpenStreetMap:function(){return o.create((function(e){return t.e(100).then(function(){var r=[t(313)];e.apply(null,r)}.bind(this)).catch(t.oe)}))},PointCloudLayer:function(){return o.create((function(e){return Promise.all([t.e(14),t.e(29)]).then(function(){var r=[t(320)];e.apply(null,r)}.bind(this)).catch(t.oe)}))},VectorTileLayer:function(){return o.create((function(e){return Promise.all([t.e(19),t.e(26)]).then(function(){var r=[t(323)];e.apply(null,r)}.bind(this)).catch(t.oe)}))},WebTiledLayer:function(){return o.create((function(e){return t.e(101).then(function(){var r=[t(283)];e.apply(null,r)}.bind(this)).catch(t.oe)}))},WFS:function(){return o.resolve(null)},WMS:function(){return o.create((function(e){return t.e(36).then(function(){var r=[t(324)];e.apply(null,r)}.bind(this)).catch(t.oe)}))},RasterDataLayer:function(){return o.resolve(null)}},r.supportedTypes={"web-scene/operational-layers":{ArcGISFeatureLayer:"readwrite",ArcGISImageServiceLayer:"readwrite",ArcGISMapServiceLayer:"readwrite",ArcGISSceneServiceLayer:"readwrite",ArcGISTiledElevationServiceLayer:"read",ArcGISTiledImageServiceLayer:"readwrite",ArcGISTiledMapServiceLayer:"readwrite",BuildingSceneLayer:"readwrite",GroupLayer:"readwrite",IntegratedMeshLayer:"readwrite",PointCloudLayer:"readwrite",WebTiledLayer:"readwrite",CSV:"readwrite",VectorTileLayer:"readwrite",WMS:"readwrite",KML:"readwrite",RasterDataLayer:"readwrite"},"web-scene/basemap":{ArcGISTiledImageServiceLayer:"readwrite",ArcGISTiledMapServiceLayer:"readwrite",WebTiledLayer:"readwrite",OpenStreetMap:"readwrite",VectorTileLayer:"readwrite",ArcGISImageServiceLayer:"readwrite",WMS:"readwrite",ArcGISMapServiceLayer:"readwrite"},"web-scene/ground":{ArcGISTiledElevationServiceLayer:"readwrite"},"web-map/operational-layers":{ArcGISImageServiceLayer:"readwrite",ArcGISImageServiceVectorLayer:"readwrite",ArcGISMapServiceLayer:"readwrite",ArcGISStreamLayer:"readwrite",ArcGISTiledImageServiceLayer:"readwrite",ArcGISTiledMapServiceLayer:"readwrite",ArcGISFeatureLayer:"readwrite",BingMapsAerial:"readwrite",BingMapsRoad:"readwrite",BingMapsHybrid:"readwrite",CSV:"readwrite",GeoRSS:"readwrite",KML:"readwrite",VectorTileLayer:"readwrite",WFS:"readwrite",WMS:"readwrite",WebTiledLayer:"readwrite"},"web-map/basemap":{ArcGISImageServiceLayer:"readwrite",ArcGISImageServiceVectorLayer:"readwrite",ArcGISMapServiceLayer:"readwrite",ArcGISTiledImageServiceLayer:"readwrite",ArcGISTiledMapServiceLayer:"readwrite",OpenStreetMap:"readwrite",VectorTileLayer:"readwrite",WMS:"readwrite",WebTiledLayer:"readwrite",BingMapsAerial:"readwrite",BingMapsRoad:"readwrite",BingMapsHybrid:"readwrite"}}}.apply(null,n))||(e.exports=i)},160:function(e,r,t){var n,i;n=[t.dj.c(e.i),r,t(22),t(20),t(31),t(32),t(47),t(34),t(23),t(162),t(163)],void 0===(i=function(e,r,t,n,i,a,o,l,s,u,c){var p=o.strict()({onTheGround:"on-the-ground",relativeToGround:"relative-to-ground",relativeToScene:"relative-to-scene",absoluteHeight:"absolute-height"}),d=new o.JSONMap({foot:"feet",kilometer:"kilometers",meter:"meters",mile:"miles","us-foot":"us-feet",yard:"yards"});return function(e){function r(){return null!==e&&e.apply(this,arguments)||this}var i;return t(r,e),i=r,r.prototype.readFeatureExpressionInfo=function(e,r){return null!=e?e:r.featureExpression&&0===r.featureExpression.value?{expression:"0"}:void 0},r.prototype.writeFeatureExpressionInfo=function(e,r,t,n){r[t]=e.write(null,n),"0"===e.expression&&(r.featureExpression={value:0})},Object.defineProperty(r.prototype,"mode",{get:function(){return this._isOverridden("mode")?this._get("mode"):null!=this.offset||this.featureExpressionInfo?"relative-to-ground":"on-the-ground"},set:function(e){this._override("mode",e)},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"unit",{set:function(e){this._set("unit",e)},enumerable:!0,configurable:!0}),r.prototype.write=function(){return this.offset||this.mode||this.featureExpressionInfo||this.unit?this.inherited(arguments):null},r.prototype.clone=function(){return new i({mode:this.mode,offset:this.offset,featureExpressionInfo:this.featureExpressionInfo?this.featureExpressionInfo.clone():void 0,unit:this.unit})},n([s.property({type:u,json:{write:!0}})],r.prototype,"featureExpressionInfo",void 0),n([s.reader("featureExpressionInfo",["featureExpressionInfo","featureExpression"])],r.prototype,"readFeatureExpressionInfo",null),n([s.writer("featureExpressionInfo",{featureExpressionInfo:{type:u},"featureExpression.value":{type:[0]}})],r.prototype,"writeFeatureExpressionInfo",null),n([s.property({type:p.apiValues,dependsOn:["offset","featureExpressionInfo"],nonNullable:!0,json:{type:p.jsonValues,read:p.read,write:{writer:p.write,isRequired:!0}}})],r.prototype,"mode",null),n([s.property({type:Number,json:{write:!0}})],r.prototype,"offset",void 0),n([s.property({type:c.supportedUnits,json:{type:String,read:d.read,write:d.write}})],r.prototype,"unit",null),i=n([s.subclass("esri.layers.support.ElevationInfo")],r)}(s.declared(l.JSONSupport))}.apply(null,n))||(e.exports=i)},162:function(e,r,t){var n,i;n=[t.dj.c(e.i),r,t(22),t(20),t(31),t(32),t(34),t(23),t(115)],void 0===(i=function(e,r,t,n,i,a,o,l,s){return function(e){function r(){return null!==e&&e.apply(this,arguments)||this}var o;return t(r,e),o=r,r.prototype.collectRequiredFields=function(e,r){return a(this,void 0,void 0,(function(){return i(this,(function(t){return[2,s.collectArcadeFieldNames(e,r,this.expression)]}))}))},r.prototype.clone=function(){return new o({expression:this.expression,title:this.title})},n([l.property({type:String,json:{write:!0}})],r.prototype,"expression",void 0),n([l.property({type:String,json:{write:!0}})],r.prototype,"title",void 0),o=n([l.subclass("esri.layers.support.FeatureExpressionInfo")],r)}(l.declared(o.JSONSupport))}.apply(null,n))||(e.exports=i)},163:function(e,r,t){var n,i;n=[t.dj.c(e.i),r,t(64)],void 0===(i=function(e,r,t){Object.defineProperty(r,"__esModule",{value:!0}),r.supportsUnit=function(e){return null!=t.meterIn[e]},r.getMetersPerUnit=function(e){return 1/(t.meterIn[e]||1)},r.supportedUnits=function(){var e=Object.keys(t.meterIn);return e.sort(),e}()}.apply(null,n))||(e.exports=i)},64:function(e,r,t){var n,i;n=[t.dj.c(e.i),r,t(26),t(24),t(87),t(166),t(77),t(76)],void 0===(i=function(e,r,t,n,i,a,o,l){function s(e,r,t){var n="";return 0===r?n=p.lt+" ":r===t&&(n=p.gt+" "),n+e}function u(e){var r=e.minValue,t=e.maxValue,n=e.isFirstBreak?"":p.gt+" ",i="percent-of-total"===e.normalizationType?p.pct:"";return r=null==r?"":o.format(r),t=null==t?"":o.format(t),n+r+i+" "+p.ld+" "+t+i}Object.defineProperty(r,"__esModule",{value:!0});var c=n.getLogger("esri.renderers.support.utils"),p={lte:"<=",gte:">=",lt:"<",gt:">",pct:"%",ld:"\u2013"},d={millisecond:0,second:1,minute:2,hour:3,day:4,month:5,year:6},f={millisecond:"long-month-day-year-long-time",second:"long-month-day-year-long-time",minute:"long-month-day-year-short-time",hour:"long-month-day-year-short-time",day:"long-month-day-year",month:"long-month-day-year",year:"year"};r.meterIn={inches:i.convertUnit(1,"meters","inches"),feet:i.convertUnit(1,"meters","feet"),"us-feet":i.convertUnit(1,"meters","us-feet"),yards:i.convertUnit(1,"meters","yards"),miles:i.convertUnit(1,"meters","miles"),"nautical-miles":i.convertUnit(1,"meters","nautical-miles"),millimeters:i.convertUnit(1,"meters","millimeters"),centimeters:i.convertUnit(1,"meters","centimeters"),decimeters:i.convertUnit(1,"meters","decimeters"),meters:i.convertUnit(1,"meters","meters"),kilometers:i.convertUnit(1,"meters","kilometers"),"decimal-degrees":1/i.lengthToDegrees(1,"meters")},r.timelineDateFormatOptions=a.convertDateFormatToIntlOptions("short-date"),r.createColorStops=function(e){var r=e.values,t=e.colors,n=e.labelIndexes,i=e.isDate,u=e.dateFormatOptions;return r.map((function(e,c){var p=null;if(!n||n.indexOf(c)>-1){var d;(d=i?a.formatDate(e,u):o.format(e))&&(p=s(d,c,r.length-1))}return new l({value:e,color:t[c],label:p})}))},r.updateColorStops=function(e){for(var r=e.stops,t=e.changes,n=e.isDate,i=e.dateFormatOptions,l=r.map((function(e){return e.value})),u=[],c=0,p=t;c<p.length;c++){var d=p[c];u.push(d.index),l[d.index]=d.value}var f=o.round(l,{indexes:u});r.forEach((function(e,t){if(e.value=l[t],null!=e.label){var u,c=null;(u=n?a.formatDate(f[t],i):o.format(f[t]))&&(c=s(u,t,r.length-1)),e.label=c}}))},r.createClassBreakLabel=u,r.setLabelsForClassBreaks=function(e){var r=e.classBreakInfos,t=e.normalizationType,n=[];if(r&&r.length){if("standard-deviation"===e.classificationMethod)return void c.warn("setLabelsForClassBreaks","cannot set labels for class breaks generated using 'standard-deviation' method.");if(e.round){n.push(r[0].minValue);for(var i=0,a=r;i<a.length;i++){var l=a[i];n.push(l.maxValue)}n=o.round(n),r.forEach((function(e,r){e.label=u({minValue:0===r?n[0]:n[r],maxValue:n[r+1],isFirstBreak:0===r,normalizationType:t})}))}else r.forEach((function(e,r){e.label=u({minValue:e.minValue,maxValue:e.maxValue,isFirstBreak:0===r,normalizationType:t})}))}},r.updateClassBreak=function(e){if("standard-deviation"!==e.classificationMethod){var r=e.classBreaks,t=e.change,n=t.index,i=t.value,a=r.length,o=-1,l=-1;0===n?o=n:n===a?l=n-1:(l=n-1,o=n);var s=e.normalizationType,p=null;o>-1&&o<a&&((p=r[o]).minValue=i,p.label=u({minValue:p.minValue,maxValue:p.maxValue,isFirstBreak:0===o,normalizationType:s})),l>-1&&l<a&&((p=r[l]).maxValue=i,p.label=u({minValue:p.minValue,maxValue:p.maxValue,isFirstBreak:0===l,normalizationType:s}))}else c.warn("updateClassBreak","cannot update labels for class breaks generated using 'standard-deviation' method.")},r.calculateDateFormatInterval=function(e){for(var r=e.map((function(e){return new Date(e)})),t=r.length,n=1/0,i=null,a=0;a<t-1;a++){for(var o=r[a],l=[],s=1/0,u=null,c=a+1;c<t;c++){var p=r[c],f=(o.getFullYear()!==p.getFullYear()?"year":o.getMonth()!==p.getMonth()&&"month")||o.getDate()!==p.getDate()&&"day"||o.getHours()!==p.getHours()&&"hour"||o.getMinutes()!==p.getMinutes()&&"minute"||o.getSeconds()!==p.getSeconds()&&"second"||"millisecond",y=d[f];y<s&&(s=y,u=f),l.push(f)}s<n&&(n=s,i=u)}return i},r.createUniqueValueLabel=function(e){var r=e.value,t=e.domain,n=e.fieldInfo,i=e.dateFormatInterval,l=String(r),s=t&&"codedValues"in t&&t.codedValues?t.getName(r):null;return s?l=s:"number"==typeof r&&(l=n&&"date"===n.type?a.formatDate(r,i&&a.convertDateFormatToIntlOptions(f[i])):o.format(r)),l}}.apply(null,n))||(e.exports=i)},76:function(e,r,t){var n,i;n=[t.dj.c(e.i),r,t(22),t(20),t(58),t(34),t(23),t(54)],void 0===(i=function(e,r,t,n,i,a,o,l){return function(e){function r(r){var t=e.call(this,r)||this;return t.color=null,t.label=null,t.value=null,t}var a;return t(r,e),a=r,r.prototype.writeValue=function(e,r,t){r[t]=null==e?0:e},r.prototype.clone=function(){return new a({color:this.color&&this.color.clone(),label:this.label,value:this.value})},n([o.property({type:i,json:{type:[l.Integer],write:!0}})],r.prototype,"color",void 0),n([o.property({type:String,json:{write:!0}})],r.prototype,"label",void 0),n([o.property({type:Number,json:{write:{allowNull:!0}}})],r.prototype,"value",void 0),n([o.writer("value")],r.prototype,"writeValue",null),a=n([o.subclass("esri.renderers.visualVariables.support.ColorStop")],r)}(o.declared(a.JSONSupport))}.apply(null,n))||(e.exports=i)},77:function(e,r,t){var n,i;n=[t.dj.c(e.i),r,t(165)],void 0===(i=function(e,r,t){function n(e,r){return e-r}function i(e,r){var t,n;return(t=Number(e.toFixed(r)))<e?n=t+1/Math.pow(10,r):(n=t,t-=1/Math.pow(10,r)),[t=Number(t.toFixed(r)),n=Number(n.toFixed(r))]}function a(e,r,t,n,i){var a=l(e,r,t,n),o=null==a.previous||a.previous<=i,s=null==a.next||a.next<=i;return o&&s||a.previous+a.next<=2*i}function o(e){var r=String(e),t=r.match(s);if(t&&t[1])return{integer:t[1].split("").length,fractional:t[3]?t[3].split("").length:0};if(r.toLowerCase().indexOf("e")>-1){var n=r.split("e"),i=n[0],a=n[1];if(i&&a){var l=Number(i),u=Number(a),c=u>0;c||(u=Math.abs(u));var p=o(l);return c?(p.integer+=u,u>p.fractional?p.fractional=0:p.fractional-=u):(p.fractional+=u,u>p.integer?p.integer=1:p.integer-=u),p}}return{integer:0,fractional:0}}function l(e,r,t,n){var i={previous:null,next:null};if(null!=t){var a=r-t-(o=e-t);i.previous=Math.floor(Math.abs(100*a/o))}if(null!=n){var o;a=n-r-(o=n-e);i.next=Math.floor(Math.abs(100*a/o))}return i}Object.defineProperty(r,"__esModule",{value:!0});var s=/^-?(\d+)(\.(\d+))?$/i;r.numDigits=o,r.percentChange=l,r.round=function(e,r){void 0===r&&(r={});var t=e.slice(0),l=r.tolerance,s=void 0===l?2:l,u=r.strictBounds,c=void 0!==u&&u,p=r.indexes,d=void 0===p?t.map((function(e,r){return r})):p;d.sort(n);for(var f=0;f<d.length;f++){var y=d[f],v=t[y],h=0===y?null:t[y-1],m=y===t.length-1?null:t[y+1],g=o(v).fractional;if(g){for(var w=0,b=!1,S=void 0;w<=g&&!b;){var I=i(v,w);b=a(v,S=c&&0===f?I[1]:I[0],h,m,s),w++}b&&(t[y]=S)}}return t};var u={maximumFractionDigits:20};r.format=function(e){return t.formatNumber(e,u)}}.apply(null,n))||(e.exports=i)},92:function(e,r,t){var n,i;n=[t.dj.c(e.i),r,t(26),t(50),t(175),t(151),t(160),t(327)],void 0===(i=function(e,r,t,n,i,a,o,l){Object.defineProperty(r,"__esModule",{value:!0}),r.screenSizePerspectiveEnabled={type:Boolean,value:!0,json:{origins:{"web-scene":{read:{source:["id","url","layerType"],reader:function(e,r){return null==r.screenSizePerspective&&"defaults"===this.originOf("screenSizePerspectiveEnabled")?void i.getProperties(this).store.set("screenSizePerspectiveEnabled",!1,0):r.screenSizePerspective}},write:{ignoreOrigin:!0,target:"screenSizePerspective",writer:function(e,r,t,n){"defaults"===this.originOf("screenSizePerspectiveEnabled")&&e?r[t]=e:a.willPropertyWrite(this,"screenSizePerspectiveEnabled",{},n)&&(r[t]=e)}}}}}},r.popupEnabled={type:Boolean,value:!0,json:{read:{source:"disablePopup",reader:function(e,r){return!r.disablePopup}},write:{target:"disablePopup",writer:function(e,r,t){r[t]=!e}}}},r.labelsVisible={type:Boolean,json:{read:{source:"showLabels"},write:{target:"showLabels"}}},r.url={type:String,json:{write:{isRequired:!0,ignoreOrigin:!0,writer:n.write}}},r.legendEnabled={type:Boolean,value:!0,json:{origins:{service:{read:{enabled:!1}}},read:{source:"showLegend"},write:{target:"showLegend"}}},r.elevationInfo={value:null,type:o,json:{origins:{service:{read:{source:"elevationInfo"},write:{target:"elevationInfo",enabled:!1}}},read:{source:"layerDefinition.elevationInfo"},write:{target:"layerDefinition.elevationInfo"}}},r.readOnlyService=function(e){return{type:e,readOnly:!0,json:{origins:{service:{read:!0}},read:!1}}},r.opacity={type:Number,json:{origins:{"web-document":{default:1,write:!0,read:!0}}}},r.opacityDrawingInfo=t({},r.opacity,{json:t({},r.opacity.json,{origins:{"web-document":t({},r.opacity.json.origins["web-document"],{write:{enabled:!0,target:{opacity:{type:Number},"layerDefinition.drawingInfo.transparency":{type:Number}}}})},read:{source:["layerDefinition.drawingInfo.transparency","drawingInfo.transparency"],reader:function(e,r,t){return t&&"service"!==t.origin||!r.drawingInfo||void 0===r.drawingInfo.transparency?r.layerDefinition&&r.layerDefinition.drawingInfo&&void 0!==r.layerDefinition.drawingInfo.transparency?l.transparencyToOpacity(r.layerDefinition.drawingInfo.transparency):void 0:l.transparencyToOpacity(r.drawingInfo.transparency)}}})})}.apply(null,n))||(e.exports=i)}}]);
//# sourceMappingURL=90.5c9a37b2.chunk.js.map