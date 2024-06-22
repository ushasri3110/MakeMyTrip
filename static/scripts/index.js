const data = [
    {
        id: 1,
        city: 'Mumbai,India',
        airport: 'Chatrapati Shivaji International Airport',
        code: 'BOM'
    },
    {
        id: 2,
        city: 'New Delhi,India',
        airport: 'Indira Gandhi International Airport',
        code: 'DEL'
    },
    {
        id: 3,
        city: 'Bangkok,Thailand',
        airport: 'Bangkok Airport',
        code: 'BKK'
    },
    {
        id: 4,
        city: 'Benguluru,India',
        airport: 'Benguluru International Airport',
        code: 'BLR'
    },
    {
        id: 5,
        city: 'Chennai,India',
        airport: 'Chennai International Airport',
        code: 'MAA'
    },
    {
        id: 6,
        city: 'Hyderabad,India',
        airport: 'Rajiv Gandhi International Airport',
        code: 'HYD'
    },
    {
        id: 7,
        city: 'Kolkata,India',
        airport: 'Calcutta International Airport',
        code: 'CCU'
    },
    {
        id: 8,
        city: 'Kuala Lumpur,Malaysia',
        airport: 'Kuala Lumpur International Airport',
        code: 'KUL'
    },
    {
        id: 9,
        city: 'Singapore,Singapore',
        airport: 'Singapore Changi Airport',
        code: 'SIN'
    },
    {
        id: 10,
        city: 'Tokyo,Japan',
        airport: 'Narita International Airport',
        code: 'NRT'
    }
]
function createDropdownItem(dataItem, type) {
    const item = document.createElement('div');
    item.className = 'dropdown-item';
    item.innerHTML = `
        <div><img src="static/images/icons8-flight-96.png" alt="flight icon"></div>
        <div class="airport-details">
            <div>${dataItem.city}</div>
            <div class="small">${dataItem.airport}</div>
        </div>
        <div>${dataItem.code}</div>
    `;
    item.addEventListener('mousedown', (e) => {
        const cityName = document.getElementById(`${type}-airport-city`);
        const airportName = document.getElementById(`${type}-airport-name`);
        cityName.textContent = dataItem.city;
        airportName.textContent = dataItem.airport;
        document.getElementById(`${type}-dropdown`).style.display = 'none';
    });
    return item;
}

function populateDropdown(dropdown, type) {
    data.forEach(dataItem => {
        const dropdownItem = createDropdownItem(dataItem, type);
        dropdown.appendChild(dropdownItem);
    });
}

const fromDropdown = document.getElementById('from-dropdown');
const toDropdown = document.getElementById('to-dropdown');

populateDropdown(fromDropdown, 'from');
populateDropdown(toDropdown, 'to');
let displayFrom = false
document.getElementById('from-inputField').addEventListener('click', () => {
    displayFrom = !displayFrom;
    if (displayFrom == true) {
        fromDropdown.style.display = 'block';
    } else {
        fromDropdown.style.display = 'none';
    }
});
let displayTo = false;
document.getElementById('to-inputField').addEventListener('click', () => {
    displayTo = !displayTo;
    if (displayTo == true) {
        toDropdown.style.display = 'block';
    } else {
        toDropdown.style.display = 'none';
    }
});

const dateHeading = document.getElementById('date')
const weekdayParagraph = document.getElementById('weekday')
document.addEventListener('DOMContentLoaded', () => {
    const today = new Date();
    const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    const weekdayOptions = { weekday: 'long' };
    const formattedDate = today.toLocaleDateString(undefined, dateOptions);
    const formattedWeekday = today.toLocaleDateString(undefined, weekdayOptions);
    dateHeading.textContent = formattedDate;
    weekdayParagraph.textContent = formattedWeekday;
    returnDateHeading.textContent = formattedDate;
    returnWeekday.textContent=formattedWeekday
});
const calendar = document.querySelector('.calendar');
dateHeading.addEventListener('click', () => {
    calendar.style.display = 'block';
})
const dateInput = document.getElementById('departure-date');
dateInput.addEventListener('change', () => {
    const inputDateValue = dateInput.value;
    const [year, month, day] = inputDateValue.split('-');
    const selectedDate = new Date(year, month - 1, day);
    const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    const weekdayOptions = { weekday: 'long' };
    const formattedDate = selectedDate.toLocaleDateString(undefined, dateOptions);
    const formattedWeekday = selectedDate.toLocaleDateString(undefined, weekdayOptions);
    dateHeading.textContent = formattedDate;
    weekdayParagraph.textContent = formattedWeekday;
    calendar.style.display = 'none';
});

// return date
const returnDateHeading=document.getElementById('return-date');
const returnWeekday=document.getElementById('return-weekday');

const returnCalendar=document.querySelector('.return-calendar');
returnDateHeading.addEventListener('click',()=>{
    returnCalendar.style.display='block';
})

const returnDateInput=document.getElementById('return-date-input');
returnDateInput.addEventListener('change',()=>{
    const inputDateValue=returnDateInput.value;
    const [year,month,day]=inputDateValue.split('-');
    const selectedDate=new Date(year,month-1,day);
    const dateOptions={year:'numeric',month:'long',day:'numeric'};
    const weekdayOptions={weekday:'long'};
    const formattedDate=selectedDate.toLocaleDateString(undefined,dateOptions);
    const formattedWeekday=selectedDate.toLocaleDateString(undefined,weekdayOptions);
    returnDateHeading.textContent=formattedDate;
    returnWeekday.textContent=formattedWeekday;
    returnCalendar.style.display='none';
})

const traveller=document.getElementById('traveller')
const travelClass=document.getElementById('travel-class')
let showtraveller=false
traveller.addEventListener('click',()=>{
    showtraveller=!showtraveller;
    if (showtraveller){
        document.querySelector('.traveller-details').style.display = 'block'
    }
    else{
        document.querySelector('.traveller-details').style.display = 'none'
    }
})
let traveller_count=0
function updateTravelers(num){
    traveller_count+=num;
}
let class_text=""
function updateclass(text){
    class_text=text;
}
function apply(){
    traveller.textContent=traveller_count;
    travelClass.textContent=class_text;
    traveller_count=0;
    document.querySelector('.traveller-details').style.display = 'none'
}