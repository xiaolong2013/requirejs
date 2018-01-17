

//dog 依赖 food
define(['./food'],function(food){
   
   return {
        name : 'dog eat' + food.food  
   } 
})