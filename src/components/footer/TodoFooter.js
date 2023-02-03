import styles from './TodoFooter.module.css'
function TodoFooter({todos, onClearCompleted}) {

    const completedSize = todos.filter((todo) => todo.isCompleted).length;
    return (
        <div className={styles.footer}>
            <span>{completedSize}/{todos.length} Completed</span>
            <button className={styles.btn} onClick={onClearCompleted}>Clear Completed</button>
        </div>
    )
}

export default TodoFooter;