import classNames from 'classnames';
import React, { useRef, useState } from 'react';
import IMtProps from '../IMtProps';
import { useSpreadProps } from '../Util/useSpreadProps';
import { useMtProps } from '../Util/useMtProps';
import CustomTag from '../CustomTag';
import uniqueId from 'lodash.uniqueid';
import Notification from '../Notification';
import useOutsideClick from '../Util/useOutsideClick';

interface AvatarProps  extends React.HTMLAttributes<HTMLElement>, IMtProps {
    title?: string;
    imageSrc?: string;
    icon?: string;
    letter?: string;
    alt?: string;
    /** Densidade.
     * 
     * - small: pequena
     * - medium: média
     * - large: grande
     */
    density?: 'small' | 'medium' | 'large'
    /** Se o avatr é dropdown */
    dropdown?: boolean
    /** Cor dsgov, se for do uma letra. */
    bgColor?: string
} 

const Avatar = React.forwardRef<HTMLElement, AvatarProps>(
    ({className, children, id = uniqueId('avatar_____'), title, imageSrc, alt = 'Avatar', density = 'small', letter, dropdown = false, icon, bgColor = 'bg-violet-50', ...props}, ref) => {
        const mtProps = useMtProps(props);
        const spreadProps = useSpreadProps(props);

        const refContainer = useRef(ref);

        const [opened, setOpened] = useState<boolean>(false);

        useOutsideClick(refContainer, () => {
            setOpened(false);
        });

        const handleOpenClose = () => {
            setOpened(!opened);
        };

        return (
            <>
                <CustomTag
                    tagName={dropdown ? 'button' : 'span'}
                    ref={refContainer}
                    id={id}
                    title={title}
                    onClick={handleOpenClose}
                    {
                        ...dropdown && 
                        {
                            type: 'button', 
                            'data-toggle': 'dropdown',
                            'data-target': 'avatar-menu-' + id,
                            'aria-label': 'Avatar com dropdown',
                            'aria-expanded': opened,
                            'data-visible': opened
                        }
                    }
                    className={classNames(
                        'br-avatar',
                        {'medium' : density === 'medium'},
                        {'large': density === 'large'},
                        className,
                        ...mtProps
                    )}
                    {...spreadProps}
                    
                >
                    {imageSrc && <span className="image"><img src={imageSrc} alt={alt} /></span>}
                    {icon && <span className="image"><i className={icon} aria-hidden="true"></i></span>}
                    {letter && !imageSrc && <span className={classNames('letter', 'text-pure-0', bgColor)}>{letter}</span>}
                    {dropdown && <i className={opened ? 'fas fa-caret-up' : 'fas fa-caret-down'} aria-hidden="true"></i>}
                    {!dropdown && children}
                </CustomTag>
                {dropdown && <Notification hidden={!opened} id={'avatar-menu-' + id}>
                    {children}
                </Notification>}
            </>
        );
    }
); 

Avatar.displayName = 'Avatar';

export default Avatar;