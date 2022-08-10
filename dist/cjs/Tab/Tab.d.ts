import '@govbr-ds/core/dist/core.min.css';
import React from 'react';
import IMtProps from '../IMtProps';
interface TabProps extends React.HTMLAttributes<HTMLDivElement>, IMtProps {
    /** */
    initial?: number;
    inverted?: boolean;
    density?: 'small' | 'medium' | 'large';
}
declare const _default: React.ForwardRefExoticComponent<TabProps & React.RefAttributes<HTMLDivElement>> & {
    Content: React.ForwardRefExoticComponent<import("./TabContent/TabContent").TabContentProps & React.RefAttributes<HTMLDivElement>>;
};
export default _default;
