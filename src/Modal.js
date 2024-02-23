import { motion } from "framer-motion";
import Backdrop from "./Backdrop";
import './App.css'

const modalVariants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
}

const Modal = ({ handleClose, modalItem }) => {
  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        onClick={(e) => e.stopPropagation()}  
        className="modal"
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div className="flex-box">
          <img style={{height: "100%", width: 250}} src={require('./pizza.jpg')}></img>
          <div style={{height: "100%", padding: 20}}>
              <h2 className="font-link">{modalItem.label}</h2>
              <p className="font-link">{modalItem.description}</p>
          </div>
        </div>
      </motion.div>
    </Backdrop>
  );
};

export default Modal;