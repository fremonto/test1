import React, { useState } from 'react';
    import TodoList from './components/TodoList';
    import AddTodo from './components/AddTodo';

    function App() {
      const [todos, setTodos] = useState([]);

      const addTodo = (text) => {
        setTodos([...todos, { text, id: Date.now() }]);
      };

      const removeTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
      };

      return (
        <div className="min-h-screen bg-gray-100 p-4">
          <h1 className="text-2xl font-bold text-center mb-4">Todo App</h1>
          <AddTodo addTodo={addTodo} />
          <TodoList todos={todos} removeTodo={removeTodo} />
        </div>
      );
    }

    export default App;
