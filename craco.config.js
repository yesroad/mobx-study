const path = require('path');

module.exports = {
	webpack: {
		alias: {
			'@': path.resolve(__dirname, 'src/'),
			'@const': path.resolve(__dirname, 'src/lib/const/'),
			'@styles': path.resolve(__dirname, 'src/assets/styles/'),
			'@images': path.resolve(__dirname, 'src/assets/images/'),
		},
	},
	babel: {
		presets: ['@emotion/babel-preset-css-prop'],
	},
};
