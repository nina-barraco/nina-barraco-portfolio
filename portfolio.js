// function clickNav(x) {
//     x.classList.toggle("change");
//     var display = document.getElementById("topnav-links-js");
//     display.classList.toggle("display-links");
//   }

function clickNav(x) {
  x.classList.toggle("change");
  var display = document.getElementById("topnav-links-js");
  display.classList.toggle("display-links");
}

function fadeIn(x) {
  var fadeElements = Array.from(document.getElementsByClassName("fade-js"));
  var windowHeight = window.innerHeight;
  function checkPosition() {
    for (var i = 0; i < fadeElements.length; i++) {
      var positionFromTop = fadeElements[i].getBoundingClientRect().top;
      if (positionFromTop - windowHeight <= 0) {
        fadeElements[i].classList.add("fade-animation");
      }
    }
  };
  checkPosition();
}