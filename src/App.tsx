import PlayerOne from './components/PlayerOne';
import PlayerTwo from './components/PlayerTwo';

import {
  activePlayer,
  currentScore,
  diceImg,
  playing,
  scores,
  setActivePlayer,
  setCurrentScore,
  setDiceImg,
  setPlaying,
  setScores,
  setShowImage,
  showImage,
} from './store/dice';

console.log(playing());

function App() {
  function switchPlayer() {
    setCurrentScore(0);
    setActivePlayer(activePlayer() === 0 ? 1 : 0);
  }

  console.log(diceImg());

  function handleRollDice() {
    if (playing()) {
      const dice = Math.trunc(Math.random() * 6) + 1;

      setShowImage(true);

      setDiceImg(dice);

      if (dice !== 1) {
        setCurrentScore((prev) => prev + dice);
      } else {
        switchPlayer();
      }
    }
  }

  function handleHoldDiceValue() {
    if (playing()) {
      setScores((prev) => {
        const newScores = [...prev];

        console.log(currentScore());

        newScores[activePlayer()] += currentScore();
        console.log(newScores);

        return newScores;
      });
      if (scores().at(activePlayer()) >= 100) {
        setPlaying(false);
      } else {
        switchPlayer(true);
      }
    }
  }

  return (
    <main>
      <PlayerOne />
      <PlayerTwo />

      <img
        style={{ display: showImage() ? 'block' : 'none' }}
        src={`/src/assets/dice-${diceImg()}.png`}
        alt='Playing dice'
        class='dice'
      />
      <button class='btn btn--new'>🔄 New game</button>
      <button onClick={handleRollDice} class='btn btn--roll'>
        🎲 Roll dice
      </button>
      <button onClick={handleHoldDiceValue} class='btn btn--hold'>
        📥 Hold
      </button>
    </main>
  );
}

export default App;