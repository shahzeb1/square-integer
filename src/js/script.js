$(function() {
	$("#draggable").draggable({ revert: true });
	$('.translation').typeIt({
		strings: ['Say hello.', 'Email us.', 'Did you have coffee today?', 'Have some cool ideas on your mind?', 'Just drop us a line2'],
		breakDelay: 4000,
		cursor: false,
		loop: true,
		deleteSpeed: 100,
		speed: 200,
		lifeLike: true,
		breakLines: false
	});
});

$(".red").click(function(){
	$("body").css('background', "rgba(0, 0, 0, 0) linear-gradient(270deg, rgb(233, 28, 187), rgb(235, 129, 14)) repeat scroll 99.9379% 50% / 400% 400% padding-box border-box");
	$(".page").css('opacity', 0);
})

$(".yellow").click(function(){
	$("body").css('background', "rgba(0, 0, 0, 0) linear-gradient(270deg, rgb(233, 28, 187), rgb(235, 129, 14)) repeat scroll 99.9379% 50% / 400% 400% padding-box border-box");
	$(".page").css('opacity', 0);
	$(".minimized").show();
})

$(".green").click(function(){
	var bg = $("body").css('background');
	if(bg.search("linear-gradient") != -1){
		$("body").css('background', 'black');
	}else{
		$("body").css('background', "rgba(0, 0, 0, 0) linear-gradient(270deg, rgb(233, 28, 187), rgb(235, 129, 14)) repeat scroll 99.9379% 50% / 400% 400% padding-box border-box");
	}
})

$(".minimized").click(function(){
	$(".page").css('opacity', 1);
	$(".minimized").hide();
})
