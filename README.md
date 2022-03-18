# live2d
&emsp;&emsp;网页live2d模型，从VScod的live2d插件复制下来的，效果图：<br/>
![](https://github.com/nchuxw/live2d/raw/master/image/shut_cut1.png) ![](https://github.com/nchuxw/live2d/blob/master/image/shut_cut2.png)

# 使用方法
&emsp;&emsp;assets文件夹里是一些js和css等文件，model文件夹里是live2d模型，将这两个文件夹和main.js文件复制到同一个目录下，然后将main.js添加到需要显示的网页里面就可以了。
```html
<script src="./main.js"></script>
```

&emsp;&emsp;如果需要修改页面初始加载时显示的模型，或者模型的大小，可以修改main.js的前3行。
```js
var init_model = 0; /* 页面初始加载时显示的模型的编号 */
var canvas_width = 300; /* 模型的宽度 */
var canvas_height = 380; /* 模型的高度 */
```
