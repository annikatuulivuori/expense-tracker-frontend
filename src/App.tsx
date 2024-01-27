import React from 'react';
import './App.css';
import ExpenseList from './components/ExpenseList';

const App: React.FC = () => {
  return (
    <div>
      <h1>Expense Tracker</h1>
      <ExpenseList />
    </div>
  );
}

export default App;
