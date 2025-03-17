import { Todo } from "../models/Todo";

type ShowTodosProps = {
    todo: Todo[];
    removeTodo: (i: number) => void;
    toggleTodo: (i: number) => void;
}

export const ShowTodos = (props:ShowTodosProps) => {

    return (
        <ul>
            {props.todo.map((t) => {
                return (
                    <li key={t.id}>
                        <span>{t.text}</span>
                        <div className="done-remove">
                            <button onClick={() => {
                                props.toggleTodo(t.id);
                            }}>{t.done ? "Undone" : "✔"}</button>
                            <button onClick={() => {
                                props.removeTodo(t.id);
                            }}>X</button>
                        </div>
                    </li>
                )
            })}

        </ul>
    )
}