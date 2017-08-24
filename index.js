$(document).ready(function() {

  var $idField = $('input');

  $idField.focus();

  $('body').on('click', function() {
    $idField.css('opacity', '1').focus();
    $('.instructions, .bottom-arrow').hide();
    $('.top-arrow').css('opacity', 0);
  })

  $processBarCode($idField, function(id) {
    $('.top-arrow, .bottom-arrow, .id-pic, input, .form-top-text, .instructions').hide();
    $('.spinner').show();
    window.location.href = 'https://forms2.saic.edu/53?EMPLID=' + id;
  })
});

var $processBarCode = function($field, callback) {
  var process = setTimeout(function() {
    $processBarCode($field, callback);
  }, 1000);

  var idNum = $field.val();

  if (idNum.length === 14) {
    callback(idNum.slice(5, 12));
    clearTimeout(process);
  }

  if (idNum.length === 7 || (idNum.length === 8 && idNum[0] === 'E')) {
    callback(idNum);
    clearTimeout(process);
  }
  //;
}
