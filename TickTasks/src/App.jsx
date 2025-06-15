import { useState, useEffect } from 'react'
import "./App.css";
import Navbar from './components/Navbar'
import { v4 as uuidv4 } from 'uuid';
import { MdModeEdit } from "react-icons/md";
import { AiFillDelete } from "react-icons/ai";

function App() {
  const [Todo, setTodo] = useState('')
  const [Todos, setTodos] = useState([])

  useEffect(() => {
    let todoString = localStorage.getItem("Todos")
    if (todoString){
      let Todos = JSON.parse(todoString)
      setTodos(Todos)
    }
  }, []);

  const saveToLS = (newTodos) => {
    localStorage.setItem("Todos", JSON.stringify(newTodos));
  }

  const AddToDo = () => {
    const updatedTodos = [...Todos, { id: uuidv4(),  Todo, isCompleted: false }];
    setTodos(updatedTodos);
    setTodo('');
    saveToLS(updatedTodos);
  }

  const EditToDo = (e,id) => {
    let t = Todos.filter(i => i.id === id)
    setTodo(t[0].Todo)
    let newTodos = Todos.filter(item => item.id !== id);
    setTodos(newTodos)
    saveToLS(newTodos)
  }

  const DeleteToDo = (e,id) => {
    let newTodos = Todos.filter(item => item.id !== id);
    setTodos(newTodos)
    saveToLS(newTodos)
  }

  const handleChange = (e) => {
    setTodo(e.target.value)
  }

  const handleCheckbox = (e) => {
    let id = e.target.name;
    let index = Todos.findIndex(item => item.id === id);
    let newTodos = [...Todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos)
    saveToLS(newTodos)
  }

  return (
    <>
      <Navbar />
      <div className="bg-white min-h-screen flex justify-center items-center px-4 py-10">
        <div className="bg-[#f0f4f8] w-full max-w-2xl border-2 rounded-lg border-[#94a3b8] flex flex-col items-center transition-all p-6">

          <input onChange={handleChange} value={Todo} type="text" placeholder="Add your todo" className="h-10 w-full bg-white border-2 border-[#94a3b8] rounded-md text-center text-[#1e293b] placeholder:text-[#64748b] mb-6" />

          <button onClick={AddToDo} disabled={Todo.length <= 3} className="h-10 w-full sm:w-1/2 active:scale-98 transition-all bg-blue-600 text-white border-2 border-[#2563eb] rounded-md hover:cursor-pointer hover:bg-blue-600 disabled:bg-blue-200 disabled:border-2 disabled:rounded-md disabled:border-blue-200 disabled:cursor-not-allowed disabled:active:scale-100">Save To-do</button>

          <div className="todos w-full flex flex-col justify-between items-start mt-4 mb-4">
            {Todos.length === 0 && (
              <div className="text-center text-sm sm:text-base text-[#475569]">
                "Your To-Do list is Empty huh! Looks like it's time to dream big or take a well-earned break!" 😎
              </div>
            )}

            {Todos.map(item => (
              <div key={item.id} className="w-full flex flex-col sm:flex-row justify-between items-center mt-4 py-2 px-4 bg-sky-100 hover:bg-sky-200 transition-all rounded-md">
                <div className="flex items-center w-full sm:w-auto">
                  <input name={item.id} onChange={handleCheckbox} type="checkbox" checked={item.isCompleted} className="mr-2" />
                  <div className={`flex-grow ${item.isCompleted ? "line-through" : ""}`}>{item.Todo}</div>
                </div>
                <div className="flex mt-2 sm:mt-0 sm:ml-4">
                  <button onClick={(e) => EditToDo(e, item.id)} className="edit py-2 px-4 active:scale-98 transition-all bg-blue-600 text-white border-2 border-[#2563eb] rounded-md hover:bg-blue-600">
                    <MdModeEdit />
                  </button>
                  <button onClick={(e) => DeleteToDo(e, item.id)} className="delete py-2 px-4 ml-2 active:scale-98 transition-all bg-blue-600 text-white border-2 border-[#2563eb] rounded-md hover:bg-blue-600">
                    <AiFillDelete />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </>
  )
}

export default App;
