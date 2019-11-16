var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacters = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "}", "[", "]", "?", "/", "<", ">"];

function passwordSelection () {
    var length = prompt("How many characters would you like your password to contain?");

    if (length < 8) {
        alert("Password length must be at least 8 characters");
        return;
    }

    if (length > 128) {
        alert("Password length much be less than 129 characters");
        return;
    }

var addSpecialCharacters = confirm("Click ok to confirm adding special characters");
var addNumbers = confirm("Click ok to confirm using numbers");
var addLowerCase = confirm("Click ok to confirm using lowercase characters");
var addUpperCase = confirm("Click ok to confirm using uppercase characters");

var passwordSelection = {
    length,
    addSpecialCharacters,
    addNumbers,
    addLowerCase,
    addUpperCase,
};

return passwordSelection;

}

function generatePassword () {
 
}