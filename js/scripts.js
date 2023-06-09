function mrReplace(userNum) {
    const nums = ["1", "2", "3"];
    const wordsToMR = [];

    if (userNum.includes("3")) {
        wordsToMR.push("Won't you be my neighbor!");
    } else if (userNum.includes("2")) {
        wordsToMR.push("Boop!");
    } else if (userNum.includes("1")) {
        wordsToMR.push("Beep!");
    } else {
        wordsToMR.push("not in the list");
    };
    return wordsToMR.join(" ");
}

const userNum = "232";
console.log(mrReplace(userNum));



// function mrReplace(userNum) {
//     const nums = ["1"];
//     const wordsToMR = [];

//     for (let i = 0; i < nums.length; i++) {
//         if (userNum.includes(nums[i])) {
//         wordsToMR.push("Beep!");
//         break;
//         }
//     }

//     if (wordsToMR.length === 0) {
//         wordsToMR.push(userNum);
//     }

//     return wordsToMR.join(" ");
// }

// const userNum = "10";
// console.log(mrReplace(userNum));