import path from 'path';
const ROOT_PATH = path.resolve(__dirname,'.');
const ENTRY_PATH = path.resolve(ROOT_PATH,'src/main.js');
const BUILD_PATH = path.resolve(ROOT_PATH,'build');
const NODE_MODULES_PATH = path.resolve(ROOT_PATH,'node_modules');

module.exports = {
	entry: ENTRY_PATH,
  output: {
    path: BUILD_PATH,
    filename: 'bundle.js'
  },
  module: {
		rules:[
			{
				test:/\.js$/,
				use:[
					{
            loader: 'babel-loader',
						options:{
            	presets:[
            		['env',{'modules':false}]
							]
						}
          }
				],
				exclude:NODE_MODULES_PATH
			},
			{
				test:/\.scss$/,
				loader:['style-loader','css-loader','sass-loader']
			}
		]
	},
	devtool:'source-map'
};