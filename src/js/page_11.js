console.log(11);
//////Promise, Promise.allSettled(arr)

let a = null;
function toInterval(){
    setInterval(()=>{
        let num = Math.random();
        // console.log(num);
        // if(num < .6) console.log('a');
        // else console.log('b');
        new Promise((resp, rejp)=>{
            if(num < .6) resp('c');
            else rejp('f');
        }).then((resp)=>console.log(resp))
        .catch((rejp)=>console.log(rejp));
    }, 500);
}

// toInterval();
// setInterval(()=>{
//     console.log(num);
// }, 100)

// new Promise(()=>{
    
// })

// setTimeout(()=>{}, 100);
// new Promise((resp, rejt)=>{});

let num01 = Math.random();
console.log(num01);
const p1 = new Promise((res, rej)=>{
    if(num01 < .3) res('p1 Hi!');
    else rej('p1 No');
})
// .then((res)=>console.log(res))
// .catch((rej)=>console.log(rej))

const p2 = new Promise((res, rej)=>{
    if(num01 > .4 || num01 < .7) res('p2 Hi!');
    else rej('p2 No');
})
// .then((res)=>console.log(res))
// .catch((rej)=>console.log(rej))

const p3 = new Promise((res, rej)=>{
    if(num01 > .7) res('p3 Hi!');
    else rej('p3 No');
})
// .then((res)=>console.log(res))
// .catch((rej)=>console.log(rej))
let arr = [p1, p2, p3];
// console.log(arr);
Promise.allSettled(arr)
.then(vallue =>console.log(vallue));
















