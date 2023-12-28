import formDataToObj from "../formDataToObj.js";
import apiUrl from "../apiUrl.js";
const form = document.querySelector("#main_form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const bodyObj = {
    userID: localStorage.getItem("signingUser"),
    weight: 0,
    height: "",
    hasDisabilities: false,
    disabilities: [],
    workout_frequency: "Sedentary",
    strength: 1,
    endurance: 1,
  };
  const data = new FormData(form);

  const dataRawObj = formDataToObj(data);
  console.log(dataRawObj);
  bodyObj.weight = parseInt(dataRawObj.weight);

  bodyObj.height = `${dataRawObj.height_feet},${dataRawObj.height_inches}`;
  if (
    Object.keys(bodyObj).includes("has_disability") &&
    dataRawObj.has_disability === "on"
  ) {
    bodyObj.hasDisabilities = true;
  }

  if (bodyObj.hasDisabilities) {
    const disabilitiesOptions = [
      "hasMissingArm",
      "hasMissingLeg",
      "hasArthritis",
      "hasCerebralPalsy",
      "hasMuscularDistrophy",
      "hasBlindness",
      "hasDeafness",
      "hasAsthma",
    ];
    bodyObj.disabilities = Object.keys(dataRawObj).filter(
      (v) => disabilitiesOptions.includes(v) && dataRawObj[v] === "on"
    );
  }
  bodyObj.workout_frequency = dataRawObj.workoutFrequency;
  bodyObj.strength = parseInt(dataRawObj.strength);
  bodyObj.endurance = parseInt(dataRawObj.endurance);
  const res = await fetch(`${apiUrl}/registration-step3`, {
    method: "POST",
    mode: "cors",
    body: JSON.stringify(bodyObj),
    headers: {
      "Content-type": "application/json",
    },
  });

  if (res.ok) {
    console.log(res);
  }
});
