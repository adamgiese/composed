import Tone from 'tone';

const freq = name =>
  Tone.Frequency(name).toFrequency();

const multiply = a => b => a * b;
const detuneUp = multiply(1.01);

const compose2 = (a,b) => (...args) => a(b(...args));

const getDetunedFrequency =
  compose2(detuneUp, freq);
