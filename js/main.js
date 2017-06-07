$(document).ready(function() {    
  var headerContainerPosition = $(".header-container").offset().top + $(".header-container").height()
  $(document).scroll(function() {
    if ($(".header-container").is(":visible") && 
        $(document).scrollTop() > headerContainerPosition) {
      $(".header-container").hide()
      $(".header-chaser").show()
    } else if ($(".header-container").is(":hidden") && 
        $(document).scrollTop() <= headerContainerPosition) {
      $(".header-container").show()
      $(".header-chaser").hide()
    }
  })
})