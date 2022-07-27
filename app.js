

const miliSecInYear = 31557600000;
const miliSecondInMonth = 2629800000
const miliSecondInDay = 86400000



let birthdayIntervalId = undefined;
let ageIntervalId = undefined;





function start() {

    if (birthdayIntervalId !== undefined) clearInterval(intervalId1)
    birthdayTimeLeft()
    birthdayIntervalId = setInterval(() => {
        birthdayTimeLeft()
    }, 1000);

    // calculating how old is a person
    if (ageIntervalId !== undefined) clearInterval(intervalId2)
    currentAge()
    ageIntervalId = setInterval(() => {
        currentAge()
    }, 1000);

}


let = birthdayTimeLeft = () => {

    // console.log("inputDate : ", inputDate);
    // console.log("month : " , inputDate.getMonth())
    // console.log("date2 : " , new Date(inputDate  +"00:00:00"));
    let inputDate = document.querySelector(`#iDate`).value;
    let dateEntered = new Date(
        inputDate + " 00:00:00"
    );


    let today = new Date();

    console.log("inputDate: ", dateEntered);

    let presentBirthdayYear = dateEntered;

    presentBirthdayYear.setFullYear(today.getFullYear());
    console.log("presentBirthdayYear : ", presentBirthdayYear);
    presentBirthdayYear.setFullYear(presentBirthdayYear.getFullYear() + 1);

    console.log("presentBirthdayYear : ", presentBirthdayYear);

    birthdayDiffInMilliSec = presentBirthdayYear - today;
    console.log("birthdayDiffInMilliSec : ", birthdayDiffInMilliSec);


    let nextBirthdayInDays = Math.floor(birthdayDiffInMilliSec / miliSecondInDay);
    let nextBirthdayInDaysReminder = birthdayDiffInMilliSec % miliSecondInDay;

    let nextBirthdayInHours = Math.floor(nextBirthdayInDaysReminder / (1000 * 60 * 60));
    let nextBirthdayInHoursReminder = nextBirthdayInDaysReminder % (1000 * 60 * 60);

    let nextBirthdayInMinutes = Math.floor(nextBirthdayInHoursReminder / (1000 * 60));
    let nextBirthdayInMinutesReminder = nextBirthdayInHoursReminder % (1000 * 60);


    let nextBirthdayInSeconds = Math.floor(nextBirthdayInMinutesReminder / 1000);

    console.log(` your next birthday in : ${nextBirthdayInDays} days, ${nextBirthdayInHours} hours,
    ${nextBirthdayInMinutes} minutes and ${nextBirthdayInSeconds} seconds left
    in your next birthday`);
    
    // document.querySelector(`#birthday`).innerHTML =  ` your next birthday in : ${nextBirthdayInDays} days,
    //  ${nextBirthdayInHours} hours, ${nextBirthdayInMinutes} minutes and ${nextBirthdayInSeconds} seconds left
    // in your next birthday`;


    document.querySelector(`#bDays`).innerHTML = `<h1> ${nextBirthdayInDays} </h1> <h1> Day/s </h1>`
    document.querySelector(`#bHours`).innerHTML = `<h1> ${nextBirthdayInHours} </h1> <h1> Hour/s </h1>`
    document.querySelector(`#bMinutes`).innerHTML = `<h1> ${nextBirthdayInMinutes} </h1> <h1> Minute/s </h1>`
    document.querySelector(`#bSeconds`).innerHTML = `<h1> ${nextBirthdayInSeconds} </h1> <h1> Second/s </h1>`


    // document.querySelector("#days").innerHTML = nextBirthdayInDays;
    // document.querySelector("#hours").innerHTML = nextBirthdayInHours;
    // document.querySelector("#minutes").innerHTML = nextBirthdayInMinutes;
    // document.querySelector("#seconds").innerHTML = nextBirthdayInSeconds;

}



let currentAge = () => {

    let inputDate = document.querySelector(`#iDate`).value;

    let dateEntered = new Date(inputDate + " 00:00:00");

    let today = new Date();

    console.log("inputDate: ", dateEntered);

    let diffInMilliSec = today - dateEntered;


    let ageInYear = Math.floor(diffInMilliSec / miliSecInYear);
    let reminderOfYearAge = diffInMilliSec % miliSecInYear;

    let ageInMonth = Math.floor(reminderOfYearAge / miliSecondInMonth);
    let reminderOfMonthAge = reminderOfYearAge % miliSecondInMonth;

    let ageInDay = Math.floor(reminderOfMonthAge / miliSecondInDay);
    let ageInDayReminder = reminderOfMonthAge % miliSecondInDay;

    let ageInHour = Math.floor(ageInDayReminder / (1000 * 60 * 60));
    let ageInHourReminder = ageInDayReminder % (1000 * 60 * 60);

    let ageInMinute = Math.floor(ageInHourReminder / (1000 * 60));
    let ageInMinuteReminder = ageInHourReminder % (1000 * 60);

    let ageInSecond = Math.floor(ageInMinuteReminder / 1000);

    console.log(`you are ${ageInYear} years, ${ageInMonth} month, ${ageInDay}
    days, ${ageInHour} hour, ${ageInMinute} minutes
    and ${ageInSecond} seconds old`);

    
   

    document.querySelector(`#ageYears`).innerHTML = `<h1 class="ageNum"> ${ageInYear} </h1> <h1 class="ageHead"> Year/s </h1> ` ;
    document.querySelector(`#ageMonths`).innerHTML = `<h1 class="ageNum"> ${ageInMonth} </h1> <h1 class="ageHead"> Month/s </h1> ` ;
    document.querySelector(`#ageDays`).innerHTML = `<h1 class="ageNum"> ${ageInDay} </h1> <h1 class="ageHead"> Day/s </h1> ` ;
    document.querySelector(`#ageHours`).innerHTML = `<h1 class="ageNum"> ${ageInHour} </h1> <h1 class="ageHead"> Hour/s </h1> ` ;
    document.querySelector(`#ageMinutes`).innerHTML = `<h1 class="ageNum"> ${ageInMinute} </h1> <h1 class="ageHead"> Minute/s </h1> ` ;
    document.querySelector(`#ageSeconds`).innerHTML = `<h1 class="ageNum"> ${ageInSecond} </h1> <h1 class="ageHead"> Second/s </h1> ` ;


}


let today = new Date();
console.log("today : ", today);


let sToday = JSON.stringify(today);
console.log("sToday : ", sToday);

let date = today.getDate();
console.log(date);