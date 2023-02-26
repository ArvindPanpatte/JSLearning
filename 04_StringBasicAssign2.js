function stringHandsOn(){
    var handsOnString="     Hey you are doing good,keep it up       ";
    console.log("Given String: ",handsOnString);
    console.log("Length of given string: ",handsOnString.length);
    console.log("Remove the leading & tailing extra spaces of given string:",handsOnString.trim(),"\nLength of given string:",handsOnString.length,"\nLength of trimmed string:",handsOnString.trim().length);
    
    var count=handsOnString.length-handsOnString.trim().length;
    console.log("Total number of extra spaces removed count:",count);

    var handsOnStringAfterTrim=handsOnString.trim();
    console.log("First char of given string after trim:",handsOnStringAfterTrim.charAt(0),"\nLast char of given string after trim:",handsOnStringAfterTrim.charAt(handsOnStringAfterTrim.length-1));

    console.log("Count of total words available in given trimmed string:",handsOnStringAfterTrim.split(" ").length);

    console.log("Index of char good in given string:",handsOnStringAfterTrim.indexOf("good"));

    console.log("substring starting from index 22 to end:",handsOnStringAfterTrim.slice(22,33));
    console.log("is string ends with word up:",handsOnStringAfterTrim.includes('up'));
    console.log("is string starting with word Hey:",handsOnStringAfterTrim.includes('Hey'));
    
}
stringHandsOn();