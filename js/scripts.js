// Business Logic
function mrReplace(userNum) {
    const wordsToMR = [];

    for (let i = 0; i <= userNum; i++) {
        let numStr = i.toString();
        if (numStr.includes("3")) {
            wordsToMR.push("Won't you be my neighbor?");
        } else if (numStr.includes("2")) {
            wordsToMR.push("Boop!");
        } else if (numStr.includes("1")) {
            wordsToMR.push("Beep!");
        } else {
            wordsToMR.push(i);
        }
    }

    return wordsToMR.join(", ");
}

// UI Logic
document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener("load", function() {
        document.querySelector("#num-replacer").onsubmit = function(event) {
            event.preventDefault();

            let numInput = document.getElementById("number").value;
            let result = mrReplace(Number(numInput));

            document.getElementById("new-sentence").innerText = result;
            document.getElementById("result-container").removeAttribute("class");

            resetForm();
        };
    });

    function resetForm() {
        document.getElementById("number").value = "";
    }

    const darkModeButton = document.getElementById("dark-mode-button");
    const lightModeButton = document.getElementById("light-mode-button");
    const responseP = document.getElementById("new-sentence");
    const body = document.querySelector("body");
    resultP = document.getElementById("result");

    darkModeButton.addEventListener("click", function() {
        body.setAttribute("class", "dark-mode");
        body.removeAttribute("class", "light-mode");
        responseP.removeAttribute("class", "light-mode-text");
        responseP.setAttribute("class", "dark-mode-text");
        resultP.removeAttribute("class", "light-mode-paragraph");
        resultP.setAttribute("class", "dark-mode-paragraph");
    });

    lightModeButton.addEventListener("click", function() {
        body.removeAttribute("class", "dark-mode");
        body.setAttribute("class", "light-mode");
        responseP.removeAttribute("class", "dark-mode-text");
        responseP.setAttribute("class", "light-mode-text");
        resultP.removeAttribute("class", "dark-mode-paragraph");
        resultP.setAttribute("class", "light-mode-paragraph");
    });
});
