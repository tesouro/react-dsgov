import classNames from "classnames";
import React, { useEffect, useImperativeHandle, useRef } from "react";
import IMtProps from "./IMtProps";
import { useSpreadProps } from "./useSpreadProps";
import { useMtProps } from "./useMtProps";

interface RadioProps  extends React.HTMLAttributes<HTMLInputElement>, IMtProps {
    label?: string | React.ReactElement;
    value?: string;
    name: string;
    checked?: boolean;
    state?: "disabled" | "invalid" | "valid"
} 

const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
    
    ({className, children, id, label, name, value, checked, state, ...props}, ref) => {
        const mtProps = useMtProps(props);
        const spreadProps = useSpreadProps(props);

        const refInputWrapper = useRef(null);
        const refLabel = useRef(null);
        const refInput = useRef<any>(ref);

        useEffect(() => {
            if(checked) {
                refInput.current.setAttribute('checked', true);
            } else {
                refInput.current.removeAttribute('checked');
            }
            
        }, [checked])

        useImperativeHandle<HTMLInputElement, any>(ref, () => ({
            get inputWrapper() {
                return refInputWrapper.current;
            },
            get label() {
                return refLabel.current;
            }
        }));

        return (
            <div
                ref={refInputWrapper}
                className={classNames(
                    "br-radio",
                    ((state === "disabled") && "disabled"),
                    ((state === "invalid") && "invalid"),
                    ((state === "valid") && "valid"),
                    className,
                    ...mtProps
                )}
            >
                <input 
                    ref={refInput}
                    id={id}
                    type="radio"
                    name={name}
                    value={value} 
                    {...spreadProps}
                />
                {label && <label ref={refLabel} htmlFor={id}>{label}</label>}
                {children}
            </div>
        );
    }
) 

export default Radio;