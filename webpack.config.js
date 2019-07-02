const path = require("path");
module.exports = {
    mode: 'production',
    entry: {
        index: './lib/index.tsx'
    },
    output: {
        // 统一使用node的path来处理路径的拼接，因为不同的系统/或者\
        path: path.resolve(__dirname, 'dist'),
        library: "LEUI",
        libraryTarget: "umd",// 模块规范， umd为兼容模式
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader'
            }
        ]
    }
}