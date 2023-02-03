
function TodoItem({todo, onChange, onDelete}) {
    return (
        <div>
            <label className="todo-lbl">
                <div>
                    <input className="item" type="checkbox" checked={todo.isCompleted} onChange={(e) => {
                        onChange({
                            ...todo,
                            isCompleted: e.target.checked
                        })
                    }}/>
                    {todo.text}
                </div>

                <button className="btn-dlt" onClick={() => {
                    onDelete(todo);
                }}>X</button>
            </label>
        </div>
    )
}

export default TodoItem;