$(document).ready(function () {
  window.dancers = [];

  $('.addDancerButton').on('click', function (event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     *
     *
     */



    // this needed to be 'dancer-maker-function-name'
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];



    // make a dancer with a random position
    // call the contructor!!!! we were calling functional
    var dancer = new dancerMakerFunction(
      $('.dancers').height() * Math.random(),
      $('.dancers').width() * Math.random(),
      Math.random() * 1000
    );
    console.log('yes');
    $('.dancers').append(dancer.$node);
  });

  $('.centerUp').on('click', function (event) {
    // $('.blinky').css('float', 'right');
    $('.blinky').css('left', '5%');
    $('.ricky').css('left', '90%');
    $('.pop').css('left', '45%');
  });

  $('.dancers').on('mouseover', '.pop', function(event) {
    $(this).remove();
  });

});

