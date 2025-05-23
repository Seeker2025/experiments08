import"./assets/styles-alkzcIgW.js";console.log(11);let l=Math.random();console.log(l);const s=new Promise((e,o)=>{l<.3?e("p1 Hi!"):o("p1 No")}),n=new Promise((e,o)=>{l>.4||l<.7?e("p2 Hi!"):o("p2 No")}),i=new Promise((e,o)=>{l>.7?e("p3 Hi!"):o("p3 No")});let p=[s,n,i];Promise.allSettled(p).then(e=>console.log(e));
//# sourceMappingURL=page11.js.map
