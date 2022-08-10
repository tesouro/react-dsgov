import '@govbr-ds/core/dist/core.min.css';
import React from 'react';
import IMtProps from '../IMtProps';
export interface TextareaProps extends React.HTMLAttributes<HTMLTextAreaElement>, IMtProps {
    /** Label do textarea. */
    label: string | React.ReactElement;
    /** Placeholder do textarea. */
    placeholder?: string;
    /** Densidade do textarea.
     *
     * - small: pequena
     * - normal: normal
     * - large: grande
     */
    density?: 'small' | 'normal' | 'large';
    /** Se a label é mostrada à esquerda do campo. */
    inline?: boolean;
    /** Valor do textarea. */
    value?: string;
    /** Quantidade máxima de caracteres possível. */
    maxLength?: number;
    /** Se mostra ou não contador de caracteres. */
    showCharacterCounter?: boolean;
    /** Status. Define a cor do textarea e do texto de feedback.
     *
     * - success: verde
     * - danger: vermelho
     * - info: azul
     * - warning: amarelo
     */
    status?: 'success' | 'danger' | 'info' | 'warning';
    /** Texto de feedback que aparece embaixo do textarea. */
    feedbackText?: string | React.ReactElement;
    /** Se é invertido, para fundos escuros. */
    inverted?: boolean;
}
declare const Textarea: React.ForwardRefExoticComponent<TextareaProps & React.RefAttributes<HTMLTextAreaElement>>;
export default Textarea;
