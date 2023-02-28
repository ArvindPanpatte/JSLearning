function jobEligibility(gradScore,hscScore,sscScore,CandidateName){
    var x=(gradScore>=70||hscScore>=80||sscScore>90)?`Congrats ${CandidateName} you are eligible for TCS interview.`:`Unfortunately ${CandidateName} you are not eligible for TCS interview.`;
    console.log(x,"\n");
}
jobEligibility(80,86,90,"Arvind");
jobEligibility(70,65,55,"Mahesh");
jobEligibility(60,79,88,"Karan");
