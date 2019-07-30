const hamburgerIcon = document.querySelector(".hamburger-icon");
const mobileNav = document.querySelector(".nav");

let navOpen = true;
const showNav = () => {
	if (navOpen) {
		mobileNav.style.left = "0";
		navOpen = false;
	} else {
		mobileNav.style.left = "-900px";
		navOpen = true;
	}
}

hamburgerIcon.addEventListener('click', showNav);