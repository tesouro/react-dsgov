import '@govbr-ds/core/dist/core.min.css';

import classNames from 'classnames';
import React, { useEffect, useImperativeHandle, useRef } from 'react';
import IMtProps from '../IMtProps';
import { useSpreadProps } from '../Util/useSpreadProps';
import { useMtProps } from '../Util/useMtProps';
import Message from '../Message/Message';
import { mapaIcones } from '../Util/Util';
import uniqueId from 'lodash.uniqueid';
import useCommonProperties from '../Util/useCommonProperties';
import useUniqueId from '../Util/useUniqueId';

export interface InputProps extends React.HTMLAttributes<HTMLInputElement>, IMtProps {
    /** Label do input. */
    label?: string | React.ReactElement;
    /** Placeholder do input. */
    placeholder?: string,
    /** Tipo do input. Por padrão, é type="text". */
    type?: string,
    /** Tamanho do input.
     * 
     * - small: pequeno
     * - normal: normal
     * - large: largo.
     */
    density?: 'small' | 'normal' | 'large',
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
    status?: 'success' | 'danger' | 'info' | 'warning',
    /** Texto de feedback que aparece embaixo do item, com a cor de fundo de acordo com o status escolhido. */
    feedbackText?: string
}

export interface InputRef extends HTMLInputElement {
    element: HTMLInputElement | null,
    inputWrapper?: HTMLDivElement | null,
    label: HTMLLabelElement | null
    labelGroup: HTMLDivElement | null
    icon: HTMLElement | null
    iconGroup: HTMLDivElement | null
}





const Input = React.forwardRef<InputRef, InputProps>(
    ({ className, id, children, label, placeholder, type = 'text', density = 'normal', icon, button, highlight, inline, value, status, feedbackText, ...props }, ref) => {
        const fid = useUniqueId(id, 'input_____');
        const mtProps = useMtProps(props);
        const spreadProps = useSpreadProps(props);

        // Implementando os refs de cada um dos elementos
        const refInput = useRef<HTMLInputElement>(null);
        const refInputWrapper = useRef<HTMLDivElement>(null);
        const refInputContent = useRef(null);
        const refLabel = useRef<HTMLLabelElement>(null);
        const refLabelGroup = useRef<HTMLDivElement>(null);
        const refIcon = useRef<HTMLElement>(null);
        const refIconGroup = useRef<HTMLDivElement>(null);



        useCommonProperties<InputRef>(ref, refInput, {
            get element() {
                return refInput.current;
            },
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
        });


        return (
            <div

                ref={refInputWrapper}
                className={classNames(
                    'br-input',
                    ((density === 'small') && 'small'),
                    ((density === 'large') && 'large'),
                    (highlight && 'input-highlight'),
                    (inline && 'input-inline'),
                    status,
                    className,
                    ...mtProps
                )}


            >
                {label && <div ref={refLabelGroup} className="input-label"><label ref={refLabel} htmlFor={fid}>{label}</label></div>}
                <div ref={refInputContent} className="input-content">
                    <div className="input-group">
                        {icon && <div ref={refIconGroup} className="input-icon"><i ref={refIcon} className={icon} aria-hidden="true"></i></div>}
                        <input id={fid} ref={refInput} type={type} placeholder={placeholder} value={value} {...spreadProps} />
                        {button}
                        {feedbackText && <Message category="feedback" type={status ? status : 'success'} icon={status && mapaIcones.get(status)}>{feedbackText}</Message>}
                        {children}
                    </div>
                </div>

            </div>
        );
    }
);

Input.displayName = 'Input';

export default Input;