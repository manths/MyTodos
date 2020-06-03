import React from 'react';
import { useState } from 'react';

const Todos = ({ index, todosList }) => {
  return (
    <div>
      {todosList.text}
    </div>
  )
}

const TodoForm = ({ addingTodo }) => {
  const [value, setValue] = useState('')

  const handelChange = e => {
    e.preventDefault();
    if (!value) return;
    addingTodo(value);
    setValue('');
  }

  return (
    <div>
      <form onSubmit={handelChange}>
        <input type='text' value={value} onChange={e => setValue(e.target.value)} />
        <input type='submit' />
      </form>
    </div>
  )
}


const Home = () => {

  const [todos, setTodos] = useState([{
    text: ''
  }])

  const addingTodo = (text) => {
    const newAddtodo = [...todos, { text }]
    setTodos(newAddtodo)
  }

  return (
    <div>
      <h1>Todos With Hooks</h1>
      {todos.map((todosList, index) => {
        return (
          <Todos key={index} index={index} todosList={todosList} />
        )
      })}
      <TodoForm addingTodo={addingTodo} />
    </div>
  )
}
export default Home;