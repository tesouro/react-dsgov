import '@govbr-ds/core/dist/components/footer/footer.min.css';

import classNames from 'classnames';
import React from 'react';
import IMtProps from '../IMtProps';
import { useSpreadProps } from '../Util/useSpreadProps';
import { useMtProps } from '../Util/useMtProps';
import List from '../List';
import Col from '../Col';
import Item from '../Item';
import Divider from '../Divider';
import Row from '../Row';
import Container from '../Container';
import CustomTag from '../CustomTag';

export interface ICategory {
    category: string,
    size?: number,
    items: IItem[]
}

export interface IItem {
    label: string,
    link: string
}

export interface ISocialNetwork {
    icon: string,
    link: string,
    name: string
}

export interface IFooterImage {
    url: string,
    link: string,
    name: string
}

export interface FooterProps extends React.HTMLAttributes<HTMLElement>, IMtProps {
    /** URL da Logo */
    urlLogo: string
    /** Links do footer */
    links?: ICategory[],
    /** Redes sociais do footer. */
    socialNetworks?: ISocialNetwork[],
    /** Texto ao fim do footer, sobre a licença ou termos de uso. */
    userLicenseText?: string | React.ReactElement,
    /** Imagens no fim do footer. */
    footerImages?: IFooterImage[]
    /** Tema invertido */
    inverted?: boolean
}

const Footer = React.forwardRef<HTMLElement, FooterProps>(
    ({ className, children, urlLogo, links, socialNetworks, userLicenseText, footerImages, inverted = false, ...props }, ref) => {
        const mtProps = useMtProps(props);
        const spreadProps = useSpreadProps(props);

        return (
            <footer
                ref={ref}
                className={classNames(
                    'br-footer',
                    {'inverted' : inverted},
                    className,
                    ...mtProps
                )}
                {...spreadProps}

            >
                <Container lg>
                    <div className="logo"><img src={urlLogo} alt="Logo" /></div>
                    {links &&
                        <List horizontal>
                            {links.map((link, index) =>
                                <Col key={index} size={link.size || 2}>
                                    <Item link="javascript:void(0);">
                                        <div className="content text-down-01 text-bold text-uppercase">{link.category}</div>
                                        <div className="support"><i className="fas fa-angle-down" aria-hidden="true"></i></div>
                                    </Item>
                                    <List>
                                        <Divider className="d-md-none" />
                                        {link.items.map((item, index) =>
                                            <Item key={index} link={item.link}>
                                                {item.label}
                                            </Item>
                                        )}
                                    </List>
                                </Col>
                            )}

                        </List>
                    }
                    <div className="d-none d-sm-block">
                        <Row className="align-items-end justify-content-between" py={5}>
                            <Col className="social-network">
                                {socialNetworks && <p className="text-up-01 text-extra-bold text-uppercase">Redes Sociais</p>}
                                {socialNetworks?.map((socialNetwork, index) =>
                                    <a key={index} href={socialNetwork.link} className="mr-3" aria-label={`Rede Social ${socialNetwork.name}`}>
                                        <i className={classNames(socialNetwork.icon, 'fa-2x')}></i>
                                    </a>
                                )}

                            </Col>
                            {footerImages && <Col className='assigns text-right'>
                                {footerImages?.map((footerImage, index) =>
                                    <CustomTag key={index} tagName={footerImage.link ? 'a' : 'div'} href={footerImage.link}>
                                        <img className="ml-4" src={footerImage.url} alt={footerImage.name} />
                                    </CustomTag>

                                )}

                                <img className="ml-4" src="" alt="Imagem" />
                            </Col>}

                        </Row>
                    </div>


                </Container>
                {userLicenseText && <>
                    <Divider my={3} />
                    <Container lg>
                        <div className="info">
                            <div className="text-down-01 text-medium pb-3">{userLicenseText}</div>
                        </div>
                    </Container>
                </>}
                {children}
            </footer>
        );
    }
);

Footer.displayName = 'Footer';

export default Footer;