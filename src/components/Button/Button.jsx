import PropTypes from "prop-types";

const Button = ({ button, customWidth }) => {
  const buttonClasses = `w-[292px] h-[41px] m-auto text-white flex flex-col flex-shrink-0 items-center justify-center gap-[10px] text-center px-2 py-4 bg-blue-700 shadow-md shadow-gray-500 border-none rounded-lg hover:opacity-80 cursor-pointer ${customWidth}`;

  return (
    <div className="w-full  flex items-center pt-4">
      <button className={buttonClasses} type="submit">
        {button}
      </button>
    </div>
  );
};

Button.propTypes = {
  button: PropTypes.string,
  customWidth: PropTypes.string,
};

export default Button;
