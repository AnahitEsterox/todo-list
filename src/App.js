import './App.css';
import { v4 as uuidv4 } from 'uuid';
import {useState} from "react";
import TodoList from "./components/form/TodoList";
import TodoForm from "./components/form/TodoForm";
import TodoFooter from "./components/footer/TodoFooter";

function App() {
    const [todos, setTodos] = useState([
        {
            id: uuidv4(),
            text: 'Learn React',
            isCompleted: false
        },
        {
            id: uuidv4(),
            text: 'Learn Redux',
            isCompleted: false
        },
        {
            id: uuidv4(),
            text: 'Emprove English',
            isCompleted: false
        },
        {
            id: uuidv4(),
            text: 'Emprove English',
            isCompleted: false
        },
        {
            id: uuidv4(),
            text: 'Emprove English',
            isCompleted: false
        },
        {
            id: uuidv4(),
            text: 'Emprove English',
            isCompleted: false
        },
    ]);
    console.log(todos)
  return (

    <div className="App">
        <div className="container">
            <TodoForm onAdd={(text) => {
                if(text !== '') {
                    setTodos([
                        ...todos,{
                            id: Math.random(),
                            text: text,
                            isCompleted: false
                        }
                    ])
                }

            }
            }/>
            <TodoList
                todos={todos}
                onDelete={(todo) => {
                    if(todo.isCompleted) {
                        setTodos(todos.filter((t) => t.id !== todo.id))
                    }
                }}
                onChange={(newTodo) => {
                    setTodos(todos.map((todo) => {
                        if(todo.id === newTodo.id) {
                            return newTodo;
                        }
                        return todo;
                    }))
                }}
            />
            <TodoFooter todos={todos} onClearCompleted={() => {
                setTodos(todos.filter((todo) => !todo.isCompleted ))
            }}/>
            </div>
        </div>

  );
}
export default App;
