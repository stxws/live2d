/* live2d一言和工具栏 */
!(function () {
	function randomOneFromArr(arr) {
		if (Array.isArray(arr)) {
			return arr[Math.floor(Math.random() * arr.length)];
		}
		return arr;
	}
	class Message {
		constructor() {
			this.messageTimer = null;
		}
		say(msg, durationTime = 12000) {
			let temp = $('<div class="live2d-tip-item"></div>');
			temp.text(randomOneFromArr(msg));
			$('.live2d-tips').append(temp);
			setTimeout(() => {
				temp.remove();
			}, durationTime);
		}
	}
	var message = new Message();
	function seyRandom() {
		fetch('https://v1.hitokoto.cn/')
			.then(res => res.json())
			.then(res => {
				message.say(res.hitokoto);
			});
	}
	seyRandom();
	setInterval(seyRandom, 60 * 1000);

	// 工具栏交互事件
	$('.live2d-tools .fa-commenting').click(seyRandom);
	$('.live2d-tools .fa-chevron-down').click(function () {
		$('.live2d-canvas').slideToggle();
		$('.live2d-tools .fa-commenting').css("display", "none");
		$('.live2d-tools .fa-chevron-down').css("display", "none");
		$('.live2d-tools .fa-chevron-up').css("display", "block");
	});
	$('.live2d-tools .fa-chevron-up').click(function () {
		$('.live2d-tools .fa-commenting').css("display", "block");
		$('.live2d-tools .fa-chevron-down').css("display", "block");
		$('.live2d-tools .fa-chevron-up').css("display", "none");
		$('.live2d-canvas').slideToggle();
	});
})();