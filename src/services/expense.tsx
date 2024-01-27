const baseUrl = 'http://localhost:8080/api/expenses'

interface Expense {
  id: number;
  desc: string;
  amount: number;
}

const expenseService = {
  getAllExpenses: async (): Promise<Expense[]> => {
    try {
      const response = await fetch(`${baseUrl}/viewExpenses`)
      if (!response.ok) {
        throw new Error('Failed to fetch expenses')
      }
      const data = await response.json()
      console.log('Expenses data: ', data)
      return data
    } catch (error) {
      console.log('Error fetching expenses: ', error)
      throw error
    }
  },

  addExpense: async (newExpense: Expense): Promise<void> => {
    try {
      const response = await fetch(`${baseUrl}/addExpense`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newExpense),
      })
      if (!response.ok) {
        throw new Error('Failed to add expense')
      }
    } catch (error) {
      console.log('Error in adding new expense: ', error)
      throw error
    }


  }
}



export default expenseService