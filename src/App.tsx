import React, { useState, useEffect } from 'react';
import './App.css';
import Expense from './components/Expense';
import expenseService from './services/expense'
import type { ExpenseProps } from './components/Expense'

const App: React.FC = () => {
  const [expenses, setExpenses] = useState<ExpenseProps[]>([])

  useEffect(() => {
    expenseService.getAllExpenses()
      .then(data => setExpenses(data))
      .catch(error => console.error('Error fetching expenses:', error));
  }, []);

  return (
    <div>
      <h1>Expense Tracker</h1>
      {expenses.length > 0 ? (
        expenses.map(expense => <Expense key={expense.id} id={expense.id} desc={expense.desc} amount={expense.amount} />)
      ) : (
        <p>No expenses available.</p>
      )}
    </div>
  );
}

export default App;
