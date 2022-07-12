import classNames from "classnames";
import React from "react";
import CarouselPage from "./CarouselPage";
import CarouselStep from "./CarouselStep";
import IMtProps from "./IMtProps";
import { useSpreadProps } from "./useSpreadProps";

interface CarouselProps  extends React.HTMLAttributes<HTMLDivElement>, IMtProps {
    circular?: boolean;
} 

const Carousel = React.forwardRef<HTMLDivElement, CarouselProps>(
    ({className, children, circular, ...props}, ref) => {
        const spreadProps = useSpreadProps(props);

        return (

            <div
                ref={ref}
                data-circular={circular}
                className={classNames(
                    "br-carousel",
                    className
                )}
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
            </div>
        );
    }
) 


export default Object.assign(Carousel, {
    Step: CarouselStep,
    Page: CarouselPage
});