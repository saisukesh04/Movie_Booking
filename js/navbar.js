$('.popup').hide();

$(document).ready(function () {
    $('.profile').hover(
        (e) => {
            e.preventDefault();
            $('.popup').show();
        },
        (e) => {
            e.preventDefault();
            $('.popup').hide();
        }
    );

    $('.popup').hover(
        (e) => {
            e.preventDefault();
            $('.popup').show();
        },
        (e) => {
            e.preventDefault();
            $('.popup').hide();
        }
    );
});