
var images = [
  "2021-Tesla-Model-Y-002-1080.jpg","2021-Tesla-Model-Y-001-1080.jpg"
]

var imageHead = document.getElementById("image-head");
var i = 0;

setInterval(function() {
      imageHead.style.backgroundImage = "url(" + images[i] + ")";
      i = i + 1;
      if (i == images.length) {
      	i =  0;
      }
}, 10);