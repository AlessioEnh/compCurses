
// ******************************Slick - Слайдер
$(document).ready(function(){
	$('.slider').slick({
		slidesToShow: 1,
		slideToSkroll: 1,
		arrows: false,
		dots: false,
		asNavFor: '.gallery',
		draggable: false
	});

	$('.gallery').slick({
		slidesToShow: 2,
		slideToSkroll: 1,

		dots: true,
		speed: 1500,
		centerMode: true,
		centerPadding: '60px',
		asNavFor: '.slider',
		focusOnSelect: true
	});

	
});

	// Magnific PopUp

$(document).ready(function() {
	$('.popup-gallery').magnificPopup({
		delegate: 'a',
		// items: {
		// 	src: 'img/1.webp'
		// },
		type:'image',
		gallery: {
			enabled: true
		},
	});

	
});

// const Burgerbtn = document.querySelector('.menu-btn');
// const Burgernav = document.querySelector('.navMenu');

// Burgerbtn.addEventListener('click', function() {
// 	Burgerbtn.classList.toggle('menu-btn_active');

// 	// Burgernav.classList.remove('navMenu');
	
// 	// Burgernav.classList.remove('navMenu_active');
// 	Burgernav.classList.toggle('navMenu');
// 	Burgernav.classList.add('navMenu_active');
// });