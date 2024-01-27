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
  }
}



export default expenseService