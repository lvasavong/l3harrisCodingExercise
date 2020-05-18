class Cat {
    constructor() {

    }

    sound() {
        $("#cat").css("font-size", "xx-large").fadeIn("slow");
        $("#cat1_front").css("opacity", "0.4").fadeIn(2000);
        $("#cat2_front").css("opacity", "0.4").fadeIn(2000);
        $("#cat3_front").css("opacity", "0.4").fadeIn(2000);

        document.getElementById("catAudio").muted = false;
        document.getElementById("catAudio").play();

        $("#cat1_front").animate({opacity: '1.0'}, 3000);
        $("#cat2_front").animate({opacity: '1.0'}, 3000);
        $("#cat3_front").animate({opacity: '1.0'}, 3000);
        $("#cat").fadeOut(4000);
    }

}

class Dog {
    constructor() {

    }

    sound() {
        $("#dog").css("font-size", "xx-large").fadeIn("slow");
        $("#dog1_front").css("opacity", "0.4").fadeIn(2000);
        $("#dog2_front").css("opacity", "0.4").fadeIn(2000);

        document.getElementById("dogAudio").muted = false;
        document.getElementById("dogAudio").play();
        
        $("#dog1_front").animate({opacity: '1.0'}, 3000);
        $("#dog2_front").animate({opacity: '1.0'}, 3000);
        $("#dog").fadeOut(4000);
    }

}

class Bird{
    constructor() {

    }

    sound() {
        $("#bird").css("font-size", "xx-large").fadeIn("slow");
        $("#bird1_front").css("opacity", "0.4").fadeIn(2000);
        $("#bird2_front").css("opacity", "0.4").fadeIn(2000);

        document.getElementById("birdAudio").muted = false;
        document.getElementById("birdAudio").play();

        $("#bird1_front").animate({opacity: '1.0'}, 3000);
        $("#bird2_front").animate({opacity: '1.0'}, 3000);
        $("#bird").fadeOut(4000);
    }

}

mydog = new Dog();
mybird = new Bird();
mycat = new Cat();

$(document).ready(function() {

    $("#play").click(function() {

        $("#play").fadeOut("slow");
        $("#instruction").fadeOut("slow");
        
        (function dogLoop() {
            setTimeout(function() {
                mydog.sound();
                dogLoop();  
            }, 10000);
        }());

        (function birdLoop() {
            setTimeout(function() {
                mybird.sound();
                birdLoop();
            }, 20000);
        }());

        (function catLoop() {
            var rand = Math.round(Math.random() * (10000 - 60000)) + 60000;
            setTimeout(function() {
                mycat.sound();
                catLoop();  
            }, rand);
        }());
    });
});

