import React from "react";

import "../styles/TodoForm.css";

function TodoForm({addTodo, setOpenModal}) {
  const [newTodoValue, setNewTodoValue] = React.useState("");
  

  const onCancel = () => {
    setOpenModal(false);
  };

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };

  const onAdd = () => {};

  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
  };

  return (
    <form onSubmit={onSubmit}>
      <label>Escribe un nuevo Todo</label>
      <textarea
        placeholder="Cortar la Cebolla para el almuerzo"
        value={newTodoValue}
        onChange={onChange}
      />
      <div className="TodoForm-buttonContainer">
        <button
          onClick={onCancel}
          type="button"
          className="TodoForm-button TodoForm-button--cancel"
        >
          Cancelar
        </button>
        <button
          onClick={onAdd}
          type="submit"
          className="TodoForm-button TodoForm-button--add"
        >
          Añadir
        </button>
      </div>
    </form>
  );
}

export { TodoForm };
