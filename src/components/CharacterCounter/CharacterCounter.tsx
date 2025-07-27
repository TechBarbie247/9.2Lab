import React, { useState } from 'react';
import TextInput from '../TextInput/TextInput';
import StatsDisplay from '../StatsDisplay/StatsDisplay';

export default function CharacterCounter() {
  const [text, setText] = useState('');

  const characterCount = text.length;
  const wordCount = text.trim() === '' ? 0 : text.trim().split(/\s+/).length;
  const readingTime = wordCount / 200; // Assuming 200 words per minute
  const showReadingTime = wordCount > 0;

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-center">Character Counter</h1>

      {/* Controlled input via TextInput */}
      <TextInput value={text} onChange={e => setText(e.target.value)} />

      {/* Show stats only if there's input */}
      {text.length > 0 ? (
        <StatsDisplay
          characterCount={characterCount}
          wordCount={wordCount}
          readingTime={readingTime}
          showReadingTime={showReadingTime}
        />
      ) : (
        <p className="text-center text-gray-500 mt-4">Start typing to see stats...</p>
      )}
    </div>
  );
}
