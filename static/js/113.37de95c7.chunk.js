(function(){(this||window).webpackJsonpareactgis.registerAbsMids({"esri/tasks/support/Query":158,"esri/tasks/support/StatisticDefinition":174,"esri/layers/graphics/data/FeatureFilter":529})})(),(this.webpackJsonpareactgis=this.webpackJsonpareactgis||[]).push([[113],{158:function(t,e,r){var i,o;i=[r.dj.c(t.i),e,r(22),r(20),r(48),r(48),r(159),r(197),r(47),r(34),r(39),r(23),r(54),r(40),r(169),r(152),r(174)],void 0===(o=function(t,e,r,i,o,n,s,a,p,l,u,y,d,c,h,m,f){var v=new p.default({esriSpatialRelIntersects:"intersects",esriSpatialRelContains:"contains",esriSpatialRelCrosses:"crosses",esriSpatialRelDisjoint:"disjoint",esriSpatialRelEnvelopeIntersects:"envelope-intersects",esriSpatialRelIndexIntersects:"index-intersects",esriSpatialRelOverlaps:"overlaps",esriSpatialRelTouches:"touches",esriSpatialRelWithin:"within",esriSpatialRelRelation:"relation"}),w=new p.default({esriSRUnit_Meter:"meters",esriSRUnit_Kilometer:"kilometers",esriSRUnit_Foot:"feet",esriSRUnit_StatuteMile:"miles",esriSRUnit_NauticalMile:"nautical-miles",esriSRUnit_USNauticalMile:"us-nautical-miles"});return function(t){function e(e){var r=t.call(this,e)||this;return r.cacheHint=!1,r.datumTransformation=null,r.distance=void 0,r.gdbVersion=null,r.geometry=null,r.geometryPrecision=void 0,r.groupByFieldsForStatistics=null,r.having=null,r.historicMoment=null,r.maxAllowableOffset=void 0,r.maxRecordCountFactor=1,r.multipatchOption=null,r.num=void 0,r.objectIds=null,r.orderByFields=null,r.outFields=null,r.outSpatialReference=null,r.outStatistics=null,r.parameterValues=null,r.pixelSize=null,r.quantizationParameters=null,r.rangeValues=null,r.relationParameter=null,r.resultType=null,r.returnCentroid=!1,r.returnDistinctValues=!1,r.returnExceededLimitFeatures=!0,r.returnGeometry=!1,r.returnQueryGeometry=!1,r.returnM=void 0,r.returnZ=void 0,r.source=null,r.spatialRelationship="intersects",r.start=void 0,r.sqlFormat=null,r.text=null,r.timeExtent=null,r.units=null,r.where=null,r}var p;return r(e,t),p=e,e.from=function(t){return d.ensureClass(p,t)},e.prototype.castDatumTransformation=function(t){return"number"==typeof t||"object"==typeof t?t:null},e.prototype.writeHistoricMoment=function(t,e){e.historicMoment=t&&t.getTime()},e.prototype.writeParameterValues=function(t,e){if(t){var r={};for(var i in t){var o=t[i];Array.isArray(o)?r[i]=o.map((function(t){return t instanceof Date?t.getTime():t})):o instanceof Date?r[i]=o.getTime():r[i]=o}e.parameterValues=r}},e.prototype.writeStart=function(t,e){e.resultOffset=this.start,e.resultRecordCount=this.num||10,e.where="1=1"},e.prototype.writeWhere=function(t,e){e.where=t||"1=1"},e.prototype.clone=function(){return new p(u.clone({cacheHint:this.cacheHint,datumTransformation:this.datumTransformation,distance:this.distance,gdbVersion:this.gdbVersion,geometry:this.geometry,geometryPrecision:this.geometryPrecision,groupByFieldsForStatistics:this.groupByFieldsForStatistics,having:this.having,historicMoment:this.historicMoment?new Date(this.historicMoment.getTime()):null,maxAllowableOffset:this.maxAllowableOffset,maxRecordCountFactor:this.maxRecordCountFactor,multipatchOption:this.multipatchOption,num:this.num,objectIds:this.objectIds,orderByFields:this.orderByFields,outFields:this.outFields,outSpatialReference:this.outSpatialReference,outStatistics:this.outStatistics,parameterValues:this.parameterValues,pixelSize:this.pixelSize,quantizationParameters:this.quantizationParameters,rangeValues:this.rangeValues,relationParameter:this.relationParameter,resultType:this.resultType,returnDistinctValues:this.returnDistinctValues,returnGeometry:this.returnGeometry,returnCentroid:this.returnCentroid,returnExceededLimitFeatures:this.returnExceededLimitFeatures,returnQueryGeometry:this.returnQueryGeometry,returnM:this.returnM,returnZ:this.returnZ,source:this.source,spatialRelationship:this.spatialRelationship,start:this.start,sqlFormat:this.sqlFormat,text:this.text,timeExtent:this.timeExtent,units:this.units,where:this.where}))},e.MAX_MAX_RECORD_COUNT_FACTOR=5,i([y.property({type:Boolean,json:{write:!0,default:!1}})],e.prototype,"cacheHint",void 0),i([y.property({json:{write:!0}})],e.prototype,"datumTransformation",void 0),i([y.cast("datumTransformation")],e.prototype,"castDatumTransformation",null),i([y.property({type:Number,json:{write:{overridePolicy:function(t){return{enabled:t>0}}}}})],e.prototype,"distance",void 0),i([y.property({type:String,json:{write:!0}})],e.prototype,"gdbVersion",void 0),i([y.property({types:n.geometryTypes,json:{read:c.fromJSON,write:!0}})],e.prototype,"geometry",void 0),i([y.property({type:Number,json:{write:!0}})],e.prototype,"geometryPrecision",void 0),i([y.property({type:[String],json:{write:!0}})],e.prototype,"groupByFieldsForStatistics",void 0),i([y.property({type:String,json:{write:!0}})],e.prototype,"having",void 0),i([y.property({type:Date})],e.prototype,"historicMoment",void 0),i([y.writer("historicMoment")],e.prototype,"writeHistoricMoment",null),i([y.property({type:Number,json:{write:!0}})],e.prototype,"maxAllowableOffset",void 0),i([y.property({type:Number,cast:function(t){return t<1?1:t>p.MAX_MAX_RECORD_COUNT_FACTOR?p.MAX_MAX_RECORD_COUNT_FACTOR:t},json:{write:{overridePolicy:function(t){return{enabled:t>1}}}}})],e.prototype,"maxRecordCountFactor",void 0),i([y.property({type:String,json:{write:!0}})],e.prototype,"multipatchOption",void 0),i([y.property({type:Number,json:{read:{source:"resultRecordCount"}}})],e.prototype,"num",void 0),i([y.property({type:[Number],json:{write:!0}})],e.prototype,"objectIds",void 0),i([y.property({type:[String],json:{write:!0}})],e.prototype,"orderByFields",void 0),i([y.property({type:[String],json:{write:!0}})],e.prototype,"outFields",void 0),i([y.property({type:o.SpatialReference,json:{read:{source:"outSR"},write:{target:"outSR"}}})],e.prototype,"outSpatialReference",void 0),i([y.property({type:[f],json:{write:!0}})],e.prototype,"outStatistics",void 0),i([y.property({json:{write:!0}})],e.prototype,"parameterValues",void 0),i([y.writer("parameterValues")],e.prototype,"writeParameterValues",null),i([y.property({types:s.symbolTypes,json:{read:h.read,write:!0}})],e.prototype,"pixelSize",void 0),i([y.property({type:m.default,json:{write:!0}})],e.prototype,"quantizationParameters",void 0),i([y.property({type:[Object],json:{write:!0}})],e.prototype,"rangeValues",void 0),i([y.property({type:String,json:{read:{source:"relationParam"},write:{target:"relationParam",overridePolicy:function(){return{enabled:"relation"===this.spatialRelationship}}}}})],e.prototype,"relationParameter",void 0),i([y.property({type:String,json:{write:!0}})],e.prototype,"resultType",void 0),i([y.property({type:Boolean,json:{write:{overridePolicy:function(t){return{enabled:t}}}}})],e.prototype,"returnCentroid",void 0),i([y.property({type:Boolean,json:{write:{overridePolicy:function(t){return{enabled:t}}}}})],e.prototype,"returnDistinctValues",void 0),i([y.property({type:Boolean,json:{write:{overridePolicy:function(t){return{enabled:!t}}}}})],e.prototype,"returnExceededLimitFeatures",void 0),i([y.property({type:Boolean,json:{write:!0}})],e.prototype,"returnGeometry",void 0),i([y.property({type:Boolean,json:{write:{overridePolicy:function(t){return{enabled:t}}}}})],e.prototype,"returnQueryGeometry",void 0),i([y.property({type:Boolean,json:{write:{overridePolicy:function(t){return{enabled:t}}}}})],e.prototype,"returnM",void 0),i([y.property({type:Boolean,json:{write:{overridePolicy:function(t){return{enabled:t}}}}})],e.prototype,"returnZ",void 0),i([y.property({json:{write:!0}})],e.prototype,"source",void 0),i([y.property({type:String,json:{read:{source:"spatialRel",reader:v.read},write:{target:"spatialRel",writer:v.write}}})],e.prototype,"spatialRelationship",void 0),i([y.property({type:Number,json:{read:{source:"resultOffset"}}})],e.prototype,"start",void 0),i([y.writer("start"),y.writer("num")],e.prototype,"writeStart",null),i([y.property({type:String,json:{write:!0}})],e.prototype,"sqlFormat",void 0),i([y.property({type:String,json:{write:!0}})],e.prototype,"text",void 0),i([y.property({type:a,json:{write:!0}})],e.prototype,"timeExtent",void 0),i([y.property({type:String,json:{read:w.read,write:{writer:w.write,overridePolicy:function(t){return{enabled:t&&this.distance>0}}}}})],e.prototype,"units",void 0),i([y.property({type:String,json:{write:{overridePolicy:function(t){return{enabled:null!=t||this.start>0}}}}})],e.prototype,"where",void 0),i([y.writer("where")],e.prototype,"writeWhere",null),p=i([y.subclass("esri.tasks.support.Query")],e)}(y.declared(l.JSONSupport))}.apply(null,i))||(t.exports=o)},174:function(t,e,r){var i,o;i=[r.dj.c(t.i),e,r(22),r(20),r(34),r(23)],void 0===(o=function(t,e,r,i,o,n){return function(t){function e(e){var r=t.call(this,e)||this;return r.maxPointCount=void 0,r.maxRecordCount=void 0,r.maxVertexCount=void 0,r.onStatisticField=null,r.outStatisticFieldName=null,r.statisticType=null,r}var o;return r(e,t),o=e,e.prototype.clone=function(){return new o({maxPointCount:this.maxPointCount,maxRecordCount:this.maxRecordCount,maxVertexCount:this.maxVertexCount,onStatisticField:this.onStatisticField,outStatisticFieldName:this.outStatisticFieldName,statisticType:this.statisticType})},i([n.property({type:Number,json:{write:!0}})],e.prototype,"maxPointCount",void 0),i([n.property({type:Number,json:{write:!0}})],e.prototype,"maxRecordCount",void 0),i([n.property({type:Number,json:{write:!0}})],e.prototype,"maxVertexCount",void 0),i([n.property({type:String,json:{write:!0}})],e.prototype,"onStatisticField",void 0),i([n.property({type:String,json:{write:!0}})],e.prototype,"outStatisticFieldName",void 0),i([n.property({type:String,json:{write:!0}})],e.prototype,"statisticType",void 0),o=i([n.subclass("esri.tasks.support.StatisticDefinition")],e)}(n.declared(o.JSONSupport))}.apply(null,i))||(t.exports=o)},529:function(t,e,r){var i,o;i=[r.dj.c(t.i),e,r(32),r(26),r(31),r(27),r(78),r(24),r(33),r(28),r(75),r(408),r(411),r(544),r(482),r(481),r(391),r(158)],void 0===(o=function(t,e,r,i,o,n,s,a,p,l,u,y,d,c,h,m,f,v){Object.defineProperty(e,"__esModule",{value:!0});var w=a.getLogger("esri.views.2d.layers.features.controllers.FeatureFilter"),S=function(){function t(t){var e=this;this._geometryBounds=u.create(),this._idToVisibility=new Map,this.check=function(t){var r=t.objectId,i=e._idToVisibility,o=e._applyFilter(t);return i.set(r,o?3:2),!!(1&i.get(r))},this._serviceInfo=t}return Object.defineProperty(t.prototype,"hash",{get:function(){return this._hash},enumerable:!0,configurable:!0}),t.prototype.clear=function(){var t=this._resetAllHiddenIds();return this.update(),{show:t,hide:[]}},t.prototype.invalidate=function(){var t=this;this._idToVisibility.forEach((function(e,r){t._idToVisibility.set(r,0)}))},t.prototype.setKnownIds=function(t){for(var e=0,r=t;e<r.length;e++){var i=r[e];this._idToVisibility.set(i,1)}},t.prototype.setTrue=function(t){var e=this,r=[],i=[],o=s.createSetFromValues(t);return this._idToVisibility.forEach((function(t,n){var s=!!(1&e._idToVisibility.get(n)),a=o.has(n);!s&&a?r.push(n):s&&!a&&i.push(n),e._idToVisibility.set(n,a?3:0)})),{show:r,hide:i}},t.prototype.createQuery=function(){var t=this,e=t.geometry,r=t.spatialRel,i=t.where,o=t.timeExtent,n=t.objectIds;return v.fromJSON({geometry:e,spatialRel:r,where:i,timeExtent:o,objectIds:n})},t.prototype.update=function(t,e){return r(this,void 0,void 0,(function(){var r;return o(this,(function(i){switch(i.label){case 0:return this._hash=JSON.stringify(t),[4,f.normalizeQueryLike(t,null,e)];case 1:return r=i.sent(),[4,l.all([this._setGeometryFilter(r),this._setIdFilter(r),this._setAttributeFilter(r),this._setTimeFilter(r)])];case 2:return i.sent(),[2]}}))}))},t.prototype._setAttributeFilter=function(t){if(!t||!t.where)return this._clause=null,void(this.where=null);var e=d.getWhereClause(t.where,this._serviceInfo.fieldsIndex);if(e.isStandardized)this._clause=e;else{var r=new n("mapview - bad input","Unable to apply filter's definition expression, as expression is not standardized.",e);w.error(r)}this.where=t.where},t.prototype._setIdFilter=function(t){this._idsToShow=t&&t.objectIds&&s.createSetFromValues(t.objectIds),this._idsToHide=t&&t.hiddenIds&&s.createSetFromValues(t.hiddenIds),this.objectIds=t&&t.objectIds},t.prototype._setGeometryFilter=function(t){return r(this,void 0,void 0,(function(){var e,r,i;return o(this,(function(o){switch(o.label){case 0:return t&&t.geometry?(e=t.geometry,r=t.spatialRel||"esriSpatialRelIntersects",[4,h.getSpatialQueryOperator(r,e,this._serviceInfo)]):(this._spatialQueryOperator=null,this.geometry=null,this.spatialRel=null,[2]);case 1:return i=o.sent(),y.getBoundsXY(this._geometryBounds,e),this._spatialQueryOperator=i,this.geometry=e,this.spatialRel=r,[2]}}))}))},t.prototype._setTimeFilter=function(t){if(this.timeExtent=this._timeOperator=null,t&&t.timeExtent){if(!this._serviceInfo.timeInfo){var e=new n("feature-layer-view:time-filter-not-available","Unable to apply time filter, as layer doesn't have time metadata.",t.timeExtent);return void w.error(e)}this.timeExtent=t.timeExtent,this._timeOperator=m.getTimeOperator(this._serviceInfo.timeInfo,t.timeExtent,c.optimizedFeatureQueryEngineAdapter)}},t.prototype._applyFilter=function(t){return this._filterByGeometry(t)&&this._filterById(t)&&this._filterByTime(t)&&this._filterByExpression(t)},t.prototype._filterByExpression=function(t){return!this.where||this._clause.testFeature(t)},t.prototype._filterById=function(t){return(!this._idsToHide||!this._idsToHide.has(t.objectId))&&(!this._idsToShow||this._idsToShow.has(t.objectId))},t.prototype._filterByGeometry=function(t){return!this.geometry||!!this._earlyGeometryReject(t)&&this._spatialQueryOperator(t.geometry)},t.prototype._filterByTime=function(t){return!p.isSome(this._timeOperator)||this._timeOperator(t)},t.prototype._earlyGeometryReject=function(t){return!(!t.geometry||!t.geometry.coords.length)&&(!t.centroid||"esriSpatialRelContains"!==this.spatialRel||u.containsPoint(this._geometryBounds,t.centroid.coords))},t.prototype._resetAllHiddenIds=function(){var t=this,e=[];return this._idToVisibility.forEach((function(r,i){1&r||(t._idToVisibility.set(i,1),e.push(i))})),e},t}();e.default=S}.apply(null,i))||(t.exports=o)}}]);
//# sourceMappingURL=113.37de95c7.chunk.js.map