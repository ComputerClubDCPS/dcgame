"use strict";
/**
 * @type {HTMLFormElement}
 */
const form = document.getElementById("uv-form");
/**
 * @type {HTMLInputElement}
 */
const address = document.getElementById("uv-address");
/**
 * @type {HTMLInputElement}
 */
const searchEngine = document.getElementById("uv-search-engine");
/**
 * @type {HTMLParagraphElement}
 */
const error = document.getElementById("uv-error");
/**
 * @type {HTMLPreElement}
 */
const errorCode = document.getElementById("uv-error-code");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  try {
    // Ensure __uv$config is defined before proceeding
    if (typeof self.__uv$config === "undefined") {
      throw new Error("Ultraviolet config is not defined.");
    }
    
    await registerSW();  // Register the service worker
  } catch (err) {
    error.textContent = "Failed to register service worker.";
    errorCode.textContent = err.toString();
    throw err;
  }

  const url = search(address.value, searchEngine.value);
  location.href = self.__uv$config.prefix + self.__uv$config.encodeUrl(url);
});

async function launchURL(openURL) {
  try {
    // Ensure __uv$config is defined before proceeding
    if (typeof self.__uv$config === "undefined") {
      throw new Error("Ultraviolet config is not defined.");
    }

    await registerSW();  // Register the service worker
  } catch (err) {
    error.textContent = "Failed to register service worker.";
    errorCode.textContent = err.toString();
    throw err;
  }

  const url = search(openURL, searchEngine.value);
  location.href = self.__uv$config.prefix + self.__uv$config.encodeUrl(url);
}

async function launchGame(openURL) {
  try {
    // Ensure __uv$config is defined before proceeding
    if (typeof self.__uv$config === "undefined") {
      throw new Error("Ultraviolet config is not defined.");
    }

    await registerSW();  // Register the service worker
  } catch (err) {
    error.textContent = "Failed to register service worker.";
    errorCode.textContent = err.toString();
    throw err;
  }

  const url = search(openURL, searchEngine.value);
  const encodedUrl = self.__uv$config.prefix + self.__uv$config.encodeUrl(url);
  localStorage.setItem('storedURL', encodedUrl);
  window.location.href = "/g/gframe.html";
}
