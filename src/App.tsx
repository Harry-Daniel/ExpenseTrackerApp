import React, { useState } from 'react'
import ExpenseList from './components/ExpenseList'
import ExpenseFilter from './components/ExpenseFilter';
import categories from './components/categories';
import ExpenseForm from './ExpenseForm';


function App () {
  const [category,setCategory]=useState('')


  const [Expenses,setExpenses]=useState([
    
    {id: 1 , description: 'aaa', amount: 10, category: 'Utility'},
    {id: 2 , description: 'bbb', amount: 10, category: 'Utility'},
    {id: 3 , description: 'ccc', amount: 10, category: 'Utility'},
    {id: 4 , description: 'ddd', amount: 10, category: 'Utility'},
 ]);


  const visibleExpenses= category?
    Expenses.filter((e)=> e.category===category) :
    Expenses

    
  return (<>

      <div className="mb-3">
        <ExpenseForm/>

      </div>

    <div className='mb-3'>
      <ExpenseFilter onSelectCategory={(category)=>setCategory(category)}/>
    </div>

    <div className='mb-3'>  
      <ExpenseList onDelete={(id)=>setExpenses(Expenses.filter(e=>e.id!==id))} expenses={visibleExpenses}/>
    </div>
      </> 
  )
}

export default App