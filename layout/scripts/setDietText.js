function setDietText() {
  const pHead = document.querySelector("li.flex-active-slide>article>p");
  const bgDiv = document.querySelector("div.bgded.overlay");
  bgDiv.style.backgroundImage =
    "url('images/placeholders/diet-placeholder.png')";
}
export default setDietText;
