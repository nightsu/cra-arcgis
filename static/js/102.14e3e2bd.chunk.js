(function(){(this||window).webpackJsonpareactgis.registerAbsMids({"esri/layers/support/commonProperties":92,"esri/layers/mixins/OperationalLayer":155,"esri/symbols/support/ElevationInfo":160,"esri/symbols/support/FeatureExpressionInfo":162,"esri/symbols/support/unitConversionUtils":163})})(),(this.webpackJsonpareactgis=this.webpackJsonpareactgis||[]).push([[102],{155:function(e,r,t){var i,n;i=[t.dj.c(e.i),r,t(22),t(20),t(27),t(28),t(23),t(326),t(151),t(92)],void 0===(n=function(e,r,i,n,o,a,s,u,c,l){Object.defineProperty(r,"__esModule",{value:!0}),r.OperationalLayer=function(e){return function(e){function t(){var r=null!==e&&e.apply(this,arguments)||this;return r.title="Layer",r}return i(t,e),t.prototype.writeListMode=function(e,r,t,i){i&&"ground"===i.layerContainerType?r[t]=e:e&&c.willPropertyWrite(this,t,{},i)&&(r[t]=e)},t.prototype.writeTitle=function(e,r){r.title=e||"Layer"},t.prototype.writeOperationalLayerType=function(e,r){e&&(r.layerType=e)},t.prototype.read=function(e,r){var t=this,i=arguments;r&&(r.layer=this),u.readLoadable(this,e,(function(r){return t.inherited(i,[e,r])}),r)},t.prototype.write=function(e,t){if(t&&t.origin){var i=t.origin+"/"+(t.layerContainerType||"operational-layers"),n=r.supportedTypes[i],a=n&&n[this.operationalLayerType];if("write"!==a&&"readwrite"!==a)return t.messages&&t.messages.push(new o("layer:unsupported","Layers ("+this.title+", "+this.id+") of type '"+this.declaredClass+"' are not supported in the context of '"+i+"'",{layer:this})),null}var s=this.inherited(arguments,[e,t]),u=!!t&&!!t.messages&&!!t.messages.filter((function(e){return e instanceof o&&"web-document-write:property-required"===e.name})).length;return!this.url&&u?null:s},n([s.property({type:String,json:{write:{ignoreOrigin:!0},origins:{"web-scene":{write:{isRequired:!0,ignoreOrigin:!0}}}}})],t.prototype,"id",void 0),n([s.property({json:{write:{ignoreOrigin:!0}}})],t.prototype,"listMode",void 0),n([s.writer("listMode")],t.prototype,"writeListMode",null),n([s.property({type:String,json:{write:{ignoreOrigin:!0,allowNull:!0},origins:{"web-scene":{write:{isRequired:!0,ignoreOrigin:!0}}}}})],t.prototype,"title",void 0),n([s.writer("title")],t.prototype,"writeTitle",null),n([s.property({type:String,readOnly:!0,json:{write:{target:"layerType",ignoreOrigin:!0}}})],t.prototype,"operationalLayerType",void 0),n([s.writer("operationalLayerType")],t.prototype,"writeOperationalLayerType",null),n([s.property(l.opacity)],t.prototype,"opacity",void 0),n([s.property({type:Boolean,json:{read:{source:"visibility"},write:{target:"visibility"},origins:{"web-document":{read:{source:"visibility"},write:{target:"visibility"},default:!0}}}})],t.prototype,"visible",void 0),n([s.subclass("esri.layers.mixins.OperationalLayer")],t)}(s.declared(e))},r.typeModuleMap={ArcGISFeatureLayer:function(){return a.create((function(e){return Promise.all([t.e(0),t.e(1),t.e(4),t.e(75)]).then(function(){var r=[t(179)];e.apply(null,r)}.bind(this)).catch(t.oe)}))},ArcGISImageServiceLayer:function(){return a.create((function(e){return Promise.all([t.e(0),t.e(5),t.e(6),t.e(23)]).then(function(){var r=[t(318)];e.apply(null,r)}.bind(this)).catch(t.oe)}))},ArcGISImageServiceVectorLayer:function(){return a.resolve(null)},ArcGISMapServiceLayer:function(){return a.create((function(e){return Promise.all([t.e(0),t.e(1),t.e(7),t.e(17),t.e(108)]).then(function(){var r=[t(312)];e.apply(null,r)}.bind(this)).catch(t.oe)}))},ArcGISSceneServiceLayer:function(){return a.create((function(e){return Promise.all([t.e(0),t.e(1),t.e(4),t.e(9),t.e(77)]).then(function(){var r=[t(314)];e.apply(null,r)}.bind(this)).catch(t.oe)}))},ArcGISStreamLayer:function(){return a.create((function(e){return Promise.all([t.e(0),t.e(1),t.e(4),t.e(30)]).then(function(){var r=[t(322)];e.apply(null,r)}.bind(this)).catch(t.oe)}))},ArcGISTiledElevationServiceLayer:function(){return a.create((function(e){return t.e(15).then(function(){var r=[t(307)];e.apply(null,r)}.bind(this)).catch(t.oe)}))},ArcGISTiledImageServiceLayer:function(){return a.create((function(e){return Promise.all([t.e(0),t.e(1),t.e(7),t.e(16)]).then(function(){var r=[t(153)];e.apply(null,r)}.bind(this)).catch(t.oe)}))},ArcGISTiledMapServiceLayer:function(){return a.create((function(e){return Promise.all([t.e(0),t.e(1),t.e(7),t.e(16)]).then(function(){var r=[t(153)];e.apply(null,r)}.bind(this)).catch(t.oe)}))},BingMapsAerial:function(){return a.create((function(e){return t.e(20).then(function(){var r=[t(83)];e.apply(null,r)}.bind(this)).catch(t.oe)}))},BingMapsRoad:function(){return a.create((function(e){return t.e(20).then(function(){var r=[t(83)];e.apply(null,r)}.bind(this)).catch(t.oe)}))},BingMapsHybrid:function(){return a.create((function(e){return t.e(20).then(function(){var r=[t(83)];e.apply(null,r)}.bind(this)).catch(t.oe)}))},BuildingSceneLayer:function(){return a.create((function(e){return Promise.all([t.e(0),t.e(1),t.e(9),t.e(25)]).then(function(){var r=[t(321)];e.apply(null,r)}.bind(this)).catch(t.oe)}))},CSV:function(){return a.create((function(e){return Promise.all([t.e(0),t.e(1),t.e(4),t.e(27)]).then(function(){var r=[t(317)];e.apply(null,r)}.bind(this)).catch(t.oe)}))},GeoRSS:function(){return a.create((function(e){return t.e(104).then(function(){var r=[t(311)];e.apply(null,r)}.bind(this)).catch(t.oe)}))},GroupLayer:function(){return a.create((function(e){return t.e(118).then(function(){var r=[t(303)];e.apply(null,r)}.bind(this)).catch(t.oe)}))},IntegratedMeshLayer:function(){return a.create((function(e){return Promise.all([t.e(9),t.e(131)]).then(function(){var r=[t(315)];e.apply(null,r)}.bind(this)).catch(t.oe)}))},KML:function(){return a.create((function(e){return Promise.all([t.e(0),t.e(1),t.e(33)]).then(function(){var r=[t(319)];e.apply(null,r)}.bind(this)).catch(t.oe)}))},OpenStreetMap:function(){return a.create((function(e){return t.e(100).then(function(){var r=[t(313)];e.apply(null,r)}.bind(this)).catch(t.oe)}))},PointCloudLayer:function(){return a.create((function(e){return Promise.all([t.e(14),t.e(29)]).then(function(){var r=[t(320)];e.apply(null,r)}.bind(this)).catch(t.oe)}))},VectorTileLayer:function(){return a.create((function(e){return Promise.all([t.e(19),t.e(26)]).then(function(){var r=[t(323)];e.apply(null,r)}.bind(this)).catch(t.oe)}))},WebTiledLayer:function(){return a.create((function(e){return t.e(101).then(function(){var r=[t(283)];e.apply(null,r)}.bind(this)).catch(t.oe)}))},WFS:function(){return a.resolve(null)},WMS:function(){return a.create((function(e){return t.e(36).then(function(){var r=[t(324)];e.apply(null,r)}.bind(this)).catch(t.oe)}))},RasterDataLayer:function(){return a.resolve(null)}},r.supportedTypes={"web-scene/operational-layers":{ArcGISFeatureLayer:"readwrite",ArcGISImageServiceLayer:"readwrite",ArcGISMapServiceLayer:"readwrite",ArcGISSceneServiceLayer:"readwrite",ArcGISTiledElevationServiceLayer:"read",ArcGISTiledImageServiceLayer:"readwrite",ArcGISTiledMapServiceLayer:"readwrite",BuildingSceneLayer:"readwrite",GroupLayer:"readwrite",IntegratedMeshLayer:"readwrite",PointCloudLayer:"readwrite",WebTiledLayer:"readwrite",CSV:"readwrite",VectorTileLayer:"readwrite",WMS:"readwrite",KML:"readwrite",RasterDataLayer:"readwrite"},"web-scene/basemap":{ArcGISTiledImageServiceLayer:"readwrite",ArcGISTiledMapServiceLayer:"readwrite",WebTiledLayer:"readwrite",OpenStreetMap:"readwrite",VectorTileLayer:"readwrite",ArcGISImageServiceLayer:"readwrite",WMS:"readwrite",ArcGISMapServiceLayer:"readwrite"},"web-scene/ground":{ArcGISTiledElevationServiceLayer:"readwrite"},"web-map/operational-layers":{ArcGISImageServiceLayer:"readwrite",ArcGISImageServiceVectorLayer:"readwrite",ArcGISMapServiceLayer:"readwrite",ArcGISStreamLayer:"readwrite",ArcGISTiledImageServiceLayer:"readwrite",ArcGISTiledMapServiceLayer:"readwrite",ArcGISFeatureLayer:"readwrite",BingMapsAerial:"readwrite",BingMapsRoad:"readwrite",BingMapsHybrid:"readwrite",CSV:"readwrite",GeoRSS:"readwrite",KML:"readwrite",VectorTileLayer:"readwrite",WFS:"readwrite",WMS:"readwrite",WebTiledLayer:"readwrite"},"web-map/basemap":{ArcGISImageServiceLayer:"readwrite",ArcGISImageServiceVectorLayer:"readwrite",ArcGISMapServiceLayer:"readwrite",ArcGISTiledImageServiceLayer:"readwrite",ArcGISTiledMapServiceLayer:"readwrite",OpenStreetMap:"readwrite",VectorTileLayer:"readwrite",WMS:"readwrite",WebTiledLayer:"readwrite",BingMapsAerial:"readwrite",BingMapsRoad:"readwrite",BingMapsHybrid:"readwrite"}}}.apply(null,i))||(e.exports=n)},160:function(e,r,t){var i,n;i=[t.dj.c(e.i),r,t(22),t(20),t(31),t(32),t(47),t(34),t(23),t(162),t(163)],void 0===(n=function(e,r,t,i,n,o,a,s,u,c,l){var p=a.strict()({onTheGround:"on-the-ground",relativeToGround:"relative-to-ground",relativeToScene:"relative-to-scene",absoluteHeight:"absolute-height"}),d=new a.JSONMap({foot:"feet",kilometer:"kilometers",meter:"meters",mile:"miles","us-foot":"us-feet",yard:"yards"});return function(e){function r(){return null!==e&&e.apply(this,arguments)||this}var n;return t(r,e),n=r,r.prototype.readFeatureExpressionInfo=function(e,r){return null!=e?e:r.featureExpression&&0===r.featureExpression.value?{expression:"0"}:void 0},r.prototype.writeFeatureExpressionInfo=function(e,r,t,i){r[t]=e.write(null,i),"0"===e.expression&&(r.featureExpression={value:0})},Object.defineProperty(r.prototype,"mode",{get:function(){return this._isOverridden("mode")?this._get("mode"):null!=this.offset||this.featureExpressionInfo?"relative-to-ground":"on-the-ground"},set:function(e){this._override("mode",e)},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"unit",{set:function(e){this._set("unit",e)},enumerable:!0,configurable:!0}),r.prototype.write=function(){return this.offset||this.mode||this.featureExpressionInfo||this.unit?this.inherited(arguments):null},r.prototype.clone=function(){return new n({mode:this.mode,offset:this.offset,featureExpressionInfo:this.featureExpressionInfo?this.featureExpressionInfo.clone():void 0,unit:this.unit})},i([u.property({type:c,json:{write:!0}})],r.prototype,"featureExpressionInfo",void 0),i([u.reader("featureExpressionInfo",["featureExpressionInfo","featureExpression"])],r.prototype,"readFeatureExpressionInfo",null),i([u.writer("featureExpressionInfo",{featureExpressionInfo:{type:c},"featureExpression.value":{type:[0]}})],r.prototype,"writeFeatureExpressionInfo",null),i([u.property({type:p.apiValues,dependsOn:["offset","featureExpressionInfo"],nonNullable:!0,json:{type:p.jsonValues,read:p.read,write:{writer:p.write,isRequired:!0}}})],r.prototype,"mode",null),i([u.property({type:Number,json:{write:!0}})],r.prototype,"offset",void 0),i([u.property({type:l.supportedUnits,json:{type:String,read:d.read,write:d.write}})],r.prototype,"unit",null),n=i([u.subclass("esri.layers.support.ElevationInfo")],r)}(u.declared(s.JSONSupport))}.apply(null,i))||(e.exports=n)},162:function(e,r,t){var i,n;i=[t.dj.c(e.i),r,t(22),t(20),t(31),t(32),t(34),t(23),t(115)],void 0===(n=function(e,r,t,i,n,o,a,s,u){return function(e){function r(){return null!==e&&e.apply(this,arguments)||this}var a;return t(r,e),a=r,r.prototype.collectRequiredFields=function(e,r){return o(this,void 0,void 0,(function(){return n(this,(function(t){return[2,u.collectArcadeFieldNames(e,r,this.expression)]}))}))},r.prototype.clone=function(){return new a({expression:this.expression,title:this.title})},i([s.property({type:String,json:{write:!0}})],r.prototype,"expression",void 0),i([s.property({type:String,json:{write:!0}})],r.prototype,"title",void 0),a=i([s.subclass("esri.layers.support.FeatureExpressionInfo")],r)}(s.declared(a.JSONSupport))}.apply(null,i))||(e.exports=n)},163:function(e,r,t){var i,n;i=[t.dj.c(e.i),r,t(64)],void 0===(n=function(e,r,t){Object.defineProperty(r,"__esModule",{value:!0}),r.supportsUnit=function(e){return null!=t.meterIn[e]},r.getMetersPerUnit=function(e){return 1/(t.meterIn[e]||1)},r.supportedUnits=function(){var e=Object.keys(t.meterIn);return e.sort(),e}()}.apply(null,i))||(e.exports=n)},92:function(e,r,t){var i,n;i=[t.dj.c(e.i),r,t(26),t(50),t(175),t(151),t(160),t(327)],void 0===(n=function(e,r,t,i,n,o,a,s){Object.defineProperty(r,"__esModule",{value:!0}),r.screenSizePerspectiveEnabled={type:Boolean,value:!0,json:{origins:{"web-scene":{read:{source:["id","url","layerType"],reader:function(e,r){return null==r.screenSizePerspective&&"defaults"===this.originOf("screenSizePerspectiveEnabled")?void n.getProperties(this).store.set("screenSizePerspectiveEnabled",!1,0):r.screenSizePerspective}},write:{ignoreOrigin:!0,target:"screenSizePerspective",writer:function(e,r,t,i){"defaults"===this.originOf("screenSizePerspectiveEnabled")&&e?r[t]=e:o.willPropertyWrite(this,"screenSizePerspectiveEnabled",{},i)&&(r[t]=e)}}}}}},r.popupEnabled={type:Boolean,value:!0,json:{read:{source:"disablePopup",reader:function(e,r){return!r.disablePopup}},write:{target:"disablePopup",writer:function(e,r,t){r[t]=!e}}}},r.labelsVisible={type:Boolean,json:{read:{source:"showLabels"},write:{target:"showLabels"}}},r.url={type:String,json:{write:{isRequired:!0,ignoreOrigin:!0,writer:i.write}}},r.legendEnabled={type:Boolean,value:!0,json:{origins:{service:{read:{enabled:!1}}},read:{source:"showLegend"},write:{target:"showLegend"}}},r.elevationInfo={value:null,type:a,json:{origins:{service:{read:{source:"elevationInfo"},write:{target:"elevationInfo",enabled:!1}}},read:{source:"layerDefinition.elevationInfo"},write:{target:"layerDefinition.elevationInfo"}}},r.readOnlyService=function(e){return{type:e,readOnly:!0,json:{origins:{service:{read:!0}},read:!1}}},r.opacity={type:Number,json:{origins:{"web-document":{default:1,write:!0,read:!0}}}},r.opacityDrawingInfo=t({},r.opacity,{json:t({},r.opacity.json,{origins:{"web-document":t({},r.opacity.json.origins["web-document"],{write:{enabled:!0,target:{opacity:{type:Number},"layerDefinition.drawingInfo.transparency":{type:Number}}}})},read:{source:["layerDefinition.drawingInfo.transparency","drawingInfo.transparency"],reader:function(e,r,t){return t&&"service"!==t.origin||!r.drawingInfo||void 0===r.drawingInfo.transparency?r.layerDefinition&&r.layerDefinition.drawingInfo&&void 0!==r.layerDefinition.drawingInfo.transparency?s.transparencyToOpacity(r.layerDefinition.drawingInfo.transparency):void 0:s.transparencyToOpacity(r.drawingInfo.transparency)}}})})}.apply(null,i))||(e.exports=n)}}]);
//# sourceMappingURL=102.14e3e2bd.chunk.js.map