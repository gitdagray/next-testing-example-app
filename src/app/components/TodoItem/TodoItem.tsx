
import { FaTrash } from "react-icons/fa"
import { ChangeEvent, MouseEvent } from 'react'
// import updateTodo from "@/lib/updateTodo"
// import deleteTodo from "@/lib/deleteTodo"
import type { Todo } from "@/types/Todo"


type Props = {
    todo: Todo,
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

export default function TodoItem({ todo, setTodos }: Props) {

    const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
        //const updatedTodo = await updateTodo(todo)
        setTodos(prevTodos => [...prevTodos.filter(prev => prev.id !== todo.id), { ...todo, completed: !todo.completed }])
    }

    const handleDelete = async (e: MouseEvent<HTMLButtonElement>) => {
        //await deleteTodo(todo)
        setTodos(prev => [...prev.filter(td => td.id !== todo.id)])
    }

    return (
        <article className="my-4 flex justify-between items-center">
            <label className="text-2xl hover:underline" data-testid="todo-item" htmlFor={todo.id.toString()}>
                {todo.title}
            </label>
            <div className="flex items-center gap-4">
                <input
                    type="checkbox"
                    checked={todo.completed}
                    id={todo.id.toString()}
                    name="completed"
                    onChange={handleChange}
                    className="min-w-[2rem] min-h-[2rem]"
                />

                <button
                    data-testid="delete-button"
                    onClick={handleDelete}
                    className="p-3 text-xl rounded-2xl text-black border-solid border-black border-2 max-w-xs bg-red-400 hover:cursor-pointer hover:bg-red-300">
                    <FaTrash />
                </button>
            </div>
        </article>
    )
}