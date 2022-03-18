var init_model = 0; /* 页面初始加载时显示的模型的编号 */
var canvas_width = 300; /* 模型的宽度 */
var canvas_height = 380; /* 模型的高度 */

function getPath(){
    var jsPath = document.currentScript ? document.currentScript.src : function(){
      var js = doc.scripts
      ,last = js.length - 1
      ,src;
      for(var i = last; i > 0; i--){
        if(js[i].readyState === 'interactive'){
          src = js[i].src;
          break;
        }
      }
      return src || js[last].src;
    }();
    return jsPath.substring(0, jsPath.lastIndexOf('/') + 1);
}

function addElement(elementName, src) {
	var tempDom = document.createElement(elementName);

	tempDom.src = src;
	tempDom.href = src;
	tempDom.rel = 'stylesheet';

	document.body.appendChild(tempDom);
	return new Promise(resolve => {
		tempDom.onload = res => {
			setTimeout(resolve, 0, res);
		};
	});
}

var tempDiv = document.createElement('div');
tempDiv.innerHTML = `
<div class="waifu">
	<div class="waifu-tips"></div>
	<canvas id="live2d" height="380" style="width:300px;" ></canvas>
	<div class="waifu-tool">
		<i class="fui-chat" ></i>
		<i class="fui-photo" ></i>
		<i class="fui-user" ></i>
		<i class="fui-triangle-down" ></i>
	</div>
</div>
`;
document.body.appendChild(tempDiv.children[0]);

var triangleUp = document.createElement('div');
triangleUp.innerHTML = `
<div class="waifu-show">
	<i class= "fui-triangle-up"></i>
</div>
`;
document.body.appendChild(triangleUp.children[0]);

var path = getPath();
addElement('link', path + 'assets/waifu.css');
addElement('script', path + 'assets/jquery.min.js')
	.then(() => addElement('script', path + 'assets/live2d.js'))
	.then(() => addElement('script', path + 'assets/model.js'))
	.then(() => addElement('script', path + 'assets/waifu.js'))
	.then(() => {
		setTimeout(() => {
			loadlive2d('live2d', path + models[0].models[init_model].link);
		}, 200);
	});