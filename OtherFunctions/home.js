//map method

/*
const people=[
  {
  name:'nidhi',
  age:20,
  position:'developer'
  },
  {
  name:'radha',
  age:20,
  position:'designer'
  },
  {
  name:'shreya',
  age:19,
  position:'artist'
  },

];

const ages=people.map((person)=>{
  return {
    firstName:person.name.toUpperCase(),
    oldAge:person.age
  }
});
console.log(ages);

const names=people.map((person)=>`<h2>${person.name}</h2>`);
const result=document.querySelector('#result');
result.innerHTML=names.join('');
*/

//unique values
/*
const menu=[
  {
    name:'oats',
    category:'breakfast'
  },
  {
    name:'sabji',
    category:'lunch'
  },
  {
    name:'rice',
    category:'dinner'
  },
  {
    name:'eggs',
    category:'breakfast'
  },
  {
    name:'sandwhich',
    category:'breakfast'
  }
];

const categories=['all',...new Set(menu.map((item)=>item.category))];  //convert it into set to grab unique values
console.log(categories);                                         //and then ransform into an array
const result=document.querySelector('.result');
result.innerHTML=categories.map((category)=>{
  return `<button>${category}</button>`;
}).join('');
*/

//dynamic object keys

//filter and Find
/*
const people=[
  {name:'nidhi',age:20,position:'designer'},
  {name:'radha',age:20,position:'developer'},
  {name:'aditi',age:35,position:'manager'}
];

const youngPeople=people.filter((person)=>{
  // if(person.age<30){
  //   return person;
  // }
  return person.age<30;
});
console.log(youngPeople);

const fruits=['apple','banana','orange'];
const fruit=fruits.find((item)=> item==='apple');   //returns single instance
console.log(fruit);

//if no match we get undefined in find method whereas it returns an empty array in filter
//multiple matches-just returns first match in find method
*/

//reduce
/*
const staff=[
  {name:'nidhi',age:20,position:'designer',salary:200},
  {name:'radha',age:20,position:'developer',salary:100},
  {name:'aditi',age:35,position:'manager',salary:500}
];

const dailyTotal=staff.reduce((total,person)=>{
console.log(total);
  total+=person.salary;

  return total;
},0);
console.log(dailyTotal);
*/


//split Operator
/*
const udemy='udemy';
const letters=[...udemy];
console.log(letters);

const girls=['nidhi','radha'];
const boys=['niraj','vidit'];
const bestfriend='aditi';
const friends=[...girls,bestfriend,...boys];
console.log(friends);

//for just copying without reference use split Operator
const newfriends=[...friends];
newfriends[2]='shreya';
console.log(friends);
console.log(newfriends);

const person={name:'bob',job:'developer'};
const newPerson={...person,city:'North carolina',name:'john'};
console.log(person);
console.log(newPerson);
*/

//reduce Object
/*
const cart=[
  {
    title:'samasung galaxy j7',
    price:399.59,
    amount:1
  },
  {
    title:'redmi note 5',
    price:499.99,
    amount:2
  },
  {
    title:'redmi note pro 9',
    price:799.99,
    amount:4
  },
  {
    title:'google pixel',
    price:599.999,
    amount:3
  }
];

let {totalItems,cartTotal}=cart.reduce((total,cartItem)=>{
  const {amount,price}=cartItem;
  //count items
  total.totalItems+=amount;
  //count sum
  total.cartTotal+=amount*price;
  return total;
},{
  totalItems:0,
  cartTotal:0,
});

cartTotal=parseFloat(cartTotal.toFixed(2));
console.log(totalItems,cartTotal);
*/

//Array.from
/*
const text=document.querySelectorAll('.text');
console.log(text);      //nodeList
const newText=Array.from(text).find((item)=>item.textContent==='person');
console.log(newText);   //turned into an array

const items=Array.from({ length:120 },(_,index)=>{
  return index;
});

const itemsPerPage=14;
const pages=Math.ceil(items.length/itemsPerPage);
console.log(pages);

const newItems=Array.from({ length:pages },(_,index)=>{
  const start=index*itemsPerPage;
  const tempItems=items.slice(start,start+itemsPerPage);
  return tempItems;
});
console.log(newItems);
*/
