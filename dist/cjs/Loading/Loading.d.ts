import '@govbr-ds/core/dist/core.min.css';
import React from 'react';
import IMtProps from '../IMtProps';
export interface LoadingProps extends React.HTMLAttributes<HTMLDivElement>, IMtProps {
    /** Número indicando o progresso do loading. Opcional. */
    progress?: number;
    /** Tamahnho do Loading.
     *
     * - medium
     * - small
     */
    size?: 'medium' | 'small';
}
declare const Loading: React.ForwardRefExoticComponent<LoadingProps & React.RefAttributes<HTMLDivElement>>;
export default Loading;
