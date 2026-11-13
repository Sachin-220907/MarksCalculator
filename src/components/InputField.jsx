function InputField({
    label,
    name,
    value,
    onChange,
    type = "text",
    placeholder = "",
    min,
    max
}) {
    return (
        <div className="input-group">

            <label htmlFor={name}>
                {label}
            </label>

            <input
                id={name}
                name={name}
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                min={min}
                max={max}
            />

        </div>
    );
}

export default InputField;