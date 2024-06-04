import { screen, render, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../store/store";
import Main from "./Main.Component";

test("Results component is not displayed when input is empty", () => {
    render(
        <Provider store={store}>
            <Main />
        </Provider>
    );

    expect(screen.queryByText("Search results:")).toBeNull();
});

test("Results component is displayed when input is not empty", () => {
    render(
        <Provider store={store}>
            <Main />
        </Provider>
    );

    const input = screen.getByPlaceholderText('Movie Title') as HTMLInputElement;

    fireEvent.change(input, { target: { value: 'movie name' } });

    setTimeout(() => {
        expect(screen.getByText('Search results:')).toBeInTheDocument();
    }, 500)

});