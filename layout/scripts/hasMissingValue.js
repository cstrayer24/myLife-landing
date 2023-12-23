function hasMissingValue(obj){



    const keys = Object.keys(obj);

    for (let index = 0; index < keys.length; index++) {
        if(!obj[keys[index]]){

            return false;
        }
        
    }
return true;

}



export default hasMissingValue;