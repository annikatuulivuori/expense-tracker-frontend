import React from 'react'

interface ExpenseProps {
  id: number,
  desc: string;
  amount: number;
}

const Expense: React.FC<ExpenseProps> = ({ id, desc, amount }) => {
  return (
    <div>
      <p><strong>{desc}</strong> <em>{amount}</em></p>
    </div>
  )
}

export default Expense
export type { ExpenseProps }