function check_leap_year(leap_year){
    if (leap_year==null || leap_year==undefined || typeof leap_year!="number" || isNaN(leap_year)) {
        console.log("Please provide valide year..!");
    }
    if (((leap_year % 4 == 0) && (leap_year % 100 != 0)) || (leap_year % 400 == 0)) {
        console.log(`${leap_year} is a leap year`);   
    }
}
check_leap_year(2020);
check_leap_year(1999);
check_leap_year(1600);
check_leap_year(2022);
check_leap_year(1945);
check_leap_year(null);
check_leap_year("Twenty Twenty");
check_leap_year(undefined);
check_leap_year(NaN);
check_leap_year(1750);

