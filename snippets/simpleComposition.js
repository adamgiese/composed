import Tone from 'tone';

const getFrequencyFromName = name => 
  Tone.Frequency(name).toFrequency();

const multiply = a => b => a * b;
const detuneUp = multiply(1.01);

const compose2 = (a,b) => (...args) => a(b(...args));
const pipe2 = (a,b) => (...args) => b(a(...args));

const getDetunedFrequency = 
  compose2(detuneUp, getFrequencyFromName);

// const getDetunedFrequency = 
//   pipe2(getFrequencyFromName, detuneUp);
