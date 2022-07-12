import classNames from "classnames";
import React from "react";
import IMtProps from "./IMtProps";
import { useSpreadProps } from "./useSpreadProps";

interface CarouselPageProps  extends React.HTMLAttributes<HTMLDivElement>, IMtProps {

} 

const CarouselPage = React.forwardRef<HTMLDivElement, CarouselPageProps>(
    ({className, children, ...props}, ref) => {
        const spreadProps = useSpreadProps(props);

        return (
            <div
                ref={ref}
                className={classNames(
                    "carousel-page",
                    className
                )}
                {...spreadProps}
                
            >
                {children}
            </div>
        );
    }
) 

export default CarouselPage;