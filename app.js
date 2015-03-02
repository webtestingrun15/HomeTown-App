$(function() {
  var $menu = $('#menu');
  var $drawer = $('.nav');

  $menu.click(function(event) {
    $drawer.toggleClass('open');
    event.stopPropagation();
  });
});
