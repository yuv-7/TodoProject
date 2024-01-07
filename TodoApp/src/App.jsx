import { useState, useEffect } from 'react';
import './App.css'
import TodoForm from './Components/TodoForm';
import TodoList from './Components/TodoList';
import { TodoContextProvider } from './Contexts';
import Header from './Components/Header';

function App() {

  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  }

  const editTodo = (id, todo) => {
    setTodos((prev) => prev.map((item) => item.id === id ? todo : item));
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((item) => item.id !== id));
  }

  const toggleCheck = (id) => {
    setTodos((prev) => prev.map((item) => item.id === id ? { ...item, completed: !item.completed } : item))
  }

  useEffect(() => {
    const todo = JSON.parse(localStorage.getItem("todos"));
    if (todo && todo.length > 0) {
      setTodos(todo);
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  return (
    <TodoContextProvider value={{ todos, addTodo, editTodo, deleteTodo, toggleCheck }}>
    <Header />
      <TodoForm />
      <div className="formtodo bg-slate-500 text-slate-900 w-full h-max flex flex-col justify-center items-center mt-2">
      {
        todos.map((todo) => {
          return <TodoList key={todo.id} todo={todo} />
        })
      }
      </div>
    </TodoContextProvider>
  )
}

export default App;
