import '@govbr-ds/core/dist/core.min.css';
import React from 'react';
import IMtProps from '../IMtProps';
import IMenuItem from './IMenuItem';
import IMenuLink from './IMenuLink';
import ISocialNetwork from './ISocialNetwork';
import IMenuLogo from './IMenuLogo';
export interface MenuProps extends React.HTMLAttributes<HTMLDivElement>, IMtProps {
    systemLogoUrl?: string;
    systemName?: string;
    data: IMenuItem[];
    logos?: IMenuLogo[];
    externalLinks?: IMenuLink[];
    socialNetworks?: ISocialNetwork[];
    info?: React.ReactNode;
    type?: 'normal' | 'push' | 'contextual';
    active?: boolean;
    shadow?: boolean;
    density?: 'small' | 'normal' | 'large';
}
export interface MenuRef extends HTMLDivElement {
    element: HTMLDivElement;
}
declare const Menu: React.ForwardRefExoticComponent<MenuProps & React.RefAttributes<MenuRef>>;
export default Menu;
