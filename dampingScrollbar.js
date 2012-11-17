// 直接添加到html中就可以看到效果

var speed = 0;		// 速度
var max__ = 48;		// 最大速度
var direction = 0;	// 方向

$(document).on("mousewheel", function (e) {
	e.preventDefault(); // 阻止滚动
	var t1, t2 = -1, delta = e.originalEvent.wheelDeltaY || e.originalEvent.wheelDelta; // for IE
    	if (speed === 0) {
       		t1 = setTimeout(function () {
                	window.scrollBy(0, speed);
             		if (speed !== 0) {
                        	setTimeout(arguments.callee, 1);
                    	} else {
                        	clearTimeout(t1);
                    	}
         	}, 1);
                t2 = setTimeout(function () {
                    	speed > 0 ? speed-- : speed++;
                    	if (speed !== 0) {
                        	setTimeout(arguments.callee, 1);
                    	} else {
                        	clearTimeout(t2);
                    	}
           	}, 1);
  	}
    	if (delta < 0) {
         	if (direction > 0) {
                    	speed = 0;
                    	direction = delta;
                    	return;
                }
                if (speed <= max__) speed += 6;
                else {
                    	speed = max__;
                }
   	} else {
                if (direction < 0) {
                    	speed = 0;
                    	direction = delta;
                    	return;
                }
                if (speed >= -max__) speed -= 6;
                else {
                    	speed = -max__;
                }
  	};
});