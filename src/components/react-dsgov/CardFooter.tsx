import classNames from "classnames";
import React from "react";
import IMtProps from "./IMtProps";
import { useSpreadProps } from "./useSpreadProps";
import { useMtProps } from "./useMtProps";

interface CardFooterProps  extends React.HTMLAttributes<HTMLDivElement>, IMtProps {

} 

const CardFooter = React.forwardRef<HTMLDivElement, CardFooterProps>(
    ({className, children, ...props}, ref) => {
        const mtProps = useMtProps(props);
        const spreadProps = useSpreadProps(props);

        return (
            <div
                ref={ref}
                className={classNames(
                    "card-footer",
                    ...mtProps,
                    className
                )}
                {...spreadProps}
                
            >
                {children}
            </div>
        );
    }
) 

export default CardFooter;