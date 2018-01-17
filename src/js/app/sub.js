//一.可以直接定义一个字面量对象
/*
  define({
     color:"black",
     size:'large'
  })
*/

//二.可以做一些初始化工作
//没有任何依赖
/*define(function(){
   return {
           color:"black",
           size:'large'
         }
})*/

//三.定义函数并且有依赖
/*define(['./cat','./dog'], function(cat,dog){
    
    //cat 模块返回的是一个函数
    console.log(cat('Tom'));

    console.log(dog.name); 
    
    return {
    	cat   : cat('Tom'),
    	dog   : dog.name,
    	size  : 'large',
    	color : 'black'
    }
})*/

//四.用类似 commonjs的规范 定义模块

/*define(function(require, exports, module){

      let cat = require('./cat');
      let dog = require('./dog');
      console.log(cat('TOM'));
      console.log(dog.name);
      
      return {
      	   cat   : cat("TOM"),
      	   dog   : dog.name,
      	   size  : 'large',
      	   color : 'black'
      }
})*/

//五 定义一个有名字的模块
//   作为第一个参数
//   只要 模块加载完就 执行 handle 或 data

define('app/sub', ['./cat', './dog'], function(cat,dog){

	 //cat 模块返回的是一个函数
     console.log(cat('Tom'));
     console.log(dog.name); 
     
     console.log();

     return {
    	 cat   : cat('Tom'),
    	 dog   : dog.name,
    	 size  : 'large',
    	 color : 'black'
     }
})

//六 生成一个相对 BaseUrl的地址  url

/*define(['require'], function(require){
     var url = require.toUrl("./cat");
     console.log("url=="+url);
});*/


/*
 *
   一个文件可以 define 多次 但只执行第一个 define
   define(function(){
	   return 123123123
   })
*/

//循环依赖的问题

//指定一个 jsonp 服务
//刚好是一个 jsonp 服务

// 其实是这样的 当require的时候 去load一个文件因为我们的文件是 用 define 包裹的
// 所以当文件下载完以后 就开始执行 define() 这个函数  执行的时候会把 
// 自己的值作为参数 传递进 require 的回调函数里面
// 这是一个基本的流程
// 其实 require的时候, 就可以把模块和回调建立起联系
// 模块加载完以后 就执行 模块对应的hanlder 并把参数传递进去

/*require(["http://example.com/api/data.json?callback=define"],
    function (data) {
        //The data object will be the API response for the
        //JSONP data call.
        console.log(data);
    }
);*/

//配置选项

/*require.config({
   baseUrl:'xx',
   paths:{
   	  "some":"xx"
   },
   waitSeconds:15 
})*/


//shim的作用就是 暴露一些浏览器全局变量 
//shim 配置 主要用于非AMD 规范的脚本
//对于 AMD 规范的脚本 不会起作用
//主要就是用于加载一下 非AMD 规范的脚本

/*requirejs.config({
    shim: {
        'jquery.colorize': {
            deps: ['jquery'],
            exports: 'jQuery.fn.colorize'
        },
        'jquery.scroll': {
            deps: ['jquery'],
            exports: 'jQuery.fn.scroll'
        },
        'backbone.layoutmanager': {
            deps: ['backbone']
            exports: 'Backbone.LayoutManager'
        }
    }
});*/


//map 可以配置不同的版本
//得使用绝对 moduleIDs 作为 map Config
// 相对 Ids 不起作用

/*reuqire.config({
   map:{
   	   *:{
	     'foo' : 'foo1.3'
   	   },
       'some/newmodule' :{
       	  'foo' : 'foo1.2'
       },
       'some/newmodule' :{
       	  'foo' : 'foo1.1'
       },       
   }  
})*/

//config 作为公共的配置 给特定的模块 提前配置一下信息
// 供config 中定义的模块访问 
/*requirejs.config({
    config: {
        'bar': {
            size: 'large'
        },
        'baz': {
            color: 'blue'
        }
    }
});*/

//bar.js, which uses simplified CJS wrapping:
//http://requirejs.org/docs/whyamd.html#sugar
/*define(function (require, exports, module) {
    //Will be the value 'large'
    var size = module.config().size;
});
*/
//baz.js which uses a dependency array,
//it asks for the special module ID, 'module':
//https://github.com/requirejs/requirejs/wiki/Differences-between-the-simplified-CommonJS-wrapper-and-standard-AMD-define#wiki-magic
/*define(['module'], function (module) {
    //Will be the value 'blue'
    var color = module.config().color;
});*/

//package
//package 指定的是 文件目录 不是 模块Id
//For passing config to a package, target the main module in the package, not the package ID:
requirejs.config({
    //Pass an API key for use in the pixie package's
    //main module.
    config: {
        'pixie/index': {
            apiKey: 'XJKDLNS'
        }
    },
    //Set up config for the "pixie" package, whose main
    //module is the index.js file in the pixie folder.
    packages: [
        {
            name: 'pixie',
            main: 'index'
        }
    ]
});

//高级使用
//...