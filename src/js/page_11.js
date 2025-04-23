console.log(11);

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

toInterval();
// setInterval(()=>{
//     console.log(num);
// }, 100)

new Promise(()=>{
    
})

