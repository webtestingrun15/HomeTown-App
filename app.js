$(function() {
  var $menu = $('.header__menu');
  var $nav = $('.open');

  $menu.click(function(event) {
    $nav.toggle();
  });
});
