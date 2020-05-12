headersImages = document.querySelectorAll("header .row:nth-child(1) .col img")


for (img of headersImages){
	if (window.matchMedia("(min-width: 768px)").matches) {
	img.parentElement.style.background = `url(${img.src}) no-repeat`;
	img.parentElement.style.backgroundSize = 'cover';
	}
	img.remove()
	
}

if (!window.matchMedia("(min-width: 1190px)").matches) {
	$(".close-desktop-menu").remove();
}

const burger = $(".burger");

burger.click(() => {
	
	if (!(burger.hasClass('clicked'))){
		burger.addClass('clicked');
	if (window.matchMedia("(min-width: 1190px)").matches) {
		burger.removeClass('clicked');
		$('menu').animate({ left: '0px' }, 400); 
		$('body').animate({ left: '285px' }, 400); 
	} else {

		$('menu').animate({ left: '0px' }, 200);
		$('.burger').removeClass('burger').addClass("closer");
		console.log($(".closer"))
		
	}
} else {
	burger.removeClass('clicked');
	$('menu').animate({ left: '-110vw' }, 200);
	$('.closer').removeClass('closer').addClass("burger");

}
});

$(".close-desktop-menu").click(() => {
	$('menu').animate({ left: '-110vw' }, 200);
	$('body').animate({ left: '0px' }, 200);
})
