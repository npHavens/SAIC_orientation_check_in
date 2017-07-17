$(document).ready(function() {
 $(document).ready(function() {
  var hasSignedAgreement = $('#tfa_2')[0].value === 'true';

  var meetsRequirements = $('#tfa_4')[0].value === 'Yes Meets Requirements';

  var group;

  if (!hasSignedAgreement) {
    group = 3;
  } else if (meetsRequirements) {
    group = 1;
  } else {
    group = 2;
  }

  console.log('Group', group)
});


//Group 1
  //has signed agreement and meets requirements

//Group 2
  //has signed agreement and does not meet requirements

//Group 3
  //has not signed agreement