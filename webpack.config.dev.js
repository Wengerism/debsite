const {merge} = require("webpack-merge");
const common = require("./webpack.config.common.js");
const CssMinimizerWebpackPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
module.exports = merge(common, {
	mode: "development",
	// Allow watching and live reloading of assets
	watch: true,
	stats: {
		children: true,
	},
	optimization: {
		minimizer: [
			new CssMinimizerWebpackPlugin({}),
			new TerserPlugin({
				extractComments: false,
			}),
		],
	},
});
