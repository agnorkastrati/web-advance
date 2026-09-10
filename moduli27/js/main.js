//functions

//function showMessage(){
   // alert("This message is isnside the showMessage() function")
//}
//
//showMessage();

//funksioni me parametra
function sum(number1,number2){
    return number1 + number2;
}

console.log(sum(25,5));

function pjestimi(numri1,numri2){
    return numri1/numri2;
}

console.log(pjestimi(30,10));

function toCelsius(f){
    return (5/9)  * (f-32);
}


console.log("54 fahrenheit is equal to " + toCelsius(54) + " celsius");

function toSeconds(minutes){
    return minutes * 60;
}

console.log(toSeconds(2))
console.log(toSeconds(23))

// Objektet - objects

var car = {
    name:"Mercedes",
    color:"red",
    year:2020,
    kilometers:0,
    startEngine:function(){
        alert("VROOOOOOOOMMM!!!")
    },
    get getKilometers(){
        return this.kilometers = km
    },
    set setKilometers(km){
        return this.kilometers = km
    }
};
console.log(car.getKilometers);
car.setKilometers = 100;
console.log(car.getKilometers);

var school = {
    name:"Digital School",
    subjects:"Programming",
    students:1500,
    year:2016
};

var computer = new Object();

computer.name = "Lenovo";
computer.CPU = "Intel core 17";
computer.RAM = "16GB";
computer.GPU = "Ge force GT730 2GB Dual HP";

computer.type = function(){
    return this.name + " , " + this.CPU + " , " + this.RAM + " , " + this.GPU;
}

alert(computer.GPU);

alert(computer.type());

delete computer.GPU;

alert(computer.GPU);