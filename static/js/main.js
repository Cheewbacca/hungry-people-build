$(document).ready(function(){

    // Anchors

    $('a[href*="#"]').not('[href="#"]').on("click", function(){
        $(this).preventDefault();
    });

    // Labels text

    $('label').hide();

    // Form actions

    $('.list li:not(:first)').on('click', function(){
        $(this).parent().children().first().text( $(this).text().trim() );
        $(this).parent().siblings('input').attr("value", $(this).text().trim() );
    });

    let openedList = false;

    $('.list').on("click", function(){
   
        if(openedList){
            $(this).children().slice(1).hide();
            $(this).children().first().addClass('closed_list_item').removeClass('opened_list_item');
            $(this).parent().css('z-index', '0');
        }else{
            $(this).children().show();
            $(this).children().first().removeClass('closed_list_item').addClass('opened_list_item');
            $(this).parent().css('z-index', '99999');
        }
        openedList = !openedList;
    });

    // SPECIALTIES Slider 

    $('.slider').slick({
        dots: true,
        arrows: false, 
        slidesToShow: 1
    });

    // Menu items swap

    var menu = $('.menu-render');
    var menu_item = $('.text-block ul li');

    menu.hide();

    $('.menu-render[data-pick="' + $('.text-block ul li.active').text().trim().toLowerCase() + '"]').show();

    menu_item.on("click", function(e){
        e.preventDefault();
        menu.hide();
        menu_item.removeClass("active");
        $(this).addClass("active");
        $('.menu-render[data-pick="' + $(this).text().trim().toLowerCase() + '"]').show();

        if ($(window).width() < 768){
            showMore();
        }

    });

    function showMore() {
        if ( $('.menu-render[data-pick="' + $('.text-block ul li.active').text().trim().toLowerCase() + '"]').children().length  > 3 ){
            $('.menu-render[data-pick="' + $('.text-block ul li.active').text().trim().toLowerCase() + '"]').children().hide().slice(0,3).show();
            $('#show_more_menu').css('display', 'table');
        }
        
        let clicked = false;
        
        $('#show_more_menu').on('click', function(e){
            e.preventDefault();
            if(!clicked){
                $('.menu-render[data-pick="' + $('.text-block ul li.active').text().trim().toLowerCase() + '"]').children().fadeIn();
                $(this).text('Hide');
            }else {
                $('.menu-render[data-pick="' + $('.text-block ul li.active').text().trim().toLowerCase() + '"]').children().fadeOut().slice(0,3).fadeIn();
                $(this).text('Show more');
            }
            clicked = !clicked;
        });
    }

    if ($(window).width() < 768){
        showMore();
    }

    // Galery slider

    var sliderGalery = $('.galery-wrapper');

    sliderGalery.slick({
        dots: false,
        arrows: true, 
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            }
        ],
    });

    let slideClicked;

    $('.galery-wrapper .slick-slide').on('click', function (e){
        slideClicked = $(e.currentTarget).attr("data-slick-index");
    });

});
