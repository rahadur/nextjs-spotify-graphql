import { render, screen } from '@testing-library/react'
import { mocks } from '../../test-utils/mock-data'
import AlbumList from '../../src/components/albumList'


describe('albums list component', () => {
    it('should show title and albums list', () => {
        const albums = mocks.result.data.queryArtists[0].albums
        render( <AlbumList albums={albums} />)
        const element = screen.queryByTestId("album-list", { exact: true})

        expect(element).toBeInTheDocument()
    })

    it('should show no albums found message', () => {
        const albums = []
        render( <AlbumList albums={albums} />)
        const element = screen.getByText("No albums", { exact: true})

        expect(element).toBeInTheDocument()
    })
})