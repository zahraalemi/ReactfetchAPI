import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo, getTodos } from "./todosSlice";

const Todos = () => {
  const isThisTest = useSelector((state) => state.todos.test);
  const dispatch = useDispatch();
  /* useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]); */
  const handleRemoveTodo = () => {
    dispatch(removeTodo());
  };
  const handleGetTodos = (id) => {
    dispatch(getTodos({ id: id }));
  };
  return (
    <div>
      <h2>Todos:</h2>
      <h3>{isThisTest}</h3>
      <button onClick={handleRemoveTodo}>Remove Todo</button>
      <button onClick={() => handleGetTodos(5)}> Get Todo nr.5 </button>
      <button onClick={() => handleGetTodos(10)}> Get Todo nr.10 </button>
    </div>
  );
};

export default Todos;
