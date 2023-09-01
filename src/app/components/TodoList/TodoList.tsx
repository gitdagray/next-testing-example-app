import TodoItem from "../TodoItem/TodoItem"
import type { Todo } from "@/types/Todo"

type Props = {
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

export default function TodoList({ todos, setTodos }: Props) {

    let content
    if (todos.length === 0) {
        content = <p>No Todos Available</p>
    } else {
        const sortedTodos = todos.sort((a, b) => b.id - a.id)

        content = (
            <>
                {sortedTodos.map(todo => (
                    <TodoItem key={todo.id} todo={todo} setTodos={setTodos} />
                ))}
            </>
        )
    }

    return content
}