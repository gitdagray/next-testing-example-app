import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Home from '../page'

describe('Home', () => {

    it('should add a new todo', async () => {
        render(<Home />) // ARRANGE

        // ACT
        const input = screen.getByPlaceholderText('New Todo')
        await userEvent.type(input, 'My new todo')
        expect(input).toHaveValue('My new todo') // ASSERT

        // ACT
        const button = screen.getByRole('button', {
            name: 'Submit'
        })
        await userEvent.click(button)
        expect(input).toHaveValue("") // ASSERT 

        const data = await screen.findByText('My new todo')
        expect(data).toHaveTextContent('My new todo')
    })

    it('should update a todo', async () => {
        render(<Home />) // ARRANGE

        // ACT
        const checkbox = screen.getAllByRole('checkbox')[0] as HTMLInputElement
        expect(checkbox.checked).toBeFalsy()
        await userEvent.click(checkbox)
        expect(checkbox.checked).toBeTruthy() // ASSERT 

    })

    it('should delete a todo', async () => {
        render(<Home />) // ARRANGE

        const todoText = screen.queryByText('Write Code 💻')
        expect(todoText).toBeInTheDocument() // ASSERT 

        // ACT
        const button = screen.getAllByTestId('delete-button')[0]
        await userEvent.click(button)

        expect(todoText).not.toBeInTheDocument() // ASSERT 

    })

})