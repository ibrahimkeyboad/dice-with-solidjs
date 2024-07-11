import { activePlayer, currentScore, scores } from '../store/dice';

function PlayerOne() {
  return (
    <section
      class={`player player--0 ${
        scores()[0] >= 100
          ? 'player--winner'
          : activePlayer() === 0
          ? 'player--active'
          : ''
      } `}>
      <h2 class='name' id='name--0'>
        Player 1
      </h2>
      <p class='score' id='score--0'>
        {scores().at(0)}
      </p>
      <div class='current'>
        <p class='current-label'>Current</p>
        <p class='current-score' id='current--0'>
          {activePlayer() === 0 ? currentScore() : 0}
        </p>
      </div>
    </section>
  );
}

export default PlayerOne;
