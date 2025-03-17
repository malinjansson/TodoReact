import { FormEvent, useState } from "react";

type AddTodoProps = {
    addTodo: (t:string) => void;
}

export const AddTodo = (props: AddTodoProps) => {
    const [todoText, setTodoText] = useState("");

    const handleSave = (e: FormEvent) => {
        e.preventDefault();

        props.addTodo(todoText);

        setTodoText("");
    }

    return (
        <form onSubmit={handleSave}>
            <input value={todoText} placeholder="write a task" onChange={(e) => setTodoText(e.target.value)}/>
            <button>Save</button>
        </form>
    )
}