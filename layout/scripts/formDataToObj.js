

function formDataToObj(data){
const returnObj = {};

    data.forEach((v,key,parent)=>{
        if(!v){
            return
        }
       returnObj[key] = v;
          })

          return returnObj;
}

export default formDataToObj;