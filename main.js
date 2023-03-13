const form = document.querySelector('.form');
const input = document.getElementById('input');
const button = document.querySelector('.button');
const output = document.querySelector('.output');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const dateInput = input.value;
    const date = new Date(dateInput);
    const yearInput = date.getFullYear();
    const yearNow = new Date().getFullYear();
    let yearDif = yearInput - yearNow;
    let yearDif2 = (yearInput - yearNow) - 1;
    yearDif = convertYear(yearDif);
    console.log(yearDif);

    const monthInput = date.getMonth();
    const monthNow = new Date().getMonth();
    let monthDif = monthInput - monthNow;
    monthDif = convertMonth(monthDif, yearDif2);

    console.log(monthDif);

    const dayInput = date.getDate();
    const dayNow = new Date().getDate();
    let dayDif = dayInput - dayNow;
    if(dayDif === 1) {
        dayDif = dayDif + ' день';
    } else if(dayDif === 2 || dayDif === 3 || dayDif === 4) {
        dayDif = dayDif + ' дня';
    } else {
        dayDif = dayDif + ' дней';
    }
    console.log(dayDif);

    output.textContent = `До введенной вами даты осталось: ${yearDif} ${monthDif} ${dayDif}`;
})

function convertYear(yearDif) {
    if(yearDif === 1) {
        yearDif = yearDif + ' год';
    } else if(yearDif === 2 || yearDif === 3 || yearDif === 4) {
        yearDif = yearDif + ' года';
    } else if(yearDif === 0) {
        yearDif = '';
    } else {
        yearDif = yearDif + ' лет';
    }
    return yearDif;
}

function convertMonth(monthDif, yearDif2) {
    
    if(monthDif < 0) {
        yearDif = convertYear(yearDif2);
    } else if (monthDif === 1) {
        monthDif = monthDif + ' месяц';
    } else if(monthDif === 2 || monthDif === 3 || monthDif === 4) {
        monthDif = monthDif + ' месяца';
    } else if(monthDif === 0) {
        monthDif = '';
    } else {
        monthDif = monthDif + ' месяцев';
    }
    return monthDif;
}
