import classNames from "classnames";
import React from "react";
import IMtProps from "./IMtProps";
import { useSpreadProps } from "./useSpreadProps";

interface ColProps  extends React.HTMLAttributes<HTMLDivElement>, IMtProps {
    size?: string,
    sm?: string | boolean,
    md?: string | boolean,
    lg?: string | boolean,
    xl?: string | boolean,
    auto?: string | boolean
} 

const Col = React.forwardRef<HTMLDivElement, ColProps>(
    ({className, children, size, sm, md, lg, xl, auto, ...props}, ref) => {
        const spreadProps = useSpreadProps(props);
        
    


        return (
            <div
                ref={ref}
                className={classNames(
                    sm && (typeof sm === 'boolean' ? 'col-sm' : `col-sm-${sm}`),
                    md && (typeof md === 'boolean' ? 'col-md' : `col-md-${md}`),
                    lg && (typeof sm === 'boolean' ? 'col-lg' : `col-md-${lg}`),
                    xl && (typeof xl === 'boolean' ? 'col-xl' : `col-xl-${xl}`),
                    auto && (typeof auto === 'boolean' ? 'col-auto' : `col-xl-${auto}`),
                    !sm && !md && !lg && !xl && !auto && "col",
                    className
                )}
                {...spreadProps}
                
            >
                {children}
            </div>
        );
    }
) 

export default Col;