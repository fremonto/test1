import React, { useState } from 'react';

    function AddTodo({ addTodo }) {
      const [text, setText] = useState('');

      const handleSubmit = (e) => {
        e.preventDefault();
        if (!text.trim()) return;
        addTodo(text);
        setText('');
      };

      return (
        <form onSubmit={handleSubmit} className="mb-4">
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="border p-2 rounded w-full"
            placeholder="Add a new todo"
          />
        </form>
      );
    }

    export default AddTodo;
