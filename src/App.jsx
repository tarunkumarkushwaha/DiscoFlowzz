import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const musicSrc = 'https://cdn.pixabay.com/download/audio/2022/10/25/audio_ecba0c58a1.mp3?filename=stranger-things-124008.mp3';
  // Controls
  const colBg = 'rgba(0, 0, 0, 0.15)';
  const colBar0 = 'rgba(255, 255, 255, 0.04)';
  const colBar1 = 'rgba(255, 255, 255, 0.5)';
  const colBar2 = 'rgba(255, 120, 20, 0.8)';

  const fftSz = 1024;
  const barWidth = 2;
  const barLength = 0.25;
  const bassFactor = 1.2;

  let canvasCtx, audioCtx, audio, stream, analyser, buf, bufLength;
  let initialised = false, playing = false;

  function render() {
    requestAnimationFrame(render);
    visCircle();
  }

  function init() {
    audioCtx = new AudioContext();
    canvasCtx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Create and load audio
    audio = document.createElement('audio');
    audio.src = musicSrc;
    audio.loop = true;
    audio.crossOrigin = "anonymous";

    // Create stream and analyser
    stream = audioCtx.createMediaElementSource(audio);
    analyser = audioCtx.createAnalyser(); // Analyser
    analyser.fftSize = fftSz;
    bufLength = analyser.frequencyBinCount;
    buf = new Uint8Array(bufLength); // Buffer

    // Connections
    stream.connect(analyser);
    analyser.connect(audioCtx.destination);
  }

  const playbtn = () => {
    if (!initialised) {
      init();
      initialised = true;
      render(); // Animation loop
    }
    if (!playing) {
      audio.play();
      play.innerHTML = 'Pause';
    } else {
      audio.pause();
      play.innerHTML = 'Play';
    }
    playing = !playing;
  }

  window.onresize = function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  // Visualisation technique

  function visCircle() {
    analyser.getByteFrequencyData(buf);
    let threshold = 0;
    let width = window.innerWidth
    let height = window.height;
    let dtRot = (360 / bufLength * 2) * Math.PI / 180;
    let bass = Math.floor(buf[1]);
    let radius = -(width * barLength + bass * bassFactor);

    canvasCtx.fillStyle = colBg;
    canvasCtx.fillRect(0, 0, canvas.width, canvas.height);
    canvasCtx.save();
    canvasCtx.scale(0.5, 0.5);
    canvasCtx.translate(window.innerWidth, window.innerHeight);

    function draw(rad, wdt, mlt, rot) {
      for (let i = 0; i < bufLength; ++i) {
        let smp = buf[i];
        if (smp >= threshold) {
          canvasCtx.fillRect(0, rad, wdt, -smp * mlt);
          canvasCtx.rotate(rot);
        }
      }
    }
    canvasCtx.fillStyle = colBar0;
    draw(radius, barWidth, 1.00, dtRot);
    draw(radius, barWidth, 1.00, -dtRot);
    canvasCtx.fillStyle = colBar1;
    draw(radius, barWidth, 0.50, dtRot);
    draw(radius, barWidth, 0.50, -dtRot);
    canvasCtx.fillStyle = colBar2;
    draw(radius, barWidth, 0.05, dtRot);
    draw(radius, barWidth, 0.05, -dtRot);
    canvasCtx.restore();
  }

  return (
    <div className="App">
      <h1>DiscoFlow reloaded</h1>
      <div className="card">
        <button onClick={playbtn}>
          play
        </button>
        <canvas id="canvas"></canvas>
        <div id="title">my music</div>
      </div>
    </div>
  )
}

export default App
