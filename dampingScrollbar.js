// ֱ����ӵ�html�оͿ��Կ���Ч��

var speed = 0;		// �ٶ�(���ɸ�)
var s____ = 6;		// �ٶ�(������)
var max__ = 48;		// ����ٶȣ������s�ı���(������)
var direction = 0;	// ����(���ɸ�)

$(document).on("mousewheel", function (e) {
	e.preventDefault(); // ��ֹĬ�Ϲ���
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
		// ����(����ʵ��)
                t2 = setTimeout(function () {
                    	speed > 0 ? speed-- : speed++;
                    	if (speed !== 0) {
                        	setTimeout(arguments.callee, 1);
                    	} else {
                        	clearTimeout(t2);
                    	}
           	}, 1);
  	}
	// ˢ��speed��ֵ��ʵ�ּ��٣�ת���
    	if (delta < 0) {
         	if (direction > 0) {
                    	speed = 0;
                    	direction = delta;
                    	return;
                }
                if (speed <= max__) speed += s____;
                else {
                    	speed = max__;
                }
   	} else {
                if (direction < 0) {
                    	speed = 0;
                    	direction = delta;
                    	return;
                }
                if (speed >= -max__) speed -= s____;
                else {
                    	speed = -max__;
                }
  	};
});