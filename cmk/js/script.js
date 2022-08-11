$(function(){
  // trigger
  $('.trigger').click(function(){
    $(this).toggleClass('active')
    $('.gnb').toggleClass('active')
  })
  $('section, .menu a').click(function(){
    $('.gnb').removeClass('active')
    $('.trigger').removeClass('active')
  })

  //Chang Css with scroll
  $(Window).scroll(function(){
    if($(Window).scrollTop() > 50) {
      $('header, .gototop').addClass('active')
    }
    else {
      $('header, .gototop').removeClass('active')
    }
  })
})

