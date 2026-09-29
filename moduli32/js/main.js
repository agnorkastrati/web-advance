var text = "The best school in the world is Digital School!";
var result = text.search("Digital School");
document.getElementById('result1').innerHTML = result;

var text = "The best school in the world is Digital School!";
var result = text.search(/Digital School/);
document.getElementById('result2').innerHTML = result;

var text = "The best school in the world is Digital School!";
var result = text.replace(/Digital School/, "Another school");
document.getElementById('result3').innerHTML = result;

var text = "abcdef";
var regex = new RegExp('abc');
document.getElementById("result4").innerHTML = regex.test(text)