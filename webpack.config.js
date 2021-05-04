const path = require('path')

module.exports = {
    mode: "development",
    entry: './test/index.js',
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname,'./test/bundled/')
    },
    module: {
        rules: []
    },
    plugins: [],
    devServer: {
        publicPath: '/',
        open: true,
    }
}
