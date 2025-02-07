"use strict";
/**
 * Distributed with Ultraviolet and compatible with most configurations.
 */
const stockSW = "/active/uv-sw.js";

/**
 * List of hostnames that are allowed to run serviceworkers on http:
 */
const swAllowedHostnames = ["localhost", "127.0.0.1"];

/**
 * Global util
 * Used in 404.html and index.html
 */
async function registerSW() {
  if (
    location.protocol !== "https:" &&
    !swAllowedHostnames.includes(location.hostname)
  )
    throw new Error("Service workers cannot be registered without https.");

  if (!navigator.serviceWorker)
    throw new Error("Your browser doesn't support service workers.");

  // Ultraviolet has a stock `sw.js` script.
  await navigator.serviceWorker.register(stockSW, {
    scope: __uv$config.prefix,
  });
}

document.addEventListener('DOMContentLoaded', () => {
    const registerButton = document.getElementById('uv-register-sw');
    if (registerButton) {
        registerButton.addEventListener('click', async () => {
            try {
                await navigator.serviceWorker.register('/service-worker.js');
                alert('Service Worker registered successfully.');
                location.reload(); // Reload the page after registering the service worker
            } catch (error) {
                console.error('Service Worker registration failed:', error);
            }
        });
    }

    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.getRegistrations().then(function(registrations) {
            if (registrations.length === 0) {
                window.location.href = '404.html'; // Redirect to 404.html if no service worker is registered
            } else {
                navigator.serviceWorker.register('/service-worker.js')
                    .then(function(registration) {
                        console.log('Service Worker registered with scope:', registration.scope);
                    })
                    .catch(function(error) {
                        console.log('Service Worker registration failed:', error);
                        window.location.href = '404.html'; // Redirect to 404.html on failure
                    });
            }
        });
    } else {
        console.log('Service Worker is not supported in this browser.');
        window.location.href = '404.html'; // Redirect to 404.html if Service Worker is not supported
    }
});
