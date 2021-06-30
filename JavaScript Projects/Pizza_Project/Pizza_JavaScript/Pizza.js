function getReceipt() {
    // This initializes our string so it can get passed from
    // function to function, growing line by line into a full receipt
    var text1 = "<h3>You Ordered:</h3>";
    var runningTotal = 0;
    var sizeTotal = 0;
    var sizeArray = document.getElementsByClassName("size"); //method returns array-like object of all
    //child elements with 'size' class
    // console.log(sizeArray);
    for (var i = 0; i < sizeArray.length; i++) { // find out which pizza size is checked
        if (sizeArray[i].checked) {
            var selectedSize = sizeArray[i].value;
            text1 = text1 + selectedSize + "<br>"; // add pizza size string to "you ordered" string
        }
    }
    console.log(sizeArray);  //debug
    console.log(selectedSize);
    console.log(text1);  //debug
    if (selectedSize === "Personal Pizza") { // figure out pizza cost based on size
        sizeTotal = 6;
    } else if (selectedSize === "Small Pizza") {
        sizeTotal = 8;
    } else if (selectedSize === "Medium Pizza") {
        sizeTotal = 10;
    } else if (selectedSize === "Large Pizza") {
        sizeTotal = 14;
    } else if (selectedSize === "Extra Large Pizza") {
        sizeTotal = 16;
    }
    runningTotal = sizeTotal;  //sub-cost based on pizza size
    // these variables will get passed on to each function
    getTopping(runningTotal, text1);  // call topping cost function
};


function getTopping(runningTotal, text1) {
    var toppingTotal = 0;  //initalize topping count
    var selectedTopping = [];  // initalicxe topping array
    var toppingArray = document.getElementsByClassName("toppings"); // creates an array-like obj of toppings
    console.log(toppingArray);   //debug
    for (var j = 0; j < toppingArray.length; j++) {  // sort through all toppings to see which ones are seleted
        if (toppingArray[j].checked) {
            selectedTopping.push(toppingArray[j].value);  // add selected topping to 
            console.log(selectedTopping);
            text1 = text1 + toppingArray[j].value + "<br>"; //add selected topping to invoice string
        }
    }
    var toppingCount = selectedTopping.length; //topping count = number topping elements in array
    if (toppingCount > 1) {
        toppingTotal = (toppingCount - 1);  //figure out topping cost by counting selected coppings  - 1
        //for discoiunt
    } else {
        toppingTotal = 0;
    }
    runningTotal = (runningTotal + toppingTotal);  // total cost for that pizza
    document.getElementById("showText").innerHTML = text1;  //display pizza size and toppings
    document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>s" + // display cost for pizza
        runningTotal + ".00" + "</strong></h3>";
};


