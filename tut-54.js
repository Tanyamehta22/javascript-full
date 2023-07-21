console.log('this is tutorial 54');
const alarmSubmit = document.getElementById('alarmSubmit');


// ADD AN EVENT LISTENER TO THE SUBMIT BUTTON--- 
alarmSubmit.addEventListener('click', setAlarm);

var audio = new Audio('https://interactive-examples.mdn.mozilla.net/media/examples/t-rex-roar.mp3');


// function to play the alarm ring tone--
function ringBell(){
    audioplay();
}

// THIS FUNCTION WILL RUN WHENEVER ALARM IS SET FROM THE UI--
function setAlarm(e) {
    e.preventDefault();
    const alarm = document.getElementById('alarm');
    alarmDate = new Date(alarm.value);
    console.log(`Setting Alarm for ${alarmDate}.alarmDate..`);
    now = new Date();

    let timeToAlarm = alarmDate - now;
    consolelog(timeToAlarm);
    if(timeToAlarm>=0){
        setTimeout(()=> {
            console.log("Ringing now")
            ringBell();
        }, timeToAlarm);
    }
}