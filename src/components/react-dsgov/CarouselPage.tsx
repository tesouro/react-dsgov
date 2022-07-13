import classNames from "classnames";
import React, { useEffect } from "react";
import IMtProps from "./IMtProps";
import { useSpreadProps } from "./useSpreadProps";
import { useMtProps } from "./useMtProps";

interface CarouselPageProps  extends React.HTMLAttributes<HTMLDivElement>, IMtProps {
    backgroundColor?: string;
    pageTitle?: string;
    stepName?: string;
    active?: boolean;
} 

const CarouselPage = React.forwardRef<HTMLDivElement, CarouselPageProps>(
    ({className, children, backgroundColor, pageTitle, stepName, active, ...props}, ref) => {
        const mtProps = useMtProps(props);
        const spreadProps = useSpreadProps(props);

        const bgColorClass = backgroundColor && `bg-${backgroundColor}`;

        useEffect(() => {
            
        }, []);

        return (
            <div
                ref={ref}
                className={classNames(
                    "carousel-page",
                    ...mtProps,
                    className
                )}
                data-page="Teste"
                data-step-name={stepName}
                {...spreadProps}
                {...active && {active: "true"}}
                
                
            >
                <div className={`carousel-content ${bgColorClass}`}>
                    {pageTitle && <div className="h3 carousel-title">{pageTitle}</div>}
                    {children}
                </div>
                
            </div>
        );
    }
) 

export default CarouselPage;