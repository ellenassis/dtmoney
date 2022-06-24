import React, { useState } from 'react';
import styled from 'styled-components'
import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';
import { GlobalStyle } from './styles/global';
import { TransactionModal } from './components/TransactionModal';

import Modal from "react-modal";

Modal.setAppElement('#root');

function App() {
  const [isTransactionModalOpen, setTransactionModalOpen] = useState(false);

  const handleOpenTransactionModal = () => {
    setTransactionModalOpen(true);
  }

  const handleCloseTransactionModal = () => {
    setTransactionModalOpen(false);
  }
  
  return (
      <>
      <Header onOpenNewTransactionModal={handleOpenTransactionModal}/>
      <Dashboard />

      <GlobalStyle />
      <TransactionModal isOpen={isTransactionModalOpen} onRequestClose={handleCloseTransactionModal} />
      </>
  );
}

export default App;
