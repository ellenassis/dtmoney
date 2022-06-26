import React, { useState } from 'react';
import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';
import { GlobalStyle } from './styles/global';
import { TransactionModal } from './components/TransactionModal';

import Modal from "react-modal";
import { TransactionsContextProvider } from './hooks/useTransactions';


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
      <TransactionsContextProvider>
        <Header onOpenNewTransactionModal={handleOpenTransactionModal}/>
        <Dashboard />

        <GlobalStyle />
        <TransactionModal isOpen={isTransactionModalOpen} onRequestClose={handleCloseTransactionModal} />
      </TransactionsContextProvider>
  );
}

export default App;
