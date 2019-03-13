/*
|--------------------------------------------------------------------------
| Toggle Pencil Sizes
|
| 1st : Toggle the sizes buttons onclick
| 2nd : Close the sizes settings by clicking outside of the div
|--------------------------------------------------------------------------
|
*/

$("#pencil").click(function() {
  $(".showPen").toggle();
});

$(document).on('click', function (e) {
    if ($(e.target).closest("#pencil").length === 0) {
        $(".showPen").hide();
    }
});

/*
|--------------------------------------------------------------------------
| Toggle Line Sizes
|--------------------------------------------------------------------------
|
| 1st : Toggle the sizes buttons onclick
| 2nd : Close the sizes settings by clicking outside of the div
|--------------------------------------------------------------------------
|
*/

$("#line").click(function() {
  $(".showLine").toggle();
});

$(document).on('click', function (e) {
    if ($(e.target).closest("#line").length === 0) {
        $(".showLine").hide();
    }
});

/*
|--------------------------------------------------------------------------
| Toggle Square Sizes
|--------------------------------------------------------------------------
|
| 1st : Toggle the sizes buttons onclick
| 2nd : Close the sizes settings by clicking outside of the div
|--------------------------------------------------------------------------
|
*/

$("#square").click(function() {
  $(".showSquare").toggle();
});

$(document).on('click', function (e) {
    if ($(e.target).closest("#square").length === 0) {
        $(".showSquare").hide();
    }
});

/*
|--------------------------------------------------------------------------
| Toggle Circle Sizes
|--------------------------------------------------------------------------
|
| 1st : Toggle the sizes buttons onclick
| 2nd : Close the sizes settings by clicking outside of the div
|--------------------------------------------------------------------------
|
*/

$("#circle").click(function() {
  $(".showCircle").toggle();
});

$(document).on('click', function (e) {
    if ($(e.target).closest("#circle").length === 0) {
        $(".showCircle").hide();
    }
});

/*
|--------------------------------------------------------------------------
| Toggle Eraser Sizes
|--------------------------------------------------------------------------
|
| 1st : Toggle the sizes buttons onclick
| 2nd : Close the sizes settings by clicking outside of the div
|--------------------------------------------------------------------------
|
*/

$("#erase").click(function() {
  $(".showEraser").toggle();
});

$(document).on('click', function (e) {
    if ($(e.target).closest("#erase").length === 0) {
        $(".showEraser").hide();
    }
});

/*
|--------------------------------------------------------------------------
| Hide elements
|--------------------------------------------------------------------------
|
| Hide the toggled div by pressing ESC
|--------------------------------------------------------------------------
|
*/

$(document).keydown(function(event) { 
  if (event.keyCode == 27) { 
    $('.showPen, .showLine, .showSquare, .showCircle, .showEraser').hide();
  }
});