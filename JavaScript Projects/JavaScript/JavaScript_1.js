function weekday_function() {
    var day;
    switch (new Date().getDay()) {
        case 0:
            day = "Sunday";
            break;
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
    }
    document.getElementById("day_line").innerHTML = "Today is " + day + ". Make it a good one!";
}

function theNumFunction() {
    var numx = document.getElementsByClassName("child");
    for (var i = 0; i < numx.length; i++) {
        console.log(i);
        console.log(numx.length);
        numx[i].innerHTML = i + 1;
    }
}
var r = 75;
var c = document.getElementById("Painter")
var ctx = c.getContext("2d");
for (r = 10; r <= 150; r += 5) {
    ctx.beginPath();
    ctx.arc(150, 150, r, 0, 2 * Math.PI);
    ctx.stroke();
}
var grd = ctx.createLinearGradient(0, 0, 30, 40);
grd.addColorStop(0, "red");
grd.addColorStop(1, "white");
ctx.fillStyle = grd;
ctx.fillRect(0, 0, 40, 40);