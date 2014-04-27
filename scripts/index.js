$(function() {
  var scrollUp = $('.scroll_up'),
      scrollDown = $('.scroll_down'),
      itemHeight = $('.posts li').height();

  scrollDown.click(function() {
    $('.content').animate({scrollTop: itemHeight+'px'});
  });
  scrollUp.click(function() {
    $('.content').animate({scrollTop: -itemHeight+'px'});
  });
});
