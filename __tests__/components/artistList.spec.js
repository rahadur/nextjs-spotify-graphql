import { render, screen } from '@testing-library/react'
import ArtistsList from '../../src/components/artistsList'
import { mocks } from '../../test-utils/mock-data'


describe('artists list component', () => {
    it('should show title and artists title', () => {
        const artists = mocks.result.data.queryArtists
        render( <ArtistsList artists={artists} />)
        const title = screen.getByText('Artists', { exact: true })

        expect(title).toHaveTextContent('Artists')
    })

    it('should show title and artists list', () => {
        const artists = mocks.result.data.queryArtists
        render( <ArtistsList artists={artists} />)
        const element = screen.queryByTestId("artist-list", { exact: true})

        expect(element).toBeInTheDocument()
    })

    it('should show no artists found message', () => {
        const artists = []
        render( <ArtistsList artists={artists} />)

        const element = screen.getByText('No artist found.', { exact: true })

        expect(element).toBeInTheDocument()
    })
})

