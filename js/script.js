"use strict"

//Меню бургер

const iconNavigation = document.querySelector('.header__navigation-icon');
const navigationRow = document.querySelector('.header__navigation-row');

if (iconNavigation) {
	iconNavigation.addEventListener("click", function (e) {
		document.body.classList.toggle('_lock');
		iconNavigation.classList.toggle('_active');
		navigationRow.classList.toggle('_active');
	})
}

//Прокрутка при клике

const navigationLinks = document.querySelectorAll('.header__navigation-link[data-goto]');
if (navigationLinks.length > 0) {

	for (let navigationLink of navigationLinks) {
		navigationLink.addEventListener('click', onNavigationLinkClick);
	}

	function onNavigationLinkClick(e) {
		const navigationLink = e.target;
		if (navigationLink.dataset.goto && document.querySelector(navigationLink.dataset.goto)) {
			const gotoBlock = document.querySelector(navigationLink.dataset.goto);
			const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('.header__navigation').offsetHeight;

			if (iconNavigation.classList.contains('_active')) {
				document.body.classList.remove('_lock');
				iconNavigation.classList.remove('_active');
				navigationRow.classList.remove('_active');
			}

			window.scrollTo({
				top: gotoBlockValue,
				behavior: "smooth"
			});

			e.preventDefault();
		}
	}
}