import getCurrentSliderPos from "./getCurrentSliderPos.js";
const PHYSICAL_SILDE = 1;
const DIET_SLIDE = 2;
const MENTAL_SLIDE = 3;
setInterval(() => {
  let cur = getCurrentSliderPos();
  switch (cur) {
    case PHYSICAL_SILDE:
      break;

    case DIET_SLIDE:
      console.log("diet");
      break;
    case MENTAL_SLIDE:
      console.log("MENTAL");
      break;
  }
});
