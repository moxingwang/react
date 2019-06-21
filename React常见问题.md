# component的三种创建方式
* 无状态函数式组件

```
function HelloComponent(props) {
  return <div>Hello {props.name}</div>
}
ReactDOM.render(<HelloComponent name="yourName" />, mountNode) 

```

* 继承React.Component
React.Component是以ES6的形式来创建react的组件的，是React目前极为推荐的创建有状态组件的方式，相对于 React.createClass可以更好实现代码复用。将上面React.createClass的形式改为React.

```
//创建组件
class myComponent extends React.Component{
    constructor(props){
        super(props);
        this.state={
        }
    }
//内部成员函数
    handleClick(){
        console.log('我被点击了')
    }
    render(){
        return(
            <div onClick={()=>this.handleClick()}></div>
        )
    }
}
```


* [React创建组件的三种方法](https://www.jianshu.com/p/f5c9ec0917bb)

# ES6语法
* [ES6 扩展运算符 三个点（...）](https://www.jianshu.com/p/86cbabeda999)


# 关于this的理解
* [react组件成员函数绑定写法](https://www.jianshu.com/p/ec1f1991c301)
* [React组件方法中为什么要绑定this](http://blog.51cto.com/13869008/2147770)


# CSS基础
* [CSS基本样式（基础中的基础）](https://zhuanlan.zhihu.com/p/34365442)

# reference
* [react中函数的定义和使用](https://blog.csdn.net/well2049/article/details/79430811)
* [升级到Babel 7的经验](https://segmentfault.com/a/1190000016541105)
* [React系列bind this](https://www.jianshu.com/p/018665bc4ce2)