import "../js/jquery/jquery.min.js";

$(document).ready(function ($) {
  $("#mousearea").mousemove(function (e) {
    let height = e.pageY;
    const width = e.pageX;

    let top = $(window).scrollTop();
    height -= top;
    // console.log(`${height - top} ${width}`);
    const moveY = height / 15;
    const moveX = width / 15;
    $(".bullet-one").css({ transform: `translate(${moveX}px, ${moveY}px)` });
    $(".bullet-two").css({
      transform: `translate(${moveX / 2}px, ${moveY / 2}px)`,
    });
    $(".bullet-three").css({
      transform: `translate(${moveX / 3}px, ${moveY / 3}px)`,
    });

    //event-carousel
    


  });



});
