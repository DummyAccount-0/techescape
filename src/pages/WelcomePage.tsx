import React, { useEffect, useRef, useState } from 'react';
import { useGame } from '../contexts/GameContext';

const Terminal: React.FC<{ messages: string[] }> = ({ messages }) => {
  const [displayedMessages, setDisplayedMessages] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < messages.length) {
      const timeout = setTimeout(() => {
        setDisplayedMessages(prev => [...prev, messages[currentIndex]]);
        setCurrentIndex(prev => prev + 1);
      }, 1200);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, messages]);

  return (
    <div className="bg-black text-green-400 font-mono px-6 py-4 rounded-lg shadow-inner max-w-md w-full text-left whitespace-pre-line mb-6">
      {displayedMessages.map((msg, idx) => (
        <div key={idx}>{msg}</div>
      ))}
    </div>
  );
};

// 🦋 Butterfly animation component
const ButterflyCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');

    if (!canvas || !ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let theta = 0;

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.strokeStyle = 'rgba(255, 0, 255, 0.6)';
      ctx.lineWidth = 1;
      ctx.beginPath();

      for (let i = 0; i < 100; i++) {
        theta += 0.01;
        const r =
          Math.exp(Math.sin(theta)) -
          2 * Math.cos(4 * theta) +
          Math.pow(Math.sin((2 * theta - Math.PI) / 24), 5);
        const x = r * Math.cos(theta) * 100 + canvas.width / 2;
        const y = r * Math.sin(theta) * 100 + canvas.height / 2;
        ctx.lineTo(x, y);
      }

      ctx.stroke();
      requestAnimationFrame(draw);
    };

    draw();

    // Handle resizing
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none"
    />
  );
};

const WelcomePage: React.FC = () => {
  const { setGameState } = useGame();

  const welcomeMessages = [
    'Initializing System...',
    'Secure Connection Established...',
    'Welcome to System Override',
    "Oh..Oh..NOOOOOOOOOOOOOOOO!",
    'Engineers, Your Experiment has gone rouge.',
    'Form a team, shut down the system and escape before it is too late!',
    "Good luck. You'll need it.",
  ];

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-900 px-4 overflow-hidden">
      {/* 🦋 Background Animation */}
      <ButterflyCanvas />

      {/* Left/Right gradient lines */}
      <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-purple-500 to-transparent animate-pulse z-10" />
      <div className="absolute right-0 top-0 h-full w-1 bg-gradient-to-t from-blue-500 to-transparent animate-pulse z-10" />

      {/* Main content */}
      <div className="z-20 flex flex-col items-center">
        <div className="text-center mb-8 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            System <span className="text-blue-400">Override</span>
          </h1>
        </div>

        <Terminal messages={welcomeMessages} />

        <div className="text-center">
          <button
            onClick={() => setGameState('registration')}
            className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white text-lg font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:translate-y-[-2px]"
          >
            Begin Your Escape
          </button>
        </div>
        <br /><br /><br />
        <div className="text-center animate-pulse">
          <h2
            style={{
              fontSize: '1.5em',
              fontWeight: 'bold',
              color: '#ff6ec7', // Stylish color
              textShadow: '2px 2px 4px #000000', // Subtle shadow
              letterSpacing: '1px', // थोड़ा सा लेटर-स्पेसिंग
            }}
          >
            PRESENTED BY
          </h2>
          <h1
            style={{
              fontSize: '2.5em',
              fontWeight: 'bold',
              color: '#a78bfa', // Another stylish color
              textShadow: '2px 2px 6px #000000', // More prominent shadow
              letterSpacing: '2px',
              fontFamily: 'monospace', // Stylish font
            }}
          >
            DEPARTMENT OF CSE
          </h1>
        </div>
        <div className=' from-purple-500 to-transparent animate-pulse z-10 text-center mt-0'>
          <div style={{ fontSize: '1.0em', fontWeight: 'bold', color: '#f0abfc' }}>Coordinator</div>
          <div style={{ fontSize: '1.0em', color: '#e879f9' }}>Prof. Nandini</div>
          <div style={{ fontSize: '1.0em', fontWeight: 'bold', color: '#f0abfc', marginTop: '0.5em' }}> Student Co-ordinators </div>
          <p style={{ fontSize: '1.0em', color: '#e879f9' }}>Rajat Prakash Dhal</p>
          <p style={{ fontSize: '1.0em', color: '#e879f9' }}>Priyanshu</p>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;