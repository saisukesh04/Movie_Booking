const url = 'https://api.themoviedb.org/3/movie/';
const image_url = 'https://image.tmdb.org/t/p/w500';
const API_KEY = "?api_key=94f8f7b1c1fd0f03fa4c542d1aac543d";

const bookBtn = $("#book_movie");
const title = $(".movie_title");
const poster = $(".movie_poster");
const release = $(".release_date");
const overview = $(".overview");
const rating = $(".rating");

$(document).ready(function () {
    const id = sessionStorage.getItem("MovieClicked");
    const final_URL = url + id + API_KEY;

    fetch(final_URL)
        .then((res) => res.json())
        .then((data) => {
            console.log('Movies: ', data);
            const poster_url = image_url + data.poster_path;
            const votes = data.vote_average;
            title.html(data.title);
            release.html(data.release_date);
            overview.html(data.overview);
            rating.html(votes + "/10");
            poster.attr("src", poster_url);

            const stars = Math.round(votes / 2);
            let children = $(".ratings_div").children();
            for (i = 0; i < stars; i++)
                children[i].classList.add("checked");
        })
        .catch((error) => {
            console.log('Error: ', error);
        });
});

bookBtn.on("click", function (e) {
    e.preventDefault();
    const seats = $(".seat_nos").val();
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    let body = {
        email: sessionStorage.getItem("email"),
        movieName: title.text(),
        seatNo: $('.seat_nos').val(),
        address: "Bangalore"
    };

    let strJson = JSON.stringify(body);
    let requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: strJson
    }

    fetch("https://moviebooking-ipw.herokuapp.com/book", requestOptions)
        .then(response => response.json())
        .then((result) => {
            console.log(result);
            if (result.status == "failure")
                console.log("Invalid Creds");
            else {
                console.log(result);
                window.location.replace('../pages/main.html');
            }
        }).catch((err) => {
            window.location.replace('../pages/main.html');
            console.log(err.message());
        });
});