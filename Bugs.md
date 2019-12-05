# Defects List

## Defect 1: When there is no numbers are entered, Clicking on Submit Button should throw an error message (or) submit button should be disabled
Steps to Reproduce:

1. Open the URL https://vast-dawn-73245.herokuapp.com/submit
2. Leave the Numbers Fields Blank
3. Click on Submit Button
- Expected Functionality: Clicking on Submit Button should throw an error message saying numbers cannot be blank (or) submit button should be disabled
- Current Functionality: Clicking on submit button perform addition and result is getting showed as NaN

## Defect 2: User is allowed to Enter text in the NumericBox fields
Steps to Reproduce:

1. Open the URL https://vast-dawn-73245.herokuapp.com/submit
2. Enter a random text in First NUmber Field
3. Enter a random text in Second Number NUmber Field
4. Click on Submit Button
- Expected Functionality: User should not be allowed to enter text
- Current Functionality: User is allowed to enter text

## Defect 3: User is allowed to Enter text[special char] in the NumericBox fields
Steps to Reproduce:

1. Open the URL https://vast-dawn-73245.herokuapp.com/submit
2. Enter a 5*wer6 in First NUmber Field
3. Enter a 6+223abc in Second Number NUmber Field
4. Click on Submit Button
- Expected Functionality: Should throw an error saying invalid data (or) submit button should be disabled because the field contains invalid data
- Current Functionality: Its adding the first char of each number thst user enters. the result for the above data is dislayed as 11

## Defect 4: User should be allowed to enter + and - as as the prefix to the inpud number
Steps to Reproduce:

1. Open the URL https://vast-dawn-73245.herokuapp.com/submit
2. Enter as -5+ in First NUmber Field
3. Enter a -5+ in Second Number NUmber Field
4. Click on Submit Button
- Expected Functionality: Should throw an error saying invalid data (or) submit button should be disabled because the field contains invalid data
- Current Functionality: Its adding the number thst user enters. the result for the above data is dislayed as -10

## Defect 5: Both the numbers should be mandatory to perform submit
Steps to Reproduce:

1. Open the URL https://vast-dawn-73245.herokuapp.com/submit
2. Enter blankdata in First NUmber Field
3. Enter a number in Second Number NUmber Field
4. Click on Submit Button
- Expected Functionality: Should throw an error saying first number missing and vise versa
- Current Functionality: submit action is getting triggered and the result for the above data is dislayed as NaN

