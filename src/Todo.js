import { ListItem, ListItemText, Button } from '@material-ui/core';
import React from 'react';
import { db } from './firebase_config';
import './index.css';

const TodoListItem = ({todo, inprogress, id}) =>{

    const toggleInProgress = () =>{
        db.collection("todos").doc(id).update({
            inprogress: !inprogress
        })
    }

    const deleteTodo = () =>{
        db.collection("todos").doc(id).delete();
    }

    return(
    <>
        <div className="todo_data">
        <ListItem>
            <ListItemText className="list_data" primary={todo} secondary={inprogress ? "In progress" : "Completed"}/>
        </ListItem>

        <Button onClick={toggleInProgress}>{inprogress ? "Done" : "Undone"}</Button>
        <Button onClick={deleteTodo}>X</Button>
        </div>
    </>
    )
}

export default TodoListItem;
