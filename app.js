$(function() {
  var $menu = $('.header__menu');
  var $nav = $('.nav__list');

  $menu.click(function(event) {
    $nav.toggle();
  });
});
