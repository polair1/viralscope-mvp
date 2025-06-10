import React from 'react';

const ViralScoreDisplay = ({ score }) => (
  <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-6 text-white text-center">
    <div className="text-4xl font-bold mb-2">{score}%</div>
    <div className="text-lg">Potencial Viral</div>
    <div className="text-sm opacity-90 mt-2">
      {score >= 80 ? "¡Excelente!" : score >= 60 ? "Bueno" : "Mejorable"}
    </div>
  </div>
);

export default ViralScoreDisplay;