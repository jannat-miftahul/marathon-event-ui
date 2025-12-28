import PropTypes from "prop-types";

const Modal = ({ children, onClose }) => {
    return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50\">
            <div className="bg-base-100 p-4 sm:p-6 rounded-lg shadow-xl relative w-full max-w-[95vw] sm:max-w-md lg:max-w-lg max-h-[90vh] overflow-y-auto border border-base-300">
                <button 
                    onClick={onClose} 
                    className="absolute top-2 right-2 w-8 h-8 flex items-center justify-center text-xl text-base-content hover:bg-base-200 rounded-full transition-colors"
                >
                    &times;
                </button>
                {children}
            </div>
        </div>
    );
};

Modal.propTypes = {
    children: PropTypes.node.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default Modal;
