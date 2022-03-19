import { render, screen } from '@testing-library/react'
import { mocks } from '../../test-utils/mock-data'
import AlbumItem from '../../src/components/albumItem'


describe('album item', () => {
    const album = mocks.result.data.queryArtists[0].albums[0]

    it('should contain album thumbnail', () => {
        render(<AlbumItem album={album} />)
        const thumbnail = screen.queryByTestId("thumbnail", { exact: true })
        expect(thumbnail).toBeInTheDocument()
    })

    it('should contain album name', () => {
        render(<AlbumItem album={album} />)
        const albumName = screen.queryByTestId("album-name", { exact: true })
        expect(albumName).toBeInTheDocument()
    })
})