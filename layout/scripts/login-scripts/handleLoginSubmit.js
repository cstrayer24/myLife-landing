import apiUrl from "../apiUrl.js";
import appUrl from "../appUrl.js";
import formDataToObj from "../formDataToObj.js";

const form = document.querySelector("#main_form");
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const rawFormData = new FormData(form);
  const bodyObj = formDataToObj(rawFormData);
  const req = await fetch(`${apiUrl}/user-login`, {
    method: "POST",
    mode: "cors",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(bodyObj),
  });

  if (req.ok) {
    //TODO pipe authenticated user into app
    const res = await req.json();
    window.location.assign(`${appUrl}?sessionid=${res.sessionid}`);
  }
});
