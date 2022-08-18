import '@govbr-ds/core/dist/core.min.css';
import React from 'react';
import IMtProps from '../IMtProps';
export interface IEllipsis {
    start: number;
    end: number;
}
interface PaginationProps extends Omit<React.HTMLAttributes<HTMLElement>, 'onChange'>, IMtProps {
    pageCount?: number;
    ellipsis?: IEllipsis[];
    links?: string[];
    density?: 'small' | 'normal' | 'large';
    initialPage?: number;
    onChange?: (pageNumber: number) => void;
    onChangePageSize?: (pageSize: number) => void;
    type?: 'normal' | 'contextual';
    perPageOptions?: number[];
    itemCount?: number;
    showPageCombo?: boolean;
}
declare const _default: React.MemoExoticComponent<React.ForwardRefExoticComponent<PaginationProps & React.RefAttributes<HTMLElement>>>;
export default _default;
