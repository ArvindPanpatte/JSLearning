//step 1
function voteEligibility(age){
    if (age<0||age<18||age==undefined||age==null||isNaN(age)) {
        console.log(`Invalid data:${age}`);
    }
    if (age>=18 && age<100) {
        console.log("candidate is eligible for vote");
    }
}
voteEligibility(45);
voteEligibility(20);
voteEligibility(17);
voteEligibility(8);
voteEligibility(-10);
voteEligibility(200);
voteEligibility(0);
voteEligibility(NaN);
voteEligibility(null);
voteEligibility(undefined);
console.log("********************")
//step2
function gradeCalculation(marks){
    if (marks<=0||marks>100||(typeof makrs!="number")) {
        console.log(`Please provide the valid marks--${marks}`);
    }
    if (marks>=90) {
        console.log(`Funtastic marks ${marks}, your grade is A+`);
    }
    if(marks>=75 && marks<90){
        console.log(`Excellent marks ${marks}, your grade is A`);
    }
    if (marks>=50 && marks<75) {
        console.log(`Good marks ${marks}, your grade is B`);
    }
    if (marks>=35 && marks<50) {
        console.log(`Marks is ${marks}, your grade is C,Need improvement`);
    }
  
}
gradeCalculation(0);
gradeCalculation(150);
gradeCalculation(98);
gradeCalculation(80);
gradeCalculation(90);
gradeCalculation(29);
gradeCalculation(64);
gradeCalculation(49);
gradeCalculation("91");
gradeCalculation("Eighty");
gradeCalculation(NaN);
gradeCalculation(null);




