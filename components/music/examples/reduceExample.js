import React, { useState, useRef, useEffect } from 'react'
import DisplayButton from '../../DisplayButton.js'
import Tone from 'tone';
import play from '../util/play.js';

const melody = ['D4','E4','F4','G4','A4','Bb4','C#4','Bb4','A4','G4','F4','E4','F4'];
const withTime = (name, index) => 
  ({ name, length: Tone.Time('.125'), time: Tone.Time('.125').toSeconds() * index, });

const toLength = (total, note) => total + Tone.Time(note.length).toMilliseconds();
const length = melody.map(withTime).reduce(toLength, 0)


export default () => {
  const [ timer, setTimer ] = useState(0)
  const [ isPlaying, setIsPlaying ] = useState(false)
  const timerResolution = 50

  const handleIncrement = () => {
    setTimer(timer + timerResolution);

    if (timer > length) {
      setTimer(length);
      setIsPlaying(false);
    }
  }

  const handleClick = () => {
    setTimer(0);
    setIsPlaying(true);
    play(melody.map(withTime))();
  }

  useInterval(handleIncrement, isPlaying ? timerResolution : null)

  return (
    <div>
      <DisplayButton id='reduceExample' fn={handleClick}>
        Play Melody
      </DisplayButton>

      <pre style={{ textAlign: 'center' }}>
        {(timer / 1000).toFixed(3)}
      </pre>
    </div>
  );
};

function useInterval(callback, delay) { // taken from https://overreacted.io/making-setinterval-declarative-with-react-hooks/
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}
