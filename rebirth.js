class Rebirth{





    getRebirth(){
     var rebirthRef = database.ref('rebirth');
     rebirthRef.on("value",function(data){
     rebirth = data.val();
     })
    }
    
    
    
    
    
    
    
    }