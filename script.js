/*jslint browser: true*/
/*global $, jQuery*/
$(function () {
  $.scrollify({
      section : ".panel",
      sectionName : "section-name",
      easing: "easeOutExpo",
      scrollSpeed: 600,
      offset : 0,
      overflowScroll:false,
      setHeights: false,
      scrollbars: false,
      standardScrollElements: "",
      before:function() {},
      after:function() {},
      afterResize:function() {},
      afterRender:function() {}
    });
});
$(document).on('click','.scroll-link', function(event) {
    var anchor = $(this).attr('href');
    $('body, html').animate({
      scrollTop: ($(anchor).offset().top)
    }, 800);
    return false
});