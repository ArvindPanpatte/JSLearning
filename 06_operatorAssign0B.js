//step 1
function maleMarriageEligibility(gender,age,boyName){
    var x=(gender=="Male"&&age>=21)?`Hey ${boyName} you are eligible for Marriage`:`Hey ${boyName} you are not eligible for Marriage`;
    return x;
}
console.log(maleMarriageEligibility("Male",25,"Bill Gates"));
console.log(maleMarriageEligibility("Male",17,"Steve Jobs"));
console.log("*********");

//step 2
function femaleMarriageEligibility(gender,age,girlName){
    var x=(gender=="Female"&&age>=18)?`Hey ${girlName} you are eligible for Marriage`:`Hey ${girlName} you are not eligible for Marriage`;
    return x;
}
console.log(femaleMarriageEligibility("Female",16,"Jenifer"));
console.log(femaleMarriageEligibility("Female",27,"Malinda Gates"));
console.log("*********");



