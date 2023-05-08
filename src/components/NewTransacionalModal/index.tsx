import Modal from "react-modal";
import closeImg from "../../assets/close.svg";
import { Container } from "./styles";

interface NewTransactionalModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionalModal({
  isOpen,
  onRequestClose,
}: NewTransactionalModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeImg} alt="Close Modal" />
      </button>
      <Container>
        <h2>Add transaction</h2>

        <input placeholder="Title" />
        <input placeholder="Value" type="number" />
        <input placeholder="Category" />
        <button type="submit">Submit</button>
      </Container>
    </Modal>
  );
}
