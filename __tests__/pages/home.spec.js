import { act, render, screen } from '@testing-library/react'
import { MockedProvider } from '@apollo/client/testing'
import { errorMockup, mocks } from '../../test-utils/mock-data'
import { wait } from '../../test-utils/waiter'
import Home from "../../src/pages";


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



  it("should displays a error message when failed to load data", async () => {
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
