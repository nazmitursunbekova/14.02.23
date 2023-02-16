let num = 1;
while (num <= 10) {
  console.log(num);
  num++;
}
let example = [1, 2, 5, 3, 6, 9, 8, 7];
let sum = 0;
//for(let i;i <= number.lenght; i++);

let example1 = {};
let joldosh = {
  name: "joldosh",
  age: 22,
  isEmployed: false,
};
let example2 = {};
let nazmi = {
  name: "Nazmi",
  age: 20,
  sayHello: function () {
    console.log("Hello, i'm joldosh ");
  },
  sayBye: function () {
    console.log("Bye");
  },
  myAge: function () {
    console.log("I'm" + this.age + " years old");
  },
};
console.log(nazmi.name);
console.log(nazmi.age);

nazmi.sayHello();
nazmi.sayBye();
nazmi.myAge();

let example5 = {
  number: 0,
  inc: function () {
    this.number = this.number + 1;
  },
  add: function (num) {
    this.number = this.number + num;
  },
  subtract: function (num) {
    this.number = this.number - num;
  },
   print:function(){
    console.log(this.number);
   }
};
console.log(example5.number);
example5.inc();
example5.inc();
console.log(example5.number);
example5.add(5);
console.log(example5.number);
example5.subtract(4);
example5.print();