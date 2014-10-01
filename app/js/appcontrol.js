var gui = require('nw.gui');

document.addEventListener('keyup', function (e) {
	if (e.keyCode == 'Q'.charCodeAt(0)) {
		gui.App.quit();
	}
});