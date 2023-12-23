const MainForm = document.querySelector("#newsLetterForm")
console.log(MainForm)
const apiUrl = "http://localhost:3000"

MainForm.addEventListener("submit", async(e)=>{
// console.log("test")

    e.preventDefault();
    const nameInput = document.querySelector("#newsLetterName")
    const mailInput = document.querySelector("#newsLetterMail")



    if(mailInput.value != "" && nameInput.value !=""){


        const req = await fetch(`${apiUrl}/newsletter/signup`,{
            //todo add cors
            
            method:"POST",
            headers:{
                "Content-type":"application/json",
               
            },
            mode:"cors",
        body:JSON.stringify({name:nameInput.value,emailAdress:mailInput.value})
        })

 

   
    
    }
    
})