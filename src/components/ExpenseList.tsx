import React, { useState, useEffect } from 'react'
import axios from 'axios'

const ExpenseList: React.FC = () => {
  const [expenses, setExpenses] = useState([])
  const baseUrl = 'http://localhost:8080/api/expenses'

  useEffect(() => {
    const fetchExpenses = async () => {
      try {
        const response = await axios.get(baseUrl + '/viewExpenses')
        setExpenses(response.data)
        console.log('Expenses data: ', response.data)
      } catch (error) {
        console.log('Error fetching expenses: ', error)
      }
    }

    fetchExpenses()
  }, [])

  return (
    <div>
      <h2>All expenses: </h2>
      <ul>
        {expenses.map((expense: any) => (
          <li key={expense.id}>
            {`Description: ${expense.desc}, Amount: $${expense.amount}`}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ExpenseList