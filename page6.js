import"./assets/modulepreload-polyfill-B5Qt9EMX.js";console.log("a");const i=["Secretariat","Eclipse","West Australian","Flying Fox","Seabiscuit"],r={startBtn:document.querySelector(".js-start-race"),winnerFiel:document.querySelector(".js-winner"),progressField:document.querySelector(".js-progress"),tableBody:document.querySelector(".js-results-table > tbody")};let c=0;r.startBtn.addEventListener("click",()=>{c+=1;const e=i.map(l);d(""),s("Заезд начался! Ставки не принимаются!"),Promise.race(e).then(({horse:t,time:n})=>{console.log(`%c Победил: ${t}, финишировав за: ${n} времени`,"color: green; font-size: 14px; font-weight: bold;"),s(`Победил: ${t}, финишировав за: ${n} времени`),u({horse:t,time:n,raceCounter:c})}),Promise.all(e).then(t=>{console.log(t),s("Заезд окончен! Принимаются ставки")})});function l(e){return new Promise((t,n)=>{const o=a(2e3,3500);setTimeout(()=>{t({horse:e,time:o})},o)})}l("Mango").then(e=>console.log(e)).catch(e=>console.log(e));function a(e,t){return Math.floor(Math.random()*(t-e+1)+e)}function d(e){r.winnerFiel.textContent=e}function s(e){r.winnerFiel.textContent=e}function u({horse:e,time:t,raceCounter:n}){const o=`<tr><td>${n}</td><td>${e}</td><td>${t}</td></tr>`;r.tableBody.insertAdjacentHTML("beforeend",o)}
//# sourceMappingURL=page6.js.map
