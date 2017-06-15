$(document).ready(function() {
    $('#content-slider').lightSlider({
        item:6,
        loop:false,
        slideMove:2,
        easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
        speed:600,
        slideMargin:30,
        pager:false,
        responsive : [
        {
            breakpoint:991,
            slideMargin:20,
            settings: {
                item:3,
                slideMove:1,
                
            }
        },
        {
            breakpoint:480,
            settings: {
                item:2,
                slideMove:1
            }
        }
        ]
    });  
    
    $('#accordionCheckout .panel').click(function() {
        $('#accordionCheckout .panel').removeClass('bgc-gray');
        var element = $(this).find(".in");
        if(element.length == 0){
            $(this).addClass('bgc-gray');
        }
    });
    $(".ctroller-slider .pre").click(function(){
        $(".lSAction .lSPrev").trigger("click");
    });
    $(".ctroller-slider .next").click(function(){
        $(".lSAction .lSNext").trigger("click");
    });
    $(".close-menu").click(function(){
        console.log('1212');
        $("#drawer-toggle-label").trigger("click");
    });
    $('.dropdown-toggle').dropdown();
    new WOW().init();

    $('.section-video-feature .box-item').hide();
    $('.section-video-feature .box-item[box-sort="1"').show();
    $('.section-video-feature .list-sort .sort').click(function() {
        var _data = $(this).attr('data-sort');
        $('.section-video-feature .box-item').fadeOut();
        $('.section-video-feature .box-item[box-sort="'+_data+'"]').fadeIn(3000);
    });


 
});

$(document).ready(function() {
    $('input[type="checkbox"]').click(function() {
        if ($(this).prop("checked") == true) {
            $('.box-change').slideDown(600);
        } else if ($(this).prop("checked") == false) {
            $('.box-change').slideUp(600);
        }
    });
    $(".item-video .item .box-img").mouseenter(function(){
        var data = $(this).attr('data-num');
        var id  = '#my_video_'+data;
        videojs(id).ready(function(){
            var myPlayer = this;
            myPlayer.play();
            myPlayer.muted(false); 
        });
    }).mouseleave(function(){
        var data = $(this).attr('data-num');
        var id  = '#my_video_'+data;
       
        videojs(id).ready(function(){
            var myPlayer = this;
            myPlayer.muted(true); 
            myPlayer.currentTime(0);
        });   
    });
});

$(document).ready(function(){
    $(".menuparent").hover(            
        function() {
            $('.dropdownsub1', this).not('.in .dropdownsub1').stop(true,true).slideDown("600");
            $(this).toggleClass('open');        
        },
        function() {
            $('.dropdownsub1', this).not('.in .dropdownsub1').stop(true,true).slideUp("600");
            $(this).toggleClass('open');       
        }
    );
    $(".sub1parrent").hover(            
        function() {
            $('.menu-child2', this).not('.in .menu-child2').stop(true,true).show("600");
            $(this).toggleClass('open');        
        },
        function() {
            $('.menu-child2', this).not('.in .menu-child2').stop(true,true).hide("600");
            $(this).toggleClass('open');       
        }
    );
});