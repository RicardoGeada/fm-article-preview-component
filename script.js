const shareButton = document.getElementById("shareButton");
const toast = document.getElementById("toast");

shareButton.addEventListener("click", (toggleShareToast));

/**
 * Toggles the visibility of the share toast and activate state of the share button. 
 */
function toggleShareToast() {
    shareButton.classList.toggle("card__share-button--active");
    const isActive = toast.classList.toggle("toast--active");
    toast.setAttribute("aria-hidden", !isActive);
    shareButton.setAttribute("aria-expanded", isActive);
}

/**
 * Keylistener for 'Esc' key to close the toast.
 */
document.addEventListener("keydown", (e) => {
    const toast = document.getElementById("toast");
    if (e.key === "Escape" && toast.classList.contains("toast--active")) {
        toggleShareToast();
        shareButton.focus();
    };
})