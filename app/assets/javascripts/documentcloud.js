// ./documentcloud.js
(function() {
  /* If the viewer is already loaded, don't repeat the process. */
  if (window.DV) { if (window.DV.loaded) { return; } }

  window.DV = window.DV || {};
  window.DV.recordHit = "//www.documentcloud.org/pixel.gif";

  var pendingQueue = window.DV._documentsWaitingForAppLoad = [];
  window.DV.load = function(resource_js_url, options) {
    pendingQueue.push({js_url: resource_js_url, options: options});
  };

  var eventuallyLoadDocuments = function(){
    if (window.DV.viewers) {
      for (var i=0; i < pendingQueue.length; i++){ 
        var resource = pendingQueue[i];
        DV.load(resource.js_url, resource.options);
      }
    } else {
      setTimeout(eventuallyLoadDocuments, 500);
    }
  };
  eventuallyLoadDocuments();

  var loadCSS = function(url, media) {
    var link   = document.createElement('link');
    link.rel   = 'stylesheet';
    link.type  = 'text/css';
    link.media = media || 'screen';
    link.href  = url;
    var head   = document.getElementsByTagName('head')[0];
    head.appendChild(link);
  };

  /*@cc_on
  /*@if (@_jscript_version < 5.8)
    loadCSS("//assets.documentcloud.org/viewer/viewer.css");
  @else @*/
    loadCSS("//assets.documentcloud.org/viewer/viewer-datauri.css");
  /*@end
  @*/
  loadCSS("//assets.documentcloud.org/viewer/printviewer.css", 'print');

  /* Record the fact that the viewer is loaded. */
  DV.loaded = true;
})();