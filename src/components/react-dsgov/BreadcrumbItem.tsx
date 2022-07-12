import classNames from "classnames";
import React from "react";

export interface BreadcrumbItemProps extends React.HTMLAttributes<HTMLLIElement> {
    href?: string,
    home?: boolean,
    target?: string,
    disabled?: boolean
}

export const BreadcrumbItem = React.forwardRef<HTMLLIElement, BreadcrumbItemProps>(
    ({ home, href, target, children, className, ...props }, ref) => {
        return (
            <>
                {!home && <i className="icon fas fa-chevron-right"></i>}
                {home ?
                    (
                        <li className="crumb home">
                            <div className="br-button circle"><span className="sr-only">{children}</span><i className="icon fas fa-home"></i></div>
                        </li>
                    )
                    :
                    (
                        <li className={classNames("crumb", className)} ref={ref} {...props}>
                            {href ? 
                            ( 
                                <a href={href} target={target}>
                                    {children}
                                </a>
                            )
                            :
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
) 

export default BreadcrumbItem;