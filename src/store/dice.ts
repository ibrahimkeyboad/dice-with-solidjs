import { createSignal } from 'solid-js';

export const [scores, setScores] = createSignal([0, 0]);
export const [currentScore, setCurrentScore] = createSignal(0);
export const [activePlayer, setActivePlayer] = createSignal(0);
export const [playing, setPlaying] = createSignal(true);
export const [diceImg, setDiceImg] = createSignal(0);
export const [showImage, setShowImage] = createSignal(false);
