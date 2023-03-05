// function factorialofWordsCount(str){
//     if (str==null || str==undefined || str==isNaN) {
//         str="Invalid String Data."
//         return str;
//     }

//     for (let index = 0; index <=str.length; index++) {
//     //     console.log(str.charAt(index));
//         // console.log(`${str.charAt(index)}`);
//        // var x=str.charAt(index);
//      //   console.log("\t",str.charAt(index));
//          }
//     console.log( x);
// }
// factorialofWordsCount("Revision is the mother of success");

// //Assignment B: WAP to find factorial of a given string words count
// function factorialofWordsCount(str){
//     var count=1,fact=1;
//     if(str==null || str==undefined || str==isNaN){
//         str="Invalid string";
//         count=0;
//         fact=0;
//     }else{

//        //The below "for loop" is for string traversal & count the words in that string
//         for (let index = 0; index <=str.length-1; index++) {
//             if(str.charAt(index)==" "){
//             count++;
//         }
//     }
//         //The below "for loop" is for finding out the factorial of the words count..
//         for (let index = 1; index <=count; index++) {
//         fact=fact*index;
//         }
//     }
//     console.log(`Given String :"${str}"\nWords Count : ${count}\nFactorial : ${fact}\n***`);
// }
// factorialofWordsCount("Revision is the mother of success");
// factorialofWordsCount("We never fail, we always learn");
// factorialofWordsCount("Arvind Kishanrao panpatte");
// factorialofWordsCount("");
// factorialofWordsCount(null);
// factorialofWordsCount(undefined);


//Assignment B: WAP to find factorial of a given string words count
function factorialofWordsCount(str){
    var count=1,fact=1;
    if(str==null || str==undefined || str==isNaN){
      console.log(`Given string is ${str} & it is invalid\n`);
    }else{

       //The below "for loop" is for string traversal & count the words in that string
        for (let index = 0; index <=str.length-1; index++) {
            if(str.charAt(index)==" "){
            count++;
        }
    }
        //The below "for loop" is for finding out the factorial of the words count..
        for (let index = 1; index <=count; index++) {
        fact=fact*index;
        }
    //  console.log(`Given String :"${str}"\nWords Count : ${count}\nFactorial : ${fact}\n***`);
        console.log(`Given string is valid : "${str}" & Total number of words is ${count} & it's factorial is : ${fact}\n`);   
    }
    
}
factorialofWordsCount("Revision is the mother of success");
factorialofWordsCount("We never fail, we always learn");
factorialofWordsCount("Arvind Kishanrao panpatte");
factorialofWordsCount("");
factorialofWordsCount(null);
factorialofWordsCount(undefined);


