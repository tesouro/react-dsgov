import React from 'react';
import IMtProps from '../../IMtProps';
export interface TabContentProps extends React.HTMLAttributes<HTMLDivElement>, IMtProps {
    title?: string;
    subTitle?: string;
    active?: boolean;
    icon?: string;
    onlyIcon?: boolean;
}
declare const TabContent: React.ForwardRefExoticComponent<TabContentProps & React.RefAttributes<HTMLDivElement>>;
export default TabContent;
