import formDataToObj from "../formDataToObj.js";
import apiUrl from "../apiUrl.js";
import hasMissingValue from "../hasMissingValue.js";
const form = document.querySelector("#main_form");
form.addEventListener("submit",async(e)=>{

e.preventDefault()
    const data = new FormData(form);

  const parsibleData = formDataToObj(data);
  // console.log(parsibleData)
// if(hasMissingValue(parsibleData)){

//     throw new Error("missing data")
// }


const res = await fetch(`${apiUrl}/registration-step1`,{

  method:"POST",
  mode:"cors",
  headers:{
    "content-type":"application/json"
  },
  // credentials:"include",
  body:JSON.stringify(parsibleData)
})
// console.log(res)
if(res.ok){

const userIDStr = res.headers.get("x-userID");

localStorage.setItem("signingUser",userIDStr);
  window.location.assign("/register/diet.html")
}
})