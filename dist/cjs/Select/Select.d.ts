import '@govbr-ds/core/dist/core.min.css';
import React from 'react';
import IMtProps from '../IMtProps';
export interface SelectOptions {
    label: string;
    value: string | number;
}
interface SelectProps extends React.HTMLAttributes<HTMLSelectElement>, IMtProps {
    /** Label do Select. */
    label?: string;
    /** ID do Select. */
    id?: string;
    /** Valor do select. Pode ser um valor único ou um array, se for select múltiplo. */
    value?: string | string[] | number | number[];
    /** Options do select. */
    options: SelectOptions[];
    /** Função para detectar mudança de valor. O parâmetro não é um evento, e, sim, o valor em si. */
    onChange?: any;
    /** Se é simples ou múltiple.
     *
     * - single: simples.
     * - multiple: múltiplo.
     */
    type?: 'single' | 'multiple';
    /** Se existe opção de selecionar todos, se o type="multiple". */
    selectAllText?: string;
    /** Se está desabilitado. */
    disabled?: boolean;
}
declare const _default: React.MemoExoticComponent<React.ForwardRefExoticComponent<SelectProps & React.RefAttributes<HTMLSelectElement>>>;
export default _default;
