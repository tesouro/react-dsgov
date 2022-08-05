import classNames from 'classnames';
import React, { useState } from 'react';
import IMtProps from '../IMtProps';
import { useSpreadProps } from '../Util/useSpreadProps';
import { useMtProps } from '../Util/useMtProps';
import Container from '../Container';
import Button from '../Button';
import Input from '../Input';
import uniqueId from 'lodash.uniqueid';

export interface ILink {
    label: string,
    href: string
}

export interface IFeature {
    label: string,
    icon: string,
    href?: string,
    onClick?: () => void
}

export interface HeaderProps extends React.HTMLAttributes<HTMLElement>, IMtProps {
    urlLogo: string,
    systemName: string
    title: string,
    subTitle: string,
    compact?: boolean,
    density?: 'small' | 'medium' | 'large';
    quickAccessLinks?: ILink[],
    features?: IFeature[]
}

const Header = React.forwardRef<HTMLElement, HeaderProps>(
    ({ className, children, id = uniqueId('header_____'), urlLogo, systemName, title, subTitle, compact = false, density = 'medium', quickAccessLinks, features, ...props }, ref) => {
        const mtProps = useMtProps(props);
        const spreadProps = useSpreadProps(props);

        const [searchActive, setSearchActive] = useState<boolean>(false);

        const handleActivateSearch = () => {
            setSearchActive(true);
        };

        const handleInactivateSearch = () => {
            setSearchActive(false);
        };

        return (
            <header
                ref={ref}
                id={id}
                className={classNames(
                    'br-header',
                    { 'compact': compact },
                    { 'small': density === 'small' },
                    { 'large': density === 'large' },
                    className,
                    ...mtProps
                )}

                {...spreadProps}

            >
                <Container lg>
                    <div className="header-top">
                        <div className="header-logo">
                            <img src={urlLogo} alt="" />
                            <span className="br-divider vertical mx-half mx-sm-1"></span>
                            <div className="header-sign">{systemName}</div>
                        </div>
                        <div className="header-actions">
                            <div className="header-links dropdown">
                                <button className="br-button circle small" type="button" data-toggle="dropdown" aria-label="Abrir Acesso Rápido"><i className="fas fa-ellipsis-v" aria-hidden="true"></i>
                                </button>
                                <div className="br-list">
                                    <div className="header">
                                        <div className="title">Acesso Rápido</div>
                                    </div>
                                    {quickAccessLinks?.map((link, index) => 
                                        <a key={index} className="br-item" href={link.href}>{link.label}</a>
                                    )}
                                </div>
                            </div>
                            <span className="br-divider vertical mx-half mx-sm-1"></span>
                            <div className="header-functions dropdown">
                                <button className="br-button circle small" type="button" data-toggle="dropdown" aria-label="Abrir Funcionalidades do Sistema"><i className="fas fa-th" aria-hidden="true"></i>
                                </button>
                                <div className="br-list">
                                    <div className="header">
                                        <div className="title">Funcionalidades do Sistema</div>
                                    </div>
                                    {features?.map((feature, index) =>
                                        <div key={index} className="align-items-center br-item">
                                            <button onClick={feature.onClick} className="br-button circle small" type="button" aria-label={feature.label}><i className={feature.icon} aria-hidden="true"></i><span className="text">{feature.label}</span>
                                            </button>
                                        </div>
                                    )}
                                    
                                    <div className="align-items-center br-item">
                                        <button className="br-button circle small" type="button" aria-label="Funcionalidade 2"><i className="fas fa-headset" aria-hidden="true"></i><span className="text">Funcionalidade 2</span>
                                        </button>
                                    </div>
                                    <div className="align-items-center br-item">
                                        <button className="br-button circle small" type="button" aria-label="Funcionalidade 3"><i className="fas fa-comment" aria-hidden="true"></i><span className="text">Funcionalidade 3</span>
                                        </button>
                                    </div>
                                    <div className="align-items-center br-item">
                                        <button className="br-button circle small" type="button" aria-label="Funcionalidade 4"><i className="fas fa-adjust" aria-hidden="true"></i><span className="text">Funcionalidade 4</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="header-search-trigger">
                                <button
                                    className="br-button circle"
                                    type="button"
                                    aria-label="Abrir Busca"
                                    data-toggle="search"
                                    data-target=".header-search"
                                    onClick={handleActivateSearch}
                                ><i className="fas fa-search" aria-hidden="true"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="header-bottom">
                        <div className="header-menu">
                            <div className="header-menu-trigger">
                                <Button icon="fas fa-bars" small circle type="button" aria-label="Menu" data-toggle="menu" data-target="#main-navigation" id="navigation" />
                            </div>
                            <div className="header-info">
                                <div className="header-title">{title}</div>
                                <div className="header-subtitle">{subTitle}</div>
                            </div>
                        </div>
                        <div className={classNames(
                            'header-search',
                            { 'active': searchActive }
                        )}>
                            <div className="br-input has-icon">
                                <label htmlFor={`searchbox-${id}`}>Texto da pesquisa</label>
                                <input id={`searchbox-${id}`} type="text" placeholder="O que você procura?" />
                                <button className="br-button circle small" type="button" aria-label="Pesquisar"><i className="fas fa-search" aria-hidden="true"></i>
                                </button>
                            </div>
                            <Button onClick={handleInactivateSearch} circle icon="fas fa-times" className="search-close" type="button" aria-label="Fechar Busca" data-dismiss="search" />
                        </div>

                    </div>

                </Container>
                {children}
            </header>
        );
    }
);

Header.displayName = 'Header';

export default Header;