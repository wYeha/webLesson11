const toggleMenuCheckbox = document.getElementById('toggleMenu');
const menu = document.getElementById('menu');

function toggleMenu() {
	menu.classList.toggle('active');
}

toggleMenuCheckbox.addEventListener('change', toggleMenu);