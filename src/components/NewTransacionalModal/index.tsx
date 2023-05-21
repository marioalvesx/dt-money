import Modal from "react-modal";
import outcomeImg from "../../assets/outcome.svg";
import incomeImg from "../../assets/income.svg";
import closeImg from "../../assets/close.svg";

import { Container, RadioBox, TransactionTypeContainer } from "./styles";
import { FormEvent, useState, useContext } from "react";
import { TransactionsContext } from "../../TransactionsContext";

interface NewTransactionalModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionalModal({
  isOpen,
  onRequestClose,
}: NewTransactionalModalProps) {
  const { createTransaction } = useContext(TransactionsContext);

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState("");
  const [type, setType] = useState("");

  function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();

    createTransaction({
      title,
      amount,
      category,
      type,
    });
  }

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
      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Add transaction</h2>

        <input
          placeholder="Title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <input
          type="number"
          placeholder="Value"
          value={amount}
          onChange={(event) => setAmount(Number(event.target.value))}
        />

        <TransactionTypeContainer>
          <RadioBox
            type="button"
            onClick={() => {
              setType("withdraw");
            }}
            isActive={type === "withdraw"}
            activeColor="green"
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Income</span>
          </RadioBox>
          <RadioBox
            type="button"
            onClick={() => {
              setType("deposit");
            }}
            isActive={type === "deposit"}
            activeColor="red"
          >
            <img src={outcomeImg} alt="Saída" />
            <span>Outcome</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input
          placeholder="Category"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        />

        <button type="submit">Submit</button>
      </Container>
    </Modal>
  );
}
