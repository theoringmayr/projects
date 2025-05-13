const addDialog = document.getElementById("addDialog");
const shiftForm = document.getElementById('shiftForm');
const confirmation = document.getElementById('confirmation');
const confirmationMsg = document.getElementById('confirmationMsg');
const resetBtn = document.getElementById('resetBtn');
const confirmationDate = document.getElementById("confirmationDate");
const confirmationTimes = document.getElementById("confirmationTimes");
const confirmationDuration = document.getElementById("confirmationDuration");
const confirmationCloseButton = document.getElementById("confirmationCloseButton");
const addShiftButton = document.getElementById("addShiftButton");

function calculateTimeSpent(start, end) {
  if (!start || !end) return null;

  const [startHour, startMinute] = start.split(':').map(Number);
  const [endHour, endMinute] = end.split(':').map(Number);

  // Create Date objects (date part doesn't matter)
  const startDate = new Date(0, 0, 0, startHour, startMinute);
  const endDate = new Date(0, 0, 0, endHour, endMinute);

  // Handle overnight shifts
  if (endDate < startDate) {
    endDate.setDate(endDate.getDate() + 1);
  }

  const diffMs = endDate - startDate;
  const diffHrs = Math.floor(diffMs / (1000 * 60 * 60));
  const diffMins = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));

  return { hours: diffHrs, minutes: diffMins };
}

const startInput = document.getElementById('startInput');
const endInput = document.getElementById('endInput');


document.getElementById('shiftForm').addEventListener('submit', function(event) {

  event.preventDefault();

  const date = document.getElementById('dateInput').value;
  const startTime = startInput.value;
  const endTime = endInput.value;
  const duration = calculateTimeSpent(startTime, endTime);

  if (!duration) {
    alert('Please enter valid start and end times.');
    return;
  }

  const shift = {
    date: date,
    startTime: startTime,
    endTime: endTime,
    duration: duration // Save duration in the shift object
  };

  const shifts = JSON.parse(localStorage.getItem('shifts')) || [];
  shifts.push(shift);
  localStorage.setItem('shifts', JSON.stringify(shifts));

  event.target.reset();

  // Hide form, show confirmation
  shiftForm.style.display = 'none';
  confirmation.style.display = 'block';

var cleanDuration = duration.hours + "h" + duration.minutes + "m"; 

  //Call show confirmation
  showConfirmation(date, startTime, endTime, cleanDuration);

});

//Show and populate confirmation dialog
function showConfirmation(date, start, end, duration){
    confirmationDate.innerHTML = date;
    confirmationTimes.innerHTML = start + "–" + end;
    confirmationDuration.innerHTML = duration;
}

//Reset Button
resetBtn.addEventListener("click",() => {
    shiftForm.reset();
    resetConfirmation();
    shiftForm.style.display = 'block';
    confirmation.style.display = 'none';

});


//Reset Form
addShiftButton.addEventListener("click", ()=> {
    shiftForm.reset();
    resetConfirmation();
    shiftForm.style.display = 'block';
    confirmation.style.display = 'none';

});




//Close and reset confirmation Dialog
confirmationCloseButton.addEventListener("click", closeConfirmation);

function closeConfirmation(){

    //Reset the form
    shiftForm.reset();

    //Reset the confirmation message
    resetConfirmation();

    //Hide confirmation message, show form
    shiftForm.style.display = 'block';
    confirmation.style.display = 'none';

    //Close the popover
    addDialog.hidePopover();
}

function resetConfirmation(){
    confirmationDate.innerHTML = "";
    confirmationTimes.innerHTML = "";
    confirmationDuration.innerHTML = "";

}