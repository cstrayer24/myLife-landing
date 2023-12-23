let stepNo = parseInt(localStorage.getItem("step"))
// if(!localStorage.getItem("step")){

// console.log("test")

//     localStorage.setItem("step","1");
    
// }

if(stepNo !=1){
    window.open("/",'self')
}
localStorage.setItem("step","2")
stepNo =parseInt(localStorage.getItem("step"))
document.querySelector(".step-count").innerHTML = `step ${stepNo} of 4`

