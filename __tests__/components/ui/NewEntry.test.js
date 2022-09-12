import '@testing-library/jest-dom';
import { fireEvent, render, screen } from "@testing-library/react";
import { NewEntry } from "../../../components/ui";


describe('<NewEntry /> Component', () => {
  let buttonAddEntry;
  let cancelButton;
  let saveButton;
  let textField;
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

  test('should be show cancelar and guardar button when press the button "Agregar Tarea"', () => {
    fireEvent.click(buttonAddEntry);

    cancelButton = screen.getByRole('button', { name: 'Cancelar' });
    saveButton = screen.getByRole('button', { name: 'Guardar' });

    expect(cancelButton).toBeInTheDocument();
    expect(saveButton).toBeInTheDocument();
  });

  test('should be contain the payload and reset the states after save a new entry', () => {
    textField = screen.getByLabelText('Nueva entrada');
  });

  // test('should be disappear the textfield and guardar and cancelar buttons after click in cancelar button', () => {
  //   fireEvent.click(cancelButton);
  //   expect(buttonAddEntry).toBeInTheDocument();
  // });
});