let calendar = () => {

  const firstDay = (year, month) => {
    return new Date(year, month - 1, 1).getDay();
  }

  const lastDay = (year, month) => {
    return new Date(year, month, 0).getDate();
  }

  //(new Date()).getFullYear() stackoverflow example
  //var currentTime = new Date() stackoverflow example
  const currentTime = new Date();//should I put new Time?
  const currentDay = new Date();
  const currentMonth = new Date();
  const currentYear = new Date();

  //TODO: Create currentTime, currentDay, currentMonth, currentYear variables based on this stack overflow answer
  //https://stackoverflow.com/a/6002265/5885911
  //Use const rather than let or var, we use const when a variable doesn't get reassigned or updated overtime.
  //Since these are functions, we don't expect the functions to change so we can make them constants.

  const lastMonth = (year, month, dayOfWeek) => {
    //return new Date(year, month, dayOfWeek).getDate(); //deleted


  let previousMonth = month-1;//is this correct? month is a parameter

  const daysInPreviousMonth = (year, previousMonth) => { //from here y, p
    //return new Date(year, previousMonth).getDate();//deleted

    let previousMonthArr = [];
    let ld = lastDay(year, previousMonth);
    let i = 0;

    while(i<daysOfTheWeek){//or dayOfWeek?
      previousMonthArr.push(ld);// before I had: ld=previousMonthArr - correct way to do it? push ld to the previousMonthArr
      ld--;
      i++;
    }
    return previousMonthArr;
  }
  if(previousMonth < 1){
    previousMonth = 12; //is this correct? or leave the below sttment
    return daysInPreviousMonth((year - 1), previousMonth);//should i put "year"?
  } else{
    return daysInPreviousMonth(year, previousMonth);
  }
}//end lastMonth()

  //TODO: Create the lastMonth function which takes the arguments, "year", "month", "dayOfWeek"
  //Create the previousMonth variable which is equal to month-1
  //Create the daysInPreviousMonth function which takes two arguments, "y", "p".
  // Y represents current year, p represents previousMonth
    //Within function
    //Create a variable called previousMonthArr which is equal to an emptyArr,
    //you would use let for this variable since we will be pushing items to the array
    //Create an ld variable which is equal to the lastDay function and takes the arguments, y and p
    //Create a variable i which is equal to 0, we will use let here since i is an index and will be updated
    //Create a while loop, which says while the index is less than daysOfTheWeek
      //Inside while loop
      //push ld to the previousMonthArr
      //decrement ld
      //increment i
    //outside of while loop, return previousMonthArr
  //outside of daysInPreviousMonth function
  //if previous month is less than 1
    //previous month = 12 (we're setting the previous month to December, if the current month is January)
    //return the daysInPreviousMonth function which takes the arguments year-1 and previousMonth
  //else
    //return the daysInPreviousMonth function which takes the arguments year and previousMonth
//end lastMonth function

  const daysOfTheWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

  const calendarHead = document.getElementById('calendar-head');
  const populateCalendarHead = () => {
    for(let i = 0; i<daysOfTheWeek.length; i++){
      let day = document.createElement('p');
      day.innerHTML = daysOfTheWeek[i];
      calendarHead.appendChild(day);
    }
  }
  populateCalendarHead();

  const calendarBody = document.getElementById('calendar-body');
  const populateCalendarBody = () => {
  const currentDaysInMonth = lastDay(2018, 9);
  const firstDayOfMonth = firstDay(2018, 9);

    const lastMonthArr = lastMonth(currentYear, currentMonth, firstDayOfMonth);
    //TODO: Create lastMonthArr const which is equal to the lastMonth function which
    // takes the arguments currentYear, currentMonth, and firstDayOfMonth
    const daysInRow = 7;
    const totalRows = 6;
    let currentRows = 0;
    let currentDayOfMonthIndex = 1; //current day of current month (e.g. september)
    let currentCalendarDayIndex = 0; //current index of days on calendar (i.e. daysInRow * totalRows)

    let lmaIndex = firstDayOfMonth-1;

    //TODO: Create lmaIndex variable which is equal to the firstDayOfMonth-1
    while(currentRows < totalRows){
      const calendarRow = document.createElement('div');
      for(let i = 0; i<daysInRow; i++){
        const day = document.createElement('p');

        if(currentCalendarDayIndex<firstDayOfMonth){
          //is this correct?
          day.innerHTML = lastMonthArr[lmaIndex];//set day inner html to the current lmaIndex of the lastMonthArr
          day.classList.add("grayedOut"); // add the 'grayedOut' class to the classList of the "day" variable
          lmaIndex--;
        }


        //TODO: Create a new if condition which says
        //"If the currentCalendarDayIndex is less than the firstDayOfMonth"
          //Within the if condition
          //set day inner html to the current lmaIndex of the lastMonthArr
          //add the 'grayedOut' class to the classList of the "day" variable
          //decrement the lmaIndex

        //This if condition says "start adding days to the calendar, if the
        //first weekday of the current month has been reached"
        if(currentCalendarDayIndex>=firstDayOfMonth && currentDayOfMonthIndex <= currentDaysInMonth){
          day.innerHTML = currentDayOfMonthIndex;
          currentDayOfMonthIndex++;
        }

        //not sure about this

      if(currentCalendarDayIndex<=firstDayOfMonth && currentDayOfMonthIndex>=currentDaysInMonth){
      //is this correct?
      day.innerHTML = currentDayOfMonthIndex;//set day inner html to the current lmaIndex of the lastMonthArr
      day.classList.add("grayedOut");
      currentDayOfMonthIndex++; // add the 'grayedOut' class to the classList of the "day" variable
      }


        //TODO: BONUS: You can add another if condition here if you want, which will just say "add grayed numbers to
        // the end of the month until we run out of space on the calendar"


        currentCalendarDayIndex++;
        calendarRow.appendChild(day);
      }
      calendarBody
      .appendChild(calendarRow)
      .className = "calendar-row";
      currentRows++;
    }
  }
  populateCalendarBody();
};

document.addEventListener('DOMContentLoaded', calendar, false);
