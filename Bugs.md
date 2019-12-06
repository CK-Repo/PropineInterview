# Defects List

## Defect 1: When there is no numbers are entered, Clicking on Submit Button should throw an error message (or) submit button should be disabled
Steps to Reproduce:

1. Open the URL https://vast-dawn-73245.herokuapp.com/submit
2. Leave the Numbers Fields Blank
3. Click on Submit Button
- Expected Functionality: Clicking on Submit Button should throw an error message saying numbers cannot be blank (or) submit button should be disabled
- Current Functionality: Clicking on submit button perform addition and result is getting showed as NaN

## Defect 2: User should not be  allowed to Enter text in the NumericBox fields
Steps to Reproduce:

1. Open the URL https://vast-dawn-73245.herokuapp.com/submit
2. Enter a random text in First NUmber Field
3. Enter a random text in Second Number NUmber Field
4. Click on Submit Button
- Expected Functionality: User should not be allowed to enter text
- Current Functionality: User is allowed to enter text

## Defect 3: User shold not be allowed to Enter text[special char] in the NumericBox fields except '+' & '-'
Steps to Reproduce:

1. Open the URL https://vast-dawn-73245.herokuapp.com/submit
2. Enter a 5*wer6 in First NUmber Field
3. Enter a 6+223abc in Second Number NUmber Field
4. Click on Submit Button
- Expected Functionality: Should throw an error saying invalid data (or) submit button should be disabled because the field contains invalid data
- Current Functionality: Its adding the first char of each number thst user enters. the result for the above data is dislayed as 11

## Defect 4: User should be allowed to enter + and - as as the prefix to the input number
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
2. leave First NUmber Field blank
3. Enter a number in Second Number NUmber Field
4. Click on Submit Button
- Expected Functionality: Should consider the blank field as zero and should perform addition [Vise Versa]
- Current Functionality: submit action is getting triggered and the result for the above data is dislayed as NaN

## Defect 6: user should not be allowed to enter more than one '.' in the numeric fields
Steps to Reproduce:

1. Open the URL https://vast-dawn-73245.herokuapp.com/submit
2. Enter 5.....3 in First NUmber Field
3. Enter 5....6 in Second Number NUmber Field
4. Click on Submit Button
- Expected Functionality: Should throw an error saying invalid data
- Current Functionality: submit action is getting triggered and the result for the above data is dislayed as 10 [its taking the first value and adding those]

## Defect 7: User is able to enter number and space for example '34 34' or '34 @#$' or '34 abc' [Edge Case] 
- Expected Functionality : User should not be allowd to enter space
- Current Functionality : it allowing user to enter space and text and special char, and adding the first numbers entered.
- result is for the input 34 34 + 34 @#$ is 68 which is wrong.

## Defect 8: correct output is calculated with 16 digit value. wrobg result is getting calculated if the number is >16digit. [Edge Case]
- Current Functionality: Enter First and second number as 111111111111111111 and  result for this is 222222222222222200 which is wrong
- Expected Fuctionaity : result should be 2.2222222e+17

## Defect 9:  In chrome the Button is 'Submit' and In Mozilla the Buttom is displayed as 'Submit Query'  




