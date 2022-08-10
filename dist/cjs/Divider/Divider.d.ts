import '@govbr-ds/core/dist/core.min.css';
import React from 'react';
import IMtProps from '../IMtProps';
export interface DividerProps extends React.HTMLAttributes<HTMLDivElement>, IMtProps {
    /** Orientação.
     *
     * - vertical
     * - horizontal
     */
    orientation?: 'vertical' | 'horizontal';
    /** Se é tracejado ou não. */
    dashed?: boolean;
    /** Tamanho.
     *
     * - sm: 2x o tamanho original
     * - md: 3x o tamanho original
     * - lg: 4x o tamanho original
     */
    size?: string;
}
declare const Divider: React.ForwardRefExoticComponent<DividerProps & React.RefAttributes<HTMLDivElement>>;
export default Divider;
