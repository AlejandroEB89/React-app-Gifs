import { render, screen, fireEvent} from '@testing-library/react'
import AddCategory from '../../Componentes/AddCategory'

describe('Pruebas en el componente', () => {
    
    const setCategories = jest.fn();
    const componente = <AddCategory setCategories={setCategories} />

    test('Debe mostrar el input vacío', () => {
        render( componente );
        const inputEl = screen.getByRole('textbox');
        expect(inputEl.value).toBe('');

    })

    test('Debe cambiar la caja de texto si pasamos un string de mas de 2 caracteres', () => {
        render( componente );
        const inputEl= screen.getByRole('textbox');
        const newValue = 'simulated value';
        fireEvent.change( inputEl, {target: { value: newValue }}) 
        console.log(inputEl.value)
        
        expect(inputEl.value).toBe( newValue );
        
    })

    test('No debe llamar a handlesubmit si el string es menor a 2', () => {
        render( componente );
        const formEl = screen.getByRole('form')
        fireEvent.submit( formEl , {preventDefault: () => {} })
        
        expect( setCategories ).not.toHaveBeenCalled()

    })

    test('Debe llamar a setCategories y limpiar la caja de input', () => {
        //1-simular input change
        //2-simular submit
        //3-llamar setcategories
        //4-inputval debe ser ""

        render( componente );
        const inputEl = screen.getByRole('textbox')
        const newValue = 'newValue';
        fireEvent.change(inputEl, {target: { value: newValue}} );

        const formEl = screen.getByRole('form');
        fireEvent.submit(formEl, { preventDefault: () => {} })

        expect( setCategories ).toHaveBeenCalledTimes(1);
        expect( setCategories ).toHaveBeenCalledWith( expect.any( Function ) ); //setCategories debe ser llamado con una funcion
        expect(inputEl.value).toBe('');


    })






})