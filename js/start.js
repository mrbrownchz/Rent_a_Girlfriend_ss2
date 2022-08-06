$(document).bind("contextmenu",function(e) {
    e.preventDefault();
});

!function() {
	function detectDevTool(allow) {
  	if(isNaN(+allow)) allow = 100;
    var start = +new Date();
    debugger;
    var end = +new Date();
    if(isNaN(start) || isNaN(end) || end - start > allow) {
    	alert('DEVTOOLS detected. all operations will be terminated.');
      document.write('DEVTOOLS detected.');
    }
  }
  if(window.attachEvent) {
  	if (document.readyState === "complete" || document.readyState === "interactive") {
    	detectDevTool();
      window.attachEvent('onresize', detectDevTool);
      window.attachEvent('onmousemove', detectDevTool);
      window.attachEvent('onfocus', detectDevTool);
      window.attachEvent('onblur', detectDevTool);
    } else {
    	setTimeout(argument.callee, 0);
    }
  } else {
  	window.addEventListener('load', detectDevTool);
    window.addEventListener('resize', detectDevTool);
    window.addEventListener('mousemove', detectDevTool);
    window.addEventListener('focus', detectDevTool);
    window.addEventListener('blur', detectDevTool);
  }
}();