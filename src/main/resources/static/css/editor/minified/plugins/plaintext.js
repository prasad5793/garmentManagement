!function(t){"use strict";var i=t.utils.extend;t.plugins.plaintext=function(){var e=!0;this.init=function(){var t=this.commands,n=this.opts;n&&n.plaintext&&n.plaintext.addButton&&(e=n.plaintext.enabled,t.pastetext=i(t.pastetext||{},{state:function(){return e?1:0},exec:function(){e=!e}}))},this.signalPasteRaw=function(t){if(e){if(t.html&&!t.text){var n=document.createElement("div");n.innerHTML=t.html,t.text=n.innerText}t.html=null}}}}(sceditor);