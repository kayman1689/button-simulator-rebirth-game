class Ultrarebirth{
    getUltrarebirth(){
     var ultrarebirthRef = database.ref('ultrarebirth');
     ultrarebirthRef.on("value",function(data){
        ultrarebirth = data.val();
     })
    }
    }