const searchNav = $('#nav_search');
const movieNav = $('#nav_movies');
const popUp = $('.popup');

popUp.hide();

$(document).ready(function () {
    $('.profile').hover(
        (e) => {
            e.preventDefault();
            popUp.show();
        },
        (e) => {
            e.preventDefault();
            popUp.hide();
        }
    );

    popUp.hover(
        (e) => {
            e.preventDefault();
            popUp.show();
        },
        (e) => {
            e.preventDefault();
            popUp.hide();
        }
    );
});

searchNav.on('click', function(e){
    // searchSection.show();
});
