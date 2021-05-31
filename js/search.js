const API_KEY = '94f8f7b1c1fd0f03fa4c542d1aac543d';
const url = 'https://api.themoviedb.org/3/search/movie?api_key=94f8f7b1c1fd0f03fa4c542d1aac543d&query=';
const image_url = 'https://image.tmdb.org/t/p/w500';

const searchBtn = $('#search-btn');
const searchBtnRes = $('.search_btn');
const searchStr = $('.search_text');
const searchStrRes = $('.search_text_results');
const moviesBlock = $('.card_buffer');

function createMovieCard(movies) {
    let output = ``;

    movies.forEach(movie => {
        let image = "./../assets/default_movie.jpeg";
        if (movie.poster_path != null)
            image = image_url + movie.poster_path;
        output += `
        <div class="movie_card" id=${movie.id}>
            <img src=${image} data-movie-id=${movie.id} width=""
                height="300px">
            <p class="mov_name">${movie.title}</p>
        </div>`;
    });

    moviesBlock.empty();
    moviesBlock.html(output);
}

searchBtn.on('click', function (e) {
    e.preventDefault();

    if (searchStr.val() != "") {
        $('.main').addClass("hidden");
        $('.search_results').removeClass("hidden");

        console.log("Movie Search: " + searchStr.val());
        $('.search_res_text').text("Showing results for : " + searchStr.val());

        fetch(url + searchStr.val())
            .then((res) => res.json())
            .then((data) => {
                const movies = data.results;
                createMovieCard(movies);
                console.log('Movies: ', movies);
            })
            .catch((error) => {
                console.log('Error: ', error);
            });
    }
});

searchBtnRes.on('click', function (e) {
    e.preventDefault();
    moviesBlock.empty();

    if (searchStrRes.val() != "") {
        console.log("Movie Search: " + searchStrRes.val());
        $('.search_res_text').text("Showing results for : " + searchStrRes.val());

        fetch(url + searchStrRes.val())
            .then((res) => res.json())
            .then((data) => {
                const movies = data.results;
                createMovieCard(movies);
                console.log('Movies: ', movies);
            })
            .catch((error) => {
                console.log('Error: ', error);
            });
    }
});

$("body").on('click', ".movie_card", function (e) {
    e.preventDefault();
    var clicked = this.id;
    sessionStorage.setItem("MovieClicked", clicked);
    console.log("Movie clicked: " + clicked);
    window.location.replace('./../pages/movie_detail.html');
});