var main = document.getElementById('main');
var className;

document.addEventListener('keydown', function (e) {
	className = 'key_' + e.keyCode; // key_65 for example
	main.classList.add(className);
});

document.addEventListener('keyup', function (e) {
	main.classList = [];
});
