let titleCarouselWraper = () => {
  let titleCarousel = document.getElementById('title-carousel');

  const elementBuilder = (elementType, elementId, appendTo, classes) => {
    let el = document.createElement(elementType);
    console.log('el', el);
    if(classes){
      el.classList.add(...classes);
    }
    el.id = elementId;
    console.log('el', el);
    appendTo.appendChild(el);
  }

  elementBuilder('p', 'left-arrow', titleCarousel, ['arrow', 'fas', 'fa-chevron-left']);
  elementBuilder('p', 'title', titleCarousel);
  elementBuilder('p', 'right-arrow', titleCarousel, ['arrow', 'fas', 'fa-chevron-right']);

  let title = document.getElementById('title');
  let titleSetter = (newTitle) => {
    title.innerHTML = newTitle;
  };

  //let formattedDate = JSON.parse(monthArr);
  //console.log(monthArr);
  //for(let i=0; i<monthArr.lenght; i++){
  //}

  //let titleCarousel = document.getElementById('title-carousel');
  let titleArr = JSON.parse(titleCarousel.getAttribute('title-arr'));
  console.log(titleArr);
  let leftArrow = document.getElementById('left-arrow');
  let rightArrow = document.getElementById('right-arrow');
  let titleIndex = Number(titleCarousel.getAttribute('title-starting-index')); //zero based

  titleSetter(titleArr[titleIndex]);

  leftArrow.addEventListener('click', () => {
    if (titleIndex > 0) {
      titleIndex--;
      titleSetter(titleArr[titleIndex]);
      //console.log('left');
    }
  });
  rightArrow.addEventListener('click', () => {
    if (titleIndex < titleArr.length - 1) {
      titleIndex++;
      titleSetter(titleArr[titleIndex]);
      //console.log('right');
    }
  });
};

document.addEventListener('DOMContentLoaded', titleCarouselWraper, false);

// for(let i=0; I<monthArr.leght; i++){
//   console.log(monthArr[i]);
//   }
//
//   let i=0;
//   while(i<monthArr.lenght){
//     console.log(i);
//     i++;
//   }
