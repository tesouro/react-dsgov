import '@govbr-ds/core/dist/core-base.min.css';

import classNames from 'classnames';
import React from 'react';
import IMtProps from '../IMtProps';
import { useSpreadProps } from '../Util/useSpreadProps';
import { useMtProps } from '../Util/useMtProps';

export interface ColProps  extends React.HTMLAttributes<HTMLDivElement>, IMtProps {
    /** Tamanho da coluna. */
    size?: number | string,
    /** Tamanho da coluna em dispositivos pequenos. */
    sm?: number | boolean,
    /** Tamanho da coluna em dispositivos médios. */
    md?: number | boolean,
    /** Tamanho da coluna em dispositivos grandes */
    lg?: number | boolean,
    /** Tamanho da coluna em dispositivos extra-largos */
    xl?: number | boolean,
    /** Tamanho automático */
    auto?: number |boolean
} 

const Col = React.forwardRef<HTMLDivElement, ColProps>(
    ({className, children, size, sm, md, lg, xl, auto, ...props}, ref) => {
        const mtProps = useMtProps(props);
        const spreadProps = useSpreadProps(props);    

        return (
            <div
                ref={ref}
                className={classNames(
                    sm && (typeof sm === 'boolean' ? 'col-sm' : `col-sm-${sm}`),
                    md && (typeof md === 'boolean' ? 'col-md' : `col-md-${md}`),
                    lg && (typeof sm === 'boolean' ? 'col-lg' : `col-md-${lg}`),
                    xl && (typeof xl === 'boolean' ? 'col-xl' : `col-xl-${xl}`),
                    auto && (typeof auto === 'boolean' ? 'col-auto' : `col-auto-${auto}`),
                    size && (typeof size === 'boolean' ? 'col' : `col-${size}`),
                    (!sm && !md && !lg && !xl && !auto && !size && 'col'),
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

Col.displayName = 'Col';

export default Col;