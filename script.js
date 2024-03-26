
var interactiveElements = document.querySelectorAll(".interactive");

for (var i = 0; i < interactiveElements.length; i++){
  interactiveElements[i].addEventListener("mouseover", function(){
    changeColor(this);
  });

  interactiveElements[i].addEventListener("mouseout", function(){
    removeColor(this);
  });
}

function changeColor(element) {
    var computedStyles = window.getComputedStyle(element);
    var backgroundColor = computedStyles.backgroundColor;

    if (backgroundColor === "rgb(218, 96, 96)"){
      element.style.backgroundColor = "black";
    }
    else{
      element.classList.add("orangeText");
    }
}

function removeColor(element) {
  element.style.backgroundColor = "";
  element.classList.remove("orangeText");
}


function wrappingMenu(){
  var additionalMenu = document.getElementById("wrapping-menu")
  var additionalBackground = document.getElementById("background-overlay");

  additionalMenu.style.display = "block";
  additionalMenu.style.opacity = "1";
  additionalMenu.style.zIndex = "2";
  additionalBackground.style.display = "block"; 
}

function closingMenu() {
  var additionalMenu = document.getElementById("wrapping-menu")
  var additionalBackground = document.getElementById("background-overlay");

  additionalMenu.style.display = "none";
  additionalMenu.style.opacity = "0";
  additionalMenu.style.zIndex = "-999";
  additionalBackground.style.display = "none";
}

