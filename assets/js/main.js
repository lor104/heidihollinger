$( document).ready(function() {

  $('.image-hover').on("mouseover", function(e) {
    var id = "#" + this.id
    $(id).animate({
      opacity: 0.3,
    }, 300);
  });
  $('.image-hover').on("mouseleave", function(e) {
    var id = "#" + this.id
    $(id).animate({
      opacity: 1,
    }, 300);
  })


})
