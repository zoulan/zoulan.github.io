$(function() {
    $(window).scroll(function() {
        if ($(window).scrollTop() > 400)
            $('div.go-top').show();
        else
            $('div.go-top').hide();
    });
    $('div.go-top').click(function() {
        $('html, body').animate({scrollTop: 0}, 700);
    });
});

$(document).ready(function($){
  $('#li1').click(function(){
    $('html,body').animate({scrollTop:$('#div2').offset().top}, 700);
  });
  $('#li2').click(function(){
    $('html,body').animate({scrollTop:$('#div3').offset().top}, 700);
  });
  $('#li3').click(function(){
    $('html,body').animate({scrollTop:$('#div4').offset().top}, 700);
  });
});

$(function(){
      $('.menu , .linee').on('click', function() {
        $('.menu').toggleClass('over')
        $('.linea1').toggleClass('overL1')
        $('.linea2').toggleClass('overL2')
        $('.linea3').toggleClass('overL3')
        $('.voci-menu').toggleClass('overvoci')
      });
    })