import PropTypes from "prop-types";

const Input = (props) => {
  const { legend, type, placeholder, name, value, onChange, error } = props;

  const inputClasses = `flex p-4 gap-2 self-stretch items-center rounded-lg border ${
    error ? "border-red-500" : "border-gray-300"
  } focus:outline-none`;

  return (
    <div className="w-4/5 ">
      <fieldset className="max-w-xl m-auto flex flex-col items-center">
        <legend>{legend}</legend>
        <input
          type={type}
          placeholder={placeholder}
          className={inputClasses}
          name={name}
          value={value}
          onChange={onChange}
        />
        {error && (
          <span className="error-message text-red-600 text-xs font-bold ">
            Campo obrigatório
          </span>
        )}
      </fieldset>
    </div>
  );
};

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  legend: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  error: PropTypes.bool,
};

export default Input;
