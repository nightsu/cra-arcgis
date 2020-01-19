define(["require","exports","../core/promiseUtils","../core/urlUtils"],function(s,e,n,a){return r.prototype.setWorker=function(e,r){var t=this._getUrl(e);t=a.normalize(t);var s,n=!a.hasSameOrigin(t,location.href);if(this.worker&&((s=this.worker).removeEventListener("message",this._acceptMessage,!1),s.removeEventListener("error",this._errorMessage,!1),s.terminate(),s=null),n){var o=URL.createObjectURL(new Blob(['\nfunction actionHandler(evt) {\n  var msg = evt.data;\n  var error, success;\n\n  if (msg.action) {\n    switch (msg.action) {\n      case "import-script":\n        try {\n          if (!Array.isArray(msg.url)) {\n            msg.url = [msg.url];\n          }\n\n          importScripts(msg.url);\n          success = true;\n        }\n        catch (err) {\n          error = err;\n        }\n\n        break;\n    }\n\n    if (success) {\n      postMessage({\n        msgId: msg.msgId,\n        success: true\n      });\n    }\n    else if (error) {\n      postMessage({\n        status: "error",\n        msgId: msg.msgId,\n        message: error.message\n      });\n    }\n  }\n}\n\nself.addEventListener("message", actionHandler, false);\n'],{type:"text/javascript"}));r(this._createWorker(o,t))}else r(this._createWorker(t))},r.prototype.postMessage=function(e,r){if(!this.worker)return n.reject({message:"No worker was set."});!Array.isArray(e)&&"object"==typeof e||(e={data:e});var t=n.createDeferred(),s=Math.floor(64e9*Math.random()).toString(36);return e.msgId=s,this._queue.set(s,t),r?this.worker.postMessage(e,r):this.worker.postMessage(e),t.promise},r.prototype.terminate=function(){this.worker&&this.worker.terminate(),this._queue.forEach(function(e){e.reject(n.createAbortError("terminated"))}),this._queue.clear()},r.prototype.importScripts=function(e){var t=this;Array.isArray(e)||(e=[e]);var r=e.map(function(e){var r=t._getUrl(e,!0);return t._useProxy&&!a.hasSameOrigin(r,location.href)&&(r=a.getProxyUrl(r).path+"?"+encodeURI(r)),r});return this.postMessage({action:"import-script",url:r}).then(function(e){e.target=t})},r.prototype._createWorker=function(e,r){var t=new Worker(e);return t.addEventListener("message",this._acceptMessage,!1),t.addEventListener("error",this._errorMessage,!1),this.worker=t,r&&this.importScripts(r),t},r.prototype._getUrl=function(e,r){void 0===r&&(r=!1),e.match(/\.js$/)||(e+=".js");var t=s.toUrl(e);return r?a.makeAbsolute(t):t},r;function r(){var n=this;this.worker=null,this._queue=new Map,this._useProxy=!1,this._acceptMessage=function(e){var r=e.data,t=r.msgId;if(n._queue.has(t)){var s=n._queue.get(t);"error"===r.status?s.reject(e.data):s.resolve(e.data),n._queue.delete(t)}},this._errorMessage=function(e){console.log("Worker Error: "+e.message+"\nIn "+e.filename+" on "+e.lineno)}}});