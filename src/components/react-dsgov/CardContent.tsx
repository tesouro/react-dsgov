import classNames from "classnames";
import React from "react";
import IMtProps from "./IMtProps";
import { useSpreadProps } from "./useSpreadProps";

interface CardContentProps  extends React.HTMLAttributes<HTMLDivElement>, IMtProps {

} 

const CardContent = React.forwardRef<HTMLDivElement, CardContentProps>(
    ({className, children, ...props}, ref) => {
        const spreadProps = useSpreadProps(props);

        return (
            <div
                ref={ref}
                className={classNames(
                    "card-content", 
                    className
                )}
                {...spreadProps}
                
            >
                {children}
            </div>
        );
    }
) 

export default CardContent;