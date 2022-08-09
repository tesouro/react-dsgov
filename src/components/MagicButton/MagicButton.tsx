import '@govbr-ds/core/dist/core.min.css';

import classNames from 'classnames';
import React, { useImperativeHandle, useRef } from 'react';
import IMtProps from '../IMtProps';
import { useSpreadProps } from '../Util/useSpreadProps';
import { useMtProps } from '../Util/useMtProps';
import Button from '../Button';
import uniqueId from 'lodash.uniqueid';


interface MagicButtonProps  extends React.HTMLAttributes<HTMLButtonElement>, IMtProps {
        /** Densidade do magic button.
         * 
         * - large: alta
         * - medium: média
         * - small: pequena
         */
        density?: 'large' | 'small' | 'medium';
        /** Se o botão é circular. */
        circle?: boolean,
        /** Classe de ícone FontAwesome para o botão. */
        icon?: string
}

const MagicButton = React.forwardRef<HTMLButtonElement, MagicButtonProps>(
    ({className, id = uniqueId('magicbutton_____'), children, density = 'medium', ...props}, ref) => {
        const mtProps = useMtProps(props);
        const spreadProps = useSpreadProps(props);
        const refWrapper = useRef(null);
        
        useImperativeHandle<HTMLButtonElement, any>(ref, () => ({
            get wrapper() {
                return refWrapper.current;
            }
        }));

        return (
            <div
                
                ref={refWrapper}
                className={classNames(
                    'br-magic-button',
                    density,
                    className,
                    ...mtProps
                )}                
            >
                <Button
                    id={id}
                    ref={ref}
                    {...spreadProps}
                >
                    {children}
                </Button>
                
            </div>
        );
    }
); 

MagicButton.displayName = 'MagicButton';

export default MagicButton;