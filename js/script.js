$(document).ready(function() {

    // var autoReply = [
    //     '<p>io bene, tu?</p>',
    //     '<p>grazie</p>',
    //     '<p>ciao</p>',
    //     '<p>è stato un piacere</p>'
    // ]

// function()
//     $('.template .message').clone();
//     messYou.addClass(sent);
//

    $('#my-Mess').keydown(send);

    function send(){
        if (event.which == 13 || event.keydown == 13) {
            var messaggio = $('#my-Mess').val();
        }
        var sendNow = $('.template .message').clone();
        sendNow.prepend('<p>' + messaggio + '</p>');
        sendNow.addClass('sent');

        $('.chat .overlay').append(sendNow);
    }




});

function geTrandom(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}
