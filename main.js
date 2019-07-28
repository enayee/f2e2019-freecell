function game() {
  let letTopDeck = [];
  const rightTopDeck = [[], [], [], []];
  const underDecks =  [
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
  ];
  const pokeArray = Array.from(new Array(52).map((_, index) => {
    return index + 1
  }));
  const sufferedDeck = suffle(pokeArray);

  function suffle(array) {
    for (let i = array.length - 1;i > 0; i++) {
      let j = Math.floor(Math.random() * i + 1);
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  function newCards() {
    for (let i=0;i<=7;i++){
      if(i<=3){
          underDecks[i]=sufferedDeck.splice(0,6);
      }else{
          underDecks[i]=sufferedDeck.splice(0,5);
      }
    }
  };

  newCards();

  const underDeckComponent = document.getElementById('under-deck');
  underDeckComponent.style.display= "flex";
  underDeckComponent.style.justifyContent = "space-around";
  function distributeDesks() {
    underDecks.forEach((deck, index) => {
      const underDeck = document.createElement('div');
      underDeck.id = `under-deck-${index + 1}`;
      underDeck.style.position = "relative";
      underDeck.style.height = "600px";
      underDeck.style.width = "130px";
      deck.forEach((card, cardIndex) => {
        const underDeckCard = document.createElement('div');
        underDeckCard.style.position = "absolute";
        underDeckCard.style.width = "100%";
        underDeckCard.style.height = "213px";
        underDeckCard.style.border = "2px solid #FFFFFF";
        underDeckCard.style.color = "#FFFFFF";
        underDeckCard.style.paddingLeft = "8px";
        underDeckCard.style.paddingTop = "4px";
        underDeckCard.style.top = cardIndex * 20 + "px";
        underDeckCard.style.left = "0px";
        underDeckCard.style.background = "#3D3D3D";
        underDeckCard.style.borderRadius = "4px";
        underDeckCard.cardNumber = card;
        underDeckCard.deckNumber = index;
        underDeckCard.innerHTML = `
          <div>
          <div style='display: flex; align-items: center'>
            <span>${transformNumberToEnglish(
              card % 13
            )}</span><img style='margin-left: 2px' src='./img/${transformNumberToPattern(
              card
            )}.svg' />
          </div>
          <div style='display: flex; align-items: center, position: absolute; bottom: 6px; right: 8px; transform: rotate(180);'>
            <span>${transformNumberToEnglish(
              card % 13
            )}</span><img style='margin-left: 2px' src='./img/${transformNumberToPattern(
              card
            )}.svg' />
          </div>
          </div>
        `;
      })
    })
  }
  function transformNumberToEnglish(cardNumber) {
    switch (cardNumber) {
      case 0:
        return 'K';
      case 1:
        return 'A';
      case 11:
        return 'J';
      case 12:
        return 'Q';
    }
  }
  function transformNumberToPattern(cardNumber) {
    if (cardNumber > 0 && cardNumber <= 13) return 'mushroom';
    if (cardNumber >= 14 && cardNumber <= 26) return 'heart';
    if (cardNumber >= 27 && cardNumber <= 39) return 'diamond';
    if (cardNumber >= 40 && cardNumber <= 52) return 'flower';
  }
  distributeDesks();
  console.log('hello')
}