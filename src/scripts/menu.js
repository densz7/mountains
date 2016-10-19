(function() {
  if ($(document).scrollTop() == 0) $('.menu__item:first').addClass('menu__item--active');
  
  $('.menu__item').on('click', function(e){
    e.preventDefault();
    if ($($(this).attr('href')))
      {
        $('html,body').animate({
          scrollTop: $($(this).attr('href')).offset().top + 1
        }, 500);
      } else {
        return false;
      }  
  });

  $(document).on('scroll', function() {
    var scrollTop = $(document).scrollTop();
    $('.menu__item').each(function() {
      var section = $($(this).attr('href'));

      if (scrollTop >= $(section).offset().top && scrollTop < ($(section).offset().top + $(section).outerHeight())) {
        $(this).addClass('menu__item--active');
      } else {
        $(this).removeClass('menu__item--active');
      } 
    });
  });
})();