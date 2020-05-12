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
const close = '<div class="burger"><svg width="34" height="18" viewBox="0 0 34 18" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="1.2334" width="35.1734" height="3" transform="rotate(24.2752 1.2334 0)" fill="black"/><rect y="14.0747" width="35.1734" height="3" transform="rotate(-23.5877 0 14.0747)" fill="black"/></svg></div>';

burger.click(() => {
	
	if (!(burger.hasClass('clicked'))){
		burger.addClass('clicked');
	if (window.matchMedia("(min-width: 1190px)").matches) {
		burger.removeClass('clicked');
		$('menu').animate({ left: '0px' }, 200); 
		$('body').animate({ left: '285px' }, 200); 
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
