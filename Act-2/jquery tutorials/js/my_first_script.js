$(document).mousemove(function(movementInfo){

	



	var mX=movementInfo.clientX; //THE X POSITION OF THE MOUSE ON SCREEN
	var  mY=movementInfo.clientY; // THE Y POSITION
	


	$("#cc4j").css({ //THIS FOLLOWS THE MOUSE.

		"top": mY,
		"left": mX
	})

	$("#cc4j2").css({

		"top": $(window).height()-mY, //the total body height-the Y position
		"left": mX
	})

	
	$("#cc4j3").css({

		"right":mX,
		"top": mY
	})


	$("#cc4j4").css({

		"right":mX,
		"top": $(window).height()-mY
	})

	$("#cc4j5").css({

		"left":$(window).width()-mX,
		"top": $(window).height()/2
	})

	$("#cc4j7").css({

		"right":$(window).width()-mX,
		"top": $(window).height()/2
	})

	$("#cc4j6").css({

		"right":mY,
		"top": mY
	})

	$("#cc4jC").css({

		"left":mY,
		"top": mY

	})

	$("#cc4jU").css({

		"bottom":mY,
		"right": mY

	})

	

	$("#cc4j8").css({

		"left": mY,
		"bottom": mY
	})

$("#cc4j9").css({

		"left":$(window).height()-mY,
		"top": $(window).width()/3.6

		
	})

$("#cc4j10").css({

		"right":$(window).height()-mY,
		"bottom": $(window).width()/4.1

		
	})

$("#cc4j11").css({

		"right": $(window).height()+mX,
		"bottom": $(window).width()/4.1
	})

$("#cc4j12").css({

		"right": $(window).width()/2,
		"bottom": mY
	})


$("#cc4j13").css({

		"left": $(window).height()+mX,
		"bottom": $(window).width()/4.1
	})


$("#cc4j14").css({

		"right": $(window).width()/2,
		"top": mY
	})

$("#cc4j15").css({

		"left": $(window).width()/4,
		"bottom": $(window).height()-mY
	})

$("#cc4j16").css({

		"left": $(window).width()/4,
		"top": $(window).height()-mY
	})

$("#cc4j17").css({

		"right": $(window).width()/4,
		"bottom": $(window).height()-mY
	})

$("#cc4j18").css({

		"right": $(window).width()/4,
		"top": $(window).height()-mY
	})

$("#cc4j19").css({

		"right": $(window).height()+mX,
		"bottom": $(window).width()/4.1
	})
		
	})


$(document).click(function(){
	$(".cursor").toggleClass("rotate")



	
})

var $win = $(window),
    w = 0,h = 0,
    rgb = [],
    getWidth = function() {
        w = $win.width();
        h = $win.height();
    };

$win.resize(getWidth).mousemove(function(e) {

    rgb = [
        Math.round(e.pageX/w * 255),
        Math.round(e.pageY/h * 255),
        150
    ];

    $(document.body).css('background','rgb('+rgb.join(',')+')');

}).resize();







$("body").css({
	"cursor":"none"
})





