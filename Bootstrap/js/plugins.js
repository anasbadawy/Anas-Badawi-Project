$(document).ready(

  function(){
    $("html").niceScroll();
 
$('.carousel').carousel({
  interval: 5000
  });


//show color option div when click on the  gear
$(".gear-check").click(function() {

  $(".color-option").fadeToggle();
});
//change theme color on click

var colorLi = $(".color-option ul li"),
    scrollButton = $("#scroll-up");

colorLi
  .eq(0).css("backgroundColor","#E41B17").end()
  .eq(1).css("backgroundColor","#E426D5").end()
  .eq(2).css("backgroundColor","#009AFF").end()
  .eq(3).css("backgroundColor","#FFD500");

colorLi.click(function() {
   $("link[href*='theme']").attr("href",$(this).attr("data-value"));

 });
$(window).scroll(function() {

    $(this).scrollTop() >= 700 ? scrollButton.show() : scrollButton.hide();

  });

  // click on btn to scroll up
   scrollButton.click(function() {
     $("html,body").animate({ scrollTop : 0}, 600);
   });
});




// loading screen
$(window).on('load',function(){
      $(".loading-overlay .sk-folding-cube").fadeOut(2000,
       function()   {
         $("body").css("overflow","auto");

       $(this).parent().fadeOut(2000);

        });
     });
