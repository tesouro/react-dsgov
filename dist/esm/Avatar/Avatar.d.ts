import '@govbr-ds/core/dist/core.min.css';
import React from 'react';
import IMtProps from '../IMtProps';
export interface AvatarProps extends React.HTMLAttributes<HTMLElement>, IMtProps {
    /** Título do avatar. */
    title?: string;
    /** Imagem do avatar. */
    imageSrc?: string;
    /** Classe contendo ícone fontawesome do avatar. */
    icon?: string;
    /** Avatar em formato de letra. */
    letter?: string;
    /** Campo "alt" do avatar, caso seja uma imagem. */
    alt?: string;
    /** Densidade.
     *
     * - small: pequena
     * - medium: média
     * - large: grande
     */
    density?: 'small' | 'medium' | 'large';
    /** Se o avatar é dropdown */
    dropdown?: boolean;
    /** Cor dsgov, se for do uma letra. */
    bgColor?: string;
}
export interface AvatarRef extends HTMLElement {
    focus: () => void;
    expand: () => void;
    close: () => void;
    element: HTMLElement;
}
declare const _default: React.MemoExoticComponent<React.ForwardRefExoticComponent<AvatarProps & React.RefAttributes<AvatarRef>>>;
export default _default;
