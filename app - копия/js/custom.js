$(document).ready(function () {
/////////////////////////////////// 
  $('.header-navigation__item a').click(function(){
    $(this).parents('.header-navigation-list').find('.header-navigation__item').removeClass('active');
    $(this).parent().addClass('active');
    return false
  });

  $('.categories-item a').click(function(){
    $(this).parents('.categories-nav').find('.categories-item').removeClass('active');
    $(this).parent().addClass('active');
    return false
  });

/////////////////////////////////  
});