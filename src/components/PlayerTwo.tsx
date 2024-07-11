import { activePlayer, currentScore, scores } from '../store/dice';

function PlayerTwo() {
  return (
    <section
      class={`player player--1 ${
        scores()[1] >= 100
          ? 'player--winner'
          : activePlayer() === 1
          ? 'player--active'
          : ''
      }`}>
      <h2 class='name' id='name--1'>
        Player 2
      </h2>
      <p class='score' id='score--1'>
        {scores().at(1)}
      </p>
      <div class='current'>
        <p class='current-label'>Current</p>
        <p class='current-score' id='current--1'>
          {activePlayer() === 1 ? currentScore() : 0}
        </p>
      </div>
    </section>
  );
}

export default PlayerTwo;
