(function(){(this||window).webpackJsonpareactgis.registerAbsMids({"esri/layers/support/Field":112,"esri/renderers/visualVariables/support/sizeVariableUtils":117,"esri/renderers":157,"esri/layers/support/FieldsIndex":194,"esri/layers/BuildingSceneLayer":321,"esri/support/popupUtils":442,"esri/layers/support/fieldProperties":486,"esri/layers/support/BuildingFilterMode":764,"esri/layers/buildingSublayers/BuildingComponentSublayer":928,"esri/layers/buildingSublayers/BuildingSublayer":929,"esri/layers/support/BuildingFilterAuthoringInfo":930,"esri/layers/buildingSublayers/BuildingGroupSublayer":2238,"esri/layers/support/BuildingFilter":2239,"esri/core/uuid":2240,"esri/layers/support/BuildingFilterAuthoringInfoCheckbox":2241,"esri/layers/support/BuildingFilterAuthoringInfoBlock":2242,"esri/layers/support/BuildingFilterAuthoringInfoType":2243,"esri/layers/support/BuildingFilterBlock":2244,"esri/layers/support/BuildingFilterModeSolid":2245,"esri/layers/support/BuildingFilterModeWireFrame":2246})})(),(this.webpackJsonpareactgis=this.webpackJsonpareactgis||[]).push([[25],{112:function(e,r,t){var i,n;i=[t.dj.c(e.i),r,t(22),t(20),t(47),t(34),t(23),t(54),t(354),t(360)],void 0===(n=function(e,r,t,i,n,o,l,a,p,s){var u=new n.default({binary:"binary",coordinate:"coordinate",countOrAmount:"count-or-amount",dateAndTime:"date-and-time",description:"description",locationOrPlaceName:"location-or-place-name",measurement:"measurement",nameOrTitle:"name-or-title",none:"none",orderedOrRanked:"ordered-or-ranked",percentageOrRatio:"percentage-or-ratio",typeOrCategory:"type-or-category",uniqueIdentifier:"unique-identifier"});return function(e){function r(r){var t=e.call(this,r)||this;return t.alias=null,t.defaultValue=void 0,t.description=null,t.domain=null,t.editable=!0,t.length=-1,t.name=null,t.nullable=!0,t.type=null,t.valueType=null,t}var n;return t(r,e),n=r,r.prototype.readDescription=function(e,r){var t,i=r.description;try{t=JSON.parse(i)}catch(e){}return t?t.value:null},r.prototype.readValueType=function(e,r){var t,i=r.description;try{t=JSON.parse(i)}catch(e){}return t?u.fromJSON(t.fieldValueType):null},r.prototype.clone=function(){return new n({alias:this.alias,defaultValue:this.defaultValue,description:this.description,domain:this.domain&&this.domain.clone()||null,editable:this.editable,length:this.length,name:this.name,nullable:this.nullable,type:this.type,valueType:this.valueType})},i([l.property({type:String,json:{write:!0}})],r.prototype,"alias",void 0),i([l.property({type:[String,Number],json:{write:{allowNull:!0}}})],r.prototype,"defaultValue",void 0),i([l.property()],r.prototype,"description",void 0),i([l.reader("description")],r.prototype,"readDescription",null),i([l.property({types:p.types,json:{read:{reader:p.fromJSON},write:!0}})],r.prototype,"domain",void 0),i([l.property({type:Boolean,json:{write:!0}})],r.prototype,"editable",void 0),i([l.property({type:a.Integer,json:{write:!0}})],r.prototype,"length",void 0),i([l.property({type:String,json:{write:!0}})],r.prototype,"name",void 0),i([l.property({type:Boolean,json:{write:!0}})],r.prototype,"nullable",void 0),i([l.enumeration.serializable()(s.kebabDict)],r.prototype,"type",void 0),i([l.property()],r.prototype,"valueType",void 0),i([l.reader("valueType",["description"])],r.prototype,"readValueType",null),n=i([l.subclass("esri.layers.support.Field")],r)}(l.declared(o.JSONSupport))}.apply(null,i))||(e.exports=n)},117:function(e,r,t){var i,n;i=[t.dj.c(e.i),r],void 0===(n=function(e,r){function t(e){return e.valueExpression?"expression":e.field&&"string"==typeof e.field?"field":"unknown"}Object.defineProperty(r,"__esModule",{value:!0}),r.isSizeVariable=function(e){return e&&"esri.renderers.visualVariables.SizeVariable"===e.declaredClass},r.isValidNumber=function(e){return null!=e&&!isNaN(e)&&isFinite(e)},r.getInputValueType=t,r.getTransformationType=function(e,r){var i=r||t(e),n=e.valueUnit||"unknown";return"unknown"===i?"constant":e.stops?"stops":null!=e.minSize&&null!=e.maxSize&&null!=e.minDataValue&&null!=e.maxDataValue?"clamped-linear":"unknown"===n?null!=e.minSize&&null!=e.minDataValue?e.minSize&&e.minDataValue?"proportional":"additive":"identity":"real-world-size"}}.apply(null,i))||(e.exports=n)},157:function(e,r,t){var i,n;i=[t.dj.c(e.i),r,t(300),t(308),t(309),t(310),t(287),t(301),t(302),t(178)],void 0===(n=function(e,r,t,i,n,o,l,a,p,s){Object.defineProperty(r,"__esModule",{value:!0}),r.ClassBreaksRenderer=t,r.DictionaryRenderer=i,r.DotDensityRenderer=n,r.HeatmapRenderer=o,r.BaseRenderer=l,r.SimpleRenderer=a,r.UniqueValueRenderer=p,r.isRenderer=function(e){return e instanceof r.BaseRenderer},r.read=s.read,r.write=s.write,r.fromJSON=s.fromJSON,r.rendererTypes={key:"type",base:r.BaseRenderer,typeMap:{heatmap:r.HeatmapRenderer,simple:r.SimpleRenderer,"unique-value":r.UniqueValueRenderer,"class-breaks":r.ClassBreaksRenderer,"dot-density":r.DotDensityRenderer,dictionary:r.DictionaryRenderer}},r.webSceneRendererTypes={key:"type",base:r.BaseRenderer,typeMap:{simple:r.SimpleRenderer,"unique-value":r.UniqueValueRenderer,"class-breaks":r.ClassBreaksRenderer}}}.apply(null,i))||(e.exports=n)},194:function(e,r,t){var i,n;i=[t.dj.c(e.i),r,t(21)],void 0===(n=function(e,r,t){function i(e){return"date"===e.type||"esriFieldTypeDate"===e.type}function n(e){return e.toLowerCase().trim()}return function(){function e(e){if(this.fields=e,this._fieldsMap=new Map,this._dateFieldsSet=new Set,this.dateFields=[],e){for(var r=[],t=0,o=e;t<o.length;t++){var l=o[t],a=l&&l.name;if(a){var p=n(a);this._fieldsMap.set(a,l),this._fieldsMap.set(p,l),r.push(p),i(l)&&(this.dateFields.push(l),this._dateFieldsSet.add(l))}}r.sort(),this.uid=r.join(",")}}return e.prototype.destroy=function(){this._fieldsMap.clear()},e.prototype.has=function(e){return null!=this.get(e)},e.prototype.get=function(e){return null!=e?this._fieldsMap.get(e)||this._fieldsMap.get(n(e)):void 0},e.prototype.isDateField=function(e){return this._dateFieldsSet.has(this.get(e))},e.prototype.normalizeFieldName=function(e){var r=this.get(e);if(r)return r.name},e}()}.apply(null,i))||(e.exports=n)},2238:function(e,r,t){var i,n;i=[t.dj.c(e.i),r,t(26),t(22),t(20),t(91),t(498),t(398),t(23),t(928),t(929)],void 0===(n=function(e,r,t,i,n,o,l,a,p,s,u){function d(e,r,t){if(e&&Array.isArray(e))return new o(e.map((function(e){var r=function(e){return"group"===e.layerType?c:s}(e);if(r){var i=new r;return i.read(e,t),i}t&&t.messages&&e&&t.messages.push(new a("building-scene-layer:unsupported-sublayer-type","Building scene sublayer of type '"+(e.type||"unknown")+"' are not supported",{definition:e,context:t}))})))}var y={type:o,readOnly:!0,json:{origins:{service:{read:{source:"sublayers",reader:d}}},read:!1}},c=function(e){function r(r){var t=e.call(this,r)||this;return t.type="building-group",t.listMode="show",t.sublayers=null,t}var t;return i(r,e),t=r,r.prototype.loadAll=function(){var e=this;return l.loadAllChildren(this,(function(r){return t.forEachSublayer(e.sublayers,(function(e){"building-group"!==e.type&&r(e)}))}))},n([p.property({type:["hide","show","hide-children"],json:{write:!0}})],r.prototype,"listMode",void 0),n([p.property(y)],r.prototype,"sublayers",void 0),t=n([p.subclass("esri.layers.buildingSublayers.BuildingGroupSublayer")],r)}(p.declared(u));return function(e){e.sublayersProperty=y,e.readSublayers=d,e.forEachSublayer=function e(r,t){r.forEach((function(r){t(r),"building-group"===r.type&&e(r.sublayers,t)}))}}(c||(c={})),c}.apply(null,i))||(e.exports=n)},2239:function(e,r,t){var i,n;i=[t.dj.c(e.i),r,t(22),t(20),t(91),t(34),t(39),t(2240),t(23),t(930),t(2241),t(2244)],void 0===(n=function(e,r,t,i,n,o,l,a,p,s,u,d){var y=n.ofType(d);return function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.description=null,r.filterBlocks=null,r.id=a.generateUUID(),r.name=null,r}var n;return t(r,e),n=r,r.prototype.clone=function(){return new n({description:this.description,filterBlocks:l.clone(this.filterBlocks),id:this.id,name:this.name,filterAuthoringInfo:l.clone(this.filterAuthoringInfo)})},i([p.property({type:String,json:{write:!0}})],r.prototype,"description",void 0),i([p.property({type:y,json:{write:{enabled:!0,isRequired:!0}}})],r.prototype,"filterBlocks",void 0),i([p.property({types:{key:"type",base:s,typeMap:{checkbox:u}},json:{read:function(e){switch(e&&e.type){case"checkbox":return u.fromJSON(e);default:return null}},write:!0}})],r.prototype,"filterAuthoringInfo",void 0),i([p.property({type:String,constructOnly:!0,json:{write:{enabled:!0,isRequired:!0}}})],r.prototype,"id",void 0),i([p.property({type:String,json:{write:{enabled:!0,isRequired:!0}}})],r.prototype,"name",void 0),n=i([p.subclass("esri.layers.support.BuildingFilter")],r)}(p.declared(o.JSONSupport))}.apply(null,i))||(e.exports=n)},2240:function(e,r,t){var i,n;i=[t.dj.c(e.i),r],void 0===(n=function(e,r){Object.defineProperty(r,"__esModule",{value:!0}),r.generateUUID=function(){var e=t.getRandomValues(new Uint16Array(8));e[3]=4095&e[3]|16384,e[4]=16383&e[4]|32768;var r=function(r){return e[r].toString(16)};return r(0)+r(1)+"-"+r(2)+"-"+r(3)+"-"+r(4)+"-"+r(5)+r(6)+r(7)};var t=window.crypto||window.msCrypto}.apply(null,i))||(e.exports=n)},2241:function(e,r,t){var i,n;i=[t.dj.c(e.i),r,t(22),t(20),t(91),t(39),t(23),t(930),t(2242)],void 0===(n=function(e,r,t,i,n,o,l,a,p){var s=n.ofType(p);return function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.type="checkbox",r}var n;return t(r,e),n=r,r.prototype.clone=function(){return new n({filterBlocks:o.clone(this.filterBlocks)})},i([l.property({type:["checkbox"]})],r.prototype,"type",void 0),i([l.property({type:s,json:{write:!0}})],r.prototype,"filterBlocks",void 0),n=i([l.subclass("esri.layers.support.BuildingFilterAuthoringInfoCheckbox")],r)}(l.declared(a))}.apply(null,i))||(e.exports=n)},2242:function(e,r,t){var i,n;i=[t.dj.c(e.i),r,t(22),t(20),t(91),t(34),t(39),t(23),t(2243)],void 0===(n=function(e,r,t,i,n,o,l,a,p){var s=n.ofType(p);return function(e){function r(){return null!==e&&e.apply(this,arguments)||this}var n;return t(r,e),n=r,r.prototype.clone=function(){return new n({filterTypes:l.clone(this.filterTypes)})},i([a.property({type:s,json:{write:!0}})],r.prototype,"filterTypes",void 0),n=i([a.subclass("esri.layers.support.BuildingFilterAuthoringInfoBlock")],r)}(a.declared(o.JSONSupport))}.apply(null,i))||(e.exports=n)},2243:function(e,r,t){var i,n;i=[t.dj.c(e.i),r,t(22),t(20),t(34),t(39),t(23)],void 0===(n=function(e,r,t,i,n,o,l){return function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.filterType=null,r.filterValues=null,r}var n;return t(r,e),n=r,r.prototype.clone=function(){return new n({filterType:this.filterType,filterValues:o.clone(this.filterValues)})},i([l.property({type:String,json:{write:!0}})],r.prototype,"filterType",void 0),i([l.property({type:[String],json:{write:!0}})],r.prototype,"filterValues",void 0),n=i([l.subclass("esri.layers.support.BuildingFilterAuthoringInfoType")],r)}(l.declared(n.JSONSupport))}.apply(null,i))||(e.exports=n)},2244:function(e,r,t){var i,n;i=[t.dj.c(e.i),r,t(22),t(20),t(34),t(39),t(23),t(764),t(2245),t(2246)],void 0===(n=function(e,r,t,i,n,o,l,a,p,s){var u={types:{key:"type",base:a,typeMap:{solid:p,"wire-frame":s}},json:{read:function(e){switch(e&&e.type){case"solid":return p.fromJSON(e);case"wireFrame":return s.fromJSON(e);default:return null}},write:{enabled:!0,isRequired:!0}}};return function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.filterExpression=null,r.filterMode=new p,r.title="",r}var n;return t(r,e),n=r,r.prototype.clone=function(){return new n({filterExpression:this.filterExpression,filterMode:o.clone(this.filterMode),title:this.title})},i([l.property({type:String,json:{write:{enabled:!0,isRequired:!0}}})],r.prototype,"filterExpression",void 0),i([l.property(u)],r.prototype,"filterMode",void 0),i([l.property({type:String,json:{write:{enabled:!0,isRequired:!0}}})],r.prototype,"title",void 0),n=i([l.subclass("esri.layers.support.BuildingFilterBlock")],r)}(l.declared(n.JSONSupport))}.apply(null,i))||(e.exports=n)},2245:function(e,r,t){var i,n;i=[t.dj.c(e.i),r,t(22),t(20),t(23),t(764)],void 0===(n=function(e,r,t,i,n,o){return function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.type="solid",r}var o;return t(r,e),o=r,r.prototype.clone=function(){return new o},i([n.property({type:["solid"],readOnly:!0,json:{write:!0}})],r.prototype,"type",void 0),o=i([n.subclass("esri.layers.support.BuildingFilterModeSolid")],r)}(n.declared(o))}.apply(null,i))||(e.exports=n)},2246:function(e,r,t){var i,n;i=[t.dj.c(e.i),r,t(22),t(20),t(39),t(23),t(764),t(679)],void 0===(n=function(e,r,t,i,n,o,l,a){return function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.type="wire-frame",r.edges=null,r}var l;return t(r,e),l=r,r.prototype.clone=function(){return new l({edges:n.clone(this.edges)})},i([o.enumeration.serializable()({wireFrame:"wire-frame"})],r.prototype,"type",void 0),i([o.property(a.symbol3dEdgesProperty)],r.prototype,"edges",void 0),l=i([o.subclass("esri.layers.support.BuildingFilterModeWireFrame")],r)}(o.declared(l))}.apply(null,i))||(e.exports=n)},321:function(e,r,t){var i,n;i=[t.dj.c(e.i),r,t(26),t(22),t(20),t(31),t(32),t(91),t(532),t(27),t(39),t(498),t(24),t(33),t(289),t(23),t(86),t(59),t(295),t(928),t(2238),t(338),t(155),t(116),t(168),t(527),t(2239),t(92)],void 0===(n=function(e,r,t,i,n,o,l,a,p,s,u,d,y,c,f,v,h,g,b,m,S,w,O,F,j,x,T,I){var B=y.getLogger("esri.layers.BuildingSceneLayer"),M=a.ofType(T),N=u.clone(S.sublayersProperty);return N.json.origins["web-scene"]={type:[m],write:{enabled:!0,overridePolicy:function(){return{enabled:!1}}}},function(e){function r(r){var t=e.call(this,r)||this;return t.operationalLayerType="BuildingSceneLayer",t.allSublayers=new p({root:t,rootCollectionNames:["sublayers"],getChildrenFunction:function(e){return"building-group"===e.type?e.sublayers:null}}),t.sublayers=null,t.sublayerOverrides=null,t.filters=new M,t.activeFilterId=null,t.type="building-scene",t}return i(r,e),r.prototype.normalizeCtorArgs=function(e){return"string"==typeof e?{url:e}:e},r.prototype.readSublayers=function(e,r,t){var i=this,n=S.readSublayers(e,r,t);return S.forEachSublayer(n,(function(e){return e.layer=i})),this.sublayerOverrides&&(this.applySublayerOverrides(n,this.sublayerOverrides),this.sublayerOverrides=null),n},r.prototype.applySublayerOverrides=function(e,r){var t=r.overrides,i=r.context;S.forEachSublayer(e,(function(e){return e.read(t.get(e.id),i)}))},r.prototype.readSublayerOverrides=function(e,r){for(var t=new Map,i=0,n=e;i<n.length;i++){var o=n[i];null!=o&&"object"==typeof o&&"number"==typeof o.id?t.set(o.id,o):r.messages.push(new s("building-scene-layer:invalid-sublayer-override","Invalid value for sublayer override. Not an object or no id specified.",{value:o}))}return{overrides:t,context:r}},r.prototype.writeSublayerOverrides=function(e,r,t){var i=[];S.forEachSublayer(this.sublayers,(function(e){var r=e.write({},t);Object.keys(r).length>1&&i.push(r)})),i.length>0&&(r.sublayers=i)},r.prototype.writeUnappliedOverrides=function(e,r){r.sublayers=[],e.overrides.forEach((function(e){r.sublayers.push(u.clone(e))}))},r.prototype.write=function(e,r){return e=this.inherited(arguments),r&&"web-scene"===r.origin&&(this.sublayers?this.writeSublayerOverrides(this.sublayers,e,r):this.sublayerOverrides&&this.writeUnappliedOverrides(this.sublayerOverrides,e)),e},r.prototype.read=function(e,r){if(this.inherited(arguments),r&&"web-scene"===r.origin&&null!=e&&Array.isArray(e.sublayers)){var t=this.readSublayerOverrides(e.sublayers,r);this.sublayers?this.applySublayerOverrides(this.sublayers,t):this.sublayerOverrides=t}},Object.defineProperty(r.prototype,"elevationInfo",{set:function(e){this._set("elevationInfo",e),this._validateElevationInfo()},enumerable:!0,configurable:!0}),r.prototype.load=function(e){var r=this,t=c.isSome(e)?e.signal:null,i=this.loadFromPortal({supportedTypes:["Scene Service"]},e).then((function(){return r._fetchService(t)}),(function(){return r._fetchService(t)}));return this.addResolvingPromise(i),this.when()},r.prototype.loadAll=function(){var e=this;return d.loadAll(this,(function(r){return S.forEachSublayer(e.sublayers,(function(e){"building-group"!==e.type&&r(e)}))}))},r.prototype.validateLayer=function(e){if(!e.layerType||"Building"!==e.layerType)throw new s("buildingscenelayer:layer-type-not-supported","BuildingSceneLayer does not support this layer type",{layerType:e.layerType})},r.prototype._validateElevationInfo=function(){var e=this.elevationInfo;e&&("absolute-height"!==e.mode&&B.warn(".elevationInfo=","Building scene layers only support absolute-height elevation mode"),e.featureExpressionInfo&&"0"!==e.featureExpressionInfo.expression&&B.warn(".elevationInfo=","Building scene layers do not support featureExpressionInfo"))},n([v.property({type:["BuildingSceneLayer"]})],r.prototype,"operationalLayerType",void 0),n([v.property({readOnly:!0})],r.prototype,"allSublayers",void 0),n([v.property(N)],r.prototype,"sublayers",void 0),n([v.reader("service","sublayers")],r.prototype,"readSublayers",null),n([v.property({type:M,nonNullable:!0,json:{write:!0}})],r.prototype,"filters",void 0),n([v.property({type:String,json:{write:!0}})],r.prototype,"activeFilterId",void 0),n([v.property(I.readOnlyService(h))],r.prototype,"fullExtent",void 0),n([v.property({type:["show","hide","hide-children"]})],r.prototype,"listMode",void 0),n([v.property(I.readOnlyService(g))],r.prototype,"spatialReference",void 0),n([v.property(I.elevationInfo)],r.prototype,"elevationInfo",null),n([v.property({json:{read:!1},readOnly:!0})],r.prototype,"type",void 0),n([v.subclass("esri.layers.BuildingSceneLayer")],r)}(v.declared(j.ScaleRangeLayer(x.SceneService(w.ArcGISService(O.OperationalLayer(F.PortalLayer(f.MultiOriginJSONMixin(b))))))))}.apply(null,i))||(e.exports=n)},442:function(e,r,t){var i,n;i=[t.dj.c(e.i),r,t(26),t(500),t(353),t(534),t(503),t(504)],void 0===(n=function(e,r,t,i,n,o,l,a){function p(e,r){var t=e;if(r.ignoreFieldTypes&&(e=e.filter((function(e){return-1===r.ignoreFieldTypes.indexOf(e.type)}))),0===e.length)return null;var i=r.maximumFields&&e.length>r.maximumFields;return i&&(e=e.slice(0,r.maximumFields)),e===t&&(e=e.slice()),e.sort(s),{fields:e,limitExceeded:i}}function s(e,r){return"oid"===e.type?-1:"oid"===r.type?1:h(e)?-1:h(r)?1:(e.alias||e.name).toLocaleLowerCase().localeCompare((r.alias||r.name).toLocaleLowerCase())}function u(e,r){return e.editable&&-1===g.indexOf(e.type)&&!function(e,r){if(!e||!r)return!1;var t=r.creationDateField,i=r.creatorField,n=r.editDateField,o=r.editorField;return-1!==[t&&t.toLowerCase(),i&&i.toLowerCase(),n&&n.toLowerCase(),o&&o.toLowerCase()].indexOf(e.toLowerCase())}(e.name,r)}function d(e){var r=e.fields,t=e.visibleFieldNames,i=e.editFieldsInfo;return r.map((function(e){return new l({fieldName:e.name,isEditable:u(e,i),label:e.alias,format:y(e),visible:!t||t.has(e.name)})}))}function y(e){switch(e.type){case"small-integer":case"integer":case"single":return new a({digitSeparator:!0,places:0});case"double":return new a({digitSeparator:!0,places:2});case"date":return new a({dateFormat:"long-month-day-year"});default:return null}}function c(e){var r=[new o.FieldsContent,new o.AttachmentsContent];return e&&r.push(new o.TextContent({text:"<small>"+i.tooManyFields+"</small>"})),r}function f(e,r){for(var t=0,i=e;t<i.length;t++){var n=i[t];if(n&&n.valueType&&n.valueType===r)return n.name}return null}function v(e){return e&&e.length?f(e,"name-or-title")||f(e,"unique-identifier")||f(e,"type-or-category")||function(e){for(var r=0,t=e;r<t.length;r++){var i=t[r];if(i&&i.name){var n=i.name.toLowerCase();if(n.indexOf("name")>-1||n.indexOf("title")>-1)return i.name}}return null}(e):null}function h(e){return"name"===(e.name&&e.name.toLowerCase())||"name"===(e.alias&&e.alias.toLowerCase())||void 0}Object.defineProperty(r,"__esModule",{value:!0});var g=["oid","global-id","guid"];r.createPopupTemplate=function(e,r){var i=e.displayField,o=e.fields,l=e.title,a=e.visibleFieldNames,s=e.editFieldsInfo;if(!o)return null;var u=p(o,t({},b,r));if(!u)return null;var y=function(e){var r=e.titleBase,t=e.fields,i=e.displayField||v(t);return i?r+": {"+i.trim()+"}":r}({titleBase:l,fields:u.fields,displayField:i}),f=c(u.limitExceeded),h=d({fields:u.fields,visibleFieldNames:a,editFieldsInfo:s});return new n({title:y,content:f,fieldInfos:h})};var b={ignoreFieldTypes:["geometry","blob","raster","guid","xml"],maximumFields:75}}.apply(null,i))||(e.exports=n)},486:function(e,r,t){var i,n;i=[t.dj.c(e.i),r,t(405),t(24),t(112),t(115)],void 0===(n=function(e,r,t,i,n,o){Object.defineProperty(r,"__esModule",{value:!0});var l=i.getLogger("esri.layers.support.fieldProperties");r.defineFieldProperties=function(){return{fields:{type:[n],value:null},outFields:{type:[String],dependsOn:["fields"],json:{read:!1},set:function(e){this._userOutFields=e,this.notifyChange("outFields")},get:function(){var e=this._userOutFields;if(!e||!e.length)return null;if(t.includes(e,"*"))return["*"];if(!this.fields)return e;for(var r=0,i=e;r<i.length;r++){var n=i[r];o.hasField(this.fields,n)||l.error("field-attributes-layer:invalid-field","Invalid field "+n+" found in outFields",{layer:this,outFields:e})}return o.fixFields(this.fields,e)}}}}}.apply(null,i))||(e.exports=n)},764:function(e,r,t){var i,n;i=[t.dj.c(e.i),r,t(22),t(20),t(34),t(23)],void 0===(n=function(e,r,t,i,n,o){return function(e){function r(){return null!==e&&e.apply(this,arguments)||this}return t(r,e),i([o.property({readOnly:!0,json:{read:!1}})],r.prototype,"type",void 0),i([o.subclass("esri.layers.support.BuildingFilterMode")],r)}(o.declared(n.JSONSupport))}.apply(null,i))||(e.exports=n)},928:function(e,r,t){var i,n;i=[t.dj.c(e.i),r,t(26),t(22),t(20),t(31),t(32),t(353),t(157),t(51),t(409),t(33),t(337),t(23),t(86),t(59),t(929),t(92),t(486),t(194),t(584),t(178),t(442),t(160)],void 0===(n=function(e,r,t,i,n,o,l,a,p,s,u,d,y,c,f,v,h,g,b,m,S,w,O,F){var j=b.defineFieldProperties();return function(e){function r(r){var t=e.call(this,r)||this;return t.type="building-component",t.nodePages=null,t.materialDefinitions=null,t.textureSetDefinitions=null,t.geometryDefinitions=null,t.serviceUpdateTimeStamp=null,t.fields=null,t.outFields=null,t.listMode="show",t.renderer=null,t.definitionExpression=null,t.popupEnabled=!0,t.popupTemplate=null,t.geometryType="mesh",t.profile="mesh-pyramids",t}return i(r,e),Object.defineProperty(r.prototype,"parsedUrl",{get:function(){return this.layer?{path:this.layer.parsedUrl.path+"/sublayers/"+this.id,query:this.layer.parsedUrl.query}:null},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"fieldsIndex",{get:function(){return new m(this.fields)},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"objectIdField",{get:function(){if(null!=this.fields)for(var e=0,r=this.fields;e<r.length;e++){var t=r[e];if("oid"===t.type)return t.name}return null},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"defaultPopupTemplate",{get:function(){return this.createPopupTemplate()},enumerable:!0,configurable:!0}),r.prototype.load=function(e){var r=d.isSome(e)?e.signal:null;return this.addResolvingPromise(this._fetchService(r)),this.when()},r.prototype.createPopupTemplate=function(e){return O.createPopupTemplate(this,e)},r.prototype._fetchService=function(e){return l(this,void 0,void 0,(function(){var r,t;return o(this,(function(i){switch(i.label){case 0:return[4,s(this.parsedUrl.path,{query:{f:"json"},responseType:"json",signal:e})];case 1:return r=i.sent(),t=r.data,this.read(t,{origin:"service",url:this.parsedUrl}),[2]}}))}))},r.prototype.getField=function(e){return this.fieldsIndex.get(e)},r.prototype.getFieldDomain=function(e){var r=this.getField(e);return r&&r.domain?r.domain:null},n([c.property({readOnly:!0,dependsOn:["layer","id"]})],r.prototype,"parsedUrl",null),n([c.property({type:S.I3SNodePageDefinition,readOnly:!0})],r.prototype,"nodePages",void 0),n([c.property({type:[S.I3SMaterialDefinition],readOnly:!0})],r.prototype,"materialDefinitions",void 0),n([c.property({type:[S.I3STextureSetDefinition],readOnly:!0})],r.prototype,"textureSetDefinitions",void 0),n([c.property({type:[S.I3SGeometryDefinition],readOnly:!0})],r.prototype,"geometryDefinitions",void 0),n([c.property({readOnly:!0})],r.prototype,"serviceUpdateTimeStamp",void 0),n([c.property({readOnly:!0})],r.prototype,"store",void 0),n([c.property({type:String,readOnly:!0,json:{read:{source:"store.rootNode"}}})],r.prototype,"rootNode",void 0),n([c.property({readOnly:!0})],r.prototype,"attributeStorageInfo",void 0),n([c.property(j.fields)],r.prototype,"fields",void 0),n([c.property({readOnly:!0,dependsOn:["fields"]})],r.prototype,"fieldsIndex",null),n([c.property(j.outFields)],r.prototype,"outFields",void 0),n([c.property({type:String,dependsOn:["fields"],readOnly:!0})],r.prototype,"objectIdField",null),n([c.property({readOnly:!0,type:f,aliasOf:"layer.fullExtent"})],r.prototype,"fullExtent",void 0),n([c.property({readOnly:!0,type:v,aliasOf:"layer.spatialReference"})],r.prototype,"spatialReference",void 0),n([c.property({readOnly:!0,aliasOf:"layer.version"})],r.prototype,"version",void 0),n([c.property({readOnly:!0,type:F,aliasOf:"layer.elevationInfo"})],r.prototype,"elevationInfo",void 0),n([c.property({readOnly:!0,type:Number,aliasOf:"layer.minScale"})],r.prototype,"minScale",void 0),n([c.property({readOnly:!0,type:Number,aliasOf:"layer.maxScale"})],r.prototype,"maxScale",void 0),n([c.property({type:["hide","show"],json:{write:!0}})],r.prototype,"listMode",void 0),n([c.property({types:p.webSceneRendererTypes,json:{origins:{service:{read:{source:"drawingInfo.renderer",reader:w.read}}},read:{source:"layerDefinition.drawingInfo.renderer",reader:w.read},write:{target:"layerDefinition.drawingInfo.renderer"}},value:null})],r.prototype,"renderer",void 0),n([c.property({type:String,json:{origins:{service:{read:!1,write:!1}},read:{source:"layerDefinition.definitionExpression"},write:{target:"layerDefinition.definitionExpression"}}})],r.prototype,"definitionExpression",void 0),n([c.property(g.popupEnabled)],r.prototype,"popupEnabled",void 0),n([c.property({type:a,json:{read:{source:"popupInfo"},write:{target:"popupInfo"}}})],r.prototype,"popupTemplate",void 0),n([c.property({readOnly:!0,type:String,json:{origins:{service:{read:{source:"store.normalReferenceFrame"}}},read:!1}})],r.prototype,"normalReferenceFrame",void 0),n([c.property({readOnly:!0,json:{read:!1},dependsOn:["fields","title"]})],r.prototype,"defaultPopupTemplate",null),n([c.subclass("esri.layers.buildingSublayers.BuildingComponentSublayer")],r)}(c.declared(u.LoadableMixin(y.EsriPromiseMixin(h))))}.apply(null,i))||(e.exports=n)},929:function(e,r,t){var i,n;i=[t.dj.c(e.i),r,t(26),t(22),t(20),t(343),t(289),t(23),t(92)],void 0===(n=function(e,r,t,i,n,o,l,a,p){return function(e){function r(r){var t=e.call(this,r)||this;return t.title="",t.id=-1,t.modelName=null,t.visible=!0,t.opacity=1,t}return i(r,e),r.prototype.readTitle=function(e,r){return"string"==typeof r.alias?r.alias:"string"==typeof r.name?r.name:""},r.prototype.readIdOnlyOnce=function(e){return-1!==this.id?this.id:"number"==typeof e?e:void 0},n([a.property({type:String,json:{origins:{"web-scene":{write:!0}}}})],r.prototype,"title",void 0),n([a.reader("service","title",["alias","name"])],r.prototype,"readTitle",null),n([a.property()],r.prototype,"layer",void 0),n([a.property({type:Number,readOnly:!0,json:{read:!1,write:{ignoreOrigin:!0}}})],r.prototype,"id",void 0),n([a.reader("service","id")],r.prototype,"readIdOnlyOnce",null),n([a.property(p.readOnlyService(String))],r.prototype,"modelName",void 0),n([a.property({type:Boolean,json:{read:{source:"visibility"},write:{target:"visibility"}}})],r.prototype,"visible",void 0),n([a.property({type:Number,json:{write:!0}})],r.prototype,"opacity",void 0),n([a.subclass("esri.layers.buildingSublayers.BuildingSublayer")],r)}(a.declared(o.IdentifiableMixin(l.MultiOriginJSONSupport)))}.apply(null,i))||(e.exports=n)},930:function(e,r,t){var i,n;i=[t.dj.c(e.i),r,t(22),t(20),t(34),t(23)],void 0===(n=function(e,r,t,i,n,o){return function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.type=null,r}return t(r,e),i([o.property({type:String,readOnly:!0,json:{write:!0}})],r.prototype,"type",void 0),i([o.subclass("esri.layers.support.BuildingFilterAuthoringInfo")],r)}(o.declared(n.JSONSupport))}.apply(null,i))||(e.exports=n)}}]);
//# sourceMappingURL=25.b1c7a21a.chunk.js.map