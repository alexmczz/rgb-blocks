function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

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
        this.style.transition="5s"
        this.style.color = "white"
        this.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
        this.style.transition = "10s"
        this.style.filter ="blur(1rem)"
    });

  // Add click event listener to each box
    box.addEventListener("click", function() {
        this.style.borderRadius = "25%";
        this.style.color = "rgb(32, 32, 32)"
        this.style.backgroundColor = "rgb(32, 32, 32)";
        this.style.borderRadius = "30px";
    });
}


var reset = document.getElementsByClassName("reset")[0];
reset.addEventListener("click", function() {
    for (var i = 0; i < boxes.length; i++) {
        boxes[i].style.borderRadius = "0%";
        boxes[i].style.transition = ".5s"
        boxes[i].style.color = "rgb(32, 32, 32)"
        boxes[i].style.backgroundColor = "rgb(32, 32, 32)";
        boxes[i].style.filter = "blur(0rem)"
    }
});
