const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

textInput.addEventListener("input", (event) => {
    const value = event.currentTarget.value.trim();
    output.textContent = value === "" ? "Anonymous" : value;
});