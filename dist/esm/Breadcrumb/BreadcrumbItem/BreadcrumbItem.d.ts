import React from 'react';
export interface BreadcrumbItemProps extends React.HTMLAttributes<HTMLLIElement> {
    href?: string;
    home?: boolean;
    target?: string;
    disabled?: boolean;
}
export declare const BreadcrumbItem: React.ForwardRefExoticComponent<BreadcrumbItemProps & React.RefAttributes<HTMLLIElement>>;
export default BreadcrumbItem;
