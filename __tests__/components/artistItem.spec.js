import { queryByTestId, render, screen } from '@testing-library/react'
import { mocks } from '../../test-utils/mock-data'
import ArtistItem from '../../src/components/artistItem'



describe('artist item component', () => {
    const artist = mocks.result.data.queryArtists[0];

    it ('should contain artist thumbnail', () => {
        render(<ArtistItem artist={artist} /> )
        const thumbnail = screen.queryByTestId("thumbnail", { exact: true})
        expect(thumbnail).toBeInTheDocument()
    })

    it ('should contain artist name', () => {
        render(<ArtistItem artist={artist} /> )
        const name = screen.queryByTestId("artist-name", { exact: true})
        expect(name).toBeInTheDocument()
    })

    it ('should contain artist details link', () => {
        render(<ArtistItem artist={artist} /> )
        const link = screen.queryByTestId('artist-href', { exact: true})
        expect(link).toBeInTheDocument()
    })

})