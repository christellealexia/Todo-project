
import { useState } from "react"
import Todo from "./Todo";


const App = () => {
  const [todos, setTodos] = useState([]
   );

  const toggleComplete = id => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const addTodo = text => {
    const newTodo = {
      id: todos.length + 1,
      text,
      completed: false
    };
    setTodos([...todos, newTodo]);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-3xl pt-4">Todo App</h1>
      
      <input className="pt-3 pb-3 py-4 px-10"
        type="text" 
        placeholder="Add a new todo" 
        onKeyDown={e => {
          if (e.key === 'Enter') {
            addTodo(e.target.value);
            e.target.value = '';
          }
        }}
        />
        {todos.map(todo => (
          <Todo 
            key={todo.id} 
            todo={todo} 
            toggleComplete={toggleComplete} 
            deleteTodo={deleteTodo} 
            />
        ))} 
      
    </div>
  );
};

export default App



