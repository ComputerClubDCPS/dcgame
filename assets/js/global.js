
// Function to fetch the JSON file
async function fetchFiles() {
    try {
        const response = await fetch("../assets/games.json"); // Path to your games.json
        if (!response.ok) throw new Error("Failed to fetch JSON");
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error loading JSON file:", error);
        return []; // Return empty array on failure
    }
}

// Function to capitalize game names
function toTitleCase(str) {
    return str.replace(/\b\w+/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
}

// Function to create a game box
function createGameBox(gameName) {
    const gameImg = `../assets/images/games/${gameName}.png`;
    const gameLink = `play.html?g=${gameName}`;

    const gameBox = document.createElement("div");
    gameBox.classList.add("gameBox");
    gameBox.style.backgroundImage = `url('${gameImg}')`;

    const gameText = document.createElement("span");
    gameText.textContent = toTitleCase(gameName.replace(/-/g, " "));

    gameBox.appendChild(gameText);

    gameBox.addEventListener("click", () => {
        window.location.href = gameLink;
    });

    return gameBox;
}

/*
document.addEventListener("DOMContentLoaded", async () => {
    const gameData = await fetchFiles();
    const gameNames = gameData.map((obj) => obj.name);
    gameNames.sort();
});
*/




function toggleMenu() {
    if (document.getElementById("navbar").style.display == "none") {
        document.getElementById("navbar").style.display = "unset";
    } else {
        document.getElementById("navbar").style.display = "none";
    }
}

function redirect(link){
    if (window.top.location.href !== "about:blank"){
      window.top.location.href = link;
    } else {
      window.parent.location.href = link;
    }
  }


