import type { StatsDisplayProps } from '../../types';

export default function StatsDisplay(props: StatsDisplayProps) {
  const { characterCount, wordCount, readingTime, showReadingTime } = props;

  return (
    <div className="p-4 border rounded max-w-sm mx-auto text-center">
      <h2 className="text-lg font-bold mb-2">Text Statistics</h2>

      {characterCount === 0 && wordCount === 0 && <p>Status: Waiting for input...</p>}
      {(characterCount > 0 || wordCount > 0) && <p>Status: Text detected</p>}

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
