// 01. 스플리팅 호출
$(function(){
	Splitting();
});
// jquery 를 JS 로 변환했을 때, 
// document.addEventListener('DOMContentLoaded', function() {
// 	Splitting();
// });


// 02. header 영역 스크롤 방향 이벤트
$(function(){
	var prevScrollTop = 0;
	document.addEventListener("scroll", function(){
		var nowScrollTop = $(window).scrollTop();

		if(nowScrollTop > prevScrollTop){
			$('header').addClass('active');
		} else {
			$('header').removeClass('active');
		}
		prevScrollTop = nowScrollTop;
	})
});

// 03. scrolla 호출 ( scrolla.js )
$(function(){ 
	$('.animate').scrolla({
		moblie: true,
		once: false
	}); 
});

// 04. svg path 길이 구하기
$(function(){
	$('.svgAni').find('#svgAni10').each(function(i, path){
		var length = path.getTotalLength();
		// alert(length);
	})
})