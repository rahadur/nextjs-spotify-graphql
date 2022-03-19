import { act, render, screen } from '@testing-library/react'
import { MockedProvider } from '@apollo/client/testing'
import { errorMockup, mocks } from '../../test-utils/mock-data'
import { wait } from '../../test-utils/waiter'
import ArtistPage from '../../src/pages/artists/[id]'

let useRouter = jest.spyOn(require('next/router'), 'useRouter')

describe('article page', () => {

    beforeAll(() => {
        useRouter.mockImplementation(() => ({
            query: { id: "4St65YtRYE8w73lrc1GNKM" },
        }))
    })

    afterAll(() => {
        useRouter.mockReset()
        useRouter = null
    })

    
    it("should displays a loading message when fetching data", () => {

        render(
            <MockedProvider mocks={[mocks]} addTypename={false}>
                <ArtistPage />
            </MockedProvider>,
        );

        const loading = screen.getByText(/Loading.../, { exact: true })

        expect(loading).toHaveTextContent('Loading...')
    });


    it("should displays a error message when failed to load data", async () => {

        render(
            <MockedProvider mocks={[errorMockup]} addTypename={false}>
                <ArtistPage />
            </MockedProvider>,
        );

        await act(() => wait(0))
        const element = screen.getByText(/Failed to to fetch data.../, { exact: true})

        expect(element).toHaveTextContent('Failed to to fetch data...')
    });

    it("should contain album title", async () => {

        render(
            <MockedProvider mocks={[mocks]} addTypename={false}>
                <ArtistPage />
            </MockedProvider>,
        );

        await act(() => wait(0))
        const element = screen.getByTestId("header-title", { exact: true})

        expect(element).toHaveTextContent('Red Hot Chili Peppers Tribute Band Albums')
    });

    it("should contain list of albums", async () => {

        render(
            <MockedProvider mocks={[mocks]} addTypename={false}>
                <ArtistPage />
            </MockedProvider>,
        );

        await act(() => wait(0))
        const element = screen.getByTestId("artist-album-list", { exact: true})

        expect(element).toBeInTheDocument()
    });
})