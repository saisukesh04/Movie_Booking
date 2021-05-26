const url = 'https://api.themoviedb.org/3/movie/popular?api_key=94f8f7b1c1fd0f03fa4c542d1aac543d&page=1&region=IN';
const image_url = 'https://image.tmdb.org/t/p/w500';
const moviesBlock = $(".cards-buffer");

function createMovieCard(movies) {
    let output = ``;

    movies.forEach(movie => {
        let image = "./../assets/default_movie.jpeg";
        if (movie.poster_path != null)
            image = image_url + movie.poster_path;
        output += `
        <div class="movie_card">
            <img src=${image} data-movie-id=${movie.id} width=""
                height="300px">
            <p class="mov_name">${movie.title}</p>
            <p class="mov_year">${movie.release_date}</p>
        </div>`;
    });

    moviesBlock.empty();
    moviesBlock.html(output);
}

$(document).ready(function () {
    console.log("Hello Movies");

    fetch(url)
            .then((res) => res.json())
            .then((data) => {
                const movies = data.results;
                createMovieCard(movies);
                console.log('Movies: ', movies);
            })
            .catch((error) => {
                console.log('Error: ', error);
            });
});