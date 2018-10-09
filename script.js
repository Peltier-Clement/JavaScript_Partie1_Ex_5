function valider() {
  var firstNumber = document.getElementById('firstNumber').value;
  var secondNumber = document.getElementById('secondNumber').value;
  var result = parseInt(firstNumber) * (secondNumber);
    if(isNaN(result)){
      alert('Veuillez entrez des nombres');
    }else{
      alert('Le résultat est :' + ' ' + result);
    }
}
