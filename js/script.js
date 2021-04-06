


/* RESPONSIVE NAV MENU */

const navMenu = () => {
	const navbarToggler = document.querySelector('.navbar-toggler');
	const navList = document.querySelector('.nav-list');

	navbarToggler.addEventListener('click', () => {
		navList.classList.toggle('nav-active');
		navbarToggler.classList.toggle('toggle');
	})
};

navMenu();

/* SCROLL REVEAL ANIMATIONS */

ScrollReveal().reveal('.ani-top', {
	origin:'top',
	distance:'10rem',
	duration:500,
	easing: 'ease-in'
});

ScrollReveal().reveal('.ani-left', {
	origin:'left',
	distance:'10rem',
	duration:500,
	easing: 'ease-in'
});

ScrollReveal().reveal('.ani-right', {
	origin:'right',
	distance:'10rem',
	duration:500,
	easing: 'ease-in'
});

ScrollReveal().reveal('.ani-bottom', {
	origin:'bottom',
	distance:'10rem',
	duration:500,
	easing:'ease-in'
});

ScrollReveal().reveal('.ani-fade-up', {
	opacity:0,
	easing:'ease-in'
});

ScrollReveal().reveal('.ani-delay', {
	delay:300

});

