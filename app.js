$(function() {
  var $menu = $('#menu');
  var $main = $('main');
  var $drawer = $('.nav');

  $menu.click(function(event) {
    $drawer.toggleClass('open');
    event.stopPropagation();

  });
  $main.click(function(event) {
    $drawer.removeClass('open');
    event.stopPropagation();
  });
});
