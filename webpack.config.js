var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = [
	{
		name: "web",
		entry: {
			app: './src/web/app.js',
		},
		output: {
			path: __dirname + "/public",
			filename: "javascripts/[name].js",
		},
		module: {
			loaders: [
				{ test: /\.css$/,
					loader: ExtractTextPlugin.extract("style", "css!postcss") },
			]
		},
		postcss: [
			require('postcss-cssnext'), require("postcss-simple-vars"),
			require('postcss-nested'), require("postcss-mixins"), require("postcss-define-property")
		],
		devtool: 'inline-source-map',
		plugins: [
			new ExtractTextPlugin("stylesheets/[name].css"),
		],
	}
];
