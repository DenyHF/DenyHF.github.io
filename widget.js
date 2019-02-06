setInterval(function(){
  var informer = document.getElementById('M250178ScriptRootC649200');
  console.log(informer);
  if (informer !== null) {
    var childs = informer.childNodes;
    childs.forEach(function(e){
      console.log(e.localName);
      if(e.localName == "frame" || e.localName == "script")
       {
         document.getElementById('M250178ScriptRootC649200').removeChild(e)
       }
     }
   )
     var D=new Date(),d=document,b='body',ce='createElement',ac='appendChild',st='style',ds='display',n='none',gi='getElementById',lp=d.location.protocol,wp=lp.indexOf('http')==0?lp:'https:'; var i=d[ce]('iframe');i[st][ds]=n;d[gi]("M250178ScriptRootC649200")[ac](i);try{var iw=i.contentWindow.document;iw.open();iw.writeln("<ht"+"ml><bo"+"dy></bo"+"dy></ht"+"ml>");iw.close();var c=iw[b];} catch(e){var iw=d;var c=d[gi]("M250178ScriptRootC649200");}var dv=iw[ce]('div');dv.id="MG_ID";dv[st][ds]=n;dv.innerHTML=649200;c[ac](dv); var s=iw[ce]('script');s.async='async';s.defer='defer';s.charset='utf-8';s.src=wp+"//jsc.idealmedia.io/r/a/racurs.ua.649200.js?t="+D.getYear()+D.getMonth()+D.getUTCDate()+D.getUTCHours();c[ac](s);
  }
},100);
