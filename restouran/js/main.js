$(document).ready(function(){
  $('.sp_slider').slick({
    dots:true,
    arrows:false,
    adaptiveHeight:true,
    centerMode: false,
    autoplay:true,
    // autoplaySpeed:500,
    speed:1000,
    fade:false,
  });
// sp_slider

  $('.menu_slider').slick({
    arrows:false,
    dots:true,
    dotsClass:'menu_dots',
    customPaging : function(slider, i) {
        var title = $(slider.$slides[i].innerHTML).find('div[data-title]').data('title');
        return '<a class="pager__item"> '+title+' </a>';
    },
  });
// menu_slider
  //
  // $(".menu_slider .menu_slider-item").each(function(indx, element){
  // var title = $(element).attr('data-title');
  // $(element).html('<button class="pager__item"> '+title+' </button>');
  // });
});
// document
