import '../BaseStyles';

import classNames from 'classnames';
import React, { memo } from 'react';
import CardContent from './CardContent';
import CardFooter from './CardFooter';
import CardHeader from './CardHeader';
import IMtProps from '../IMtProps';
import { useSpreadProps } from '../Util/useSpreadProps';
import { useMtProps } from '../Util/useMtProps';
import uniqueId from 'lodash.uniqueid';
import useUniqueId from '../Util/useUniqueId';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement>, IMtProps {
    /** Se o card mostra muda de comportamento ao passar o mouse em cima. */
    hover?: boolean,
    
    /** Se ele é fixo horizontalmente. */
    hFixed?: boolean,

    /** Se ele está desabilitado. */
    disabled?: boolean
} 

const Card = React.forwardRef<HTMLDivElement, CardProps>(
    ({className, id, children, hover, hFixed, disabled, ...props}, ref) => {
        const fid = useUniqueId(id, 'card_____');
        const mtProps = useMtProps(props);
        const spreadProps = useSpreadProps(props);

        return (
            <div 
                ref={ref}
                id={fid}
                className={classNames(
                    'br-card',
                    hover && 'hover',
                    hFixed && 'h-fixed',
                    disabled && 'disabled',
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

Card.displayName = 'Card';

export default Object.assign(Card, {
    Header: CardHeader,
    Content: CardContent,
    Footer: CardFooter
});