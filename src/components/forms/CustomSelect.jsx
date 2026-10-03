import { optionCode, optionLabel } from "@/utils/product";

const CustomSelect = ({ id, options, value, onChange }) => {
  return (
    <select id={id} value={value} onChange={(e) => onChange(e.target.value)}>
      {options.length ? (
        options.map((option) => {
          const code = optionCode(option);
          return (
            <option key={String(code)} value={code}>
              {optionLabel(option)}
            </option>
          );
        })
      ) : (
        <option value="">No disponible</option>
      )}
    </select>
  );
};

export default CustomSelect;
