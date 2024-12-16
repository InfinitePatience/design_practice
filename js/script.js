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


// 05. .con01 GSAP 애니메이션
$(function(){
	gsap.timeline({
		scrollTrigger:{
			trigger: '.con01', // 트리거 대상
			start: '0% 100%',  // 트리거 대상의 0%와 브라우저의 80%가 만날 때 애니메이션이 시작됨.
			end: '100% 100%', // 트리거 대상의 100%와 브라우저의 100%가 만날 때 애미메이션이 종료됨.
			scrub:1,  // GSAP ScrollTrigger의 이벤트가 스크롤이 사용될 때만 재생되도록 만들어주는 속성
			markers:true  // 시작위치와 끝위치를 확인가능하게 하는 마커
		}
	})
	.to('.wrap',{background: '#fff', color: '#000', ease:'none', duration:3}, 0)
	.to('.svgAni path',{stroke:'#000', ease:'none', duration:3},0)
	.to('.scroll',{opacity: '0', ease:'none', duration:5 },0)
	.fromTo('.videoWrap video',{'clip-path':'inset(60% 60% 60% 60% round 50%)'},{'clip-path':'inset(0% 0% 0% 0% round 0%)',ease:'none',duration: 10},0)
});