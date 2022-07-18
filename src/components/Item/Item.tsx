import classNames from "classnames";
import React from "react";
import IMtProps from "../IMtProps";
import { useSpreadProps } from "../Util/useSpreadProps";
import { useMtProps } from "../Util/useMtProps";
import Divider from "../Divider";

interface ItemProps  extends React.HTMLAttributes<HTMLDivElement>, IMtProps {
    highlighted?: boolean;
    divider?: boolean;
    disabled?: boolean;
    showDividerAfter?: boolean;
    target?: string;
    collapsable?: boolean;
} 

const Item = React.forwardRef<HTMLDivElement, ItemProps>(
    ({className, children, highlighted, divider, role = "listItem", disabled = false, showDividerAfter = false, target, collapsable = false, ...props}, ref) => {
        const mtProps = useMtProps(props);
        const spreadProps = useSpreadProps(props);

        return (
            <>
                <div
                    ref={ref}
                    className={classNames(
                        "br-item",
                        (highlighted && "highlighted"),
                        (divider && "divider"),
                        className,
                        ...mtProps
                    )}
                    {...role && {role: role}}
                    {...disabled && {disabled: true}}
                    {...target && {"data-target": target}}
                    {...collapsable && {"data-toggle": "collapse"}}
                    {...spreadProps}
                    
                >
                    {children}
                    {collapsable && <i className="fas fa-angle-down" aria-hidden="true"></i>}
                </div>
                {showDividerAfter && <Divider />}
            </>
        );
    }
) 

export default Item;