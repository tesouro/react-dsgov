import classNames from "classnames";
import React from "react";
import IMtProps from "../IMtProps";
import { useSpreadProps } from "../Util/useSpreadProps";
import { useMtProps } from "../Util/useMtProps";

interface ColProps  extends React.HTMLAttributes<HTMLDivElement>, IMtProps {
    sz?: string,
    sm?: number | boolean,
    md?: number | boolean,
    lg?: number | boolean,
    xl?: number | boolean,
    auto?: number |boolean
} 

const Col = React.forwardRef<HTMLDivElement, ColProps>(
    ({className, children, sz, sm, md, lg, xl, auto, ...props}, ref) => {
        const mtProps = useMtProps(props);
        const spreadProps = useSpreadProps(props);    

        return (
            <div
                ref={ref}
                className={classNames(
                    sm && (typeof sm === 'boolean' ? 'col-sm' : `col-sm-${sm}`),
                    md && (typeof md === 'boolean' ? 'col-md' : `col-md-${md}`),
                    lg && (typeof sm === 'boolean' ? 'col-lg' : `col-md-${lg}`),
                    xl && (typeof xl === 'boolean' ? 'col-xl' : `col-xl-${xl}`),
                    auto && (typeof auto === 'boolean' ? 'col-auto' : `col-auto-${auto}`),
                    sz && (typeof sz === 'boolean' ? 'col' : `col-${sz}`),
                    (!sm && !md && !lg && !xl && !auto && !sz && "col"),
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

export default Col;