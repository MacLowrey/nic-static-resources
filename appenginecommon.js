$.getScript("https://cdnjs.cloudflare.com/ajax/libs/jquery.mask/1.14.15/jquery.mask.min.js", function(){
	maskStuff()
});

$(document).ajaxStop(function(){
	maskStuff()
})

function maskStuff(){
  $('.phonenumber div input').mask('000-000-0000')
  $('.phonenumberext div input').mask('000-000-0000AAAAA')
  $('.taxcreditphone').mask('000-000-0000')
  $('.date div input').mask('Z0/X0/0000', {
    translation: {
      'Z': {pattern: /[0-1]/, optional: false},
      'X': {pattern: /[0-3]/, optional: false}
    }
  });
  $('.socialsecurity div input').mask('000-00-0000');
  $('.deanumber div input').mask('SS0000000');
  $('.employeridentification div input').mask('000000000');
  $('.npi div input').mask('0000000000');
}
