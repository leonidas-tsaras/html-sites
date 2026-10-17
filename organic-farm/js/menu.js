const burger = document.getElementById("burger-icon");
const menu = document.getElementById("menu-nav");

if (burger && menu) {
	function setMenuOpen(open) {
		menu.classList.toggle("is-open", open);
		burger.setAttribute("aria-expanded", String(open));
	}

	burger.addEventListener("click", function () {
		setMenuOpen(burger.getAttribute("aria-expanded") !== "true");
	});

	window
		.matchMedia("(width < 800px)")
		.addEventListener("change", function (event) {
			if (!event.matches) {
				setMenuOpen(false);
			}
		});
}
