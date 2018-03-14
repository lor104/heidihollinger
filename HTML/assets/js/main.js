$( document ).ready(function() {

  window.addEventListener("load", function() {
    console.log("loaded")
    var loader = document.getElementById("loader");


    loader.style.opacity = 0;

    setTimeout(function() {loader.style.display = "none";}, 3000)
  })


})
