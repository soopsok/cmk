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
  
   // slick.js : project photo
  $('.Skill_photo').slick({
  dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  autoplay: true,
  autoplaySpeed: 3000,
  cssEase: 'linear'
  })
  
  //Wow Scroll Reveal Animation
  wow = new WOW({
    boxClass: 'wow',
    offset: 250,
    mobile: true
  })
  wow.init()

  
  
  
  
  
})

