import "./field.scss";

interface IField {
  name: string;
  value: string;
  type: string;
  placeholder: string;
  onChange: (e: any) => void;
  onBlur: () => void;
  isDirty: boolean;
  isEmpty: string;
}

const Field: React.FC<IField> = ({
  name,
  value,
  type,
  placeholder,
  onChange,
  onBlur,
  isDirty,
  isEmpty,
}) => {
  return (
    <div className="field">
      {isDirty && isEmpty && <div className="error__message">*{isEmpty}</div>}
      <input
        onChange={(e) => onChange(e)}
        onBlur={onBlur}
        className={`${isDirty && isEmpty ? `error` : ""}`}
        type={type}
        placeholder={placeholder}
        value={value}
        name={name}
      />
    </div>
  );
};

export default Field;
