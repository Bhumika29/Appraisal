const restricted_value = function(value){
    console.log(value);

    if(value === "Template2"){
        throw new Error("Restricted value")
    }
  
}

module.exports=restricted_value;