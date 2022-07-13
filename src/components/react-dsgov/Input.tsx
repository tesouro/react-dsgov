import classNames from "classnames";
import React, { useImperativeHandle, useRef } from "react";
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

        // Implementando os refs de cada um dos elementos
        const refInputWrapper = useRef(null);
        const refInputContent = useRef(null);
        const refLabel = useRef(null);
        const refLabelGroup = useRef(null);
        const refIcon = useRef(null);
        const refIconGroup = useRef(null);

        useImperativeHandle<HTMLInputElement, any>(ref, () => ({
            get inputWrapper() {
                return refInputWrapper.current;
            },
            get label() {
                return refLabel.current;
            },
            get labelGroup() {
                return refLabelGroup.current;
            },
            get icon() {
                return refIcon.current;
            },
            get iconGroup() {
                return refIconGroup.current;
            }
        }));

        return (
            <div
                
                ref={refInputWrapper}
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
                {label && <div ref={refLabelGroup} className="input-label"><label ref={refLabel} htmlFor={id}>{label}</label></div>}
                <div ref={refInputContent} className="input-content">
                    <div className="input-group">
                        {icon && <div ref={refIconGroup} className="input-icon"><i ref={refIcon} className={icon} aria-hidden="true"></i></div>}
                        <input id={id} ref={ref} type={type} placeholder={placeholder} value={value} {...spreadProps} />
                        {button}
                        {children}
                    </div>
                </div>
                
            </div>
        );
    }
) 

export default Input;