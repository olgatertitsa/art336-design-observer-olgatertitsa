$("#main-nav").responsiveNav({
  breakPoint: 680, // default is 640
  navControlText: "Navigation" // default is "Menu"
});

$('.list > li a').click(function() {
    $(this).parent().find('ul').toggle();
});