// function factorialOfNum(fact){
//     var factorial=1;
//     if (fact==null || fact == undefined || fact == 0 ) {
//         console.log("Please enter the valid data...!"); 
       
    
//     for (let index = 1; index <=fact; index++) {
//             factorial=factorial*index;
//         }
    
//     return factorial;
//     }

// function factorialOfNum(fact) {
//     var factFind=1;
//     if (fact!=null) {
//         for (let index = 1; index<=fact; index++) {
//             factFind=factFind*index;
//         }
//     return factFind;
//     }else{
//         console.log("please enter valid data..!");
        
//    }
//     // return factFind;
// }

// function factorialOfNum(num){
    
//     if (num==null||num==undefined || num==isNaN) {
//         console.log(`Invalid data`);
//     }else{
//         var fact=1;
//         for (let index = 1; index <num; index++) {
//             fact=fact*index;
//         }
          
//     }
//     return fact;
//     }


//Assignment A: WAP to find Factorial of given number
function factorialOfNum(num){
    if(num==null || num==undefined || num==isNaN){
        num="Please enter valid data to calculate FACTORIAL.";
        return num;
    }
    if (num==0) {
        return num;
    }
    var fact=1;
    for (let index = 1; index <=num; index++) {
        fact=fact*index;
    }
    return fact;
}
console.log(`Factorial of 5 is : ${factorialOfNum(5)}`);
console.log(`Factorial of 3 is : ${factorialOfNum(3)}`);
console.log(`Factorial of 8 is : ${factorialOfNum(8)}`);
console.log(`Factorial of 9 is : ${factorialOfNum(9)}`);
console.log(`Factorial of 0 is : ${factorialOfNum(0)}\n`);
console.log(`Factorial of null is : ${factorialOfNum(null)}\n`);
console.log(`Factorial of undefined is : ${factorialOfNum(undefined)}\n`);
console.log(`Factorial of isNaN is : ${factorialOfNum(isNaN)}`);



