import { store } from "../../store/store";
import { screen, render, fireEvent } from "@testing-library/react"
import { Provider } from "react-redux";
import Form from "./Form.Component"

test('Test Input Value Change', () => {
    render(
        <Provider store={store}>
            <Form />
        </Provider>
    );

    const input = screen.getByPlaceholderText('Movie Title') as HTMLInputElement;

    fireEvent.change(input, { target: { value: 'movie name' } });

    expect(input.value).toBe('movie name');
});