//注意：live2d_path参数应使用绝对路径
const live2d_path = "/js/live2d_demo/";

//加载waifu.css
$("<link>").attr({ href: live2d_path + "waifu.css", rel: "stylesheet", type: "text/css" }).appendTo("head");
$('body').append('<div class="waifu"><div class="waifu-tips"></div><canvas id="live2d" class="live2d"></canvas><div class="waifu-tool"><span class="fui-home"></span> <span class="fui-chat"></span> <span class="fui-eye"></span> <span class="fui-user"></span> <span class="fui-photo"></span> <span class="fui-info-circle"></span> <span class="fui-cross"></span></div></div>');

//加载waifu-tips.js
$.ajax({url: live2d_path + "waifu-tips.js", dataType:"script", cache: true, success: function() {
	
	//加载ive2d.js
	$.ajax({url: live2d_path + "live2d.js", dataType:"script", cache: true, success: function() {

		//初始化看板娘各项参数, 并自动加载目录下的 waifu-tips.json

		//看板娘模型 API 地址
		live2d_settings['modelAPI'] = '//live2d.fghrsh.net/api/';

		//提示语读取路径, 默认值 'waifu-tips.json' (一般在 initModel 时指定)
		//live2d_settings['tipsMessage'] = ;

		//一言 API 接口, 可选 'lwl12.com', 'hitokoto.cn', 'jinrishici.com' (古诗词)
		live2d_settings['hitokotoAPI'] = 'hitokoto.cn';

		//默认模型(分组) ID, 可在 Demo 页 [F12] 呼出 控制台(Console) 找到
		live2d_settings['modelId'] = 1;

		//默认材质(模型) ID, 可在 Demo 页 [F12] 呼出 控制台(Console) 找到
		live2d_settings['modelTexturesId'] = 0;
		
		//显示工具栏,  true | false
		live2d_settings['showToolMenu'] = true;
			
		//关闭看板娘 按钮, true | false
		live2d_settings['canCloseLive2d'] = false;
			
		//切换模型 按钮,  true | false
		live2d_settings['canSwitchModel'] = true;
			
		//切换材质 按钮,  true | false
		live2d_settings['canSwitchTextures'] = true;
			
		//切换一言 按钮,  true | false
		live2d_settings['canSwitchHitokoto'] = true;
			
		//看板娘截图 按钮, true | false
		live2d_settings['canTakeScreenshot'] = true;
			
		//返回首页 按钮,  true | false
		live2d_settings['canTurnToHomePage'] = true;
			
		//跳转关于页 按钮, true | false
		live2d_settings['canTurnToAboutPage'] = true;
			
		//记录 ID (刷新后恢复), true | false
		live2d_settings['modelStorage'] = false;
			
		//模型切换, 可选 'rand' (随机) | 'switch' (顺序)
		live2d_settings['modelRandMode'] = 'switch';

		//材质切换, 可选 'rand' | 'switch'
		live2d_settings['modelTexturesRandMode'] = 'switch';
			
		//空闲时一言, true | false
		live2d_settings['showHitokoto'] = true;
			
		//控制台显示加载状态, true | false
		live2d_settings['showF12Status'] = true;
			
		//提示消息输出到控制台, true | false
		live2d_settings['showF12Message'] = true;
			
		//控制台被打开触发提醒, true | false
		live2d_settings['showF12OpenMsg'] = true;
			
		//内容被复制触发提醒, true | false
		live2d_settings['showCopyMessage'] = true;
			
		//进入面页时显示欢迎语, true | false
		live2d_settings['showWelcomeMessage'] = true;
			
		//看板娘大小, 例如 '280x250', '600x535'
		live2d_settings['waifuSize'] = '200x180';
			
		//提示框大小, 例如 '250x70', '570x150'
		live2d_settings['waifuTipsSize'] = '180x50';
			
		//提示框字体, 例如 '12px', '30px'
		live2d_settings['waifuFontSize'] = '12px';

		//提示框与顶端的距离, 例如 '0px', '-60px'
		live2d_settings['waifuToolTop'] = '-45px';
			
		//工具栏字体, 例如 '14px', '36px'
		live2d_settings['waifuToolFont'] = '18px';
			
		//工具栏行高, 例如 '20px', '36px'
		live2d_settings['waifuToolLine'] = '24px';
			
		//面页小于 指定宽度 隐藏看板娘, 例如 'disable' (停用), '768px'
		live2d_settings['waifuMinWidth'] = '400px';
			
		//看板娘贴边方向, 例如 'left:0' (靠左 0px), 'right:30' (靠右 30px)
		live2d_settings['waifuEdgeSide'] = 'left:200';
			
		//拖拽样式, 可选 'disable' (禁用), 'axis-x' (只能水平拖拽), 'unlimited' (自由拖拽)
		live2d_settings['waifuDraggable'] = 'unlimited';

		//松开鼠标还原拖拽位置, true | false
		live2d_settings['waifuDraggableRevert'] = false;
			
		//当前版本 (无需修改)
		//live2d_settings['l2dVersion'] = ;
			
		//更新日期 (无需修改)
		//live2d_settings['l2dVerDate'] = ;
			
		//页地址, 可选 'auto' (自动), '{URL 网址}'
		live2d_settings['homePageUrl'] = 'https://kuroha.vip';
			
		//关于页地址, '{URL 网址}'
		live2d_settings['aboutPageUrl'] = '/about';
			
		//看板娘截图文件名, 例如 'live2d.png'
		live2d_settings['screenshotCaptureName'] = 'live2d.png';

		//自动加载目录下的 waifu-tips.json
		initModel(live2d_path + "waifu-tips.json");
	}});
}});