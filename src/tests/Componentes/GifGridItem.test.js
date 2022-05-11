import { render, screen } from "@testing-library/react";
import GifGridItem from '../../Componentes/GifGridItem';





describe("Pruebas en componente GifGridItem", () => {
    

    const title = "Universe";
    const url = "https://localhost/imagen.jpg";
    const componente = <GifGridItem title={title} url={url} />;
    // console.log( componente )
            
  
    
    test('Debe tener el url y el alt text pasados por props', () => {
        render( componente );
        const srcImgn = screen.getByRole("img").getAttribute("src");
        const altImgn = screen.getByRole("img").getAttribute("alt");
        expect(srcImgn).toBe(url);
        expect(altImgn).toBe(title);


    })

    test('Debe tener un titulo la imagen', () => {
        render( componente ); 
        const pTitleEl = screen.getByText(title);
        expect(pTitleEl.textContent.trim()).toBe(title);
    })


    test('Debe tener la clase animate__fadeIn', () => {
        
        const {container} = render( componente );
        expect(container.firstChild.className.includes("animate__fadeIn")).toBe(true);

    })



})