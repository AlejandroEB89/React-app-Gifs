import { getGifs } from "../../helpers/getGifs"

describe( "Pruebas fetch con getGifs", () => {
    test('Debe retornar 10 elementos si se le envia el parametro', async () => {
        const gifs = await getGifs('universe');
        expect(gifs.length).toBe( 10 )
    })

    test('Debe retornar 0 elementos si no se le envia parametro', async() => {
        const gifs = await getGifs('');
        expect(gifs.length).toBe(0)
    })
})