// IBG =============================================================
jQuery('.ibg').each(function () {
	var src = jQuery(this).find('img').attr('src');
	jQuery(this).css('background', 'url(' + src + ') center / cover no-repeat');
	jQuery(this).find('img').css('display', 'none');
});
// /IBG =============================================================

const burger = document.querySelector('.menu_burger');
const headerMenu = document.querySelector('.menu-header');
burger.addEventListener('click', function () {
	this.classList.toggle('active');
	headerMenu.classList.toggle('active')
});


// accordion =============================================================

// const footerTitle = document.querySelectorAll('.footer_title-accordion');
// document.documentElement.addEventListener('click', function (e) {
// 	const targetElement = e.target;
// 	for (var a = 0; a < footerTitle.length; a++) {
// 		footerTitle[a].classList.remove('active');
// 		footerTitle[a].nextElementSibling.style.height = 0;
// 	}
// 	if (targetElement.classList.contains('footer_title-accordion') && targetElement.classList.contains('active')) {
// 		targetElement.classList.remove('active');
// 		targetElement.nextElementSibling.style.height = 0;

// 	} else if (targetElement.classList.contains('footer_title-accordion')) {
// 		targetElement.classList.add('active');
// 		targetElement.nextElementSibling.style.height = targetElement.nextElementSibling.scrollHeight + 'px';
// 	}
// 	if (!targetElement.classList.contains('footer_title-accordion')) {
// 		for (var a = 0; a < footerTitle.length; a++) {
// 			footerTitle[a].classList.remove('active');
// 			footerTitle[a].nextElementSibling.style.height = 0;
// 		}
// 	}

// });
// /accordion =============================================================


// header menu
let headerSubmenu = document.querySelectorAll('.menu-header_subitem');
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
	for (elem of headerSubmenu) {
		elem.addEventListener('click', function () {
			this.classList.toggle('active')
		})
	}
}

// servises scroll

const servicesItems = document.querySelector(".services_items");

servicesItems.addEventListener("wheel", (evt) => {
	evt.preventDefault();
	servicesItems.scrollLeft += evt.deltaY;
})