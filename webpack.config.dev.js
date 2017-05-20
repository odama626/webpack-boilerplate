var autoprefixer = require('autoprefixer');
var path = require('path');

var babelOptions = {
  "presets": [
    "react",
    "env"
  ]
};

module.exports = {
  devtool: 'source-map',
	cache: true,
	entry: {
		main: './assets/index.tsx',
		vendor: [
			'babel-polyfill',
			'react',
			'react-dom'
		]
	},

	output: {
		filename: '[name].js',
		chunkFilename: '[chunkhash].js',
		path: path.resolve(__dirname, 'dist')
	},

	module: {
		rules: [{
      test: /\.ts(x?)$/, exclude: /node_modules/,
        use: [ {
            loader: 'babel-loader', options: babelOptions
          }, {
            loader: 'ts-loader'
        } ]
      }, {
      test: /\.s(a|c)ss$/, exclude: /node_modules/,
        use: [ {
            loader: 'postcss-loader',
            options: {
              plugins: loader => {
                autoprefixer({ browsers: ['last 2 versions']})
              }
            }
          }, {
            loader: 'sass-loader'
        } ]
      }
    ]
	}
};
