import classNames from "classnames";
import React from "react";
import IMtProps from "./IMtProps";
import { useSpreadProps } from "./useSpreadProps";
import { useMtProps } from "./useMtProps";

interface InputProps  extends React.HTMLAttributes<HTMLInputElement>, IMtProps {
    label? : string | React.ReactElement;
    placeholder? : string,
    type?: string,
    density?: "small" | "normal" | "large",
    icon?: string,
    button?: React.ReactElement,
    highlight?: boolean,
    inline?: boolean,
    value?: string
} 

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({className, children, label, id, placeholder, type = "text", density = "normal", icon, button, highlight, inline, value, ...props}, ref) => {
        const mtProps = useMtProps(props);
        const spreadProps = useSpreadProps(props);

        return (
            <div
                ref={ref}
                className={classNames(
                    "br-input",
                    ((density === "small") && "small"),
                    ((density === "large") && "large"),
                    (highlight && "input-highlight"),
                    (inline && "input-inline"),
                    className,
                    ...mtProps
                )}
                
                
            >
                {label && <div className="input-label"><label htmlFor={id}>{label}</label></div>}
                <div className="input-content">
                    <div className="input-group">
                        {icon && <div className="input-icon"><i className={icon} aria-hidden="true"></i></div>}
                        <input id={id} type={type} placeholder={placeholder} value={value} {...spreadProps} />
                        {button}
                        {children}
                    </div>
                </div>
                
            </div>
        );
    }
) 

export default Input;