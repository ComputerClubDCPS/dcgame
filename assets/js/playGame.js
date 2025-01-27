const urlParams = new URLSearchParams(window.location.search);
const searchParam = urlParams.get("g");

document.addEventListener("DOMContentLoaded", async () => {
    const gameData = await fetchFiles();
    const gameNames = gameData.map((obj) => obj.name);
    gameNames.sort();

    const gameIndex = gameNames.indexOf(searchParam);

    if (gameData[gameIndex].sourceRequired) {
        window.location.href = "files/" + searchParam + "/index.html";
    }
});

document.addEventListener('DOMContentLoaded', function (e) {
    document.getElementById("gameFrame").src = "files/" + searchParam + "/index.html";
    document.getElementById("sourceViewLink").href = "files/" + searchParam + "/index.html";
    document.getElementById("downloadFilesLink").href = "https://download-directory.github.io/?url=https%3A%2F%2Fgithub.com%2FLupineVault%2FLupineVault%2Ftree%2Fmain%2Fgames%2Ffiles%2F" + searchParam;
});

function goFullscreen(id) {
    var iframe = document.getElementById(id);
    if (iframe.requestFullscreen) {
        iframe.requestFullscreen();
    } else if (iframe.mozRequestFullScreen) { // Firefox
        iframe.mozRequestFullScreen();
    } else if (iframe.webkitRequestFullscreen) { // Chrome, Safari, Opera
        iframe.webkitRequestFullscreen();
    } else if (iframe.msRequestFullscreen) { // IE/Edge
        iframe.msRequestFullscreen();
    }
  }
  