import logoImg from '../../assets/logo.svg';
import { Container, Content } from './styles';

interface HeaderProps {
  onOpenNewTransactionModal: () => void; 
  // é uma função que nao recebe parametro e nao devolve nada.
}

export function Header({ onOpenNewTransactionModal }: HeaderProps) {
  
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money" />
        <button type="button" onClick={onOpenNewTransactionModal}>
          New transaction
        </button>

        
      </Content>
    </Container>
  )
}