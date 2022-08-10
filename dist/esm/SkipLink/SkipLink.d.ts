import '@govbr-ds/core/dist/core.min.css';
import React from 'react';
import IMtProps from '../IMtProps';
import ISkipLink from './ISkipLink';
export interface SkipLinkProps extends React.HTMLAttributes<HTMLElement>, IMtProps {
    /** Lista de elementos do skiplink. */
    data: ISkipLink[];
    /** Se é do tipo composto. */
    full?: boolean;
}
declare const SkipLink: React.ForwardRefExoticComponent<SkipLinkProps & React.RefAttributes<HTMLElement>>;
export default SkipLink;
