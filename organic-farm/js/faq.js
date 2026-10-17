
const questions = document.querySelectorAll('dl.faq-list dt');
questions.forEach(function (dt) {
    dt.addEventListener('click', function () {
        const dd = this.nextElementSibling;
        if (dd && dd.tagName === 'DD') {
            dd.classList.toggle('open');
        }
    });
    dt.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            const dd = this.nextElementSibling;
            if (dd && dd.tagName === 'DD') {
                dd.classList.toggle('open');
            }
        }
    });
    dt.setAttribute('tabindex', '0');
    dt.setAttribute('role', 'button');
});