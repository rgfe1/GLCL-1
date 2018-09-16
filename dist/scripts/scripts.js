'use strict';

var calendar = function calendar() {

  var firstDay = function firstDay(year, month) {
    return new Date(year, month - 1, 1).getDay();
  };

  var lastDay = function lastDay(year, month) {
    return new Date(year, month, 0).getDate();
  };

  var daysOfTheWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

  var calendarHead = document.getElementById('calendar-head');
  var populateCalendarHead = function populateCalendarHead() {
    for (var i = 0; i < daysOfTheWeek.length; i++) {
      var day = document.createElement('p');
      day.innerHTML = daysOfTheWeek[i];
      calendarHead.appendChild(day);
    }
  };
  populateCalendarHead();

  var calendarBody = document.getElementById('calendar-body');
  var populateCalendarBody = function populateCalendarBody() {
    var daysInRow = 7;
    var totalRows = 6;
    // var totalDays = daysInRow * totalRows;
    var currentRows = 0;
    var currentDaysInMonth = lastDay(2018, 9);
    var firstDayOfMonth = firstDay(2018, 9);
    //let totalRows = (currentDaysInMonth + firstDayOfMonth) / daysInRow;
    var currentDayOfMonthIndex = 1;
    var currentCalendarDayIndex = 0;

    while (currentRows < totalRows) {
      var calendarRow = document.createElement('div');
      for (var i = 0; i < daysInRow; i++) {
        var day = document.createElement('p');
        if (currentCalendarDayIndex >= firstDayOfMonth && currentDayOfMonthIndex <= currentDaysInMonth) {
          day.innerHTML = currentDayOfMonthIndex;
          currentDayOfMonthIndex++;
        }
        currentCalendarDayIndex++;
        calendarRow.appendChild(day);
      }
      calendarBody.appendChild(calendarRow).className = "calendar-row";
      currentRows++;
    }
  };
  populateCalendarBody();
};

document.addEventListener('DOMContentLoaded', calendar, false);
'use strict';

var fn = function fn() {
	// adding p tag for minus
	var minus = document.getElementsByClassName('minus');

	for (var i = 0; i < minus.length; i++) {
		var e = document.createElement('p');
		e.innerHTML = '-';
		minus[i].appendChild(e);
	}

	//adding p tag for plus
	var plus = document.getElementsByClassName('plus');
	for (var i = 0; i < plus.length; i++) {
		var e = document.createElement('p');
		e.innerHTML = '+';
		plus[i].appendChild(e);
	}
};

document.addEventListener('DOMContentLoaded', fn, false);
'use strict';

var calendarHeader = function calendarHeader() {
  var title = document.getElementById('title');
  var titleSetter = function titleSetter(newTitle) {
    title.innerHTML = newTitle;
  };
  titleSetter('September');

  var monthArr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  console.log(monthArr[0]);

  var titleCarousel = document.getElementById('title-carousel');

  var p1 = document.createElement('p');
  p1.classList.add('arrow', 'fas', 'fa-chevron-left');
  p1.id = "left-arrow";
  //let leftArrow = p1.id;//get the id
  //p1.id = leftArrow;//set the id
  //p1.innerHTML = '<p>';
  titleCarousel.appendChild(p1);

  var p2 = document.createElement('p');
  p2.id = "title";
  //title = p2.id;//get the id
  //p2.id = title;//set the id
  //p2.innerHTML = '<p>';
  titleCarousel.appendChild(p2);

  var p3 = document.createElement('p');
  p3.classList.add('arrow', 'fas', 'fa-chevron-right');
  p3.id = "right-arrow";
  //let rightArrow = p3.id;//get the id
  //p3.id = rightArrow;//set the id
  //p3.innerHTML = '<p>';
  titleCarousel.appendChild(p3);

  var leftArrow = document.getElementById('left-arrow');
  var rightArrow = document.getElementById('right-arrow');
  title = document.getElementById('title');
  var monthIndex = 8; //zero based
  leftArrow.addEventListener('click', function () {
    if (monthIndex > 0) {
      monthIndex--;
      titleSetter(monthArr[monthIndex]);
      //console.log('left');
    }
  });
  rightArrow.addEventListener('click', function () {
    if (monthIndex < monthArr.length - 1) {
      monthIndex++;
      titleSetter(monthArr[monthIndex]);
      //console.log('right');
    }
  });
};

document.addEventListener('DOMContentLoaded', calendarHeader, false);

// for(let i=0; I<monthArr.leght; i++){
//   console.log(monthArr[i]);
//   }
//
//   let i=0;
//   while(i<monthArr.lenght){
//     console.log(i);
//     i++;
//   }
'use strict';

var list = [];
var myFunkyFunk = function myFunkyFunk() {
  console.log('the funk');
};