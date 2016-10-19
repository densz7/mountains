(function() {
  if ($(document).scrollTop() == 0) $('.dropdown-menu__item:first').addClass('dropdown-menu__item--active');


  $('.dropdown-menu__item').on('click', function(e){
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
    $('.dropdown-menu__item').each(function() {
      var section = $($(this).attr('href'));
      if (scrollTop >= $(section).offset().top && scrollTop < ($(section).offset().top + $(section).outerHeight())) {
        $(this).addClass('dropdown-menu__item--active');
      } else {
        $(this).removeClass('dropdown-menu__item--active');
      } 
    });
  });
})();