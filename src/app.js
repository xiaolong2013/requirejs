
//以下的 jquery canvas 都不需要加路径 可以默认baseUrl 中加载
//sub 默认从

require.config({
    baseUrl : 'js',
    paths: {
        app : "./app",
        lib : './lib',
        jquery: "empty:"
    },
    shim: {
        "app/c":{
            //可以暴露出多个接口
            init : function(){
               return {
                  aa : show ,
                  bb : hide
               } 
            }
        }
    },
    map:{
       'app/d' : {
          jquery : 'lib/jquery-2.2.4'
       },

       'app/e' : {
          jquery : 'lib/jquery-3.2.1'
       }
    }
})



require(['lib/jquery', 'lib/canvas', 'app/sub','app/c','app/d', 'app/e'], function($, canvas, sub,c,d,e){
    
    //加载进来 jquery 
    
    /*
       $(function(){
          alert("domReady");
       })
    */

    console.log("c==="+ c.aa);
    console.log("c==="+ c.bb);
    console.log(sub);
    console.log("$====="+$);
    console.log("color=="+canvas.color);
    console.log("size==="+sub.size);
})