const questions = document.querySelectorAll("dl.faq-list dt");
document.documentElement.classList.add("js-enabled");

questions.forEach(function (dt, index) {
	const dd = dt.nextElementSibling;
	if (!dd || dd.tagName !== "DD") {
		return;
	}

	dd.id = `faq-answer-${index + 1}`;
	dt.setAttribute("aria-controls", dd.id);
	dt.setAttribute("aria-expanded", "false");

	function toggleAnswer() {
		const isOpen = dd.classList.toggle("open");
		dt.setAttribute("aria-expanded", String(isOpen));
	}

	dt.addEventListener("click", toggleAnswer);
	dt.addEventListener("keydown", function (e) {
		if (e.key === "Enter" || e.key === " ") {
			e.preventDefault();
			toggleAnswer();
		}
	});
	dt.setAttribute("tabindex", "0");
	dt.setAttribute("role", "button");
});
