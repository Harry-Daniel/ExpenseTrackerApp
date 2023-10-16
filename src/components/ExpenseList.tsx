interface Expenses{
  id: number;
  description: string;
  amount: number;
  category: string;
}

interface Props{
  expenses: Expenses[];
  onDelete: (id:number)=> void;
}

const ExpenseList = ({expenses, onDelete}:Props) => {
  return (
    <table className="table table-bordered">
        <thead>
          <tr>
            <th>Description</th>
            <th>Amount</th>
            <th>Category</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {expenses.map(expense=> <tr key={expense.id}>
            <td>{expense.description}</td>
            <td>{expense.amount}</td>
            <td>{expense.category}</td>
            <td>
                <button onClick={()=>onDelete(expense.id)} className="btn btn-outline-danger">
                  Delete
                </button>            
            </td>
          </tr>)}
        </tbody>

        <tfoot>
          <tr>
            <td>Total</td>
            <td>GHC {expenses.reduce((accumulator,current)=>current.amount+accumulator,0)}</td>
            <td></td>
            <td></td>
          </tr>
        </tfoot>
        

    </table>
  )
}

export default ExpenseList