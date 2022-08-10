import '@govbr-ds/core/dist/core.min.css';
import React from 'react';
import IMtProps from '../IMtProps';
export interface MagicButtonProps extends React.HTMLAttributes<HTMLButtonElement>, IMtProps {
    /** Densidade do magic button.
     *
     * - large: alta
     * - medium: média
     * - small: pequena
     */
    density?: 'large' | 'small' | 'medium';
    /** Se o botão é circular. */
    circle?: boolean;
    /** Classe de ícone FontAwesome para o botão. */
    icon?: string;
}
declare const MagicButton: React.ForwardRefExoticComponent<MagicButtonProps & React.RefAttributes<HTMLButtonElement>>;
export default MagicButton;
