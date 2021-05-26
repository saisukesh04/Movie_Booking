const API_KEY = '94f8f7b1c1fd0f03fa4c542d1aac543d';
const url = 'https://api.themoviedb.org/3/search/movie?api_key=94f8f7b1c1fd0f03fa4c542d1aac543d&query=';
const image_url = 'https://image.tmdb.org/t/p/w500';

const searchBtn = $('#search-btn');
const searchBtnRes = $('.search_btn');
const searchStr = $('.search_text');
const searchStrRes = $('.search_text_results');
const moviesBlock = $('.card_buffer');

function createMovieCard(movies) {
    const movieCard = document.createElement('div');
    movieCard.setAttribute('class', 'movie_buffer');

    const movieTemplate = `
        ${movies.map((movie) => {
            return `
                <div class="movie_card">
                    <img src=${image_url + movie.poster_path} data-movie-id=${movie.id} width=""
                    height="300px">
                    <p class="mov_name">${movie.title}</p>
                </div>`;
        })}`;

    movieCard.innerHTML = movieTemplate;
    return movieCard;
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
                const movBlock = createMovieCard(movies);
                moviesBlock.append(movBlock);
                console.log('Movies: ', movies);
            })
            .catch((error) => {
                console.log('Error: ', error);
            });
    }
});

searchBtnRes.on('click', function (e) {
    if (searchStrRes.val() != "") {
        console.log("Movie Search: " + searchStrRes.val());
        $('.search_res_text').text("Showing results for : " + searchStrRes.val());

        fetch(url + searchStrRes.val())
            .then((res) => res.json())
            .then((data) => {
                console.log('Data: ', data);
            })
            .catch((error) => {
                console.log('Error: ', error);
            });
    }
});