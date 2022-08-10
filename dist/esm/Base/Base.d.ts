import '@govbr-ds/core/dist/core.min.css';
import React from 'react';
import IMtProps from '../IMtProps';
export interface BaseProps extends React.HTMLAttributes<HTMLDivElement>, IMtProps {
}
declare const Base: React.ForwardRefExoticComponent<BaseProps & React.RefAttributes<HTMLDivElement>>;
export default Base;
