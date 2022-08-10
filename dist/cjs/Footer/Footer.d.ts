import '@govbr-ds/core/dist/core.min.css';
import React from 'react';
import IMtProps from '../IMtProps';
export interface ICategory {
    category: string;
    size?: number;
    items: IItem[];
}
export interface IItem {
    label: string;
    link: string;
}
export interface ISocialNetwork {
    icon: string;
    link: string;
    name: string;
}
export interface IFooterImage {
    url: string;
    link: string;
    name: string;
}
export interface FooterProps extends React.HTMLAttributes<HTMLElement>, IMtProps {
    /** URL da Logo */
    urlLogo: string;
    /** Links do footer */
    links?: ICategory[];
    /** Redes sociais do footer. */
    socialNetworks?: ISocialNetwork[];
    /** Texto ao fim do footer, sobre a licença ou termos de uso. */
    userLicenseText?: string | React.ReactElement;
    /** Imagens no fim do footer. */
    footerImages?: IFooterImage[];
    /** Tema invertido */
    inverted?: boolean;
}
declare const Footer: React.ForwardRefExoticComponent<FooterProps & React.RefAttributes<HTMLElement>>;
export default Footer;
