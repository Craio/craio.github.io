var feed = new Instafeed({
		get: 'user',
		userId: 922058290,
		accessToken: '922058290.6326f61.c0e3b58cd6d94433b57b87e76ca14b83',
		target: 'instagram',
		resolution: 'standard_resolution',
		after: function() {
			var el = document.getElementById('instagram');
			if (el.classList)
				el.classList.add('show');
			else
				el.className += ' ' + 'show';
		}
});
window.onload = function() {
	feed.run();
};
