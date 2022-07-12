import classNames from "classnames";
import React from "react";
import IMtProps from "./IMtProps";
import { useSpreadProps } from "./useSpreadProps";

interface RowProps  extends React.HTMLAttributes<HTMLDivElement>, IMtProps {

} 

const Row = React.forwardRef<HTMLDivElement, RowProps>(
    ({className, children, ...props}, ref) => {
        const spreadProps = useSpreadProps(props);

        return (
            <div
                ref={ref}
                className={classNames(
                    "row",
                    className
                )}
                {...spreadProps}
                
            >
                {children}
            </div>
        );
    }
) 

export default Row;