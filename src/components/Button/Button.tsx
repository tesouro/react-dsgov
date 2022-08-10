import '@govbr-ds/core/dist/core.min.css';
import '@govbr-ds/core/dist/core-init';

import classNames from 'classnames';
import React, { useEffect, useRef, useState } from 'react';
import IMtProps from '../IMtProps';
import { useSpreadProps } from '../Util/useSpreadProps';
import { useMtProps } from '../Util/useMtProps';
import uniqueId from 'lodash.uniqueid';
import useOutsideClick from '../Util/useOutsideClick';
import List from '../List';
import CustomTag from '../CustomTag';

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement>, IMtProps {
    /** Se o botão é do tipo "Primário". */
    primary?: boolean,
    /** Se o botão é do tipo "Secundário".  */
    secondary?: boolean,
    /** Se o botão é circular. */
    circle?: boolean,
    /** Se o botão tem cor invertida. */
    inverted?: boolean,
    /** Se o botão ocupa uma linha inteira. */
    block?: boolean,
    /** Se o botão é grande. */
    large?: boolean,
    /** Se o botão é pequeno. */
    small?: boolean,
    /** Se o botão tem a propriedade "loading". */
    loading?: boolean,
    /** Se o botão está desabilitado. */
    disabled?: boolean,
    /** Classe de ícone FontAwesome para o botão. */
    icon?: string,
    /** Tipo do botão. */
    type?: 'button' | 'submit' | 'reset'
    /** Se o botão é do tipo Sign-In, especificamente para o botão de logar */
    signIn?: boolean;
    /** Se é um botão do tipo "br-item" */
    isItem?: boolean;

    onClick?: (event : React.MouseEvent<HTMLButtonElement, MouseEvent>) => void

    /** Itens de dropdown, caso seja um botão com dropdown */
    dropdownItems?: React.ReactElement
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({children, className, id = uniqueId('button_____'), type = 'submit', primary, secondary, circle, inverted, block, large, small, loading, disabled, icon, signIn = false, isItem = false, onClick = () => {/** */}, dropdownItems, ...props}, ref) => {
        
        const mtProps = useMtProps(props);
        const spreadProps = useSpreadProps(props);
        const [expanded, setExpanded] = useState<boolean>(false);

        const refButton = useRef(null);
        const refList = useRef(null);

        const handleOnClick = (event : React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
            onClick(event);
            setExpanded(!expanded);
        };

        useOutsideClick([refButton, refList], () => {
            setTimeout(() => setExpanded(false), 100);
        });

        useEffect(() => {
            if (!ref) return;
            if (typeof ref === 'function') {
                ref(refButton.current);
            } else {
                ref.current = refButton.current;
            }
        });

        return (
            <CustomTag
                tagName={dropdownItems && 'div'}
                className={expanded && 'dropdown'}
            >
                <button
                    type={type}
                    id={id}
                    className={classNames(
                        (!signIn && !isItem && 'br-button'),
                        (isItem && 'br-item'),
                        (signIn && 'br-sign-in'),
                        {'primary' : primary},
                        {'secondary' : secondary},
                        {'circle': circle},
                        {'inverted': inverted},
                        {'block': block},
                        {'large': large},
                        {'small': small},
                        {'loading': loading},
                        ...mtProps,
                        className
                    )}
                    disabled={disabled}
                    ref={refButton}
                    onClick={handleOnClick}
                    {...dropdownItems && {'aria-expanded': expanded}}
                    {...dropdownItems && {'data-visible': expanded}}
                    {...dropdownItems && {'data-toggle': 'dropdown'}}
                    {...spreadProps}
                >
                    {icon && <i className={icon} aria-hidden="true"></i>}
                    {children}
                </button>
                {dropdownItems && 
                    <List ref={refList} className='target' hidden={!expanded} aria-hidden={!expanded} role="" style={{zIndex: 9999}}>
                        {dropdownItems}
                    </List>
                }
            </CustomTag>
            
        );
    }

); 

Button.displayName = 'Button';

export default Button;
