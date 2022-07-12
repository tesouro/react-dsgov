import '@govbr-ds/core/dist/core.min.css'
import '@govbr-ds/core/dist/core-init'

import classNames from "classnames";
import React from "react";
import { BreadcrumbItem } from "./BreadcrumbItem";


export interface BreadcrumbProps extends React.HTMLAttributes<HTMLDivElement> {

}

const Breadcrumb = React.forwardRef<HTMLDivElement, BreadcrumbProps>(
    ({children, className, ...props}, ref) => {
        return (
            <div
                className={classNames("br-breadcrumb", className)}
                ref={ref}
                {...props}
            >
                <ul className="crumb-list">
                    {children}
                </ul>

            </div>
        );
    }
) 


export default Object.assign(Breadcrumb, {
    Item: BreadcrumbItem
});