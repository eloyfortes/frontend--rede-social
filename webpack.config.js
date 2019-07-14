const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')


module.exports = {


    entry: './src/index.jsx',
    mode: 'development',
    output: {
        path: __dirname + '/public',
        filename: './app.js'
    },
    plugins: [
        new MiniCssExtractPlugin({
      
        filename: './app.css'
    }) ],

    

    devServer: {
        port: 8080,
        contentBase: './public',
        historyApiFallback: true

    },
    module: {
        rules: [{

            exclude: /node_modules/,
            test: /\.jsx?$/,
            use: {
                loader: 'babel-loader'
            }
        },
        {
            test: /\.css$/,
           
            use: [MiniCssExtractPlugin.loader, 'css-loader']

        
        },{


            test: /\.(png|jpg|svg|gif|eot|woff2|woff|ttf)$/,
            use: {
               loader: 'file-loader'  

            }
        }]

           
          
            
        }


}




