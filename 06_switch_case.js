function monthOfYear(monthNumber){
    switch (monthNumber) {
        case 1:
            console.log("JANUARY");
            break;
        case 2:
            console.log("FEBRUARY");
            break;
        case 3:
            console.log("MARCH");
            break;
        case 4:
            console.log("APRIL");
            break;
        case 5:
            console.log("MAY");
            break;
        case 6:
            console.log("JUNE");
            break;
        case 7:
            console.log("JULLY");
            break;
        case 8:
            console.log("AUGUST");
            break;
        case 9:
            console.log("SEPTEMBER");
            break;
        case 10:
            console.log("OCTOBER");
            break;
        case 11:
            console.log("NOVEMBER");
            break;
        case 12:
            console.log("DECEMBER");
            break;
        
        default:
            console.log(`Invalid month number:${monthNumber}`);
            break;
    }
    //console.log("***********************");
}
monthOfYear();
monthOfYear(2);
monthOfYear(5);
monthOfYear(12);
monthOfYear(15);
monthOfYear(100);



