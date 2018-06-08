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

  $('a.image-link').on("click", function (e) {
    e.preventDefault();
    var offset = 50;
    var section = $(this).attr("href");
    $("html, body").animate({
        scrollTop: $(section).offset().top
    }, 1000);
  })

  // $('.page-title-container').on("mouseover", function(e) {
  //   console.log("in")
  //   $('.page-title-container').animate({
  //     backgroundColor: 'red',
  //   }, 300);
  // });
  // $('.page-title-container').on("mouseleave", function(e) {
  //   console.log("out")
  //   $('.page-title-container').animate({
  //     backgroundColor: 'none',
  //   }, 300);
  // })
})
