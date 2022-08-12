import '@govbr-ds/core/dist/core.min.css';
import React from 'react';
import IMtProps from '../IMtProps';
export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement>, IMtProps {
    /** Se o botão é do tipo "Primário". */
    primary?: boolean;
    /** Se o botão é do tipo "Secundário".  */
    secondary?: boolean;
    /** Se o botão é circular. */
    circle?: boolean;
    /** Se o botão tem cor invertida. */
    inverted?: boolean;
    /** Se o botão ocupa uma linha inteira. */
    block?: boolean;
    /** Se o botão é grande. */
    large?: boolean;
    /** Se o botão é pequeno. */
    small?: boolean;
    /** Se o botão tem a propriedade "loading". */
    loading?: boolean;
    /** Se o botão está desabilitado. */
    disabled?: boolean;
    /** Classe de ícone FontAwesome para o botão. */
    icon?: string;
    /** Tipo do botão. */
    type?: 'button' | 'submit' | 'reset';
    /** Se o botão é do tipo Sign-In, especificamente para o botão de logar */
    signIn?: boolean;
    /** Se é um botão do tipo "br-item" */
    isItem?: boolean;
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    /** Itens de dropdown, caso seja um botão com dropdown */
    dropdownItems?: React.ReactElement;
}
export interface ButtonRef extends HTMLButtonElement {
    expand: () => void;
    close: () => void;
    element: HTMLButtonElement;
}
declare const _default: React.MemoExoticComponent<React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<ButtonRef>>>;
export default _default;
