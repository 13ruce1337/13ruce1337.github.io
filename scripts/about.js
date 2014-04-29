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
    dsToggle:110,
    dsOff:function(id) {
      $(id).css('box-shadow','1px 1px 1px black');
    },
    dsOn:function(id) {
      $(id).css('box-shadow','1px 2px 10px black');
    },
    nextPic:function() {
      console.log(pix_box.pix_count);
      if(pix_box.pix_count !== pix_box.pix_length) {
        pix_box.pix_count++;
        pic.attr('src', pix[pix_box.pix_count]);
      } else {
        pix_box.pix_count = 0;
        pic.attr('src', pix[pix_box.pix_count]);
      }
    },
    prevPic:function() {
      console.log(pix_box.pix_count);
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
    setTimeout(function(){pix_box.dsOn(pix_box_left);},pix_box.dsToggle);
  });
  pix_box_right.on('mousedown', function(){
    pix_box.dsOff(this);
    pix_box.nextPic();
    setTimeout(function(){pix_box.dsOn(pix_box_right);},pix_box.dsToggle);
  });
});
