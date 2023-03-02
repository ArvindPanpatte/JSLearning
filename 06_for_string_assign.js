
//step1:WAP to count the total number of vowels, 
console.log("******Step 1: Count the total number of vowels in given string******\n");
function vowelCheck(str){
    var count=0;
    const vowels=['a','e','i','o','u','A','E','I','O','U']
    for (let char of str){
        if (vowels.includes(char)) {
            count++;
        }
    }
    console.log(`The given string is : ${str}`);
    return count;
}
console.log(`Vowel count is: ${vowelCheck("JavaScript is the language Of Internet")}`);
console.log(`Vowel count is: ${vowelCheck("I am Angular Developer")}`);
console.log(`Vowel count is: ${vowelCheck("Hard work and commitment is the key of success")}\n`);

//step2:WAP to count the total number of characters available in the last word
console.log("*****Step 2: Count the total number of characters available in the last word******\n");
function lastWordCharsCount(str) {
    var count=0;
    for (let index =str.length-1; index >0; index--) {
        
        if (str.charAt(index)==" ") {
            break;
        }else{
            ++count;
        }
    }
    console.log(`The given string is: ${str}`);
    return count;
}
var x=lastWordCharsCount("India is my country");
console.log(`Total number of characters in last word is: ${x}`);










