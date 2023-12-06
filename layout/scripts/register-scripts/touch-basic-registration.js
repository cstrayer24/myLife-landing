const formFeilds = document.querySelectorAll(".form-feild-containe")


console.log(formFeilds)
formFeilds.forEach((v)=>{

console.log(v.children)
v.children[0].addEventListener("click",(e)=>{

    v.children[1].click()
    
})


v.children[1].addEventListener("click",(e)=>{

    console.log("test")
})
})