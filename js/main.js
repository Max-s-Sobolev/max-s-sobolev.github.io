headersImages = document.querySelectorAll("header .row:nth-child(1) .col img")


for (img of headersImages){
	if (window.matchMedia("(min-width: 768px)").matches) {
	img.parentElement.style.background = `url(${img.src}) no-repeat`;
	img.parentElement.style.backgroundSize = 'cover';
	}
	img.remove()
	
}

console.log(document.body.clientWidth)

