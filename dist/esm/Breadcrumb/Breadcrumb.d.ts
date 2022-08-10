import '@govbr-ds/core/dist/core.min.css';
import '@govbr-ds/core/dist/core-init';
import React from 'react';
export interface BreadcrumbProps extends React.HTMLAttributes<HTMLDivElement> {
}
declare const _default: React.ForwardRefExoticComponent<BreadcrumbProps & React.RefAttributes<HTMLDivElement>> & {
    Item: React.ForwardRefExoticComponent<import("./BreadcrumbItem/BreadcrumbItem").BreadcrumbItemProps & React.RefAttributes<HTMLLIElement>>;
};
export default _default;
