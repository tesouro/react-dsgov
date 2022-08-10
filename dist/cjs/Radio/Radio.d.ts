import '@govbr-ds/core/dist/core.min.css';
import React from 'react';
import IMtProps from '../IMtProps';
export interface RadioProps extends React.HTMLAttributes<HTMLInputElement>, IMtProps {
    /** Label do radio. */
    label?: string | React.ReactElement;
    /** Valor do radio. */
    value?: string;
    /**
     * Grupo do radio.
     */
    name: string;
    /**
     * Se está checado ou não. Obs.: para valor inicial, usar defaultChecked.
     */
    checked?: boolean;
    /** Estado.
     *
     * - invalid: fica vermelho.
     * - valid: fica verde.
     */
    state?: 'invalid' | 'valid';
    /** Se está desabilitado. */
    disabled?: boolean;
    /** Se for inline, para fazer listagem horizontal. */
    inline?: boolean;
}
declare const Radio: React.ForwardRefExoticComponent<RadioProps & React.RefAttributes<HTMLInputElement>>;
export default Radio;
