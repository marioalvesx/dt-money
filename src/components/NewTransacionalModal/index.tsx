import Modal from "react-modal";
import outcomeImg from "../../assets/outcome.svg";
import incomeImg from "../../assets/income.svg";
import closeImg from "../../assets/close.svg";
import { Container, RadioBox, TransactionTypeContainer } from "./styles";
import { useState } from "react";

interface NewTransactionalModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionalModal({
  isOpen,
  onRequestClose,
}: NewTransactionalModalProps) {
  const [type, setType] = useState("");

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
          <RadioBox
            type="button"
            onClick={() => {
              setType("deposit");
            }}
            isActive={type === "deposit"}
            activeColor=""
          >
            <img src={outcomeImg} alt="Saída" />
            <span>Outcome</span>
          </RadioBox>
          <RadioBox
            type="button"
            onClick={() => {
              setType("withdraw");
            }}
            isActive={type === "withdraw"}
            activeColor=""
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Income</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input placeholder="Category" />
        <button type="submit">Submit</button>
      </Container>
    </Modal>
  );
}
