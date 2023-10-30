import getCurrentSliderPos from "./getCurrentSliderPos.js";
import setDietText from "./setDietText.js";
import setPhysText from "./setPhysText.js";
const PHYSICAL_SLIDE = 1;
const DIET_SLIDE = 2;
const MENTAL_SLIDE = 3;
setInterval(() => {
  let cur = getCurrentSliderPos();
  switch (cur) {
    case PHYSICAL_SLIDE:
      setPhysText();
      break;

    case DIET_SLIDE:
      setDietText();
      break;
    case MENTAL_SLIDE:
      console.log("MENTAL");
      break;
  }
});
