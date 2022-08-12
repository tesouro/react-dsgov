import '@govbr-ds/core/dist/core.min.css';
import React from 'react';
import IMtProps from '../IMtProps';
export interface ListProps extends React.HTMLAttributes<HTMLDivElement>, IMtProps {
    /** Título da lista, opcional. */
    title?: string;
    /** Se a lista é horizontal. */
    horizontal?: boolean;
    /** Se a lista está escondida inicialmente. */
    hidden?: boolean;
    /** Expandida ou não */
    expanded?: boolean;
}
export interface ListRef extends HTMLDivElement {
    element: HTMLDivElement;
}
declare const _default: React.MemoExoticComponent<React.ForwardRefExoticComponent<ListProps & React.RefAttributes<ListRef>>>;
export default _default;
