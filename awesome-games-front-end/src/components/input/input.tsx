interface InputProps {
  label: string;
  value: any;
  onChange: (text: string) => any;
}
export const Input: React.FC<InputProps> = ({ label, value, onChange }) => {
  return (
    <div className=" mx-2 w-[calc(100%-16px)] flex flex-col">
      <label className="font-bold text-lg my-1">{label}</label>
      <input
        className="bg-white rounded-lg  border-2 p-3"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};
