import React, { useState } from 'react';
import './styles/App.css';
import { Summary, TransactionList, TransactionForm } from './components';

function App() {
  //State für Transaktionen
 const [transactions, setTransactions] = useState([]);

 //Funktion zum hinzuügen einer neuen Transaktion
 const addTransaction = (transaction) => {
  setTransactions([...transactions, transaction]);
 };

 //Funktion zum Löschen einer Transaktion
 const deleteTransaction = (index) => {
  const updateTransactions = transactions.filter((_, i) => i !== index);
  setTransactions(updateTransactions);
 };

 return (
  <div className="App">
    <header className="App-header">
      <h1>Personal Finance Tracker</h1>
    </header>
    <main>
      {/* Zusammenfassung*/}
      <Summary transactions={transactions} />

      {/* Formular für neue Transaktionen */}
      <TransactionForm onAddTransaction={addTransaction} />

      {/* Liste der Transaktionen */}
      <TransactionList
        transactions={transactions}
        onDeleteTransaction={deleteTransaction}
        />
    </main>
  </div>
 )
}

export default App;
