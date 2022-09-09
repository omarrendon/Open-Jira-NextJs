import { NewEntry } from "../../../components/ui";
import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom';


describe('<NewEntry /> Component', () => {
  let buttonAddEntry;
  // Before each test we mount NewEntry Component and get it's elements.
  beforeEach(() => {
    render(<NewEntry />);
    buttonAddEntry = screen.getByRole('button');

  });

  test('should be able the button to add new task', () => {
    expect(buttonAddEntry).toBeInTheDocument();
  });

  test('Should be show the input when press the button "Agregar tarea"', () => {
    fireEvent.click(buttonAddEntry);
    const textField = screen.getByTestId('new-entry-input');
    expect(textField).toBeInTheDocument();
  });
});