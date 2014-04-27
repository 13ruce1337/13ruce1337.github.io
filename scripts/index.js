$(function() {
  var scrollUp = $('.scroll_up'),
      scrollDown = $('.scroll_down'),
      itemHeight = $('.posts li').height();

  function autoScroll() {
    if($('.content').scrollTop()+$('.post_info').height() > $('.content').height()) {
      $('.content').animate({scrollTop: 0},3000);
    } else {
      $('.content').animate({scrollTop: itemHeight+'px'},3000);
    }
  }

 //auto scroll for front page. 
 //setInterval(autoScroll, 7000);

  scrollDown.click(function() {
    $('.content').animate({scrollTop: itemHeight+'px'});
  });
  scrollUp.click(function() {
    $('.content').animate({scrollTop: -itemHeight+'px'});
  });
});
