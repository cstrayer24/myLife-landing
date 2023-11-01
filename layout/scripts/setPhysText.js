function setPhysText() {
  const Head = document.querySelector(
    "li.flex-active-slide>article>h3.heading"
  );
  const descript = document.querySelector("p.descript");
  descript.textContent = `your physical wellness is crucial getting the life you want`;
  Head.textContent = `your physical wellness destination`;
  const bgDiv = document.querySelector("div.bgded.overlay");

  // bgDiv.style.backgroundImage =
  //   //"url('images/placeholders/phys-placeholder.png')";
}
export default setPhysText;
