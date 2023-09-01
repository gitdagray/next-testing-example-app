import { render, screen } from '@testing-library/react'
import Header from '../Header'

describe('Header', () => {

    it('should render the "Next Todos" heading', () => {
        render(<Header title="Next Todos" />) // ARRANGE

        //ACT
        const header = screen.getByRole('heading', {
            name: 'Next Todos'
        })

        expect(header).toBeInTheDocument()// ASSERT
    })

    it('should render "Dave" as a heading', async () => {
        render(<Header title="Dave" />) // ARRANGE

        //ACT
        const header = screen.getByRole('heading', {
            name: 'Dave'
        })

        expect(header).toBeInTheDocument()// ASSERT
    })
})