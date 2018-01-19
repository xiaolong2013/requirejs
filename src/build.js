({
    appDir: '.',
    baseUrl: 'js',
    dir: 'dist',
    modules: [
        {
            name: '../app'
        }
    ],
    fileExclusionRegExp: /^(r|build)\.js$/,
    optimizeCss: 'standard',
    removeCombined: true,
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