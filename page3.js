import"./assets/styles-CPFC-jey.js";const c=3e3;let t=null;const e={notification:document.querySelector(".js-alert"),press:document.querySelector(".box_press"),text:document.querySelector(".box_will")};i();console.log(t);e.notification.addEventListener("click",n);console.log(e.notification);function n(){console.log("click"),o(),e.press.classList.remove("hide"),e.text.classList.add("hide"),clearTimeout(t)}function i(){e.notification.classList.add("is-visible"),e.press.classList.add("hide"),e.text.classList.remove("hide"),t=setTimeout(()=>{console.log("We close the alert automatically so that it doesn't hang"),o(),e.press.classList.remove("hide"),e.text.classList.add("hide")},c)}function o(){e.notification.classList.remove("is-visible")}document.addEventListener("keydown",s=>{s.code==="KeyH"&&(console.log("KeyH"),i())});
//# sourceMappingURL=page3.js.map
