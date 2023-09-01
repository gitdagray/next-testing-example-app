import { render, screen } from '@testing-library/react'
import TodoList from '../TodoList'

const mockTodos = [
    {
        "userId": 1,
        "title": "Wave hello! 👋",
        "completed": false,
        "id": 1
    },
    {
        "userId": 1,
        "title": "Get Coffee ☕☕☕",
        "completed": false,
        "id": 2
    },
]

const mockSetTodos = jest.fn()

describe('TodoList', () => {

    it('should render "No Todos Available" when the array is empty', () => {
        render(<TodoList todos={[]} setTodos={mockSetTodos} />) // ARRANGE

        //ACT
        const message = screen.getByText('No Todos Available')

        expect(message).toBeInTheDocument()// ASSERT
    })

    it('should render a list with the correct number of items', () => {
        render(
            <TodoList todos={mockTodos} setTodos={mockSetTodos} />
        ) // ARRANGE

        //ACT
        const todosArray = screen.getAllByRole('article')

        expect(todosArray.length).toBe(2)// ASSERT
    })

    it('should render the todos in the correct order', () => {
        render(
            <TodoList todos={mockTodos} setTodos={mockSetTodos} />
        ) // ARRANGE

        //ACT
        const firstItem = screen.getAllByTestId("todo-item")[0]

        expect(firstItem).toHaveTextContent("Get Coffee ☕☕☕")// ASSERT
    })

})