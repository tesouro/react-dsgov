import PropTypes from 'prop-types';
import classNames from 'classnames';
import React from 'react';
import Button from '../../Button/Button';

export interface BreadcrumbItemProps extends Omit<React.HTMLAttributes<HTMLLIElement>, 'onClick'> {
    href?: string,
    home?: boolean,
    target?: string,
    disabled?: boolean,
    onClick?: React.MouseEventHandler<HTMLAnchorElement> | React.MouseEventHandler<HTMLButtonElement>
}

const propTypes = {
    /**
     * Classe do item de breadcrumb.
     */
    className: PropTypes.string,

    /**
     * Se é ou não o primeiro item de breadcrumb.
     * Se for true, então o item de breadcrumb é meramente um ícone de "casinha".
     */
    home: PropTypes.bool,

    /**
     * O link do item de breadcrumb.
     */
    href: PropTypes.string,

    /**
     * O target do link do item de breadcrumb.
     */
    target: PropTypes.string
};


export const BreadcrumbItem = React.forwardRef<HTMLLIElement, BreadcrumbItemProps>(

    ({ home, href, target, children, className, onClick, ...props }, ref) => {

        return (
            <>
                {!home && <i className="icon fas fa-chevron-right"></i>}
                {home ?
                    (
                        <li className="crumb home">
                            <Button onClick={(event) => {
                                if(onClick) {
                                    (onClick as React.MouseEventHandler<HTMLButtonElement>)(event);
                                } else if(href) {
                                    window.location.href = href;
                                }
                            }} small circle icon='fas fa-home'></Button><span className="sr-only">{children}</span>
                        </li>
                    )
                    :
                    (
                        <li className={classNames('crumb', className)} ref={ref} {...props}>
                            {href && 
                                ( 
                                    <a onClick={(event) => {
                                        if(onClick) {
                                            (onClick as React.MouseEventHandler<HTMLAnchorElement>)(event);
                                        }
                                    }} href={href} target={target}>
                                        {children}
                                    </a>
                                )
                            }
                            {!href && 
                                (
                                    <span>
                                        {children}
                                    </span>
                                )
                            }
                        </li>
                    )
                }
            </>
            

        );
    }


); 

BreadcrumbItem.propTypes = propTypes;
BreadcrumbItem.displayName = 'BreadcrumbItem';

export default BreadcrumbItem;