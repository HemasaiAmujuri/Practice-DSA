// Valid palindrome” usually means you also clean the string (spaces, punctuation, case), while “palindrome string” is the raw exact string.


function ValidPalindrome(str) {
    let rev = "";
    let clean = "";

    str = str.toLowerCase();

    for (let char of str) {
        if ((char >= "a" && char <= "z") || (char >= "0" && char <= "9")) {
            clean += char;
        }
    }

    for (let i = clean.length - 1; i >= 0; i--) {
        rev += clean[i];
    }

    if (rev === clean) {
        console.log("It is a valid palindrome");
    } else {
        console.log("It is not a valid palindrome");
    }
}

let str ="A man, a plan, a canal: Panama";
let str1 = "No lemon, no melon"
ValidPalindrome(str); 
ValidPalindrome(str1);
