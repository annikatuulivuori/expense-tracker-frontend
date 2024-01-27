import React, { useState } from 'react'
import type { ExpenseProps } from './Expense'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.css'

interface ExpenseFormProps {
  onExpenseSubmit: (expense: ExpenseProps) => void
}

const ExpenseForm: React.FC<ExpenseFormProps> = ({ onExpenseSubmit }) => {
  const [desc, setDesc] = useState('')
  const [amount, setAmount] = useState('')

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()

    if (!desc || !amount) {
      alert('Please enter both description and amount.')
      return
    }

    const newExpense: ExpenseProps = {
      id: Math.floor(Math.random() * (100 - 1 + 1) + 1),
      desc,
      amount: parseFloat(amount)
    }

    onExpenseSubmit(newExpense)
    setDesc('')
    setAmount('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Description:
        <input type="text" value={desc} onChange={(e) => setDesc(e.target.value)} />
      </label>
      <label>
        Amount:
        <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
      </label>
      <Button variant="outline-primary" type="submit">Add Expense</Button>
    </form>
  )
}

export default ExpenseForm