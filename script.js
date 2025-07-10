document.getElementById("shareButton").addEventListener("click", (toggleShareToast));

/**
 * Toggles the visibility of the share toast and activate state of the share button. 
 * 
 * @param {MouseEvent} e - The click event trigerred by the share button.
 */
function toggleShareToast(e) {
    const button = e.currentTarget;
    const toast = document.getElementById("toast");

    button.classList.toggle("card__share-button--active");
    toast.classList.toggle("toast--active")
}