import React, { useState } from 'react';
import './payments.css';

const Payments = () => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');
  const [amount, setAmount] = useState('');
  const [transactionStatus, setTransactionStatus] = useState('');
  const [transactions, setTransactions] = useState([
    {
      id: 'T1',
      date: '2025-02-10',
      method: 'UPI',
      amount: '₹500',
      status: 'Completed',
    },
    {
      id: 'T2',
      date: '2025-02-08',
      method: 'Credit Card',
      amount: '₹300',
      status: 'Failed',
    },
  ]);

  const handlePayment = () => {
    if (!selectedPaymentMethod || !amount) {
      setTransactionStatus('Please select a payment method and enter the amount.');
      return;
    }

    // Simulating payment process
    const newTransaction = {
      id: `T${transactions.length + 1}`,
      date: new Date().toLocaleDateString(),
      method: selectedPaymentMethod,
      amount: `₹${amount}`,
      status: 'Completed',
    };

    setTransactions([newTransaction, ...transactions]);
    setTransactionStatus('Payment successful!');
    setAmount('');
  };

  return (
    <div className="payments-container">
      <h2>Complete Your Payment</h2>
      <p>Select your payment method and complete your parking payment.</p>

      {/* Payment Method Selection */}
      <div className="payment-methods">
        <div
          className={`payment-method ${selectedPaymentMethod === 'UPI' ? 'selected' : ''}`}
          onClick={() => setSelectedPaymentMethod('UPI')}
        >
          UPI
        </div>
        <div
          className={`payment-method ${selectedPaymentMethod === 'Card' ? 'selected' : ''}`}
          onClick={() => setSelectedPaymentMethod('Card')}
        >
          Credit/Debit Card
        </div>
        <div
          className={`payment-method ${selectedPaymentMethod === 'Wallet' ? 'selected' : ''}`}
          onClick={() => setSelectedPaymentMethod('Wallet')}
        >
          Wallet
        </div>
      </div>

      {/* Payment Details Form */}
      <div className="payment-details">
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter Amount"
          className="amount-input"
        />
      </div>

      {/* Payment Button */}
      <button className="pay-btn" onClick={handlePayment} disabled={!selectedPaymentMethod || !amount}>
        Pay Now
      </button>

      {/* Transaction Status */}
      {transactionStatus && <p className="transaction-status">{transactionStatus}</p>}

      {/* Transaction History */}
      <h3>Past Transactions</h3>
      <div className="transaction-history">
        {transactions.map((transaction) => (
          <div key={transaction.id} className="transaction-item">
            <div className="transaction-details">
              <p><strong>Date:</strong> {transaction.date}</p>
              <p><strong>Method:</strong> {transaction.method}</p>
              <p><strong>Amount:</strong> {transaction.amount}</p>
              <p><strong>Status:</strong> {transaction.status}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Payments;
