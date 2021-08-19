const rules = require("./webpack.rules");
const plugins = require("./webpack.plugins");

rules.push(
    {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
    },
    {
        test: /\.s[ac]ss$/i,
        use: [
            // Creates `style` nodes from JS strings
            "style-loader",
            // Translates CSS into CommonJS
            "css-loader",
            // Compiles Sass to CSS
            "sass-loader",
        ],
    },
    {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: "file-loader",
    }
);

module.exports = {
    module: {
        rules,
    },
    plugins: plugins,
    resolve: {
        extensions: [".js", ".ts", ".jsx", ".tsx", ".css", "scss"],
        fallback: { path: require.resolve("path-browserify") },
        symlinks: false,
    },
};
