let dashboard = () => {
  const dashBody = document.getElementById('body');
  const calendar = document.getElementById('calendar');
  const monthChange = (direction) => {
    return new CustomEvent('monthChange', {
      bubbles:false,
      detail:{ changeDirection:direction}
    });
  }
  //const calendar = document.getElementById('calendar');
  dashBody.addEventListener('arrowClick', function(event){
    console.log('dashboard event', event);
    calendar.dispatchEvent(monthChange(event.detail.arrowDirection));
  }, true);

  $.ajax({
    method: "GET",
    url: "http://localhost:3000/User",
    dataType: "json"
  }).then((response)=>{
    console.log('response', response);
  });
};

document.addEventListener('DOMContentLoaded', dashboard, false);
