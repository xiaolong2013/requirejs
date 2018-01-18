
//设置配置
require.config({
    //默认的模块 从 js/lib 中加载
    baseUrl : 'js/lib',
    //如果模块以 app开头的话 则 从 js/app下加载
    //因为 app 相对于 baseUrl   
    paths : {
    	app : "../app",
       /* c : '../app/c' //得把 C 模块暴露出来*/
       // c:'../app/c'
    },

    //利用 shim 配置可以把 非AMD规范的模块变成 AMD 规范
    shim:{
        /*c : {
           exports :'show' //导出单个接口  
        }*/
        //定义一个这个模块
        "app/c":{
            //可以暴露出多个接口
            init : function(){
               return {
                  aa : show ,
                  bb : hide
               } 
            }
        }
    }
})


//以下的 jquery canvas 都不需要加路径 可以默认baseUrl 中加载
//sub 默认从
require(['jquery', 'canvas', 'app/sub','app/c'], function($, canvas, sub,c){
     
    //加载进来 jquery 
    /*
       $(function(){
          alert("domReady");
       })
    */
    console.log("c==="+ c.aa());
    console.log("c==="+ c.bb());
    console.log(sub);
    console.log("$====="+$);
    console.log("color=="+canvas.color);
    console.log("size==="+sub.size);
})