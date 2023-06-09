# _{Application Name}_

#### By _**{List of contributors}**_

#### _{Brief description of application}_

## Technologies Used

- _List all_
- _the major technologies_
- _you used in your project_
- _here_

## Description

_{This is a detailed description of your application. Give as much detail as needed to explain what the application does as well as any other information you want users or other developers to have.}_

## Setup/Installation Requirements

- _This is a great place_
- _to list setup instructions_
- _in a simple_
- _easy-to-understand_
- _format_

_{Leave nothing to chance! You want it to be easy for potential users, employers and collaborators to run your app. Do I need to run a server? How should I set up my databases? Is there other code this application depends on? We recommend deleting the project from your desktop, re-cloning the project from GitHub, and writing down all the steps necessary to get the project working again.}_

## Known Bugs

- _Any known issues_
- _should go here_

## **Test Cases**

Describe: countUp()

1. Test: "It will return a count that increments by 1 from 0 to the userNum"
   Code:
   const userNum = "5"
   mrReplace(userNum)
   Expected Output: [0, 1, 2, 3, 4, 5]

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
   const userNum = "232"
   mrReplace(userNum)
   Expected Output: ["Won't you be my neighbor?"]

6. Test: "It will return the count from 0 to userNum"
   Code:
   const userNum = "7"
   mrReplace(userNum)
   Expected Output: [1, 2, 3, 4, 5, 6, 7]

## License

_{Let people know what to do if they run into any issues or have questions, ideas or concerns. Encourage them to contact you or make a contribution to the code.}_

Copyright (c) _date_ _author name(s)_
