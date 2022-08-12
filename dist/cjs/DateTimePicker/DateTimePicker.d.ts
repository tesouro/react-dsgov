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
export interface DateTimePickerRef extends HTMLInputElement {
    element: HTMLInputElement;
    wrapper: HTMLElement;
    inputWrapper: HTMLElement;
    label: HTMLElement;
    button: HTMLButtonElement;
}
declare const DateTimePicker: React.ForwardRefExoticComponent<DateTimePickerProps & React.RefAttributes<DateTimePickerRef>>;
export default DateTimePicker;
