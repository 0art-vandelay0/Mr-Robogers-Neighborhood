# Mr. Roboger's Neighborhood

#### By Casey Hill

#### Give Mr. Roboger a number and he will return a greeting.

## Technologies Used

- JavaScript
- CSS
- HTML

## Description

Enter a number and the program will return a greeting that counts from zero to the input number, replacing any instances of "1" with "Beep!", "2" with "Boop!", and "3" with "Won't you be my neighbor?".
A true robotical neighbor.

## Setup/Installation Requirements

### In VS Code

- Clone this repository to your local machine.
- Open VS Code
- Open the top level directory you just cloned
- Open index.html in your Live Server extension

### Directly in Browser

- Clone this repository to your local machine.
- Navigate to your browser
- File > Open File > Choose {folder you just cloned} > open index.html

## Known Bugs

- No known bugs :beetle:

## License

Please contact caseyfhill1@gmail.com with any the following:

- Found bugs :lady_beetle:
- Alterations and improvements
- General Questions
- Any contributions you would like to make! :old_key:

## **Test Cases**

Describe: mrReplace()

1. Test: "It will replace user input number containing the number 1 with 'Beep!'"
   Code:
   const userNum = "10"
   mrReplace(userNum)
   Expected Output: ["Beep!"]

2. Test: "It will replace user input number containing the number 2 with 'Boop!'"
   Code:
   const userNum = "22"
   mrReplace(userNum)
   Expected Output: ["Boop!"]

3. Test: "It will replace user input number containing the number 2 with 'Boop!'"
   Code:
   const userNum = "3"
   mrReplace(userNum)
   Expected Output: ["Won't you be my neighbor?"]

4. Test: "It will replace a number containing 1 if a 2 is present"
   Code:
   const userNum = "12"
   mrReplace(userNum)
   Expected Output: ["Boop!"]

5. Test: "It will replace a number containing 2 if a 3 is present"
   Code:
   const userNum = "32"
   mrReplace(userNum)
   Expected Output: ["Won't you be my neighbor?"]

6. Test: "It will replace a number in the count list containing 1, 2, or 3 with 'Beep', 'Boop!', or 'Won't you be my neighbor'."
   Code:
   const userNum = "14"
   mrReplace(userNum)
   Expected Output: [0, Beep!, Boop!, Won't you be my neighbor?, 4, 5, 6, 7, 8, 9, Beep!, Beep!, Boop!, Won't you be my neighbor?, Beep!]

## License

_{Let people know what to do if they run into any issues or have questions, ideas or concerns. Encourage them to contact you or make a contribution to the code.}_

Copyright (c) 06/09/2023 Casey Hill
