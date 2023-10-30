function getCurrentSliderPos() {
  const rootList = document.querySelector("ol.flex-control-nav");

  let current;

  for (let i = 0; i < rootList.children.length; i++) {
    if (rootList.children[i].children[0].classList.contains("flex-active")) {
      current = i + 1;
      break;
    }
  }

  return current;
}
export default getCurrentSliderPos;
