$(window).ready(function (event) {

    $('body').addClass('loaded');

});

$(window).ready(function () {
    setTimeout(function(){
        timely_appended(['We listen', 'We analysis', 'We design', 'We deploy', 'We keep you satisfied'], $('.second-text'));

    }, 1400);
    $counter = 0;

    $("#about").on('click', function () {

        TweenMax.to(".menu",'0.3',{
            opacity: 0
        });

        TweenMax.to(".menu",'0.1',{
            top: '-100%',
            delay: 0.2
        });

        TweenMax.to(".menu",'0.3',{
            opacity: '0',
            zIndex: '0'
        });



        TweenMax.to(".bar-1, .bar-2, .bar-3", 0.5, {
            backgroundColor: '#003333',
            opacity:   1,
            rotation: 0,
            ease: Power4.easeOut
        });

        TweenMax.to(".menu-btn-text", 0.5, {
            color: '#003333',
            ease: Power4.easeOut
        });

        TweenMax.to(".bar-3", 0.5, {
            top: '43%'
        });

        TweenMax.to(".bar-1", 0.5, {
            top: 0
        });

        $counter = 0;


        $('html, body').animate({
            scrollTop: $(".about-us").offset().top
        }, 1000);



    });

    $("#work").on('click', function () {

        TweenMax.to(".menu",'0.3',{
            opacity: 0
        });

        TweenMax.to(".menu",'0.1',{
            top: '-100%',
            delay: 0.2
        });

        TweenMax.to(".menu",'0.3',{
            opacity: '0',
            zIndex: '0'
        });



        TweenMax.to(".bar-1, .bar-2, .bar-3", 0.5, {
            backgroundColor: '#003333',
            opacity:   1,
            rotation: 0,
            ease: Power4.easeOut
        });

        TweenMax.to(".menu-btn-text", 0.5, {
            color: '#003333',
            ease: Power4.easeOut
        });

        TweenMax.to(".bar-3", 0.5, {
            top: '43%'
        });

        TweenMax.to(".bar-1", 0.5, {
            top: 0
        });

        $counter = 0;


        $('html, body').animate({
            scrollTop: $(".our-works").offset().top
        }, 1000);




    });

    $("#contact").on('click', function () {

        TweenMax.to(".menu",'0.3',{
            opacity: 0
        });

        TweenMax.to(".menu",'0.1',{
            top: '-100%',
            delay: 0.2
        });

        TweenMax.to(".menu",'0.3',{
            opacity: '0',
            zIndex: '0'
        });



        TweenMax.to(".bar-1, .bar-2, .bar-3", 0.5, {
            backgroundColor: '#003333',
            opacity:   1,
            rotation: 0,
            ease: Power4.easeOut
        });

        TweenMax.to(".menu-btn-text", 0.5, {
            color: '#003333',
            ease: Power4.easeOut
        });

        TweenMax.to(".bar-3", 0.5, {
            top: '43%'
        });

        TweenMax.to(".bar-1", 0.5, {
            top: 0
        });

        $counter = 0;


        $('html, body').animate({
            scrollTop: $(".fifth-section").offset().top
        }, 1000);




    });

    $("#services").on('click', function () {

        TweenMax.to(".menu",'0.3',{
            opacity: 0
        });

        TweenMax.to(".menu",'0.1',{
            top: '-100%',
            delay: 0.2
        });

        TweenMax.to(".menu",'0.3',{
            opacity: '0',
            zIndex: '0'
        });



        TweenMax.to(".bar-1, .bar-2, .bar-3", 0.5, {
            backgroundColor: '#003333',
            opacity:   1,
            rotation: 0,
            ease: Power4.easeOut
        });

        TweenMax.to(".menu-btn-text", 0.5, {
            color: '#003333',
            ease: Power4.easeOut
        });

        TweenMax.to(".bar-3", 0.5, {
            top: '43%'
        });

        TweenMax.to(".bar-1", 0.5, {
            top: 0
        });

        $counter = 0;


        $('html, body').animate({
            scrollTop: $(".services").offset().top
        }, 1000);




    });

    /**
     * ****************************************************
     *  Menu Section Tweening
     * ****************************************************
     * */

    $('.menu-btn').on('click', function () {
        if($counter == 0) {

            TweenMax.to(".menu",'0.5',{
                top: '0'
            });

                TweenMax.to(".menu",'0.5',{
                    opacity: '0.9',
                    zIndex: '1004',
                    delay: 0.4
            });

            TweenMax.to(".bar-1, .bar-2, .bar-3", 0.5, {
                top: '20%',
                backgroundColor: 'white',
                ease: Power4.easeOut
            });

            TweenMax.to(".menu-btn-text", 0.5, {

                color: 'white',
                ease: Power4.easeOut
            });

            TweenMax.to(".bar-2", 0.5, {
                opacity: 0
            });

            TweenMax.to(".bar-1, .bar-2", 0.5, {
                rotation: 45,
                delay: 0.5
            });

            TweenMax.to(".bar-3", 0.5, {
                rotation: -45,
                delay: 0.5
            });

            TweenMax.staggerFrom('.menu-item',0.7,{
                opacity:0,
                y: -200,
                delay: 0.7
            }, 0.1);

            TweenMax.staggerFrom('.vertical-divider',0.7,{
                height: 0,
                delay: 0.7
            });

            TweenMax.staggerFrom('.contact-item',0.7,{
                opacity:0,
                left: -200,
                delay: 0.7
            }, 0.1);

            $counter = $counter + 1;
        }else {

            TweenMax.to(".menu",'0.3',{
                opacity: 0
                });

            TweenMax.to(".menu",'0.1',{
                top: '-100%',
                delay: 0.2
            });

            TweenMax.to(".menu",'0.3',{
                opacity: '0',
                zIndex: '0'
            });



            TweenMax.to(".bar-1, .bar-2, .bar-3", 0.5, {
                backgroundColor: '#003333',
                opacity:   1,
                rotation: 0,
                ease: Power4.easeOut
            });

            TweenMax.to(".menu-btn-text", 0.5, {
                color: '#003333',
                ease: Power4.easeOut
            });

            TweenMax.to(".bar-3", 0.5, {
                top: '43%'
            });

            TweenMax.to(".bar-1", 0.5, {
                top: 0
            });

            $counter = 0;
        }
    })



    /**
     * ****************************************************
     *  First Section Tweening
     * ****************************************************
     * */

    TweenMax.from(".first-section-left-side",3,{
        width:  "100%",

    });


        TweenMax.from(".major-text-left",4.7,{
            left:   "0%",
            width:  "100%",
            delay: 0.2
        });
    TweenMax.from(".major-text",4.5,{
        left:   "0%",
        delay: 0.2

    });

    TweenMax.from(".major-text-left-smaller",4.9,{
        left:   "0%",
        width:  "100%",
        delay: 0.2
    });
    TweenMax.from(".major-text-smaller",4.9,{
        left:   "0%",
        delay: 0.2
    });


})

/**
 * ****************************************************
 *  Scroll
 * ****************************************************
 * */

trigger = 0;
second_trigger = 0;
third_trigger = 0;
fourth_trigger = 0;

 $(document).scroll(function (event) {


        if(document.body.scrollTop >= 1) {
            TweenMax.to(".menu-btn-text", 0.5, {
                color: '#003333',
                ease: Power4.easeOut
            });


            TweenMax.to(".bar-1, .bar-2, .bar-3", 0.5, {
                backgroundColor: '#003333',
                opacity:   1,
                rotation: 0,
                ease: Power4.easeOut
            });

            second_trigger = second_trigger + 1;

            if (second_trigger == 1) {

                $('html, body').animate({
                    scrollTop: $(".fourth-section").offset().top
                }, 1000);
//
            }
        }


            if (document.body.scrollTop > $(".services").offset().top) {

                TweenMax.to(".menu-btn-text", 0.5, {
                    color: '#ffffff',
                    ease: Power4.easeOut
                });


                TweenMax.to(".bar-1, .bar-2, .bar-3", 0.5, {
                    backgroundColor: '#ffffff',
                    opacity:   1,
                    rotation: 0,
                    ease: Power4.easeOut
                });

                third_trigger = third_trigger + 1;
                if(third_trigger == 1) {

                    TweenMax.to(".menu-btn-text", 0.5, {
                        color: '#ffffff',
                        ease: Power4.easeOut
                    });


                    TweenMax.to(".bar-1, .bar-2, .bar-3", 0.5, {
                        backgroundColor: '#ffffff',
                        opacity:   1,
                        rotation: 0,
                        ease: Power4.easeOut
                    });

                    $('html, body').animate({
                        scrollTop: $(".about-us").offset().top
                    }, 1000);
                }

             }



    // if (document.body.scrollTop >= 3000){
    //
    //     fourth_trigger = fourth_trigger + 1;
    //
    //     if (fourth_trigger == 1){
    //
    //         TweenMax.to(".third-section", 1,{
    //
    //             top: "-12%"
    //
    //         });
    //
    //
    //     }
    // }
//
//
//
// });
//
//


 })
function timely_appended(string,element) {


    $arr = string[0];
    overall_counter = 0;
    $ele = element;
    $ele.html('');
    boo = true;
    i = 0;
    m = 0;
    boo = true;
    timer = 200;

    timeMeter = setInterval(function () {
        if (boo == true) {

            $ele.append($arr[i]);
            i++;

        }


        if (boo == 2) {

            $ele.html($arr.slice(0, i));
            if (i == 0) {

                boo = true;
                overall_counter++;
                if (overall_counter == string.length) {
                    overall_counter = 0;
                }
                $arr = string[overall_counter];
            }
            i--;
        }
        if (i == $arr.length) {


            boo = false;

        }
        if (!boo) {
            if (m == 20) {
                m = 0;
                boo = 2;
            } else m++;
        }


    }, 80);
}

