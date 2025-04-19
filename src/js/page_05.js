// JS: Classes

class Car {
    constructor(brand, makeCar) {
        this.brand = brand;
        this.makeCar = makeCar;
    }
}
const car = new Car('Audi', makeCar);
// console.log(car);
// console.log(car.makeCar());
// console.log(Car);

function makeCar() {
   return 'Hi!';
}

/////«Об'єкт параметрів»
class User {
    // Деструктуризуємо об'єкт
    constructor({ name, email, funTree }) {
        this.name = name;
        this.email = email;
        this.funTree = funTree;
        this.init();
    }
    init() {
        console.log('init');
    }
}
// console.log(User);

const mango = new User({
  name: "Mango",
  email: "mango@mail.com",
  funTree() {
    console.log('Whoa!');
  }
});
// console.log(mango); // { name: "Mango", email: "mango@mail.com", funTree: ƒ }
// mango.funTree(); // Whoa!







class People{
    constructor({ name, age, fun }) {
        this.name = name;
        this.age = age;
        this.fun = fun;
        
    }
}
const people = new People({
    name: 'Ivan',
    age: 25,
    fun() {
        console.log('Hello!');
    }
});
// console.log(people.name);
// people.fun();


// const fetchUserFromServer = (username, onSuccess, onError) => {
//     console.log(`Fetching data for ${username}`);
//   };
  
//   fetchUserFromServer(
//       "Mango", 
//       user => console.log(user), 
//       error => console.error(error)
//   );
  

class Peace{
    constructor({ name, odd, fun }) {
        this.name = name;
        this.odd = odd;
        this.fun = fun;
    }
}
const peace = new Peace({
    name: 'Ivan',
    odd: 27,
    fun() {
        console.log('Hello!');
    }
});

console.log(peace.name);
console.log(peace.odd);
peace.fun();
peace.odd = 30;
console.log(peace.odd);