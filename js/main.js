/*На мобилке не показываем первый row*/
const first_row = '<div class="col"><img src="img/header/1.jpg" alt=""></div><div class="col"><img src="img/header/2.jpg" alt=""></div><div class="col"><img src="img/header/3.jpg" alt=""></div>'

if (window.matchMedia("(min-width: 1190px)").matches) {
	document.querySelector("header .row:nth-child(1)").innerHTML = first_row;
	headersImages = document.querySelectorAll("header .row:nth-child(1) .col img")

	for (img of headersImages){
		if (window.matchMedia("(min-width: 768px)").matches) {
		img.parentElement.style.background = `url(${img.src}) no-repeat`;
		img.parentElement.style.backgroundSize = 'cover';
		}
		img.remove()
		
	}

}




/*------------MENU SETTINGS-----------*/
const closeDesktopMenu = document.querySelector(".close-desktop-menu");
//Если мы на мобилке, то убираем крестик на меню, чтобы он не выезжал
if (!window.matchMedia("(min-width: 1190px)").matches) {
	closeDesktopMenu.outerHTML = "";
}

const burger = document.querySelector(".burger");
const menu = document.querySelector("menu");

burger.addEventListener("click",() => {

	if (window.matchMedia("(min-width: 1190px)").matches) {
		/*DESKTOP*/
		menu.style.left =  '0px';
		document.body.style.left =  '450px';
	}
	else{

		if (!burger.classList.contains('clicked')){
		/*MOBILE*/
			menu.style.left =  '0px';
			burger.classList.remove('burger');
			burger.classList.add('closer','clicked');
		}
		else{
			menu.style.left =  '-110vw';
			burger.classList.remove('closer', 'clicked');
			burger.classList.add('burger');
		}
	}

});

/*DESKTOP*/
closeDesktopMenu.addEventListener("click", ()=>{
		menu.style.left =  '-450px';
		document.querySelector("body").style.left =  '0px';
});


/*------------/MENU SETTINGS-----------*/

console.log($(window).width())

/* SLIDER height equal width */
$(function(){
  $('.slider-wrap').height($('.slider-wrap').width()/1.8);
  $('.avatar').height($('.avatar').width());
  $('.avatar img').height($('.avatar img').width());

	if ($(window).width() < 1189) {
  		$('section[view-more] .camera').width($(window).width()/4);
  	} else {
  		$('section[view-more] .camera').width($(window).width()/6);
  	}

  $(window).resize(function(){
  	$('.avatar').height($('.avatar').width());
  	$('.avatar img').height($('.avatar img').width());
    $('.slider-wrap').height($('.slider-wrap').width()/1.8);
    if ($(window).width() < 1189) {
  		$('section[view-more] .camera').width($(window).width()/4);
  	} else {
  		$('section[view-more] .camera').width($(window).width()/6);
  	}

  });

 });


$(".message").click(()=>{
	$(".message img").animate({'opacity': 0}, 'fast');
	$(".message").animate({'opacity': 0}, 'fast');
	$(".message__showed_links").delay(400).toggle('show');
});

$(".close_message").click(()=>{

	$(".message__showed_links").toggle('show');
	$(".message img").delay(500).animate({'opacity': 1}, 'fast');
	$(".message").delay(500).animate({'opacity': 1}, 'fast');
});



$("section[view-more] .camera").click(()=>{
	
	$("section[view-more] .camera img").animate({ opacity: 0.4 }, 500, function () { document.querySelector("section[view-more] .camera img").src = 'img/lens2FOCUS.svg'; });
    $("section[view-more] .camera img").animate({ opacity: 1 }, 500);
});

/*<div class="social">
						<div class="social__title social__title-wrapper">
							<div class="social__title-text">Связаться со мной</div>
						</div>
						<div class="social__links social__links-wrapper">
							<div class="social__links_instagram"><!--INSTAGRAM--></div>
							<div class="social__links_whatsapp"><!-- WHATSAPP--></div>
							<div class="social__links_vk"><!--    VK   --></div>
							<div class="social__links_telegram"><!-- TELEGRAM--></div>
						</div>
					</div> */