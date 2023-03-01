console.log("1.Write a program to print 5 to 15 numbers by incrementing 1\n");
for (let index = 5; index <=15; index++){
    console.log(index);
}

console.log("\n2.Write a program to print numbers from 50 to 40 by decrementing 1\n");
for (let index = 50; index >=40; index--){
    console.log(index);
}

console.log("\n3.Write a program to print first 15 odd numbers\n");
for (let index = 1; index <=15; index++) {
    if (index%2==1) {
        console.log(index);
    }  
}

console.log("\n4.Write a program to print first 10 even numbers\n");
for (let index = 1; index <=10; index++) {
    if (index%2==0) {
        console.log(index);
    }
}

console.log("\n5.Write a program to print table of 5 \n");
for (let index = 5; index <=50; index=index+5) {
    console.log(index);
}

console.log("\n6.Write a program to print table of 10\n");
for (let index = 10; index <=100; index=index+10) {
    console.log(index);
}

console.log("\n7.Write a program to print table of 10 in reverse order\n");
for (let index =100; index >=10; index=index-10) {
    console.log(index);
    
}
