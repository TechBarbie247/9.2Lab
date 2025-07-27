export interface TextInputProps {
  onTextChange: (text: string) => void;
  placeholder?: string;
  initialValue?: string;
}

export interface StatsDisplayProps {
  characterCount: number;
  wordCount: number;
  readingTime: number; // in minutes
  showReadingTime?: boolean;
}

export interface CharacterCounterProps {
  minWords?: number;
  maxWords?: number;
  targetReadingTime?: number; // in minutes
}
