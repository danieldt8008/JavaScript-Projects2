function myFunction() {
    var x, text;

    // Get the value of the input field with id="age"
    x = document.getElementById("age").value;

    // If x is Not a Number or less than one or greater than 110
    if (isNaN(x) || x < 1 || x > 110) {
        text = "Input not valid";
    } else {
        text = "Input OK";
    }
    document.getElementById("check").innerHTML = text;
}