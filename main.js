/***********************************
HOME PAGE (INDEX.HTML): ONMOUSEOVER
************************************/

function studentIconRollOver(student_icon) {
  student_icon.src = 'http://i740.photobucket.com/albums/xx43/Archtech87/StudentIcon_1.png';
}


function studentIconRollOut(student_icon) {
  student_icon.src = 'http://i740.photobucket.com/albums/xx43/Archtech87/StudentIconGray.png';
}

function teacherIconRollOver(teacher_icon) {
  teacher_icon.src = 'http://i740.photobucket.com/albums/xx43/Archtech87/TeacherIcon_1.png';
}


function teacherIconRollOut(teacher_icon) {
  teacher_icon.src = 'http://i740.photobucket.com/albums/xx43/Archtech87/TeacherIconGray.png';
}


/************************************************
LOGIN PAGE - CHECK LOGIN INFO - SUBMIT ON ENTER
*************************************************/

$("#pswrd").keyup(function(event) {
  if (event.keyCode == 13) {
    $("#submitLogin").click();
  }
});

$("#usrnme").keyup(function(event) {
  if (event.keyCode == 13) {
    $("#submitLogin").click();
  }
});

function checkLogin(user) {
  if (user.username.value === "") {
    alert("Please Fill in a Username")
  } else if (user.password.value === "") {
    alert("Please Fill in a Password")
  } else {
    if (user.username.value == "teacher" && user.password.value == "staff") {
      window.open('teacher-dashboard.html')
    } else if (user.username.value == "student" && user.password.value == "student") {
      window.open('student-view.html')
    } else {
      alert("Wrong Username or Password")
    }

  }
}


/***********************************
STUDENT VIEW: CHOOSE A CHARACTER - ONMOUSEOVER
************************************/

function catIconRollOver(cat_icon) {
  cat_icon.src = 'http://i740.photobucket.com/albums/xx43/Archtech87/Cat.png';
}


function catIconRollOut(cat_icon) {
  cat_icon.src = 'http://i740.photobucket.com/albums/xx43/Archtech87/Cat.Gray.png';
}

function dogIconRollOver(dog_icon) {
  dog_icon.src = 'http://i740.photobucket.com/albums/xx43/Archtech87/bulldog.png';
}


function dogIconRollOut(dog_icon) {
  dog_icon.src = 'http://i740.photobucket.com/albums/xx43/Archtech87/bulldog.Gray.png';
}

function penguinIconRollOver(penguin_icon) {
  penguin_icon.src = 'http://i740.photobucket.com/albums/xx43/Archtech87/penguin.png';
}


function penguinIconRollOut(penguin_icon) {
  penguin_icon.src = 'http://i740.photobucket.com/albums/xx43/Archtech87/penguin.gray.png';
}


/***********************************
STUDENT VIEW: CHOOSE A CHARACTER - ON CLICK
************************************/

function showHideCat() {
  var cassieCat = document.getElementById('showHideCat');
  if (cassieCat.style.display === 'none') {
    cassieCat.style.display = 'block';
  } else {
    cassieCat.style.display = 'none';
  }
  hideDogPenguin();
}

function showHideDog() {
  var brutusDog = document.getElementById('showHideDog');
  if (brutusDog.style.display === 'none') {
    brutusDog.style.display = 'block';
  } else {
    brutusDog.style.display = 'none';
  }
  hideCatPenguin();
}

function showHidePenguin() {
  var pennyPenguin = document.getElementById('showHidePenguin');
  if (pennyPenguin.style.display === 'none') {
    pennyPenguin.style.display = 'block';
  } else {
    pennyPenguin.style.display = 'none';
  }
  hideDogCat();
}

function hideCatPenguin() {
  var cassieCat = document.getElementById('showHideCat');
  var pennyPenguin = document.getElementById('showHidePenguin');
  if (cassieCat.style.display = 'block') {
    cassieCat.style.display = 'none';
  }
  if (pennyPenguin.style.display = 'block') {
    pennyPenguin.style.display = 'none';
  }
}

function hideDogCat() {
  var cassieCat = document.getElementById('showHideCat');
  var brutusDog = document.getElementById('showHideDog');
  if (cassieCat.style.display = 'block') {
    cassieCat.style.display = 'none';
  }
  if (brutusDog.style.display = 'block') {
    brutusDog.style.display = 'none';
  }
}

function hideDogPenguin() {
  var brutusDog = document.getElementById('showHideDog');
  var pennyPenguin = document.getElementById('showHidePenguin');
  if (brutusDog.style.display = 'block') {
    brutusDog.style.display = 'none';
  }
  if (pennyPenguin.style.display = 'block') {
    pennyPenguin.style.display = 'none';
  }
}

/**********************************************************
STUDENT VIEW: CHOOSE A CHARACTER - LOCAL STORAGE ATTEMPT
***********************************************************/

function retrievePenguinButtonValue() {
  var penguinButton = document.getElementById("pennyPenguinChosen").value;
  document.getElementById("pennyPenguinButtonValue").innerHTML = penguinButton;

}





/***********************************
STUDENT VIEW: USER PROFILE
************************************/
$(window).on('load', function() {
  $('#myModalProfile').modal('show');
});

function fullNameResponse(e) {
  var fullName = document.querySelector('#fullName');
  document.getElementById("printFullName").innerHTML = fullName.value;
}

$(document).ready(function() {
  $('#fullName').bind("keypress", function(e) { // Disable the Enter Key so that it does not do anything
    if (e.keyCode == 13) return false;
  });
});


$('#myModalProfile').modal({
  backdrop: 'static',
  keyboard: true
}); // Disable escape or clicking ouutside the modal



/***********************************
STUDENT VIEW: ACTIVITY CHOICES
************************************/

var Activities = [{
  title: "To Post or not to Post?",
  url: "activity1.html"

}, {
  title: "Chatting Online",
  url: "activity2.html"

}, {
  title: "Password Security",
  url: "activity3.html"

}, {
  title: "Cyberethics: Do's and Dont's",
  url: "activity4.html"

}, {
  title: "Internet Safety Vocabulary Quiz",
  url: "activity5.html"

}, {
  title: "Internet Safety Infographic",
  url: "activity6.html"

}, {
  title: "I've Completed all of the Activities",
  url: "student-view.html"

}];


function selectActivity() {
  var activityNumber = document.getElementById("activity-numbers").value;
  var activity = Activities[activityNumber].title;
  document.getElementById("activity-name").innerHTML = activity;
}




function goToSite() {
  var activityNumber = document.getElementById("activity-numbers").value;
  var URL = Activities[activityNumber].url;
  window.location.href = URL;
}

/***************************************
Exit Activities
****************************************/
function exitActivities() {
  alert("Are you sure you want to exit?")
}
