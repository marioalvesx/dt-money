import Modal from "react-modal";
import outcomeImg from "../../assets/outcome.svg";
import incomeImg from "../../assets/income.svg";
import closeImg from "../../assets/close.svg";
import { Container, TransactionTypeContainer } from "./styles";

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

        <TransactionTypeContainer>
          <button type="button">
            <img src={outcomeImg} alt="Saída" />
            <span>Saída</span>
          </button>
          <button type="button">
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </button>
        </TransactionTypeContainer>

        <input placeholder="Category" />
        <button type="submit">Submit</button>
      </Container>
    </Modal>
  );
}
