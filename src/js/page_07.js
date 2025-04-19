////// Clock. Calendar. Date

const date07 = new Date(); // Це об'ект дати
// console.log('jast date', date07);
// console.log(Date.now()); //Юникс час

const nameOfMonth = ['Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень', 'Липень', 'Серпень', 'Вересень', 'Жовтень', 'Листопад', 'Грудень'];
// console.log(date07.getMonth()); // 3
// console.log(nameOfMonth[date07.getMonth()]); // Квітень
 
const nameOfDay = ['Неділя', 'Понеділок', 'Вівторок', 'Середа', 'Четвер', 'П`ятниця', 'Субота'];
console.log(date07.getDay()); // 6
// console.log(nameOfDay[date07.getDay()]); // Субота
//
//
//
const box = document.querySelector('.js-clock__box07');
const titleTimer = document.querySelector('.js-timer');
const boxDisappear = document.querySelector('.box_disappear');
// console.log(box);
// console.log(titleTimer);
// console.log(boxDisappear);
fun();

function fun(){
    let counter = 11;
setTimeout(() => {
    titleTimer.textContent = ' ';
    box.style.display = 'block';
    boxDisappear.style.visibility = 'hidden';
    const id = setInterval(() => {
        counter -= 1;
        titleTimer.textContent = counter;
        
        if(!counter){
            clearInterval(id);
            titleTimer.innerHTML = '&#10060;';
            titleTimer.addEventListener('click', onClick);
            // box.style.display = 'none';
        }
    }, 1000);
}, 3000);
};

function onClick() {
    box.style.display = 'none';
    boxDisappear.style.visibility = 'visible';
    // counter = 11;
    fun();
}
////// Calendar. Digital clock
const day = document.querySelector('.date-day');
const date = document.querySelector('.date');
const month = document.querySelector('.date-month');
const year = document.querySelector('.date-year');
const sec = document.querySelector('.date-sec');
const digitalClock = document.querySelector('.digital-clock');

//////Arrows
const arrowSecond = document.querySelector('.clock-seconds__arrow');
const arrowMinute = document.querySelector('.clock-minutes__arrow');
const arrowHour = document.querySelector('.clock-hours__arrow');
const arSecSmall = document.querySelector('.clock-seconds__arrow_small');
// console.log(arrowSecond);
// console.log(arrowMinute);
// console.log(arrowHour);

// console.log(day);
// console.log(date);
// console.log(month);
// console.log(year);

const currentTime = new Date();
// const currentDay = nameOfDay[currentTime.getDay()];
// const currentDate = currentTime.getDate();
// const currentMonth = nameOfMonth[currentTime.getMonth()];
// const currentYear = currentTime.getFullYear();

// const currentHours = currentTime.getHours();
// const currentMinutes = currentTime.getMinutes();
// const currentSeconds = currentTime.getSeconds();

// // console.log(currentDay);
// // console.log(currentDate);
// // console.log(currentMonth);
// // console.log(currentYear);
// // console.log(currentHours);
// // console.log(currentMinutes);

// day.textContent = currentDay;
// date.textContent = currentDate;
// month.textContent = currentMonth;
// year.textContent = currentYear;

setInterval(() => {
    const currentTime = new Date();
    const currentDay = nameOfDay[currentTime.getDay()];
    const currentDate = currentTime.getDate();
    const currentMonth = nameOfMonth[currentTime.getMonth()];
    const currentYear = currentTime.getFullYear();
    
    const currentHours = currentTime.getHours();
    const currentMinutes = currentTime.getMinutes();
    const currentSeconds = currentTime.getSeconds();

    const changeSeconds = 360/60 * currentSeconds; // 6 градусів на секунду
    const changeMinutes = 360/60 * currentMinutes; // 6 градусів на хвилину
    const changeHours = 360/12 * currentHours + (360 / 12 / 60) * currentMinutes;
    // console.log(currentMinutes);
    // console.log(changeMinutes);
    // console.log(changeSecond);

    const formatTime = `${currentHours.toString().padStart(2, '0')}:${currentMinutes.toString().padStart(2, '0')}:${currentSeconds.toString().padStart(2, '0')}`;
    // console.log(formatTime);
    
    day.textContent = currentDay;
    date.textContent = currentDate;
    month.textContent = currentMonth;
    year.textContent = currentYear;
    sec.textContent = currentSeconds;
    digitalClock.textContent =`Поточний час: ${formatTime}` ;

    arrowSecond.style.transform = `rotate(${changeSeconds}deg)`;
    arrowMinute.style.transform = `rotate(${changeMinutes}deg)`;
    arrowHour.style.transform = `rotate(${changeHours}deg)`;
    arSecSmall.style.transform = `rotate(${changeSeconds}deg)`;///small
    
}, 1000);


