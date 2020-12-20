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
