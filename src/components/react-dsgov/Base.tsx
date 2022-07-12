import classNames from "classnames";
import React from "react";
import IMtProps from "./IMtProps";
import { useSpreadProps } from "./useSpreadProps";

interface BaseProps  extends React.HTMLAttributes<HTMLDivElement>, IMtProps {

} 

const Base = React.forwardRef<HTMLDivElement, BaseProps>(
    ({className, children, ...props}, ref) => {
        const spreadProps = useSpreadProps(props);

        return (
            <div
                ref={ref}
                className={classNames(
                    className
                )}
                {...spreadProps}
                
            >
                {children}
            </div>
        );
    }
) 

export default Base;