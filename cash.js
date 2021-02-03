class Cash{





getCash(){
 var cashRef = database.ref('cash1');
 cashRef.on("value",function(data){
 cash1 = data.val();
 })
}







}