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
    return str.replace(
        /\b\w+/g,
        (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
    );
}

// Function to create a game box
function createGameBox(gameName) {
    const gameImg = `../assets/images/games/tile/${gameName}.png`;
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

function redirect(link) {
    if (window.top.location.href == "about:blank" || window.top.location.href.startsWith("blob:")) {
        if (window.top == window.parent) {
            window.location.href = link;
        } else {
            window.parent.location.href = link;
        }
    } else {
        window.parent.location.href = link;
    }
}

particlesJS.load('particles-js', '/particles.json', function() {
    console.log('Particles.js config loaded');
});

document.getElementById("sidebarMenu").innerHTML = `
    
    <li><a onclick="redirect('/')">Home <i class="fa-1x fa-solid fa-home"></i></a></li>
            <li><a onclick="redirect('/settings.html')">Settings <i class="fa-1x fa-solid fa-gears"></i></a></li>
            <li><a onclick="redirect('/games/select.html')">Games <i class="fa-1x fa-solid fa-gamepad"></i></a></li>
            <li><a onclick="redirect('/watch/select.html')">Watch <i class="fa-1x fa-solid fa-play"></i></a></li>
            <li><a onclick="redirect('/chat.html')">Chat <i class="fa-1x fa-solid fa-comments"></i></a></li>
            <li><a onclick="redirect('/active/index.html')">Proxy <i class="fa-1x fa-solid fa-unlock"></i></a></li>

            <img src="/assets/images/Title.png" id="smallLogo">
`;

document.querySelector("footer").innerHTML = `By using LupineVault you agree to our <a href="privacy-policy.html">Privacy Policy</a> and <a href="tos.html">Terms of Service</a> - Thanks to our sponsors <a href="https://screen.studio/">Screen Studio</a> for their support - Thanks to our partners <a href="https://benrogo.net">benrogo.net</a> and <a href="https://starttiw.org">starttiw.org</a>`