$(function() {
  var pix_box_left = $('#pix_box_left'),
      pix_box_right = $('#pix_box_right'),
      pic = $('#main_pic'),
      pix_box,
      pix;

  //pictures for main picture box
  pix = [
    '/imgs/me2013.jpg',
    '/imgs/me(3)2013.jpg',
    '/imgs/me2012.jpg'
  ];

  //pix box class
  pix_box = {
    pix_count:0,
    pix_length:pix.length-1,
    dsOff:function(id) {
      $(id).css('box-shadow','1px 1px 1px black');
    },
    dsOn:function(id) {
      $(id).css('box-shadow','1px 2px 10px black');
    },
    nextPic:function() {
      if(pix_box.pix_count !== pix_box.pix_length) {
        pix_box.pix_count++;
        pic.attr('src', pix[pix_box.pix_count]);
      } else {
        pix_box.pix_count = 0;
        pic.attr('src', pix[pix_box.pix_count]);
      }
    },
    prevPic:function() {
      if(pix_box.pix_count != 0) {
        pix_box.pix_count--;
        pic.attr('src', pix[pix_box.pix_count]);
      } else {
        pix_box.pix_count = pix_box.pix_length;
        pic.attr('src', pix[pix_box.pix_count]);
      }
    }
  };

  //pix box events
  pix_box_left.on('mousedown', function(){
    pix_box.dsOff(this);
    pix_box.prevPic();
  });
  pix_box_left.on('mouseout', function(){
    pix_box.dsOn(pix_box_left);
  });
  pix_box_left.on('mouseup', function(){
    pix_box.dsOn(pix_box_left);
  });
  pix_box_right.on('mousedown', function(){
    pix_box.dsOff(this);
    pix_box.nextPic();
  });
  pix_box_right.on('mouseout', function(){
    pix_box.dsOn(pix_box_right);
  });
  pix_box_right.on('mouseup', function(){
    pix_box.dsOn(pix_box_right);
  });

  //about nav buttons
  $('.about_nav_menu li').on('mousedown', function() {
    $(this).css('box-shadow', '0px 0px');
  });
  $('.about_nav_menu li').on('mouseup', function() {
    $(this).css('box-shadow', '2px 3px 5px black');
  });
  $('.about_nav_menu li').on('mouseout', function() {
    $(this).css('box-shadow', '2px 3px 5px black');
  });
});
