import React, { useState } from 'react'
import ExpenseList from './components/ExpenseList'


function App () {
  const [Expenses,setExpenses]=useState([
    
    {id: 1 , description: 'aaa', amount: 10, category: 'Utility'},
    {id: 2 , description: 'bbb', amount: 10, category: 'Utility'},
    {id: 3 , description: 'ccc', amount: 10, category: 'Utility'},
    {id: 4 , description: 'ddd', amount: 10, category: 'Utility'},
 ]);

    
  return (
    <div>
      <ExpenseList onDelete={(id)=>setExpenses(Expenses.filter(e=>e.id!==id))} expenses={Expenses}/>
    </div>
  )
}

export default App