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

var calendar = function calendar() {
  var lastDay = function lastDay(year, month) {
    return new Date(year, month, 0).getDate();
  };
  var firstDay = function firstDay(year, month) {
    return new Date(year, month - 1, 1).getDay();
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
    var totalRows = 5;
    // var totalDays = daysInRow * totalRows;
    var currentRows = 0;

    while (currentRows < totalRows) {
      var calendarRow = document.createElement('div');
      for (var i = 0; i < daysInRow; i++) {
        console.log('within for loop');
        var day = document.createElement('p');
        day.innerHTML = i;
        calendarRow.appendChild(day);
      }
      calendarBody.appendChild(calendarRow).className = "calendar-row";
      currentRows++;
    }
  };
  populateCalendarBody();
};

document.addEventListener('DOMContentLoaded', calendar, false);

//lastDay(2018, 9);//october 1st if using 1 as a day
//firstDay(2018, 9);//september 30th if using 0 as a day
//to see the result in the console
// let lastDayOfSept = lastDay(2018, 9);
// let
// console.log('lastDayOfSept', lastDayOfSept);
"use strict";

var fn = function fn() {

  var month = document.getElementById('month');
  var monthSetter = function monthSetter(monthName) {
    month.innerHTML = monthName;
  };
  monthSetter("September");
};

window.onload = init;
function init() {
  var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  //trying to follow the exercise but when running gulp, there is an error
  // var galleryMonths = {
  //   galleryMonths: {
  //     "name": 'Gallery',
  //     "months":[{"month:""January"}, {"month:""February"}, {"month:""March"}, {"month:""April"}, {"month:""May"}, {"month:""June"}, {"month:""July"}, {"month:""August"}, {"month:""September"}, {"month:""October"}, {"month:""November"}, {"month:""December"},
  //     ]
  //   }
  // }

  //global variable for months count set 0
  var monthsCounter = 0;

  //variable for months
  // var months = galleryMonths.galleryMonths.months;

  //enable back arrow
  var back = document.getElementById("leftArrow");
  back.onclick = previousMonth;

  //enable forward arrow
  var forward = document.getElementById("rightArrow");
  forward.onclick = nextMonth;

  //get the target(clicked thumb img as main)
  function getTargetElement(a) {
    a = a || window.event;
    return a.target || a.srcElement;
  }

  //display clicked thumb as main image
  function displayClickedArrow(a) {
    var target = getTargetElement(a);
    var monthSetter = document.getElementById("month");
    var curIndex = getCurrentThumbIndex(target.id);
    var currentElementId = monthsCounter;
    monthsCounter = curIndex;
    monthSetter.setAttribute("src", months[monthsCounter].url);
    resetOpacity(currentElementId); // is it needed?
  }

  function nextMonth() {
    if (monthsCounter < months.length - 1) {
      var arrayIndex = monthsCounter;
      monthsCounter++;

      var monthSetter = document.getElementById("month");
      monthSetter.setAttribute("src", month[monthsCounter].url);
    }
  }

  function previousMonth() {
    if (monthsCounter > 0) {
      var arrayIndex = monthsCounter;
      monthsCounter--;

      var monthSetter = document.getElementById("month");
      monthSetter.setAttribute("src", month[monthsCounter].url);
    }
  }
}

document.addEventListener('DOMContentLoaded', fn, false);

// var arrayIndex = 0;
// window.onload = init;
// var leftArrow;
// var rightArrow;
//
// function init(){
//   leftArrow = document.getElementById("leftArrow");
//   var previous = document.getElementById("previous");
//   var next = document.getElementById("rightArrow");
//   var next = document.getElementById("next");
//
//   if (previous.addEventListener){
//     previous.addEventListener("click", function(){
//       processClicks("previous")
//     },false);
//
//     next.addEventListener("click", function(){
//       processClicks("next")
//     },false);
//   }
//
//   else if (previous.attachEvent){
//     previous.attachEvent("onclick", function(){
//       processClicks("back")
//     });
//     next.attachEvent("onclick", function(){
//       processClicks("next")
//     });
//   }
// }
//
// function processClicks(action){
//   if(action == "previous")
//   arrayIndex -=1;
//
//   else if(action == "next")
//   arrayIndex ++;
//
//   if (arrayIndex<0 || arrayIndex > month.length-1)
//   arrayIndex = 0;
//   leftArrow = month[arrayIndex];
//   rightArrow = month[arrayIndex];
// }
'use strict';

var list = [];
var myFunkyFunk = function myFunkyFunk() {
  console.log('the funk');
};