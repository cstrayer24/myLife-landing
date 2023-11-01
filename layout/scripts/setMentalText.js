function setMentalText(){
const pEls = document.querySelectorAll("li.flex-active-slide>article>p")
const Head = document.querySelector("li.flex-active-slide>article>h3.heading")
const btn = document.querySelector("li.flex-active-slide>article>footer>a")

pEls[0].textContent = "myLife"
Head.textContent = "Your Mental Wellness Destination"
pEls[1].textContent = "your Mental Wellness is crucial to getting the life you want"
btn.textContent = "GO TO MYLIFE"



}


export default setMentalText