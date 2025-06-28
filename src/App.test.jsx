import '@testing-library/jest-dom'
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import App from './App'
import { describe, expect } from 'vitest'
import { Provider } from 'react-redux';
import { store } from './store/store';
import AddForm from './components/AddForm';
import { userEvent } from '@testing-library/user-event';
import configureStore from 'redux-mock-store';


describe('App Component', () => {
    
    describe("Static", () => {
        test('renders header', () => {
            render(
                <Provider store={store}>
                    <App />
                </Provider>
            )
            const header = screen.getByText((content, element) => 
                element.textContent === "TODO WITH REDUX!"
            );
            expect(header).toBeInTheDocument();
        })
    });
    describe("Dynamic", () => {
        test("nums & letters", async () => {
            render(<Provider store={store}>
                        <AddForm />
                    </Provider>
            );
            const input = screen.getByPlaceholderText("Write task");
            const textType = 'abc123';

            await userEvent.type(input, textType);
            expect(input).toHaveValue(textType);
        })
        test("error when empty form", async () => {
            render(
                <Provider store={store}>
                  <AddForm addForm={true} />
                </Provider>
              );
            
              const button = screen.getByRole("button", { name: /add/i });
            
              await userEvent.click(button);
            
              expect(await screen.findByText(/this field is required/i)).toBeInTheDocument();
        })
        test("adding task", async () => {
               const mockStore = configureStore([]);
            const store = mockStore({});
            store.dispatch = vi.fn(); 
        
            render(
              <Provider store={store}>
                <AddForm addForm={true} />
              </Provider>
            );
        
            const input = screen.getByPlaceholderText("Write task");
            const button = screen.getByRole("button", { name: /add/i });
        
            await userEvent.type(input, "My new Task");
            await userEvent.click(button);
        
            expect(store.dispatch).toHaveBeenCalled();
            expect(store.dispatch).toHaveBeenCalledWith(expect.any(Function));
          });
        test("clearing tasks", async () => {
            render(
                <Provider store={store}>
                    <App />
                </Provider>
            )

            const clearBtn = await screen.findByRole('button', {name: 'Clear'});
            await userEvent.click(clearBtn);
            await waitFor(() => {
                expect(screen.queryByText("Buba")).not.toBeInTheDocument();
            });

        })
    })
});
