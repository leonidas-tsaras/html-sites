const burger = document.getElementById('burger-icon');
const menu = document.getElementById('menu-nav');

function toggleMenu() {
    if (menu.style.display === 'flex') {
        menu.style.display = '';
    } else {
        menu.style.display = 'flex';
        menu.style.flexDirection = 'column';
        menu.style.position = 'absolute';
        menu.style.top = 'var(--headerHeight)';
        menu.style.left = '0';
        menu.style.width = '100%';
        menu.style.backgroundColor = 'var(--textColor)';
        menu.style.padding = '1rem 0';
        menu.style.zIndex = '1000';
    }
}
if (burger && menu) {
    burger.addEventListener('click', toggleMenu);
    burger.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggleMenu();
        }
    });
}

