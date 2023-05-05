import Modal from "react-modal";

interface NewTransactionalModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionalModal({
  isOpen,
  onRequestClose,
}: NewTransactionalModalProps) {
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <h2>Add transaction</h2>
    </Modal>
  );
}
