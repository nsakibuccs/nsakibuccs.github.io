// Fade-in any elements that have the class 'fade' when the page loads 
window.addEventListener('DOMContentLoaded', (event) => {
	init();
	let containerElement = document.querySelector('.fade');
	if (containerElement) {
		containerElement.classList.add('show');
	}
});

// Create a script tag with the given attributes and append next to the parent element
function makeScriptTag(parent, src, isAsync, onError = null) {
	let script = document.createElement('script');
	parent.insertAdjacentElement('afterend', script);
	script.type = 'text/javascript';
	script.src = src;
	script.async = isAsync;
	if (onError != null) script.onerror = onError;
}

let scriptTag = document.querySelector('script[src="script.min.js"]'), useFullURL = false;
if (scriptTag == null) {
	scriptTag = document.querySelector('script[src="https://nsakibuccs.github.io/script.min.js"]');
	useFullURL = true;
}
if (scriptTag == null) scriptTag = document.currentScript;

let bgColor = '#212529';
let bgColorInv = '#99e3ca';
let bgColorDim = '#30333a';
let bgColorDim2 = '#dde7ec';
let bgColorDimmer = '#2a3945';
let bgColorContainer = '#1f2327';
let textColor = '#f7f9f9';
let textColorInv = '#202828';
let textColorDim = '#acd9ff';
let textColorDimmer = '#2a3945';
let textColorBold = '#ffffff';
let linkText = '#bfffbf';
let borderColor = '#8a9ba8';

// Toggle between light and dark mode, affecting the background, text colors, and various other elements
function toggleNightMode(isNight = true, useAnimations = true, saveToLocalStorage = true) {
	let transitionClass = 'night-mode-animation';

	let elements = document.querySelectorAll('.bg-color, .bg-color-dim, .text-color, .text-color-dim, .text-color-bold, p a');
	elements.forEach(el => {
		if (useAnimations) {
			el.classList.add(transitionClass);
		} else {
			el.classList.remove(transitionClass);
		}
	});

	let iconElement = document.getElementById('dayNightIcon');

	if (isNight) {
		bgColor = '#212529';
		bgColorInv = '#99e3ca';
		bgColorDim = '#30333a';
		bgColorDim2 = '#2f323a';
		bgColorDimmer = '#2a3945';
		bgColorContainer = '#1f2327';
		textColor = '#f7f9f9';
		textColorInv = '#202828';
		textColorDim = '#acd9ff';
		textColorDimmer = '#2a3945';
		textColorBold = '#ffffff';
		linkText = '#bfffbf';
		borderColor = '#8a9ba8';
		iconElement.setAttribute('data-feather', 'sun');
	} else {
		bgColor = '#f8f9fa';
		bgColorInv = '#4a7768';
		bgColorDim = '#ecf2f5';
		bgColorDim2 = '#dde7ec';
		bgColorDimmer = '#c7dbea';
		bgColorContainer = '#3d465c';
		textColor = '#202828';
		textColorInv = '#f7f9f9';
		textColorDim = '#055aa1';
		textColorDimmer = '#c7dbea';
		textColorBold = '#000000';
		linkText = '#3a633a';
		borderColor = '#b2cee5';
		iconElement.setAttribute('data-feather', 'moon');
	}

	elements = document.querySelectorAll('.bg-color');
	elements.forEach(function (el) {
		el.style.setProperty('background-color', bgColor, 'important');
	});
	elements = document.querySelectorAll('.bg-color-inv');
	elements.forEach(function (el) {
		el.style.setProperty('background-color', bgColorInv, 'important');
	});
	elements = document.querySelectorAll('.bg-color-dim');
	elements.forEach(function (el) {
		el.style.setProperty('background-color', bgColorDim, 'important');
	});
	elements = document.querySelectorAll('.bg-color-dim2');
	elements.forEach(function (el) {
		el.style.setProperty('background-color', bgColorDim2, 'important');
	});
	elements = document.querySelectorAll('.bg-color-dimmer');
	elements.forEach(function (el) {
		el.style.setProperty('background-color', bgColorDimmer, 'important');
	});
	elements = document.querySelectorAll('.bg-color-container');
	elements.forEach(function (el) {
		el.style.setProperty('background-color', bgColorContainer, 'important');
	});

	// Set the text color only if the element does not have the 'url-nohover' class
	elements = document.querySelectorAll('.text-color');
	elements.forEach(function (el) {
		if (!el.classList.contains('url-nohover')) {
			el.style.setProperty('color', textColor, 'important');
		}
	});
	elements = document.querySelectorAll('.text-color-inv');
	elements.forEach(function (el) {
		if (!el.classList.contains('url-nohover')) {
			el.style.setProperty('color', textColorInv, 'important');
		}
	});
	elements = document.querySelectorAll('.text-color-dim');
	elements.forEach(function (el) {
		if (!el.classList.contains('url-nohover')) {
			el.style.setProperty('color', textColorDim, 'important');
		}
	});
	elements = document.querySelectorAll('.text-color-dimmer');
	elements.forEach(function (el) {
		if (!el.classList.contains('url-nohover')) {
			el.style.setProperty('color', textColorDimmer, 'important');
		}
	});
	elements = document.querySelectorAll('.text-color-bold');
	elements.forEach(function (el) {
		if (!el.classList.contains('url-nohover')) {
			el.style.setProperty('color', textColorBold, 'important');
		}
	});
	elements = document.querySelectorAll('p a');
	elements.forEach(function (el) {
		if (!el.classList.contains('url-nohover')) {
			el.style.setProperty('color', linkText, 'important');
		}
	});


	document.body.style.setProperty('--border-color', borderColor, 'important');
	document.body.style.setProperty('--bg-color', bgColor, 'important');
	document.body.style.setProperty('--bg-color-inv', bgColorInv, 'important');
	document.body.style.setProperty('--bg-color-dim', bgColorDim, 'important');
	document.body.style.setProperty('--bg-color-dimmer', bgColorDimmer, 'important');
	document.body.style.setProperty('--text-color', textColor, 'important');
	document.body.style.setProperty('--text-color-inv', textColorInv, 'important');
	document.body.style.setProperty('--text-color-dim', textColorDim, 'important');
	document.body.style.setProperty('--text-color-dimmer', textColorDimmer, 'important');
	document.body.style.setProperty('--text-color-bold', textColorBold, 'important');

	// Switch btn-outline-light to btn-outline-dark and vice-versa
	let lightButtons = document.querySelectorAll('.btn-outline-light');
	let darkButtons = document.querySelectorAll('.btn-outline-dark');
	if (isNight) {
		lightButtons.forEach(btn => {
			btn.classList.remove('btn-outline-light');
			btn.classList.add('btn-outline-dark');
		});
		darkButtons.forEach(btn => {
			btn.classList.remove('btn-outline-dark');
			btn.classList.add('btn-outline-light');
		});
	} else {
		darkButtons.forEach(btn => {
			btn.classList.remove('btn-outline-light');
			btn.classList.add('btn-outline-dark');
		});
		lightButtons.forEach(btn => {
			btn.classList.remove('btn-outline-dark');
			btn.classList.add('btn-outline-light');
		});
	}

	// Toggle between bg-dark and bg-light, btn-dark and btn-light
	let bgDarkElements = document.querySelectorAll('.bg-dark');
	let bgLightElements = document.querySelectorAll('.bg-light');
	let btnDarkElements = document.querySelectorAll('.btn-dark');
	let btnLightElements = document.querySelectorAll('.btn-light');
	if (isNight) {
		bgLightElements.forEach(el => {
			el.classList.remove('bg-light');
			el.classList.add('bg-dark');
		});
		btnLightElements.forEach(btn => {
			btn.classList.remove('btn-light');
			btn.classList.add('btn-dark');
		});
	} else {
		bgDarkElements.forEach(el => {
			el.classList.remove('bg-dark');
			el.classList.add('bg-light');
		});
		btnDarkElements.forEach(btn => {
			btn.classList.remove('btn-dark');
			btn.classList.add('btn-light');
		});
	}

	// Keep the night mode state in local storage so it persists across page loads
	if (saveToLocalStorage) {
		localStorage.setItem('darkMode', JSON.stringify(isNight));
	}

	// Update the icons
	feather.replace({
		'aria-hidden': 'true'
	});
}

// Controller for the switch toggle which changes the night mode state
function toggleDayNightIcon() {
	let nightModeToggle = document.getElementById('nightModeToggle');
	if (nightModeToggle.checked) {
		toggleNightMode(true);
	} else {
		toggleNightMode(false);
	}
}

// Refresh the colors of the page
function refreshColors() {
	toggleNightMode(document.getElementById('nightModeToggle').checked, false, false);
}

// Initialization of the page
function init() {
	let useDarkModeByDefault = false;
	let storedDarkModeState = localStorage.getItem('darkMode');
	let isNight = storedDarkModeState !== null ? JSON.parse(storedDarkModeState) : useDarkModeByDefault;
	document.getElementById('nightModeToggle').checked = isNight;
	toggleNightMode(isNight, false, false);
}