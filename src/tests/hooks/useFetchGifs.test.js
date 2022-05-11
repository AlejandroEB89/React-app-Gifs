import { renderHook, waitFor } from "@testing-library/react"
import { useFetchGifs } from "../../hooks/useFetchGifs"

describe('Pruebas en el hook useFetchGifs', () => {
    test('Debe retornar el estado inicial', () => {
        const { result } = renderHook(() => useFetchGifs('Universe'))
        const { data, loading } = result.current;

        expect( data ).toEqual([]);
        expect( loading ).toBe( true );
    } )

    test('Debe retornar un arreglo de img y loading en false', async() => {
            //  En enzyme utiliza waitForNextUpdate -- buscar como implementarlo aca
            
            const {result} = await waitFor( () => renderHook(() => useFetchGifs('Universe')) )
            console.log(result)

    })
})