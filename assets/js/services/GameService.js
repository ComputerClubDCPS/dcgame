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

class GameService {
  static async loadGames() {
    const gameData = await fetchFiles();
    return gameData;
  }

  static getFeaturedGames(gameData) {
    return gameData.filter((obj) => obj.categories.includes("featured"));
  }

  static getNumberOfGames(gameData) {
    return gameData.length;
  }

  static getGameSortedNames(gameData) {
    return gameData.map((obj) => obj.name).sort();
  }
}