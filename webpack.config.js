var path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
	entry:{
		app:['./src/index.js']
	},
	output:{
		filename:'[name].[chunkhash].js',
		path:path.resolve(__dirname,'dist')
	},
	module:{
		rules:[
			{
				test:/\.css$/,
				use:ExtractTextPlugin.extract({
					fallback:"style-loader",
					use:"css-loader"
				})
			}
		]
	},
	plugins:[
		new ExtractTextPlugin({
			filename:'style.[contenthash].css'
		}),
		new HtmlWebpackPlugin()
	]
}