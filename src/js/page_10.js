console.log('10');

const btn = document.querySelector(".js_btn");
const cont = document.querySelector(".js_container09")
// console.log(btn);
// console.log(cont);

btn.addEventListener('click', onClickFun);
function onClickFun(){
    let arr = [];
    // console.log([...cont.children]);
    [...cont.children].forEach((box)=>{ box.textContent = '' });
    [...cont.children].forEach((box, idx)=>{
        // console.log(box, idx);
        creationProm(idx)
        .then((smile)=>{
            // console.log(smile);
            box.textContent = smile;
            arr.push('1');
           
        })
        .catch((smile)=>{
            // console.log(smile);
            box.textContent = smile;
        })
        .finally(()=>{
            setTimeout(()=>{
                if(idx === cont.children.length - 1 ){
                    // alert('This is winner!')
                    console.log(cont.children.length);
                }
            }, 500);
           
        })
    })

}

function creationProm(num){
    return new Promise((resp, rejp)=>{
        setTimeout(()=>{
            let random = Math.random();
            if(random > .7){
                resp('😺');
            }
            else{
                rejp('👩‍🦰');
            }
        }, 1000 * num);
    })
};
  

