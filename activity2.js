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


/******************************
HELPER FUNCTIONS
******************************/
function printLog(selector, message) {
  document.querySelector(selector).innerHTML += message + "<br>";
}
