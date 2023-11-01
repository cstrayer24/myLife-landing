function setDietText() {
  const pHead = document.querySelector("li.flex-active-slide>article>p");
  const bgDiv = document.querySelector("div.bgded.overlay");
  const pS = document.querySelectorAll("li.flex-active-slide>article>p")
  const btn = document.querySelector("li.flex-active-slide>article>footer>a")
  // bgDiv.style.backgroundImage =
  //   "url('images/placeholders/diet-placeholder.png')";
 pHead.textContent = "myLife" 

 const slider_head = document.querySelector("li.flex-active-slide>article>h3")
 
 slider_head.textContent = "Your Dietary Wellness destination"
 pS[1].textContent = "your Dietary Wellness is crucial to getting the life you want"
btn.textContent = "GO TO myLife"

}
export default setDietText;
