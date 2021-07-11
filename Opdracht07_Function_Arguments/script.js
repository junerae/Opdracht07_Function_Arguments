// No Arguments

const paintedWall = function () {
    console.log("The wall has been painted red");
}

paintedWall();


// Single argument

const paintedWall2 = function (color) {
    console.log("The wall has been painted " + color);
}

paintedWall2("pink");
paintedWall2("blue");
paintedWall2();


// Multiple Arguments

const paintedWall3 = function (side, color) {
    console.log("The " + side + " wall has been painted " + color);
}

paintedWall3("east", "yellow");
paintedWall3("north", "purple");



