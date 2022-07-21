import classNames from "classnames";
import React from "react";
import IMtProps from "../IMtProps";
import { useSpreadProps } from "../Util/useSpreadProps";
import { useMtProps } from "../Util/useMtProps";
import uniqueId from 'lodash.uniqueid';


interface SwitchProps  extends React.HTMLAttributes<HTMLDivElement>, IMtProps {
    /** Label do Switch. */
    label: string
    /** Densidade do switch.
     * 
     * - small: pequena
     * - medium: média
     * - large: grande
     */
    density?: "small" | "medium" | "large"
    /** Texto para o switch com valor true. */
    enabledText?: string,
    /** Texto para o switch com valor false. */
    disabledText?: string,
    /** Mostra ícone dentro do switch */
    showIcon?: boolean
    /** Posição da label.
     * 
     * - left: à esquerda do switch.
     * - top: acima do switch.
     * - right: à direita do switch.
     */
    labelPosition?: "left" | "top" | "right"
} 

const Switch = React.forwardRef<HTMLDivElement, SwitchProps>(
    ({className, children, id = uniqueId("switch_____"), label, density = "medium", enabledText, disabledText, showIcon = false, labelPosition = "left", ...props}, ref) => {
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