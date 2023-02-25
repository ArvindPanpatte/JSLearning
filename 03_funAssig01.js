//step 1 
console.log("***Two functions with no arguments and no return value***");
function myName(){
    console.log("My Name is Arvind Panpatte");
}
myName();

function myAge(){
    console.log("My Age is 31 years old");
}
myAge();
console.log("____________________________");

//step2
console.log("***Personal Details Function***");
function personalDetails(firstName,lastName,collegeName){
console.log("My First Name:-",firstName,"\t\tLast Name:-",lastName,"\t\tCollege Name:-",collegeName);
}
personalDetails("Arvind","Panpatte","Dr.D.Y.Patil CS & Mgmt College Akurdi,Pune");
console.log("____________________________");

//step3
console.log("***Swapping Variables Function***");
function swapValuesDude(value1,value2){
    console.log("Before Swap:",value1,"\t",value2);
    var temp=value1;
    value1=value2;
    value2=temp;
    console.log("After Swap:",value1,"\t",value2);
}
swapValuesDude("Virat","Anushka");
console.log("____________________________");
swapValuesDude(1000,2000);
console.log("____________________________");

//step4
console.log("***Function with 3 parameters & return addition***");
function addThreeValues(num1,num2,num3){
    //var sum=num1+num2+num3;
    console.log(sum=num1+num2+num3);
}
addThreeValues(10,10.52,10.28);
addThreeValues("Hello","Good","Morning");