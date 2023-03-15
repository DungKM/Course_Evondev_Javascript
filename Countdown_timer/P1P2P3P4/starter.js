window.addEventListener("load", function () {
  //
  const daysText = document.querySelector(".days");
  const hoursText = document.querySelector(".hours");
  const minutesText = document.querySelector(".minutes");
  const secondsText = document.querySelector(".seconds");

  function countdown(date) {
    const endDate = new Date(date).getTime();
    let currentDate = new Date().getTime();
    if (isNaN(endDate) || endDate - currentDate <= 0) return;
    setInterval(calculate, 1000);
    function calculate() {
      let days, hours, minutes, seconds;
      const now = new Date();

      // covert to time

      const startDate = now.getTime();

      let timeRemaining = parseInt((endDate - startDate) / 1000);
      if (timeRemaining > 0) {
        // 1 ngay = 24h *60*60 = 86400
        days = parseInt(timeRemaining / 86400);
        timeRemaining = timeRemaining % 86400;
        hours = parseInt(timeRemaining / 3600);
        timeRemaining = timeRemaining % 3600;
        minutes = parseInt(timeRemaining / 60);
        timeRemaining = timeRemaining % 60;
        seconds = parseInt(timeRemaining);
        // console.log(timeRemaining);
        // console.log(days);
        daysText.textContent = `0${days}`.slice(-2);
        hoursText.textContent = `0${hours}`.slice(-2);
        minutesText.textContent = `0${minutes}`.slice(-2);
        secondsText.textContent = `0${seconds}`.slice(-2);
        // 1 gio = 60 * 60 = 3600
        // console.log(timeRemaining/60)
      } else {
        return;
      }
    }
  }

  //   setInterval(function(){
  countdown("Sat Nov 28 2022 01:38:34 GMT+0700 (Indochina Time)");
  //   },1000)
});
