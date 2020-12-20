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
