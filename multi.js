class Multi{
    getMulti(){
     var multiRef = database.ref('multi');
     multiRef.on("value",function(data){
     multi = data.val();
     })
    }
    }