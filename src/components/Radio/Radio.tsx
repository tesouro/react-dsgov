import classNames from "classnames";
import React, { useEffect, useImperativeHandle, useRef } from "react";
import IMtProps from "../IMtProps";
import { useSpreadProps } from "../Util/useSpreadProps";
import { useMtProps } from "../Util/useMtProps";
import CustomTag from "../CustomTag";

interface RadioProps  extends React.HTMLAttributes<HTMLInputElement>, IMtProps {
    /** Label do radio. */
    label?: string | React.ReactElement;
    /** Valor do radio. */
    value?: string;
    /**
     * Grupo do radio.
     */
    name: string;
    /**
     * Se está checado ou não. Obs.: para valor inicial, usar defaultChecked.
     */
    checked?: boolean;
    /** Estado.
     * 
     * - invalid: fica vermelho.
     * - valid: fica verde.
     */
    state?: "invalid" | "valid"
    /** Se está desabilitado. */
    disabled?: boolean;
    /** Se for inline, para fazer listagem horizontal. */
    inline?: boolean;
} 

const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
    
    ({className, children, id, label, name, value, checked, state, disabled = false, inline = false, ...props}, ref) => {
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
            <CustomTag
                {...inline && {tagName: "div"}}
                className={classNames(
                    (inline && "d-inline-block"),
                    (inline && "mr-5")
                )}
            >
                <div
                    ref={refInputWrapper}
                    className={classNames(
                        "br-radio",
                        (disabled && "disabled"),
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
            </CustomTag>
        );
    }
) 

export default Radio;