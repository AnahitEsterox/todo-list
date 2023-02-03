import {useState} from "react";

function TodoForm({onAdd}) {
    const [text, setText] = useState('');
    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            onAdd(text);
            setText('');
        }}>
            <input className="todo-text" type="text" value={text} onChange={(e) => {
                setText(e.target.value)
            }}/>
            <button type="submit" className="add">Add</button>
        </form>
    )
}
export default TodoForm;