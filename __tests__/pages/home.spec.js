import { render, screen } from "@testing-library/react";
import Home from "../../src/pages";
import { LoadArtists } from "../../src/graphql/queries";
import { MockedProvider } from '@apollo/client/testing'


const mocks = {
    request: {
      query: LoadArtists,
    },
    result: {
      data: {
        queryArtists: [
          {
            name: "Red Hot Chili Peppers",
            id: "0L8ExT028jH3ddEcZwqJJ5",
            image: "https://i.scdn.co/image/ab6761610000e5ebb0dd96d5c6fcd8b068834373",
            albums: [
              {
                name: "One Hot Minute (Deluxe Edition)",
                id: "2rQ135imvelvp89D8eEZOi",
                image: "https://i.scdn.co/image/ab67616d0000b2737f3dcf99224570b053294ccf",
                tracks: [
                  {
                    name: "One Hot Minute (Deluxe Edition)",
                    id: "2rQ135imvelvp89D8eEZOi",
                    preview_url:
                        "https://i.scdn.co/image/ab67616d0000b2737f3dcf99224570b053294ccf",
                  },
                  {
                    name: "One Hot Minute (Deluxe Edition)",
                    id: "2rQ135imvelvp89D8eEZOi",
                    preview_url:
                        "https://i.scdn.co/image/ab67616d0000b2737f3dcf99224570b053294ccf",
                  }
                ],
              },
              {
                name: "Blood Sugar Sex Magik (Deluxe Edition)",
                id: "30Perjew8HyGkdSmqguYyg",
                image: "https://i.scdn.co/image/ab67616d0000b273153d79816d853f2694b2cc70",
                tracks: [
                  {
                    name: "One Hot Minute (Deluxe Edition)",
                    id: "2rQ135imvelvp89D8eEZOi",
                    preview_url:
                        "https://i.scdn.co/image/ab67616d0000b2737f3dcf99224570b053294ccf",
                  },
                  {
                    name: "One Hot Minute (Deluxe Edition)",
                    id: "2rQ135imvelvp89D8eEZOi",
                    preview_url:
                        "https://i.scdn.co/image/ab67616d0000b2737f3dcf99224570b053294ccf",
                  }
                ],
              }
            ],
          },
          {
            name: "Red Hot Chili Peppers",
            id: "0L8ExT028jH3ddEcZwqJJ5",
            image: "https://i.scdn.co/image/ab6761610000e5ebb0dd96d5c6fcd8b068834373",
            albums: [
              {
                name: "One Hot Minute (Deluxe Edition)",
                id: "2rQ135imvelvp89D8eEZOi",
                image: "https://i.scdn.co/image/ab67616d0000b2737f3dcf99224570b053294ccf",
                tracks: [
                  {
                    name: "One Hot Minute (Deluxe Edition)",
                    id: "2rQ135imvelvp89D8eEZOi",
                    preview_url:
                        "https://i.scdn.co/image/ab67616d0000b2737f3dcf99224570b053294ccf",
                  },
                  {
                    name: "One Hot Minute (Deluxe Edition)",
                    id: "2rQ135imvelvp89D8eEZOi",
                    preview_url:
                        "https://i.scdn.co/image/ab67616d0000b2737f3dcf99224570b053294ccf",
                  }
                ],
              },
              {
                name: "Blood Sugar Sex Magik (Deluxe Edition)",
                id: "30Perjew8HyGkdSmqguYyg",
                image: "https://i.scdn.co/image/ab67616d0000b273153d79816d853f2694b2cc70",
                tracks: [
                  {
                    name: "One Hot Minute (Deluxe Edition)",
                    id: "2rQ135imvelvp89D8eEZOi",
                    preview_url:
                        "https://i.scdn.co/image/ab67616d0000b2737f3dcf99224570b053294ccf",
                  },
                  {
                    name: "One Hot Minute (Deluxe Edition)",
                    id: "2rQ135imvelvp89D8eEZOi",
                    preview_url:
                        "https://i.scdn.co/image/ab67616d0000b2737f3dcf99224570b053294ccf",
                  }
                ],
              }
            ],
          },
        ],
      },
    },
  };

describe("home page", () => {
  it("displays a loading message when fetching", () => {
    render(
        <MockedProvider mocks={[mocks]} addTypename={false}>
          <Home />
        </MockedProvider>,
    );

    const loading = screen.getByText("Loading...")

    expect(loading).toHaveTextContent('Loading...')
  });
});
