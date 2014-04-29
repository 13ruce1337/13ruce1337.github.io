$(function() {
  var pix_box_left = $('#pix_box_left'),
      pix_box_right = $('#pix_box_right'),
      pix_box;

  //pix box class
  pix_box = {
    dsToggle:110,
    dsOff:function(id) {
      $(id).css('box-shadow','1px 1px 1px black');
    },
    dsOn:function(id) {
      $(id).css('box-shadow','1px 2px 10px black');
    }
  };

  //pix box events
  pix_box_left.on('mousedown', function(){
    pix_box.dsOff(this);
    setTimeout(function(){pix_box.dsOn(pix_box_left);},pix_box.dsToggle);
  });
  pix_box_right.on('mousedown', function(){
    pix_box.dsOff(this);
    setTimeout(function(){pix_box.dsOn(pix_box_right);},pix_box.dsToggle);
  });
});
