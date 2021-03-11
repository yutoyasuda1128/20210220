import { useState } from 'react';

function Todo() {
    const [todoList, setTodoList] = useState([]);
    const [inputTodo, setInputTodo] = useState("");
    
    
    function write() {
        setTodoList(todoList => [...todoList, inputTodo]);
        setInputTodo(''); 
    }
    function handleInputTodo(e) {
        setInputTodo(e.target.value);
    }
    function handleDeleteTodo(index) {
        const todos = [...todoList];
        todos.splice(index,1);
        setTodoList(todos);
    }
    
    return(
        <div>
            <input type="text" onChange={handleInputTodo} value={inputTodo}/>  
            <button onClick={write}>登録</button>
            <ul>
                 {todoList.map((todo, index) => (<li key={index}>{ todo } <button onClick={() => handleDeleteTodo(index)}>完了</button></li>))}
            </ul>
        </div>
    ); 
}

export default Todo;