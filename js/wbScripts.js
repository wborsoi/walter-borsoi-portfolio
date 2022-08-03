$(window).scroll(function() {
    if ($(this).scrollTop() > $("#Bienvenida").height()){  
        $('#WBHeader').addClass("header__minified");
    }
    else{
        $('#WBHeader').removeClass("header__minified");
    }
});

