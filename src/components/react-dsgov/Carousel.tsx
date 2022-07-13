import '@govbr-ds/core/dist/core.min.css'

import classNames from "classnames";
import React, { Children, useEffect, useRef } from "react";
import CarouselPage from "./CarouselPage";
import CarouselStep from "./CarouselStep";
import IMtProps from "./IMtProps";
import { useMtProps } from './useMtProps';
import { useSpreadProps } from "./useSpreadProps";

const core = require('@govbr-ds/core/dist/core-init');

interface CarouselProps extends React.HTMLAttributes<HTMLDivElement>, IMtProps {
    circular?: boolean;
    interno?: boolean;
    hibw?: boolean;
    hibh?: boolean;
}

const Carousel = React.forwardRef<HTMLDivElement, CarouselProps>(
    ({ className, children, circular, interno, hibw, hibh, ...props }, ref) => {
        const refDiv = useRef<any>(ref);
        const refQtdChildren = useRef<number>(0);
        const refObjetoCarousel = useRef<any>(null);

        const mtProps = useMtProps(props);
        const spreadProps = useSpreadProps(props);

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
                refObjetoCarousel.current = new core.BRCarousel('br-carousel', refDiv.current);
                refQtdChildren.current = qtdChildrenAtual;                      
            }

        }, [children])
        
        return (

            <div
                ref={refDiv}
                data-circular={circular}
                className={classNames(
                    "br-carousel",
                    ...mtProps,
                    className
                )}
                data-stage={interno ? "in" : hibw ? "hibw" : hibh ? "hibh" : ""}
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
                    <div className="br-step" data-initial="1" data-type="simple">
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
)


export default Object.assign(Carousel, {
    Step: CarouselStep,
    Page: CarouselPage
});