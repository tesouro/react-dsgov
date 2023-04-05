import '@govbr-ds/core/dist/components/divider/divider.min.css';

import classNames from 'classnames';
import React from 'react';
import IMtProps from '../IMtProps';
import { useSpreadProps } from '../Util/useSpreadProps';
import { useMtProps } from '../Util/useMtProps';

export interface DividerProps  extends React.HTMLAttributes<HTMLDivElement>, IMtProps {
    /** Orientação.
     * 
     * - vertical
     * - horizontal
     */
    orientation?: 'vertical' | 'horizontal',
    /** Se é tracejado ou não. */
    dashed?: boolean,
    /** Tamanho.
     * 
     * - sm: 2x o tamanho original
     * - md: 3x o tamanho original
     * - lg: 4x o tamanho original
     */
    size?: string
} 

const Divider = React.forwardRef<HTMLDivElement, DividerProps>(
    ({className, children, orientation = 'horizontal', dashed = false, size, ...props}, ref) => {
        const mtProps = useMtProps(props);
        const spreadProps = useSpreadProps(props);

        return (
            <div
                ref={ref}
                className={classNames(
                    'br-divider',
                    ((orientation === 'vertical') && 'vertical'),
                    (dashed && 'dashed'),
                    (size === 'sm' && 'sm'),
                    (size === 'md' && 'md'),
                    (size === 'lg' && 'lg'),
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

Divider.displayName = 'Divider';

export default Divider;