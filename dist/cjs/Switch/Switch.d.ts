import '@govbr-ds/core/dist/core.min.css';
import React from 'react';
import IMtProps from '../IMtProps';
export interface SwitchProps extends React.HTMLAttributes<HTMLDivElement>, IMtProps {
    /** Label do Switch. */
    label: string;
    /** Densidade do switch.
     *
     * - small: pequena
     * - medium: média
     * - large: grande
     */
    density?: 'small' | 'medium' | 'large';
    /** Texto para o switch com valor true. */
    enabledText?: string;
    /** Texto para o switch com valor false. */
    disabledText?: string;
    /** Mostra ícone dentro do switch */
    showIcon?: boolean;
    /** Posição da label.
     *
     * - left: à esquerda do switch.
     * - top: acima do switch.
     * - right: à direita do switch.
     */
    labelPosition?: 'left' | 'top' | 'right';
}
declare const Switch: React.ForwardRefExoticComponent<SwitchProps & React.RefAttributes<HTMLDivElement>>;
export default Switch;
