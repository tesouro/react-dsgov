import classNames from 'classnames';
import React from 'react';
import IMtProps from '../../IMtProps';
import { useSpreadProps } from '../../Util/useSpreadProps';
import { useMtProps } from '../../Util/useMtProps';

export interface CardContentProps  extends React.HTMLAttributes<HTMLDivElement>, IMtProps {

} 

const CardContent = React.forwardRef<HTMLDivElement, CardContentProps>(
    ({className, children, ...props}, ref) => {
        const mtProps = useMtProps(props);
        const spreadProps = useSpreadProps(props);

        return (
            <div
                ref={ref}
                className={classNames(
                    'card-content', 
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

CardContent.displayName = 'CardContent';

export default CardContent;