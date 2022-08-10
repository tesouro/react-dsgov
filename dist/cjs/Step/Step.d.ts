import '@govbr-ds/core/dist/core.min.css';
import React from 'react';
import IMtProps from '../IMtProps';
export interface IStep {
    label?: string;
    status?: 'warning' | 'success' | 'info' | 'danger';
    icon?: string;
}
export interface StepProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'>, IMtProps {
    /** Orientação.
     *
     * - horizontal: os steps são organizados na horizontal.
     * - vertical: os steps são organizados na vertical.
     */
    orientation?: 'horizontal' | 'vertical';
    /**
     * Lista de steps a serem renderizados.
     */
    steps: IStep[] | string[];
    /**
     * Step inicial.
     */
    initialStep?: number;
    /**
     * Posição da label.
     */
    labelPosition?: 'top' | 'bottom' | 'left' | 'right';
    /**
     * Tipo do step.
     *
     * - void: só um ponto, sem texto. Pode ser com ícone.
     * - simple: apenas pontinhos juntos.
     * - text: formato de texto (1/5, 2/5, ...)
     */
    type?: 'void' | 'simple' | 'text';
    /** Determina se haverá um rolagem horizontal caso a quantidade de botões em tela ultrapasse a área visivel. */
    scroll?: boolean;
    onChange?: (value: number) => void;
    value?: number;
}
declare const Step: React.ForwardRefExoticComponent<StepProps & React.RefAttributes<HTMLDivElement>>;
export default Step;
