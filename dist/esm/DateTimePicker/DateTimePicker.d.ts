import '@govbr-ds/core/dist/core.min.css';
import React from 'react';
import IMtProps from '../IMtProps';
export interface DateTimePickerProps extends React.HTMLAttributes<HTMLInputElement>, IMtProps {
    /** Modo do Datetime.
     *
     * - single: uma data apenas a escolher.
     * - range: um intervalo de datas a escolher.
     */
    dataMode?: 'single' | 'range';
    /** Tipo do Datetime.
     *
     * - text: seleciona data.
     * - time: seleciona apenas hora.
     * - datetime-local: seleciona data e hora.
     */
    dataType?: 'text' | 'time' | 'datetime-local';
    /** Label do DatetimePicker. */
    label?: string | React.ReactElement;
    /** Classe font awesome do ícone do botão. */
    buttonIcon?: string;
    /** Data mínima selecionável. */
    minDate?: string;
    /** Data máxima selecionável. */
    maxDate?: string;
}
declare const DateTimePicker: React.ForwardRefExoticComponent<DateTimePickerProps & React.RefAttributes<HTMLInputElement>>;
export default DateTimePicker;
