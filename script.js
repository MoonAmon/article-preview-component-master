const tooltip = document.querySelector("#tooltip-wrapper-js")
const share_button = document.querySelector("#share-btn-js")

share_button.addEventListener("click", () => {
    toggleTooltip();
})

tooltip.addEventListener("click", () => {
    toggleTooltip();
} )

function toggleTooltip() {
    tooltip.classList.toggle("invisible");
    toggleShareButtonAttributes();
}

function toggleShareButtonAttributes() {
    if (tooltip.classList.contains("invisible")) {
        share_button.removeAttribute("aria-describedby");
        share_button.setAttribute("aria-expanded", "false");
    } else {
        share_button.setAttribute("aria-describedby", "tooltip");
        share_button.setAttribute("aria-expanded", "true");
    }
}