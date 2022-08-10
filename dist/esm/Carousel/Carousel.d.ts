import '@govbr-ds/core/dist/core.min.css';
import React from 'react';
import IMtProps from '../IMtProps';
export interface CarouselProps extends React.HTMLAttributes<HTMLDivElement>, IMtProps {
    /** Se o carousel é circular, ou seja, ao pressionar o botão de "próximo" no último, ele volta pro primeiro.
     *  Se pressionar o botão de "anterior" no primeiro, ele vai pro último.
     */
    circular?: boolean;
    /**
     * Se os botões de navegação e os botões dos passos aparecem dentro do carousel.
     */
    interno?: boolean;
    /**
     * Elementos internos híbridos.
     *
     * - Se for "vertical", então os botões de navegação ficam dentro do carousel.
     * - Se for "horizontal", então os botões de passos ficam dentro do carousel.
     */
    hybrid?: 'vertical' | 'horizontal';
    /** Se os botões de passos são substituídos por um texto do estilo <Passo Atual>/<Total de Passos>. */
    textual?: boolean;
}
declare const _default: React.ForwardRefExoticComponent<CarouselProps & React.RefAttributes<HTMLDivElement>> & {
    Page: React.ForwardRefExoticComponent<import("./CarouselPage/CarouselPage").CarouselPageProps & React.RefAttributes<HTMLDivElement>>;
};
export default _default;
