## 初始化项目
```aidl
npm init
```

## 配置最基本的webpack
* install webpack
```aidl
npm install -D webpack webpack-cli
```

* 安装最基本的插件
```aidl
npm install -D html-webpack-plugin clean-webpack-plugin webpack-dev-server css-loader webpack-merge style-loader

```

* 在项目文件夹下新建文件webpack.base.conf.js，表示最基本的配置文件
```aidl
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
      filename: 'bundle.[hash].js',
      path: path.join(__dirname, '/dist')
  },
  module: {
      rules: [
          {
              test: /\.css$/,
              use: ['style-loader', 'css-loader']
          }
      ]
  },
  plugins: [
      new HtmlWebpackPlugin({
          template: './src/index.html'
      }),
      new CleanWebpackPlugin(['dist'])
  ]
};
```


* 开发环境下的webpack配置
```aidl
vim webpack.dev.conf.js
```
添加
```aidl
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.conf.js');

module.exports = merge(baseConfig, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
      contentBase: './dist',
      port: 3000
  }
});
```

## 配置npm scripts
```aidl
// package.json
{
    "scripts": {
        "start": "webpack-dev-server --open --config webpack.dev.conf.js",
        "build": "webpack --config webpack.prod.conf.js"
    }
}
```


## 简单测试 

配置完之后，可以尝试修改/src/index.html、/src/index.js或/src/index.css，运行npm scripts命令查看效果。
    
* index.html
```aidl
<html>
    <head>
        <meta charset="utf-8"/>
        <title>React & Webpack</title>
    </head>
    <body>
        <div id="root">
            <h1>Hello React & Webpack!</h1>
        </div>
    </body>
</html>
```
    
* index.js
```aidl
console.log('Success!');
```

* 启动测试
```aidl
npm run start
```

## 安装react和react-dom模块

#### 配置Babel
为了解析react,我们需要babel用于解析es6语法，和针对React的所有的预设插件.
```aidl
npm install -D babel-core babel-loader babel-preset-env babel-preset-react babel-preset-stage-0 
```

* 配置.babelrc
```aidl
{
    "presets": ["env", "react"]
}
```

* 在webpack.base.conf.js的module.rules中插入一个新对象
```aidl
{
    test: /\.js/,
    exclude: /node_modules/,
    include: path.resolve('src'),
    use: {
        loader: 'babel-loader',
        options: {
            presets: [
                "env", "stage-0", "react"
            ]
        }
    }
}
```

* install
```aidl
npm install --save react react-dom
```

* 修改index.js
```aidl
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(<h1>NumberList</h1>, document.getElementById('root'));
```

* 启动测试看到效果


## react引入antd

* 项目中引入Ant design的组件库

在项目目录下执行
```
yarn add antd
```

## router
* install
```aidl
npm install --save react-router-dom
```
* demoe index
```aidl
import React from 'react';
import ReactDOM from 'react-dom';
import AntdTest from './components/AntdTest';
import NumberList from './components/NumberList';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


const AppRouter = () => (
    <Router>
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about/">About</Link>
                    </li>
                    <li>
                        <Link to="/users/">Users</Link>
                    </li>
                </ul>
            </nav>

            <Route path="/" exact component={AntdTest} />
            <Route path="/about/" component={AntdTest} />
            <Route path="/users/" component={NumberList} />
        </div>
    </Router>
);


ReactDOM.render(<AppRouter/>, document.getElementById('root'));
// ReactDOM.render(<App/>, document.getElementById('root'));

```



# reference
* [react-router官方](https://reacttraining.com/react-router/web/guides/quick-start/example-nested-routing)
* [基于Webpack搭建React开发环境](https://juejin.im/post/5afc29fa6fb9a07ab379a2ae)