(function($) {
	$(document).ready(function() {
		"use strict";
		
		// Parallax parameter
		$.stellar({
			horizontalScrolling: false,
			verticalOffset: 40,
			responsive:true
		});
		
		
		// Counter
		$('.counter').counterUp({
            delay: 10,
            time: 1000
        });
		
		
		
		// Toogle Classes
		$(".hamburger-menu").click(function() {
		$(".side-menu").addClass("show-me");
		});
		
		$(".side-menu-close").click(function() {
		$(".side-menu").removeClass("show-me");
		});
		
		
		// Services Toggles
		$(".btn1").click(function() {
		$(".services .box .list1").toggleClass("show-me");
		});
		
		$(".btn2").click(function() {
		$(".services .box .list2").toggleClass("show-me");
		});
		
		$(".btn3").click(function() {
		$(".services .box .list3").toggleClass("show-me");
		});
		
		$(".btn4").click(function() {
		$(".services .box .list4").toggleClass("show-me");
		});
		
		$(".btn5").click(function() {
		$(".services .box .list5").toggleClass("show-me");
		});
		
		$(".btn6").click(function() {
		$(".services .box .list6").toggleClass("show-me");
		});
		
		$(".btn7").click(function() {
		$(".services .box .list7").toggleClass("show-me");
		});
		
		$(".btn8").click(function() {
		$(".services .box .list8").toggleClass("show-me");
		});
		
		
		// Fancybox
		$('.fancybox').fancybox({
		  helpers: {
			overlay: {
			  locked: false
			}
		  }
		});
		
		
		// OWL Carousels
		$('.logos-carousel').owlCarousel({
		loop:true,
    	margin:0,
		autoplay:true,
		controls:true,
    	responsiveClass:true,
    	responsive:{
       		0:{
            items:2,
            nav:false
        	},
        	767:{
            items:3,
            nav:false
        	},
        	959:{
            items:3,
            nav:true
        	},
			1024:{
            items:4,
            nav:true
		}
		}
		});
		
		
		// Page transition
		$('.transition').on('click', function(e) {
		$('.transition-overlay').toggleClass("show-me");
		});
		
		
		// Transition delay
		$('.transition').click(function (e) {
			e.preventDefault();                  
			var goTo = this.getAttribute("href"); 
			setTimeout(function(){
			window.location = goTo;
			},1000);       
			});
		});	
	
	
		// Fixed Navigation
		$(window).on("scroll touchmove", function () {
		$('#nav').toggleClass('fixed-nav', $(document).scrollTop() > 1);
		
		});	
		
		
		
		// Masonry Portfolio
		$(function(){
   		var $container = $('.works .masonry');
     	$container.imagesLoaded( function(){
        $container.masonry({
           itemSelector : '.works .masonry li'
         });
       	});
     	});
		
		
		
		
		// Isotope works filter
		$(window).load(function(){
			var $container = $('.latest-works ul, .works ul');
		$container.isotope({
			filter: '*',
			animationOptions: {
			duration: 750,
			easing: 'linear',
			queue: false
		   }
		});
	 
		$('.works-filter a').click(function(){
		$('.works-filter .current').removeClass('current');
		$(this).addClass('current');
	 
		var selector = $(this).attr('data-filter');
		$container.isotope({
			filter: selector,
			animationOptions: {
			duration: 750,
			easing: 'linear',
			queue: false
			}
		});
			return false;
		}); 
		});
		
		
		
		
		// Wow animations
		wow = new WOW(
			{
				animateClass: 'animated',
				offset:       100
			}
		);
		wow.init();
		
		
})(jQuery);