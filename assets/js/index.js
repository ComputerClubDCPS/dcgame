document.addEventListener("DOMContentLoaded", async function (e) {
    // Fetch game data from the local games.json file
    let gameNames = await fetchFiles(""); // Fetch the full JSON file

    // Extract 'name' properties from the fetched JSON data
    gameNames = gameNames.map((obj) => obj.name);

    // Sort game names alphabetically
    gameNames.sort();

    // Update the heading with the total number of games
    document.getElementById("heading").textContent =
        gameNames.length + " games, unlimited movies and TV shows, a prοxy unblοcker, cloaking, and more!";


        let flavorText = [
            "school sucks",
            "now with 50% more bugs",
            "i like free games",
            "i like free movies and tv shows",
            "remember infinitygamer 😞",
            "mitochondria is the powerhouse of the cell",
            "why the website ourple",
            "new update 🤯",
            "wisdom is my king", //btw this is my friends name
	    "over 8 million views!",
        ];
        
        /*let randomFlavorText = flavorText[Math.floor(Math.random() * flavorText.length)];
        
        document.getElementById("flavorText").innerHTML = randomFlavorText;
        
        document.getElementById("navbar").style.display = "none";*/
 
});

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

function launchBlob() {
	const currentSiteUrl = window.location.href + '?redirect=true';
    let htmlContent;
    if (window.location.host === 'localhost:8000') {
	    htmlContent = `<iframe src="https://${window.location.host}/index.html"></iframe>` + '<style>iframe{border:none;position:fixed;top:0;left:0;width:100%;height:100%;}</style>';
    } else {
        htmlContent = `<iframe src="https://${window.location.host}/index.html"></iframe>` + '<style>iframe{border:none;position:fixed;top:0;left:0;width:100%;height:100%;}</style>';
    }
    const blob = new Blob([htmlContent], {
	    type: 'text/html'
	});

	const blobUrl = URL.createObjectURL(blob);

	let newWindow = window.open(blobUrl);
	if (newWindow) {
		newWindow.onload = () => {
			newWindow.document.title = 'LupineVault';
		};
	}
}

const tilesContainer = document.getElementById("tilesContainer");
const tiles = Array.from(tilesContainer.children);
const leftArrow = document.getElementById("leftArrow");
const rightArrow = document.getElementById("rightArrow");

let currentIndex = 0;

const updateView = () => {
    const tileWidth = tiles[0].offsetWidth;
    const offset = -currentIndex * tileWidth;
    tilesContainer.style.transform = `translateX(${offset}px)`;
};

const moveRight = () => {
    currentIndex = (currentIndex + 1) % tiles.length; // Loop forward
    updateView();
};

const moveLeft = () => {
    currentIndex = (currentIndex - 1 + tiles.length) % tiles.length; // Loop backward
    updateView();
};

rightArrow.addEventListener("click", moveRight);
leftArrow.addEventListener("click", moveLeft);

// Initialize view
updateView();


const featuredGame = "buckshot-roulette";

document.getElementById("featuredGameTile").style.backgroundImage = `url('../assets/images/games/large/${featuredGame}.png')`;
document.querySelector("#featuredGameTile h2").textContent = toTitleCase(featuredGame.replace(/-/g, " "));
document.querySelector("#featuredGameTile #playThisGame").onclick = function() {
    window.location.href = `games/play.html?g=${featuredGame}`;
};


const featuredMovieTVShow = "402431";
const featuredMovieTVShowName = "Wicked";
const featuredMovieTVShowType = "movie";

document.getElementById("featuredMovieTVShowTile").style.backgroundImage = `url('../assets/images/watch/movie/large/${featuredMovieTVShow}.png')`;
document.querySelector("#featuredMovieTVShowTile h2").textContent = featuredMovieTVShowName;
document.querySelector("#featuredMovieTVShowTile #playThisGame").onclick = function() {
    window.location.href = `watch/play.html?id=${featuredMovieTVShow}&type=${featuredMovieTVShowType}`;
};