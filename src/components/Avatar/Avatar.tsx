import '@govbr-ds/core/dist/components/avatar/avatar.min.css';

import classNames from 'classnames';
import React, { memo, useCallback, useEffect, useImperativeHandle, useRef, useState } from 'react';
import IMtProps from '../IMtProps';
import { useSpreadProps } from '../Util/useSpreadProps';
import { useMtProps } from '../Util/useMtProps';
import CustomTag from '../CustomTag';
import uniqueId from 'lodash.uniqueid';
import Notification from '../Notification';
import useOutsideClick from '../Util/useOutsideClick';
import useCommonProperties from '../Util/useCommonProperties';
import useUniqueId from '../Util/useUniqueId';

export interface AvatarProps extends React.HTMLAttributes<HTMLElement>, IMtProps {
    /** Título do avatar. */
    title?: string;
    /** Imagem do avatar. */
    imageSrc?: string;
    /** Classe contendo ícone fontawesome do avatar. */
    icon?: string;
    /** Avatar em formato de letra. */
    letter?: string;
    /** Campo "alt" do avatar, caso seja uma imagem. */
    alt?: string;
    /** Densidade.
     * 
     * - small: pequena
     * - medium: média
     * - large: grande
     */
    density?: 'small' | 'medium' | 'large'
    /** Se o avatar é dropdown */
    dropdown?: boolean
    /** Cor dsgov, se for do uma letra. Pode ser também no formato hexadecimal. */
    bgColor?: string
    /** Cor do ícone. Pode ser também no formato hexadecimal. */
    iconColor?: string
}

export interface AvatarRef extends HTMLElement {
    focus: () => void,
    expand: () => void,
    close: () => void,
    element: HTMLElement
}

const Avatar = React.forwardRef<AvatarRef, AvatarProps>(
    ({ className, children, id, title, imageSrc, alt = 'Avatar', density = 'small', letter, dropdown = false, icon, bgColor, iconColor, ...props }, ref) => {
        const fid = useUniqueId(id, 'avatar_____');
        const mtProps = useMtProps(props);
        const spreadProps = useSpreadProps(props);

        const refContainer = useRef<HTMLElement>(null);

        const [opened, setOpened] = useState<boolean>(false);

        let bgStyleProps = {};
        let iconStyleProps = {};

        useOutsideClick(refContainer, () => {
            setOpened(false);
        });

        const handleOpenClose = useCallback(() => {
            setOpened(!opened);
        }, []);

        useCommonProperties<AvatarRef>(ref, refContainer, {
            expand: () => setOpened(true),
            close: () => setOpened(false),
            get element() {
                return refContainer.current;
            }
        });

        if (bgColor?.charAt(0) === '#') {
            bgStyleProps = { ...bgStyleProps, style: { backgroundColor: bgColor } };
        }

        if (iconColor?.charAt(0) === '#') {
            iconStyleProps = { ...iconStyleProps, style: { color: iconColor } };
        }

        return (
            <>
                <CustomTag
                    tagName={dropdown ? 'button' : 'span'}
                    ref={refContainer}
                    id={fid}
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
                        { 'medium': density === 'medium' },
                        { 'large': density === 'large' },
                        className,
                        ...mtProps
                    )}
                    {...spreadProps}

                >
                    {imageSrc && <span {...bgStyleProps} className={classNames('image', (bgColor?.charAt(0) !== '#' && bgColor))}><img src={imageSrc} alt={alt} /></span>}
                    {icon && <span {...bgStyleProps} className={classNames('image', (bgColor?.charAt(0) !== '#' && bgColor))}><i {...iconStyleProps} className={classNames(icon, (iconColor?.charAt(0) !== '#' && iconColor))} aria-hidden="true"></i></span>}
                    {letter && !imageSrc && <span {...bgStyleProps} className={classNames('letter', 'text-pure-0', (bgColor?.charAt(0) !== '#' && bgColor))}>{letter}</span>}
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

export default memo(Avatar);