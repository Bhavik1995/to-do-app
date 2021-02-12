import React, { useEffect, useState } from 'react';
import './index.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {db} from '../src/firebase_config';
import firebase from 'firebase';
import TodoListItem from './Todo';

const App = () =>{

    const[todos, setTodos] = useState([]);

    const [todoInput,setTodoInput] = useState("");

    useEffect(()=>{
        getTodo();
    },[]);

    const getTodo = () =>{
        db.collection("todos").onSnapshot(function (querySnapshot){
            setTodos(
                querySnapshot.docs.map((doc)=>({
                    id: doc.id,
                    todo: doc.data().todo,
                    inprogress: doc.data().inprogress,
                }))
            );
        });
    }

    const addTodo = (e) =>{
        e.preventDefault();
        db.collection("todos").add({
            inprogress: true,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            todo: todoInput,
        });

        setTodoInput("");
    }

    return(
        <div className="App">
            <div className="inner_div">
            <form>
                <h1 className="header">🔥 To-Do-App 🔥</h1>
                <TextField className="text-field"  value={todoInput} id="standard-basic" label="Write a note" 
                    onChange={(e)=> setTodoInput(e.target.value)}/>
                <Button className="btn_submit" type="submit" variant="contained" onClick={addTodo} style={{display: 'none'}}>Default</Button>
            </form>

            <div>
                {todos.map((todo)=>(
                    <TodoListItem todo={todo.todo} inprogress={todo.inprogress} id={todo.id}/>
                ))}
            </div>
        </div>
    </div>
    );
}

export default App;