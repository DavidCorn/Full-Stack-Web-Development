var numberOfFaces = 5;
var theLeftSide = document.getElementById("leftSide");
var theRightSide = document.getElementById("rightSide");

function generateFace() {
    var left = document.getElementById("leftSide");
    for (var i = 0; i < numberOfFaces; i++) {
        var node = document.createElement("img");
        node.setAttribute("src", "smile.png");
        node.style.top = Math.random() * 400 + "px";
        node.style.left = Math.random() * 400 + "px";

        // checking posisiton
        console.log(node.style.top);
        console.log(node.style.left);
        
        left.appendChild(node);
    }
    
    // clone left images
    leftSideImages = left.cloneNode(true);
    leftSideImages.removeChild(leftSideImages.lastChild);
    var right = document.getElementById("rightSide");
    right.appendChild(leftSideImages);
}