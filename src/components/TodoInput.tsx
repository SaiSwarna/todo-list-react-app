import { useState, KeyboardEvent } from "react";

interface TodoInputProps {
  onAddTodo: (text: string) => void;
}

const TodoInput: React.FC<TodoInputProps> = ({ onAddTodo }) => {
  const [input, setInput] = useState<string>("");

  const handleAdd = () => {
    onAddTodo(input);
    setInput("");
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleAdd();
  };

  return (
    <div className="input-container">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Add a new task..."
        className="todo-input"
      />
      <button onClick={handleAdd} className="add-button">
        Add
      </button>
    </div>
  );
};

export default TodoInput;
