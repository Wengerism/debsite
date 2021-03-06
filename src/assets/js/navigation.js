export const navSlide = () => {
	const burger = document.querySelector(".burger");
	const nav = document.querySelector(".nav-list");
	const navLink = document.querySelectorAll(".nav-links");
	const contentsList = document.querySelector("li a");

	burger.addEventListener("click", () => {
		nav.classList.toggle("nav-active");

		// setTimeout(function () {
		// 	nav2.classList.toggle("nav-active");
		// }, 150);

		// Animate links
		navLink.forEach((link, index) => {
			if (link.style.animation) {
				link.style.animation = "";
			} else {
				setTimeout(function () {
					link.style.animation = `navLinkFade .5s ease forwards ${
						index / 15 + 0.75
					}s`;
				}, 50);
			}
		});

		// setTimeout(function () {
		// 	link.style.animation = `navLinkFade .7s ease forwards ${index / 15 + 0.75}s`;
		// }, 50);

		// Burger animation
		burger.classList.toggle("toggler");
	});
};

// activeNav for menu

export const activeNav = () => {
	const currentPage = data.page.url;
	const contentsList = document.querySelectorAll("li a");

	contentsList.forEach(function (link) {
		if (link.href === currentPage) {
			link.classList.add("active");
		}
	});
};
