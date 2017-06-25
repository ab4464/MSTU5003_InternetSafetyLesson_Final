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
