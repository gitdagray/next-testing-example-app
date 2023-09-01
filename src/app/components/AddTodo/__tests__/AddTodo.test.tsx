import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import AddTodo from '../AddTodo'

const mockSetTodos = jest.fn()

describe('AddTodo', () => {

    describe('Render', () => {

        it('should render the input', () => {
            render(<AddTodo setTodos={mockSetTodos} />) // ARRANGE

            const input = screen.getByPlaceholderText('New Todo') //ACT

            expect(input).toBeInTheDocument()// ASSERT
        })

        it('should render a disabled submit button', () => {
            render(<AddTodo setTodos={mockSetTodos} />) // ARRANGE

            //ACT
            const button = screen.getByRole('button', {
                name: 'Submit'
            })

            expect(button).toBeDisabled()// ASSERT
        })

    })

    describe('Behavior', () => {

        it('should be able to add text to the input', async () => {
            render(<AddTodo setTodos={mockSetTodos} />) // ARRANGE

            const input = screen.getByPlaceholderText('New Todo') //ACT
            await userEvent.type(input, 'hey there')
            expect(input).toHaveValue("hey there")// ASSERT
        })

        it('should enable the submit button when text is input', async () => {
            render(<AddTodo setTodos={mockSetTodos} />) // ARRANGE

            const input = screen.getByPlaceholderText('New Todo') //ACT
            await userEvent.type(input, 'hey there')

            const button = screen.getByRole('button', {
                name: 'Submit'
            })

            expect(button).toBeEnabled() // ASSERT
        })

        it('should empty the text input when submitted', async () => {
            render(<AddTodo setTodos={mockSetTodos} />) // ARRANGE

            const input = screen.getByPlaceholderText('New Todo') //ACT
            await userEvent.type(input, 'hey there')
            const button = screen.getByRole('button', {
                name: 'Submit'
            })
            await userEvent.click(button)

            expect(input).toHaveValue("")// ASSERT
        })

        it('should call setTodos when submitted', async () => {
            render(<AddTodo setTodos={mockSetTodos} />) // ARRANGE

            const input = screen.getByPlaceholderText('New Todo') //ACT
            await userEvent.type(input, 'hey there')
            const button = screen.getByRole('button', {
                name: 'Submit'
            })
            await userEvent.click(button)

            expect(mockSetTodos).toBeCalled()// ASSERT
        })

    })
})