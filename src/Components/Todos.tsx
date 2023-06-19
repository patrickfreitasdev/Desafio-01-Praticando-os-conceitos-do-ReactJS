import { PlusCircle } from 'phosphor-react';
import styles from './Todos.module.css';
import { v4 as uuidv4 } from 'uuid'
import EmptyTodos from './EmptyTodos';
import { ChangeEvent, FormEvent, InvalidEvent, useEffect, useState } from 'react';
import Todo from './Todo';

export interface todosInterface {
  id: string;
  todo: string;
  isCompleted: boolean;
}

const todos: todosInterface[] = [
  {
    id: uuidv4(),
    todo: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    isCompleted: false,
  },
  {
    id: uuidv4(),
    todo: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    isCompleted: false,
  },
  {
    id: uuidv4(),
    todo: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    isCompleted: true,
  },
  {
    id: uuidv4(),
    todo: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    isCompleted: false,
  },
  {
    id: uuidv4(),
    todo: 'Lorem tur adipisicing elit.',
    isCompleted: true,
  },
  {
    id: uuidv4(),
    todo: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    isCompleted: false,
  },
  {
    id: uuidv4(),
    todo: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit',
    isCompleted: true,
  },
]

export const Todos = () => {

  const [concluidas, setConcluidas] = useState(0);
  const [todoList, setTodoList] = useState(todos);
  const [todo, setTodo] = useState('');

  useEffect(() => {

    const handleConcluida = todoList.filter(todo => {
      return todo.isCompleted == true
    });

    setConcluidas(handleConcluida.length)


  }, [todoList])

  function handleTodoSubmit(event: FormEvent) {
    event.preventDefault();
    setTodo('');

    const todoAux: todosInterface = {
      id: uuidv4(),
      todo: todo,
      isCompleted: false
    }

    setTodoList([...todoList, todoAux])

  }

  function handleSingleTodo(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('');
    setTodo(event.target.value);
  }

  function completeTodo(todoId: string) {

    const newTodoList: todosInterface[] = todoList.map(todo => {
      if (todo.id === todoId) {
        todo.isCompleted = !todo.isCompleted;
        return todo;
      } else {
        return todo;
      }
    })

    setTodoList(newTodoList);

  }

  function handleCommentInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity('Campo obrigatório');
  }

  function handleDeleteSingleTodo(todoId: string) {

    console.log(todoId)

    const newTodoList: todosInterface[] = todoList.filter(todo => {
      if (todo.id !== todoId) {
        return true;
      }
    })

    setTodoList(newTodoList);
  }

  return (
    <>
      <div className={styles.form_wrapper}>
        <form onSubmit={handleTodoSubmit}>
          <input onInvalid={handleCommentInvalid} required value={todo} onChange={handleSingleTodo} placeholder='Adicione uma nova tarefa' />
          <button disabled={todo.length === 0} type='submit'>Criar <PlusCircle size={16} /></button>
        </form>
      </div>

      <div className={styles.content_wrapper}>
        <header>
          <div><strong>Tarefas criadas <span>{todoList.length}</span></strong>  </div>
          <div><strong className={styles.concluida}>Concluídas <span>{concluidas} de {todoList.length}</span></strong>  </div>
        </header>
        {todoList.length ?

          todoList.map(todo => {
            return (
              <Todo key={todo.id} onDeleteTodo={handleDeleteSingleTodo} onCompleteTodo={completeTodo} id={todo.id} isCompleted={todo.isCompleted} todo={todo.todo} />
            )
          })

          : <EmptyTodos />}
      </div>
    </>
  )
}
