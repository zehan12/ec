import { render, screen } from "@testing-library/react";
import App from "../container/App";

// describe('App', () => {
//     it('should have text App', () => {
//         render(<App />);
//         const appText = screen.getByText(/App/i);
//         console.log(appText)
//         expect(appText.textContent).toBe("App");
//     });
// });

describe('something truthy and falsy', () => {
    it('true to be true', () => {
        expect(true).toBe(true);
    });

    it('false to be false', () => {
        expect(false).toBe(false);
    });

    it('renders headline', () => {
        render(<App title="App" />);

        screen.debug();

        // check if App components renders headline
    });
});