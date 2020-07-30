$(document).ready(function() {



    var autoReply = [
        'io bene, tu?',
        'grazie',
        'ciao',
        'è stato un piacere',
        'come fai a saperlo',
        'pensavo la stessa cosa',
        'no sei meglio te',
        'a me non funziona',
        'prrr',
    ];

    var avatar = $('.list .focus .avatar img');
    var src = avatar.attr('src');
    $('.top-right .avatar img').attr('src', src);

    var contactName = $('.list .focus .details .name span').clone();
    $('.top-right .details .name').append(contactName);

    var lastAccess = addZero(getRandom(0, 11)) + ":" + addZero(getRandom(0, 59))
    $('.top-right .details .last-access span').text(lastAccess);

    $('.list .contact').click(function(){
        removeActive();
        $(this).addClass('focus');
        selectChat($(this));

        var avatar= $(this).find('.avatar img');
        var src = avatar.attr('src');
        $('.top-right .avatar img').attr('src', src);

        var contactName = $('.list .focus .details .name span').clone();
        $('.top-right .details .name span').remove();
        $('.top-right .details .name').append(contactName);

        var lastAccess = addZero(getRandom(0, 11))+":"+addZero(getRandom(0, 59))
        $('.top-right .details .last-access span').text(lastAccess);
    });







    //
    // $('.top-right .avatar img').attr('src', src)

    function removeActive(){
        $('.list .contact').removeClass('focus');
        $('.chat .overlay').removeClass('active');
    }

    function selectChat(x){
        $('.chat .overlay').eq(x.index()).addClass('active');


    }



    $('#my-Mess').keydown(send);
    function send(){
        if (event.which == 13 || event.keydown == 13 ) {
            var messaggio = $('#my-Mess').val();
            if(messaggio!=""){
                var sendNow = $('.template .message').clone();
                var timeNow = time();
                sendNow.find('.text-mess span').append(messaggio);
                sendNow.find('.time-mess span').append(timeNow);
                sendNow.addClass('sent');
                // if (chatActive()) {
                    $('.chat .active').append(sendNow);
                // }
                $('#my-Mess').val("");
                var scroll = $('.chat .overlay .message:last-child').position();
                $('.chat .overlay').scrollTop(scroll.top);
                setTimeout (function() {
                    receiveNow = $('.template .message').clone();
                    var tuoMessaggio = autoReply[getRandom(autoReply.length, 0)];
                    receiveNow.find('.text-mess span').append(tuoMessaggio);
                    receiveNow.find('.time-mess span').append(timeNow);
                    receiveNow.addClass('received');
                    $('.chat .active').append(receiveNow);
                    var scroll = $('.chat .overlay .message:last-child').position();
                    $('.chat .overlay').scrollTop(scroll.top);
                },1000)
            }
        }
    }
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
