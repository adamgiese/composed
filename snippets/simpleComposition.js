import Tone from 'tone';

const freq = name =>
  Tone.Frequency(name).toFrequency();

const multiply = a => b => a * b;
const detuneUp = multiply(1.01);

const compose = (a,b) => (...args) => a(b(...args));

const getDetunedFrequency =
  compose(detuneUp, freq);

/* Stage 1 TC39 Native Pipeline operator Syntax */

const getDetunedFrequency = note => note
  |> freq
  |> detuneUp;
