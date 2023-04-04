import React from "react";
import { TodoContext } from "../Context";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButtom } from "./CreateTodoButtom";
import { Modal } from "./Modal";
import { TodoForm } from "./TodoForm";
import { TodoHeader } from "./TodoHeader";

function AppUI() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    totalTodos, 
    completedTodos,
    searchValue, 
    setSearchValue 
  } = React.useContext(TodoContext);
  return (
    <React.Fragment>
      <TodoHeader>
      <TodoCounter 
                totalTodos={totalTodos}
                completedTodos={completedTodos}
            />
            <TodoSearch
                searchValue={searchValue}
                setSearchValue={setSearchValue}
            />

      </TodoHeader>
           
      
      <TodoList>
        {error && <p>Desespérate,hubo un error...</p>}
        {loading && <p>Estamos cargando,no desesperes...</p>}
        {!loading && !searchedTodos.length && <p>¡Crea tu primer TODO!</p>}
        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>
      {!!openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}
      <CreateTodoButtom setOpenModal={setOpenModal} />
    </React.Fragment>
  );
}
export { AppUI };
