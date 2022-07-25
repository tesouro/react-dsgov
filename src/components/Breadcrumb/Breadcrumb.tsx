import '@govbr-ds/core/dist/core.min.css';
import '@govbr-ds/core/dist/core-init';

import classNames from 'classnames';
import React from 'react';
import { useMtProps } from '../Util/useMtProps';
import { useSpreadProps } from '../Util/useSpreadProps';
import BreadcrumbItem from './BreadcrumbItem';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface BreadcrumbProps extends React.HTMLAttributes<HTMLDivElement> {

}

const Breadcrumb = React.forwardRef<HTMLDivElement, BreadcrumbProps>(
    ({children, className, ...props}, ref) => {
        const mtProps = useMtProps(props);
        const spreadProps = useSpreadProps(props);
        
        return (
            <div
                className={classNames('br-breadcrumb', ...mtProps, className)}
                ref={ref}
                {...spreadProps}
            >
                <ul className="crumb-list">
                    {children}
                </ul>

            </div>
        );
    }
); 

Breadcrumb.displayName = 'Breadcrumb';

export default Object.assign(Breadcrumb, {
    Item: BreadcrumbItem
});