async function registerSW() {
  if (
    location.protocol !== "https:" &&
    !swAllowedHostnames.includes(location.hostname)
  ) {
    throw new Error("Service workers cannot be registered without https.");
  }

  if (!navigator.serviceWorker) {
    throw new Error("Your browser doesn't support service workers.");
  }

  // Wait for __uv$config to be defined
  while (typeof self.__uv$config === "undefined") {
    await new Promise((resolve) => setTimeout(resolve, 100)); // Poll every 100ms
  }

  // Ultraviolet has a stock `sw.js` script.
  await navigator.serviceWorker.register(stockSW, {
    scope: self.__uv$config.prefix,
  });

  console.log("Service worker registered successfully.");
}
