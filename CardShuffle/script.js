var cards = [{"number": "1","color": "#6F98A8"},{"number": "2","color": "#2B8EAD"},{"number": "3","color": "#2F454E"},
							{"number": "4","color": "#2B8EAD"},{"number": "5","color": "#2F454E"},{"number": "6","color": "#BFBFBF"},
							{"number": "7","color": "#BFBFBF"},{"number": "8","color": "#6F98A8"},{"number": "9","color": "#2F454E"}];

drawCards();

function drawCards()
{
  for (i=1; i<=9; i++)
  {
    document.getElementById("cell" + i).innerHTML = cards[i-1].number;
    document.getElementById("cell" + i).style.backgroundColor = cards[i-1].color;
    document.getElementById("cell" + i).style.borderColor = cards[i-1].color;
    document.getElementById("cell" + i).style.borderLeftStyle = "solid";
    document.getElementById("cell" + i).style.borderWidth = "8px";
  }
}

function shuffleCards()
{
	shuffle(cards);
  drawCards();
}

function sortCards()
{
	cards.sort((a, b) => (a.number > b.number) ? 1 : -1)
  drawCards();
}

function shuffle(array)
{
  var currentIndex = array.length, tempValue, randomIndex;

  while (0 !== currentIndex)
  {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    tempValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = tempValue;
  }

  return array;
}

document.getElementById("shuffle").addEventListener("click", shuffleCards);
document.getElementById("sort").addEventListener("click", sortCards);