const avancarCard = document.getElementById('avancarCard');
const voltarCard = document.getElementById('voltarCard')
var cardAtual = 1;

avancarCard.addEventListener('click', function () {
    const cards = document.querySelectorAll('.card');
    cards[cardAtual].classList.remove("selectCard");
    cardAtual++;
    if(cardAtual > cards.length - 1) cardAtual = 0
    cards[cardAtual].classList.add("selectCard")
    
})

voltarCard.addEventListener('click', function () {
    const cards = document.querySelectorAll('.card');
    cards[cardAtual].classList.remove("selectCard");
    cardAtual--

    if(cardAtual < 0) cardAtual = cards.length - 1
    cards[cardAtual].classList.add("selectCard")
    
})