import classNames from 'classnames';
import React from 'react';
import IMtProps from '../../IMtProps';
import { useSpreadProps } from '../../Util/useSpreadProps';
import { useMtProps } from '../../Util/useMtProps';

export interface CardFooterProps  extends React.HTMLAttributes<HTMLDivElement>, IMtProps {

} 

const CardFooter = React.forwardRef<HTMLDivElement, CardFooterProps>(
    ({className, children, ...props}, ref) => {
        const mtProps = useMtProps(props);
        const spreadProps = useSpreadProps(props);

        return (
            <div
                ref={ref}
                className={classNames(
                    'card-footer',
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

CardFooter.displayName = 'CardFooter';

export default CardFooter;