import { act, render, screen } from '@testing-library/react'
import { MockedProvider } from '@apollo/client/testing'
import Home from "../../src/pages";
import { errorMockup, mocks } from '../../mock-data'




const wait = (duration) => new Promise(resolve => setTimeout(resolve, duration))


describe("home page", () => {
  it("should displays a loading message when fetching data", () => {
    render(
        <MockedProvider mocks={[mocks]} addTypename={false}>
          <Home />
        </MockedProvider>,
    );

    const loading = screen.getByText("Loading...", { exact: true })

    expect(loading).toHaveTextContent('Loading...')
  });



  it("should displays a error message when filed to load data", async () => {
    render(
        <MockedProvider mocks={[errorMockup]} addTypename={false}>
          <Home />
        </MockedProvider>,
    );

    await act(() => wait(0))

    const element = screen.getByText("Filed to to fetch data...", { exact: true})

    expect(element).toHaveTextContent('Filed to to fetch data...')
  });


  it("should contain list of artists", async () => {
    render(
        <MockedProvider mocks={[mocks]} addTypename={false}>
          <Home />
        </MockedProvider>,
    );

    await act(() => wait(0))

    const element = screen.getByTestId("artists-list", { exact: true})

    expect(element).toBeInTheDocument()
  });

});
