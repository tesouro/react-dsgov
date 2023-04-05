import '@govbr-ds/core/dist/components/breadcrumb/breadcrumb.min.css';

import classNames from 'classnames';
import React, { memo } from 'react';
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

export default Object.assign(memo(Breadcrumb), {
    Item: memo(BreadcrumbItem)
});