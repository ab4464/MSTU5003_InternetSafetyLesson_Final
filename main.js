/***********************************
HOME PAGE (INDEX.HTML): ONMOUSEOVER
************************************/

function studentIconRollOver(student_icon) {
  student_icon.src = 'http://i740.photobucket.com/albums/xx43/Archtech87/StudentIcon.png';
}


function studentIconRollOut(student_icon) {
  student_icon.src = 'http://i740.photobucket.com/albums/xx43/Archtech87/StudentIconGray.png';
}

function teacherIconRollOver(teacher_icon) {
  teacher_icon.src = 'http://i740.photobucket.com/albums/xx43/Archtech87/TeacherIcon.png';
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
STUDENT VIEW: USER PROFILE
************************************/


function fullNameResponse(e) {
  var fullName = document.querySelector('#fullName');
  document.getElementById("printFullName").innerHTML = fullName.value;
}


/***********************************
STUDENT VIEW: ACTIVITY 1 - POPOVERS
************************************/

$(document).ready(function() {
  $('[data-toggle="popover"]').popover();
  ({
    trigger: "hover"
  });
});

/***************************************
TEACHER DASHBOARD: SURVEY - RESET FIELDS
****************************************/


function resetSurvey(event) {
  var selectEl = document.querySelector('#gradeLevel');
  selectEl.value = "";

  var radioEl = document.querySelectorAll('[name="requiredUnit"]');
  radioEl[0].checked = false;

  var checkboxEls = document.querySelectorAll('#classSubjects input[type="checkbox"]');
  for (var checkbox of checkboxEls) {
    checkbox.checked = false;
  }
  var textareaEl = document.querySelector('#why');
  textareaEl.value = "";

  var textinputE1 = document.querySelector('#other');
  textinputE1.value = "";

}



/***************************************
TEACHER DASHBOARD: SURVEY - STORE FIELDS
****************************************/


function dropDownSelection(event) {
  var selectDd = document.querySelector('#gradeLevel');
  document.getElementById("results").innerHTML = selectDd.value;


}

function checkboxSelection() {
  var selectCheckbox = document.querySelectorAll('#classSubjects input[type="checkbox"]:checked');
  var subjects = [];
  for (var checkboxElement of selectCheckbox) {
    subjects.push(checkboxElement.value);
    document.getElementById("results2").innerHTML = subjects;
  }

}

function radioButtonSelection(event) {
  var selectRadio = document.querySelector('[name="requiredUnit"]:checked');
  document.getElementById("results3").innerHTML = selectRadio.value;

}

function otherAreaResponse(e) {
  var otherInput = document.querySelector('#otherInput');
  document.getElementById("results4").innerHTML = otherInput.value;
}

function textAreaResponse(e) {
  var textInput = document.querySelector('#why');
  document.getElementById("results5").innerHTML = textInput.value;

}




/***********************************
STUDENT VIEW: ACTIVITY 1 - TOGGLE
************************************/

$(function() {
  $('#toggle-one').bootstrapToggle({
    on: 'Risky',
    off: 'Safe',
    onstyle: 'Danger',
    offstyle: 'Success'
  });
})


/******************************
HELPER FUNCTIONS
******************************/
function printLog(selector, message) {
  document.querySelector(selector).innerHTML += message + "<br>";
}

/********************************
STUDENT VIEW: ACTIVITY 2 - CHAT
*********************************/


function logIn() {
  username = prompt('Enter your username:');
  printLog('#logInInfo', `  Logged in as: ${username}`);
  firstName = prompt('What is your first name?');
  printLog('#logInInfo', `  First Name: ${firstName}`);
}



function startChat() {
  firstResponse = prompt('Hi ' + firstName + ', Did you hear the boys talking about that new girl at school?');
  printLog('#firstChat', `Best Friend: Hi ${firstName}, Did you hear the boys talking about that new girl at school?'`);
  printLog('#firstChat', `${username}: ${firstResponse}`);
  secondResponse = prompt('She was wearing the ugliest sweater! Don\'t you agree?');
  printLog('#firstChat', `Best Friend: She was wearing the ugliest sweater! Don\'t you agree?`);
  printLog('#firstChat', `${username}: ${secondResponse}`);
  thirdResponse = prompt('I took a picture of her, Let\'s post it on Facebook #UglySweaterContest');
  printLog('#firstChat', `Best Friend: I took a picture of her! Let\'s post it on Facebook #UglySweaterContest`);
  printLog('#firstChat', `${username}: ${thirdResponse}`);
}

function resetActivity2() {
  userName = "anonymous";
  document.querySelector('#logInInfo').innerHTML = "Login Information:<br>";
  document.querySelector('#firstChat').innerHTML = "Chat History:<br>";
}


/*************************************
STUDENT VIEW: ACTIVITY 3 - PASSWORDS
**************************************/

function thatsCorrect() {
  alert("Great Job! That's Correct!");
}

function thatsIncorrect() {
  alert("Sorry, That's Incorrect!");
}