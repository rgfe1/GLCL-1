let calendarHeader = () => {
  let title = document.getElementById('title');
  let titleSetter = (newTitle) => {
    title.innerHTML = newTitle;
  };
  titleSetter('September');

  let monthArr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  console.log(monthArr[0]);

  let titleCarousel = document.getElementById('title-carousel');

  let p1 = document.createElement('p');
  p1.classList.add('arrow', 'fas', 'fa-chevron-left');
  p1.id = "left-arrow";
  //let leftArrow = p1.id;//get the id
  //p1.id = leftArrow;//set the id
  //p1.innerHTML = '<p>';
  titleCarousel.appendChild(p1);

  let p2 = document.createElement('p');
  p2.id = "title";
  //title = p2.id;//get the id
  //p2.id = title;//set the id
  //p2.innerHTML = '<p>';
  titleCarousel.appendChild(p2);

  let p3 = document.createElement('p');
  p3.classList.add('arrow', 'fas', 'fa-chevron-right');
  p3.id = "right-arrow";
  //let rightArrow = p3.id;//get the id
  //p3.id = rightArrow;//set the id
  //p3.innerHTML = '<p>';
  titleCarousel.appendChild(p3);


  let leftArrow = document.getElementById('left-arrow');
  let rightArrow = document.getElementById('right-arrow');
  title = document.getElementById('title');
  let monthIndex = 8; //zero based
  leftArrow.addEventListener('click', () => {
    if (monthIndex > 0) {
      monthIndex--;
      titleSetter(monthArr[monthIndex]);
      //console.log('left');
    }
  });
  rightArrow.addEventListener('click', () => {
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
