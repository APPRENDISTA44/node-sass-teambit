$(document).ready(function () {

  $(document).on('click','li.burger',
  function () {
    $(this).hide();
    $('li.close').show();
    $('ul.menu_responsive').addClass('active')
  });

  $(document).on('click','li.close',
  function () {
    $(this).hide();
    $('li.burger').show();
    $('ul.menu_responsive').removeClass('active')
  });

});
