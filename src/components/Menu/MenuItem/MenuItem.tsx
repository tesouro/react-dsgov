/* eslint-disable no-script-url */
import classNames from 'classnames';
import React from 'react';
import IMtProps from '../../IMtProps';
import { useSpreadProps } from '../../Util/useSpreadProps';
import { useMtProps } from '../../Util/useMtProps';
import CustomTag from '../../CustomTag';
import IMenuItem from '../IMenuItem';
import uniqueId from 'lodash.uniqueid';
import useUniqueId from '../../Util/useUniqueId';

interface MenuItemProps  extends React.HTMLAttributes<HTMLDivElement>, IMtProps {
    label?: string;
    href?: string;
    icon?: string;
    submenu?: IMenuItem[]
    level?: number;
    divider?: boolean;
    expanded?: boolean;
} 

const MenuItem = React.forwardRef<HTMLDivElement, MenuItemProps>(
    ({className, children, id, label, level = 2, href, icon, submenu, divider = false, expanded = false, ...props}, ref) => {
        const fid = useUniqueId(id, 'menuitem_____');
        const mtProps = useMtProps(props);
        const spreadProps = useSpreadProps(props);

        return (
            <CustomTag 
                {...submenu && level === 2 && {tagName: 'div'}}
                className={classNames(
                    (submenu && 'menu-folder')
                )}
            >
                <CustomTag
                    ref={ref}
                    id={fid}
                    tagName={expanded ? 'div' : 'a'}
                    className={classNames(
                        'menu-item',
                        (divider && 'divider'),
                        className,
                        ...mtProps
                    )}
                    {...href && !expanded && {href: href}}
                    {...submenu && !expanded && {href: 'javascript:void(0)'}}
                    {...spreadProps}
                    
                >
                    <span className="icon">{icon && <i className={icon} aria-hidden="true"></i>}</span><span className="content">{label}</span>
                </CustomTag>

                {submenu &&
                    <ul>
                        {submenu.map((item, index) => (
                            <li key={index}>
                                <MenuItem 
                                    href={item.link}
                                    icon={item.icon}
                                    label={item.label}
                                    submenu={item.submenu}
                                    level={level + 1}
                                    divider={item.divider}
                                    expanded={item.expanded}
                                />
                            </li>
                        ))}
                    </ul>
                }
                {children}
            </CustomTag>
        );
    }
); 

MenuItem.displayName = 'MenuItem';

export default MenuItem;