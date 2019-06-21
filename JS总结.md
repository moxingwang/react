* [this]es3,es5中this的指向该函数被调用的对象,也就是说函数被调用的时候,哪个对象调用了这个方法,this就指的是谁.
* [默认参数]也可以默认成函数做参数校验
* [可变参数,扩展运算符] ...a,可以方便合并数据
* [代理]
```
var obj = new Proxy(代理对象, {
    get : function( target , prop ) {
        console.log("我要获取值了");
        return target[prop];
    },
    set : function( target, prop, value) {
        console.log("我要设置值了");
        target[prop] = value;
        }
});
```
