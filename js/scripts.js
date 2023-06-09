function mrReplace(userNum) {
    const nums = ["1", "2", "3"];
    const wordsToMR = [];

    if (userNum.includes("3")) {
        const replacement = "Won't you be my neighbor!";
    } else if (userNum.includes("2")) {
        wordsToMR.push("Boop!");
    } else if (userNum.includes("1")) {
        wordsToMR.push("Beep!");
    } else {
        wordsToMR.push("not in the list");
    };
    return wordsToMR.join(" ");
}

function countUp(userNum) {
    const numbers = [];

    for (let i = 0; i <= userNum; i++) {
        numbers.push(i);
    }

    return numbers;
}

const userNum = 5;
console.log(countUp(userNum));



// function mrReplace(userNum) {
//     const nums = ["1", "2", "3"];
//     const wordsToMR = [];

//     if (userNum.includes("3")) {
//         wordsToMR.push("Won't you be my neighbor!");
//     } else if (userNum.includes("2")) {
//         wordsToMR.push("Boop!");
//     } else if (userNum.includes("1")) {
//         wordsToMR.push("Beep!");
//     } else {
//         wordsToMR.push("not in the list");
//     };
//     return wordsToMR.join(" ");
// }

// const userNum = "232";
// console.log(mrReplace(userNum));