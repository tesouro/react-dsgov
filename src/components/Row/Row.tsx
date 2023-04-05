import '@govbr-ds/core/dist/core-base.min.css';

import classNames from 'classnames';
import React from 'react';
import IMtProps from '../IMtProps';
import { useSpreadProps } from '../Util/useSpreadProps';
import { useMtProps } from '../Util/useMtProps';

export interface RowProps  extends React.HTMLAttributes<HTMLDivElement>, IMtProps {

} 

const Row = React.forwardRef<HTMLDivElement, RowProps>(
    ({className, children, ...props}, ref) => {
        const mtProps = useMtProps(props);
        const spreadProps = useSpreadProps(props);

        return (
            <div
                ref={ref}
                className={classNames(
                    'row',
                    ...mtProps,
                    className
                )}
                {...spreadProps}
                
            >
                {children}
            </div>
        );
    }
); 

Row.displayName = 'Row';

export default Row;