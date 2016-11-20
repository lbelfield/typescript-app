module.exports = {
    entry: "./index.js",
    output: {
        path: "./app/dist",
        filename: "bundle.js"
    },
    module: {
        loaders: [{
            exclude: /node_modules/,
            loader: "babel-loader",
            query: {
                presets: ["es2015"]
            }
        }]
    }
}