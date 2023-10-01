const textarea = document.getElementById("textarea1");

function changeFontSize(input) {
    textarea.style.fontSize = input.value + "px";
}

function toggleBold(button) {
    textarea.style.fontWeight = (textarea.style.fontWeight === "bold") ? "normal" : "bold";
    toggleButtonClass(button, "active");
}

function toggleItalic(button) {
    textarea.style.fontStyle = (textarea.style.fontStyle === "italic") ? "normal" : "italic";
    toggleButtonClass(button, "active");
}

function toggleUnderline(button) {
    textarea.style.textDecoration = (textarea.style.textDecoration === "underline") ? "none" : "underline";
    toggleButtonClass(button, "active");
}

function alignLeft() {
    textarea.style.textAlign = "left";
}

function alignCenter() {
    textarea.style.textAlign = "center";
}

function alignRight() {
    textarea.style.textAlign = "right";
}

function changeCase() {
    textarea.style.textTransform = (textarea.style.textTransform === "uppercase") ? "none" : "uppercase";
    toggleButtonClass(document.querySelector(".fourth button"), "active");
}

function clearText() {
    textarea.style.fontWeight = "normal";
    textarea.style.textAlign = "left";
    textarea.style.fontStyle = "normal";
    textarea.style.textTransform = "capitalize";
    textarea.value = "";
}

function changeTextColor(input) {
    textarea.style.color = input.value;
}

function toggleButtonClass(button, className) {
    if (button) {
        button.classList.toggle(className);
    }
}

window.addEventListener('load', () => {
    textarea.value = "";
});
