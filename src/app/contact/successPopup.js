const {
  Modal,
  ModalTrigger,
  ModalBody,
  ModalContent,
  ModalFooter,
} = require("../ui/animated-modal");
import { AnimatePresence, motion } from "motion/react";
import { HoverBorderGradient } from "../ui/hover-border-gradient";

const SuccessMessage = ({ open, handleClose, isError }) => {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black bg-opacity-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white dark:bg-neutral-900 p-6 rounded-xl shadow-xl max-w-md w-full"
            initial={{ scale: 0.8, y: 50, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
            <div className="mb-4 text-center">
              <h2 className="text-xl font-bold mb-2">
                {isError ? "Message not sent" : "Message sent!"}
              </h2>
              <p className={isError ? "text-red-600" : "text-green-600"}>
                {isError
                  ? "There was a problem sending your message. Try again later."
                  : "Thanks for reaching out. I'll get back to you soon!"}
              </p>
            </div>
            <div className="flex justify-center">
              <HoverBorderGradient
                containerClassName="rounded-full"
                as="button"
                onClick={handleClose}
                className=" dark:bg-black px-6 py-2 bg-black text-white dark:text-white flex items-center space-x-2"
              >
                OK
              </HoverBorderGradient>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SuccessMessage;
