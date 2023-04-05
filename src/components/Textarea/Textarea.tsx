import '@govbr-ds/core/dist/components/textarea/textarea.min.css';

import classNames from 'classnames';
import React, { useImperativeHandle, useRef, useState } from 'react';
import IMtProps from '../IMtProps';
import { useSpreadProps } from '../Util/useSpreadProps';
import { useMtProps } from '../Util/useMtProps';
import Message from '../Message/Message';
import { mapaIcones } from '../Util/Util';
import Row from '../Row/Row';
import uniqueId from 'lodash.uniqueid';
import useCommonProperties from '../Util/useCommonProperties';
import useUniqueId from '../Util/useUniqueId';

export interface TextareaProps extends React.HTMLAttributes<HTMLTextAreaElement>, IMtProps {
    /** Label do textarea. */
    label: string | React.ReactElement;
    /** Placeholder do textarea. */
    placeholder?: string,
    /** Densidade do textarea.
     * 
     * - small: pequena
     * - normal: normal
     * - large: grande
     */
    density?: 'small' | 'normal' | 'large',
    /** Se a label é mostrada à esquerda do campo. */
    inline?: boolean,
    /** Valor do textarea. */
    value?: string,
    /** Quantidade máxima de caracteres possível. */
    maxLength?: number,
    /** Se mostra ou não contador de caracteres. */
    showCharacterCounter?: boolean,
    /** Status. Define a cor do textarea e do texto de feedback.
     * 
     * - success: verde
     * - danger: vermelho
     * - info: azul
     * - warning: amarelo
     */
    status?: 'success' | 'danger' | 'info' | 'warning',
    /** Texto de feedback que aparece embaixo do textarea. */
    feedbackText?: string | React.ReactElement,
    /** Se é invertido, para fundos escuros. */
    inverted?: boolean
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
    ({ className, children, label, id, placeholder, density = 'normal', inline, value, maxLength, feedbackText, showCharacterCounter = false, status, inverted = false, onChange, ...props }, ref) => {
        const fid = useUniqueId(id, 'textarea_____');
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
        const refTextarea = useRef<HTMLTextAreaElement>(null);

        

        useCommonProperties<HTMLTextAreaElement>(ref, refTextarea, {
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
        });



        const handleChange = (evento : React.ChangeEvent<HTMLTextAreaElement>) => {
            // Chama o onChange passado como property
            if(onChange) {
                onChange(evento);
            }

            // Seta a quantidade de Caracteres
            setQtdCaracteres(evento.target.value.length);
        };


        const labelElement = label && <label ref={refLabel} htmlFor={fid}>{label}</label>;
        const textAreaElement = <>
            <textarea 
                id={fid} 
                value={value} 
                ref={refTextarea} 
                {...maxLength && {maxLength: maxLength}}
                placeholder={placeholder} 
                onChange={handleChange}
                {...spreadProps} />
            {showCharacterCounter && 
            <>
                {maxLength && <div className="text-base mt-1"><span className="limit">Limite máximo de <strong>{maxLength - qtdCaracteres}</strong> caracteres</span><span className="current"></span></div>}
                {!maxLength && <div className="text-base mt-1"><span className="limit"><strong>{qtdCaracteres}</strong> caracteres digitados</span><span className="current"></span></div>}
            </>
            }
            {feedbackText && <Message category="feedback" type={status ? status : 'success'} icon={status && mapaIcones.get(status)}>{feedbackText}</Message>}
            
            {children}
        </>;

        return (
            <div
                ref={refTextareaWrapper}
                className={classNames(
                    'br-textarea',
                    ((density === 'small') && 'small'),
                    ((density === 'large') && 'large'),
                    (inverted && 'inverted'),
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
);

Textarea.displayName = 'Textarea';

export default Textarea;