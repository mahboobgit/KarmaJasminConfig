var path = require("path");
var nodeExternals = require("webpack-node-externals");

module.exports = {
    entry: {
        Spec: path.join(__dirname, 'test', 'files.js'),
        src: path.join(__dirname, 'src', 'files.js'),
    },
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: '/test/',
        filename: 'bundle.[name].js',
        library: ["calc", "[name]"],
        //libraryTarget: "calc"

    },
    //target: 'node',
    devtool: 'source-map',
    //externals: [nodeExternals()],
    
    // module: {
    //     loaders: [

    //     ]
    //     // loaders: [{
    //     //     test: /\.js$/,
    //     //     exclude: /(node_modules|typings|dist)/,
    //     //     loader: 'babel',
    //     //     query: {
    //     //         presets: ['es2015'],
    //     //     }
    //     // }]
    // },  

}

