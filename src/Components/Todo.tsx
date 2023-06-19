
import { Trash } from 'phosphor-react';
import styles from './Todo.module.css';

interface todosInterface {
    id: string;
    todo: string;
    isCompleted: boolean;
    onCompleteTodo: (complete: string) => void;
    onDeleteTodo: (complete: string) => void;
}

export default function Todo({ id, isCompleted, todo, onCompleteTodo, onDeleteTodo}: todosInterface) {

    function handleCheckBox() {
        onCompleteTodo(id);
    }

    function handleButtonDelete(){
        onDeleteTodo(id);
    }

    return (
        <article className={`${isCompleted ? styles.completed : ""} ${styles.todo_item}`}>
            <label className={styles.checkbox_container}>
                <input type='checkbox' onChange={handleCheckBox} checked={isCompleted} />
                <span className={styles.checkmark}></span>
            </label>
            <p className={`${isCompleted ? styles.complete : ""}`}>{todo}</p>
            <button onClick={handleButtonDelete} aria-label='Excluir Item' title='Excluir Item'><Trash size={20}/></button>
        </article>
    )
}
