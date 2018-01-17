
//设置配置
require.config({
    //默认的模块 从 js/lib 中加载
    baseUrl : 'js/lib',
    //如果模块以 app开头的话 则 从 js/app下加载
    //因为 app 相对于 baseUrl   
    paths : {
    	app : "../app"
    }
})


//以下的 jquery canvas 都不需要加路径 可以默认baseUrl 中加载
//sub 默认从
require(['jquery', 'canvas', 'app/sub'], function($, canvas, sub){
     
    //加载进来 jquery 
    /*$(function(){
         alert("domReady");
    })*/
    console.log(sub);
    console.log("$====="+$);
    console.log("color=="+canvas.color);
    console.log("size==="+sub.size);
})