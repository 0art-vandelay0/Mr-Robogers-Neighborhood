# Mr. Roboger's Neighborhood

#### By Casey Hill

#### :robot: Give Mr. Roboger a number and he will return a greeting. :robot:

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

## **Test Cases**

Describe: mrReplace()

1. Test: "It will replace user input number containing the number 1 with 'Beep!'"<br>
   Code:<br>
   const userNum = "10"<br>
   mrReplace(userNum)<br>
   Expected Output: ["Beep!"]<br>

2. Test: "It will replace user input number containing the number 2 with 'Boop!'"<br>
   Code:<br>
   const userNum = "22"<br>
   mrReplace(userNum)<br>
   Expected Output: ["Boop!"]

3. Test: "It will replace user input number containing the number 2 with 'Boop!'"<br>
   Code:<br>
   const userNum = "3"<br>
   mrReplace(userNum)<br>
   Expected Output: ["Won't you be my neighbor?"]

4. Test: "It will replace a number containing 1 if a 2 is present"<br>
   Code:<br>
   const userNum = "12"<br>
   mrReplace(userNum)<br>
   Expected Output: ["Boop!"]

5. Test: "It will replace a number containing 2 if a 3 is present"<br>
   Code:<br>
   const userNum = "32"<br>
   mrReplace(userNum)<br>
   Expected Output: ["Won't you be my neighbor?"]

6. Test: "It will replace a number in the count list containing 1, 2, or 3 with 'Beep', 'Boop!', or 'Won't you be my neighbor'"<br>
   Code:<br>
   const userNum = "14"<br>
   mrReplace(userNum)<br>
   Expected Output: [0, Beep!, Boop!, Won't you be my neighbor?, 4, 5, 6, 7, 8, 9, Beep!, Beep!, Boop!, Won't you be my neighbor?, Beep!]

## License

Please contact caseyfhill1@gmail.com with any the following:

- Found bugs :lady_beetle:
- Alterations and improvements
- General Questions
- Any contributions you would like to make! :old_key:

Copyright (c) 06/09/2023 Casey Hill
