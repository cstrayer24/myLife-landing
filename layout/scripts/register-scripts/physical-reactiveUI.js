const formFeilds = document.querySelectorAll(".form-feild-container");
const disabilitesCheckBox = document.querySelector("#disabilities");
const disabilitesList = document.querySelector("#disablitiesList");
formFeilds.forEach((v) => {
  v.children[0].addEventListener("click", (e) => {
    v.children[1].focus();
  });
  v.children[1].addEventListener("focus", (e) => {
    v.children[1].style.borderWidth = "2px";
    v.children[0].style.opacity = "1";
    v.children[0].style.transform = "translateY(-30px)";
    v.children[0].style.color = "#228B22";
  });

  v.children[1].addEventListener("blur", (e) => {
    v.children[1].style.borderWidth = "1px";
    v.children[0].style.opacity = "0.5";
    v.children[0].style.transform = "translateY(0)";
    v.children[0].style.color = "#B8E0C7";
  });
});
disabilitesCheckBox.addEventListener("change", (e) => {
  if (disabilitesCheckBox.checked) {
    disabilitesList.classList.replace(
      "disabilities_default",
      "disabilities_list"
    );
  } else {
    disabilitesList.classList.replace(
      "disabilities_list",
      "disabilities_default"
    );
  }
});
