import formDataToObj from "../formDataToObj.js";
import apiUrl from "../apiUrl.js";
import appUrl from "../appUrl.js";
const form = document.querySelector("#main_form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const bodyObj = {
    userID: localStorage.getItem("signingUser"),
    hasMentalIllness: false,
    mental_illnesses: [],
    happinessLevel: 1,
    isReligious: false,
    current_religion: "none",
    relationship_status: "single",
    employment_status: "unemployed",
  };
  const formData = new FormData(form);
  const rawDataObj = formDataToObj(formData);

  if (
    Object.keys(rawDataObj).includes("hasMentalIssues") &&
    rawDataObj.hasMentalIllness === "on"
  ) {
    bodyObj.hasMentalIllness = true;
    const illnessList = [
      "hasAnxiety",
      "hasDepression",
      "hasADHD",
      "hasOCD",
      "hasAutism",
      "hasSchizophrenia",
      "hasPTSD",
      "hasBipolarDepression",
      "hasBorderLinePersonality",
    ];

    bodyObj.mental_illnesses = Object.keys(bodyObj).filter(
      (v) => illnessList.includes(v) && bodyObj[v] === "on"
    );
  }
  bodyObj.happinessLevel = parseInt(rawDataObj.happiness_level);
  if (
    Object.keys(rawDataObj).includes("isReligious") &&
    rawDataObj.isReligious === "on"
  ) {
    bodyObj.isReligious = true;
    bodyObj.current_religion = rawDataObj.current_religion;
  }
  bodyObj.relationship_status = rawDataObj.relationship_status;
  bodyObj.employment_status = rawDataObj.employment_status;
  const res = await fetch(`${apiUrl}/registration-step4`, {
    method: "POST",
    body: JSON.stringify(bodyObj),
    mode: "cors",
    headers: {
      "Content-type": "application/json",
    },
  });

  if (res.ok) {
    console.log(res);
    //TODO pipe new user into application
    const body = await res.json();

    window.location.assign(`${appUrl}?sessionid=${body.id}`);
  }
});
