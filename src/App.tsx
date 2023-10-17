import React, { useState } from 'react'
import ExpenseList from './components/ExpenseList'
import ExpenseFilter from './components/ExpenseFilter';
import categories from './components/categories';
import ExpenseForm from './ExpenseForm';


function App () {
  const [category,setCategory]=useState('')


  const [Expenses,setExpenses]=useState([
    
    {id: 1 , description: 'Just an Example', amount: 0, category: 'Utility'},
    
 ]);


  const visibleExpenses= category?
    Expenses.filter((e)=> e.category===category) :
    Expenses

    
  return (<>
      <div className="mb-5">

      </div>

      <div className="mb-5">
        <ExpenseForm onSubmit={expense=>setExpenses([...Expenses,{...expense,id :Expenses.length+1}])}/>

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