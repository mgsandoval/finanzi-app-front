"use client";

interface SearchBarProps {
   value: string;
   onChange: (val: string) => void;
   placeholder?: string;
}

const SearchBar = ({ value, onChange, placeholder = "Buscar..." }: SearchBarProps) => {
   return (
      <div className="w-[100%] relative shadow-lg">
         <input
            type="text"
            className="border h-8 box-border transition-[0.2s] duration-[ease-in-out] w-full px-2.5 py-px border-solid border-[#d7d5d5] bg-white"
            placeholder={placeholder}
            value={value}
            onChange={(e) => onChange(e.target.value)}
         />
      </div>
   );
};

export default SearchBar;
