import React from 'react';

    function TodoItem({ todo, removeTodo }) {
      return (
        <li className="flex justify-between items-center bg-white p-2 rounded shadow">
          <span>{todo.text}</span>
          <button
            onClick={() => removeTodo(todo.id)}
            className="text-red-500 hover:text-red-700"
          >
            Remove
          </button>
        </li>
      );
    }

    export default TodoItem;
