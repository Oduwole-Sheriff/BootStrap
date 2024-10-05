$(document).ready(function(){
	//HERO SLIDER

	$('#hero-slide').owlCarousel({
	    loop:true,
	    margin:0,
	    nav:true,
	    items:1,
	    dots:false,
	    smartSpeed:1000,
		autoplay:true,
		autoplayTimeout:5000,
		autoplayHoverPause:false,
	    navText : ['PREV', 'NEXT'],
	    responsive:{
	        0:{
	            nav:false,
	        },
	        768:{
	        	nav:true,
	        }
	    }
	})	


	//Project slider
	$('#project-slider').owlCarousel({
	    loop:true,
	    margin:0,
	    nav:true,
	    dots:false,
	    smartSpeed:1000,
	    autoplay:true,
		autoplayTimeout:5000,
		autoplayHoverPause:false,
	    margin:24,
	    navText:["prev", "NEXT"],
	    responsive:{
	        0:{
	            items:1,
	            nav:false
	        },
	        768:{
	        	items:2,
	        },
	        1140:{
	        	items:2,
	        	center:true,
	        	dots:true,
	        }
	    }
	})


	//REVIEW

	$('.owl-carousel').owlCarousel({
	    loop:true,
	    margin:10,
	    nav:false,
	    dots:true,
	    items:1,
	    smartSpeed:800,
	    autoplay:true,
		autoplayTimeout:5000,
		autoplayHoverPause:false,
	})	
});