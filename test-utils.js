import { render } from "@testing-library/react";

// Add in any providers here if necessary:
// (ReduxProvider, ThemeProvider, etc)
const AllProviders = ({ children }) => {
    return children;
};

const customRender = (ui, options = {}) =>
    render(ui, { wrapper: AllProviders, ...options });

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render };