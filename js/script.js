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
			start: '0% 80%',  // 트리거 대상의 0%와 브라우저의 80%가 만날 때 애니메이션이 시작됨.
			end: '100% 100%', // 트리거 대상의 100%와 브라우저의 100%가 만날 때 애미메이션이 종료됨.
			scrub:1,  // GSAP ScrollTrigger의 이벤트가 스크롤이 사용될 때만 재생되도록 만들어주는 속성
			// markers:true  // 시작위치와 끝위치를 확인가능하게 하는 마커
		}
	})
	.to('.wrap',{background: '#fff', color: '#000', ease:'none', duration:3}, 0)
	.to('.svgAni path',{stroke:'#000', ease:'none', duration:3},0)
	.to('.scroll',{opacity: '0', ease:'none', duration:5 },0)
	.fromTo('.videoWrap video',{'clip-path':'inset(60% 60% 60% 60% round 50%)'},{'clip-path':'inset(0% 0% 0% 0% round 0%)',ease:'none',duration: 10},0)

// .con02 gsap animation
// title 글자 애니메이션
	gsap.timeline({
		scrollTrigger:{
			trigger: '.con02',
			start: '0% 100%',
			end: '0% 20%',
			scrub:1,
			// markers:true
		}
	})
	.fromTo('.con02 .title .a', {x:'-100%'},{x:'0%', ease:'none', duration:5},0)
	.fromTo('.con02 .title .b', {x:'100%'},{x:'0%', ease:'none',duration:5},0)

	// workList가 나타날 때 배경색 검정으로.
	gsap.timeline({
		scrollTrigger:{
			trigger:'.workList',
			start:'0% 100%',
			end: '0% 100%',
			scrub:1,
			// markers:true
		}
	})
	.to('.wrap',{background:'#000',color: '#fff', ease:'none', duration:5},0)
	
	//title 글자 position:fixed 적용
	.to('.con02 .title',{position:'fixed',ease:'none',left:'0', top:'0', width:'100%',duration:5},0)

	//.workList에 margin-top을 적용해서 애니를 자연스럽게 작성
	.fromTo('.workList',{margin:'0 auto'},{margin:'100vh auto 0',position:'relative', zIndex:'10',duration:1},0)

	
	// workList가 끝날 때 .title 글자가 화면 밖으로 사라지도록 애니 적용
	gsap.timeline({
		scrollTrigger:{
			trigger:'.workList',
			start:'100% 50%',
			end: '100% 0%',
			scrub:1,
			// markers:true
		}
	})
	.to('.con02 .title .a',{x:'-100%', ease:'none', duration:5},0)
	.to('.con02 .title .b',{x:'100%', ease:'none', duration:5},0)
});


// simplyScroll
$(function(){
	$('.con03 .list').simplyScroll({
		speed: 4,
		pauseOnHover: false,
		pauseOnTouch: false
	})
})