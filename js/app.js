if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("sw.js")
    .then((reg) => console.log("service worker registered", reg))
    .catch((err) => console.log("service worker not register", err));

  let deferredPrompt;
  window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
    deferredPrompt = event;

    const installButton = document.querySelector(".download-btn");
    // installButton.style.display = "block";
    installButton.addEventListener("click", () => {
      // installButton.style.display = "none";
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === "accepted") {
          console.log("User accepted the install prompt");
        } else {
          console.log("User dismissed the install prompt");
        }
        deferredPrompt = null;
      });
    });
  });
}
