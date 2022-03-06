//import {render, screen} from '../../test-utils'
import { render, screen } from "@testing-library/react";
import Home from "../../src/pages";

describe("home page", () => {
  it("should have hello world header", () => {
    render(<Home />);
    const component = screen.getByText("Hello World");
    expect(component).toHaveTextContent("Hello World");
  });
});
