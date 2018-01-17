
//定义 猫模块
//依赖必须是数组

/*define(['./mouse'],function(mouse){
     
     //返回一个对象
     return {
        name : "cat eat" + mouse.name
     }
})*/


define(['./mouse'],function(mouse){
     //返回一个匿名函数
     return function(catName){
         return catName +" eat " + mouse.name
     } 
})