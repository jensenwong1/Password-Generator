# Password-Generator
Java Script Password Generator

1.  Created home page that will ask for user criteria.There are five basic criteria that will be checks.
    Length - between 8 and 128
    Check box for the following to indicate whether or not to include it in the final password.
        Uppercase, lowercase, numbers and special characters.
    Clicking on the generate password in the modal will create a completely random password.

2.  Password generation will consist of several 
    factors. This will include the use of the 
    unicode character set from the W3schools.com website.
    https://www.w3schools.com/html/html_charset.asp
    
    A random number is generated and multiplied by 26. Then 97 is added to gain a number
    between 97 and 122 to determine a lower case letter.
    A random number is generated and multiplied by 26. 65 is then added to that number for a number between 65 and 90 to determine an upper     case number.
    Another random number is used and then multiplied by 10 which is then added to 48 to obtain a number between 48 and 57 for a completely     random number.

3.  The characters are then added as a string to
    generate a random password for the user.
    
    The url to the final product is https://jensenwong1.github.io/Password-Generator-1/
    
    
