import React, { FormEvent, useState } from "react";
import Modal from "react-modal";
import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import { api } from "../../services/api";
import { Container, TransactionTypeContainer, Button } from './styles';

interface TransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function TransactionModal({isOpen, onRequestClose}: TransactionModalProps) {
  const [type, setType] = useState('deposit');
  const [title, setTitle] = useState('');
  const [value, setValue] = useState(0);
  const [category, setCategory] = useState('');

  const handleCreateNewTransaction = (e: FormEvent) => {
    e.preventDefault();

    const data = {
      title,
      value,
      category
    }

    api.post('/transactions', data);
  }

  return (

      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
      >
        <button type="button" onClick={onRequestClose} className="react-modal-close">
          <img src={closeImg} alt="fechar" />
        </button>

        <Container onSubmit={handleCreateNewTransaction}>
          <h2>Cadastrar transação</h2>

          <input 
          placeholder="Título"
          value={title}
          onChange={e => setTitle(e.target.value)}
           />

          <input type="number" 
          placeholder="Valor"
          value={value}
          onChange={e => setValue(Number(e.target.value))}
           />

          <TransactionTypeContainer>
            <Button type="button" onClick={() => setType('deposit')} isActive={type === "deposit"} color="#33CC95">
              <img src={incomeImg} alt="Entrada" />
              <span>Entrada</span>
            </Button>

            <Button type="button" onClick={() => setType('withdraw')} isActive={type === "withdraw"} color="#E52E40">
              <img src={outcomeImg} alt="Entrada" />
              <span>Saída</span>
            </Button>
          </TransactionTypeContainer>

          <input placeholder="Categoria"
          value={category}
          onChange={e => setCategory(e.target.value)}
           />

          <button type="submit">
            Cadastrar
          </button>
        </Container>
      </Modal>
  );
}
