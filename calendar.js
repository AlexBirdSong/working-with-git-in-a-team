'use strict'

function getLocalDay(date) {

    let day = date.getDay();
  
    if (day == 0) { // день недели (воскресенье будет 7)
      day = 7;
    }
  
    return day;
  }

  function dayInMonth(date){
    let currdate = date;
    let nextdate = new Date(currdate.getFullYear(), currdate.getMonth()+1, currdate.getDate());
    let countDays = Math.round((nextdate - currdate) / 1000 / 3600 / 24);

    return countDays;
  }

function createCalendar(elem, year, month){
    let date = new Date(year, month, 1);
    let day;
    let calendarString;

    // создадим заголовок таблицы
    elem.innerHTML="<tr><th>пн</th><th>вт</th><th>ср</th><th>чт</th><th>пт</th><th>сб</th><th>вс</th></tr>"; 
    
    // заполним пустыми квадратиками дни прошлого месяца
    let countVoidDay =  getLocalDay(date) - 1;
    calendarString="<tr>"; 
    for(let i=0;i<countVoidDay;i++){
      calendarString+="<td> </td>";
    }

    // заполним дни текущего месяца  
    for(let i=1;i<=dayInMonth(date);i++){
      date = new Date(year, month, i); 
      day = getLocalDay(date);
      if (day!=7){
        calendarString+="<td>"+ date.getDate() + "</td>";
      }
      else{
        calendarString+="<td>"+ date.getDate() + "</td></tr><tr>";
      }

    }
   
    // заполним пустыми квадратиками дни следующего месяца
    let dateNextMonth = new Date(year, month+1, 1);
    countVoidDay = 8 -  getLocalDay(dateNextMonth);

    for(let i=0;i<countVoidDay;i++){
      calendarString+="<td> </td>";
    }

    calendarString+="</tr>";
    elem.innerHTML+=calendarString;
   
}

let elem = document.getElementById('cal');

 createCalendar(elem, 2020, 9);
