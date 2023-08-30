import Button from "../Button/Button";
import PropTypes from "prop-types";

const ModalMessage = (props) => {

  return (
    <div className="w-full h-screen flex items-center justify-center fixed inset-0 bg-black bg-opacity-50 z-50">
      <div className="w-5/6 md:w-5/12 lg:w-1/4 h-1/3 bg-gray-300 rounded-lg  shadow-lg shadow-slate-800 flex flex-col gap-y-3 items-center justify-center px-2 text-customGreen  not-italic font-normal leading-4">
        <div className="flex flex-col gap-y-2 items-center text-center">
          <h3 className="text-[9px]">{props.h3}</h3>
        </div>
        <a href="">
          <Button button={"OK"} customWidth="w-[65px]" />
        </a>
      </div>
    </div>
  );
};

ModalMessage.propTypes = {
  h3: PropTypes.string,
};

export default ModalMessage;
