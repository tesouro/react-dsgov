import classNames from "classnames";
import React from "react";
import IMtProps from "./IMtProps";
import { useSpreadProps } from "./useSpreadProps";
import { useMtProps } from "./useMtProps";

interface SwitchProps  extends React.HTMLAttributes<HTMLDivElement>, IMtProps {
    label: string
    density?: "small" | "medium" | "large"
    enabledText?: string,
    disabledText?: string,
    showIcon?: boolean
    labelPosition?: "left" | "top" | "right"
} 

const Switch = React.forwardRef<HTMLDivElement, SwitchProps>(
    ({className, children, id, label, density = "medium", enabledText, disabledText, showIcon = false, labelPosition = "left", ...props}, ref) => {
        const mtProps = useMtProps(props);
        const spreadProps = useSpreadProps(props);


        return (
            <div
                className={classNames(
                    "br-switch",
                    (showIcon && "icon"),
                    (labelPosition === "right" && "right"),
                    (labelPosition === "top" && "top"),
                    density,
                    className,
                    ...mtProps
                )}   
                
            >
                <input 
                    id={id}
                    ref={ref}
                    type="checkbox" 
                    {...spreadProps} />
                <label htmlFor={id}>{label}</label>
                <div 
                    className="switch-data" 
                    {...enabledText && {"data-enabled": enabledText}}
                    {...disabledText && {"data-disabled": disabledText}}
                ></div>
                {children}
            </div>
        );
    }
) 

export default Switch;