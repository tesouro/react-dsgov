import classNames from "classnames";
import React, { useImperativeHandle, useRef, useState } from "react";
import IMtProps from "../IMtProps";
import { useSpreadProps } from "../Util/useSpreadProps";
import { useMtProps } from "../Util/useMtProps";
import Message from "../Message/Message";
import { mapaIcones } from "../Util/Util";
import Row from "../Row/Row";
import uniqueId from "lodash.uniqueid";

interface TextareaProps extends React.HTMLAttributes<HTMLTextAreaElement>, IMtProps {
    label: string | React.ReactElement;
    placeholder?: string,
    type?: string,
    density?: "small" | "normal" | "large",
    inline?: boolean,
    value?: string,
    maxLength?: number,
    showCharacterCounter?: boolean,
    status?: "success" | "danger" | "info" | "warning",
    feedbackText?: string | React.ReactElement,
    inverted?: boolean
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
    ({ className, children, label, id = uniqueId("textarea_____"), placeholder, type = "text", density = "normal", inline, value, maxLength, feedbackText, showCharacterCounter = false, status, inverted = false, onChange, ...props }, ref) => {
        const mtProps = useMtProps(props);
        const spreadProps = useSpreadProps(props);

        const [qtdCaracteres, setQtdCaracteres] = useState<number>(0);

        // Implementando os refs de cada um dos elementos
        const refTextareaWrapper = useRef(null);
        const refTextareaContent = useRef(null);
        const refLabel = useRef(null);
        const refLabelGroup = useRef(null);
        const refIcon = useRef(null);
        const refIconGroup = useRef(null);

        
        useImperativeHandle<HTMLTextAreaElement, any>(ref, () => ({
            get TextareaWrapper() {
                return refTextareaWrapper.current;
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



        const handleChange = (evento : React.ChangeEvent<HTMLTextAreaElement>) => {
            // Chama o onChange passado como property
            if(onChange) {
                onChange(evento);
            }

            // Seta a quantidade de Caracteres
            setQtdCaracteres(evento.target.value.length);
        }


        const labelElement = label && <label ref={refLabel} htmlFor={id}>{label}</label>;
        const textAreaElement = <>
            <textarea 
                id={id} 
                value={value} 
                ref={ref} 
                type={type} 
                {...maxLength && {maxLength: maxLength}}
                placeholder={placeholder} 
                onChange={(evento) => handleChange(evento)}
                {...spreadProps} />
            {showCharacterCounter && 
            <>
                {maxLength && <div className="text-base mt-1"><span className="limit">Limite máximo de <strong>{maxLength - qtdCaracteres}</strong> caracteres</span><span className="current"></span></div>}
                {!maxLength && <div className="text-base mt-1"><span className="limit"><strong>{qtdCaracteres}</strong> caracteres digitados</span><span className="current"></span></div>}
            </>
            }
            {feedbackText && <Message category="feedback" type={status ? status : "success"} icon={status && mapaIcones.get(status)}>{feedbackText}</Message>}
            
            {children}
        </>

        return (
            <div
                ref={refTextareaWrapper}
                className={classNames(
                    "br-textarea",
                    ((density === "small") && "small"),
                    ((density === "large") && "large"),
                    (inverted && "inverted"),
                    status,
                    className,
                    ...mtProps
                )}
            >
                {inline &&
                    <Row>
                        <div className="col-auto pt-half">
                            {labelElement}
                        </div>
                        <div ref={refTextareaContent} className="textarea-content col">
                            {textAreaElement}
                        </div>
                    </Row>
                }

                {!inline &&
                    <>
                        {labelElement}
                        <div ref={refTextareaContent} className="textarea-content">
                            {textAreaElement}
                        </div>
                    </>
                }

            </div>
        );
    }
)

export default Textarea;