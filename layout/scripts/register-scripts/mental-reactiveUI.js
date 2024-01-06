const mentalDisordersCheckBox = document.querySelector("#illness");
const mentalDisordersList = document.querySelector("#illnessList");
mentalDisordersCheckBox.addEventListener("change", (e) => {
  if (mentalDisordersCheckBox.checked) {
    mentalDisordersList.classList.replace("disease_default", "disease");
  } else {
    mentalDisordersList.classList.replace("disease", "disease_default");
  }
});

const religionCheckBox = document.querySelector("#isReligious");
const religionSelect = document.querySelector("#religion_set");

religionCheckBox.addEventListener("change", (e) => {
  if (religionCheckBox.checked) {
    religionSelect.classList.replace("disease_default", "disease");
  } else {
    religionSelect.classList.replace("disease", "disease_default");
  }
});
