class Prestige{
    getPrestige(){
     var prestigeRef = database.ref('prestige');
     prestigeRef.on("value",function(data){
        prestige = data.val();
     })
    }
    }