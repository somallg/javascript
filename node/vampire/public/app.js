$(document).ready(function() {

    console.log("js working");

    var $vampires = $('#all-vampires');
    var $vampire = $('#vampire');
    var $ghouls = $('#all-ghouls');
    var $ghoul = $('#ghoul');
    var $body = $('body');

// buttons ------------------------------------
    $vampires.click(function() {
        console.log("button clicked");
        $a.jax({
            url: 'http://localhost:3000/vampires'
        }). done(function (data) {
            console.log("getting /vampires");
            $body.append("<h3>"+data+"</h3");
        });
    });

});