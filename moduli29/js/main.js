//ARRAYS
//Data types ['','','']

var programmingLanguages = ['Javascript','PHP','Python']

console.log(programmingLanguages)

console.log(programmingLanguages[0])
console.log(programmingLanguages[1])
console.log(programmingLanguages[2])

programmingLanguages.push('Java');
console.log(programmingLanguages)

programmingLanguages.pop();
console.log(programmingLanguages)

programmingLanguages.unshift('C#');
console.log(programmingLanguages)

programmingLanguages.shift();
console.log(programmingLanguages)

programmingLanguages.splice(0,2,'Ruby');
console.log(programmingLanguages)

console.log(Math.random()*5);
console.log(Math.floor(Math.random()*5));

var places = ["London","Paris","New york","Berlin"]

//destrukturimi

var [firstplace,secondPlace,thirdPlace] = places;
console.log(thirdPlace);

var numbers = [1,2,3,4,5,6,7,8,9,10]

var[firstNumber,secondNumber, ...otherNUmbers] = numbers;

console.log(firstNumber)
console.log(secondNumber)
console.log(otherNUmbers.toString())

//ARRAY

var friends = ['Diar','Matin','Endri','Norik','Gert']

console.log(friends);

console.log(friends[1])

friends.push('60');
console.log(friends)

friends.shift();
console.log(friends)

friends.splice('1,0,25');
console.log(friends)