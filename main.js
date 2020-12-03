$(document).ready(() => {
  var position = $('.main-list').scrollTop();

  // should start at 0

  $('.main-list').scroll(function () {
    var scroll = $('.main-list').scrollTop();
    if (scroll > position) {
      $('.main-wrapper').addClass('scrolled');
     
    } else {
      $('.main-wrapper').removeClass('scrolled')
   
     
    }
    position = scroll;
  });
})