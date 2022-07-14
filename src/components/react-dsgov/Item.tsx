import classNames from "classnames";
import React from "react";
import IMtProps from "./IMtProps";
import { useSpreadProps } from "./useSpreadProps";
import { useMtProps } from "./useMtProps";

interface ItemProps  extends React.HTMLAttributes<HTMLDivElement>, IMtProps {
    highlighted?: boolean;
    divider?: boolean;
} 

const Item = React.forwardRef<HTMLDivElement, ItemProps>(
    ({className, children, highlighted, divider, ...props}, ref) => {
        const mtProps = useMtProps(props);
        const spreadProps = useSpreadProps(props);

        return (
            <div
                ref={ref}
                className={classNames(
                    "br-item",
                    (highlighted && "highlighted"),
                    (divider && "divider"),
                    className,
                    ...mtProps
                )}
                {...spreadProps}
                
            >
                {children}
            </div>
        );
    }
) 

export default Item;