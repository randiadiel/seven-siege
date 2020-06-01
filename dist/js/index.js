import "../js/jquery/jquery.min.js";

$(document).ready(function ($) {
  let scrollPos = window.pageYOffset;
  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (currentScrollPos > scrollPos) {
      document.getElementById("navbar").style.top = "0px";
      document.getElementById("home-navbar").style.display = "none";
    } else {
      document.getElementById("navbar").style.top = "-50px";
      document.getElementById("home-navbar").style.display = "block";
    }
    scrollPos = currentScrollPos;
  };
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
