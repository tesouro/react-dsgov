import classNames from "classnames";
import React, { useImperativeHandle, useRef } from "react";
import IMtProps from "../IMtProps";
import { useSpreadProps } from "../Util/useSpreadProps";
import { useMtProps } from "../Util/useMtProps";
import Message from "../Message/Message";
import { mapaIcones } from "../Util/Util";
import uniqueId from "lodash.uniqueid";

interface InputProps  extends React.HTMLAttributes<HTMLInputElement>, IMtProps {
    /** Label do input. */
    label? : string | React.ReactElement;
    /** Placeholder do input. */
    placeholder? : string,
    /** Tipo do input. Por padrão, é type="text". */
    type?: string,
    /** Tamanho do input.
     * 
     * - small: pequeno
     * - normal: normal
     * - large: largo.
     */
    density?: "small" | "normal" | "large",
    /** Classe font awesome do ícone do input. */
    icon?: string,
    /** Botão no canto direito do input. */
    button?: React.ReactElement,
    /** Se é do tipo "highlight" */
    highlight?: boolean,
    /** Se a label fica na lateral. */
    inline?: boolean,
    /** Valor do input. */
    value?: string,
    /** Status do input muda a sua cor.
     * 
     * - success: verde
     * - danger: vermelho
     * - info: azul
     * - warning: amarelo
     */
    status?: "success" | "danger" | "info" | "warning",
    /** Texto de feedback que aparece embaixo do item, com a cor de fundo de acordo com o status escolhido. */
    feedbackText?: string
} 

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({className, id = uniqueId("input_____"), children, label, placeholder, type = "text", density = "normal", icon, button, highlight, inline, value, status, feedbackText, ...props}, ref) => {
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
                    status,
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
                        {feedbackText && <Message category="feedback" type={status ? status : "success"} icon={status && mapaIcones.get(status)}>{feedbackText}</Message>}
                        {children}
                    </div>
                </div>
                
            </div>
        );
    }
) 

export default Input;