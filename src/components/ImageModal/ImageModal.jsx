import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
  overlay: {
    backgroundColor: "grey", //rgba format
  },
};

Modal.setAppElement("#root");

const ImageModal = ({ modalIsOpen, closeModal, imgFullUrl }) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <img width={400} height={400} src={imgFullUrl} alt="Large photo" />
    </Modal>
  );
};

export default ImageModal;
