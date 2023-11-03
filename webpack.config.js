const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/index.tsx',
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.(png|jpg|gif|eot|ttf|woff)$/,
				type: 'asset/resource',
				generator: {
					filename: "static/[name][ext]",
				},

			},
			{
				test: /\.inline.svg$/,
				use: [
					{
						loader: '@svgr/webpack',
						options: {
							svgoConfig: {
								plugins: [
									{
										name: 'preset-default',
										params: {
											overrides: {
												removeViewBox: false,
											},
										},
									},
								],
							},
						},
					},
				],
			},
		],
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
		alias: {
			'@utils': path.resolve(
				__dirname,
				path.join('src', 'shared', 'utils'),
			),
			'@ui-kit': path.resolve(
				__dirname,
				path.join('src', 'shared', 'ui-kit'),
			),
			'@components': path.resolve(
				__dirname,
				path.join('src', 'components'),
			),
			'@assets': path.resolve(
				__dirname,
				path.join('src', 'shared', 'assets'),
			),
			'@languages': path.resolve(
				__dirname,
				path.join('src', 'shared', 'languages'),
			),
			'@constants': path.resolve(
				__dirname,
				path.join('src', 'shared', 'constants'),
			),
			'@router': path.resolve(
				__dirname,
				path.join('src', 'app', 'router'),
			),
			'@store': path.resolve(
				__dirname,
				path.join('src', 'app', 'store'),
			),
			'@pages': path.resolve(__dirname, path.join('src', 'pages')),
		},
	},
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
	},
	plugins: [new HtmlWebpackPlugin({ template: './public/index.html' })],
	devServer: {
		historyApiFallback: true,
		port: 1313,
		hot: true,
	},
};
