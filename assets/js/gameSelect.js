let gameContainer = document.getElementById("gameContainer");

function createGameBox(gameName) {
    const gameImg = `../assets/images/games/${gameName}.png`;
    const gameLink = `play.html?g=${gameName}`;
    const template = `

      <div class="group gameBox flex aspect-square bg-cover rounded-xl justify-center items-end relative overflow-hidden hover:border cursor-pointer" style="background-image: url('${gameImg}')">
        <div class="group-hover:opacity-100  opacity-0 relative w-full h-full flex justify-center items-center transition-opacity bg-gray-900/80">
            <span class="text-center relative z-10">${toTitleCase(gameName.replace(/-/g, " "))}</span>
        </div>
      </div>
    `

    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = template;

    const gameBox = tempDiv.firstElementChild;
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
            ? "block"
            : "none";
    });
}

document.addEventListener("DOMContentLoaded", async function (e) {
    const gameList = await GameService.loadGames();
    const gameNames = GameService.getGameSortedNames(gameList);

    gameNames.forEach(function (gameName) {
        gameContainer.appendChild(createGameBox(gameName));
    });

    document.getElementById("gameCount").textContent =
        "There are currently " + gameNames.length + " games in the LupineVault.";

    // Add search filter functionality
    document.getElementById("searchInput").addEventListener("input", filterGames);
});
