function greaterNumber(value1,value2){
    var result=value1>value2?`Number ${value1} is greater`:`Number ${value2} is greater`;
    console.log(result);
    console.log("**************");
}
greaterNumber(10,-10);
greaterNumber(800,899);

function isEvenOrOddNum(value1){
    var result=console.log((value1%2==0)?`Number ${value1} is EVEN`:`Number ${value1} is ODD`);
}
isEvenOrOddNum(29);
console.log("*********");

function fun(word){
    var result=(word%2==0);
    return result;
}
console.log(fun(15));

function wordLength(word){
    var wordLength=word.length;
    var result=wordLength%2==0?`The word "${word}" length is EVEN`:`The word "${word}" length is ODD`;
    return result;
}
console.log(wordLength("Java Script"),"\n");
console.log(wordLength("Developer"),"\n");
console.log(wordLength("Google"),"\n");


















