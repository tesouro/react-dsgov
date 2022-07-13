import classNames from "classnames";
import React from "react";
import IMtProps from "./IMtProps";
import { useSpreadProps } from "./useSpreadProps";
import { useMtProps } from "./useMtProps";

interface CheckboxProps  extends React.HTMLAttributes<HTMLInputElement>, IMtProps {
    inline?: boolean;
    state?: string;
    disabled?: boolean;
    checked?: boolean;
} 

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
    ({className, children, inline, state, disabled, checked = false, ...props}, ref) => {
        const mtProps = useMtProps(props);
        const spreadProps = useSpreadProps(props);

        return (
            <div 
                {...(state === "valid") && {valid: "valid"}}
                {...(state === "invalid") && {invalid: "invalid"}}
                className={classNames(
                    "br-checkbox",
                    ...mtProps,
                    (inline && 'd-inline')
                )}
                
            >
                <input 
                    ref={ref}
                    className={classNames(
                        className
                    )}
                    type="checkbox"
                    checked={checked}
                    {...disabled && {disabled: "disabled"}}
                    {...spreadProps}
                />
                {children && <label htmlFor={props.id}>{children}</label>}
            </div>
        );
    }
) 

export default Checkbox;