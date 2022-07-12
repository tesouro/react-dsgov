import classNames from "classnames";
import React from "react";
import IMtProps from "./IMtProps";
import { useSpreadProps } from "./useSpreadProps";

interface CarouselStepProps  extends React.HTMLAttributes<HTMLDivElement>, IMtProps {

} 

const CarouselStep = React.forwardRef<HTMLDivElement, CarouselStepProps>(
    ({className, children, ...props}, ref) => {
        const spreadProps = useSpreadProps(props);

        return (
            <div
                ref={ref}
                className={classNames(
                    "carousel-step",
                    className
                )}
                {...spreadProps}
                
            >
                {children}
            </div>
        );
    }
) 

export default CarouselStep;