// Biz Logic
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

// const userNum = 14;
// console.log(mrReplace(userNum));

// UI Logic

window.addEventListener("load", function() {
    document.querySelector("#num-replacer").onsubmit = function(event) {
        event.preventDefault();

        let numInput = document.getElementById("number").value;

        console.log(numInput);

        resetForm();
    };
});

function resetForm() {
    document.getElementById("number").value = "";
};



// // Biz Logic
// function mrReplace(userNum) {
//     const wordsToMR = [];

//     for (let i = 0; i <= userNum; i++) {
//         let numStr = i.toString();
//         if (numStr.includes("3")) {
//             wordsToMR.push("Won't you be my neighbor?");
//         } else if (numStr.includes("2")) {
//             wordsToMR.push("Boop!");
//         } else if (numStr.includes("1")) {
//             wordsToMR.push("Beep!");
//         } else {
//             wordsToMR.push(i);
//         }
//     }

//     return wordsToMR.join(", ");
// }

// const userNum = 14;
// console.log(mrReplace(userNum));