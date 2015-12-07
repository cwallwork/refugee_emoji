'use-strict'

'use-strict'

var gw = new Groundwork({
    'api_url': 'https://api.thegroundwork.com',
    'oauth_client_id': 'pub-un.refugeeemojis-int-ewCjbUUNNWcqXIrMycgWgI3JqsvFrXsiJw9rjrypx7XhT.3M.Cpajk_6lpj.W8N.SuVrKtwygCKVs6OLOab4hA'
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
    sendData({phone: mobile.val()});
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
