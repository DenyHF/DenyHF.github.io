setInterval(function(){
  var informer = document.getElementById('M250178ScriptRootC649200');
  if (informer !== null) {
  var childs = informer.childNodes;
  var code = '';
  childs.forEach(function(e){
    if (e.localName == "script") {
      code = e.text
      document.getElementById('M250178ScriptRootC649200').removeChild(e);
      }
    });
   eval(code);
 }
}, 500);
