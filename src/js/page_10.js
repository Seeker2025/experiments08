console.log('10');

const btn = document.querySelector(".js_btn");
const cont = document.querySelector(".js_container09")
console.log(btn);
console.log(cont);

btn.addEventListener('click', onClickFun);
function onClickFun(){
    console.log(btn);
}