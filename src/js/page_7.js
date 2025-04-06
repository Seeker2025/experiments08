////// Date

const date07 = new Date(); // Это объект даты
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
console.log(box);
console.log(titleTimer);

let counter = 11;
setTimeout(() => {
    box.style.display = 'block';
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

function onClick() {
    box.style.display = 'none';
}

const day = document.querySelector('.date-day');
const date = document.querySelector('.date');
const month = document.querySelector('.date-month');
const year = document.querySelector('.date-year');
const sec = document.querySelector('.date-sec');
const digitalClock = document.querySelector('.digital-clock');

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

    const formatTime = `${currentHours.toString().padStart(2, '0')}:${currentMinutes.toString().padStart(2, '0')}:${currentSeconds.toString().padStart(2, '0')}`;
    console.log(formatTime);
    
    day.textContent = currentDay;
    date.textContent = currentDate;
    month.textContent = currentMonth;
    year.textContent = currentYear;
    sec.textContent = currentSeconds;
    digitalClock.textContent =`Поточний час: ${formatTime}` ;
    
}, 1000);


