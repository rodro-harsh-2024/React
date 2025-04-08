import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

function Todos() {
  const todos = useSelector((state) => state.todos); // Make sure this path is correct
  const dispatch = useDispatch();

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
        Your Todo List
      </h2>

      {todos.length === 0 ? (
        <p className="text-center text-gray-500">No todos yet. Add some!</p>
      ) : (
        <ul className="space-y-4">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="flex items-center justify-between p-4 bg-gray-100 rounded-md shadow-sm hover:shadow-md transition-shadow"
            >
              <span className="text-gray-800">{todo.text}</span>
              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="text-sm text-white bg-red-500 hover:bg-red-600 px-4 py-2 rounded-md transition-colors"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Todos;
