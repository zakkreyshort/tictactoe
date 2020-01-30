function Player(name, mark){
  this.name = name,
  this.mark = mark;
}

var checkWinX = function() {
  if ((space1.mark === space2.mark && space1.mark === space3.mark && space1.mark === "X") || (space4.mark === space5.mark && space4.mark === space6.mark && space4.mark === "X") || (space7.mark === space8.mark && space7.mark === space9.mark && space7.mark === "X") || (space1.mark === space4.mark && space1.mark === space7.mark && space1.mark === "X") || (space2.mark === space5.mark && space2.mark === space8.mark && space2.mark === "X") || (space3.mark === space6.mark && space3.mark === space9.mark && space3.mark === "X") || (space1.mark === space5.mark && space1.mark === space7.mark && space1.mark === "X") || (space3.mark === space5.mark && space3.mark === space7.mark && space3.mark === "X")) {
    alert("X wins!");
  } else {
    return false;
  }
}

var checkWinO = function() {
  if ((space1.mark === space2.mark && space1.mark === space3.mark && space1.mark === "O") || (space4.mark === space5.mark && space4.mark === space6.mark && space4.mark === "O") || (space7.mark === space8.mark && space7.mark === space9.mark && space7.mark === "O") || (space1.mark === space4.mark && space1.mark === space7.mark && space1.mark === "O") || (space2.mark === space5.mark && space2.mark === space8.mark && space2.mark === "O") || (space3.mark === space6.mark && space3.mark === space9.mark && space3.mark === "O") || (space1.mark === space5.mark && space1.mark === space7.mark && space1.mark === "O") || (space3.mark === space5.mark && space3.mark === space7.mark && space3.mark === "O")) {
    alert("O wins!");
  } else {
    return false;
  }
}

var checkTie = function (){
  if(checkWinO(space1, space2, space3, space4, space5, space6, space7, space8, space9) === false && checkWinX(space1, space2, space3, space4, space5, space6, space7, space8, space9) === false && (space1 === "X" || "O") && (space2 === "X" || "O") && (space3 === "X" || "O") && (space4 === "X" || "O") && (space5 === "X" || "O") && (space6 === "X" || "O") && (space7 === "X" || "O") && (space8 === "X" || "O") && (space9 === "X" || "O")){
    alert("It's a tie!");
  }
}

// Front-end logic:

$(document).ready(function(){
  $("form").submit(function(event) {
    event.preventDefault();
    var turn = 1;
    var player1 = new Player($("input#name1").val(), "X");
    var player2 = new Player($("input#name2").val(), "O");
    $("form").hide();
    $("table#game").show();
    $(".names").show();

    $("#playerOneName").html(player1.name);
    $("#playerTwoName").html(player2.name);

    $("table#game").on('click', 'td', function(event) {
      event.preventDefault();
      if ($(this).html("")) {
        if (turn %2 === 0) {
          $(this).html(player2.mark);
          turn++
          checkWinO();
          checkTie();
        } else if (turn %2 != 0) {
          $(this).html(player1.mark);
          turn++
          checkWinX();
          checkTie();
        }
      } else {
        alert("this space is taken!");
      };
    })
  })
})