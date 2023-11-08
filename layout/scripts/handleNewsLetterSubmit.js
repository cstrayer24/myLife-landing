const MainForm = document.querySelector("#newsLetterForm")


MainForm.addEventListener("submit", async(e)=>{


    e.preventDefault();
    const nameInput = document.querySelector("#newsLetterName")
    const mailInput = document.querySelector("#newsLetterMail")
    let res;
    if(mailInput.value != "" && nameInput.value !=""){



        const req = await fetch("http://myLife-api.com/newsletter/signup",{

        method:"POST",
        headers:{
            "Content-type":"application/json"
        },
        body:JSON.stringify({name:nameInput.value,emailAdress:mailInput.value})
        })

    if(await req.ok){


        res = await req.json()



    }


    if(res.stat != "success"){


        throw new Error("failed")
    }
    
    }
    
})