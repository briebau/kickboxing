$(function() {
    var pull        = $('#pull');
        menu        = $('nav ul');
        menuHeight  = menu.height();
 
    $(pull).on('click', function(e) {
        e.preventDefault();
        menu.slideToggle();
    });
});
$(window).resize(function(){
    var w = $(window).width();
    if(w > 320 && menu.is(':hidden')) {
        menu.removeAttr('style');
    }
});

function hgsubmit() 
{ 
if (/\S+/.test(document.hgmailer.name.value) == false) alert ("Please provide your name."); 
else if (/^\S+@[a-z0-9_.-]+\.[a-z]{2,6}$/i.test(document.hgmailer.email.value) == false) alert ("A valid email address is required."); 
 else if (/\S+/.test(document.hgmailer.comment.value) == false) alert ("Your email content is needed."); 
  else { 
       document.hgmailer.submit(); 
       alert ('Thank you!\nYour email is sent.'); 
       } 
} 
