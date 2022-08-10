import '@govbr-ds/core/dist/core.min.css';
import React from 'react';
import IMtProps from '../IMtProps';
export interface ColProps extends React.HTMLAttributes<HTMLDivElement>, IMtProps {
    /** Tamanho da coluna. */
    size?: number | string;
    /** Tamanho da coluna em dispositivos pequenos. */
    sm?: number | boolean;
    /** Tamanho da coluna em dispositivos médios. */
    md?: number | boolean;
    /** Tamanho da coluna em dispositivos grandes */
    lg?: number | boolean;
    /** Tamanho da coluna em dispositivos extra-largos */
    xl?: number | boolean;
    /** Tamanho automático */
    auto?: number | boolean;
}
declare const Col: React.ForwardRefExoticComponent<ColProps & React.RefAttributes<HTMLDivElement>>;
export default Col;
