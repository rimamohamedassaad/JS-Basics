/*var number1 = prompt("enter the first number");
var number2 = prompt("enter the second number");
alert ("the result of "+ number1 +" * " + number2 +" = " + number1 * number2);*/
var number1;
var number2
function showResult() {
  number1 = document.getElementById('first_number').value;
  number2 = document.getElementById('second_number').value;
  alert("the result of "+ number1 +" * " + number2 +" = " + number1 * number2);
} 