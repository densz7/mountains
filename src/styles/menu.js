var menu_selector = ".menu.header__menu"; 

// Скролл по клику
$(document).ready(function(){
  $('.menu__item').click(function(){ 
    if(document.getElementById($(this).attr('href').substr(1)) != null) { //на странице есть элемент с нужным нам id
      $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top }, 500); // анимируем скролл к элементу
      }     
    return false;
  });
  
   // Подцветка активного пункта меню при скролле страницы
   $(document).on("scroll", function(){
     var scroll_top = $(document).scrollTop();
    $(menu_selector + " a").each(function(){
        var hash = $(this).attr("href");
        var target = $(hash);
        if (target.position().top <= scroll_top && target.position().top + target.outerHeight() > scroll_top) {
            $(menu_selector + " a.menu__item--active").removeClass("menu__item--active");
            $(this).addClass("menu__item--active");
        } else {
            $(this).removeClass("menu__item--active");
        }
    });
   });
});