const hasAllergiesCheckBox = document.querySelector("#allergy_checkbox")
const allergiesFeild = document.querySelector("#allergy_picker")

const hasDiseaseCheckBox = document.querySelector("#hasDietDisease")
const diseaseList = document.querySelector("#disease_options");
hasDiseaseCheckBox.addEventListener("change",(e)=>{


    if(hasDiseaseCheckBox.checked){
diseaseList.classList.replace("disease_default","disease")
console.log("checked")

}else{
        diseaseList.classList.replace("disease","disease_default")
console.log("un checked")


    }
})
hasAllergiesCheckBox.addEventListener("change",(e)=>{


    if(hasAllergiesCheckBox.checked){

        console.log("checked")
        allergiesFeild.classList.replace("allergies_default","allergies")
    }else{
        
        console.log("not checked")
        // allergiesFeild.classList
        allergiesFeild.classList.replace("allergies","allergies_default")
    }
})


