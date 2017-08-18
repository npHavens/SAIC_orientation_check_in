$(document).ready(function() {
  var $idField = $('input');

  $idField.focus();

  $('body').on('click', function() {
    $idField.css('opacity', '1').focus();
    $('.instructions, .bottom-arrow').hide();
    $('.top-arrow').css('opacity', 0);
  })

  $idField.on('keyup', function() {

    var idNum = $(this).val();

    if (idNum.length === 14) {
      $idField.val(idNum.substring(5, 12));
    }

    if (idNum.length === 7 || (idNum.length === 8 && idNum[0] === 'E')) {
      $('.top-arrow, .bottom-arrow, .id-pic, input, .form-top-text, .instructions').hide();
      $('.spinner').show();
      window.location.href = 'https://forms2.saic.edu/53?EMPLID=' + idNum;
    }
  });



});
