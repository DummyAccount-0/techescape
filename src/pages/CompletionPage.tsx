import React, { useEffect } from 'react';
import { useGame } from '../contexts/GameContext';
import { useAntiCheat } from '../hooks/useAntiCheat';
import { Award, Clock, KeyRound, Sparkles } from 'lucide-react';

const CompletionPage: React.FC = () => {
  const { currentTeam, resetGame } = useGame();
  const { exitFullScreen } = useAntiCheat(() => {});

  // Calculate completion time
  const getCompletionTime = () => {
    if (!currentTeam?.startTime || !currentTeam?.endTime) return 'N/A';

    const startTime = new Date(currentTeam.startTime).getTime();
    const endTime = new Date(currentTeam.endTime).getTime();
    const timeDiff = endTime - startTime;

    // Format time
    const hours = Math.floor(timeDiff / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    return `${hours > 0 ? `${hours}h ` : ''}${minutes}m ${seconds}s`;
  };

  // Exit full screen when component mounts
  useEffect(() => {
    exitFullScreen();
  }, []);

  if (!currentTeam) {
    resetGame();
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 px-4 py-12">
      {/* Subtle glowing overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gray-800 via-black to-gray-800 opacity-60 z-0" />
      {/* Subtle particle background (you might need a library for more advanced effects) */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-10">
        {Array.from({ length: 50 }).map((_, index) => (
          <div
            key={index}
            className="absolute rounded-full bg-gray-600 opacity-30 animate-scatter"
            style={{
              top: `${Math.random() * 100}vh`,
              left: `${Math.random() * 100}vw`,
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-20 max-w-3xl w-full bg-gray-800/80 rounded-xl shadow-2xl overflow-hidden backdrop-blur-md border-2 border-gray-700">
        <div className="bg-gray-900/70 p-10 text-center border-b border-gray-700">
          <KeyRound size={60} className="text-yellow-500 mx-auto mb-4 animate-pulse" />
          <h1 className="text-5xl font-bold text-yellow-400 mb-3 animate-fade-in-down">ESCAPE COMPLETE!</h1>
          <p className="text-xl text-gray-400 italic">Team <span className="text-yellow-300">{currentTeam.name}</span> has unlocked the exit!</p>
        </div>

        <div className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-700/70 p-6 rounded-lg flex items-center border border-gray-600">
              <div className="p-3 bg-yellow-500/20 rounded-full mr-4">
                <Award size={28} className="text-yellow-400 animate-jump-in" />
              </div>
              <div>
                <p className="text-gray-400 text-sm uppercase tracking-wider mb-1">Challenge</p>
                <p className="text-white font-semibold text-lg">All 10 Levels Solved</p>
              </div>
            </div>

            <div className="bg-gray-700/70 p-6 rounded-lg flex items-center border border-gray-600">
              <div className="p-3 bg-yellow-500/20 rounded-full mr-4">
                <Clock size={28} className="text-yellow-400 animate-fade-in-left" />
              </div>
              <div>
                <p className="text-gray-400 text-sm uppercase tracking-wider mb-1">Time Taken</p>
                <p className="text-white font-semibold text-lg">{getCompletionTime()}</p>
              </div>
            </div>
          </div>

          <div className="text-center mb-10">
            <p className="text-lg text-gray-300 mb-6">
              The digital locks have been bypassed, the AI's defenses overcome. Your team's sharp minds and collaborative spirit have successfully navigated the treacherous circuits of the Tech Escape Room.
            </p>
            <div className="inline-block">
              <Sparkles size={48} className="text-yellow-500 animate-spin-slow" />
            </div>
            <p className="text-gray-400 mt-4 text-sm italic">A sense of relief washes over you as the final mechanism clicks open.</p>
            <p>Show the Co-ordinators to get a sigh of relief.</p>
            <p>You have S U R V I V E D!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompletionPage;