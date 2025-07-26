import React, { useState, useEffect } from 'react';
import type { StatsDisplayProps } from '../../types';

export default function StatsDisplay(props: StatsDisplayProps) {
  const { characterCount, wordCount, readingTime, showReadingTime } = props;

  const [status, setStatus] = useState('Counting...');

  useEffect(() => {
    if (characterCount === 0 && wordCount === 0) {
      setStatus('Waiting for input...');
    } else {
      setStatus('Text detected');
    }
  }, [characterCount, wordCount]);

  return (
    <div className="p-4 border rounded max-w-sm mx-auto text-center">
      <h2 className="text-lg font-bold mb-2">Text Statistics</h2>
      <p>Status: {status}</p>

      <p>
        Characters: {characterCount > 0 ? characterCount : 'No characters'}
      </p>

      <p>
        Words: {wordCount > 0 ? wordCount : 'No words'}
      </p>

      {showReadingTime && wordCount > 0 && (
        <p>Estimated Reading Time: {readingTime.toFixed(2)} min</p>
      )}
    </div>
  );
}
