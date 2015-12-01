'use-strict'

'use-strict'

var gw = new Groundwork({
    'api_url': 'https://api.thegroundwork.com',
    'oauth_client_id': 'pub-un-test.refugeeemojis-test-int-l7z1l8mCLg1kZKp7YNuec4qt8j4VzoP_W8BRfuZxO8VyJhNJGLFiMXSIPeZI5lSD0MKgY_bIcokhUv4grSkKag'
  });

$(document).ready(function(){

  emailListener();
  mobileListener();

})

function emailListener(){
  $('#email').submit(function(event){
    event.preventDefault();
    var email = $('#email').find('input[type="email"]');
    sendData({email: email.val()});
    email.val("");
    email.prop('placeholder', "THANKS!");
    email.prop('readonly', 'readonly');
    $('#email').find('[type="submit"]').prop('disabled',true);
  });
}

function mobileListener(){
  $('#mobile').submit(function(event){
    event.preventDefault();
    var mobile = $('#mobile').find('[type="text"]');
    sendData({tags:{mobile: mobile.val()}});
    mobile.val("");
    mobile.prop('placeholder', "THANKS!");
    mobile.prop('readonly', 'readonly');
    $('#mobile').find('[type="submit"]').prop('disabled', true);
  });
}
function sendData(data){
  data.tags = (data.tags || {});
  data.tags.send_email = 0;
  data.source = 'refugeeemojis';
  gw.supporters.create(data)
  .then(function(res){
    console.log(res);
  })
  .catch(function(res){
    console.log(res);
  });
};
