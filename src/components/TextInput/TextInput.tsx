

interface TextInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export default function TextInput({ value, onChange }: TextInputProps) {
  return (
    <textarea
      value={value}
      onChange={onChange}
      placeholder="Type your text here..."
      className="w-full h-32 p-2 border rounded"
    />
  );
}
