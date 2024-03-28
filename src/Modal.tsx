import { motion, AnimatePresence } from "framer-motion";
import { ReactNode } from "react";
import OutsideClickHandler from "react-outside-click-handler";

interface Props {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

const Modal = ({ children, isOpen, onClose }: Props) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          //   className="modal-overlay"
          className="w-screen h-screen bg-black flex justify-center items-center bg-opacity-20 fixed top-0 "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className=""
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            drag
            transition={{ duration: 0.3 }} // Adjust the duration as needed
          >
            <OutsideClickHandler
              onOutsideClick={() => {
                onClose();
              }}
            >
              {children}
            </OutsideClickHandler>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
