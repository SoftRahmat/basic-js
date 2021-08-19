function isLeapYear(year){
    if (year % 400 === 0 && year % 4 === 0){
        return true;
    }else{
        return false;
    }
}

const year = 2100;
const isMyYearLeapYear = isLeapYear(year);

console.log( "Is this leap year: ", isMyYearLeapYear);