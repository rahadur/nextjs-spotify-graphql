import { LoadArtists } from './src/graphql/queries'

export const mocks = {
    request: {
        query: LoadArtists,
    },
    result: {
        data: {
            queryArtists: [
                {
                    "name": "Red Hot Chili Peppers Tribute Band",
                    "id": "4St65YtRYE8w73lrc1GNKM",
                    "image": "https://i.scdn.co/image/ab67616d0000b27361117565c7565f2a28026686",
                    "albums": [
                        {
                            "name": "Red Hot Chili Peppers:a Guitar Tribute To",
                            "id": "5eF6CWqJlKqncLYD3scwZN",
                            "image": "https://i.scdn.co/image/ab67616d0000b27361117565c7565f2a28026686",
                            "tracks": [],
                            "__typename": "Album"
                        },
                        {
                            "name": "World's Greatest Rock Anthems - the Only Rock Tributes Album You'll Ever Need! (Deluxe Version)",
                            "id": "0d46fAXed00IK1603ClpRs",
                            "image": "https://i.scdn.co/image/ab67616d0000b273bbc7826306456963ed08626e",
                            "tracks": [],
                            "__typename": "Album"
                        },
                        {
                            "name": "World's Greatest Rock Anthems - the Only Rock Tributes Album You'll Ever Need!",
                            "id": "0EfUKn64vJoiRlRXFVtcT8",
                            "image": "https://i.scdn.co/image/ab67616d0000b273bfd6851239f092314b6df0b3",
                            "tracks": [],
                            "__typename": "Album"
                        }
                    ],
                    "__typename": "Artist"
                },
                {
                    "name": "Karaoke - Red Hot Chili Peppers",
                    "id": "5UW0S2FPTD5GtlAJTzcwbh",
                    "image": "",
                    "albums": [
                        {
                            "name": "Karaoke - Modern Rock - Vol. 10",
                            "id": "4ZRQpo31BQcyKt72gC6tWj",
                            "image": "https://i.scdn.co/image/d2283d639d394d15b78c049f92571fcb5a6678e0",
                            "tracks": [],
                            "__typename": "Album"
                        }
                    ],
                    "__typename": "Artist"
                }
            ],
        },
    },
};

export const errorMockup = {
    request: {
        query: LoadArtists
    },
    error: new Error('Network Error')
}