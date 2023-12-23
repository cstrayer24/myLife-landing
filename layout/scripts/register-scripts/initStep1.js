


let stepNo = parseInt(localStorage.getItem("step"))
if(!localStorage.getItem("step")){

console.log("test")

    localStorage.setItem("step","1");
    
}
document.querySelector(".step-count").innerHTML = `step ${stepNo} of 4`

