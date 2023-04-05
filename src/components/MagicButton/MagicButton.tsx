import '@govbr-ds/core/dist/components/magicbutton/magicbutton.min.css';

import classNames from 'classnames';
import React, { useEffect, useImperativeHandle, useRef } from 'react';
import IMtProps from '../IMtProps';
import { useSpreadProps } from '../Util/useSpreadProps';
import { useMtProps } from '../Util/useMtProps';
import Button from '../Button';
import uniqueId from 'lodash.uniqueid';
import useCommonProperties from '../Util/useCommonProperties';
import useUniqueId from '../Util/useUniqueId';


export interface MagicButtonProps  extends React.HTMLAttributes<HTMLButtonElement>, IMtProps {
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

export interface MagicButtonRef extends HTMLButtonElement {
    element: HTMLButtonElement
}

const MagicButton = React.forwardRef<MagicButtonRef, MagicButtonProps>(
    ({className, id, children, density = 'medium', ...props}, ref) => {
        const fid = useUniqueId(id, 'magicbutton_____');
        const mtProps = useMtProps(props);
        const spreadProps = useSpreadProps(props);
        const refWrapper = useRef(null);
        const refButton = useRef<HTMLButtonElement>(null);
        
        useCommonProperties<MagicButtonRef>(ref, refButton, {
            get element() {
                return refButton.current;
            }
        });


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
                    id={fid}
                    ref={refButton}
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