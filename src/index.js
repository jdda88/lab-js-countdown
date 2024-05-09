const DURATION = 4; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

// Your code goes here ...

const startBtn = document.querySelector('#start-btn');
startBtn.addEventListener('click', () => {
  startCountdown();
})


// ITERATION 2: Start Countdown
function startCountdown() {

  console.log("startCountdown called!");

  // Your code goes here ...

  const remainingSeconds = document.getElementById('time')
  timer = setInterval(() =>{
    remainingTime --;
    remainingSeconds.innerHTML = remainingTime
    if(remainingTime === 0){
      showToast("asdas");
      clearInterval(timer);
    }
  }, 1000)
}



// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  // Your code goes here ...
  toastCard = document.querySelector('div#toast');
  toastCard.classList.add('show')
  setTimeout(() => toastCard.classList.remove('show'), 3000);
  



  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...
  // function hideToast(toast) {
  //   toast.style.display = 'none';}
  let closeToastBtn = document.querySelector('#close-toast');
  closeToastBtn.addEventListener('click', () => {
    // clearTimeout(cardTimeOut)
    toast.style.display = 'none'
  })
}
