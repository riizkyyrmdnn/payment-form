import PropTypes from "prop-types";

export function InputField({ id, name, label, type = "text", value, onChange, maxLength, className, placeholder }) {
  return (
    <div className={className}>
      <label htmlFor={id} className="block text-sm font-medium leading-6 text-gray-900">
        {label}
      </label>
      <div className="mt-2">
        <input
          id={id}
          name={name}
          type={type}
          autoComplete="off"
          spellCheck="false"
          value={value}
          onChange={onChange}
          maxLength={maxLength}
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
          placeholder={placeholder}
          required
        />
      </div>
    </div>
  );
};

InputField.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.oneOf(["text", "email", "number", "tel"]),
  value: PropTypes.string,
  onChange: PropTypes.func,
  maxLength: PropTypes.number,
  className: PropTypes.string,
  placeholder: PropTypes.string,
};
