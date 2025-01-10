import React, { useState } from 'react';
import './TransactionForm.css';

const TransactionForm = ({ onAddTransaction }) => {
    const [text, setText] = useState('');
    const [ammount, setAmount] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!text || !ammount) {
            alert('Bitte Beschreibung und Betrag eingeben.');
            return;
        }

        //Übergib die neue Transaktion an die App
        onAddTransaction({
            text,
            amount: parseFloat(ammount),
            date: new Date(),
        });

        //Formular zurücksetzten
        setText('');
        setAmount('');
    };

    return (
        <form classname="transaction-form" onSubmit={handleSubmit}>
            <imput
            type="text"
            placeholder="Beschreibung"
            value={text}
            onChange={(e) => setText(e.target.value)}
            />
            <input
            type="number"
            placeholder="Betrag ( positiv für einnehme, negativ für Ausgabe)"
            value={ammount}
            onChange={(e) => setAmount(e.target.value)}
            />
            <button type="submit">Hinzufügen</button>
        </form>
    );
};

export default TransactionForm;