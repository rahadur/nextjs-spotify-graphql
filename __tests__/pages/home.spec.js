import { act, render, screen, within } from '@testing-library/react'
import Home from "../../src/pages";
import { LoadArtists } from "../../src/graphql/queries";
import { MockedProvider } from '@apollo/client/testing'


const mocks = {
    request: {
      query: LoadArtists,
    },
    result: {
      "data": {
        "queryArtists": [
          {
            "name": "Red Hot Chili Peppers",
            "id": "0L8ExT028jH3ddEcZwqJJ5",
            "image": "https://i.scdn.co/image/ab6761610000e5ebb0dd96d5c6fcd8b068834373",
            "albums": [
              {
                "name": "The Getaway",
                "id": "43otFXrY0bgaq5fB3GrZj6",
                "image": "https://i.scdn.co/image/ab67616d0000b27358406b3f1ac3ceaff7a64fef",
                "tracks": [],
              },
              {
                "name": "I'm with You",
                "id": "5wZtSIvijWCMc1vlPFqAyB",
                "image": "https://i.scdn.co/image/ab67616d0000b27396136a2ab5696812e9b26723",
                "tracks": [],
              },
              {
                "name": "Stadium Arcadium",
                "id": "7xl50xr9NDkd3i2kBbzsNZ",
                "image": "https://i.scdn.co/image/ab67616d0000b27309fd83d32aee93dceba78517",
                "tracks": [],
              },
              {
                "name": "By the Way",
                "id": "1jWKVgnHX8nwR551hQNx5K",
                "image": "https://i.scdn.co/image/ab67616d0000b273fdbcee40748537ff80a7af70",
                "tracks": [],
              },
              {
                "name": "By the Way (Deluxe Edition)",
                "id": "6deiaArbeoqp1xPEGdEKp1",
                "image": "https://i.scdn.co/image/ab67616d0000b273de1af2785a83cc660155a0c4",
                "tracks": [],
              },
              {
                "name": "Californication",
                "id": "0fLhefnjlIV3pGNF9Wo8CD",
                "image": "https://i.scdn.co/image/ab67616d0000b273a9249ebb15ca7a5b75f16a90",
                "tracks": [],
              },
              {
                "name": "Californication (Deluxe Edition)",
                "id": "2Y9IRtehByVkegoD7TcLfi",
                "image": "https://i.scdn.co/image/ab67616d0000b27394d08ab63e57b0cae74e8595",
                "tracks": [],
              },
              {
                "name": "One Hot Minute",
                "id": "74cQBDmkkzRBntR064f0SD",
                "image": "https://i.scdn.co/image/ab67616d0000b27384b9d450917fbae37b2e3d91",
                "tracks": [],
              },
              {
                "name": "One Hot Minute (Deluxe Edition)",
                "id": "2rQ135imvelvp89D8eEZOi",
                "image": "https://i.scdn.co/image/ab67616d0000b2737f3dcf99224570b053294ccf",
                "tracks": [],
              },
              {
                "name": "Blood Sugar Sex Magik",
                "id": "1DCI2yWmV4UI7Aga71yx9B",
                "image": "https://i.scdn.co/image/ab67616d0000b273e7957730bc48a85ee53657fd",
                "tracks": [],
              },
              {
                "name": "Blood Sugar Sex Magik (Deluxe Edition)",
                "id": "30Perjew8HyGkdSmqguYyg",
                "image": "https://i.scdn.co/image/ab67616d0000b273153d79816d853f2694b2cc70",
                "tracks": [],
              },
              {
                "name": "Mother's Milk",
                "id": "1oOkcBu5bgkUzZTvKD1m8z",
                "image": "https://i.scdn.co/image/ab67616d0000b27379ac84696fa8624e97684d27",
                "tracks": [],
              },
              {
                "name": "The Uplift Mofo Party Plan",
                "id": "3rHJQrfEcBeSaLPuLwKR6F",
                "image": "https://i.scdn.co/image/ab67616d0000b273ef0aaa5b8cd65ec81d22b3d9",
                "tracks": [],
              },
              {
                "name": "Freaky Styley",
                "id": "10Oqhoq2akSJnurJOPk8xT",
                "image": "https://i.scdn.co/image/ab67616d0000b273d95ea73fb482cde5129fe739",
                "tracks": [],
              },
              {
                "name": "Red Hot Chili Peppers",
                "id": "5QxFTj8ar3blXVyVEo2rxD",
                "image": "https://i.scdn.co/image/ab67616d0000b27329e7d4966ce2ec927224b730",
                "tracks": [],
              },
              {
                "name": "Poster Child",
                "id": "7hcWLkAhIDMGJCi2mIUQa8",
                "image": "https://i.scdn.co/image/ab67616d0000b273c47f95bf7614563afe43d4f2",
                "tracks": [],
              },
              {
                "name": "Black Summer",
                "id": "4a6LkeTXHKjMQgf42wQnbH",
                "image": "https://i.scdn.co/image/ab67616d0000b273579b9602ae484950d95d0ab8",
                "tracks": [],
              },
              {
                "name": "Goodbye Angels",
                "id": "5nsPxa5DcIGon1O3qxLSvL",
                "image": "https://i.scdn.co/image/ab67616d0000b273e74b72ef8cc3314c36ab6c0f",
                "tracks": [],
              },
              {
                "name": "We Turn Red",
                "id": "0uFQ39Gnk0RQGzdW9gswNa",
                "image": "https://i.scdn.co/image/ab67616d0000b273ab5476eb9c3989c9a3a7062a",
                "tracks": [],
              },
              {
                "name": "The Getaway",
                "id": "40M8gGFOLMaBIqRECAaoMa",
                "image": "https://i.scdn.co/image/ab67616d0000b273bd98d108f9dc3ca5851861e0",
                "tracks": [],
              }
            ],
          },
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
              },
              {
                "name": "World's Greatest Rock Anthems - the Only Rock Tributes Album You'll Ever Need! (Deluxe Version)",
                "id": "0d46fAXed00IK1603ClpRs",
                "image": "https://i.scdn.co/image/ab67616d0000b273bbc7826306456963ed08626e",
                "tracks": [],
              },
              {
                "name": "World's Greatest Rock Anthems - the Only Rock Tributes Album You'll Ever Need!",
                "id": "0EfUKn64vJoiRlRXFVtcT8",
                "image": "https://i.scdn.co/image/ab67616d0000b273bfd6851239f092314b6df0b3",
                "tracks": [],
              }
            ],
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
              }
            ],
          }
        ]
      }
    },
  };

describe("home page", () => {

  it("displays a loading message when fetching", () => {
    render(
        <MockedProvider mocks={[mocks]} addTypename={false}>
          <Home />
        </MockedProvider>,
    );

    const loading = screen.getByText("Loading...", { exact: true })

    expect(loading).toHaveTextContent('Loading...')
  });

});
