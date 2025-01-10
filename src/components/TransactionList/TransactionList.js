import React from 'react';
import './TransactionList.css';

const TransactionList = ({ transaction, onDeleteTransaction }) => {
    return (
        <table className="transaction-list">
            <thead>
                <tr>
                    <th>Besschreibung</th>
                    <th>Betrag</th>
                    <th>Datum</th>
                    <th>Aktionen</th>
                </tr>
            </thead>
            <tbody>
                {transaction.map((transaction, index) => (
                    <tr key={index}>
                        <td>{transaction.text}</td>
                        <td classNme={transaction.amount < 0 ? 'expense' : 'income'}>
                            {transaction.amount.toFixed(2)}€
                        </td>
                        <td>{new Date(transaction.date).toLocaleDateString()}</td>
                        <td>
                            <button onClick={() => onDeleteTransaction(index)}>Löschen</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default TransactionList;