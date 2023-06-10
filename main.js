// Get all elements with the "box" class
var boxes = document.getElementsByClassName('box');

// Iterate over each box element
for (var i = 0; i < boxes.length; i++) {
    var box = boxes[i];

  // Add mouseover event listener to each box
    box.addEventListener("mouseover", function() {
        var r = Math.random() * 255;
        var g = Math.random() * 255;
        var b = Math.random() * 255;
        this.style.borderRadius = "25%";
        this.style.color = "white"
        this.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
        this.style.borderRadius = "10%";
    });

  // Add click event listener to each box
    box.addEventListener("click", function() {
        this.style.borderRadius = "25%";
        this.style.color = "blue"
        this.style.backgroundColor = "blue";
        this.style.borderRadius = "0%";
    });
}


var reset = document.getElementsByClassName("reset")[0];
reset.addEventListener("click", function() {
    for (var i = 0; i < boxes.length; i++) {
        boxes[i].style.borderRadius = "0%";
        boxes[i].style.color = "blue"
        boxes[i].style.backgroundColor = "blue";
    }
});
