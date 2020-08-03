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
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    ];

    avatar();

    contactName();

    var lastAccess = addZero(getRandom(0, 11)) + ":" + addZero(getRandom(0, 59))
    $('.top-right .details .last-access p').text("Ultimo accesso oggi alle " + lastAccess);

    $('.list .contact').click(function(){
        removeActive();
        $(this).addClass('focus');
        selectChat($(this));

        avatar();

        contactName();

        // var lastAccess = addZero(getRandom(0, 11))+":"+addZero(getRandom(0, 59))
        // $('.top-right .details .last-access p').text("Ultimo accesso oggi alle " + lastAccess);

        var lastMessage = $('.active .message:last-child .text-mess span').text().substring(0,24);
        $('.focus .preview span').text(lastMessage);
    });

    $('#search').keyup(function(){
        var testo = $('#search').val().toLowerCase();
        $('.list .contact').filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(testo) > -1);
        });
    });

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
                $('.chat .active').append(sendNow);

                $('#my-Mess').val("");

                var scroll = $('.chat .overlay .message:last-child').position();
                $('.chat .overlay').scrollTop(scroll);

                var lastMessage = $('.active .message:last-child .text-mess span').text().substring(0,24);
                $('.focus .preview span').text(lastMessage);
                if (lastMessage.length >23){
                    $('.focus .preview span').append("...");
                }
                $('.focus .time span').text(timeNow);

                cmBack();
                cmBackChat();

                setTimeout (function() {
                    receiveNow = $('.template .message').clone();
                    var tuoMessaggio = autoReply[getRandom(autoReply.length, 0)];
                    receiveNow.find('.text-mess span').append(tuoMessaggio);
                    receiveNow.find('.time-mess span').append(timeNow);
                    receiveNow.addClass('received');
                    $('.chat .active').append(receiveNow);

                    var scroll = $('.chat .overlay .message:last-child').position();
                    $('.chat .overlay').scrollTop(scroll);

                    var lastMessage = $('.active .message:last-child .text-mess span').text().substring(0,24);
                    $('.focus .preview span').text(lastMessage);
                    if (lastMessage.length >23){
                        $('.focus .preview span').append("...");
                    }

                    $('.focus .time span').text(timeNow);

                    cmBack();
                    cmBackChat();

                    $('.top-right .box .details .last-access p').text("Ultimo accesso alle ");
                    $('.top-right .box .details .last-access p').append(timeNow);

                },4000);


                setTimeout(function() {
                    $('.top-right .box .details .last-access p').text("Sta scrivendo...");
                }, 2000);
            }
        }
    }

    var prev = ($('.preview span')).text();
    if (prev.length >29){
        $('.preview span').append("...");
    }
});

function getRandom(min, max) {
  return Math.floor(Math.random()*(max - min))+min;
}

function time() {
    var d = new Date();
    var h = addZero(d.getHours());
    var m = addZero(d.getMinutes());
    var x = h + ':' + m;
    return x;

}

function addZero(i) {
 if (i < 10) {
   i = "0" + i;
 }
 return i;
}

function cmBack(){
    var element= $('.focus');
    $('.list').prepend(element);
    $('.list').remove('.focus:last-child');
}

function cmBackChat(){
    var element= $('.active');
    $('.chat').prepend(element);
    $('.chat').remove('.active:last-child');
}

function removeActive(){
    $('.list .contact').removeClass('focus');
    $('.chat .overlay').removeClass('active');
}

function selectChat(x){
    $('.chat .overlay').eq(x.index()).addClass('active');
}

function avatar(){
    var immagine = $('.list .focus .avatar img');
    var attr = immagine.attr('src');
    $('.top-right .avatar img').attr('src', attr);
}

function contactName(){
    var contactName = $('.list .focus .details .name span').text();
    $('.top-right .details .name').text(contactName);
}