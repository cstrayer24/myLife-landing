import formDataToObj from "../formDataToObj.js";
import apiUrl from "../apiUrl.js";
const form = document.querySelector("#main_form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const bodyObj = {
    userID: localStorage.getItem("signingUser"),
    hasAllergies: false,
    allergies: [],
    hasDisease: false,
    diseases: [],
    religiousDiet: "none",
    currentDiet: "none",
  };
  const data = new FormData(form);
  const dataRawObj = formDataToObj(data);
  console.log(dataRawObj);
  if (dataRawObj.religionDiet !== "no_religion") {
    bodyObj.religiousDiet = dataRawObj.religionDiet;
  }
  if (dataRawObj.existingDiet !== "none") {
    bodyObj.currentDiet = dataRawObj.existingDiet;
  }
  //check disease
  if (
    Object.keys(dataRawObj).includes("hasDietDisease") &&
    dataRawObj["hasDietDisease"] !== "off"
  ) {
    bodyObj.hasDisease = true;
    const includedDiseases = [
      "diabetes",
      "heartFailure",
      "arthritis",
      "obesity",
      "cancer",
      "COPD",
      "strokes",
      "kidneyDisease",
    ];
    const diseaseList = Object.keys(dataRawObj).filter(
      (v) => includedDiseases.includes(v) && dataRawObj[v] !== "off"
    );
    console.log(diseaseList);
    for (let i = 0; i < diseaseList.length; i++) {
      bodyObj.diseases.push(diseaseList[i]);
    }
  }
  //check allergies
  if (
    Object.keys(dataRawObj).includes("has_allergy") &&
    dataRawObj["has_allergy"] !== "off"
  ) {
    bodyObj.hasAllergies = true;
    const includedAllergies = [
      "peanuts",
      "milk",
      "eggs",
      "treeNuts",
      "sesame",
      "soy",
      "fish",
      "shellfish",
    ];
    const allergiesList = Object.keys(dataRawObj).filter(
      (v) => includedAllergies.includes(v) && dataRawObj[v] !== "off"
    );
    // console.log(allergiesList);
    for (let i = 0; i < allergiesList.length; i++) {
      bodyObj.allergies.push(allergiesList[i]);
    }
  }
  console.log(`${apiUrl}/registration-step2`);
  const res = await fetch(`${apiUrl}/registration-step2`, {
    method: "POST",
    mode: "cors",
    body: JSON.stringify(bodyObj),
    headers: {
      "Content-type": "application/json",
    },
  });

  if (res.ok) {
    window.location.assign("/register/physical.html");
  }
});
