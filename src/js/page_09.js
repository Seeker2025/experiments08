console.log('09');

const start = document.querySelector('.js-start');
const container = document.querySelector('.js-container');

start.addEventListener('click', onStart);
// console.log(container.children);

function onStart() {
    const result = [];
    // console.dir(container);
    [...container.children].forEach((box ) => {box.textContent = ""});
    [...container.children].forEach((box, i) => {
        creationPromise(i)
        .then((smile)=>{
            box.textContent = smile;
            result.push('1');
        })
        .catch((smile)=>box.textContent=smile)
        .finally(()=>{
            setTimeout(()=>{
                if(i === container.children.length - 1){
                    if(!result.length || result.length === 3){
                        alert('Winner!');
                    }
                    else{
                        alert('Lost money');
                    }
                }
            }, 500)
         })
});
}

function creationPromise(deley) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            const random = Math.random();
            if(random > .7){
                res("🤑");
            }
            else{
                rej("😈");
            }
        }, 1000 * deley);
     
    })
}




// function onStart() {
//     let counter = 0;
//     const result = [];
//     // console.dir(container);
//     [...container.children].forEach((box ) => {box.textContent = ""});
//     const promises = [...container.children].map((_, i) => creationPromise(i));
//     // console.log(promises);
//     Promise.allSettled(promises)
//     .then(items =>{
//         items.forEach((item, i)=>{
//             console.log(item);
//             setTimeout(()=>{
//                 if(item.status === "fulfilled"){
//                     counter += 1;
//                 }
//                 container.children[i].textContent=item.value || item.reason;
                   
//                 if(container.children.length - 1 === i){
//                     setTimeout(()=>{
//                         if(counter === container.children.length || !counter){
//                             alert("Winner!");
//                         }
//                         else{
//                             alert("Lost money!");
//                         }
//                     }, 500);
//                   }
//             }, i * 1000)
//             // console.log(items);
//         })

// });
// }


// function creationPromise(deley) {
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             const random = Math.random();
//             if(random > .5){
//                 res("🤑");
//             }
//             else{
//                 rej("😈");
//             }
//         }, 1000 * deley);
     
//     })
// }