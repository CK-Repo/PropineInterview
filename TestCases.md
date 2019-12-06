# UI Testcases
- Url Should Launch Sucessfully
- Clicking on Propine Logo should go to home page and data will get cleared.
- Tabbing should work according to the tabindex
- enter or space button should click the submit button when the focus is on the button
- Copy paste should be working from one field to other
- After Clicking on Submit button the First number and second number should not get cleared.
- Cross Broweser Testing [Mozilla and Chrome]

# Positive Cases
- Should be able to add two positive integers numbers
- Should be able to add a negative integer to a positive floating point number
- Should be able to add a floating[Decimal] point number to an integer
- Should be able to add an integer to a floating point number
- Should be able to add two floating[Decimal] point numbers
- Should be able to add a negative integer and zero
- Should be able to add zero and a positive integer
- Should be able to add a negative integer with a positive number
- Should be able to add two large positive integers
- Should be able to add a negative floating point and a positive integer


# Negative cases
- Fields Should not allow text 
- Fields Should not allow Special Characters other than + - . 
- Fields should not allow more than one + - .
- Should not allow multiple zeros as input
- Should not allow multiple zeros before a decimal mark
- Should not allow a zero before another digit of input
- Should not allow a double negation

# Edge Cases
- Result is not Correct if enter First number more than 16 digit and Second number can be anythig from 1 to >16 digit
- Result is not Correct if enter Second number more than 16 digit and First number can be anythig from 1 to >16 digit
- should give the correct result when user enters space or text or special characters in the fields

# security Cases
- Make sure Cross-site Scripting is not allowed in the site.

