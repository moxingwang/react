# 入门

[官方入门教程](https://reactjs.org/tutorial/tutorial.html)


## 创建和启动
* create app
```aidl
npx create-react-app demo1

``` 

* start
```aidl
npm start
```

## components
### components两种创建方式

1. a JavaScript function is a components
```
function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}
```

2. extends
```
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//use an ES6 class to define a component
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
```

### components State and Lifecycle
```
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

ReactDOM.render(
  <Clock />,
  document.getElementById('root')
);
```

## Handling Events





# react引入antd
* 安装`yarn`脚手架
```
npm install -g yarn
```

* 项目中引入Ant design的组件库

在项目目录下执行
```
yarn add antd
```

整个配置过程就完成，接下来就是编写代码即可，可以参考`AntdTest`。












# reference
* [react-router官方](https://reacttraining.com/react-router/web/guides/quick-start/example-nested-routing)
* [开发你的第一个React + Ant Design网页(一、配置+编写主页)](https://blog.csdn.net/u012907049/article/details/73240865)
* [react的SPA实践](https://www.jianshu.com/p/e8b33dd74190)
* [前端相关文档](https://webpack.docschina.org/loaders/react-proxy-loader/)