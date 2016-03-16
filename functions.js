var myInput = document.getElementById('text'),
  myTrigger = document.getElementById('trigger'),
  guessWho  = Math.floor(Math.random() * 100),
  mypara    = document.getElementById('para');

var leplusGrand = function(){
    var myInputValue = parseInt(myInput.value);
    if(!isNaN(myInputValue) && myInputValue >= 0 && myInputValue < 100){
      if(myInputValue > guessWho){
        mypara.innerHTML = "Le nombre à deviner est plus petit";
      }
      else if (myInputValue < guessWho){
        mypara.innerHTML = "Le nombre à deviner est plus grand";

      }
      else {
        mypara.innerHTML = "GAGNER";

      }
    }
    else {
      alert('Veuillez entrez un nombre valide et positif et compris entre 0 et 100');
    }

};

myTrigger.addEventListener('click',function(){
  leplusGrand();
},false);





// PIERRE FEUILLE CISEAU
var playerChoice = document.querySelectorAll('#menuDeroulant h4');
var playerResults = document.getElementById('para-player');
var randomResults = document.getElementById('para-random');
var menuDeroulant = document.getElementById('menuDeroulant');
var jeuxChoix     = ['Pierre','Feuilles','Ciseaux'];
var menuToggle = function(){
  var matthieu = menuDeroulant.getAttribute('class');
  if(matthieu == 'menu'){
    menuDeroulant.className += " active";
  } else {
      menuDeroulant.className = "menu";
    }


}
var randomChoices = function(){
  window.randomChoice = jeuxChoix[Math.floor(Math.random() * jeuxChoix.length)];
  switch (randomChoice) {
    case "Feuilles":
      randomResults.innerHTML = "<i class='fa fa-hand-paper-o animation-target'></i>";
      break;
    case "Ciseaux":
      randomResults.innerHTML = "<i class='fa fa-hand-scissors-o animation-target'></i>";
      break;
    case "Pierre":
      randomResults.innerHTML = "<i class='fa fa-hand-rock-o animation-target'></i>";
      break;
    default:
      console.log('prout');
      break;
  }

}

var playerChoices = function(){
  playerChoice1 = playerChoice[1];
  playerChoice2 = playerChoice[2];
  playerChoice3 = playerChoice[3];
  playerChoice1.addEventListener('click',function(){
    playerResults.innerHTML = "<i class='fa fa-hand-rock-o animation-target'></i>";

    randomChoices();

  },false);
  playerChoice2.addEventListener('click',function(){
    playerResults.innerHTML = "<i class='fa fa-hand-paper-o animation-target'></i>";

    randomChoices();

  },false);
  playerChoice3.addEventListener('click',function(){
    playerResults.innerHTML = "<i class='fa fa-hand-scissors-o animation-target'></i>";

    randomChoices();

  },false);
}
menuDeroulant.addEventListener('click', function(){
menuToggle();
playerChoices();

},false);
