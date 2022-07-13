import classNames from "classnames";
import React, { useEffect, useImperativeHandle, useRef } from "react";
import IMtProps from "./IMtProps";
import { useSpreadProps } from "./useSpreadProps";
import { useMtProps } from "./useMtProps";

interface DateTimePickerProps extends React.HTMLAttributes<HTMLInputElement>, IMtProps {
    dataMode?: "single" | "range";
    dataType?: "text" | "time" | "datetime-local";
    label?: string | React.ReactElement;
    buttonIcon?: string,
    minDate?: string,
    maxDate?: string
}

const DateTimePicker = React.forwardRef<HTMLInputElement, DateTimePickerProps>(
    ({ className, children, dataMode = "single", dataType = "text", label, placeholder = "dd/mm/aaaa", buttonIcon = "fas fa-calendar-alt", minDate, maxDate, ...props }, ref) => {
        // Implementando os refs de cada um dos elementos
        const refWrapper = useRef(null);
        const refInputWrapper = useRef(null);
        const refLabel = useRef(null);
        const refElement = useRef(null);
        const refButton = useRef(null);

        useImperativeHandle<HTMLInputElement, any>(ref, () => ({
            get wrapper() {
                return refWrapper.current;
            },
            get inputWrapper() {
                return refInputWrapper.current;
            },
            get label() {
                return refLabel.current;
            },
            get button() {
                return refButton.current;
            }
        }));

        // Inicializando o datetimepicker
        useEffect(() => {
            const core = require('@govbr-ds/core/dist/core-init');
            refElement.current = new core.BRDateTimePicker('br-datetimepicker', refWrapper.current, { minDate: minDate, maxDate: maxDate });
        }, [minDate, maxDate])

        const mtProps = useMtProps(props);
        const spreadProps = useSpreadProps(props);

        return (
            <div
                className={classNames(
                    "br-datetimepicker",
                    ...mtProps,
                    className
                )}
                ref={refWrapper}
                data-mode={dataMode}
                data-type={dataType}

            >
                <div ref={refInputWrapper} className="br-input has-icon">
                    {label && <label htmlFor={props.id}>{label}</label>}
                    <input
                        type={dataType}
                        placeholder={placeholder}
                        ref={ref}
                        data-input="data-input"
                        {...spreadProps}
                    />
                    {buttonIcon && <button ref={refButton} className="br-button circle small" type="button" aria-label="Abrir Timepicker" data-toggle="data-toggle" id="timepicker-input-btn"><i className={buttonIcon} aria-hidden="true"></i>
                    </button>}
                    {children}
                </div>

            </div>
        );
    }
)

export default DateTimePicker;