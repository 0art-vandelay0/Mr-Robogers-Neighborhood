function mrReplace(text) {
    const nums = ["1", "2", "3"];
    const wordsToMR = [];

    if (text.includes("3")) {
        wordsToMR.push("Won't you be my neighbor!");
    } else if (text.includes("2")) {
        wordsToMR.push("Boop!");
    } else if (text.includes("1")) {
        wordsToMR.push("Beep!");
    }

    return wordsToMR.join(" ");
}

const text = "12";
console.log(mrReplace(text));



// function mrReplace(text) {
//     const nums = ["1"];
//     const wordsToMR = [];

//     for (let i = 0; i < nums.length; i++) {
//         if (text.includes(nums[i])) {
//         wordsToMR.push("Beep!");
//         break;
//         }
//     }

//     if (wordsToMR.length === 0) {
//         wordsToMR.push(text);
//     }

//     return wordsToMR.join(" ");
// }

// const text = "10";
// console.log(mrReplace(text));