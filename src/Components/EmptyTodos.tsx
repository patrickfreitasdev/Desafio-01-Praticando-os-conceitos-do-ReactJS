import { ClipboardText } from "phosphor-react";
import styles from './EmptyTodos.module.css';

export default function EmptyTodos() {
  return (
    <div className={styles.content_wrapper}>
      <ClipboardText size={54} />
      <p><strong>Você ainda não tem tarefas cadastradas</strong></p>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </div>
  )
}
