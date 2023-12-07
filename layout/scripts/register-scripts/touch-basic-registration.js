const formFeilds = document.querySelectorAll(".form-feild-container")


console.log(formFeilds)
formFeilds.forEach((v)=>{

console.log(v.children)
v.children[0].addEventListener("click",(e)=>{

    v.children[1].focus()
    
})


v.children[1].addEventListener("focus",(e)=>{

   v.children[0].style.transform = "translateY(-30px)";
   v.children[1].style.borderWidth = "2px"
   v.children.style.borderColor = "rgb(0,0,0)"
})

v.children[1].addEventListener("blur",(e)=>{

    v.children[0].style.transform = "translateY(0)";
    v.children[1].style.borderWidth="1px"
})



})