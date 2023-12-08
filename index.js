'use strict';

// switch to mobile version if viewport is too small

const body = document.body;

addEventListener('resize', () => {
	body.clientWidth < 1050
		? body.classList.add('mobile')
		: body.classList.remove('mobile');
});

dispatchEvent(new Event('resize'));

// helper functions

function closeMenus() {
	Array.from(document.getElementsByClassName('active')).forEach(activeElement => activeElement.classList.remove('active'));
}

function toggleMenu(name, submenu) {
	const menu = document.getElementById(name + '-menu');

	if (menu.classList.contains('active'))
		return menu.classList.remove('active');

	if (!submenu)
		Array.from(document.getElementsByClassName('active')).forEach(activeElement => activeElement.classList.remove('active'));

	menu.classList.add('active');
}
