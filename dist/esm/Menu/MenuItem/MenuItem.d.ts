import '@govbr-ds/core/dist/core.min.css';
import React from 'react';
import IMtProps from '../../IMtProps';
import IMenuItem from '../IMenuItem';
interface MenuItemProps extends React.HTMLAttributes<HTMLDivElement>, IMtProps {
    label?: string;
    href?: string;
    icon?: string;
    submenu?: IMenuItem[];
    level?: number;
    divider?: boolean;
    expanded?: boolean;
}
declare const MenuItem: React.ForwardRefExoticComponent<MenuItemProps & React.RefAttributes<HTMLDivElement>>;
export default MenuItem;
