import classNames from 'classnames';
import React from 'react';
import IMtProps from '../IMtProps';
import { useSpreadProps } from '../Util/useSpreadProps';
import { useMtProps } from '../Util/useMtProps';

export interface BaseProps  extends React.HTMLAttributes<HTMLDivElement>, IMtProps {

} 

const Base = React.forwardRef<HTMLDivElement, BaseProps>(
    ({className, children, ...props}, ref) => {
        const mtProps = useMtProps(props);
        const spreadProps = useSpreadProps(props);

        return (
            <div
                ref={ref}
                className={classNames(
                    className,
                    ...mtProps
                )}
                {...spreadProps}
                
            >
                {children}
            </div>
        );
    }
); 

Base.displayName = 'Base';

export default Base;