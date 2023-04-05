import React from "react";
import { useTodos } from "../Context/useTodos";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButtom } from "./CreateTodoButtom";
import { Modal } from "./Modal";
import { TodoForm } from "./TodoForm";
import { TodoHeader } from "./TodoHeader";
import {TodosError} from "./TodosError";
import {TodosLoading} from "./TodosLoading";
import {EmptyTodos} from "./EmptyTodos";



function App() {
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
    setSearchValue,
    addTodo,
   
    
  } = useTodos();


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
           
      <TodoList
        error={error}
        loading={loading}
        searchedTodos={searchedTodos}
        totalTodos={totalTodos}
        searchText={searchValue}

        onError={()=> <TodosError/>}        
        onLoading={()=><TodosLoading/>}
        onEmptyTodos={()=><EmptyTodos/>}
        onEmptySearchResults={
          (searchtext)=> <p>No hay resultados para {searchtext}</p>
        }
       render={todo=>(
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        )}  
      >
        {/*todo=>(
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        )*/}
      </TodoList>

      
     
      {!!openModal && (
        <Modal>
          <TodoForm 
            addTodo={addTodo}
            setOpenModal={setOpenModal}          
          />
        </Modal>
      )}
      <CreateTodoButtom setOpenModal={setOpenModal} />
    </React.Fragment>
  );
}


export default App;
