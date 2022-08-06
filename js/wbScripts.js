$(window).scroll(function () {
    if ($(this).scrollTop() > ($("#Bienvenida").height() - $("#presentacion").height())) {
        $('#WBHeader').addClass("header__minified");
    }
    else {
        $('#WBHeader').removeClass("header__minified");
    }
});

$(document).click(function (event) {
    if (!$(event.target).is('.navbar-collapse *')) {
        $('.navbar-collapse').collapse('hide');
    }
});

$(window).resize(fixNavbar);
$(document).ready(fixNavbar);


function fixNavbar(params) {
    var $navlinkBtn = $('.nav-link span');

    if ($(document).width() > 576) {
        $navlinkBtn.removeAttr("data-bs-toggle");
        $navlinkBtn.removeAttr("data-bs-target");
    }
    else {
        $navlinkBtn.attr("data-bs-toggle", "collapse");
        $navlinkBtn.attr("data-bs-target", "#navbarNavDropdown");
    }
}