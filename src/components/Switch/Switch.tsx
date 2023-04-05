import '@govbr-ds/core/dist/components/switch/switch.min.css';

import classNames from 'classnames';
import React from 'react';
import IMtProps from '../IMtProps';
import { useSpreadProps } from '../Util/useSpreadProps';
import { useMtProps } from '../Util/useMtProps';
import uniqueId from 'lodash.uniqueid';
import useUniqueId from '../Util/useUniqueId';


export interface SwitchProps  extends React.HTMLAttributes<HTMLDivElement>, IMtProps {
    /** Label do Switch. */
    label: string
    /** Densidade do switch.
     * 
     * - small: pequena
     * - medium: média
     * - large: grande
     */
    density?: 'small' | 'medium' | 'large'
    /** Texto para o switch com valor true. */
    enabledText?: string,
    /** Texto para o switch com valor false. */
    disabledText?: string,
    /** Mostra ícone dentro do switch */
    showIcon?: boolean
    /** Posição da label.
     * 
     * - left: à esquerda do switch.
     * - top: acima do switch.
     * - right: à direita do switch.
     */
    labelPosition?: 'left' | 'top' | 'right'
} 

const Switch = React.forwardRef<HTMLDivElement, SwitchProps>(
    ({className, children, id, label, density = 'medium', enabledText, disabledText, showIcon = false, labelPosition = 'left', ...props}, ref) => {
        const fid = useUniqueId(id, 'switch_____');
        const mtProps = useMtProps(props);
        const spreadProps = useSpreadProps(props);

        return (
            <div
                className={classNames(
                    'br-switch',
                    (showIcon && 'icon'),
                    (labelPosition === 'right' && 'right'),
                    (labelPosition === 'top' && 'top'),
                    density,
                    className,
                    ...mtProps
                )}   
                
            >
                <input 
                    id={fid}
                    ref={ref}
                    type="checkbox" 
                    {...spreadProps} />
                <label htmlFor={fid}>{label}</label>
                <div 
                    className="switch-data" 
                    {...enabledText && {'data-enabled': enabledText}}
                    {...disabledText && {'data-disabled': disabledText}}
                ></div>
                {children}
            </div>
        );
    }
); 

Switch.displayName = 'Switch';

export default Switch;