//javascript to navigate on home section on reload
window.onload = function () {
    window.setTimeout(
        function () { window.scrollTo(0, 0); },
        10
    );
};





//javascript to make nav link active on click
function clickSingleA(a) {
    items = document.querySelectorAll('.single.active');
    checkbox = document.getElementById("toggle-1");

    if (items.length) {
        items[0].className = 'single';
        checkbox.checked = false;
    }

    a.className = 'single active';

}


// js to Highlight active section in navbar
$(document).ready(function () {
    $(window).scroll(function () {
        $('section').each(function () {
            if ($(window).scrollTop() >= $(this).offset().top - 300) {
                var id = $(this).attr('id');
                $('nav li a').removeClass('active');
                $('nav').find('a[href="#' + id + '"]').addClass('active');
            }
        });
    });
});