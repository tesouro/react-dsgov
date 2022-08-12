import '@govbr-ds/core/dist/core.min.css';
import React from 'react';
export interface BreadcrumbProps extends React.HTMLAttributes<HTMLDivElement> {
}
declare const _default: React.NamedExoticComponent<BreadcrumbProps & React.RefAttributes<HTMLDivElement>> & {
    readonly type: React.ForwardRefExoticComponent<BreadcrumbProps & React.RefAttributes<HTMLDivElement>>;
} & {
    Item: React.MemoExoticComponent<React.ForwardRefExoticComponent<import("./BreadcrumbItem/BreadcrumbItem").BreadcrumbItemProps & React.RefAttributes<HTMLLIElement>>>;
};
export default _default;
