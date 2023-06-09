function mrReplace(text) {
    const nums = ["1"];
    const wordsToMR = [];

    for (let i = 0; i < nums.length; i++) {
        if (text.includes(nums[i])) {
        wordsToMR.push("Beep!");
        break;
        }
    }

    if (wordsToMR.length === 0) {
        wordsToMR.push(text);
    }

    return wordsToMR.join(" ");
}

const text = "10";
console.log(mrReplace(text));