
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


/*------------MENU SETTINGS-----------*/