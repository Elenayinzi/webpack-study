const path = require('path')

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname,'dist')
    },
    module: {
        rules: [
            // {
            //     test:/\.css$/,  //一般是一个正则表达式，用于匹配我们需要处理的文件类型
            //     use: [
            //         {
            //             loader: 'css-loader'
            //         }
            //     ]
            // },
            //上面的简写方式1，适用于只需要这一个loader并且这个loader很简单时
            // {
            //     test:/\.css$/,
            //     loader: 'css-loader'
            // },
            //上面的简写方式2
            {
                test: /\.css$/,
                use: ['style-loader','css-loader']  //从右到左执行，或从下往上
            },
            {
                test: /\.less$/,
                use: ['style-loader','css-loader','less-loader']  //从右到左执行，或从下往上
            }
        ]
    }
}