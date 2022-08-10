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
declare const List: React.ForwardRefExoticComponent<ListProps & React.RefAttributes<HTMLDivElement>>;
export default List;
