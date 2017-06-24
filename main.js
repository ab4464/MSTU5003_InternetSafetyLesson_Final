/***********************************
STUDENT VIEW: ACTIVITY 1 - POPOVERS
************************************/

$(document).ready(function() {
  $('[data-toggle="popover"]').popover();
  ({
    trigger: "hover"
  });
});


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
  if (cassieCat.style.display = 'block' ) {
      cassieCat.style.display = 'none';
    }
  if (pennyPenguin.style.display = 'block') {
    pennyPenguin.style.display = 'none';
  }
}

function hideDogCat() {
  var cassieCat = document.getElementById('showHideCat');
  var brutusDog = document.getElementById('showHideDog');
  if (cassieCat.style.display = 'block' ) {
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

/***********************************
STUDENT VIEW: CHOOSE A CHARACTER - LOAD CHARACTER
************************************/


function retrievePenguinButtonValue() {
    var penguinButton = document.getElementById("pennyPenguinChosen").value;
    document.getElementById("pennyPenguinButtonValue").innerHTML = penguinButton;
}






/***********************************
STUDENT VIEW: USER PROFILE
************************************/
$(window).on('load',function(){
        $('#myModalProfile').modal('show');
    });

function fullNameResponse(e) {
  var fullName = document.querySelector('#fullName');
  document.getElementById("printFullName").innerHTML = fullName.value;
}

$(document).ready(function(){
    $('#fullName').bind("keypress", function (e) { // Disable the Enter Key so that it does not do anything
        if (e.keyCode == 13) return false;
    });
});


$('#myModalProfile').modal({ backdrop: 'static', keyboard: true }); // Disable escape or clicking ouutside the modal



/***********************************
STUDENT VIEW: ACTIVITY CHOICES
************************************/


var Activities = [
  {
  title: "To Post or not to Post?",
  url: "activity1.html"

}, {
   title:"Chatting Online",
   url: "activity2.html"

}, {
   title: "Password Security",
   url: "activity3.html"

}, {
   title:"Internet Safety Vocabulary Quiz",
   url: "activity4.html"

}, {
   title:"Internet Safety Infographic",
   url: "activity5.html"

 }, {
    title:"I've Completed all of the Activities",
    url: "student-view.html"

}];


function selectActivity() {
  var activityNumber = document.getElementById("activity-numbers").value;
  var activity = Activities[activityNumber].title;
  document.getElementById("activity-name").innerHTML = activity;
}

document.getElementById("activity-numbers").onclick = selectActivity;


function goToSite() {
  var activityNumber = document.getElementById("activity-numbers").value;
  var URL = Activities[activityNumber].url;
  window.location.href = URL;
}

/***************************************
Exit Activities
****************************************/
function exitActivities() {
  alert ("Are you sure you want to exit?")
}

/***************************************
Activity 6 - Highlight Text
****************************************/

// function highlightingText() {
//     document.getElementById("highlight1").className = "highlightedText"; // Using className to highlight the text. Problem: Won't unhighlight
// }
//
// function highlightingText() {
//     document.getElementById("highlight1").classList.add("highlightedText"); // Using classList.add to highlight the text. Same Problem: Won't unhighlight
// }

function highlightingText1() {
    document.getElementById("highlight1").classList.toggle("highlightedText");
}

function highlightingText2() {
    document.getElementById("highlight2").classList.toggle("highlightedText");
}

function highlightingText3() {
    document.getElementById("highlight3").classList.toggle("highlightedText");
}

function highlightingText4() {
    document.getElementById("highlight4").classList.toggle("highlightedText");
}

function highlightingText5() {
    document.getElementById("highlight5").classList.toggle("highlightedText");
}


function reprintHighlightedText() {
  var textHighlights = document.querySelectorAll(".highlightedText");
for (var i = 0; i < textHighlights.length; i++) {
var highlights = textHighlights[i].innerHTML;
}
document.getElementById("allHighlights").innerHTML = highlights;
}


// function hideUnhighlightedText() {
// var textToHide = document.getElementsByClassName("unhighlightedText");
//     for(var i = 0; i < textToHide.length; i++){
//         textToHide[i].style.visibility = "hidden";
//     }
// }

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
