let gameContainer = document.getElementById("gameContainer");

function createGameBox(gameName) {
    const gameImg = `../assets/images/games/tile/${gameName}.png`;
    const gameLink = `play.html?g=${gameName}`;
    const gameBox = document.createElement("div");
    gameBox.classList.add("gameBox");
    gameBox.style.backgroundImage = `url('${gameImg}')`;

    const gameText = document.createElement("span");
    gameText.textContent = toTitleCase(gameName.replace(/-/g, " "));

    gameBox.appendChild(gameText);
    gameBox.addEventListener("click", function () {
        window.location.href = gameLink;
    });

    return gameBox;
}

function filterGames() {
    const filterValue = this.value.toLowerCase();
    document.querySelectorAll(".gameBox").forEach(function (gameBox) {
        const gameText = gameBox.textContent.toLowerCase();
        gameBox.style.display = gameText.includes(filterValue)
            ? "flex"
            : "none";
    });
}

document.addEventListener("DOMContentLoaded", async function (e) {
    // Fetch games.json and simulate getting the "games/files" directory
    let gameNames = await fetchFiles(""); // Empty string for full data

    // Extract 'name' properties from the fetched JSON data
    gameNames = gameNames.map((obj) => obj.name);

    // Sort and create game boxes
    gameNames.sort();

    gameNames.forEach(function (gameName) {
        gameContainer.appendChild(createGameBox(gameName));
    });

    // Update the game count
    document.getElementById("gameCount").textContent =
        "There are currently " + gameNames.length + " games in the LupineVault.";

    // Add search filter functionality
    document.getElementById("searchInput").addEventListener("input", filterGames);


    const container = document.getElementById("adContainer");
    let lastPageHeight = document.documentElement.scrollHeight;

    // AdSense HTML as a string
    const adHTML = `
        <ins class="adsbygoogle"
            style="display:block"
            data-ad-client="ca-pub-1772815021916812"
            data-ad-slot="3340865273"
            data-ad-format="auto"
            data-full-width-responsive="true"></ins>
    `;

    // Function to add the AdSense code
    function insertAd() {
        container.innerHTML += adHTML; // Append the ad code to the container
        (adsbygoogle = window.adsbygoogle || []).push({}); // Initialize the ad

        const currentPageHeight = document.documentElement.scrollHeight;
        if (currentPageHeight > lastPageHeight) {
            console.log("Page height increased. Stopping insertion.");
            return;
        }

        lastPageHeight = currentPageHeight;
        requestAnimationFrame(insertAd); // Continue adding ads
    }

    // Start inserting ads
    insertAd();
});
