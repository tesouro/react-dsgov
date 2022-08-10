import '@govbr-ds/core/dist/core.min.css';

import classNames from 'classnames';
import React from 'react';
import CardContent from './CardContent';
import CardFooter from './CardFooter';
import CardHeader from './CardHeader';
import IMtProps from '../IMtProps';
import { useSpreadProps } from '../Util/useSpreadProps';
import { useMtProps } from '../Util/useMtProps';
import uniqueId from 'lodash.uniqueid';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement>, IMtProps {
    /** Se o card mostra muda de comportamento ao passar o mouse em cima. */
    hover?: boolean,
    
    /** Se ele é fixo horizontalmente. */
    hFixed?: boolean,

    /** Se ele está desabilitado. */
    disabled?: boolean
} 

const Card = React.forwardRef<HTMLDivElement, CardProps>(
    ({className, id = uniqueId('card_____'), children, hover, hFixed, disabled, ...props}, ref) => {
        const mtProps = useMtProps(props);
        const spreadProps = useSpreadProps(props);

        return (
            <div 
                ref={ref}
                id={id}
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