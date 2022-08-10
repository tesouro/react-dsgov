import '@govbr-ds/core/dist/core.min.css';
import React from 'react';
import IMtProps from '../IMtProps';
export interface ILink {
    label: string;
    href: string;
}
export interface IFeature {
    label: string;
    icon: string;
    href?: string;
    onClick?: () => void;
}
export interface HeaderProps extends React.HTMLAttributes<HTMLElement>, IMtProps {
    /** URL da imagem para o logo no header. */
    urlLogo: string;
    /** Nome do sistema. Aparece ao lado do logo. */
    systemName: string;
    /** Título da página. */
    title: string;
    /** Subtítulo da página. */
    subTitle: string;
    /** Se é o header compacto ou não. */
    compact?: boolean;
    /** Densidade do header.
     *
     * - small: pequena
     * - medium: normal
     * - large: grande.
     */
    density?: 'small' | 'medium' | 'large';
    /** Links de acesso rápido. */
    quickAccessLinks?: ILink[];
    /** Links de features. */
    features?: IFeature[];
    /** Se mostra ou não a barra de busca. */
    showSearchBar?: boolean;
    /** Evento disparado quando realiza uma busca pela barra de busca. */
    onSearch?: (terms: string) => void;
    /** Se mostra ou não o botão de login. */
    showLoginButton?: boolean;
    /** Se está logado ou não. */
    loggedIn?: boolean;
    /** Evento disparado ao clicar no botão de log-in. */
    onClickLogin?: () => void;
    /** Avatar que é mostrado ao se logar. */
    avatar?: React.ReactElement;
}
declare const Header: React.ForwardRefExoticComponent<HeaderProps & React.RefAttributes<HTMLElement>>;
export default Header;
