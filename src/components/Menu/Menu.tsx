import '@govbr-ds/core/dist/components/menu/menu.min.css';

import classNames from 'classnames';
import React, { useEffect, useImperativeHandle, useRef } from 'react';
import IMtProps from '../IMtProps';
import { useSpreadProps } from '../Util/useSpreadProps';
import { useMtProps } from '../Util/useMtProps';
import IMenuItem from './IMenuItem';
import MenuItem from './MenuItem';
import uniqueId from 'lodash.uniqueid';
import IMenuLink from './IMenuLink';
import ISocialNetwork from './ISocialNetwork';
import IMenuLogo from './IMenuLogo';
import useCommonProperties from '../Util/useCommonProperties';
import useUniqueId from '../Util/useUniqueId';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const BRMenu = require('@govbr-ds/core/dist/components/menu/menu.js').default;

export interface MenuProps extends React.HTMLAttributes<HTMLDivElement>, IMtProps {
    systemLogoUrl?: string,
    systemName?: string,
    data: IMenuItem[]
    logos?: IMenuLogo[]
    externalLinks?: IMenuLink[]
    socialNetworks?: ISocialNetwork[]
    info?: React.ReactNode,
    type?: 'normal' | 'push' | 'contextual',
    active?: boolean,
    shadow?: boolean,
    density?: 'small' | 'normal' | 'large'
}

export interface MenuRef extends HTMLDivElement {
    element: HTMLDivElement
}

const Menu = React.forwardRef<MenuRef, MenuProps>(
    ({ className, children, id, data, logos, externalLinks, socialNetworks, info, systemLogoUrl, systemName, type = 'normal', density = 'normal', active, shadow, ...props }, ref) => {
        const fid = useUniqueId(id, 'menu_____');
        const mtProps = useMtProps(props);
        const spreadProps = useSpreadProps(props);

        const refElemento = useRef();
        const refDiv = useRef<HTMLDivElement>(null);

        useCommonProperties<MenuRef>(ref, refDiv, {
            get element() {
                return refDiv.current;
            }
        });

        useEffect(() => {
            if (refDiv.current && !refElemento.current) {
                refElemento.current = new BRMenu('br-menu', refDiv.current);
            }
        }, []);


        return (
            <div
                ref={refDiv}
                id={fid}
                className={classNames(
                    'br-menu',
                    (type === 'push' && 'push'),
                    (type === 'contextual' && 'contextual'),
                    (density === 'small' && 'small'),
                    (density === 'large' && 'large'),
                    (active && 'active'),
                    className,
                    ...mtProps
                )}
                {...spreadProps}

            >
                <div className={classNames(
                    'menu-container'
                )}>
                    <div className={classNames(
                        'menu-panel',
                        (shadow && 'h-auto position-static shadow-lg-right')
                    )}>
                        {(systemLogoUrl || systemName) && <div className="menu-header">
                            <div className="menu-title">
                                {systemLogoUrl && <img src={systemLogoUrl} alt={`Logo do sistema ${systemLogoUrl}`} />}{systemName && <span>{systemName}</span>}
                            </div>
                            <div className="menu-close">
                                <button className="br-button circle" type="button" aria-label="Fechar o menu" data-dismiss="menu">
                                    <i className="fas fa-times" aria-hidden="true"></i>
                                </button>
                            </div>
                        </div>}
                        <div className="menu-body">
                            {data &&
                                <>
                                    {data.map((item, index) => (
                                        <MenuItem
                                            key={index}
                                            href={item.link}
                                            icon={item.icon}
                                            label={item.label}
                                            submenu={item.submenu}
                                            level={2}
                                            divider={item.divider}
                                            expanded={item.expanded}
                                        />
                                    ))}
                                </>
                            }
                        </div>
                        <div className="menu-footer">
                            {logos && <div className="menu-logos">
                                {logos.map((logo, index) => (
                                    <img key={index} src={logo.src} alt={logo.alt} />
                                ))}
                            </div>}
                            {externalLinks && <div className="menu-links">
                                {externalLinks.map((externalLink, index) => (
                                    <a key={index} href={externalLink.link}>
                                        <span className="mr-1">{externalLink.label}</span>
                                        <i className="fas fa-external-link-square-alt" aria-hidden="true"></i>
                                    </a>
                                ))}
                            </div>}
                            {socialNetworks && <div className="menu-social">
                                <div className="text-semi-bold mb-1">Redes Sociais</div>
                                <div className="sharegroup">
                                    {socialNetworks.map((socialNetwork, index) => (
                                        <div key={index} className="share">
                                            <a className="br-button circle" href={socialNetwork.link} aria-label={`Compartilhar por ${socialNetwork.name}`}>
                                                <i className={socialNetwork.icon} aria-hidden="true"></i>
                                            </a>
                                        </div>
                                    ))}
                                </div>
                            </div>}
                            {info && <div className="menu-info">
                                {info}
                            </div>}

                        </div>
                    </div>
                </div>
                {children}
            </div>
        );
    }
);

Menu.displayName = 'Menu';

export default Menu;