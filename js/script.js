$(document).ready(function() {

    var autoReply = [
        '<p>io bene, tu?</p>',
        '<p>grazie</p>',
        '<p>ciao</p>',
        '<p>è stato un piacere</p>',
        '<p>come fai a saperlo</p>',
        '<p>a me non funzion</p>',
        '<p>pensavo la stessa cosa</p>',
        '<p>no sei meglio te</p>',
        '<p>prrr</p>',
    ]


    $('#my-Mess').keydown(send);

    function send(){
        if (event.which == 13 || event.keydown == 13 ) {
            var messaggio = $('#my-Mess').val();
            if(messaggio!=""){
                var sendNow = $('.template .message').clone();
                var timeNow = time();
                sendNow.append('<p>' + messaggio + '</p>');
                sendNow.append('<p>' + timeNow + '</p>');
                sendNow.addClass('sent');
                $('.chat .overlay').append(sendNow);
                document.getElementById("my-Mess").value="";
                var scroll = $('.chat .overlay .message:last-child').position();
                $('.chat .overlay').scrollTop(scroll.top);

                setTimeout (function() {
                    receiveNow = $('.template .message').clone();
                    var tuoMessaggio = autoReply[getRandom(autoReply.length, 0)];
                    receiveNow.append('<p>' + tuoMessaggio + '</p>');
                    receiveNow.append('<p>' + timeNow + '</p>');
                    receiveNow.addClass('received');
                    $('.chat .overlay').append(receiveNow);
                    var scroll = $('.chat .overlay .message:last-child').position();
                    $('.chat .overlay').scrollTop(scroll.top);
                },3000)


            }
        }
    }

    var scroll = $('.chat .message:last-child').position();
        $('.chat').scrollTop(scroll.top);
});

function getRandom(min, max) {
  return Math.floor(Math.random()*(max - min))+min;
}

function addZero(i) {
 if (i < 10) {
   i = "0" + i;
 }
 return i;
}

function time() {
    var d = new Date();
    var h = addZero(d.getHours());
    var m = addZero(d.getMinutes());
    var x = h + ':' + m;
    return x;

}
