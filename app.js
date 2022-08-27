const lis = document.querySelectorAll('[data-js="ulNav"] li');
const header = document.querySelector('[data-js="header"]');

const toggleClassNav = () => {
	const nav = document.querySelector('[data-js="nav"]');
	nav.classList.toggle("active");
};

const actions = {
	closeNav() {
		toggleClassNav();
	},
	hamburgerButton() {
		toggleClassNav();
	},
};

const addTransitionOnLi = () => {
	let valueOfTransition = 0.9;

	lis.forEach(li => {
		const newValueOfTransition = (valueOfTransition += 0.1).toFixed(1);
		li.style.transition = `${newValueOfTransition}s`;
	});
};

addTransitionOnLi();

header.addEventListener("click", e => {
	const target = e.target;
	const nameOfTarget = target.getAttribute("data-js");

	actions[nameOfTarget]?.();
});
