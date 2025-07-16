interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TodoItemProps {
  todo: Todo;
  onToggleTodo: (id: number) => void;
  onDeleteTodo: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  onToggleTodo,
  onDeleteTodo,
}) => {
  return (
    <li className="todo-item">
      <div style={{ display: "flex", alignItems: "center" }}>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggleTodo(todo.id)}
          className="todo-checkbox"
        />
        <span className={`todo-text ${todo.completed ? "completed" : ""}`}>
          {todo.text}
        </span>
      </div>
      <button onClick={() => onDeleteTodo(todo.id)} className="delete-button">
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
