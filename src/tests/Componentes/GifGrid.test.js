import { render, screen } from '@testing-library/react';
import GifGrid from '../../Componentes/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('Pruebas en GifGrid', () => {
    const category = 'newCategory';
    const componente = <GifGrid key= { category } category={ category }/>;

    test('Debe renderizarse correctamente', () => {

        useFetchGifs.mockReturnValue({
            data: [] ,
            loading: true
         });
        
        const { asFragment } = render( componente );   //renderizo el componente como un obj Fragment para el snapshot
        expect( asFragment() ).toMatchSnapshot();
    })
    // Con jest.mock(...el hook) utilizamos un mock de nuestro hook para simular que nos devuelve la data
    test('Debe mostrar items cuando se cargan imagenes con useFetchGifs', () => {
        
        const gifs = [{
            id: 'AAAA',
            title: 'Cualquier imagen',
            url: 'https://localhost.laimagen.jpg'
        }]
        
        useFetchGifs.mockReturnValue({         //simulamos datos que nos devuelve el usefetchgifs
            data: gifs ,
            loading: false
        });


        const { asFragment } = render( componente );
        expect( asFragment() ).toMatchSnapshot();

     
    })
})