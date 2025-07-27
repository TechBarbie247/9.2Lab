import React from 'react';

interface TextInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
}

export default function TextInput({ value, onChange, placeholder = "Type here..." }: TextInputProps) {
  return (
    <textarea
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      rows={6}
      className="w-full p-3 border border-pink-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-400"
    />
  );
}

