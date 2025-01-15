const GAME_ROUTE = (name) => `games/play.html?g=${name}`;
const GAME_IMAGE_ROUTE = (name, ext = 'png') => `../assets/images/games/${name}.${ext}`;
const GAME_IMAGE_LG_ROUTE = (name, ext = 'png') => `../assets/images/games/${name}-lg.${ext}`;

// Main function to load games
document.addEventListener("DOMContentLoaded", async () => {
    const gameData = await GameService.loadGames();
    const featuredGames = GameService.getFeaturedGames(gameData);
    const numberOfGames = GameService.getNumberOfGames(gameData);


    const movieService = new MoviesService();
    const featuredMovies = await movieService.fetchMovies(1);

    const gameContainer = document.getElementById("gameContainer");
    const heading = document.getElementById("heading");

    heading.innerHTML = `An archive of <span class="text-purple-500 font-bold">${numberOfGames}</span> HTML5 games`;

    const featuredGamesHero = document.getElementById("featuredGame");
    const featuredMovieHero = document.getElementById("featuredMovie");

    featuredGamesHero.style.backgroundImage = `url(${GAME_IMAGE_LG_ROUTE(featuredGames[0].name)})`;
    featuredGamesHero.style.backgroundSize = "cover";
    featuredGamesHero.style.backgroundPosition = "center";

    featuredMovieHero.style.backgroundImage = `url(${featuredMovies[0].image})`;
    featuredMovieHero.style.backgroundSize = "cover";
    featuredMovieHero.style.backgroundPosition = "center";


    const featuredCarouselData = featuredGames.map(game => ({
        image: GAME_IMAGE_ROUTE(game.name),
        text: toTitleCase(game.name.replace(/-/g, " ")),
        url: GAME_ROUTE(game.name)
    }))

    const featuredMoviesCarouselData = featuredMovies.map(movie => ({
        image: movie.image,
        text: movie.title,
        url: movie.url
    }))

    new Carousel
    (featuredCarouselData, {
        carousel: document.querySelector("#games-carousel .carousel"),
        prevButton: document.querySelector("#games-carousel .prev"),
        nextButton: document.querySelector("#games-carousel .next")
    });

    new Carousel
    (featuredMoviesCarouselData, {
        carousel: document.querySelector("#movies-carousel .carousel"),
        prevButton: document.querySelector("#movies-carousel .prev"),
        nextButton: document.querySelector("#movies-carousel .next"),
    }, 'narrow');
});
//
// let flavorText = [
//   "school sucks",
//   "now with 50% more bugs",
//   "i like free games",
//   "i like free movies and tv shows",
//   "remember infinitygamer 😞",
//   "mitochondria is the powerhouse of the cell",
//   "why the website ourple",
//   "new update 🤯",
//   "wisdom is my king", //btw this is my friends name
// ];
//
// let randomFlavorText = flavorText[Math.floor(Math.random() * flavorText.length)];
//
// document.getElementById("flavorText").innerHTML = randomFlavorText;
//
// document.getElementById("navbar").style.display = "none";
//
// // function toggleMenu() {
// //     if (document.getElementById("navbar").style.display == "none") {
// //         document.getElementById("navbar").style.display = "unset";
// //     } else {
// //         document.getElementById("navbar").style.display = "none";
// //     }
// // }

function redirect(link) {
    if (window.top.location.href !== "about:blank") {
        window.top.location.href = link;
    } else {
        window.parent.location.href = link;
    }
}

function openSVG() {
    const dataURL = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiID8+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMTI4MCA3MjAiPgogICAgPHRpdGxlPkdvb2dsZTwvdGl0bGU+CiAgICA8Zm9yZWlnbk9iamVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIj4KICAgICAgICA8ZW1iZWQgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWwiIHNyYz0iaHR0cHM6Ly9uZXZlcmV2ZXJ1c2V0aGlzZm9yYW55dGhpbmdiZXNpZGVzZGF0YWxpbmtzZm9ybHVwaW5ldmF1bHQuOTg4MjEzNi54eXovIiB0eXBlPSJ0ZXh0L3BsYWluIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiAvPgogICAgPC9mb3JlaWduT2JqZWN0Pgo8L3N2Zz4K';
    navigator.clipboard.writeText(dataURL)
        .then(() => {
            alert('Data link copied to clipboard! Paste in your URL box.');
        })
        .catch(err => {
            console.error('Failed to copy data link:', err);
        });
}


function openpSVG() {
    const dataURL = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiID8+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMTI4MCA3MjAiPgogICAgPHRpdGxlPkdvb2dsZTwvdGl0bGU+CiAgICA8Zm9yZWlnbk9iamVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIj4KICAgICAgICA8ZW1iZWQgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWwiIHNyYz0iaHR0cHM6Ly9zZGhmc2thamRzaGF3dXdrZGpzYTI4NzIxMTA0Mjk0MTI4MTQwZS50aW55dHJla3JjLnNob3AvIiB0eXBlPSJ0ZXh0L3BsYWluIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiAvPgogICAgPC9mb3JlaWduT2JqZWN0Pgo8L3N2Zz4K';
    navigator.clipboard.writeText(dataURL)
        .then(() => {
            alert('Data link copied to clipboard! Paste in your URL box.');
        })
        .catch(err => {
            console.error('Failed to copy data link:', err);
        });
}


let url = window.location.href;
let win;

function openAboutBlank() {
    if (win) {
        win.focus();
    } else {
        var features =
            "width=" +
            window.innerWidth +
            ",height=" +
            window.innerHeight +
            ",menubar=no,toolbar=no,location=no,status=no";
        win = window.open("", "_blank", features);
        win.document.body.style.margin = "0";
        win.document.body.style.height = "100%";
        var iframe = win.document.createElement("iframe");
        iframe.style.border = "none";
        iframe.style.width = "100%";
        iframe.style.height = "100%";
        iframe.style.margin = "0";
        iframe.src = url;
        win.document.body.appendChild(iframe);
        window.location.href = localStorage.getItem("redirectURL") || "https://classroom.google.com/";
    }
}
