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

  var textinputE1 = document.querySelector('#otherInput');
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
