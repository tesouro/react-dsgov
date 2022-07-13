import classNames from "classnames";
import React from "react";
import IMtProps from "./IMtProps";
import { useSpreadProps } from "./useSpreadProps";
import { useMtProps } from "./useMtProps";

interface DividerProps  extends React.HTMLAttributes<HTMLDivElement>, IMtProps {
    orientation?: "vertical" | "horizontal",
    dashed?: boolean,
    sm?: boolean;
    lg?: boolean;
} 

const Divider = React.forwardRef<HTMLDivElement, DividerProps>(
    ({className, children, orientation = "horizontal", dashed = false, sm, lg, ...props}, ref) => {
        const mtProps = useMtProps(props);
        const spreadProps = useSpreadProps(props);

        return (
            <div
                ref={ref}
                className={classNames(
                    "br-divider",
                    ((orientation === "vertical") && "vertical"),
                    (dashed && "dashed"),
                    (sm && "sm"),
                    (lg && "lg"),
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

export default Divider;