import appUrl from "./appUrl.js";

const ells = document.querySelectorAll("a.needsAppLink");

ells.forEach((v) => {
  v.setAttribute("href", appUrl);
});
