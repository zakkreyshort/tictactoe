function Player(name, mark){
  this.name = name,
  this.mark = mark;
}

// Front-end logic:

var checkWinX = function(){
  if ((($("#a").html() === "X") && ($("#a").html() === $("#b").html()) && ($("#a").html() === $("#c").html()))  || (($("#d").html() === "X") && ($("#d").html() === $("#e").html()) && ($("#d").html() === $("#f").html()))  || (($("#g").html() === "X") && ($("#g").html() === $("#h").html()) && ($("#g").html() === $("#i").html()))  || (($("#a").html() === "X") && ($("#a").html() === $("#d").html()) && ($("#a").html() === $("#g").html()))  || (($("#b").html() === "X") && ($("#b").html() === $("#e").html()) && ($("#b").html() === $("#h").html()))  || (($("#c").html() === "X") && ($("#c").html() === $("#f").html()) && ($("#c").html() === $("#i").html()))  || (($("#a").html() === "X") && ($("#a").html() === $("#e").html()) && ($("#a").html() === $("#i").html()))  || (($("#c").html() === "X") && ($("#c").html() === $("#e").html()) && ($("#c").html() === $("#g").html())))  {
    $("#winner").html("X wins!");
    $("a").show();
    $("table#game").off();
  } else {
    return false;
  }
}

var checkWinO = function(){
  if ((($("#a").html() === "O") && ($("#a").html() === $("#b").html()) && ($("#a").html() === $("#c").html()))  || (($("#d").html() === "O") && ($("#d").html() === $("#e").html()) && ($("#d").html() === $("#f").html()))  || (($("#g").html() === "O") && ($("#g").html() === $("#h").html()) && ($("#g").html() === $("#i").html()))  || (($("#a").html() === "O") && ($("#a").html() === $("#d").html()) && ($("#a").html() === $("#g").html()))  || (($("#b").html() === "O") && ($("#b").html() === $("#e").html()) && ($("#b").html() === $("#h").html()))  || (($("#c").html() === "O") && ($("#c").html() === $("#f").html()) && ($("#c").html() === $("#i").html()))  || (($("#a").html() === "O") && ($("#a").html() === $("#e").html()) && ($("#a").html() === $("#i").html()))  || (($("#c").html() === "O") && ($("#c").html() === $("#e").html()) && ($("#c").html() === $("#g").html())))  {
    $("#winner").html("O wins!");
    $("a").show();
    $("table#game").off();
  } else {
    return false;
  }
}

var checkTie = function (){
  if (checkWinO() === false && checkWinX() === false && (($("#a").html() === "X" || $("#a").html() === "O") && ($("#b").html() === "X" || $("#b").html() === "O") && ($("#c").html() === "X" || $("#c").html() ===  "O") && ($("#d").html() === "X" || $("#d").html() === "O") && ($("#e").html() === "X" || $("#e").html() === "O") && ($("#f").html() === "X" || $("#f").html() === "O") && ($("#g").html() === "X" || $("#g").html() === "O") && ($("#h").html() === "X" || $("#h").html() === "O") && ($("#i").html() === "X" || $("#i").html() === "O"))) {
    $("#winner").html("It's a tie!");
    $("a").show();
    $("table#game").off();
  }
}

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
      if ($(this).html() === "") {
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