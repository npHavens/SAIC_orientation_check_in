$(document).ready(function() {
  var $idField = $('input');

  $idField.focus();

  $('body').on('click', function() {
    $idField.show().focus();
    $('.instructions').hide();
  })

  $idField.on('keyup', function() {
    //console.log($(this).val());
    var idNum = $(this).val();

    if (idNum.length === 14) {
      $idField.val(idNum.substring(5, 12));
    }

    if (idNum.length === 7) {
      window.location.href = 'https://forms2.saic.edu/53?EMPLID=' + idNum;
      //$('body').append('<div><iframe src="https://forms2.saic.edu/53?EMPLID="' + idNum + '></div>')
    }
  });



});
