const critical = require('critical')

critical.generate({
	inline: true,
	base: './build',
	src: '_index.html',
	width: 1300,
	height: 900,

	target: {
		css: './static/css/critical.css',
		html: 'index.html',
		uncritical: './static/css/uncritical.css'
	},
	minify: true,
	extract: true
});