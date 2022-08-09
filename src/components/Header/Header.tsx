import '@govbr-ds/core/dist/core.min.css';

import classNames from 'classnames';
import React, { useRef, useState } from 'react';
import IMtProps from '../IMtProps';
import { useSpreadProps } from '../Util/useSpreadProps';
import { useMtProps } from '../Util/useMtProps';
import Container from '../Container';
import Button from '../Button';
import Input from '../Input';
import uniqueId from 'lodash.uniqueid';
import useOutsideClick from '../Util/useOutsideClick';
import CustomTag from '../CustomTag';
import Avatar from '../Avatar';

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
    /** URL da imagem para o logo no header. */
    urlLogo: string,
    /** Nome do sistema. Aparece ao lado do logo. */
    systemName: string
    /** Título da página. */
    title: string,
    /** Subtítulo da página. */
    subTitle: string,
    /** Se é o header compacto ou não. */
    compact?: boolean,
    /** Densidade do header.
     * 
     * - small: pequena
     * - medium: normal
     * - large: grande.
     */
    density?: 'small' | 'medium' | 'large';
    /** Links de acesso rápido. */
    quickAccessLinks?: ILink[],
    /** Links de features. */
    features?: IFeature[],

    /** Se mostra ou não a barra de busca. */
    showSearchBar?: boolean,

    /** Evento disparado quando realiza uma busca pela barra de busca. */
    onSearch?: (terms: string) => void,

    /** Se mostra ou não o botão de login. */
    showLoginButton?: boolean,

    /** Se está logado ou não. */
    loggedIn?: boolean,

    /** Evento disparado ao clicar no botão de log-in. */
    onClickLogin?: () => void

    /** Avatar que é mostrado ao se logar. */
    avatar?: React.ReactElement
}

const Header = React.forwardRef<HTMLElement, HeaderProps>(
    ({ className, children, id = uniqueId('header_____'), urlLogo, systemName, title, subTitle, compact = false, density = 'medium', quickAccessLinks, features, loggedIn = false, showLoginButton = true, onClickLogin = () => {/** */}, showSearchBar = true, onSearch = () => {/** */}, avatar, ...props }, ref) => {
        const mtProps = useMtProps(props);
        const spreadProps = useSpreadProps(props);

        const [searchActive, setSearchActive] = useState<boolean>(false);

        const [searchTerm, setSearchTerm] = useState<string>('');

        const [quickAcessExpanded, setQuickAccessExpanded] = useState<boolean>(false);
        const [featuresExpanded, setFeaturesExpanded] = useState<boolean>(false);

        const refHeaderActions = useRef(null);
        const refButtonQuickAccess = useRef(null);
        const refButtonFeatures = useRef(null);

        const handleActivateSearch = () => {
            setSearchActive(true);
        };

        const handleInactivateSearch = () => {
            setSearchActive(false);
        };

        const handleClickQuickAcess = () => {
            setQuickAccessExpanded(!quickAcessExpanded);
        };

        const handleClickFeatures = () => {
            setFeaturesExpanded(!featuresExpanded);
        };
        
        useOutsideClick(refButtonQuickAccess, () => {
            setQuickAccessExpanded(false);
        });

        useOutsideClick(refButtonFeatures, () => {
            setFeaturesExpanded(false);
        });

        const handleSearchKeyDown = (event : React.KeyboardEvent<HTMLInputElement>) => {
            if(event.key === 'Enter') {
                onSearch(searchTerm);
            }
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
                        <div className="header-actions" ref={refHeaderActions}>
                            <div className={classNames('header-links', 'dropdown', { 'show': quickAcessExpanded })}>
                                <button ref={refButtonQuickAccess} onClick={handleClickQuickAcess} className={classNames('br-button', 'circle', 'small', { 'active': quickAcessExpanded })} type="button" data-toggle="dropdown" aria-label="Abrir Acesso Rápido"><i className="fas fa-ellipsis-v" aria-hidden="true"></i>
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
                            {quickAccessLinks && features && <span className="br-divider vertical mx-half mx-sm-1"></span>}
                            <div className={classNames('header-functions', 'dropdown', { 'show': featuresExpanded })}>
                                <button ref={refButtonFeatures} onClick={handleClickFeatures} className={classNames('br-button', 'circle', 'small', { 'active': featuresExpanded })} type="button" data-toggle="dropdown" aria-label="Abrir Funcionalidades do Sistema"><i className="fas fa-th" aria-hidden="true"></i>
                                </button>
                                <div className="br-list">
                                    <div className="header">
                                        <div className="title">Funcionalidades do Sistema</div>
                                    </div>
                                    {features?.map((feature, index) =>
                                        <div key={index} className="align-items-center br-item">
                                            <CustomTag tagName={feature.href && 'a'} href={feature.href}>
                                                <button onClick={feature.onClick} className="br-button circle small" type="button" aria-label={feature.label}><i className={feature.icon} aria-hidden="true"></i><span className="text">{feature.label}</span>
                                                </button>
                                            </CustomTag>
                                        </div>
                                    )}
                                </div>
                            </div>
                            {showSearchBar && <div className="header-search-trigger">
                                <button
                                    className="br-button circle"
                                    type="button"
                                    aria-label="Abrir Busca"
                                    data-toggle="search"
                                    data-target=".header-search"
                                    onClick={(handleActivateSearch)}
                                ><i className="fas fa-search" aria-hidden="true"></i>
                                </button>
                            </div>}
                            {showLoginButton && <div className="header-login">
                                <div className={classNames(
                                    'header-sign-in',
                                    {'d-none' : loggedIn}
                                )}>
                                    <button onClick={onClickLogin} className="br-sign-in small" type="button" data-trigger="login"><i className="fas fa-user" aria-hidden="true"></i><span className="d-sm-inline">Entrar</span>
                                    </button>
                                </div>
                                <div className={
                                    classNames(
                                        {'d-none' : !loggedIn}
                                    )
                                }>
                                    {avatar}
                                </div>
                                
                            </div>}
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
                        {showSearchBar && <div className={classNames(
                            'header-search',
                            { 'active': searchActive }
                        )}>
                            <div className="br-input has-icon">
                                <label htmlFor={`searchbox-${id}`}>Texto da pesquisa</label>
                                <input 
                                    id={`searchbox-${id}`} 
                                    type="text" 
                                    placeholder="O que você procura?" 
                                    value={searchTerm} 
                                    onChange={(event) => setSearchTerm(event.target.value)} 
                                    onKeyDown={handleSearchKeyDown}
                                />
                                <button 
                                    className="br-button circle small" 
                                    type="button" 
                                    aria-label="Pesquisar"
                                    onClick={() => onSearch(searchTerm)}
                                >
                                    <i className="fas fa-search" aria-hidden="true"></i>
                                </button>
                            </div>
                            <Button onClick={handleInactivateSearch} circle icon="fas fa-times" className="search-close" type="button" aria-label="Fechar Busca" data-dismiss="search" />
                        </div>}

                    </div>

                </Container>
                {children}
            </header>
        );
    }
);

Header.displayName = 'Header';

export default Header;