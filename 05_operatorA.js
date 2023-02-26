function squareOfWordLength(value){
    console.log(`Given string is:"${value}"\nLength of ${value}string is:${value.length}\nSquare of given string is:${value.length**2}`);
    console.log("________________________________________________");
}
squareOfWordLength("Java Script");
squareOfWordLength("Google Chrome");
squareOfWordLength("Devlopers Smart");

function dev1(){
    var givenString="I am Angular Developer";
    console.log(`Given String :\t${givenString}\nGiven String Length :\t${givenString.length}`);
    var x=givenString.length/givenString.split(" ").length;
    console.log(`Given String length divide by total numbers in that string:${x}`);
    var y=givenString.length*givenString.split(" ").length;
    console.log(`Given String length multiply by total numbers in that string:${y}`);
 }
dev1();

