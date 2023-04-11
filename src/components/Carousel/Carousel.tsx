/* eslint-disable @typescript-eslint/no-empty-function */
import '@govbr-ds/core/dist/components/carousel/carousel.min.css';

import classNames from 'classnames';
import React, { Children, memo, useEffect, useImperativeHandle, useRef } from 'react';
import CarouselPage from './CarouselPage';
import IMtProps from '../IMtProps';
import { useMtProps } from '../Util/useMtProps';
import { useSpreadProps } from '../Util/useSpreadProps';
import uniqueId from 'lodash.uniqueid';
import useCommonProperties from '../Util/useCommonProperties';
import useUniqueId from '../Util/useUniqueId';


// eslint-disable-next-line @typescript-eslint/no-var-requires
const BRCarousel = require('@govbr-ds/core/dist/components/carousel/carousel.js').default;

console.log('aaaah!!!');
console.log(BRCarousel);

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

export interface CarouselRef extends HTMLDivElement {
    element: HTMLDivElement
}

const Carousel = React.forwardRef<HTMLDivElement, CarouselProps>(
    ({ className, id, children, circular, interno, hybrid, textual = false, ...props }, ref) => {
        const fid = useUniqueId(id, 'carousel_____');
        const refDiv = useRef<HTMLDivElement>(null);
        const refQtdChildren = useRef<number>(0);
        const refObjetoCarousel = useRef<any>(null);

        const mtProps = useMtProps(props);
        const spreadProps = useSpreadProps(props);

        useCommonProperties<CarouselRef>(ref, refDiv, {
            get element() {
                return refDiv.current;
            }
        });
        
        // Reinstancia o Carousel quando mudarem os filhos do Carousel (ou seja, as páginas)
        useEffect(() => {
            const qtdChildrenAtual = Children.count(children);

            // Somente reinstancia se por acaso trocar a quantidade de páginas
            // dentro do Carousel
            if (qtdChildrenAtual !== refQtdChildren.current) {
                // Apaga o método shiftPage do objeto anterior
                if(refObjetoCarousel.current) {
                    refObjetoCarousel.current.shiftPage = () => {};
                }                
 
                // Define o novo objeto
                refObjetoCarousel.current = new BRCarousel('br-carousel', refDiv.current);
                refQtdChildren.current = qtdChildrenAtual;                      
            }

        }, [children]);
        
        return (

            <div
                ref={refDiv}
                id={fid}
                data-circular={circular}
                className={classNames(
                    'br-carousel',
                    ...mtProps,
                    className
                )}
                data-stage={interno ? 'in' : hybrid === 'vertical' ? 'hibw' : hybrid === 'horizontal' ? 'hibh' : ''}
                {...spreadProps}

            >
                <div className="carousel-button">
                    <button className="br-button carousel-btn-prev terciary circle" type="button" aria-label="Anterior"><i className="fas fa-angle-left" aria-hidden="true"></i>
                    </button>
                </div>
                <div className="carousel-stage">
                    {children}
                </div>
                <div className="carousel-button">
                    <button className="br-button carousel-btn-next terciary circle" type="button" aria-label="Próximo"><i className="fas fa-angle-right" aria-hidden="true"></i>
                    </button>
                </div>
                <div className="carousel-step">
                    <div className="br-step" data-initial="1" data-type={textual ? 'text' : 'simple'}>
                        <div className="step-progress">
                            {Children.map(children, (element: any, index) => (
                                <button key={index} className="step-progress-btn" type="button"><span className="step-info">{element.props.stepName}</span></button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
);

Carousel.displayName = 'Carousel';

export default Object.assign(Carousel, {
    Page: CarouselPage
});