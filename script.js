function countdownCalc() {
  // set date to count down to
  var countdownDate = new Date("June 14, 2018 11:00:00").getTime();
  // todays date and time
  var now = new Date().getTime();
  // find time between now and the coutdown date
  var time = countdownDate - now;

  if (time >= 0) {
    // time calculations for days, hours, minutes and seconds
    var seconds = Math.floor((time / 1000) % 60);
    var minutes = Math.floor((time / 1000 / 60) % 60);
    var hours = Math.floor((time / (1000 * 60 * 60)) % 24);
    var days = Math.floor(time / (1000 * 60 * 60 * 24));
    // var years = Math.floor((time / (1000 * 60 * 60 * 24)) * 365);
    return {
      'total': time,
      // 'years': years,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  } else {
      return {
      'total': 0,
      // 'years': 0,
      'days': 0,
      'hours': 0,
      'minutes': 0,
      'seconds': 0
    };
  }
};

// initialize clock
function initializeClock(id, finishTime) {
  var clock = document.getElementById(id);
  // var yearsSpan = clock.querySelector('.years');
  var daysSpan = clock.querySelector('.days');
  var hoursSpan = clock.querySelector('.hours');
  var minutesSpan = clock.querySelector('.minutes');
  var secondsSpan = clock.querySelector('.seconds');
  // display result
  function displayClock() {
    var time = countdownCalc(finishTime);
  
    daysSpan.innerHTML = time.days;
    hoursSpan.innerHTML = ('0' + time.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + time.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + time.seconds).slice(-2);
  
    // When countdown is finished
    if (time.total <= 0) {
      clearInterval(timeinterval);
      document.getElementById('kickoff').innerHTML = 'Kick off!';
    }
  }
  displayClock();
  var timeinterval = setInterval(displayClock, 1000);
};

var deadline = new Date("June 14, 2018 11:00:00").getTime();
initializeClock('clockdiv', deadline);

// TODO:
/*
* - Implement years
* - Count for leap years
* - Modify months: not all months have the same num of days
* - FIXME: responsive design: css grid / flexbox
*/
