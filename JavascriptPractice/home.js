console.log('hellooo');
//alert('yooo');

//variables
var b='smootie';
console.log(b);

/*var someNumber=45;
console.log(someNumber);*/


/*var age=prompt('What is your age?');
document.getElementById('sometext').innerHTML=age;
*/

//numbers 
/*
var num1=10;
//console.log(5*10);
num1=num1+1;
num1++;
console.log(num1);
*/

//functions
/*function myFunction(){
	document.getElementById('demo').innerHTML="Paragraph changed!";
}
*/

/*
function fun(){
	console.log('this is a function!');
}

fun();

function greeting(yourname){
	var result='Hello'+' '+ yourname;
	console.log(result);
}


var name=prompt('what is your name?');
greeting(name);


function sumNumber(num1,num2) {
	// body...
	console.log(num1+num2);
}

sumNumber(10,10);
*/

//while loop
/*
var num=0;
while(num<100){
	num+=1;
	console.log(num);
}
*/

//for loop
/*
for(let num=0;num<100;num++){
	console.log(num);
}

*/

//datatypes
/*
let yourAge=20;    //number
let yourName='nidhi';    //string
let name={first:'jane',last:'doe'};  //object
let truth=false; //boolean
let groceries=['apple','banana','oranges']; //array
let random; //undefined
let nothing=null; //null value
*/


//Strings
/*
let fruit='banana';
let moreFruits='banana\napple';   //new line
console.log(moreFruits);
console.log(fruit.length);
console.log(fruit.indexOf('nan'));
console.log(fruit.slice(2,5));
console.log(fruit.replace('ban','123'));
console.log(fruit.toUpperCase(fruit));
console.log(fruit.toLowerCase(fruit));
console.log(fruit.charAt(2));
console.log(fruit[2]);
console.log(fruit.split(''));  //spli by character
*/

//arrays
/*
let fruits=['banana','apple','orange','pineapple'];
// fruits= new array('banana','apple','orange','pineapple');
//alert(fruits[1]);
console.log('to string',fruits.toString());
console.log(fruits.join('_'));
console.log(fruits.pop(),fruits);
console.log(fruits.push('pear'),fruits);
fruits.shift(); //removes first element from the array
fruits.unshift('kiwi'); //add first element to the array

let vegetables=['potato','tomato'];
let allgroceries=fruits.concat(vegetables);
console.log(allgroceries);
console.log(allgroceries.reverse());
console.log(allgroceries.sort());

let no=[6,2,1,7,9,4,21,98,34,11];
console.log(no.sort(function(a,b){return a-b})); //ascending order
*/