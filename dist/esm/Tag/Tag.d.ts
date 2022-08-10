import '@govbr-ds/core/dist/core.min.css';
import React from 'react';
import IMtProps from '../IMtProps';
export interface TagProps extends React.HTMLAttributes<HTMLDivElement>, IMtProps {
    /**  */
    type: 'text' | 'checkbox' | 'radio' | 'status' | 'count' | 'icon';
    label?: string;
    icon?: string;
    density?: 'small' | 'normal' | 'large';
    status?: 'danger' | 'success' | 'warning' | 'info';
    defaultChecked?: boolean;
    checked?: boolean;
    name?: string;
    value?: string;
}
declare const Tag: React.ForwardRefExoticComponent<TagProps & React.RefAttributes<HTMLDivElement>>;
export default Tag;
