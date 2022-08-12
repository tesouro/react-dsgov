import '@govbr-ds/core/dist/core.min.css';
import React from 'react';
import IMtProps from '../IMtProps';
export interface InputProps extends React.HTMLAttributes<HTMLInputElement>, IMtProps {
    /** Label do input. */
    label?: string | React.ReactElement;
    /** Placeholder do input. */
    placeholder?: string;
    /** Tipo do input. Por padrão, é type="text". */
    type?: string;
    /** Tamanho do input.
     *
     * - small: pequeno
     * - normal: normal
     * - large: largo.
     */
    density?: 'small' | 'normal' | 'large';
    /** Classe font awesome do ícone do input. */
    icon?: string;
    /** Botão no canto direito do input. */
    button?: React.ReactElement;
    /** Se é do tipo "highlight" */
    highlight?: boolean;
    /** Se a label fica na lateral. */
    inline?: boolean;
    /** Valor do input. */
    value?: string;
    /** Status do input muda a sua cor.
     *
     * - success: verde
     * - danger: vermelho
     * - info: azul
     * - warning: amarelo
     */
    status?: 'success' | 'danger' | 'info' | 'warning';
    /** Texto de feedback que aparece embaixo do item, com a cor de fundo de acordo com o status escolhido. */
    feedbackText?: string;
}
export interface InputRef extends HTMLInputElement {
    element: HTMLInputElement | null;
    inputWrapper?: HTMLDivElement | null;
    label: HTMLLabelElement | null;
    labelGroup: HTMLDivElement | null;
    icon: HTMLElement | null;
    iconGroup: HTMLDivElement | null;
}
declare const Input: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<InputRef>>;
export default Input;
