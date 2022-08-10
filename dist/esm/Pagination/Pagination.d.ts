import '@govbr-ds/core/dist/core.min.css';
import React from 'react';
import IMtProps from '../IMtProps';
export interface IEllipsis {
    start: number;
    end: number;
}
interface PaginationProps extends Omit<React.HTMLAttributes<HTMLElement>, 'onChange'>, IMtProps {
    pageCount: number;
    ellipsis?: IEllipsis[];
    links?: string[];
    density?: 'small' | 'normal' | 'large';
    currentPage?: number;
    onChange?: (pageNumber: number) => void;
}
declare const Pagination: React.ForwardRefExoticComponent<PaginationProps & React.RefAttributes<HTMLElement>>;
export default Pagination;
