//map method

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
