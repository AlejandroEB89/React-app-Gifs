
import { render, screen } from "@testing-library/react";
import GifGrid from "../Componentes/GifGrid";
import GifExpertApp from "../GifExpertApp";

describe("Pruebas en  <GifExpertApp />", () => {
    test('Debe renderizarse correctamente', () => {
        const { asFragment } = render( <GifExpertApp /> );
        expect( asFragment() ).toMatchSnapshot();
    })

    
})