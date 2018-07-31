function main() {

    var num1 = 34;
    var num2 = 345;

    alert("The product of the numbers is: " + product(num1, num2));
    alert("The quotient of the numbers is : " + quotient(num1, num2));

}
function product(number1, number2){
    var multiply = number1 * number2;
    return multiply;
}

function quotient(number1, number2){
    var divide = number1/number2;
    return divide;
}
main();